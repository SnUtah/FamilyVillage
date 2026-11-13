import * as UI from './ui.js';
import { buzz, dayKey, addDays, keyLabel, daysBetween, shortDate, formatKDate, josa } from './common.js';
import { list, add, refresh, lockInfo, savedCode, setFamilyCode } from './store.js';
import {
  members, member, memberName, me, meId, isGuest, setMe, villageName, sinceDays, birthdaysOn, upcoming, monthEvents, ddayText,
  questionOn, answersOn, myAnswer, recentQuestions, heartsTo, heartsToday, sentHeartToday, visitorsOn, myStamps, treeInfo, STAGE_NAMES,
  unreadForMe, polls, votesFor, PALETTE, HAIRS, isLockedLetter, callName,
} from './family.js';
import { sound } from './sound.js';

/* =========================================================
   가족 기능 화면 (팝업과 '글로 보기'에서 같이 씀)
   🏡 우리 가족 · 👤 구성원 집 · 💬 오늘의 질문 · 📅 달력 · 🗳️ 투표 · 🌱 나무 · 🎨 꾸미기 · 🙋 나는 누구 · 📸 사진 찍을 사람
   ========================================================= */
const { esc, avatarHTML, toast, confetti, onData, openView, closeModal, replyView, paintStatus } = UI;
const W = window.FAMILY;
const fire = (name, detail) => { try { dispatchEvent(new CustomEvent(name, { detail })); } catch {} };
const mmdd = md => { const [m, d] = String(md).split('-').map(Number); return `${m}월 ${d}일`; };
const bdDday = md => { const t = dayKey(); let k = `${t.slice(0, 4)}-${md}`; if (k < t) k = `${+t.slice(0, 4) + 1}-${md}`; return daysBetween(t, k); };

/* 다른 화면으로 가는 버튼들이 쓰는 연결 (main.js가 채움: 편지 보낸 뒤 꽃 심기 등) */
export const hooks = { onSent: null, takePhoto: null };

