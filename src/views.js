import { L } from './i18n.js';
import * as UI from './ui.js';
import { buzz, dayKey, addDays, keyLabel, daysBetween, shortDate, formatKDate, josa, MONTHS_EN } from './common.js';
import { list, add, refresh, lockInfo, savedCode, setFamilyCode } from './store.js';
import {
  members, member, memberName, me, meId, isGuest, setMe, villageName, sinceDays, birthdaysOn, upcoming, monthEvents, ddayText,
  questionOn, answersOn, myAnswer, recentQuestions, heartsTo, heartsToday, sentHeartToday, visitorsOn, myStamps, treeInfo, STAGE_NAMES,
  unreadForMe, polls, votesFor, PALETTE, HAIRS, SKINS, isLockedLetter, callName, inDays, andList,
} from './family.js';
import { HAIR_STYLES } from './character.js';
import { sound } from './sound.js';

/* =========================================================
   Family feature screens (shared by the popups and the 'Text view')
   🏡 Our family · 👤 a member's house · 💬 question of the day · 📅 calendar · 🗳️ polls · 🌱 tree · 🎨 customizing · 🙋 who am I · 📸 who is in the photo
   ========================================================= */
const { esc, avatarHTML, toast, confetti, onData, openView, closeModal, replyView, paintStatus } = UI;
const W = window.FAMILY;
const fire = (name, detail) => { try { dispatchEvent(new CustomEvent(name, { detail })); } catch {} };
const mmdd = md => { const [m, d] = String(md).split('-').map(Number); return L(`${m}월 ${d}일`, `${MONTHS_EN[m - 1]} ${d}`); };
const MONTHS_LONG = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;
const bdDday = md => { const t = dayKey(); let k = `${t.slice(0, 4)}-${md}`; if (k < t) k = `${+t.slice(0, 4) + 1}-${md}`; return daysBetween(t, k); };

/* Links used by buttons that lead to other screens (filled in by main.js: planting a flower after a letter is sent, etc.) */
export const hooks = { onSent: null, takePhoto: null };

/* ---------- 🏡 Our family ---------- */
export function familyView({ hero = true } = {}) {
  const mount = root => {
    const box = root.querySelector('.fam-box');
    const render = () => {
      if (!box.isConnected) return;
      const vs = visitorsOn(), days = sinceDays(), ups = upcoming(3), bd = birthdaysOn();
      box.innerHTML = `
        ${hero ? `<div class="inv-hero">
          <div class="en">FAMILY VILLAGE</div>
          <div class="names">${esc(villageName())}</div>
          ${days > 0 ? `<div class="muted">${L(`함께한 지 <b style="color:var(--rose-deep)">${days.toLocaleString(L('ko-KR', 'en-US'))}일째</b>`, `Together for <b style="color:var(--rose-deep)">${days.toLocaleString(L('ko-KR', 'en-US'))} days</b>`)}</div>` : ''}
        </div>` : ''}
        ${bd.length ? `<div class="bday-banner">${L(`🎂 오늘은 <b>${bd.map(m => esc(m.nick || m.role || m.name)).join(', ')}</b> 생일이에요!`, `🎂 Happy birthday, <b>${andList(bd.map(m => esc(m.nick || m.role || m.name)))}</b>!`)} <button class="btn small pink f-bday" type="button">${L('축하 편지 쓰기', 'Write a birthday letter')}</button></div>` : ''}
        ${W.greeting ? `<p class="inv-greet">${esc(W.greeting)}</p>` : ''}
        <div class="card">
          <b>${L('👣 오늘 다녀간 가족', '👣 Family who stopped by today')}</b>
          <div class="chips-row">${vs.length ? vs.map(m => `<span class="who-chip" style="--c:${esc(m.look.outfit)}">${esc(m.nick || m.role || m.name)}</span>`).join('') : `<span class="muted">${L('아직 아무도 안 왔어요', 'No one yet')}</span>`}</div>
          ${me() ? `<p class="muted" style="margin:8px 0 0">${L(`내 출석 도장 <b>${myStamps()}개</b> 🐾`, `My visit stamps: <b>${myStamps()}</b> 🐾`)}</p>` : ''}
        </div>
        <div class="mem-grid">
          ${members().map(m => `
            <button type="button" class="mem-card" data-id="${esc(m.id)}">
              ${avatarHTML(m.look)}
              <b>${esc(m.nick || m.role || m.name)}${m.id === meId() ? L(' <small>(나)</small>', ' <small>(me)</small>') : ''}</b>
              <small>${esc(m.name)}${m.birthday ? ` · 🎂 ${mmdd(m.birthday)}` : ''}</small>
              <span class="mem-heart">💗 ${heartsTo(m.id).length}</span>
            </button>`).join('')}
        </div>
        ${ups.length ? `<div class="card"><b>${L('📅 다가오는 날', '📅 Coming up')}</b>${ups.map(e => `<div class="up-row"><span>${e.emoji || '📌'} ${esc(e.title)}</span><span class="dd">${ddayText(e.dday)}</span></div>`).join('')}
          <button class="btn small f-cal" type="button" style="margin-top:8px">${L('달력 보기', 'Open the calendar')}</button></div>` : ''}
        <div class="btns">
          <button class="btn pink f-q" type="button">${L('💬 오늘의 질문', '💬 Question of the day')}</button>
          <button class="btn f-mail" type="button">${L('✉️ 편지 쓰기', '✉️ Write a letter')}</button>
          <button class="btn f-share" type="button">${L('🔗 마을 주소 보내기', '🔗 Share the village link')}</button>
        </div>
        <p class="muted l-status" role="status" hidden></p>`;
      box.querySelectorAll('.mem-card').forEach(b => b.onclick = () => { buzz(8); showMember(b.dataset.id); });
      box.querySelector('.f-q').onclick = () => showQuestion();
      box.querySelector('.f-mail').onclick = () => UI.showMailbox(hooks.onSent);
      box.querySelector('.f-share').onclick = UI.share;
      box.querySelector('.f-cal')?.addEventListener('click', () => showCalendar());
      box.querySelector('.f-bday')?.addEventListener('click', () => UI.showMailbox(hooks.onSent, { to: bd.find(m => m.id !== meId())?.id || bd[0].id }));
      paintStatus(box.querySelector('.l-status'));
    };
    render();
    refresh();
    return onData(render);
  };
  return { html: '<div class="fam-box"></div>', mount };
}
export function showFamily() { openView(villageName(), familyView()); }

