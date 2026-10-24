// Today as an action queue run by the sequencing engine: every lead's touches for the day are placed
// by lead type x communication style x consent x the hour that works for the channel. Synthetic
// people only; phone numbers are 555-01xx (reserved for fiction).

const XQ = [
  // New today: the first call goes out inside five minutes
  { id: "Q01", name: "Priya Placeholder", style: "doer", source: "IL", day: 0, done: 0, contacted: false, seen: 2, scenario: "raw", stage: "lead",
    reason: "Asked for an auto quote", meta: ["98029", "2 cars"], consent: { sms: true, email: true, basis: "Quote form opt-in (calls and texts, incl. automated) · today" }, lines: 1, proposed: 148, phone: "(555) 010-0151" },
  { id: "Q02", name: "Ben Fixture", style: "thinker", source: "IL", day: 0, done: 0, contacted: false, seen: 9, scenario: "raw", stage: "lead",
    reason: "Asked for renters + auto", meta: ["98075", "Moving in May"], consent: { sms: true, email: true, basis: "Quote form opt-in (calls and texts, incl. automated) · today" }, lines: 2, proposed: 131, phone: "(555) 010-0152" },
  { id: "L-002", name: "Anya Example", style: "story", source: "RF", day: 0, done: 1, contacted: false, seen: 32, scenario: "raw", stage: "lead",
    reason: "Referred by James Roe · texted us about a home quote", meta: ["98075", "First-time buyer"], consent: { sms: true, email: true, basis: "Texted the office first; replied YES to the consent text · Oct 21" }, lines: 1, phone: "(555) 010-0153",
    say: ["Hi {first}, it's {rep} from your local office. James Roe asked me to reach out; he said you just bought your first home. Congratulations.", "I'll keep the home quote simple: what it covers, what it costs, and who you call when something happens. That's me.", "Do you have ten minutes now, or is later today better? You pick the time."],
    msg: { email: { subject: "James Roe asked me to reach out", body: "Hey Marcus,\n\nIt's just __REP__ from your local Sample Agency office. James Roe asked me to reach out; he said you just bought your first home. Congratulations.\n\nI'll keep the home quote simple: what it covers, what it costs, and who picks up the phone when something happens. That's me, and I'd rather you know that now than find out later.\n\nAre you opposed to a quick, no-obligation call this week? You pick the time." } } },
  // Booked: they picked the time
  { id: "C-001", name: "James Roe", style: "story", source: "CC", day: 0, done: 0, contacted: true, at: "9:00 AM", scenario: "current", stage: "proposed",
    reason: "Home renewal review", meta: ["Bring updated valuation"], consent: { sms: true, email: true, basis: "Customer · written opt-in · 2019" }, lines: 1, proposed: 138, current: 153, phone: "(555) 010-0154",
    say: ["Hi {first}, it's {rep}. Thanks for making the time. How's everything at the house?", "I brought the updated valuation and put your renewal next to our proposal, so you can see what changes and why.", "Are you opposed to me setting it up today, so it's done before the renewal?"] },
  { id: "C-002", name: "Marcus Sample", style: "story", source: "QN", day: 3, done: 1, contacted: true, at: "3:30 PM", scenario: "following", stage: "proposed",
    reason: "Callback · auto + life walkthrough", meta: ["Quoted $163/mo", "Pays $186/mo now"], consent: { sms: true, email: true, basis: "E-signed text consent after the first call · Oct 20" }, lines: 2, proposed: 163, current: 186, phone: "(555) 010-0155",
    say: ["Hi {first}, it's {rep}. Congratulations again on the baby. How's everyone sleeping?", "I'll walk you through the auto at {proposed} a month next to the {current} you pay now, then a quick look at life coverage for the family.", "Would it be a terrible idea to have the three of us on a ten-minute call this week? AM or PM?"] },
  { id: "C-003", name: "Diego Mock", style: "doer", source: "IL", day: 2, done: 4, contacted: true, at: "2:00 PM", scenario: "raw", stage: "lead",
    reason: "Booked by text · auto + home bundle", meta: ["Bought lead", "Auto + home"], consent: { sms: true, email: true, basis: "E-signed text consent after the intro call · Oct 21" }, lines: 2, proposed: 212, phone: "(555) 010-0156",
    say: ["Hi {first}, it's {rep}. I have your auto and home numbers ready.", "Bundle total first, then what changes. Nothing for you to fill out.", "Want me to set it up? I'll text you the next step."] },
  // Follow-ups due: today's step from each plan
  { id: "Q07", name: "Carla Stub", style: "asker", source: "QN", day: 1, done: 0, contacted: false, scenario: "following", stage: "quoted",
    reason: "Quoted yesterday by email · no reply", meta: ["Auto", "Pays $171/mo"], consent: { sms: true, email: true, basis: "Quote form opt-in · Oct 22" }, lines: 1, proposed: 142, current: 171, phone: "(555) 010-0157" },
  { id: "Q08", name: "Omar Pilot", style: "doer", source: "RI", day: -15, done: 2, contacted: true, scenario: "xdate", stage: "bound",
    reason: "Customer · renewal going up $31/mo", meta: ["Home", "Renews in 15 days"], consent: { sms: true, email: true, basis: "Customer · written opt-in · Mar 2023" }, lines: 1, proposed: 96, current: 127, phone: "(555) 010-0158",
    say: ["Hi {first}, it's {rep}. Quick one: your home renewal is going up about $31 a month.", "I already re-ran it from your file. There's an option at {proposed} a month with the same coverage, and nothing for you to fill out.", "Want me to switch it before the renewal? Yes or no is all I need."],
    msg: { sms: "Hey Marcus, it's __REP__. Your home renewal is going up about $31/mo. I already re-ran it from your file: $__PROPOSED__/mo, same coverage, nothing to fill out. Want me to switch it before the renewal? Reply YES or NO.", email: { subject: "Your renewal, already re-run: $__PROPOSED__/mo", body: "Hi Marcus,\n\nYour home renewal is going up about $31/mo.\n\nI already re-ran it from your file: $__PROPOSED__/mo for the same coverage, nothing to fill out. If you say yes, we handle the change on our end.\n\nWant me to switch it before the renewal? YES or NO is all I need." } } },
  { id: "Q09", name: "Elena Draft", style: "thinker", source: "QN", day: 5, done: 1, contacted: true, scenario: "following", stage: "quoted",
    reason: "Said “let me think” on Monday", meta: ["Auto + home"], consent: { sms: true, email: true, basis: "E-signed text consent after the first call · Oct 19" }, lines: 2, proposed: 238, phone: "(555) 010-0159" },
  { id: "Q10", name: "Sam Trial", style: "story", source: "PI", day: 14, done: 5, contacted: true, scenario: "following", stage: "quoted",
    reason: "Walked in two weeks ago · quiet since", meta: ["Auto", "Two teen drivers"], consent: { sms: true, email: true, basis: "Signed the consent form at the office · Oct 9" }, lines: 1, proposed: 204, phone: "(555) 010-0160" },
  { id: "Q11", name: "Rosa Mockup", style: "asker", source: "CC", day: 0, done: 1, contacted: true, scenario: "current", stage: "bound",
    reason: "Customer · home is elsewhere", meta: ["Auto with us", "Reviewed this morning"], consent: { sms: true, email: true, basis: "Customer · written opt-in · Jun 2021" }, lines: 1, proposed: 91, current: 118, phone: "(555) 010-0161" },
  { id: "Q12", name: "Kai Proto", style: "doer", source: "CC", day: 0, done: 0, contacted: true, scenario: "current", stage: "bound",
    reason: "Customer · home is elsewhere", meta: ["Auto with us", "Review day"], consent: { sms: true, email: true, basis: "Customer · written opt-in · Jan 2024" }, lines: 1, proposed: 87, phone: "(555) 010-0162" },
  { id: "Q13", name: "Grace Fiction", style: "story", source: "WB", day: 2, done: 2, contacted: true, scenario: "winback", stage: "lapsed",
    reason: "Left a year ago · price was the reason", meta: ["Auto", "Quote sent Tuesday"], consent: { sms: true, email: true, basis: "Former customer · written opt-in renewed by email · Oct 21" }, lines: 1, proposed: 157, current: 181, phone: "(555) 010-0163" },
  { id: "Q14", name: "Leo Specimen", style: "asker", source: "WB", day: 0, done: 1, contacted: true, scenario: "winback", stage: "lapsed",
    reason: "Left exactly one year ago today", meta: ["3 cars", "Accident-free"], consent: { sms: true, email: true, basis: "Former customer · written opt-in renewed by email · Oct 20" }, lines: 1, proposed: 244, current: 276, phone: "(555) 010-0164" },
  { id: "Q15", name: "Hana Template", style: "thinker", source: "LE", day: 5, done: 2, contacted: true, scenario: "current", stage: "bound",
    reason: "Customer · new baby, told us Monday", meta: ["Auto with us", "Life review"], consent: { sms: true, email: true, basis: "Customer · written opt-in · Nov 2022" }, lines: 1, proposed: 112, phone: "(555) 010-0165",
    say: ["Hi {first}, it's {rep}. Congratulations again on the baby. How are you all doing?", "No rush on anything. I put the life options in your email, side by side, so you can read them on your own time.", "Would it be a terrible idea to look at them together this week? You decide."],
    msg: { sms: "Hey Marcus, it's __REP__. Congratulations again on the baby. No rush on anything; I put the life options in your email, side by side, so you can read them on your own time. Would it be a terrible idea to look at them together this week? You decide.", email: { subject: "The life options, whenever you're ready", body: "Hey Marcus,\n\nCongratulations again on the baby. I know there's a lot going on.\n\nNo action needed today. I put the life options side by side, with what each one covers and costs, so you can read them on your own time; the one question that matters is what your family would need if your income stopped.\n\nWould it be a terrible idea to look at them together this week? You decide." } } },
  // Renewal window: X-dates count back from the renewal
  { id: "L-101", name: "Sarah Doe", style: "thinker", source: "XD", day: -3, done: 6, contacted: true, scenario: "xdate", stage: "quoted",
    reason: "Auto renews in 3 days", meta: ["Pays $186/mo", "Quoted $168/mo"], consent: { sms: true, email: true, basis: "Web form opt-in with her renewal date · Aug 3" }, lines: 1, proposed: 168, current: 186, phone: "(555) 010-0166" },
  { id: "Q17", name: "Victor Dummy", style: "story", source: "XD", day: -6, done: 5, contacted: true, scenario: "xdate", stage: "quoted",
    reason: "Home renews in 6 days", meta: ["Quoted in the spring"], consent: { sms: true, email: true, basis: "Quote form opt-in · Apr 14" }, lines: 2, proposed: 229, phone: "(555) 010-0167" },
  { id: "L-103", name: "Linh Demo", style: "asker", source: "XD", day: -14, done: 4, contacted: true, scenario: "xdate", stage: "quoted",
    reason: "Auto renews in 14 days", meta: ["Pays $211/mo", "Quoted $192/mo"], consent: { sms: true, email: true, basis: "E-signed text consent after the first call · Sep 30" }, lines: 1, proposed: 192, current: 211, phone: "(555) 010-0168" },
  { id: "L-104", name: "Tom Test", style: "doer", source: "XD", day: -5, done: 5, contacted: true, scenario: "xdate", stage: "quoted",
    reason: "Auto renews in 5 days", meta: ["Pays $174/mo", "Quoted $168/mo"], consent: { sms: true, email: true, basis: "E-signed text consent after the first call · Sep 12" }, lines: 1, proposed: 168, current: 174, phone: "(555) 010-0169" },
  { id: "Q20", name: "Nadia Sandbox", style: "thinker", source: "XD", day: -11, done: 4, contacted: true, scenario: "xdate", stage: "quoted",
    reason: "Auto renews in 11 days", meta: ["Quoted in May", "Texted STOP 7:42 AM"], consent: { sms: false, email: true, stop: "7:42 AM", basis: "Replied STOP at 7:42 AM today: texts suppressed in 4 seconds · email opt-in on file (quote form, May 6)" }, lines: 1, proposed: 139, phone: "(555) 010-0170" },
];