/* ---------- 🏡 우리 가족 ---------- */
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
          ${days > 0 ? `<div class="muted">함께한 지 <b style="color:var(--rose-deep)">${days.toLocaleString()}일째</b></div>` : ''}
        </div>` : ''}
        ${bd.length ? `<div class="bday-banner">🎂 오늘은 <b>${bd.map(m => esc(m.role || m.name)).join(', ')}</b> 생일이에요! <button class="btn small pink f-bday" type="button">축하 편지 쓰기</button></div>` : ''}
        ${W.greeting ? `<p class="inv-greet">${esc(W.greeting)}</p>` : ''}
        <div class="card">
          <b>👣 오늘 다녀간 가족</b>
          <div class="chips-row">${vs.length ? vs.map(m => `<span class="who-chip" style="--c:${esc(m.look.outfit)}">${esc(m.role || m.name)}</span>`).join('') : '<span class="muted">아직 아무도 안 왔어요</span>'}</div>
          ${me() ? `<p class="muted" style="margin:8px 0 0">내 출석 도장 <b>${myStamps()}개</b> 🐾</p>` : ''}
        </div>
        <div class="mem-grid">
          ${members().map(m => `
            <button type="button" class="mem-card" data-id="${esc(m.id)}">
              ${avatarHTML(m.look)}
              <b>${esc(m.role || m.name)}${m.id === meId() ? ' <small>(나)</small>' : ''}</b>
              <small>${esc(m.name)}${m.birthday ? ` · 🎂 ${mmdd(m.birthday)}` : ''}</small>
              <span class="mem-heart">💗 ${heartsTo(m.id).length}</span>
            </button>`).join('')}
        </div>
        ${ups.length ? `<div class="card"><b>📅 다가오는 날</b>${ups.map(e => `<div class="up-row"><span>${e.emoji || '📌'} ${esc(e.title)}</span><span class="dd">${ddayText(e.dday)}</span></div>`).join('')}
          <button class="btn small f-cal" type="button" style="margin-top:8px">달력 보기</button></div>` : ''}
        <div class="btns">
          <button class="btn pink f-q" type="button">💬 오늘의 질문</button>
          <button class="btn f-mail" type="button">✉️ 편지 쓰기</button>
          <button class="btn f-share" type="button">🔗 마을 주소 보내기</button>
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

/* ---------- 👤 구성원의 집: 프로필 · 하트 · 편지 · 연락 ---------- */
export function sendHeart(to) {
  if (!me()) { toast('하트는 가족만 보낼 수 있어요'); return false; }
  if (to === meId()) { toast('나에게는 하트를 보낼 수 없어요 😆'); return false; }
  if (sentHeartToday(to)) { toast(`오늘은 이미 ${callName(to)}에게 하트를 보냈어요 💗`); return false; }
  const day = dayKey();
  add('hearts', { id: `${meId()}-${to}-${day}`, who: meId(), to, day });
  fire('family:heart', { to });
  buzz(15); sound.sfx('heart');
  toast(`💗 ${callName(to)}에게 하트를 보냈어요`);
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
          <div class="muted">${esc(m.role || '')}${m.birthday ? ` · 🎂 ${mmdd(m.birthday)}${bday === 0 ? ' <b style="color:var(--rose-deep)">오늘!</b>' : ` (D-${bday})`}` : ''}</div>
          ${m.line ? `<p class="mem-line">“${esc(m.line)}”</p>` : ''}
        </div>
        ${bday === 0 ? `<div class="bday-banner">🎂 오늘은 ${esc(m.role || m.name)} 생일이에요!</div>` : ''}
        <div class="stat-row">
          <div><b>💗 ${heartsTo(m.id).length}</b><small>받은 하트 (오늘 ${heartsToday(m.id).length})</small></div>
          <div><b>👣 ${new Set(list('visits').filter(v => v.who === m.id).map(v => v.day)).size}</b><small>출석 도장</small></div>
          <div><b>💧 ${list('water').filter(w => w.who === m.id).length}</b><small>나무에 준 물</small></div>
        </div>
        <div class="btns">
          ${mine ? `
            <button class="btn pink m-look" type="button">🎨 내 캐릭터 꾸미기</button>
            <button class="btn m-inbox" type="button">💌 나에게 온 편지${unread ? ` <b class="badge">${unread}</b>` : ''}</button>`
          : `
            <button class="btn pink m-heart" type="button" ${sentHeartToday(m.id) ? 'disabled' : ''}>${sentHeartToday(m.id) ? '💗 오늘 하트 보냄' : '💗 하트 보내기'}</button>
            <button class="btn m-mail" type="button">✉️ 편지 쓰기</button>
            ${m.phone ? `<a class="btn small" href="tel:${esc(m.phone)}">📞</a><a class="btn small" href="sms:${esc(m.phone)}">💬</a>` : ''}`}
        </div>
        ${q ? `<div class="card"><b>💬 오늘의 질문</b><p class="muted" style="margin:6px 0">${esc(q.q)}</p>
          ${ans ? (canSee ? `<p class="ans-text">${esc(ans.text)}</p>` : '<p class="muted">🔒 나도 답하면 볼 수 있어요</p>') : `<p class="muted">아직 답하지 않았어요</p>`}
          <button class="btn small m-q" type="button">답하러 가기</button></div>` : ''}
        ${fromThem.length ? `<div class="card"><b>✉️ ${esc(m.role || m.name)}의 최근 편지</b>${fromThem.map((l, i) => `<button type="button" class="up-row linkrow" data-i="${i}"><span>${esc(String(l.message).split('\n')[0].slice(0, 26))}</span><span class="muted">${shortDate(l.time)}</span></button>`).join('')}</div>` : ''}`;
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
  openView(m ? (m.id === meId() ? '🏠 내 집' : `${m.emoji || '🏠'} ${m.role || m.name}네 집`) : '우리 가족', memberView(id));
}