/* ---------- 👤 A member's house: profile · hearts · letters · contact ---------- */
export function sendHeart(to) {
  if (!me()) { toast(L('하트는 가족만 보낼 수 있어요', 'Only family members can send hearts')); return false; }
  if (to === meId()) { toast(L('나에게는 하트를 보낼 수 없어요 😆', "You can't send a heart to yourself 😆")); return false; }
  if (sentHeartToday(to)) { toast(L(`오늘은 이미 ${callName(to)}에게 하트를 보냈어요 💗`, `You already sent ${callName(to)} a heart today 💗`)); return false; }
  const day = dayKey();
  add('hearts', { id: `${meId()}-${to}-${day}`, who: meId(), to, day });
  fire('family:heart', { to });
  buzz(15); sound.sfx('heart');
  toast(L(`💗 ${callName(to)}에게 하트를 보냈어요`, `💗 Heart sent to ${callName(to)}`));
  return true;
}
export function memberView(id) {
  const mount = root => {
    const box = root.querySelector('.mem-box');
    const render = () => {
      const m = member(id);
      if (!m || !box.isConnected) return;
      const mine = m.id === meId(), today = dayKey();
      const bday = m.birthday ? bdDday(m.birthday) : null;
      const ans = answersOn(today).find(a => a.who === m.id);
      const q = questionOn();
      const canSee = !!myAnswer(today) || mine;
      const fromThem = list('letters').filter(l => l.who === m.id && !isLockedLetter(l)).slice(0, 2);
      const unread = mine ? unreadForMe().length : 0;
      box.innerHTML = `
        <div class="mem-hero" style="--c:${esc(m.look.outfit)}">
          ${avatarHTML(m.look, 'big')}
          <div class="names">${esc(m.name)}</div>
          <div class="muted">${esc(m.role || '')}${m.birthday ? ` · 🎂 ${mmdd(m.birthday)}${bday === 0 ? ` <b style="color:var(--rose-deep)">${L('오늘!', 'Today')}</b>` : L(` (D-${bday})`, ` (${inDays(bday).toLowerCase()})`)}` : ''}</div>
          ${m.line ? `<p class="mem-line">“${esc(m.line)}”</p>` : ''}
        </div>
        ${bday === 0 ? `<div class="bday-banner">${L(`🎂 오늘은 ${esc(m.nick || m.role || m.name)} 생일이에요!`, `🎂 Happy birthday, ${esc(m.nick || m.role || m.name)}!`)}</div>` : ''}
        <div class="stat-row">
          <div><b>💗 ${heartsTo(m.id).length}</b><small>${L(`받은 하트 (오늘 ${heartsToday(m.id).length})`, `Hearts received (${heartsToday(m.id).length} today)`)}</small></div>
          <div><b>👣 ${new Set(list('visits').filter(v => v.who === m.id).map(v => v.day)).size}</b><small>${L('출석 도장', 'Visit stamps')}</small></div>
          <div><b>💧 ${list('water').filter(w => w.who === m.id).length}</b><small>${L('나무에 준 물', 'Tree waterings')}</small></div>
        </div>
        <div class="btns">
          ${mine ? `
            <button class="btn pink m-look" type="button">${L('🎨 내 캐릭터 꾸미기', '🎨 Customize my character')}</button>
            <button class="btn m-inbox" type="button">${L('💌 나에게 온 편지', '💌 Letters for me')}${unread ? ` <b class="badge">${unread}</b>` : ''}</button>`
          : `
            <button class="btn pink m-heart" type="button" ${sentHeartToday(m.id) ? 'disabled' : ''}>${sentHeartToday(m.id) ? L('💗 오늘 하트 보냄', '💗 Heart sent today') : L('💗 하트 보내기', '💗 Send a heart')}</button>
            <button class="btn m-mail" type="button">${L('✉️ 편지 쓰기', '✉️ Write a letter')}</button>
            ${m.phone ? `<a class="btn small" href="tel:${esc(m.phone)}">📞</a><a class="btn small" href="sms:${esc(m.phone)}">💬</a>` : ''}`}
        </div>
        ${q ? `<div class="card"><b>${L('💬 오늘의 질문', '💬 Question of the day')}</b><p class="muted" style="margin:6px 0">${esc(q.q)}</p>
          ${ans ? (canSee ? `<p class="ans-text">${esc(ans.text)}</p>` : `<p class="muted">${L('🔒 나도 답하면 볼 수 있어요', '🔒 Answer it too to see this')}</p>`) : `<p class="muted">${L('아직 답하지 않았어요', 'No answer yet')}</p>`}
          <button class="btn small m-q" type="button">${L('답하러 가기', 'Go answer it')}</button></div>` : ''}
        ${fromThem.length ? `<div class="card"><b>${L(`✉️ ${esc(m.nick || m.role || m.name)}의 최근 편지`, `✉️ Recent letters from ${esc(m.nick || m.role || m.name)}`)}</b>${fromThem.map((l, i) => `<button type="button" class="up-row linkrow" data-i="${i}"><span>${esc(String(l.message).split('\n')[0].slice(0, 26))}</span><span class="muted">${shortDate(l.time)}</span></button>`).join('')}</div>` : ''}`;
      box.querySelector('.m-heart')?.addEventListener('click', () => { if (sendHeart(m.id)) render(); });
      box.querySelector('.m-mail')?.addEventListener('click', () => UI.showMailbox(hooks.onSent, { to: m.id }));
      box.querySelector('.m-look')?.addEventListener('click', () => showLook());
      box.querySelector('.m-inbox')?.addEventListener('click', () => UI.showMailbox(hooks.onSent, { filter: 'me' }));
      box.querySelector('.m-q')?.addEventListener('click', () => showQuestion());
      box.querySelectorAll('.linkrow').forEach(b => b.onclick = () => UI.showLetter(fromThem, +b.dataset.i, () => showMember(id)));
    };
    render();
    return onData(render);
  };
  return { html: '<div class="mem-box"></div>', mount };
}
export function showMember(id) {
  const m = member(id);
  openView(m ? (m.id === meId() ? L('🏠 내 집', '🏠 My house') : L(`${m.emoji || '🏠'} ${m.nick || m.role || m.name}네 집`, `${m.emoji || '🏠'} ${m.nick || m.role || m.name}'s house`)) : L('우리 가족', 'Our family'), memberView(id));
}