// Eight cooler leads: not due today by their cadence and not hot, but each worth five minutes in an open
// stretch. One suggested channel (consent decides), one opener, one tap when it's done. Any open minute.
const XCOOL = [
  { id: "K01", name: "Nina Lorem", style: "asker", source: "IL", stage: "lead", contacted: false, phone: "(555) 010-0171", consent: { sms: false, email: true, basis: "Quote form opt-in (email) · Sep 22" },
    why: "Internet lead, day 31: six calls and five emails done, no answer. The 45-day burst is two weeks out.", ch: "email", say: "Nina, one line: the quote I sent still holds through next month. If the timing's wrong, reply 'later' and I'll check back in the spring." },
  { id: "K02", name: "Felix Ipsum", style: "doer", source: "QN", stage: "proposed", contacted: true, phone: "(555) 010-0172", consent: { sms: true, email: true, basis: "E-signed text consent after the first call · Sep 12" }, proposed: 142,
    why: "Quoted $142/mo in September; said 'after the move.' Forty days on, no decision.", ch: "text", say: "Hi Felix, it's {rep}. Did the move go through? Your auto quote is still {proposed}; two minutes to switch it on." },
  { id: "K03", name: "Ravi Blank", style: "thinker", source: "XD", stage: "lead", contacted: true, phone: "(555) 010-0173", consent: { sms: true, email: true, basis: "Written opt-in at the first call · Aug 30" },
    why: "X-date December 20, 58 days out. The proposal goes at 45 days; a call now is early, but cheap.", ch: "call", say: "Ravi, it's {rep}. Quick one: your renewal is December 20. Want me to run the numbers early, so you have them before the notice lands?" },
  { id: "K04", name: "Clara Stencil", style: "story", source: "WB", stage: "lapsed", contacted: true, phone: "(555) 010-0174", consent: { sms: false, email: true, basis: "Former customer · email opt-in on file · Nov 2025" },
    why: "Left eleven months ago over price. The anniversary is six weeks out; the win-back plan starts at three.", ch: "email", say: "Clara, no pitch: a year on, the discount you had is back on the table. One line back and I'll send the numbers." },
  { id: "K05", name: "Jonah Filler", style: "doer", source: "PI", stage: "proposed", contacted: true, phone: "(555) 010-0175", consent: { sms: false, email: true, basis: "Walk-in · email opt-in on the quote form · Sep 8" },
    why: "Walked in for a quote in September; two emails since, no reply. Day 45.", ch: "call", say: "Jonah, it's {rep} from the office you stopped by. Still worth the switch? If not, say so and I'll close the file." },
  { id: "K06", name: "Aisha Scaffold", style: "asker", source: "RF", stage: "lead", contacted: false, phone: "(555) 010-0176", consent: { sms: false, email: true, basis: "Referral · email opt-in by reply · Oct 1" },
    why: "Referred by Rosa Mockup; six calls, never reached. Day 23: the plan's last email went out yesterday.", ch: "email", say: "Aisha, Rosa Mockup asked me to look after you. I'll stop calling; here's the number in writing, and it holds." },
  { id: "K07", name: "Marco Proxy", style: "story", source: "RI", stage: "bound", contacted: true, phone: "(555) 010-0177", consent: { sms: true, email: true, basis: "Customer · written opt-in · Mar 2023" }, proposed: 131, current: 155,
    why: "Customer: the renewal goes up in 40 days and the notice lands next week. The plan's first call is at 35 days.", ch: "call", say: "Marco, heads up before the letter: your renewal goes up about $24. I've re-run it: same coverage, {proposed}. Ten minutes this week?" },
  { id: "K08", name: "Ivy Standin", style: "thinker", source: "CC", stage: "bound", contacted: true, phone: "(555) 010-0178", consent: { sms: true, email: true, basis: "Customer · written opt-in · Jul 2022" },
    why: "Customer, auto only; no review in two years and the home is elsewhere.", ch: "text", say: "Hi Ivy, it's {rep}. Two years since we looked at your coverage together. Want a ten-minute review before the holidays? AM or PM?" },
];
// the suggested channel, inside consent: no text without their OK, no call to a Do Not Call number
function xCoolChannel(l) {
  const order = [l.ch, "call", "email", "text"];
  return order.find((c) => xAllowed(c, l) && (c !== "text" || l.contacted)) || "email";
}

