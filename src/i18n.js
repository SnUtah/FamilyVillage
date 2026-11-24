/* =========================================================
   Language helpers (Korean / English)
   The language is picked by the inline script in index.html (window.VILLAGE_LANG):
   ?lang=ko|en in the address → saved choice → device language
   (Korean device → Korean, otherwise English).
   ========================================================= */
const KEY = 'family-lang';

/* Same order as the inline script; used only if index.html did not set it */
function detect() {
  let q = null, s = null;
  try { q = (location.search.match(/[?&]lang=(ko|en)\b/) || [])[1] || null; } catch {}
  if (q) return q;
  try { s = localStorage.getItem(KEY); } catch {}
  if (s === 'ko' || s === 'en') return s;
  const d = ((navigator.languages && navigator.languages[0]) || navigator.language || '').toLowerCase();
  return d.indexOf('ko') === 0 ? 'ko' : 'en';
}

export const LANG = window.VILLAGE_LANG === 'ko' || window.VILLAGE_LANG === 'en' ? window.VILLAGE_LANG : detect();
export const isKo = LANG === 'ko';

/** L('한국어', 'English') → the string for the current language */
export const L = (ko, en) => (isKo ? ko : en);

/** Switch language: remember it, drop ?lang from the address, reload.
    (If the browser cannot save it, keep it in the address instead.) */
export function setLang(lang) {
  let saved = false;
  try { localStorage.setItem(KEY, lang); saved = localStorage.getItem(KEY) === lang; } catch {}
  const u = new URL(location.href);
  if (saved) u.searchParams.delete('lang'); else u.searchParams.set('lang', lang);
  // Same address (e.g. only a #hash) would not reload, so reload explicitly
  if (u.href === location.href) location.reload(); else location.replace(u.href);
}

/* ---------- English config ----------
   window.FAMILY_EN (config.js) holds the English text in the same shape as window.FAMILY.
   It is merged into window.FAMILY once, in place:
   - objects merge key by key
   - an array of objects merges element by element into the Korean elements that exist
     (an English element may carry only the text fields; extra English elements are ignored)
   - an array of strings / a string / a number replaces the Korean one
     (so an English string array, e.g. poll options or quiz options, must keep the same count and order:
      votes and quiz answers are saved as the option's number)
   Anything left out keeps the Korean content. */
const isObj = v => v !== null && typeof v === 'object' && !Array.isArray(v);
// English-only display fields that may be added even though the Korean side has no such key
const EN_ONLY = new Set(['banner']);
function mergeConfig(base, en) {
  if (!isObj(base) || !isObj(en)) return;
  for (const k of Object.keys(en)) {
    const e = en[k], b = base[k];
    if (e === undefined || e === null) continue;
    // never add what the Korean side does not have (e.g. emptied sample answers)
    if (b === undefined && !EN_ONLY.has(k)) continue;
    if (Array.isArray(e)) {
      if (!Array.isArray(b)) continue;
      if (e.some(isObj)) {
        // never add elements: only fill in the Korean ones that exist
        e.forEach((x, i) => { if (isObj(x) && isObj(b[i])) mergeConfig(b[i], x); });
      } else if (b.length) base[k] = e.slice(); // an emptied Korean list stays empty
    } else if (isObj(e)) {
      if (isObj(b)) mergeConfig(b, e);
    } else if (b !== '') base[k] = e; // an emptied Korean text stays empty
  }
}
/* Is the English block out of date? FAMILY_EN describes the sample family ("The Kims").
   If the Korean content no longer matches that sample (village name, member names, meeting-place address
   or the first question changed) while the English block still says "The Kims" (or has no name),
   merging would mix the sample family into a real family's site: then skip the content merge
   (English interface, Korean content). */
const F = window.FAMILY, E = window.FAMILY_EN;
const SAMPLE = { name: '김씨네', members: '김할머니|김아빠|김엄마|김첫째|김막내', address: '경기도 행복시 사랑로 45', q0: '어릴 때 제일 좋아했던 반찬은?' };
const firstQ = q => (typeof q === 'string' ? q : q?.q) || '';
const koChanged = !!F && (F.name !== SAMPLE.name
  || (F.members || []).map(m => m?.name).join('|') !== SAMPLE.members
  || F.place?.address !== SAMPLE.address
  || firstQ(F.questions?.[0]) !== SAMPLE.q0);
const enSample = !E?.name || E.name === 'The Kims';
if (!isKo && F && E && !(koChanged && enSample)) mergeConfig(F, E);