/* ---------- 💬 Question of the day (the others' answers open once you answer) ---------- */
export function questionView(day = dayKey(), { embedded = false } = {}) {
  const mount = root => {
    const box = root.querySelector('.q-box');
    const cleanups = [];
    const render = () => {
      if (!box.isConnected) return;
      cleanups.splice(0).forEach(c => c());
      const q = questionOn(day);
      if (!q) { box.innerHTML = `<p class="muted">${L('config.js에 질문이 없어요', 'There are no questions in config.js')}</p>`; return; }
      const answers = answersOn(day), mine = myAnswer(day), isToday = day === dayKey();
      const others = answers.filter(a => a.who !== meId());
      box.innerHTML = `
        <div class="q-hero">
          <div class="muted">${isToday ? L(`오늘의 질문 · ${keyLabel(day)}`, `Question of the day · ${keyLabel(day)}`) : L(`${keyLabel(day)}의 질문`, `Question for ${keyLabel(day)}`)}</div>
          <div class="q-text">${esc(q.q)}</div>
          <div class="muted">${answers.length ? L(`${answers.length}명이 답했어요`, `${plural(answers.length, 'answer', 'answers')} so far`) : L('아직 아무도 답하지 않았어요', 'No one has answered yet')}</div>
        </div>
        ${me() ? `
          <form class="q-form" autocomplete="off" ${mine ? 'hidden' : ''}>
            <textarea class="field q-in" maxlength="300" placeholder="${L('나의 답을 적어 주세요 (300자)', 'Write your answer (up to 300 characters)')}" aria-label="${L('나의 답', 'My answer')}">${mine ? esc(mine.text) : ''}</textarea>
            <button class="btn pink" type="submit" style="width:100%;margin-top:8px">${mine ? L('✏️ 고친 답 올리기', '✏️ Post my edited answer') : L('💬 답하고 가족 답 보기', "💬 Answer and see the family's answers")}</button>
          </form>`
          : `<p class="muted center">${L('🙋 답은 가족만 남길 수 있어요. 메뉴의 \'나는 누구?\'에서 나를 골라 주세요', "🙋 Only family members can answer. Pick yourself under 'Who am I?' in the menu")}</p>`}
        <div class="ans-list">
          ${mine ? ansCard(mine, true) : ''}
          ${mine ? others.map(a => ansCard(a)).join('') : others.map(a => `<div class="ans-card locked" style="--c:${esc(member(a.who)?.look.outfit || '#E6D5C6')}">${avatarHTML(member(a.who)?.look || {}, 'mini')}<b>${esc(callName(a.who) || a.name)}</b><span class="muted">${L('🔒 답하면 열려요', '🔒 Opens when you answer')}</span></div>`).join('')}
        </div>
        ${embedded ? '' : `<div class="divider"></div><b>${L('🗓️ 지난 질문', '🗓️ Past questions')}</b><div class="past-q">${recentQuestions(14).filter(x => x.day !== day).map(x => `<button type="button" class="up-row linkrow" data-day="${x.day}"><span>${esc(x.q)}</span><span class="muted">${keyLabel(x.day, false)} · ${L(`${x.answers.length}명`, plural(x.answers.length, 'answer', 'answers'))}</span></button>`).join('')}</div>`}`;
      const f = box.querySelector('.q-form');
      if (f) f.onsubmit = async e => {
        e.preventDefault();
        const text = f.querySelector('.q-in').value.trim();
        if (!text) { toast(L('답을 적어 주세요', 'Please write your answer')); return; }
        const r = await add('answers', { id: `${meId()}-${day}`, who: meId(), name: memberName(meId()), day, q: q.idx, text });
        toast(r.ok ? (mine ? L('✏️ 답을 고쳤어요', '✏️ Answer updated') : L('💬 답했어요! 가족의 답이 열렸어요', "💬 Answered. Your family's answers are open now")) : L('휴대폰에 보관했어요. 연결되면 자동으로 올릴게요', "Saved on your phone. It will be posted automatically once you're connected"), 2600);
        if (!mine) { confetti(['💬', '💗', '✨']); sound.sfx('tada'); }
        render();
      };
      box.querySelector('.a-edit')?.addEventListener('click', () => { f.hidden = false; box.querySelector('.ans-card.me')?.remove(); f.querySelector('.q-in').focus(); });
      box.querySelectorAll('.past-q .linkrow').forEach(b => b.onclick = () => showQuestion(b.dataset.day));
      // reactions and replies under each answer
      if (mine) box.querySelectorAll('.ans-card[data-id]').forEach(el => { const v = replyView(el.dataset.id, { compact: true }); el.insertAdjacentHTML('beforeend', v.html); cleanups.push(v.mount(el)); });
    };
    render();
    refresh();
    const off = onData(render);
    return () => { off(); cleanups.forEach(c => c()); };
  };
  return { html: '<div class="q-box"></div>', mount };
}
function ansCard(a, isMine = false) {
  const m = member(a.who);
  return `<div class="ans-card${isMine ? ' me' : ''}" data-id="${esc(a.id)}" style="--c:${esc(m?.look.outfit || '#E6D5C6')}">
    <div class="ans-top">${avatarHTML(m?.look || {}, 'mini')}<b>${esc(m ? (m.nick || m.role || m.name) : a.name)}${isMine ? L(' (나)', ' (me)') : ''}</b><small class="muted">${shortDate(a.time)}</small>${isMine ? `<button type="button" class="linklike a-edit">${L('고치기', 'Edit')}</button>` : ''}</div>
    <p class="ans-text">${esc(a.text)}</p>
  </div>`;
}
export function showQuestion(day = dayKey()) { openView(L('💬 오늘의 질문', '💬 Question of the day'), questionView(day)); }