const XQ_GROUPS = [
  { k: "now", tag: "New lead", title: "Right now", rule: "New leads: call inside a minute, five at most. Referrals: today, naming who sent them." },
  { k: "booked", tag: "Booked", title: "Booked", rule: "They picked the time. Be early." },
  { k: "due", tag: "Follow-up", title: "Follow-ups due", rule: "Today's step from each plan, at the hour that works for its channel." },
  { k: "renew", tag: "Renewal", title: "Renewal window", rule: "Counting back from the renewal: before the notice, then the 30 days after it." },
];
const XCH = { call: "Call", text: "Text", email: "Email" };
const XOUT = { talked: "Talked", sent: "Sent", scheduled: "Scheduled", voicemail: "Voicemail", noanswer: "No answer", quoted: "Quoted", signed: "Signed", notnow: "Not now" };
const XOUTBTN = { ...XOUT, sent: "Send now", scheduled: "Approve" };
const XSTOP = /talked|quoted|signed|notnow/;
// a call with no voicemail planned records "No answer" instead of "Voicemail"
function xOuts(ch, t) { return ch === "call" ? ["talked", xVoicemail(t) ? "voicemail" : "noanswer", "quoted", "signed", "notnow"] : [t && !t.tomorrow && t.slot > xClock() ? "scheduled" : "sent", "quoted", "signed", "notnow"]; }
function xGroupOf(lead) {
  if (lead.seen != null && lead.day === 0) return "now";
  if (lead.at) return "booked";
  if (lead.source === "XD" || lead.source === "RI") return "renew";
  return "due";
}