/* ---------- 💬 오늘의 질문 (내가 답해야 다른 가족 답이 열려요) ---------- */
export function questionView(day = dayKey(), { embedded = false } = {}) {
  const mount = root => {
    const box = root.querySelector('.q-box');
    const cleanups = [];
    const render = () => {
      if (!box.isConnected) return;
      cleanups.splice(0).forEach(c => c());
      const q = questionOn(day);
      if (!q) { box.innerHTML = '<p class="muted">config.js에 질문이 없어요</p>'; return; }
      const answers = answersOn(day), mine = myAnswer(day), isToday = day === dayKey();
      const others = answers.filter(a => a.who !== meId());
      box.innerHTML = `
        <div class="q-hero">
          <div class="muted">${isToday ? `오늘의 질문 · ${keyLabel(day)}` : `${keyLabel(day)}의 질문`}</div>
          <div class="q-text">${esc(q.q)}</div>
          <div class="muted">${answers.length ? `${answers.length}명이 답했어요` : '아직 아무도 답하지 않았어요'}</div>
        </div>
        ${me() ? `
          <form class="q-form" autocomplete="off" ${mine ? 'hidden' : ''}>
            <textarea class="field q-in" maxlength="300" placeholder="나의 답을 적어 주세요 (300자)" aria-label="나의 답">${mine ? esc(mine.text) : ''}</textarea>
            <button class="btn pink" type="submit" style="width:100%;margin-top:8px">${mine ? '✏️ 고친 답 올리기' : '💬 답하고 가족 답 보기'}</button>
          </form>`
          : '<p class="muted center">🙋 답은 가족만 남길 수 있어요. 메뉴의 \'나는 누구?\'에서 나를 골라 주세요</p>'}
        <div class="ans-list">
          ${mine ? ansCard(mine, true) : ''}
          ${mine ? others.map(a => ansCard(a)).join('') : others.map(a => `<div class="ans-card locked" style="--c:${esc(member(a.who)?.look.outfit || '#E6D5C6')}">${avatarHTML(member(a.who)?.look || {}, 'mini')}<b>${esc(callName(a.who) || a.name)}</b><span class="muted">🔒 답하면 열려요</span></div>`).join('')}
        </div>
        ${embedded ? '' : `<div class="divider"></div><b>🗓️ 지난 질문</b><div class="past-q">${recentQuestions(14).filter(x => x.day !== day).map(x => `<button type="button" class="up-row linkrow" data-day="${x.day}"><span>${esc(x.q)}</span><span class="muted">${keyLabel(x.day, false)} · ${x.answers.length}명</span></button>`).join('')}</div>`}`;
      const f = box.querySelector('.q-form');
      if (f) f.onsubmit = async e => {
        e.preventDefault();
        const text = f.querySelector('.q-in').value.trim();
        if (!text) { toast('답을 적어 주세요'); return; }
        const r = await add('answers', { id: `${meId()}-${day}`, who: meId(), name: memberName(meId()), day, q: q.idx, text });
        toast(r.ok ? (mine ? '✏️ 답을 고쳤어요' : '💬 답했어요! 가족의 답이 열렸어요') : '휴대폰에 보관했어요. 연결되면 자동으로 올릴게요', 2600);
        if (!mine) { confetti(['💬', '💗', '✨']); sound.sfx('tada'); }
        render();
      };
      box.querySelector('.a-edit')?.addEventListener('click', () => { f.hidden = false; box.querySelector('.ans-card.me')?.remove(); f.querySelector('.q-in').focus(); });
      box.querySelectorAll('.past-q .linkrow').forEach(b => b.onclick = () => showQuestion(b.dataset.day));
      // 답마다 반응·답장
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
    <div class="ans-top">${avatarHTML(m?.look || {}, 'mini')}<b>${esc(m ? (m.role || m.name) : a.name)}${isMine ? ' (나)' : ''}</b><small class="muted">${shortDate(a.time)}</small>${isMine ? '<button type="button" class="linklike a-edit">고치기</button>' : ''}</div>
    <p class="ans-text">${esc(a.text)}</p>
  </div>`;
}
export function showQuestion(day = dayKey()) { openView('💬 오늘의 질문', questionView(day)); }

/* ---------- 📅 가족 달력 ---------- */
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
  toast('📅 캘린더 파일을 열어 저장해 주세요');
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
        <div class="cal-nav"><button class="btn small c-prev" type="button" aria-label="이전 달">‹</button><b>${y}년 ${mo}월</b><button class="btn small c-next" type="button" aria-label="다음 달">›</button></div>
        <table class="cal fam-cal"><tr>${['일', '월', '화', '수', '목', '금', '토'].map((n, i) => `<th class="${i === 0 ? 'sun' : ''}">${n}</th>`).join('')}</tr>${cells}</table>
        <div class="card">${dayEvs.length ? dayEvs.map(e => `<div class="up-row"><span>${e.emoji || '📌'} ${esc(e.title)}</span>${e.note ? `<small class="muted">${esc(e.note)}</small>` : ''}</div>`).join('') : `<span class="muted">${keyLabel(pick)} · 특별한 날이 없어요</span>`}</div>
        <b>⏰ 다가오는 날</b>
        <div class="ups">${ups.map((e, i) => `<div class="up-row"><span>${e.emoji || '📌'} ${esc(e.title)}<small class="muted"> · ${keyLabel(e.key)}${e.note ? ` · ${esc(e.note)}` : ''}</small></span><span class="dd">${ddayText(e.dday)}</span><button type="button" class="linklike c-ics" data-i="${i}">캘린더에</button></div>`).join('') || '<p class="muted">config.js의 events에 날짜를 넣어 주세요</p>'}</div>`;
      box.querySelector('.c-prev').onclick = () => { mo--; if (mo < 1) { mo = 12; y--; } render(); };
      box.querySelector('.c-next').onclick = () => { mo++; if (mo > 12) { mo = 1; y++; } render(); };
      box.querySelectorAll('.fam-cal button').forEach(b => b.onclick = () => { pick = b.dataset.k; buzz(6); render(); });
      box.querySelectorAll('.c-ics').forEach(b => b.onclick = () => icsFor(ups[+b.dataset.i]));
    };
    render();
  };
  return { html: '<div class="cal-box"></div>', mount };
}
export function showCalendar() { openView('📅 가족 달력', calendarView()); }