/* ---------- 📅 Family calendar ---------- */
function icsFor(e) {
  const d = e.key.replace(/-/g, ''), next = addDays(e.key, 1).replace(/-/g, '');
  const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//family-village//KO', 'BEGIN:VEVENT',
    `UID:${d}-${encodeURIComponent(e.title).slice(0, 30)}@family-village`, `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}`,
    `DTSTART;VALUE=DATE:${d}`, `DTEND;VALUE=DATE:${next}`, ...(e.yearly ? ['RRULE:FREQ=YEARLY'] : []),
    `SUMMARY:${e.title}`, ...(e.note ? [`DESCRIPTION:${e.note}`] : []), 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
  a.download = 'family-day.ics';
  a.click();
  toast(L('📅 캘린더 파일을 열어 저장해 주세요', '📅 Open the calendar file to save the date'));
}
export function calendarView() {
  const mount = root => {
    const box = root.querySelector('.cal-box');
    const t = dayKey();
    let y = +t.slice(0, 4), mo = +t.slice(5, 7), pick = t;
    const render = () => {
      const evs = monthEvents(y, mo);
      const first = new Date(Date.UTC(y, mo - 1, 1)).getUTCDay(), last = new Date(Date.UTC(y, mo, 0)).getUTCDate();
      let cells = '<tr>' + '<td></td>'.repeat(first);
      for (let d = 1; d <= last; d++) {
        const key = `${y}-${String(mo).padStart(2, '0')}-${String(d).padStart(2, '0')}`, col = (first + d - 1) % 7, e = evs[key];
        cells += `<td class="${col === 0 ? 'sun' : ''}${key === t ? ' today' : ''}${key === pick ? ' pick' : ''}"><button type="button" data-k="${key}">${d}${e ? `<i>${e[0].emoji || '•'}</i>` : ''}</button></td>`;
        if (col === 6 && d !== last) cells += '</tr><tr>';
      }
      cells += '</tr>';
      const dayEvs = evs[pick] || [];
      const ups = upcoming(8);
      box.innerHTML = `
        <div class="cal-nav"><button class="btn small c-prev" type="button" aria-label="${L('이전 달', 'Previous month')}">‹</button><b>${L(`${y}년 ${mo}월`, `${MONTHS_LONG[mo - 1]} ${y}`)}</b><button class="btn small c-next" type="button" aria-label="${L('다음 달', 'Next month')}">›</button></div>
        <table class="cal fam-cal"><tr>${L(['일', '월', '화', '수', '목', '금', '토'], ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']).map((n, i) => `<th class="${i === 0 ? 'sun' : ''}">${n}</th>`).join('')}</tr>${cells}</table>
        <div class="card">${dayEvs.length ? dayEvs.map(e => `<div class="up-row"><span>${e.emoji || '📌'} ${esc(e.title)}</span>${e.note ? `<small class="muted">${esc(e.note)}</small>` : ''}</div>`).join('') : `<span class="muted">${L(`${keyLabel(pick)} · 특별한 날이 없어요`, `${keyLabel(pick)} · Nothing planned`)}</span>`}</div>
        <b>${L('⏰ 다가오는 날', '⏰ Coming up')}</b>
        <div class="ups">${ups.map((e, i) => `<div class="up-row"><span>${e.emoji || '📌'} ${esc(e.title)}<small class="muted"> · ${keyLabel(e.key)}${e.note ? ` · ${esc(e.note)}` : ''}</small></span><span class="dd">${ddayText(e.dday)}</span><button type="button" class="linklike c-ics" data-i="${i}">${L('캘린더에', '＋ Calendar')}</button></div>`).join('') || `<p class="muted">${L('config.js의 events에 날짜를 넣어 주세요', 'Add dates to events in config.js')}</p>`}</div>`;
      box.querySelector('.c-prev').onclick = () => { mo--; if (mo < 1) { mo = 12; y--; } render(); };
      box.querySelector('.c-next').onclick = () => { mo++; if (mo > 12) { mo = 1; y++; } render(); };
      box.querySelectorAll('.fam-cal button').forEach(b => b.onclick = () => { pick = b.dataset.k; buzz(6); render(); });
      box.querySelectorAll('.c-ics').forEach(b => b.onclick = () => icsFor(ups[+b.dataset.i]));
    };
    render();
  };
  return { html: '<div class="cal-box"></div>', mount };
}
export function showCalendar() { openView(L('📅 가족 달력', '📅 Family calendar'), calendarView()); }

