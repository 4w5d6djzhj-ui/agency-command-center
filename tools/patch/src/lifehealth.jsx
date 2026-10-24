// Life & health readiness · one model and one set of lines for v1, v2 and Next Step. Keep the copies identical.
// readiness({ text, style, greenLight, pushback, talked }) -> { score, level, levelWord, levelWhy, confidence, cues, event }
//   text: what the person said so far (transcript lines or the pasted message), style: story|asker|doer|thinker,
//   greenLight: they said yes / booked / bound, pushback: objection in the latest turn, talked: a conversation happened.
const LH_EVENTS = [
  ["baby", "the baby"], ["pregnant", "the baby"], ["expecting", "the baby"], ["newborn", "the baby"],
  ["married", "the wedding"], ["engaged", "the engagement"], ["wedding", "the wedding"], ["fiancé", "the engagement"], ["fiance", "the engagement"],
  ["bought a house", "the new house"], ["new home", "the new house"], ["new house", "the new house"], ["closing", "the new house"], ["mortgage", "the mortgage"], ["refinance", "the refinance"], ["refinanced", "the refinance"], ["refinancing", "the refinance"], ["refi", "the refinance"],
  ["new business", "the new business"], ["llc", "the new business"], ["started a company", "the new business"], ["self-employed", "the business"], ["self employed", "the business"],
  ["kids", "the kids"], ["daughter", "your daughter"], ["son", "your son"], ["college", "college"], ["tuition", "college"],
  ["retire", "retirement"], ["retired", "retirement"], ["retiring", "retirement"], ["retirement", "retirement"], ["aging parent", "your parents"], ["my mom", "your mom"], ["my dad", "your dad"], ["moving in with us", "your parents"],
  ["new job", "the new job"], ["raise", "the raise"], ["promotion", "the promotion"], ["promoted", "the promotion"], ["children", "the kids"], ["kid", "the kids"], ["pregnancy", "the baby"], ["twins", "the babies"],
];
const LH_PROTECT = ["protect", "protected", "protecting", "protection", "family", "income", "if something happened", "if something happens", "depends on me", "breadwinner", "provide for", "payments", "payment", "loan", "loans", "who would pay", "who pays"];
const LH_COVER = ["life insurance", "term policy", "term life", "through work", "group life", "disability", "health plan", "medical bills", "out of work", "surgery", "hospital", "long-term care", "long term care"];
const LH_PUSH = ["not interested", "too expensive", "stop", "busy", "call me later", "don't need", "do not need", "no thanks", "not right now", "not now", "maybe later"];
const LH_STYLE_MOD = { story: (hasEvent) => (hasEvent ? 10 : 0), asker: () => 0, doer: (_, green) => (green ? 0 : -10), thinker: () => -10 };