// One row per lead: today's touches in order, which one is next, and whether the day is finished.
function xLeadViews(day) {
  const by = {};
  for (const t of day.touches) (by[t.lead.id] = by[t.lead.id] || []).push(t);
  return XQ.map((lead) => {
    const ts = (by[lead.id] || []).slice().sort((a, b) => (a.tomorrow - b.tomorrow) || a.slot - b.slot);
    const doneTs = ts.filter((t) => XS.done[t.id]).sort((a, b) => XS.done[a.id].at - XS.done[b.id].at);
    const stop = doneTs.some((t) => XSTOP.test(XS.done[t.id].k));
    const current = stop ? null : ts.find((t) => !XS.done[t.id]) || null;
    const p = day.plan.find((x) => x.lead.id === lead.id);
    return { lead, ts, doneTs, current, last: doneTs[doneTs.length - 1] || null, complete: !current, p, group: xGroupOf(lead) };
  });
}
function xIsDue(t, now) { return !t.tomorrow && t.slot <= now; }
// the order a rep works in: due touches first (new leads, booked, soonest renewals), then the rest by time
function xWorkOrder(views, now) {
  const live = views.filter((v) => v.current);
  const due = live.filter((v) => xIsDue(v.current, now)).sort((a, b) => a.p.pri - b.p.pri || (a.p.pri === XPRI.now ? xFreshKey(a.lead, now) - xFreshKey(b.lead, now) : a.current.slot - b.current.slot));
  const later = live.filter((v) => !xIsDue(v.current, now)).sort((a, b) => (a.current.tomorrow - b.current.tomorrow) || a.current.slot - b.current.slot);
  return [...due, ...later];
}
function xScore(done) {
  let touched = 0, quotes = 0, apps = 0, hh = 0;
  for (const l of XQ) {
    const ks = Object.keys(done).filter((k) => k.startsWith(l.id + "#")).map((k) => done[k].k);
    if (!ks.length) continue;
    touched++;
    if (ks.some((k) => k === "quoted" || k === "signed")) quotes++;
    if (ks.includes("signed")) { apps += l.lines; hh++; }
  }
  return { touched, quotes, apps, hh };
}
function xMessage(lead, ch, persona) {
  const p = ($n.producers && $n.producers[persona]) || {};
  const vars = { repName: persona, repFull: p.full || persona, proposed: lead.proposed, current: lead.current };
  const fill = (t) => Bl(zl(t, vars), lead.name);
  if (lead.msg && lead.msg[ch === "email" ? "email" : "sms"]) {
    const m = lead.msg[ch === "email" ? "email" : "sms"];
    return ch === "email" ? { subject: fill(m.subject), body: fill(m.body) } : { body: fill(m) };
  }
  const cell = tf[lead.scenario] && tf[lead.scenario][lead.style];
  if (!cell) return null;
  return ch === "email" ? { subject: fill(cell.email.subject), body: fill(cell.email.body) } : { body: fill(cell.sms) };
}
function xSay(lead, persona) {
  const c = XMOVES[lead.scenario][lead.style];
  return (lead.say || [c.m.say, c.f.say, c.a.say]).map((s) => xFillSay(s, lead, persona));
}
// the source line a carrier's system would show: the demo names ECRM as the system of record
function xSource(lead) {
  const kind = lead.source === "IL" ? (lead.seen != null ? "web lead" : "internet lead") : lead.source === "RF" ? "referral" : lead.source === "PI" ? "walk-in" : lead.source === "WB" ? "former customer" : lead.source === "QN" ? "open quote" : "book of business";
  return `ECRM \u00b7 ${kind}${lead.seen != null ? ` \u00b7 landed ${xFmt(xLanded(lead))}` : ""}`;
}
function xLogged(d) { return d && d.t != null ? ` \u00b7 logged to ECRM ${xFmt(Math.min(d.t + 1, (d.when != null ? d.when : d.t) + 1))}` : ""; }
function xOutcomeText(v) {
  const d = XS.done[v.last.id], nx = xNextLabel(v.p);
  if (d.k === "signed") return `Signed · ${v.lead.lines} app${v.lead.lines > 1 ? "s" : ""}, household protected · welcome call in 7 days`;
  if (d.k === "quoted") return "Quoted · the quote follow-up plan starts tomorrow" + xLogged(d);
  if (d.k === "notnow") return "Not now · a reminder is set for their renewal date";
  if (d.k === "talked") return "Talked · " + nx + xLogged(d);
  if (d.k === "scheduled") return `Approved${d.by ? ` by ${d.by}` : ""} ${xFmt(d.when || d.t)} · sends ${xFmt(d.t)} · ${nx}`;
  if (d.k === "sent") return `Sent${d.by ? ` by ${d.by}` : ""} ${xFmt(d.when || d.t)} · ${nx}`;
  return `${XOUT[d.k]} · ${nx}`;
}
function xStatusOf(t, now) {
  if (t.tomorrow) return { cls: "", text: "Tomorrow 9:00 AM" };
  if (t.wk === "now" && t.lead.seen != null) {
    const waited = Math.max(0, now - xLanded(t.lead)), left = 5 - waited;
    if (now < XLEGAL.call[0]) return { cls: "", text: `Calls open at ${xFmt(XLEGAL.call[0])}` };
    if (now >= XLEGAL.call[1] - 10) return { cls: "", text: "Calls reopen 9:00 AM" };
    if (left > 0) { const sec = Math.floor(left * 60); return { cls: "sla-green", text: `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")} left` }; }
    return { cls: waited < 15 ? "sla-amber" : "sla-red", text: `${Math.round(waited)} min waiting` };
  }
  if (t.slot <= now) return now - t.slot > 30 ? { cls: "sla-amber", text: `Due since ${xFmt(t.slot)}` } : { cls: "x-when-due", text: "Due now" };
  return { cls: "x-when-time", text: t.label };
}