/* ---------- 🗳️ Family polls ---------- */
export function pollView() {
  const mount = root => {
    const box = root.querySelector('.poll-box');
    let making = false;
    const render = () => {
      if (!box.isConnected) return;
      const ps = polls();
      box.innerHTML = `
        <p class="muted">${L('가족 일은 다 같이 정해요. 마음이 바뀌면 다시 눌러도 돼요 🗳️', 'We decide family things together. Changed your mind? Just tap again 🗳️')}</p>
        ${ps.map((p, pi) => {
          const v = votesFor(p.id), total = v.size, my = v.get(meId());
          const by = p.cfg ? '' : `<small class="muted"> · ${L(`${esc(callName(p.who) || p.name)}가 만든 투표`, `poll by ${esc(callName(p.who) || p.name)}`)}</small>`;
          return `<div class="card poll" data-p="${pi}"><b>${esc(p.q)}</b>${by}
            ${p.options.map((o, k) => {
              const who = [...v.entries()].filter(([, c]) => c === k).map(([w]) => w);
              const pct = total ? Math.round(who.length / total * 100) : 0;
              return `<button type="button" class="poll-opt${my === k ? ' on' : ''}" data-k="${k}" ${me() ? '' : 'disabled'}>
                <span class="bar" style="width:${pct}%"></span><span class="txt">${esc(o)}</span><span class="cnt">${who.length ? L(`${who.length}표`, plural(who.length, 'vote', 'votes')) : ''}</span>
                ${who.length ? `<span class="voters">${who.map(w => `<i style="--c:${esc(member(w)?.look.outfit || '#ccc')}">${esc(callName(w))}</i>`).join('')}</span>` : ''}
              </button>`;
            }).join('')}
            <small class="muted">${total ? L(`${total}명 참여`, `${total} voted`) : L('아직 아무도 안 했어요', 'No votes yet')}</small></div>`;
        }).join('')}
        ${me() ? (making ? `
          <form class="card poll-new" autocomplete="off">
            <b>${L('＋ 새 투표', '＋ New poll')}</b>
            <input class="field pn-q" maxlength="40" placeholder="${L('무엇을 정할까요? (예: 일요일 점심 메뉴)', 'What should we decide? (e.g. Sunday lunch)')}" aria-label="${L('질문', 'Question')}">
            ${[0, 1, 2, 3].map(k => `<input class="field pn-o" maxlength="20" placeholder="${L(`보기 ${k + 1}${k > 1 ? ' (선택)' : ''}`, `Option ${k + 1}${k > 1 ? ' (optional)' : ''}`)}" aria-label="${L(`보기 ${k + 1}`, `Option ${k + 1}`)}">`).join('')}
            <div class="btns"><button class="btn pink" type="submit">${L('투표 만들기', 'Create poll')}</button><button class="btn pn-cancel" type="button">${L('취소', 'Cancel')}</button></div>
          </form>` : `<button class="btn p-make" type="button" style="width:100%">${L('＋ 새 투표 만들기', '＋ Create a new poll')}</button>`)
          : `<p class="muted center">${L('🙋 투표는 가족만 할 수 있어요', '🙋 Only family members can vote')}</p>`}`;
      box.querySelectorAll('.poll').forEach(card => {
        const p = ps[+card.dataset.p];
        card.querySelectorAll('.poll-opt').forEach(b => b.onclick = async () => {
          const k = +b.dataset.k;
          if (votesFor(p.id).get(meId()) === k) { toast(L('이미 고른 보기예요', "That's already your pick")); return; }
          buzz(10); sound.sfx('pop');
          await add('votes', { id: `${meId()}-${p.id}`, who: meId(), poll: p.id, choice: k });
          toast(L(`🗳️ '${p.options[k]}'에 한 표!`, `🗳️ You voted for '${p.options[k]}'`));
          render();
        });
      });
      box.querySelector('.p-make')?.addEventListener('click', () => { making = true; render(); box.querySelector('.pn-q')?.focus(); });
      box.querySelector('.pn-cancel')?.addEventListener('click', () => { making = false; render(); });
      const f = box.querySelector('.poll-new');
      if (f) f.onsubmit = async e => {
        e.preventDefault();
        const q = f.querySelector('.pn-q').value.trim();
        const opts = [...f.querySelectorAll('.pn-o')].map(i => i.value.trim().replace(/\|/g, '/')).filter(Boolean);
        if (!q || opts.length < 2) { toast(L('질문과 보기 두 개 이상을 적어 주세요', 'Write a question and at least two options')); return; }
        making = false;
        await add('polls', { who: meId(), name: memberName(meId()), q, options: opts.join('|') });
        toast(L('🗳️ 새 투표를 만들었어요. 가족에게 알려 주세요!', '🗳️ New poll created. Let the family know'));
        render();
      };
    };
    render();
    refresh();
    return onData(render);
  };
  return { html: '<div class="poll-box"></div>', mount };
}
export function showPolls() { openView(L('🗳️ 가족 투표함', '🗳️ Family polls'), pollView()); }

/* ---------- 🌱 The tree we grow together ---------- */
const STAGE_EMOJI = ['🌰', '🌱', '🌿', '🌳', '🌸', '🍎'];
export function waterTree() {
  if (!me()) { toast(L('물은 가족만 줄 수 있어요', 'Only family members can water the tree')); return false; }
  const before = treeInfo();
  if (before.wateredToday) { toast(L('💧 오늘은 이미 물을 줬어요. 내일 또 와 주세요', '💧 You already watered it today. Come back tomorrow')); return false; }
  const day = dayKey();
  add('water', { id: `${meId()}-${day}`, who: meId(), day });
  buzz(20); sound.sfx('water');
  // the save shows up right away, so the new numbers tell whether it grew
  setTimeout(() => {
    const after = treeInfo();
    fire('family:water', { grew: after.stage > before.stage, stage: after.stage });
    if (after.stage > before.stage) { confetti(['🌱', '🌸', '✨', '🍎']); sound.sfx('tada'); toast(L(`🎉 ${josa(after.name, '이/가')} '${after.stageName}'${josa(after.stageName, '으로/로').slice(after.stageName.length)} 자랐어요!`, `🎉 ${after.name} has grown into a ${after.stageName}`), 3600); }
    else toast(after.next == null ? L('💧 물을 줬어요. 열매가 주렁주렁해요 🍎', '💧 Watered. The tree is full of fruit 🍎') : L(`💧 물을 줬어요! ${after.toNext}번 더 주면 '${STAGE_NAMES[after.stage + 1]}'이 돼요`, `💧 Watered. ${plural(after.toNext, 'more time', 'more times')} and it becomes a ${STAGE_NAMES[after.stage + 1]}`), 3000);
  }, 30);
  return true;
}
export function treeView() {
  const mount = root => {
    const box = root.querySelector('.tree-box');
    const render = () => {
      if (!box.isConnected) return;
      const t = treeInfo(), today = dayKey();
      const week = Array.from({ length: 7 }, (_, i) => addDays(today, i - 6)).map(k => ({ k, n: new Set(list('water').filter(w => w.day === k).map(w => w.who)).size }));
      box.innerHTML = `
        <div class="tree-hero">
          <div class="tree-emoji">${STAGE_EMOJI[t.stage]}</div>
          <div class="names">${esc(t.name)}</div>
          <div class="muted">${L(`지금은 <b>${t.stageName}</b> · 모인 물 ${t.total}번${t.thirsty ? ' · 💧 목말라요' : ''}`, `Now a <b>${t.stageName}</b> · Watered ${plural(t.total, 'time', 'times')}${t.thirsty ? ' · 💧 Thirsty' : ''}`)}</div>
          <div class="prog"><i style="width:${Math.round(t.progress * 100)}%"></i></div>
          <small class="muted">${t.next == null ? L('다 자랐어요! 열매가 열렸어요 🍎', 'Fully grown, with fruit 🍎') : L(`${t.toNext}번 더 주면 '${STAGE_NAMES[t.stage + 1]}'`, `${plural(t.toNext, 'more time', 'more times')} to become a ${STAGE_NAMES[t.stage + 1]}`)}</small>
        </div>
        <p class="muted center">${L('가족이 하루에 한 번씩 물을 줄 수 있어요. 다 같이 오래 들를수록 나무가 자라요', 'Everyone can water it once a day. The more often we all stop by, the more it grows')}</p>
        <button class="btn pink t-water" type="button" style="width:100%;padding:14px" ${!me() || t.wateredToday ? 'disabled' : ''}>${!me() ? L('🙋 가족만 물을 줄 수 있어요', '🙋 Only family members can water it') : t.wateredToday ? L('💧 오늘은 물을 줬어요', '💧 Watered today') : L('💧 물 주기', '💧 Water the tree')}</button>
        <div class="card"><b>${L('오늘 물 준 가족', 'Watered today by')}</b><div class="chips-row">${t.todayWho.length ? t.todayWho.map(w => `<span class="who-chip" style="--c:${esc(member(w)?.look.outfit || '#ccc')}">${esc(callName(w))}</span>`).join('') : `<span class="muted">${L('아직 없어요', 'No one yet')}</span>`}</div></div>
        <div class="week">${week.map(d => `<div><i style="height:${8 + d.n * 12}px"></i><small>${L(keyLabel(d.k, false).replace('월 ', '/').replace('일', ''), `${+d.k.slice(5, 7)}/${+d.k.slice(8)}`)}</small></div>`).join('')}</div>`;
      box.querySelector('.t-water').onclick = () => { if (waterTree()) setTimeout(render, 60); };
    };
    render();
    refresh();
    return onData(render);
  };
  return { html: '<div class="tree-box"></div>', mount };
}
export function showTree() { openView('🌱 ' + treeInfo().name, treeView()); }

