// The sequencing engine. Lead type starts the clock and sets the cadence; the cadence is the same for
// every communication style (style changes the words and which channel carries the substance); consent
// and the law set the walls; the hour comes from the timing evidence and never delays a first call;
// priority sets the order. Deterministic: the same inputs give the same day.

// ---- shared store (queue state, demo clock) so the Now bar, Today and Compose agree -------------
// coaching on (tips and the why on every touch) helps newer team members; experienced ones can turn it off
function xCoachSaved() { try { const v = window.localStorage.getItem("acc.coach"); return v == null ? true : v === "1"; } catch (e) { return true; } }
const XFRESH = (() => { try { return /[?&]fresh=1/.test(window.location.search); } catch (e) { return false; } })();
// the Today view the page opens on: Workflow by default; ?view=workflow|classic|queue picks another
const XVIEW0 = (() => { try { const m = /[?&]view=(workflow|classic|queue)(?=&|#|$)/.exec(window.location.search); return m ? m[1] : "workflow"; } catch (e) { return "workflow"; } })();
const XS = { state: "US", done: {}, chan: {}, asks: {}, help: {}, miss: {}, pro: {}, cool: {}, open: null, clock: 11 * 60, clockAt: Date.now(), focus: false, bump: {}, view: XVIEW0, home: XVIEW0, wfStrike: {}, wfLast: null, wfScroll: null, seed: 7, coach: xCoachSaved(), seeded: false };
// The demo opens mid-morning with the morning's work already logged, so the board shows progress, not zeros.
// Everything before (clock − 30 min) is marked done: messages sent, calls in a steady pattern of outcomes.
const XSEED_CALLS = ["quoted", "talked", "noanswer", "talked", "quoted", "noanswer", "talked", "noanswer"];
function xSeedUpTo(minutes, silent) {
  const apply = silent ? (patch) => Object.assign(XS, patch) : xSet;
  const base = { chan: {}, asks: {}, help: {}, miss: {}, pro: {}, cool: {}, open: null, bump: {}, wfStrike: {}, wfLast: null };
  if (minutes == null) { apply({ ...base, done: {} }); return; }
  const cutoff = minutes - 20;
  let done = {}, asks = {}, ci = 0;
  const talkedLeads = [];
  for (let pass = 0; pass < 2; pass++) {
    XS.done = done;
    const day = xBuildDay(XQ, minutes);
    for (const t of day.touches.slice().sort((a, b) => a.slot - b.slot)) {
      if (t.tomorrow || t.slot > cutoff || done[t.id]) continue;
      if (t.wk === "now" && t.lead.seen != null) continue;
      let k;
      if (t.ch === "call") { if (pass === 0) continue; k = t.booked ? "talked" : XSEED_CALLS[ci++ % XSEED_CALLS.length]; if (k === "talked" || k === "quoted") talkedLeads.push(t.lead.id); }
      else k = "sent";
      done = { ...done, [t.id]: { k, ch: t.ch, at: Date.now() - (minutes - t.slot) * 60000, t: t.slot, by: XS.persona || "Alex", when: t.slot } };
    }
  }
  if (talkedLeads[0]) asks[talkedLeads[0]] = { life: true };
  if (talkedLeads[1]) asks[talkedLeads[1]] = { ref: true };
  // cooler leads worked in the open stretches already past: two per block, logged at the block's end
  const cool = {};
  if (typeof xOpenBlocks === "function" && typeof XCOOL !== "undefined") {
    XS.done = done;
    const blocks = xOpenBlocks(xBuildDay(XQ, minutes)).filter((g) => g[1] <= cutoff);
    blocks.forEach((g, bi) => XCOOL.slice(bi * 2, bi * 2 + 2).forEach((l) => { cool[l.id] = g[1] - 5; }));
  }
  apply({ ...base, done, asks, cool });
}
// set the demo clock and reseed the day to match it (9:00, when the office opens, = a fresh day)
function xStartOver() { xSet({ clock: 9 * 60, clockAt: Date.now() }); xSeedUpTo(null, false); }
function xSetClock(v) { xSet({ clock: v, clockAt: Date.now() }); xSeedUpTo(XFRESH ? null : v == null ? xRealClock() : v, false); }
function xSetCoach(on) { try { window.localStorage.setItem("acc.coach", on ? "1" : "0"); } catch (e) {} xSet({ coach: on }); }
const XSubs = new Set();
function xSet(patch) { Object.assign(XS, typeof patch === "function" ? patch(XS) : patch); XSubs.forEach((f) => f()); }
function useXS() {
  const [, force] = I.useState(0);
  I.useEffect(() => { const f = () => force((x) => x + 1); XSubs.add(f); return () => { XSubs.delete(f); }; }, []);
  return XS;
}
const XNav = { go: null };
// minutes since midnight (with seconds): the demo clock when it is set, else the real local time
function xRealClock() { const d = new Date(); return d.getHours() * 60 + d.getMinutes() + d.getSeconds() / 60; }
function xClock() { return XS.clock != null ? XS.clock + (XS.clockAt ? Math.max(0, Date.now() - XS.clockAt) / 60000 : 0) : xRealClock(); }
const XLOAD = xRealClock();
// when a new lead landed: `seen` minutes before page load (or before the demo clock, when it is set)
function xLanded(lead) { return (XS.clock != null ? XS.clock : XLOAD) - (lead.seen || 0); }
function xFmt(min) {
  const m = ((Math.round(min) % 1440) + 1440) % 1440, h = Math.floor(m / 60), mm = m % 60;
  return `${((h + 11) % 12) + 1}:${String(mm).padStart(2, "0")} ${h >= 12 ? "PM" : "AM"}`;
}
function xParseAt(s) { const m = /(\d+):(\d+)\s*(AM|PM)/i.exec(s || ""); if (!m) return null; let h = +m[1] % 12; if (/pm/i.test(m[3])) h += 12; return h * 60 + +m[2]; }

// ---- evidence tags (each rule points at one) ------------------------------------------------------
const XREF = {};

// ---- hours: legal walls first, then where each channel works best ---------------------------------
// Rules by state: the federal TCPA floor plus the state overlay the agency sits in. The engine reads hours,
// the text-consent rule and any attempt cap from here, so a second state is a row, not a rebuild.
const XSTATE = {
  US: { label: "Most states", hours: [8 * 60, 20 * 60], textConsent: "prior express written consent for marketing texts", cap: null, note: "The federal TCPA floor most states follow: 8 am\u20138 pm their time, written consent before marketing texts, the Do Not Call list honored. State overlays are a setting, never a change to the plan" },
  WA: { label: "Washington", hours: [8 * 60, 20 * 60], textConsent: "clear, affirmative consent in advance; a quote request is not consent", cap: null, note: "$100 statutory damages per unsolicited commercial text (RCW 19.190, ESHB 2274, from June 11, 2026)" },
  MD: { label: "Maryland", hours: [8 * 60, 20 * 60], textConsent: "prior express written consent", cap: 3, note: "Md. Code Com. Law \u00a7 14-3201 et seq., in force since Jan 1, 2024" },
  FL: { label: "Florida", hours: [8 * 60, 20 * 60], textConsent: "written consent, a signature or checkbox", cap: 3, note: "FTSA as amended May 2023; a 15-day cure notice precedes any text suit" },
  OK: { label: "Oklahoma", hours: [8 * 60, 20 * 60], textConsent: "prior express written consent", cap: 3, note: "Okla. Stat. tit. 15 \u00a7 775C, in force since Nov 1, 2022" },
  TX: { label: "Texas", hours: [9 * 60, 21 * 60], textConsent: "prior express consent", cap: null, note: "Federal floor; Texas registration for telephone solicitors; 9 am\u20139 pm" },
};
function xState() { return XSTATE[XS.state] || XSTATE.WA; }
const XLEGAL = { get call() { return xState().hours; }, get text() { return xState().hours; }, email: [0, 24 * 60] };
// the office day: planned work runs 9 to 5 with lunch off; the law allows 8 am–8 pm, the plan uses 9–5
const XDAY = { open: 9 * 60, close: 17 * 60, lunch: [12 * 60, 13 * 60] };
const XOPEN_LABEL = "9:00 AM";
const XWIN = {};

// ---- cadences by lead type: the research default, "1-20-60, then 6-5-3 in 22" for a new lead ---------
// day = offset from the anchor (negative counts back from a renewal date); ch = channels the step allows;
// win = the window (m20/m45/m90 count minutes from the first touch); vm = voicemail length in seconds
const XSRC = {
  IL: { label: "Internet lead", anchor: "the minute the lead arrives", steps: [
    { n: 1, day: 0, win: "now", ch: ["call"], what: "First call", ref: "T1" },
    { n: 2, day: 0, win: "m20", ch: ["email"], what: "Email the quote", ref: "T2" },
    { n: 3, day: 0, win: "m45", ch: ["call"], what: "Second call", ref: "T2", vm: 15 },
    { n: 4, day: 0, win: "m90", ch: ["call"], what: "Third call", ref: "T2" },
    { n: 5, day: 1, win: "call", ch: ["call"], what: "Fourth call", ref: "T3" },
    { n: 6, day: 4, win: "email", ch: ["email"], what: "Second email", ref: "T3" },
    { n: 7, day: 5, win: "reach", ch: ["call"], what: "Fifth call", ref: "T3" },
    { n: 8, day: 8, win: "emailpm", ch: ["email"], what: "Third email", ref: "T3" },
    { n: 9, day: 14, win: "email", ch: ["email"], what: "Fourth email", ref: "T3" },
    { n: 10, day: 15, win: "reach", ch: ["call"], what: "Sixth and last call", ref: "T3", vm: 30 },
    { n: 11, day: 22, win: "emailpm", ch: ["email"], what: "Last email: an easy out", ref: "T3" },
    { n: 12, day: 45, win: "email", ch: ["email", "text"], what: "Nurture: a short burst again", ref: "T15" },
    { n: 13, day: 180, win: "email", ch: ["email", "text"], what: "Six months: re-quote, or the X-date steps", ref: "T12" },
  ] },
  RF: { label: "Referral", anchor: "the day the referral comes in", steps: [
    { n: 1, day: 0, win: "soon", ch: ["call"], what: "Thank the referrer", ref: "T6", vm: 15 },
    { n: 2, day: 0, win: "soon", ch: ["call"], what: "Call the referral, naming who sent them", ref: "T6" },
    { n: 3, day: 0, win: "m20", ch: ["email"], what: "Intro email, naming who sent them", ref: "T2" },
    { n: 4, day: 0, win: "reach", ch: ["call"], what: "Second call", ref: "T3", vm: 15 },
    { n: 5, day: 1, win: "call", ch: ["call"], what: "Third call", ref: "T3" },
    { n: 6, day: 4, win: "email", ch: ["email"], what: "Second email", ref: "T3" },
    { n: 7, day: 5, win: "reach", ch: ["call"], what: "Fourth call", ref: "T3" },
    { n: 8, day: 8, win: "emailpm", ch: ["email"], what: "Third email", ref: "T3" },
    { n: 9, day: 10, win: "call", ch: ["call"], what: "Fifth call", ref: "T3" },
    { n: 10, day: 14, win: "email", ch: ["email"], what: "Fourth email", ref: "T3" },
    { n: 11, day: 15, win: "reach", ch: ["call"], what: "Sixth and last call", ref: "T3", vm: 30 },
    { n: 12, day: 22, win: "emailpm", ch: ["email"], what: "Last email: an easy out", ref: "T3" },
  ] },
  XD: { label: "X-date", anchor: "their renewal date, counting back", steps: [
    { n: 1, day: -60, win: "call", ch: ["call"], what: "Confirm the date and ask to reach out before it", ref: "T12" },
    { n: 2, day: -45, win: "email", ch: ["email"], what: "Email the proposal", ref: "T12" },
    { n: 3, day: -30, win: "textpm", ch: ["text", "call"], what: "One small ask", ref: "T12" },
    { n: 4, day: -21, win: "reach", ch: ["call"], what: "Call: the proposal is ready", ref: "T12", vm: 15 },
    { n: 5, day: -14, win: "call", ch: ["call"], what: "Their style's question, then the ask", ref: "T12" },
    { n: 6, day: -7, win: "text", ch: ["text", "email"], what: "One small ask", ref: "T12" },
    { n: 7, day: -3, win: "reach", ch: ["call"], what: "Last call before they renew", ref: "T12", vm: 30 },
    { n: 8, day: 1, win: "email", ch: ["text", "email"], what: "No switch: note the next date", ref: "T12" },
  ] },
  WB: { label: "Win-back", anchor: "the anniversary of leaving", steps: [
    { n: 1, day: -21, win: "email", ch: ["email"], what: "Before the anniversary", ref: "T13" },
    { n: 2, day: 0, win: "email", ch: ["email"], what: "Email the quote: the discount back or a bundle", ref: "T13" },
    { n: 3, day: 2, win: "textpm", ch: ["text", "call"], what: "One small ask", ref: "T10" },
    { n: 4, day: 5, win: "reach", ch: ["call"], what: "Ask why they switched", ref: "T13", vm: 15 },
    { n: 5, day: 10, win: "emailpm", ch: ["text", "email"], what: "Easy out", ref: "T9" },
    { n: 6, day: 180, win: "email", ch: ["email"], what: "Before their next renewal", ref: "T12" },
  ] },
  PI: { label: "Phone-in or walk-in", anchor: "the call or visit", steps: [
    { n: 1, day: 0, win: "now", ch: ["call"], what: "Quote while they're with you; ask for their OK to text", ref: "T7" },
    { n: 2, day: 0, win: "m20", ch: ["email"], what: "Email the recap and the quote", ref: "T9" },
    { n: 3, day: 1, win: "text", ch: ["text", "call"], what: "Did the quote come through?", ref: "T10" },
    { n: 4, day: 3, win: "reach", ch: ["call"], what: "Call for the decision", ref: "T10", vm: 15 },
    { n: 5, day: 7, win: "textpm", ch: ["text", "email"], what: "One small ask", ref: "T10" },
    { n: 6, day: 14, win: "emailpm", ch: ["text", "email"], what: "Easy out", ref: "T3" },
    { n: 7, day: 90, win: "email", ch: ["email"], what: "Re-quote at three months", ref: "T12" },
    { n: 8, day: 180, win: "email", ch: ["email", "text"], what: "Six months: re-quote or X-date steps", ref: "T12" },
  ] },
  QN: { label: "Quoted, no decision", anchor: "the day the quote went out", steps: [
    { n: 1, day: 1, win: "textpm", ch: ["text", "call"], what: "Did they see it?", ref: "T10" },
    { n: 2, day: 3, win: "reach", ch: ["call"], what: "Their style's question, then the ask", ref: "T3", vm: 15 },
    { n: 3, day: 5, win: "emailpm", ch: ["email"], what: "One reason to look again", ref: "T9" },
    { n: 4, day: 8, win: "call", ch: ["call"], what: "Find the one concern", ref: "T3" },
    { n: 5, day: 12, win: "emailpm", ch: ["text", "email"], what: "One small ask", ref: "T9" },
    { n: 6, day: 15, win: "reach", ch: ["call"], what: "Last call", ref: "T3", vm: 30 },
    { n: 7, day: 22, win: "email", ch: ["email"], what: "Still shopping?", ref: "T9" },
    { n: 8, day: 90, win: "email", ch: ["email", "text"], what: "Three months: re-quote", ref: "T12" },
    { n: 9, day: 180, win: "email", ch: ["email", "text"], what: "Six months: re-quote or X-date steps", ref: "T12" },
  ] },
  CC: { label: "Current customer", anchor: "the review date", steps: [
    { n: 1, day: 0, win: "call", ch: ["call"], what: "What the review showed", ref: "T12" },
    { n: 2, day: 0, win: "m20", ch: ["email"], what: "Email the proposal", ref: "T2" },
    { n: 3, day: 4, win: "textpm", ch: ["text", "call"], what: "One small ask", ref: "T10" },
    { n: 4, day: 10, win: "reach", ch: ["call"], what: "Find the one concern", ref: "T3", vm: 15 },
    { n: 5, day: 21, win: "emailpm", ch: ["email"], what: "No pressure; the option stays open", ref: "T9" },
    { n: 6, day: 365, win: "call", ch: ["call"], what: "Next review", ref: "T12" },
  ] },
  LE: { label: "Life event", anchor: "the day they told you", steps: [
    { n: 1, day: 0, win: "soon", ch: ["call"], what: "Congratulate, then ask what changed", ref: "T12" },
    { n: 2, day: 1, win: "email", ch: ["email"], what: "What changes, and the options", ref: "T9" },
    { n: 3, day: 4, win: "textpm", ch: ["call", "text"], what: "One small ask, then stop", ref: "T12" },
  ] },
  RI: { label: "Renewal, rate up", anchor: "their renewal date, counting back", steps: [
    { n: 1, day: -35, win: "call", ch: ["call"], what: "Call before the notice lands", ref: "T12" },
    { n: 2, day: -35, win: "m20", ch: ["email"], what: "Options side by side", ref: "T2" },
    { n: 3, day: -21, win: "textpm", ch: ["text", "call"], what: "One small ask", ref: "T12" },
    { n: 4, day: -14, win: "reach", ch: ["call"], what: "Find the one concern", ref: "T12", vm: 15 },
    { n: 5, day: -7, win: "emailpm", ch: ["text", "email"], what: "Last check", ref: "T12" },
  ] },
};

// ---- communication style: the words and which channel carries the substance, never the pace ------
// (no study tests pacing by style, and a wrong style guess about halves the response, so the cadence
// is identical for all four; `edge` only spreads the day's load inside a window)
const XSTYLE = {};

function xScaledSteps(src) { return XSRC[src].steps.map((s) => ({ ...s, dayS: s.day })); }

// Steps due today: every step of the first due day (day 0 can hold three), never a backlog dump.
function xDueToday(lead) {
  const steps = xScaledSteps(lead.source, lead.style);
  const pending = steps.filter((s) => s.n > (lead.done || 0));
  const due = pending.filter((s) => s.dayS <= lead.day);
  if (!due.length) return { today: [], next: pending[0] || null, N: steps.length };
  const first = due[0].dayS;
  const today = due.filter((s) => s.dayS === first);
  const next = pending.find((s) => s.n > today[today.length - 1].n) || null;
  return { today, next, N: steps.length };
}

function xAllowed(c, lead) {
  if (c === "call") return !lead.dnc;
  if (c === "text") return !!(lead.consent && lead.consent.sms);
  return !!(lead.consent && lead.consent.email);
}
function xPickChannel(step, lead, contactedSoFar) {
  const st = XSTYLE[lead.style] || XSTYLE.story;
  let allowed = step.ch.filter((c) => xAllowed(c, lead));
  const c0 = step.ch[0];
  if (!allowed.length) return { ch: c0, blocked: true, reason: c0 === "call" ? "On the Do Not Call list; this step waits" : `No ${c0} consent on file; this step waits` };
  if (!contactedSoFar && allowed.includes("text")) {
    if (allowed.length === 1) return { ch: "text", blocked: true, reason: XSTYLE.noTextFirst };
    allowed = allowed.filter((c) => c !== "text");
    return { ch: st.pref.find((c) => allowed.includes(c)) || allowed[0], blocked: false, reason: XSTYLE.noTextFirst };
  }
  if (lead.consent && lead.consent.stop && step.ch.includes("text") && !allowed.includes("text")) {
    const pick = st.pref.find((c) => allowed.includes(c)) || allowed[0];
    return { ch: pick, blocked: false, reason: `They texted STOP at ${lead.consent.stop}; texts are off, so this goes by ${pick}` };
  }
  if (allowed.length === 1) return { ch: allowed[0], blocked: false, reason: step.ch.length > 1 ? "The one channel this step allows that they have okayed" : null };
  const pick = st.pref.find((c) => allowed.includes(c)) || allowed[0];
  return { ch: pick, blocked: false, reason: st.why ? st.why[pick] : null };
}
// the step's window if it suits the channel picked; otherwise that channel's window at the same part of the day
function xWindowFor(step, ch) {
  const w = step.win;
  if (w === "now" || w === "soon" || (XWIN[w] && XWIN[w].rel)) return w;
  if ((XCHWIN[ch] || []).includes(w)) return w;
  const late = w === "reach" || w === "emailpm" || w === "textpm";
  if (ch === "call") return late ? "reach" : "call";
  if (ch === "email") return late ? "emailpm" : "email";
  return late ? "textpm" : "text";
}
// voicemail length for a call step: customers can always get one; prospects get two at most
const XVM_ANY = { CC: 1, LE: 1, RI: 1 };
function xVoicemail(t) {
  if (!t || t.booked || XVM_ANY[t.lead.source]) return 15;
  return t.step.vm || null;
}

// among new leads: the ones still inside their five minutes come first (freshest first), then the late ones
function xFreshKey(lead, now) { const w = Math.max(0, now - xLanded(lead)); return w < 5 ? w : 100 + w; }
const XPRI = { now: 0, booked: 1, xsoon: 2, referral: 3, due: 4, renew: 5, winback: 6 };
function xPriority(lead) {
  if (lead.seen != null && lead.day === 0) return XPRI.now;
  if (lead.at) return XPRI.booked;
  if ((lead.source === "XD" || lead.source === "RI") && lead.day >= -3) return XPRI.xsoon;
  if (lead.source === "RF" && lead.day === 0) return XPRI.referral;
  if (lead.source === "XD" || lead.source === "RI") return XPRI.renew;
  if (lead.source === "WB") return XPRI.winback;
  return XPRI.due;
}

// Build the day. Every touch gets a step, a channel, a minute and a reason. Calls take 10 minutes of
// the rep's day and messages 5, so nothing collides. Booked times, new leads and touches already done
// are fixed first; day-one follow-ups count minutes from the first touch; the rest go into the window
// the evidence favors for their channel. After 8 pm, calls and texts wait for the morning.
function xBuildDay(leads, clock) {
  const now = clock == null ? xClock() : clock;
  const busy = new Set();
  const key = (t) => Math.round(t / 5) * 5;
  const take = (t, len) => { for (let k = 0; k < len; k += 5) busy.add(key(t + k)); };
  const isFree = (t, len) => { for (let k = 0; k < len; k += 5) if (busy.has(key(t + k))) return false; return true; };
  const dur = { call: 10, text: 5, email: 5 };
  // lunch is off limits for planned work; only a new lead's day-one burst may run through it
  const inLunch = (t, len) => t < XDAY.lunch[1] && t + len > XDAY.lunch[0];
  const place = (lo, hi, edge, len, thruLunch) => {
    const slots = [];
    for (let t = Math.ceil(lo / 5) * 5; t <= hi - len; t += 5) if (thruLunch || !inLunch(t, len)) slots.push(t);
    if (edge === "late") slots.reverse();
    for (const t of slots) if (isFree(t, len)) { take(t, len); return t; }
    return null;
  };
  const open = (ch) => Math.max(XLEGAL[ch][0], XDAY.open), tomorrowLabel = `Tomorrow ${XOPEN_LABEL}`;
  const talked = (lead) => Object.keys(XS.done).some((k) => k.startsWith(lead.id + "#") && /talked|quoted|signed|notnow/.test(XS.done[k].k));
  const doneAt = (lead, step) => { const d = XS.done[`${lead.id}#${step.n}`]; return d && d.t != null ? d.t : null; };
  const plan = leads.map((lead) => {
    const d = xDueToday(lead);
    const items = d.today.map((step, i) => ({ step, i, fixed: (!!lead.at && i === 0) || step.win === "now" || (step.win === "soon" && i === 0) || doneAt(lead, step) != null }));
    return { lead, items, next: d.next, N: d.N, pri: xPriority(lead), style: XSTYLE[lead.style] || XSTYLE.story, anchor: null, contacted: !!lead.contacted || talked(lead) };
  });
  plan.sort((a, b) => a.pri - b.pri || (a.lead.seen != null && b.lead.seen != null ? xFreshKey(a.lead, now) - xFreshKey(b.lead, now) : 0));
  const touches = [];
  const schedule = (p, it) => {
    const lead = p.lead, step = it.step, booked = !!lead.at && it.i === 0, id = `${lead.id}#${step.n}`;
    const pick = booked ? { ch: "call", blocked: false, reason: null } : xPickChannel(step, lead, p.contacted);
    const ch = (XS.done[id] && XS.done[id].ch) || XS.chan[id] || pick.ch;
    let wk = booked ? "booked" : xWindowFor(step, ch);
    const legal = XLEGAL[ch], dt = booked ? null : doneAt(lead, step);
    let slot = null, label = "", tomorrow = false;
    if (booked) { slot = xParseAt(lead.at); take(slot, 30); label = lead.at; }
    else if (dt != null) { slot = dt; take(slot, dur[ch]); label = xFmt(slot); }
    else if (wk === "now") {
      // the first call: at the minute they land, inside office hours; before 9 it waits for the opening, after 8 pm for the morning
      const arrived = lead.seen != null ? Math.max(0, xLanded(lead)) : now;
      const by = Math.max(arrived, now), op = open(ch);
      if (by >= legal[1] - 10) { slot = op; tomorrow = true; label = tomorrowLabel; }
      else if (by < op) { slot = op; take(slot, dur[ch]); label = xFmt(slot); }
      else { slot = Math.max(arrived, op); take(Math.max(slot, now), dur[ch]); label = "Now"; }
      if (!tomorrow) { p.anchor = Math.max(slot, Math.min(now, legal[1] - 10)); p.anchorTomorrow = false; }
    } else if (wk === "soon") {
      // same day, the first open slot from now; before 9 it waits for the opening, after 8 pm for the morning
      const lo = Math.max(now, open(ch));
      if (lo >= legal[1] - 10) { slot = open(ch); tomorrow = true; label = tomorrowLabel; }
      else { slot = place(lo, Math.min(lo + 120, legal[1]), "early", dur[ch]); if (slot == null) slot = lo; label = xFmt(slot); }
    } else if (p.anchorTomorrow) {
      // after hours: the first call waits for the morning; an email can still go tonight, the rest moves to tomorrow
      if (ch !== "email") return;
      slot = now; label = "Now";
    } else {
      const after = p.anchor != null ? p.anchor + 15 : null;
      const W = XWIN[wk];
      if (W && W.rel) {
        // minutes after the day's first touch (as done, or as planned); else after they landed
        const base = p.anchor != null ? p.anchor : lead.seen != null ? xLanded(lead) : XDAY.open;
        const lo = Math.max(base + W.rel[0], legal[0]), hi = Math.min(base + W.rel[1], legal[1]);
        // the window first; if it is full (a booked call, say), up to 30 minutes later, then through lunch:
        // a new lead's day-one burst runs on its own clock, and anything beats two touches on one minute
        slot = lo < hi ? place(lo, hi, "early", dur[ch]) : null;
        if (slot == null && lo < hi) slot = place(lo, Math.min(hi + 30, legal[1]), "early", dur[ch]);
        if (slot == null && lo < hi) slot = place(lo, Math.min(hi + 30, legal[1]), "early", dur[ch], true);
        if (slot == null && lo < legal[1]) slot = lo;
        if (slot == null) return;
      } else {
        // the step's window first, then the channel's other good window, then the first open slot
        const from = after != null ? after : 0;
        for (const k of [wk, ...(XCHWIN[ch] || []).filter((x) => x !== wk)]) {
          const w = XWIN[k];
          if (!w || w.lo == null) continue;
          slot = place(Math.max(w.lo, legal[0], from), Math.min(w.hi, legal[1]), p.style.edge, dur[ch]);
          if (slot != null) { wk = k; break; }
        }
        if (slot == null) { slot = place(Math.max(XDAY.open, legal[0], from), Math.min(XDAY.close, legal[1]), p.style.edge, dur[ch]); if (slot != null) wk = "open"; }
        if (slot == null) { const w = W || XWIN.email; slot = Math.max(w.lo, legal[0], from); }
      }
      label = xFmt(slot);
    }
    if (p.anchor == null) { p.anchor = slot; p.anchorTomorrow = tomorrow; }
    touches.push({ id, lead, step, i: it.i, ch, wk, slot, label, booked, tomorrow, blocked: pick.blocked, chReason: pick.reason, p, doneAt: dt });
  };
  for (const p of plan) for (const it of p.items) if (it.fixed) schedule(p, it);
  for (const p of plan) for (const it of p.items) if (!it.fixed) schedule(p, it);
  // calls and texts still open after 8 pm (or planned past it) wait for the morning; email can still go tonight
  for (const t of touches) {
    if (t.ch === "email" || t.tomorrow || XS.done[t.id]) continue;
    const L = XLEGAL[t.ch];
    if (t.slot >= L[1] || (t.slot <= now && now >= L[1] - 10)) { t.tomorrow = true; t.slot = open(t.ch); t.label = tomorrowLabel; t.late = true; }
  }
  const cap = xState().cap;
  if (cap) {
    const byLead = {};
    for (const t of touches) if (t.ch === "call" && !t.tomorrow) (byLead[t.lead.id] ||= []).push(t);
    for (const id of Object.keys(byLead)) {
      const calls = byLead[id].sort((a, b) => a.slot - b.slot);
      calls.slice(cap).forEach((t) => { if (!XS.done[t.id]) { t.tomorrow = true; t.slot = open("call"); t.label = tomorrowLabel; t.capped = true; } });
    }
  }
  touches.sort((a, b) => (a.tomorrow - b.tomorrow) || a.slot - b.slot || a.p.pri - b.p.pri);
  return { touches, plan, now };
}

function xDayLabel(lead) {
  const d = lead.day || 0, back = lead.source === "XD" || lead.source === "RI";
  if (back) return d === 0 ? "X-date" : d < 0 ? `X − ${-d}` : `X + ${d}`;
  return `Day ${d}`;
}
function xNextLabel(p) {
  const nx = p.next;
  if (!nx) return "Last step of this plan";
  const back = p.lead.source === "XD" || p.lead.source === "RI", d = nx.dayS;
  const when = back ? (d < 0 ? `X − ${-d}` : "the day after the renewal") : `Day ${d}`;
  return `Next: ${when} · ${nx.what}`;
}
function xTouchWhy(t) {
  if (t.booked && !t.late) return "They picked this time. Be early.";
  const w = XWIN[t.wk];
  const parts = [t.capped ? `${xState().label} caps calls at ${xState().cap} to one person in 24 hours; this one waits for tomorrow` : t.tomorrow ? "After 8 pm, calls and texts wait for the morning: the office opens at 9" : w ? w.why : ""];
  if (t.chReason) parts.push(t.chReason);
  return parts.filter(Boolean).map((s) => s.replace(/\.$/, "")).join(". ") + ".";
}