// --- small pieces ---------------------------------------------------------------------------------
function XViewBar({ view }) {
  return (
    <div className="x-viewbar">
      <span className="x-viewbar-label">Today view</span>
      <div className="x-seg" role="group" aria-label="Today view">
        {[["queue", "Action queue"], ["plan", "Day plan"], ["classic", "Classic"]].map(([k, l]) => (
          <button key={k} className={view === k ? "active" : ""} aria-pressed={view === k} onClick={() => xSet({ view: k })}>{l}</button>
        ))}
      </div>
    </div>
  );
}
function XPath({ v, now }) {
  // today's sequence for this person, in order: the different-order-for-different-people picture
  return (
    <span className="x-path" aria-label="Today's sequence">
      {v.ts.map((t, i) => {
        const d = XS.done[t.id], skipped = !d && !v.current ? true : false, cur = v.current && v.current.id === t.id;
        return (
          <span key={t.id} className={`x-path-step x-path-${t.ch}${d ? " is-done" : ""}${cur ? " is-cur" : ""}${skipped ? " is-off" : ""}`} title={`${XCH[t.ch]} · ${t.label} · ${t.step.what}`}>
            {i > 0 && <span className="x-path-arrow" aria-hidden="true">→</span>}
            <span className="x-path-ch">{XCH[t.ch]}</span>
            <span className="x-path-t">{d ? "✓" : t.tomorrow ? "9:00 AM" : t.wk === "now" ? "now" : t.label.replace(":00", "")}</span>
          </span>
        );
      })}
    </span>
  );
}
function XWhen({ t, now }) {
  const s = xStatusOf(t, now);
  if (s.cls === "x-when-due") return <span className="x-when lz lz-information">{s.text}</span>;
  return <span className={"x-when " + s.cls}>{s.text}</span>;
}