/* ---------- 🎨 Customize my character ---------- */
const GUEST_LOOK = 'family-guest-look';
export function currentLook() {
  const m = me();
  if (m) return { ...m.look };
  try { const g = JSON.parse(localStorage.getItem(GUEST_LOOK) || 'null'); if (g) return g; } catch {}
  return { outfit: PALETTE[Math.floor(Math.random() * PALETTE.length)], hair: HAIRS[Math.floor(Math.random() * 5)], longHair: Math.random() < 0.5 };
}
/* ✨ Create my character · customize — the first visit (create) and the menu (customize) use the same screen
   A nickname instead of a role (Mom · Dad), so groups and clubs that are not families can use it too
   (the first value of each pair is what gets saved; only the label is translated) */
const AGES = L([['kid', '어린이'], ['teen', '청소년'], ['adult', '어른'], ['senior', '어르신']], [['kid', 'Child'], ['teen', 'Teen'], ['adult', 'Adult'], ['senior', 'Senior']]);
const GENDERS = L([['f', '여자'], ['m', '남자'], ['', '말 안 할래요']], [['f', 'Female'], ['m', 'Male'], ['', 'Rather not say']]);
const HATS = L([['', '없음'], ['cap', '야구 모자'], ['beanie', '털모자'], ['flower', '꽃핀']], [['', 'None'], ['cap', 'Baseball cap'], ['beanie', 'Beanie'], ['flower', 'Flower pin']]);
const newId = () => 'u' + Date.now().toString(36).slice(-5) + Math.random().toString(36).slice(2, 6);
export function lookView({ create = false, onDone } = {}) {
  const m = create ? null : me();
  const look = create
    ? { outfit: PALETTE[Math.floor(Math.random() * PALETTE.length)], hair: HAIRS[Math.floor(Math.random() * 4)], skin: SKINS[1], hairStyle: 'short', gender: '', age: 'adult', glasses: false, hat: '' }
    : { hairStyle: currentLook().longHair ? 'long' : 'short', age: currentLook().kid ? 'kid' : 'adult', skin: SKINS[1], ...currentLook() };
  let nick = create ? '' : (m?.nick || (m ? m.name : '') || '');
  let bday = create ? '' : (m?.birthday || '');
  const seg = (k, opts) => `<div class="seg wrap">${opts.map(([v, l]) => `<button type="button" data-k="${k}" data-v="${v}" class="${(look[k] ?? '') === v ? 'on' : ''}">${l}</button>`).join('')}</div>`;
  const sw = (k, cols) => `<div class="sw">${cols.map(c => `<button type="button" class="sw-c${look[k] === c ? ' on' : ''}" data-k="${k}" data-v="${c}" style="--c:${c}" aria-label="${c}"></button>`).join('')}</div>`;
  const mount = root => {
    const prev = root.querySelector('.look-preview'), opts = root.querySelector('.look-opts');
    const paintPrev = () => {
      const pic = hooks.portrait?.({ ...look, kid: look.age === 'kid', longHair: ['long', 'bob'].includes(look.hairStyle) });
      prev.innerHTML = pic ? `<img class="look-img" src="${pic}" alt="">` : avatarHTML({ ...look, kid: look.age === 'kid', longHair: look.hairStyle === 'long' }, 'big');
    };
    const render = () => {
      opts.innerHTML = `
        <b>${L('성별', 'Gender')}</b>${seg('gender', GENDERS)}
        <b>${L('나이', 'Age')}</b>${seg('age', AGES)}
        <b>${L('피부색', 'Skin color')}</b>${sw('skin', SKINS)}
        <b>${L('머리 모양', 'Hairstyle')}</b>${seg('hairStyle', HAIR_STYLES)}
        <b>${L('머리 색', 'Hair color')}</b>${sw('hair', HAIRS)}
        <b>${L('옷 색', 'Outfit color')}</b>${sw('outfit', PALETTE)}
        <b>${L('안경', 'Glasses')}</b>${seg('glasses', L([['0', '안 써요'], ['1', '👓 써요']], [['0', 'No'], ['1', '👓 Yes']]))}
        <b>${L('모자', 'Hat')}</b>${seg('hat', HATS)}`;
      opts.querySelectorAll('[data-k="glasses"]').forEach(b => b.classList.toggle('on', (b.dataset.v === '1') === !!look.glasses));
      opts.querySelectorAll('[data-k]').forEach(b => b.onclick = () => {
        const k = b.dataset.k, v = b.dataset.v;
        look[k] = k === 'glasses' ? v === '1' : v;
        buzz(6); sound.sfx('pop');
        render(); paintPrev();
      });
    };
    const nickIn = root.querySelector('.lk-nick'), bm = root.querySelector('.lk-bm'), bd = root.querySelector('.lk-bd');
    nickIn.value = nick;
    if (/^\d{2}-\d{2}$/.test(bday)) { bm.value = String(+bday.slice(0, 2)); bd.value = String(+bday.slice(3)); }
    render(); paintPrev();
    root.querySelector('.lk-save').onclick = async () => {
      nick = nickIn.value.trim().replace(/\s+/g, ' ').slice(0, 10);
      if (!nick) { nickIn.focus(); toast(L('닉네임을 적어 주세요 ✏️', 'Please enter a nickname ✏️')); return; }
      bday = bm.value && bd.value ? `${String(bm.value).padStart(2, '0')}-${String(bd.value).padStart(2, '0')}` : '';
      const out = { ...look, kid: look.age === 'kid', longHair: ['long', 'bob'].includes(look.hairStyle), nick, bday };
      if (create || isGuest() || !meId()) {
        const id = newId();
        await add('looks', { id, who: id, look: { ...out, joined: new Date().toISOString() } });
        setMe(id);
      } else {
        await add('looks', { id: meId(), who: meId(), look: { ...out, joined: me()?.joined || look.joined || '' } });
      }
      fire('family:look', out);
      toast(create ? L(`✨ 반가워요, ${nick}! 마을에 ${nick}네 집이 생겼어요`, `✨ Welcome, ${nick}. Your house is now in the village`) : L('✨ 새 모습으로 바뀌었어요', '✨ Your new look is ready'), 3200);
      closeModal();
      onDone?.();
    };
  };
  const days = n => Array.from({ length: n }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('');
  return {
    html: `<div class="look-box">
      <div class="look-preview"></div>
      <label class="lk-row"><b>${L('닉네임', 'Nickname')}</b><input class="field lk-nick" maxlength="10" placeholder="${L('마을에서 부를 이름 (10자까지)', 'Your name in the village (up to 10 characters)')}" autocomplete="off" /></label>
      <div class="look-opts"></div>
      <b>${L('생일 <small class="muted">(선택 · 그날 집 앞에 케이크가 생겨요)</small>', 'Birthday <small class="muted">(optional · a cake appears in front of your house that day)</small>')}</b>
      <div class="lk-bday"><select class="field lk-bm"><option value="">${L('월', 'Month')}</option>${days(12)}</select><select class="field lk-bd"><option value="">${L('일', 'Day')}</option>${days(31)}</select></div>
      <button class="btn pink lk-save" type="button" style="width:100%;margin-top:14px;padding:14px">${create ? L('✨ 이 캐릭터로 시작할래요', '✨ Start with this character') : L('✨ 이 모습으로 할래요', '✨ Keep this look')}</button>
      <p class="muted center">${L('바꾼 모습은 마을 사람들에게도 보여요 (내 집 앞의 나)', 'Everyone sees your new look too, standing by your house')}</p>
    </div>`,
    mount,
  };
}
export function showLook() { openView(L('🎨 내 캐릭터 꾸미기', '🎨 Customize my character'), lookView()); }
export function showCreator(onDone) { openView(L('✨ 내 캐릭터 만들기', '✨ Create my character'), lookView({ create: true, onDone })); }

/* ---------- 🙋 Who are you? (on the start screen and in the menu) ---------- */
/* Character pictures taken in 3D (game.portrait) — without them, a simple avatar instead */
const portraits = new Map();
export function setPortrait(id, url) { if (url) portraits.set(id, url); }
export const picHTML = (id, look) => portraits.has(id) ? `<img class="char-img" src="${portraits.get(id)}" alt="" draggable="false">` : avatarHTML(look, 'big');
export function whoHTML(selected = meId(), { carousel = false } = {}) {
  return `<div class="who-grid${carousel ? ' carousel' : ''}">
    ${members().map(m => `<button type="button" class="who-btn${selected === m.id ? ' on' : ''}" data-id="${esc(m.id)}" style="--c:${esc(m.look.outfit || '#8FB8DE')}" aria-label="${esc(m.nick || m.nick || m.role || m.name)}"><span class="char-pic">${picHTML(m.id, m.look)}</span><b>${esc(m.nick || m.nick || m.role || m.name)}</b><small>${esc(m.nick ? '' : m.role ? m.name : '')}</small></button>`).join('')}
    <button type="button" class="who-btn guest${selected === 'guest' ? ' on' : ''}" data-id="guest" style="--c:#C9BBA9" aria-label="${L('손님으로 구경만', 'Just looking, as a guest')}"><span class="char-pic"><span class="guest-ic">👀</span></span><b>${L('구경만', 'Just looking')}</b><small>${L('손님', 'Guest')}</small></button>
  </div>`;
}
export function whoView(onPick) {
  const mount = root => {
    root.querySelectorAll('.who-btn').forEach(b => b.onclick = () => {
      buzz(10); sound.sfx('pop');
      setMe(b.dataset.id);
      onPick?.(b.dataset.id);
      closeModal();
      toast(b.dataset.id === 'guest' ? L('👀 손님으로 구경해요', '👀 Just looking, as a guest') : L(`🙋 ${josa(callName(b.dataset.id), '으로/로')} 들어왔어요`, `🙋 You're in as ${callName(b.dataset.id)}`));
    });
  };
  const html = `<p class="muted">${L('다른 휴대폰에서 이미 만든 캐릭터가 있으면 골라 주세요. 없으면 새로 만들어요', 'If you already made a character on another phone, pick it here. If not, make a new one')}</p>${whoHTML()}
    <button class="btn pink lk-new" type="button" style="width:100%;margin-top:6px;padding:12px">${L('✨ 새 캐릭터 만들기', '✨ Create a new character')}</button>`;
  const mount2 = root => { mount(root); root.querySelector('.lk-new').onclick = () => showCreator(() => onPick?.(meId())); };
  return { html, mount: mount2 };
}
export function showWho(onPick) { openView(L('🙋 내 캐릭터 고르기', '🙋 Pick my character'), whoView(onPick)); }

/* ---------- 🔒 Family password settings (optional: without one, anyone can come straight in) ---------- */
export function lockSettingsView(onChange) {
  const mount = root => {
    const box = root.querySelector('.lockset');
    const render = () => {
      const info = lockInfo(), knows = info.locked && !!savedCode();   // (named info, not L, so it does not hide the L() text helper)
      box.innerHTML = `
        <div class="card center">
          <div style="font-size:40px">${info.locked ? '🔒' : '🔓'}</div>
          <b>${info.locked ? L('가족 암호가 걸려 있어요', 'A family password is set') : L('지금은 암호 없이 누구나 들어와요', 'Right now anyone can come in without a password')}</b>
          <p class="muted" style="margin:6px 0 0">${info.remote
            ? L('암호는 구글 시트에 저장돼서 가족 모두에게 똑같이 적용돼요.', 'The password is saved in the Google Sheet, so it applies to the whole family.')
            : L('⚠️ 구글 시트를 연결하지 않아서 <b>이 휴대폰에서만</b> 잠겨요. 가족 모두에게 걸려면 시트를 연결하세요 (tools/가족_시트_연결.md).', '⚠️ No Google Sheet is connected, so it locks <b>only this phone</b>. To lock it for the whole family, connect a sheet (tools/가족_시트_연결.md).')}</p>
        </div>
        <form class="ls-form" autocomplete="off">
          ${info.locked && !knows ? `<input class="field ls-cur" type="password" maxlength="30" placeholder="${L('지금 암호', 'Current password')}" aria-label="${L('지금 암호', 'Current password')}">` : ''}
          <input class="field ls-new" type="password" maxlength="30" placeholder="${info.locked ? L('새 암호', 'New password') : L('정할 암호 (숫자·글자)', 'New password (numbers · letters)')}" aria-label="${L('새 암호', 'New password')}">
          <input class="field ls-new2" type="password" maxlength="30" placeholder="${L('한 번 더', 'Type it again')}" aria-label="${L('새 암호 확인', 'Confirm the new password')}">
          <input class="field ls-hint" maxlength="40" placeholder="${L('힌트 (선택, 예: 우리 집 현관 비밀번호 앞 네 자리)', 'Hint (optional, e.g. our door code)')}" aria-label="${L('힌트', 'Hint')}" value="${esc(info.hint || '')}">
          <button class="btn pink" type="submit" style="width:100%;margin-top:10px">${info.locked ? L('🔒 암호 바꾸기', '🔒 Change password') : L('🔒 암호 걸기', '🔒 Set password')}</button>
        </form>
        ${info.locked ? `<button class="btn ls-off" type="button" style="width:100%;margin-top:8px">${L('🔓 암호 없애기 (누구나 들어오게)', '🔓 Remove password (let anyone in)')}</button>` : ''}
        <p class="muted center" style="font-size:12.5px">${L('암호는 단톡방 링크와 같은 메시지에 쓰지 말고 따로 알려 주세요', "Don't put the password in the same message as the group chat link. Share it separately")}</p>`;
      const cur = () => box.querySelector('.ls-cur')?.value.trim() || '';
      const save = async (next, hint) => {
        const r = await setFamilyCode({ current: cur(), next, hint });
        if (!r.ok) { toast(r.error === 'code' ? L('지금 암호가 달라요 🔒', 'The current password is wrong 🔒') : L('연결이 안 돼요. 잠시 뒤 다시 해 주세요', "Can't connect. Please try again in a moment")); return; }
        toast(next ? L('🔒 가족 암호를 걸었어요', '🔒 Family password set') : L('🔓 이제 암호 없이 누구나 들어와요', '🔓 Now anyone can come in without a password'), 2800);
        buzz(15); sound.sfx('chime');
        onChange?.();
        closeModal();
      };
      box.querySelector('.ls-form').onsubmit = e => {
        e.preventDefault();
        const a = box.querySelector('.ls-new').value.trim(), b = box.querySelector('.ls-new2').value.trim();
        if (!a) { toast(L('정할 암호를 적어 주세요', 'Enter the new password')); return; }
        if (a !== b) { toast(L('두 번 적은 암호가 달라요', "The two passwords don't match")); return; }
        save(a, box.querySelector('.ls-hint').value);
      };
      box.querySelector('.ls-off')?.addEventListener('click', () => save('', ''));
    };
    render();
  };
  return { html: '<div class="lockset"></div>', mount };
}
export function showLockSettings(onChange) { openView(L('🔒 가족 암호', '🔒 Family password'), lockSettingsView(onChange)); }

/* ---------- 📸 Family photo zone: pick who is in the photo ---------- */
export function photoPickView() {
  const others = members().filter(m => m.id !== meId());
  const sel = new Set(others.slice(0, 5).map(m => m.id));
  const mount = root => {
    const paint = () => root.querySelectorAll('.who-btn').forEach(b => b.classList.toggle('on', sel.has(b.dataset.id)));
    root.querySelectorAll('.who-btn').forEach(b => b.onclick = () => {
      const id = b.dataset.id;
      if (sel.has(id)) sel.delete(id); else if (sel.size < 5) sel.add(id); else toast(L('한 번에 다섯 명까지 같이 찍을 수 있어요', 'Up to five people can be in one photo'));
      buzz(6); paint();
    });
    root.querySelector('.pp-go').onclick = () => { closeModal(); setTimeout(() => hooks.takePhoto?.([...sel]), 260); };
    paint();
  };
  return {
    html: `<p class="muted">${L('누구랑 같이 찍을까요? (최대 5명)', 'Who should be in the photo? (up to 5)')}</p>
      <div class="who-grid">${others.map(m => `<button type="button" class="who-btn" data-id="${esc(m.id)}">${avatarHTML(m.look)}<b>${esc(m.nick || m.role || m.name)}</b></button>`).join('')}</div>
      <button class="btn pink pp-go" type="button" style="width:100%;margin-top:12px;padding:14px">${L('📸 3 · 2 · 1 찍기', '📸 3 · 2 · 1 Snap')}</button>`,
    mount,
  };
}
export function showPhotoPick() { openView(L('📸 가족사진', '📸 Family photo'), photoPickView()); }

export { isGuest, formatKDate };
