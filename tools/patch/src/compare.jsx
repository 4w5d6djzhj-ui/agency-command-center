// "The plan vs. the usual day": the same 20 people worked two ways on one canonical day. Process
// numbers only (what each day does); the close-rate lift is what the randomized test measures.

function xRand(seed) {
  let a = seed >>> 0;
  return () => { a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
function xShuffle(arr, r) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

// Canonical day for the comparison: new leads land at fixed times so both days face the same inbox.
const XARRIVE = [9 * 60 + 5, 10 * 60 + 40, 13 * 60 + 20];

// The usual day, without a plan. Each number is an assumption, shown in the panel so it can be argued with.
const XUSUAL = {
  start: 9 * 60 + 15, lunch: [12 * 60, 13 * 60], stop: 17 * 60,
  checks: [9 * 60 + 15, 11 * 60 + 15, 13 * 60 + 15, 15 * 60 + 15],
  mix: { call: 0.6, email: 0.25, text: 0.15 }, styleMatch: 0.25, attempts: 2,
};

function xUsualDay(leads, seed) {
  const r = xRand(seed);
  const newIdx = leads.map((l, i) => (l.seen != null && l.day === 0 ? i : -1)).filter((i) => i >= 0);
  const arrive = {}; newIdx.forEach((i, k) => { arrive[leads[i].id] = XARRIVE[k % XARRIVE.length]; });
  const others = xShuffle(leads.filter((l) => arrive[l.id] == null), r);
  const out = [];
  let t = XUSUAL.start;
  const nextFree = (from) => { let x = Math.max(from, t); if (x >= XUSUAL.lunch[0] && x < XUSUAL.lunch[1]) x = XUSUAL.lunch[1]; return x; };
  const pickCh = () => { const x = r(); return x < XUSUAL.mix.call ? "call" : x < XUSUAL.mix.call + XUSUAL.mix.email ? "email" : "text"; };
  for (const lead of others) {
    if (lead.at) { out.push({ lead, slot: xParseAt(lead.at), ch: "call", fits: r() < XUSUAL.styleMatch, booked: true }); continue; }
    const s = nextFree(t);
    if (s > XUSUAL.stop) { out.push({ lead, slot: null }); continue; }
    out.push({ lead, slot: s, ch: pickCh(), fits: r() < XUSUAL.styleMatch });
    t = s + 8 + Math.floor(r() * 15);
  }
  // new leads get picked up at the next inbox check after they land, with a little drift
  for (const id of Object.keys(arrive)) {
    const lead = leads.find((l) => l.id === id), a = arrive[id];
    const check = XUSUAL.checks.find((c) => c >= a) || XUSUAL.checks[XUSUAL.checks.length - 1] + 120;
    out.push({ lead, slot: check + Math.floor(r() * 21), ch: pickCh(), fits: r() < XUSUAL.styleMatch, arrived: a });
  }
  return out;
}

function xPlanCanon(leads) {
  // the plan's day on the same canonical inbox: new leads arrive at XARRIVE, the clock runs from 8:00 (the office opens at 9)
  const k = { i: 0 };
  const arrive = {};
  leads.forEach((l) => { if (l.seen != null && l.day === 0) arrive[l.id] = XARRIVE[k.i++ % XARRIVE.length]; });
  const saved = { done: XS.done, clock: XS.clock, clockAt: XS.clockAt, chan: XS.chan };
  XS.done = {}; XS.chan = {}; XS.clock = 8 * 60; XS.clockAt = null;
  let day;
  try { day = xBuildDay(leads.map((l) => (arrive[l.id] != null ? { ...l, seen: 0 } : l)), 8 * 60); }
  finally { XS.done = saved.done; XS.clock = saved.clock; XS.clockAt = saved.clockAt; XS.chan = saved.chan; }
  // move each new lead's day-one burst to its own arrival: the first call two minutes after it lands
  for (const t of day.touches) {
    const a = arrive[t.lead.id], W = XWIN[t.wk];
    if (a == null) continue;
    if (t.wk === "now" || t.wk === "soon" || (W && W.rel)) t.slot = t.slot - 8 * 60 + a + 2;
  }
  return { touches: day.touches, arrive };
}

function xCompare(leads, seed) {
  const plan = xPlanCanon(leads), usual = xUsualDay(leads, seed);
  const inBest = (m) => (m >= XWIN.call.lo && m < XWIN.call.hi) || (m >= XWIN.reach.lo && m < XWIN.reach.hi);
  // new leads in a race (an internet lead's first call), on both days
  const newIds = Object.keys(plan.arrive).filter((id) => plan.touches.some((t) => t.lead.id === id && t.wk === "now"));
  // 1. minutes from landing to first call (new leads)
  const planFirst = newIds.map((id) => { const c = plan.touches.filter((t) => t.lead.id === id && t.ch === "call").sort((a, b) => a.slot - b.slot)[0]; return c ? c.slot - plan.arrive[id] : null; }).filter((x) => x != null);
  const usualFirst = usual.filter((u) => u.arrived != null && newIds.includes(u.lead.id)).map((u) => (u.ch === "call" ? u.slot - u.arrived : null));
  const avg = (a) => (a.length ? Math.round(a.reduce((s, x) => s + x, 0) / a.length) : null);
  const usualCalled = usualFirst.filter((x) => x != null);
  // 2. day-one touches per new lead
  const planDayOne = newIds.length ? plan.touches.filter((t) => newIds.includes(t.lead.id)).length / newIds.length : 0;
  // 3. written for their style
  const usualFit = usual.filter((u) => u.slot != null).filter((u) => u.fits).length, usualAll = usual.filter((u) => u.slot != null).length;
  // 4. scheduled calls inside the best hours (booked and new-lead calls excluded)
  const planCalls = plan.touches.filter((t) => t.ch === "call" && !t.booked && t.wk !== "now" && t.wk !== "soon" && !(XWIN[t.wk] && XWIN[t.wk].rel));
  const usualCalls = usual.filter((u) => u.ch === "call" && !u.booked && u.arrived == null && u.slot != null);
  // 5. touches that break consent
  const breaks = (u) => (u.ch === "text" && !(u.lead.consent && u.lead.consent.sms)) || (u.ch === "email" && !(u.lead.consent && u.lead.consent.email));
  const usualBreaks = usual.filter((u) => u.slot != null && breaks(u)).length;
  const planBreaks = plan.touches.filter((t) => breaks(t)).length;
  // 6. not touched today
  const usualMissed = usual.filter((u) => u.slot == null).length;
  const planMissed = leads.filter((l) => !plan.touches.some((t) => t.lead.id === l.id)).length;
  const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
  const burst = XSRC.IL.steps.filter((s) => s.day <= 22);
  const callsIL = burst.filter((s) => s.ch[0] === "call").length, emailsIL = burst.filter((s) => s.ch[0] === "email").length;
  return [
    { k: "First call to a new lead", plan: `${avg(planFirst)} min after it lands`, usual: usualCalled.length ? `${avg(usualCalled)} min, for ${usualCalled.length} of ${usualFirst.length}` : `no call today for ${usualFirst.length}`, why: "Speed is the strongest single lever in the lead-response data", ref: ["T1"] },
    { k: "Touches on a new lead's first day", plan: `${planDayOne.toFixed(0)}: a call now, the quote by email at ~20 min, calls at 30–60 min and 1–2 h`, usual: "1", why: "Three tries on day one is the floor; the emailed quote makes the next call likelier to connect", ref: ["T2", "T3"] },
    { k: "Calls before the plan stops", plan: `${callsIL} calls and ${emailsIL} emails over 22 days, then a short burst at 45`, usual: `about ${XUSUAL.attempts}`, why: "93% of eventual buyers were reached by the sixth call; insurers audited averaged 1.45 attempts", ref: ["T3", "T15"] },
    { k: "Words fitted to the person", plan: "Every draft, for the style on file", usual: `${pct(usualFit, usualAll)}% (one template fits about one style in four)`, why: "Adapting tracks with sales, but a wrong style guess about halves the response: set it on a clear signal", ref: ["T11"] },
    { k: "Later calls in their windows", plan: `${pct(planCalls.filter((t) => inBest(t.slot)).length, planCalls.length)}% at 10–noon or 3–5 pm, lunch free`, usual: `${pct(usualCalls.filter((u) => inBest(u.slot)).length, usualCalls.length)}%`, why: "The hour matters least of these (about 2.6 contact points), but it costs nothing", ref: ["T4", "T5"] },
    { k: "Touches that skip consent", plan: `${planBreaks}`, usual: `${usualBreaks}`, why: "Washington: no commercial text without their OK in advance, $100 a text; the plan can't pick a channel they haven't okayed", ref: ["T7"] },
    { k: "People with no touch today", plan: `${planMissed}`, usual: `${usualMissed}`, why: "Without an order, the end of the list is whoever the day runs out on; audits found 39% of leads never called", ref: ["T15"] },
  ];
}

// Sample size for comparing two close rates (two-sided, alpha 0.05). Same formula as any stats package.
function xSampleSize(p1, p2, power) {
  const za = 1.959964, zb = power >= 0.9 ? 1.281552 : 0.841621;
  const pb = (p1 + p2) / 2, d = Math.abs(p2 - p1);
  if (!(d > 0) || p1 <= 0 || p2 >= 1) return null;
  const num = za * Math.sqrt(2 * pb * (1 - pb)) + zb * Math.sqrt(p1 * (1 - p1) + p2 * (1 - p2));
  return Math.ceil((num * num) / (d * d));
}