function XCallPlan({ lead, persona, t }) {
  const lines = xSay(lead, persona);
  const vm = xFillSay(XVM[lead.scenario], lead, persona);
  const secs = xVoicemail(t);
  const follow = lead.consent.sms && lead.contacted ? xMessage(lead, "text", persona) : lead.consent.email ? xMessage(lead, "email", persona) : null;
  return (
    <div className="x-call">
      <div className="x-call-dial">Dial <b className="mono">{lead.phone}</b>{!lead.consent.sms && !lead.consent.email ? <span className="x-call-note"> · Manual dial only. Ask for their OK to text on the call.</span> : null}</div>
      <ol className="x-say">
        {lines.map((s, i) => (
          <li key={i}><span className={`x-badge x-badge-${i + 1}`} data-n={i + 1} aria-hidden="true" /><div><div className="x-say-k">{XMOVE_NAMES[i]}</div><div className="x-say-t">{s}</div></div></li>
        ))}
      </ol>
      <details className="x-vm">
        <summary>{secs ? `No answer? Leave a voicemail, ${secs === 30 ? "under 30 seconds" : "about 15 seconds"}` : "No answer? No voicemail on this call"}</summary>
        <div className="x-vm-body">
          {secs ? <><div className="x-say-k">Leave this voicemail</div><div className="x-say-t">{vm}</div></>
            : <div className="x-say-t">Hang up without a message. A new lead gets two voicemails at most: one on the second call, one on a later call. <XRefs ids={["T14"]} /></div>}
          {follow && <><div className="x-say-k">Then {lead.consent.sms && lead.contacted ? "text" : "email"} this</div><div className="x-say-t x-say-sms">{follow.body}</div></>}
        </div>
      </details>
    </div>
  );
}

// a small clock for the five-minute block: elapsed since this card opened, amber past five
function XFiveMin({ mins }) {
  const [t0] = I.useState(Date.now());
  const [, tick] = I.useState(0);
  I.useEffect(() => { const h = setInterval(() => tick((x) => x + 1), 1000); return () => clearInterval(h); }, []);
  const el = Math.floor((Date.now() - t0) / 1000), m = Math.floor(el / 60), ss = String(el % 60).padStart(2, "0");
  const over = el > mins * 60;
  return <span className={"x-timer" + (over ? " is-over" : "")} title={`This block is ${mins} minutes; past that, log what you have and move on`}><span className="mono">{m}:{ss}</span><small> of {mins}:00</small></span>;
}
function XDo({ v, persona, onAct, big }) {
  const [copied, setCopied] = I.useState(false);
  const t = v.current, lead = v.lead, ch = t.ch;
  const okText = !!lead.consent.sms, okEmail = !!lead.consent.email;
  const msg = ch === "call" ? null : xMessage(lead, ch, persona);
  const blocked = (ch === "text" && !okText) || (ch === "email" && !okEmail);
  const outs = xOuts(ch, t);
  const copyText = msg ? (ch === "email" ? `Subject: ${msg.subject}\n\n${msg.body}` : msg.body) : "";
  return (
    <div className={"x-do" + (big ? " x-do-big" : "")}>
      {XS.coach && <div className="x-why-now"><span className="x-why-k">Why this, why now</span>{xTouchWhy(t)}</div>}
      <div className="x-do-bar">
        <div className="x-seg x-chan" role="group" aria-label="Channel">
          {["call", "text", "email"].map((c) => {
            const dis = (c === "text" && !okText) || (c === "email" && !okEmail);
            return <button key={c} className={ch === c ? "active" : ""} aria-pressed={ch === c} disabled={dis} title={dis ? `No ${c === "text" ? "text" : "email"} consent on file` : undefined} onClick={() => xSet((s) => ({ chan: { ...s.chan, [t.id]: c } }))}>{XCH[c]}</button>;
          })}
        </div>
        <Rp consent={lead.consent} />
        <XFiveMin mins={ch === "call" ? 5 : 2} />
      </div>
      {ch === "call" && <XAsks lead={lead} />}
      {ch === "call" ? <XCallPlan lead={lead} persona={persona} t={t} /> : msg ? (
        <div className="x-msg">
          {ch === "email" && <div className="x-msg-subject">{msg.subject}</div>}
          <div className="x-msg-body">{msg.body}</div>
          <div className="x-msg-foot">
            <span className="x-msg-note">{ch === "text" ? `${Zm(msg.body + cf).len} characters with the opt-out line` : "Signature and license line are added on send"}</span>
            <button className="btn" onClick={() => { xCopy(copyText); setCopied(true); setTimeout(() => setCopied(false), 1597); }}>{copied ? "Copied" : "Copy"}</button>
          </div>
        </div>
      ) : null}
      {blocked && <div className="x-blocked">No {ch === "text" ? "text" : "email"} consent on file. Pick another channel above.</div>}
      <div className="x-outs">
        {outs.map((k, i) => (
          <button key={k} className={"btn" + (i === 0 ? " primary x-first" : "")} disabled={blocked && k !== "notnow"} onClick={() => onAct(k)}>
            {k === "scheduled" ? `Approve · sends ${t.label}` : XOUTBTN[k]}{big && i === 0 && <kbd>Enter</kbd>}
          </button>
        ))}
        <button className="btn ghost x-skip" onClick={() => onAct("skip")}>Skip{big && <kbd>S</kbd>}</button>
      </div>
      <XHelp lead={lead} persona={persona} />
    </div>
  );
}