// whole words only ("son" never matches "person"; "stop" never matches "stopped"); accents and hyphens kept
function lhFind(text, list) {
  const t = (text || "").toLowerCase();
  const hits = [];
  for (const item of list) {
    const w = Array.isArray(item) ? item[0] : item;
    const re = new RegExp("(^|[^a-z0-9\u00C0-\u017F])" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "(?=$|[^a-z0-9\u00C0-\u017F])", "i");
    if (re.test(t)) hits.push(Array.isArray(item) ? { w, label: item[1] } : { w, label: null });
  }
  return hits;
}
function readiness(o) {
  const events0 = lhFind(o.text, LH_EVENTS), seen = new Set();
  const events = events0.filter((h) => (seen.has(h.label) ? false : (seen.add(h.label), true)));   // one hit per life event
  const protect = lhFind(o.text, LH_PROTECT), cover = lhFind(o.text, LH_COVER);
  const push = o.pushback || lhFind((o.latest != null ? o.latest : o.text), LH_PUSH).length > 0;
  let score = Math.min(60, events.length * 30) + Math.min(30, protect.length * 15) + (cover.length ? 10 : 0);
  if (o.greenLight) score += 25; else if (o.talked) score += 10;
  if (push) score -= 30;
  const mod = LH_STYLE_MOD[o.style] || LH_STYLE_MOD.story;
  score += mod(events.length > 0, !!o.greenLight);
  // the door opens only after the main ask for Questioners and Thinkers, and only with a yes for Doers
  if (!o.greenLight && (o.style === "asker" || o.style === "thinker" || o.style === "doer")) score = Math.min(score, 69);
  score = Math.max(0, Math.min(100, Math.round(score)));
  const level = score >= 70 ? "ready" : score >= 40 ? "seed" : "notyet";
  const levelWord = { ready: "READY", seed: "SEED", notyet: "NOT YET" }[level];
  const levelWhy = { ready: "ask now", seed: "one sentence, no ask", notyet: "finish the main ask first" }[level];
  const distinct = events.length + protect.length + cover.length + (o.greenLight ? 1 : 0);
  const confidence = distinct >= 3 ? "Clear" : distinct === 2 ? "Likely" : "Your call";
  const cues = [...events, ...protect, ...cover].map((h) => h.w);
  if (o.greenLight) cues.push("said yes");
  if (push) cues.push("pushback");
  return { score, level, levelWord, levelWhy, confidence, cues, event: events.length ? events[0].label : null, pushback: push };
}
// The three lines, one at a time: Open · Gap · Ask. {event} = the life event in their words, {day} = two business days out.
const LH_LINES = {
  open: {
    story: "Can I ask you one thing about {event}? Auto protects the car and home protects the house. Life protects the payments.",
    asker: "One more line for the page: who pays the mortgage and the car if the income stops? I can put a number next to it.",
    doer: "One more thing, thirty seconds. Life protects the payments. Want the number on the same page?",
    thinker: "No decision today. I'll add one line to the page: who pays the payments if the income stops, so you can read it before your renewal.",
  },
  gap: {
    story: "Left is what you have, middle is the gap, right is one move now and one later. The gap is the payments: car loan, mortgage, income.",
    asker: "Left is what you have, middle is the gap, right is one move now and one later. Future income that can be claimed: income × 25% × 20 years. The gap is the payments.",
    doer: "What you have, the gap, one move now and one later. The gap is the payments: car loan, mortgage, income.",
    thinker: "Left is what you have, middle is the gap, right is one move now and one later. The gap is the payments; nothing to decide today.",
  },
  ask: {
    story: "Which gap would you want handled first? You pick the day.",
    asker: "Which gap first? I'll put the exact number next to it today, ready to sign by {day}.",
    doer: "Life or disability first? Ready to sign by {day}.",
    thinker: "Would it be a terrible idea to fix the first gap before your renewal? You decide.",
  },
};
const LH_STEPS = [["open", "Open"], ["gap", "Gap"], ["ask", "Ask"]];
const LH_NOTE = "Illustration only, not a policy or quote, subject to underwriting.";
const LH_WHAT_OPENS = "What would open it: a life event in their words, or a yes on the quote.";
function lhDay(from) {
  const d = new Date(from || Date.now()); let n = 0;
  while (n < 2) { d.setDate(d.getDate() + 1); if (d.getDay() !== 0 && d.getDay() !== 6) n++; }
  return d.toLocaleDateString("en-US", { weekday: "long" });
}
function lhLine(step, style, r, from) {
  const s = LH_LINES[step][style] || LH_LINES[step].story;
  return s.replace("{event}", r && r.event ? r.event : "what you mentioned").replace("{day}", lhDay(from));
}