/* ---------- 🗳️ 가족 투표함 ---------- */
export function pollView() {
  const mount = root => {
    const box = root.querySelector('.poll-box');
    let making = false;
    const render = () => {
      if (!box.isConnected) return;
      const ps = polls();
      box.innerHTML = `
        <p class="muted">가족 일은 다 같이 정해요. 마음이 바뀌면 다시 눌러도 돼요 🗳️</p>
        ${ps.map((p, pi) => {
          const v = votesFor(p.id), total = v.size, my = v.get(meId());
          const by = p.cfg ? '' : `<small class="muted"> · ${esc(callName(p.who) || p.name)}가 만든 투표</small>`;
          return `<div class="card poll" data-p="${pi}"><b>${esc(p.q)}</b>${by}
            ${p.options.map((o, k) => {
              const who = [...v.entries()].filter(([, c]) => c === k).map(([w]) => w);
              const pct = total ? Math.round(who.length / total * 100) : 0;
              return `<button type="button" class="poll-opt${my === k ? ' on' : ''}" data-k="${k}" ${me() ? '' : 'disabled'}>
                <span class="bar" style="width:${pct}%"></span><span class="txt">${esc(o)}</span><span class="cnt">${who.length ? `${who.length}표` : ''}</span>
                ${who.length ? `<span class="voters">${who.map(w => `<i style="--c:${esc(member(w)?.look.outfit || '#ccc')}">${esc(callName(w))}</i>`).join('')}</span>` : ''}
              </button>`;
            }).join('')}
            <small class="muted">${total ? `${total}명 참여` : '아직 아무도 안 했어요'}</small></div>`;
        }).join('')}
        ${me() ? (making ? `
          <form class="card poll-new" autocomplete="off">
            <b>＋ 새 투표</b>
            <input class="field pn-q" maxlength="40" placeholder="무엇을 정할까요? (예: 일요일 점심 메뉴)" aria-label="질문">
            ${[0, 1, 2, 3].map(k => `<input class="field pn-o" maxlength="20" placeholder="보기 ${k + 1}${k > 1 ? ' (선택)' : ''}" aria-label="보기 ${k + 1}">`).join('')}
            <div class="btns"><button class="btn pink" type="submit">투표 만들기</button><button class="btn pn-cancel" type="button">취소</button></div>
          </form>` : '<button class="btn p-make" type="button" style="width:100%">＋ 새 투표 만들기</button>')
          : '<p class="muted center">🙋 투표는 가족만 할 수 있어요</p>'}`;
      box.querySelectorAll('.poll').forEach(card => {
        const p = ps[+card.dataset.p];
        card.querySelectorAll('.poll-opt').forEach(b => b.onclick = async () => {
          const k = +b.dataset.k;
          if (votesFor(p.id).get(meId()) === k) { toast('이미 고른 보기예요'); return; }
          buzz(10); sound.sfx('pop');
          await add('votes', { id: `${meId()}-${p.id}`, who: meId(), poll: p.id, choice: k });
          toast(`🗳️ '${p.options[k]}'에 한 표!`);
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
        if (!q || opts.length < 2) { toast('질문과 보기 두 개 이상을 적어 주세요'); return; }
        making = false;
        await add('polls', { who: meId(), name: memberName(meId()), q, options: opts.join('|') });
        toast('🗳️ 새 투표를 만들었어요. 가족에게 알려 주세요!');
        render();
      };
    };
    render();
    refresh();
    return onData(render);
  };
  return { html: '<div class="poll-box"></div>', mount };
}
export function showPolls() { openView('🗳️ 가족 투표함', pollView()); }

/* ---------- 🌱 함께 키우는 나무 ---------- */
const STAGE_EMOJI = ['🌰', '🌱', '🌿', '🌳', '🌸', '🍎'];
export function waterTree() {
  if (!me()) { toast('물은 가족만 줄 수 있어요'); return false; }
  const before = treeInfo();
  if (before.wateredToday) { toast('💧 오늘은 이미 물을 줬어요. 내일 또 와 주세요'); return false; }
  const day = dayKey();
  add('water', { id: `${meId()}-${day}`, who: meId(), day });
  buzz(20); sound.sfx('water');
  // 저장은 바로 반영되므로 다음 숫자로 성장 여부를 봄
  setTimeout(() => {
    const after = treeInfo();
    fire('family:water', { grew: after.stage > before.stage, stage: after.stage });
    if (after.stage > before.stage) { confetti(['🌱', '🌸', '✨', '🍎']); sound.sfx('tada'); toast(`🎉 ${josa(after.name, '이/가')} '${after.stageName}'${josa(after.stageName, '으로/로').slice(after.stageName.length)} 자랐어요!`, 3600); }
    else toast(after.next == null ? '💧 물을 줬어요. 열매가 주렁주렁해요 🍎' : `💧 물을 줬어요! ${after.toNext}번 더 주면 '${STAGE_NAMES[after.stage + 1]}'이 돼요`, 3000);
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
          <div class="muted">지금은 <b>${t.stageName}</b> · 모인 물 ${t.total}번${t.thirsty ? ' · 💧 목말라요' : ''}</div>
          <div class="prog"><i style="width:${Math.round(t.progress * 100)}%"></i></div>
          <small class="muted">${t.next == null ? '다 자랐어요! 열매가 열렸어요 🍎' : `${t.toNext}번 더 주면 '${STAGE_NAMES[t.stage + 1]}'`}</small>
        </div>
        <p class="muted center">가족이 하루에 한 번씩 물을 줄 수 있어요. 다 같이 오래 들를수록 나무가 자라요</p>
        <button class="btn pink t-water" type="button" style="width:100%;padding:14px" ${!me() || t.wateredToday ? 'disabled' : ''}>${!me() ? '🙋 가족만 물을 줄 수 있어요' : t.wateredToday ? '💧 오늘은 물을 줬어요' : '💧 물 주기'}</button>
        <div class="card"><b>오늘 물 준 가족</b><div class="chips-row">${t.todayWho.length ? t.todayWho.map(w => `<span class="who-chip" style="--c:${esc(member(w)?.look.outfit || '#ccc')}">${esc(callName(w))}</span>`).join('') : '<span class="muted">아직 없어요</span>'}</div></div>
        <div class="week">${week.map(d => `<div><i style="height:${8 + d.n * 12}px"></i><small>${keyLabel(d.k, false).replace('월 ', '/').replace('일', '')}</small></div>`).join('')}</div>`;
      box.querySelector('.t-water').onclick = () => { if (waterTree()) setTimeout(render, 60); };
    };
    render();
    refresh();
    return onData(render);
  };
  return { html: '<div class="tree-box"></div>', mount };
}
export function showTree() { openView('🌱 ' + treeInfo().name, treeView()); }

/* ---------- 🎨 내 캐릭터 꾸미기 ---------- */
const GUEST_LOOK = 'family-guest-look';
export function currentLook() {
  const m = me();
  if (m) return { ...m.look };
  try { const g = JSON.parse(localStorage.getItem(GUEST_LOOK) || 'null'); if (g) return g; } catch {}
  return { outfit: PALETTE[Math.floor(Math.random() * PALETTE.length)], hair: HAIRS[Math.floor(Math.random() * 5)], longHair: Math.random() < 0.5 };
}
export function lookView() {
  const look = currentLook();
  const HATS = [['', '없음'], ['cap', '야구 모자'], ['beanie', '털모자'], ['flower', '꽃핀']];
  const mount = root => {
    const box = root.querySelector('.look-box');
    const render = () => {
      box.innerHTML = `
        <div class="look-preview">${(() => { const pic = hooks.portrait?.(look); return pic ? `<img class="look-img" src="${pic}" alt="">` : avatarHTML(look, 'big'); })()}</div>
        <b>옷 색</b><div class="sw">${PALETTE.map(c => `<button type="button" class="sw-c${look.outfit === c ? ' on' : ''}" data-k="outfit" data-v="${c}" style="--c:${c}" aria-label="옷 색 ${c}"></button>`).join('')}</div>
        <b>머리 색</b><div class="sw">${HAIRS.map(c => `<button type="button" class="sw-c${look.hair === c ? ' on' : ''}" data-k="hair" data-v="${c}" style="--c:${c}" aria-label="머리 색 ${c}"></button>`).join('')}</div>
        <b>머리 모양</b><div class="seg"><button type="button" data-k="longHair" data-v="0" class="${!look.longHair ? 'on' : ''}">짧은 머리</button><button type="button" data-k="longHair" data-v="1" class="${look.longHair ? 'on' : ''}">긴 머리</button></div>
        <b>안경</b><div class="seg"><button type="button" data-k="glasses" data-v="0" class="${!look.glasses ? 'on' : ''}">안 써요</button><button type="button" data-k="glasses" data-v="1" class="${look.glasses ? 'on' : ''}">👓 써요</button></div>
        <b>모자</b><div class="seg">${HATS.map(([v, l]) => `<button type="button" data-k="hat" data-v="${v}" class="${(look.hat || '') === v ? 'on' : ''}">${l}</button>`).join('')}</div>
        <b>키</b><div class="seg"><button type="button" data-k="kid" data-v="0" class="${!look.kid ? 'on' : ''}">어른</button><button type="button" data-k="kid" data-v="1" class="${look.kid ? 'on' : ''}">아이</button></div>
        <button class="btn pink lk-save" type="button" style="width:100%;margin-top:14px;padding:14px">✨ 이 모습으로 할래요</button>
        ${me() ? '<p class="muted center">바꾼 모습은 가족에게도 보여요 (내 집 앞의 나)</p>' : ''}`;
      box.querySelectorAll('[data-k]').forEach(b => b.onclick = () => {
        const k = b.dataset.k, v = b.dataset.v;
        look[k] = ['longHair', 'glasses', 'kid'].includes(k) ? v === '1' : v;
        buzz(6); sound.sfx('pop');
        render();
      });
      box.querySelector('.lk-save').onclick = async () => {
        if (me()) await add('looks', { id: meId(), who: meId(), look: { ...look } });
        else { try { localStorage.setItem(GUEST_LOOK, JSON.stringify(look)); } catch {} }
        fire('family:look', look);
        toast('✨ 새 모습으로 바뀌었어요');
        closeModal();
      };
    };
    render();
  };
  return { html: '<div class="look-box"></div>', mount };
}
export function showLook() { openView('🎨 내 캐릭터 꾸미기', lookView()); }

/* ---------- 🙋 나는 누구예요? (시작 화면과 메뉴에서) ---------- */
/* 3D로 찍은 캐릭터 그림 (game.portrait) — 없으면 그림 대신 간단한 아바타 */
const portraits = new Map();
export function setPortrait(id, url) { if (url) portraits.set(id, url); }
export const picHTML = (id, look) => portraits.has(id) ? `<img class="char-img" src="${portraits.get(id)}" alt="" draggable="false">` : avatarHTML(look, 'big');
export function whoHTML(selected = meId(), { carousel = false } = {}) {
  return `<div class="who-grid${carousel ? ' carousel' : ''}">
    ${members().map(m => `<button type="button" class="who-btn${selected === m.id ? ' on' : ''}" data-id="${esc(m.id)}" style="--c:${esc(m.look.outfit || '#8FB8DE')}" aria-label="${esc(m.role || m.name)}"><span class="char-pic">${picHTML(m.id, m.look)}</span><b>${esc(m.role || m.name)}</b><small>${esc(m.name)}</small></button>`).join('')}
    <button type="button" class="who-btn guest${selected === 'guest' ? ' on' : ''}" data-id="guest" style="--c:#C9BBA9" aria-label="손님으로 구경만"><span class="char-pic"><span class="guest-ic">👀</span></span><b>구경만</b><small>손님</small></button>
  </div>`;
}
export function whoView(onPick) {
  const mount = root => {
    root.querySelectorAll('.who-btn').forEach(b => b.onclick = () => {
      buzz(10); sound.sfx('pop');
      setMe(b.dataset.id);
      onPick?.(b.dataset.id);
      closeModal();
      toast(b.dataset.id === 'guest' ? '👀 손님으로 구경해요' : `🙋 ${josa(callName(b.dataset.id), '으로/로')} 들어왔어요`);
    });
  };
  return { html: `<p class="muted">이 휴대폰을 쓰는 사람을 골라 주세요. 편지·답·하트가 이 이름으로 남아요</p>${whoHTML()}`, mount };
}
export function showWho(onPick) { openView('🙋 나는 누구예요?', whoView(onPick)); }

/* ---------- 🔒 가족 암호 설정 (선택: 안 걸면 누구나 바로 들어와요) ---------- */
export function lockSettingsView(onChange) {
  const mount = root => {
    const box = root.querySelector('.lockset');
    const render = () => {
      const L = lockInfo(), knows = L.locked && !!savedCode();
      box.innerHTML = `
        <div class="card center">
          <div style="font-size:40px">${L.locked ? '🔒' : '🔓'}</div>
          <b>${L.locked ? '가족 암호가 걸려 있어요' : '지금은 암호 없이 누구나 들어와요'}</b>
          <p class="muted" style="margin:6px 0 0">${L.remote
            ? '암호는 구글 시트에 저장돼서 가족 모두에게 똑같이 적용돼요.'
            : '⚠️ 구글 시트를 연결하지 않아서 <b>이 휴대폰에서만</b> 잠겨요. 가족 모두에게 걸려면 시트를 연결하세요 (tools/가족_시트_연결.md).'}</p>
        </div>
        <form class="ls-form" autocomplete="off">
          ${L.locked && !knows ? '<input class="field ls-cur" type="password" maxlength="30" placeholder="지금 암호" aria-label="지금 암호">' : ''}
          <input class="field ls-new" type="password" maxlength="30" placeholder="${L.locked ? '새 암호' : '정할 암호 (숫자·글자)'}" aria-label="새 암호">
          <input class="field ls-new2" type="password" maxlength="30" placeholder="한 번 더" aria-label="새 암호 확인">
          <input class="field ls-hint" maxlength="40" placeholder="힌트 (선택, 예: 우리 집 현관 비밀번호 앞 네 자리)" aria-label="힌트" value="${esc(L.hint || '')}">
          <button class="btn pink" type="submit" style="width:100%;margin-top:10px">${L.locked ? '🔒 암호 바꾸기' : '🔒 암호 걸기'}</button>
        </form>
        ${L.locked ? '<button class="btn ls-off" type="button" style="width:100%;margin-top:8px">🔓 암호 없애기 (누구나 들어오게)</button>' : ''}
        <p class="muted center" style="font-size:12.5px">암호는 단톡방 링크와 같은 메시지에 쓰지 말고 따로 알려 주세요</p>`;
      const cur = () => box.querySelector('.ls-cur')?.value.trim() || '';
      const save = async (next, hint) => {
        const r = await setFamilyCode({ current: cur(), next, hint });
        if (!r.ok) { toast(r.error === 'code' ? '지금 암호가 달라요 🔒' : '연결이 안 돼요. 잠시 뒤 다시 해 주세요'); return; }
        toast(next ? '🔒 가족 암호를 걸었어요' : '🔓 이제 암호 없이 누구나 들어와요', 2800);
        buzz(15); sound.sfx('chime');
        onChange?.();
        closeModal();
      };
      box.querySelector('.ls-form').onsubmit = e => {
        e.preventDefault();
        const a = box.querySelector('.ls-new').value.trim(), b = box.querySelector('.ls-new2').value.trim();
        if (!a) { toast('정할 암호를 적어 주세요'); return; }
        if (a !== b) { toast('두 번 적은 암호가 달라요'); return; }
        save(a, box.querySelector('.ls-hint').value);
      };
      box.querySelector('.ls-off')?.addEventListener('click', () => save('', ''));
    };
    render();
  };
  return { html: '<div class="lockset"></div>', mount };
}
export function showLockSettings(onChange) { openView('🔒 가족 암호', lockSettingsView(onChange)); }

/* ---------- 📸 가족 포토존: 같이 찍을 사람 고르기 ---------- */
export function photoPickView() {
  const others = members().filter(m => m.id !== meId());
  const sel = new Set(others.slice(0, 5).map(m => m.id));
  const mount = root => {
    const paint = () => root.querySelectorAll('.who-btn').forEach(b => b.classList.toggle('on', sel.has(b.dataset.id)));
    root.querySelectorAll('.who-btn').forEach(b => b.onclick = () => {
      const id = b.dataset.id;
      if (sel.has(id)) sel.delete(id); else if (sel.size < 5) sel.add(id); else toast('한 번에 다섯 명까지 같이 찍을 수 있어요');
      buzz(6); paint();
    });
    root.querySelector('.pp-go').onclick = () => { closeModal(); setTimeout(() => hooks.takePhoto?.([...sel]), 260); };
    paint();
  };
  return {
    html: `<p class="muted">누구랑 같이 찍을까요? (최대 5명)</p>
      <div class="who-grid">${others.map(m => `<button type="button" class="who-btn" data-id="${esc(m.id)}">${avatarHTML(m.look)}<b>${esc(m.role || m.name)}</b></button>`).join('')}</div>
      <button class="btn pink pp-go" type="button" style="width:100%;margin-top:12px;padding:14px">📸 3 · 2 · 1 찍기</button>`,
    mount,
  };
}
export function showPhotoPick() { openView('📸 가족사진', photoPickView()); }

export { isGuest, formatKDate };