function XRow({ v, now, isOpen, persona, onToggle, onAct, onUndo }) {
  const lead = v.lead, t = v.current;
  const [lh, setLh] = I.useState(false);
  return (
    <div className={`x-row x-st-${lead.style}${isOpen && t ? " is-open" : ""}${v.complete && v.doneTs.length ? " is-done" : ""}`}>
      <div className="x-row-main" onClick={() => t && onToggle()}>
        <div className="x-row-text">
          <div className="x-row-line1">
            <span className="x-name">{lead.name}</span>
            <XStyleLz style={lead.style} />
            <Pp stage={lead.stage} />
            <span className="x-tag">{XQ_GROUPS.find((g) => g.k === v.group).tag}{lead.at ? ` ${lead.at}` : ""}</span>
            {t && <span className="x-mins" title="Five minutes: the call, the outcome, the next step is already set">5 min</span>}
            {lead.consent && lead.consent.stop && <span className="lz lz-danger x-lz-stop" title={lead.consent.basis}>Texted STOP {lead.consent.stop}{t ? ` · now by ${XCH[t.ch].toLowerCase()}` : ""}</span>}
            {isOpen && t && <XLifeChip lead={lead} v={v} open={lh} onToggle={() => setLh(!lh)} />}
          </div>
          <div className="x-row-line2"><span>{lead.reason}</span>{lead.meta.map((m, i) => <span key={i} className="dot">{m}</span>)}<span className="dot x-src" title="Where this person comes from in the agency's system">{xSource(lead)}</span></div>
          <div className="x-row-step">
            {t ? <>{t.booked ? `Booked call · ${lead.at}` : `Step ${t.step.n} of ${v.p.N} · ${xDayLabel(lead)} · ${t.step.what}`}</> : v.last ? <><span className="x-check">✓</span> {xOutcomeText(v)}</> : "Nothing due today"}
          </div>
          {v.ts.length > 0 && <XPath v={v} now={now} />}
        </div>
        <div className="x-row-side">
          {t && <XWhen t={t} now={now} />}
          {!t ? (v.doneTs.length ? <button className="x-undo" onClick={(e) => { e.stopPropagation(); onUndo(); }}>Undo</button> : null)
            : <button className={"btn x-act x-act-" + t.ch + (isOpen ? " primary" : "")} aria-expanded={isOpen} onClick={(e) => { e.stopPropagation(); onToggle(true); }}>{XCH[t.ch]}</button>}
        </div>
      </div>
      {isOpen && t && lh && <XLeadLife lead={lead} v={v} onClose={() => setLh(false)} />}
      {isOpen && t && <XDo v={v} persona={persona} onAct={onAct} />}
    </div>
  );
}

function XHowTo({ lead, ch }) {
  if (!lead) return null;
  const cell = XMOVES[lead.scenario][lead.style], st = rf[lead.style];
  return (
    <div className="card x-howto">
      <div className="card-head"><span className="title">How to talk to {xFirst(lead.name)}</span><XStyleLz style={lead.style} /></div>
      <div className="x-howto-body">
        <div className="x-howto-essence" key={"e" + lead.id}>{XESSENCE[lead.style]}</div>
        <ol className="x-howto-moves">
          {["m", "f", "a"].map((k, i) => (
            <li key={k + lead.id}><span className={`x-badge x-badge-${i + 1}`} data-n={i + 1} aria-hidden="true" /><div><div className="x-say-k">{XMOVE_NAMES[i]}</div><div className="x-howto-label">{xFillLabel(cell[k].label, lead)}</div></div></li>
          ))}
        </ol>
        <XLevers style={lead.style} scenario={lead.scenario} channel={ch} compact />
      </div>
    </div>
  );
}