// ---- v1 · the panel and its inputs (above this line: the shared model, kept identical across products) ----
// Their words on file, per lead (synthetic): what they wrote or said when they came in, from the notes.
const XLH_ON_FILE = {
  Q01: "Two cars, need auto. Just send me the quote.",
  Q02: "Moving into a new place in May. Renters and auto, but I'll want to think it over first.",
  "L-002": "James said you'd look after me. We just bought a house, our first, and I don't know what the lender needs from me.",
  "C-001": "The kitchen is finished, so the valuation is up. Happy to go over it.",
  "C-002": "With the baby coming, every dollar matters. My wife's been asking about life insurance too; we've been putting it off.",
  "C-003": "Auto and home together. Just tell me the total.",
  Q07: "What are the limits on the $142 quote, and is the deductible the same as mine?",
  Q08: "Re-run it from what you have. I'm not filling anything out.",
  Q09: "Let me think. We're refinancing this winter, and I want to know the payments are covered if something happens.",
  Q10: "Two teen drivers now; my daughter just got her license.",
  Q11: "Auto is with you, home is elsewhere. Show me both side by side, line by line.",
  Q12: "Keep it short.",
  Q13: "Price was the only thing. We got married in June, so it's both our cars now.",
  Q14: "Three cars, no accidents. What's the number?",
  Q15: "We had the baby on Sunday. I want the family protected, but I need time to read everything.",
  "L-101": "I'll decide before the renewal. Send it in writing.",
  Q17: "My dad is moving in with us after the holidays, so the house is getting full.",
  "L-103": "Is $192 the same limits as what I have?",
  "L-104": "Fine if it's cheaper. Text me.",
  Q20: "STOP",
};
// a lead's input: their own words on file and the notes, plus today's logged outcomes (a booked call or a
// signed app is the yes; a talk or a quote is a conversation; "Not now" is pushback)
function xLHInput(lead, v) {
  const words = XLH_ON_FILE[lead.id] || "";
  const outs = v && v.doneTs ? v.doneTs.map((t) => XS.done[t.id] && XS.done[t.id].k).filter(Boolean) : [];
  return {
    text: [words, ...(lead.meta || [])].filter(Boolean).join(". "), latest: words, style: lead.style,
    greenLight: !!lead.at || outs.includes("signed"), talked: !!lead.contacted || outs.some((k) => /talked|quoted|signed/.test(k)),
    pushback: outs[outs.length - 1] === "notnow", words,
  };
}
const XLH_LOOK = { ready: ["success", true], seed: ["discovery", false], notyet: [null, false] };
const XLH_CUE = { "said yes": "success", pushback: "warning" };
function xLHTitle(r) { return `Life & health: ${r.levelWord}, ${r.levelWhy}. Confidence: ${r.confidence}${r.cues.length ? `. Because: ${r.cues.join(", ")}` : ""}.`; }

// The panel: the level as a word, the confidence in words, the meter, the cues in their words, and the lines
// one at a time (Open · Gap · Ask). SEED shows only the Open line; NOT YET says what would open it.
// gate: open suitability items (Live Coach): the Ask waits behind them. onOpen(step): a line came on screen.
function XLifePanel({ text, latest, style, greenLight, talked, pushback, onOpen, gate, from }) {
  const r = readiness({ text, latest, style, greenLight, pushback, talked });
  const [step, setStep] = I.useState(0);
  I.useEffect(() => { setStep(0); }, [r.level]);
  I.useEffect(() => { if (onOpen && r.level !== "notyet") onOpen(LH_STEPS[step][0]); }, [step, r.level]);
  const [ap, bold] = XLH_LOOK[r.level];
  const st = style && LH_LINES.open[style] ? style : "story";
  const line = (k) => lhLine(k, st, r, from);
  const scrollGate = () => { try { const el = document.querySelector(".life-suitability"); if (el) el.scrollIntoView({ block: "center", behavior: "smooth" }); } catch (e) {} };
  return (
    <div className={"x-lh x-lh-" + r.level} data-level={r.level} data-score={r.score}>
      <div className="x-lh-head">
        <Lozenge appearance={ap} bold={bold} title={xLHTitle(r)}>{r.levelWord}</Lozenge>
        {r.level !== "notyet" && <span className="x-lh-why">{r.levelWhy}</span>}
        <span className="x-lh-conf" title="How sure the read is: Clear · Likely · Your call">Confidence · <b>{r.confidence}</b></span>
      </div>
      <div className="rm" role="meter" aria-valuemin={0} aria-valuemax={100} aria-valuenow={r.score} aria-label={`Readiness ${r.score} of 100: ${r.levelWord}`} title="Seed from 40, ready from 70">
        <div className={"rm-fill " + r.level} style={{ width: r.score + "%" }} /><div className="rm-ticks" />
      </div>
      {r.cues.length > 0 && (
        <div className="x-lh-cues"><span className="x-lh-k">because:</span>{r.cues.map((c) => <Lozenge key={c} appearance={XLH_CUE[c]}>{c}</Lozenge>)}</div>
      )}
      {r.level === "ready" && (
        <div className="x-lh-script">
          <ProgressTracker steps={LH_STEPS.map(([k, l]) => [k, l])} current={step} />
          <div className="x-lh-line" key={step} data-step={LH_STEPS[step][0]}>“{line(LH_STEPS[step][0])}”</div>
          {LH_STEPS[step][0] === "ask" && gate > 0 && (
            <SectionMessage appearance="warning" title="Suitability first" action={{ label: "Show the checklist", onClick: scrollGate }}>
              {gate} required item{gate === 1 ? " is" : "s are"} still open in the suitability check below. Clear {gate === 1 ? "it" : "them"} before the ask.
            </SectionMessage>
          )}
          <div className="x-lh-nav">
            <button type="button" className="btn x-lh-back" disabled={step === 0} onClick={() => setStep(step - 1)}>← Back</button>
            <span className="x-lh-of">{step + 1} of {LH_STEPS.length}</span>
            <button type="button" className="btn x-lh-next" disabled={step === LH_STEPS.length - 1} onClick={() => setStep(step + 1)}>Next line →</button>
          </div>
        </div>
      )}
      {r.level === "seed" && (
        <div className="x-lh-script">
          <div className="x-lh-k">Open line · say it once</div>
          <div className="x-lh-line" data-step="open">“{line("open")}”</div>
        </div>
      )}
      {r.level === "notyet" && (
        <div className="x-lh-script">
          <div className="x-lh-line x-lh-wait">Not yet · finish the main ask first</div>
          <EmptyState>{LH_WHAT_OPENS}</EmptyState>
        </div>
      )}
      <div className="x-lh-note">{LH_NOTE}</div>
    </div>
  );
}

