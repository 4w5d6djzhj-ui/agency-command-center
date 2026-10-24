// The style read (v18) · Live Coach "Communication style · read from the conversation". Replaces the bundle's
// Cf bars. Four rows in a fixed order (never re-sorted, so a bar's movement is visible), each in its style's
// color. On a turn the widths move (610 ms); the row that changed the most pulses once and shows its delta
// (1.618 s, then gone); a ghost tick holds the previous turn's value; the leading row is full color with
// READING (50+) · LOCKED (75+ and leading two turns running) · TIE (top two within 10). Under the bars, one
// line: the turn, the move, and the prospect's words that carried it, marked. Why · Replay the read.
const XSR_ORDER = [["story", "Storyteller"], ["asker", "Questioner"], ["doer", "Doer"], ["thinker", "Thinker"]];
// the words that point to each style in what the prospect says (the "$" cue is any dollar figure)
const XSR_CUES = {
  story: ["baby", "wife", "husband", "family", "kids", "honestly", "someone real", "stuff happens", "putting it off", "every dollar matters", "we've been"],
  asker: ["shopping around", "cheapest", "$", "beat", "best number", "compare", "how much", "limits", "paying"],
  doer: ["just", "works", "bring anything", "send", "quick", "fine", "go ahead"],
  thinker: ["maybe", "i mean", "think", "don't want to get into", "not sure", "later", "talk to my"],
};
function xsrRe(k) {
  const alt = XSR_CUES[k].map((c) => (c === "$" ? "\\$\\d[\\d,]*" : "\\b" + c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/'/g, "['’]") + "\\b"));
  return new RegExp("(" + alt.join("|") + ")", "gi");
}
function xsrDims(t) { return t ? (t.coach ? t.coach.dimensions : t.dimensions || null) : null; }
function xsrSaid(t) { return t && t.transcript ? t.transcript.filter((l) => l.speaker !== "Rep").map((l) => l.text).join(" ") : ""; }
function xsrClamp(v) { return Math.max(0, Math.min(100, Math.round(v || 0))); }
function xsrTop(d) {
  const rows = XSR_ORDER.map(([k]) => [k, xsrClamp(d[k])]).sort((a, b) => b[1] - a[1]);
  return { k: rows[0][0], v: rows[0][1], gap: rows[0][1] - rows[1][1] };
}
// the read at turn i: who leads, the word on the lead, and the row that moved the most since turn i-1
function xsrState(dimsAt, i, dominant) {
  const d = dimsAt(i);
  if (!d) return null;
  const top = xsrTop(d), lead = dominant || top.k, v = xsrClamp(d[lead]);
  const p = i > 0 ? dimsAt(i - 1) : null, pTop = p ? xsrTop(p) : null;
  const word = top.gap <= 10 ? "TIE" : v >= 75 && pTop && pTop.k === lead ? "LOCKED" : v >= 50 ? "READING" : null;
  let moved = null;
  if (p) for (const [k] of XSR_ORDER) { const dd = xsrClamp(d[k]) - xsrClamp(p[k]); if (dd && (!moved || Math.abs(dd) > Math.abs(moved.d))) moved = { k, d: dd }; }
  return { lead, v, word, moved, d, p };
}
function xsrLabel(k) { return (XSR_ORDER.find((r) => r[0] === k) || [k, k])[1]; }
// their words from that turn that carried the style: the best window of one or two sentences, cues marked
function xsrHeard(said, k) {
  const ss = String(said || "").split(/(?<=[.!?])\s+(?=[A-Z“"])/).filter(Boolean);
  const count = (s) => (s.match(xsrRe(k)) || []).length;
  let best = null;
  for (let i = 0; i < ss.length; i++) for (let n = 1; n <= 2 && i + n <= ss.length; n++) {
    const s = ss.slice(i, i + n).join(" "), c = count(s);
    if (!c || (n === 2 && s.length > 120)) continue;
    if (!best || c > best.c || (c === best.c && s.length < best.s.length)) best = { s, c };
  }
  if (!best) return null;
  let s = best.s;
  if (s.length > 120) s = s.slice(0, 117).replace(/\s+\S*$/, "") + "…";
  return s.split(xsrRe(k)).map((part, i) => (i % 2 ? <mark key={i}>{part}</mark> : part));
}
function xsrReduced() { try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; } }

function XStyleRead({ dimensions, dominant, turn, transcript, signal }) {
  const turns = Array.isArray(transcript) ? transcript : [];
  const cur = turn != null ? turn : Math.max(0, turns.length - 1);
  // the values each turn showed, kept by turn, so the ghost and the deltas are right stepping either way
  const seen = I.useRef({});
  if (dimensions) seen.current[cur] = dimensions;
  const [replay, setReplay] = I.useState(null);
  const [grown, setGrown] = I.useState(false);
  const [flash, setFlash] = I.useState(null);
  const [why, setWhy] = I.useState(false);
  const dt = replay != null ? replay : cur;
  const dimsAt = (i) => (i === cur && dimensions) || seen.current[i] || xsrDims(turns[i]) || null;
  const st = xsrState(dimsAt, dt, dt === cur ? dominant : null);
  // the bars grow in on arrival, then move with each turn
  I.useEffect(() => { let b = 0; const a = requestAnimationFrame(() => { b = requestAnimationFrame(() => setGrown(true)); }); return () => { cancelAnimationFrame(a); cancelAnimationFrame(b); }; }, []);
  // a turn change: the biggest mover pulses once (233 ms) and shows its delta for 1.618 s
  I.useEffect(() => {
    if (!st || !st.moved) { setFlash(null); return undefined; }
    setFlash({ k: st.moved.k, d: st.moved.d, at: dt, pulse: true });
    const a = setTimeout(() => setFlash((f) => (f ? { ...f, pulse: false } : f)), 377);
    const b = setTimeout(() => setFlash(null), 1700);
    return () => { clearTimeout(a); clearTimeout(b); };
  }, [dt]);
  // a new turn from the call stops a replay
  I.useEffect(() => { setReplay(null); }, [cur]);
  // Replay the read: turns 1…N, one per 1.618 s, then back to the current turn
  I.useEffect(() => {
    if (replay == null) return undefined;
    const id = setTimeout(() => setReplay((r) => (r == null || r >= cur ? null : r + 1)), 1618);
    return () => clearTimeout(id);
  }, [replay, cur]);
  if (!st) return null;
  const { lead, word, moved, d, p } = st;
  const heardK = moved && moved.d > 0 ? moved.k : lead;
  const said = xsrSaid(turns[dt]);
  const heard = xsrHeard(said, heardK) || (heardK !== lead ? xsrHeard(said, lead) : null);
  const move = moved ? `${xsrLabel(moved.k)} ${moved.d > 0 ? "up" : "down"} ${Math.abs(moved.d)}` : `${xsrLabel(lead)} ${xsrClamp(d[lead])}`;
  const wordTitle = { READING: "Leading at 50 or more", LOCKED: "75 or more, and leading two turns running", TIE: "The top two are within 10 points" }[word];
  return (
    <div className={"x-sr" + (replay != null ? " is-replay" : "")} data-turn={dt + 1}>
      <div className="sr" role="group" aria-label={`Style read at turn ${dt + 1}: ` + XSR_ORDER.map(([k, l]) => `${l} ${xsrClamp(d[k])}%`).join(", ") + (word ? `; ${xsrLabel(lead)} ${word.toLowerCase()}` : "")}>
        {XSR_ORDER.map(([k, label]) => {
          const v = xsrClamp(d[k]), pv = p ? xsrClamp(p[k]) : null, isLead = k === lead, fl = flash && flash.k === k ? flash : null;
          return (
            <div key={k} className={"sr-row" + (isLead ? " lead" : "") + (fl && fl.pulse ? " moved" : "")} data-style={k} style={{ "--sr-color": `var(--style-${k})` }}>
              <span className="sr-name">{label}</span>
              <span className="sr-track">
                <span className="sr-fill" style={{ width: (grown ? v : 0) + "%" }} />
                {pv != null && <span className="sr-ghost" style={{ left: pv + "%" }} title={`Turn ${dt}: ${pv}%`} />}
                {fl && <Lozenge key={"d" + fl.at} appearance={k} className="sr-delta" title={`Since turn ${dt}`}>{fl.d > 0 ? "+" + fl.d : "−" + Math.abs(fl.d)}</Lozenge>}
              </span>
              <span className="sr-pct">{v}%</span>
              <span className="sr-word">{isLead && word && <Lozenge appearance={word === "TIE" ? null : k} bold={word === "LOCKED"} title={wordTitle}>{word}</Lozenge>}</span>
            </div>
          );
        })}
      </div>
      <div className="sr-heard" title={signal && dt === cur ? `Signal: ${signal}` : undefined}><b>Turn {dt + 1}</b> · {move}{heard ? <> · heard: “{heard}”</> : null}</div>
      <div className="x-sr-acts">
        <button type="button" className="x-sr-link" aria-expanded={why} onClick={() => setWhy(!why)}>Why {xsrLabel(lead)}?</button>
        <button type="button" className="x-sr-link x-sr-replay" onClick={() => setReplay(replay != null ? null : 0)}>{replay != null ? `■ Stop · turn ${replay + 1} of ${cur + 1}` : "▶ Replay the read"}</button>
      </div>
      {why && rf[lead] && (
        <SectionMessage appearance="discovery" title={`${xsrLabel(lead)}: how you can tell`} action={{ label: "Got it", onClick: () => setWhy(false) }}>{rf[lead].why}</SectionMessage>
      )}
    </div>
  );
}
// the read as one lozenge, for the coach's header: the words the coach picks follow it
function XReadLozenge({ turn, transcript }) {
  const turns = Array.isArray(transcript) ? transcript : [];
  const i = turn != null ? turn : turns.length - 1;
  const st = xsrState((j) => xsrDims(turns[j]), i, null);
  if (!st) return null;
  return <Lozenge appearance={st.word === "TIE" ? null : st.lead} bold={st.word === "LOCKED"} className="x-read-lz" title="The style read from this conversation; the coach's words follow it">{xsrLabel(st.lead)}{st.word ? " · " + st.word : ""}</Lozenge>;
}