function XFocus({ v, now, persona, score, total, onAct, onClose }) {
  const ref = I.useRef({});
  ref.current = { v, onAct, onClose };
  I.useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const h = (e) => {
      const r = ref.current, tag = (e.target && e.target.tagName) || "";
      if (e.key === "Escape") { r.onClose(); return; }
      if (!r.v || !r.v.current || /INPUT|TEXTAREA|SELECT/.test(tag)) return;
      const outs = xOuts(r.v.current.ch, r.v.current);
      if (e.key === "Enter" && tag !== "BUTTON" && tag !== "SUMMARY") { e.preventDefault(); r.onAct(outs[0]); }
      else if (/^[2-5]$/.test(e.key) && outs[+e.key - 1]) r.onAct(outs[+e.key - 1]);
      else if (e.key === "s" || e.key === "S") r.onAct("skip");
    };
    window.addEventListener("keydown", h);
    return () => { window.removeEventListener("keydown", h); document.body.style.overflow = prev; };
  }, []);
  const g = v ? XQ_GROUPS.find((x) => x.k === v.group) : null;
  return (
    <div className="x-focus" role="dialog" aria-modal="true" aria-label="Start my 20" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="x-focus-panel">
        <div className="x-focus-top">
          <div className="x-focus-progress"><span>{score.touched} of {total} touched · {score.quotes} quote{score.quotes === 1 ? "" : "s"} · {score.apps} app{score.apps === 1 ? "" : "s"} / {score.hh} HH</span><div className="x-tile-bar"><i style={{ width: (score.touched / total) * 100 + "%" }} /></div><span className="x-focus-keys">Keys: Enter = first button · 2–5 = the others · S = skip · Esc = exit</span></div>
          <button className="btn ghost" onClick={onClose}>Exit<kbd>Esc</kbd></button>
        </div>
        {v && v.current ? (
          <div className="x-focus-body" key={v.current.id}>
            <div className="x-focus-head">
              <div>
                <div className="x-focus-group">{g ? g.title : ""}{xIsDue(v.current, now) ? "" : " · coming up"}</div>
                <h2 className="x-focus-name">{v.lead.name}</h2>
                <div className="x-row-line1"><XStyleLz style={v.lead.style} /><Pp stage={v.lead.stage} /></div>
                <div className="x-row-line2"><span>{v.lead.reason}</span>{v.lead.meta.map((m, i) => <span key={i} className="dot">{m}</span>)}</div>
                <div className="x-row-step">{v.current.booked ? `Booked call · ${v.lead.at}` : `Step ${v.current.step.n} of ${v.p.N} · ${xDayLabel(v.lead)} · ${v.current.step.what}`}</div>
                <XPath v={v} now={now} />
              </div>
              <XWhen t={v.current} now={now} />
            </div>
            <div className="x-focus-grid">
              <XDo big v={v} persona={persona} onAct={onAct} />
              <XHowTo lead={v.lead} ch={v.current.ch} />
            </div>
          </div>
        ) : (
          <div className="x-focus-done">
            <h2>All {total} touched.</h2>
            <p>{score.quotes} quotes · {score.apps} apps / {score.hh} HH protected today.</p>
            <button className="btn primary" onClick={onClose}>Back to the queue</button>
          </div>
        )}
      </div>
    </div>
  );
}

function xAct(v, k, order) {
  if (!v || !v.current) return;
  const ids = order.map((x) => x.lead.id);
  const after = (from) => { const i = ids.indexOf(from); for (let j = 1; j <= ids.length; j++) { const c = ids[(i + j + ids.length) % ids.length]; if (c !== from) return c; } return null; };
  if (k === "skip") { xSet({ open: after(v.lead.id) }); return; }
  const before = xScore(XS.done);
  const done = { ...XS.done, [v.current.id]: { k, ch: v.current.ch, at: Date.now(), t: k === "scheduled" ? v.current.slot : xClock(), by: XS.persona || null, when: xClock() } };
  const b = xScore(done), bump = {};
  for (const key of ["touched", "quotes", "apps", "hh"]) if (b[key] > before[key]) bump[key] = Date.now();
  xSet({ done, bump });
  // the next lead the rep should work: recompute the order with the new state
  const views = xLeadViews(xBuildDay(XQ));
  const next = xWorkOrder(views, xClock()).find((x) => x.lead.id !== v.lead.id) || xWorkOrder(views, xClock())[0] || null;
  xSet({ open: next ? next.lead.id : null });
}
function xUndo(v) {
  if (!v.last) return;
  const done = { ...XS.done };
  delete done[v.last.id];
  xSet({ done, open: v.lead.id });
}