// the lozenge at the end of a work card's chips row; tapping it opens the panel in place
function XLifeChip({ lead, v, open, onToggle }) {
  const inp = xLHInput(lead, v), r = readiness(inp), [ap, bold] = XLH_LOOK[r.level];
  return (
    <button type="button" className="x-lh-chip" aria-expanded={!!open} title={xLHTitle(r) + (open ? " Tap to close." : " Tap for the lines.")}
      onClick={(e) => { e.stopPropagation(); onToggle(); }}>
      <Lozenge appearance={ap} bold={bold}>Life &amp; health · {r.levelWord}</Lozenge>
    </button>
  );
}
// the panel as it opens inside a work card or the Now box, read from the lead's words on file
function XLeadLife({ lead, v, onClose }) {
  const inp = xLHInput(lead, v);
  return (
    <div className="x-lh-card" role="region" aria-label={`Life & health readiness: ${lead.name}`} onClick={(e) => e.stopPropagation()}>
      <div className="x-lh-cardhead">
        <span className="x-lh-title">Life &amp; health · readiness</span>
        {inp.words && <span className="x-lh-src" title={`Their words on file: “${inp.words}”`}>from their words on file{v && v.doneTs && v.doneTs.length ? " and today's outcomes" : ""}</span>}
        {onClose && <button type="button" className="x-lh-close" onClick={onClose} aria-label="Close the Life & health panel">×</button>}
      </div>
      <XLifePanel {...inp} />
    </div>
  );
}

// Live Coach: the panel under the style read, recomputed each turn from the prospect's lines so far
const XLH_YES = /\b(yes|let's do it|let’s do it|book|booked|sounds good|go ahead)\b/i;
function xLHTurnYes(t) {
  const c = (t && t.coach) || {};
  const said = t && t.transcript ? t.transcript.filter((l) => l.speaker !== "Rep").map((l) => l.text).join(" ") : "";
  return XLH_YES.test(said) || !!(c.lifeSignal && c.lifeSignal.intensity === "committed") || /meeting confirmed|booked/i.test(c.signal || "");
}
function XCoachLife({ turn, transcript, dominant, gate }) {
  const turns = (transcript || []).slice(0, (turn != null ? turn : (transcript || []).length - 1) + 1);
  const said = turns.map((t) => (t.transcript || []).filter((l) => l.speaker !== "Rep").map((l) => l.text).join(" "));
  const cur = turns[turns.length - 1] || {}, al = cur.coach && cur.coach.alert;
  const push = !!(al && al.kind === "warning" && /pushback/i.test((al.textParts || []).map((p) => p.text).join(" ")));
  return (
    <div className="coach-section x-lh-coach">
      <div className="label">Life &amp; health · readiness</div>
      <XLifePanel text={said.join(" ")} latest={said[said.length - 1] || ""} style={dominant || "story"} greenLight={turns.some(xLHTurnYes)} talked pushback={push} gate={gate} />
    </div>
  );
}
