// Shared helpers, the style levers, and the Compose "Why this draft" panel with marked drafts.
// Runs inside the site bundle: I = React, rf/nf/tf/$n/zl/Bl/cf/Zm/Pp/Rp/Uf/Gm/De/Ef are bundle globals.

function xFirst(name) { return String(name || "").split(" ")[0]; }
function xMoney(v) { return v == null ? null : "$" + v; }
function xFillSay(text, lead, persona) {
  const p = lead ? (lead.proposed != null ? lead.proposed : lead.proposedPremium) : null;
  const c = lead ? (lead.current != null ? lead.current : lead.currentPremium) : null;
  const sms = !lead || !lead.consent || lead.consent.sms;
  return String(text || "")
    .replace(/\{first\}/g, xFirst(lead && lead.name) || "there")
    .replace(/\{rep\}/g, persona || "your agent")
    .replace(/\{proposed\}/g, xMoney(p) || "the new number")
    .replace(/\{current\}/g, xMoney(c) || "$X")
    .replace(/\{send\}/g, sms ? "text" : "email");
}
function xFillLabel(text, lead) { return xFillSay(text, lead, null); }
function xCopy(text) {
  try { if (navigator.clipboard && window.isSecureContext) { navigator.clipboard.writeText(text).catch(() => {}); return; } } catch (e) {}
  try {
    const t = document.createElement("textarea");
    t.value = text; t.setAttribute("readonly", ""); t.style.position = "fixed"; t.style.opacity = "0";
    document.body.appendChild(t); t.select(); document.execCommand("copy"); document.body.removeChild(t);
  } catch (e) {}
}

function XLevers({ style, scenario, channel, compact }) {
  const v = xLeverValues(style, scenario, channel);
  return (
    <div className={"x-levers" + (compact ? " compact" : "")} aria-label="Style levers">
      <div className="x-levers-head">Style levers · {channel === "call" ? "call" : channel === "text" ? "text" : "email"}</div>
      {XLEVER_DEFS.map((d) => (
        <div key={d.k} className="x-lever" title={`${d.name}: ${v[d.k] < 34 ? d.lo : v[d.k] > 66 ? d.hi : "between"}`}>
          <div className="x-lever-name">{d.name}</div>
          <div className="x-lever-track">
            <div className={"x-lever-fill x-fill-" + style} style={{ width: v[d.k] + "%" }} />
            <div className={"x-lever-knob x-knob-" + style} style={{ left: v[d.k] + "%" }} />
          </div>
          <div className="x-lever-ends"><span>{d.lo}</span><span>{d.hi}</span></div>
        </div>
      ))}
    </div>
  );
}

// Split a rendered draft into Match / Fit / Ask. Emails: greeting, then one paragraph per move.
function xSplit(body, email, scenario, style) {
  if (email) {
    const blocks = body.split("\n\n");
    let head = "", rest = blocks;
    if (/^(Hey|Hi|Hello)\b/.test(blocks[0]) && blocks[0].length < 40) { head = blocks[0] + "\n\n"; rest = blocks.slice(1); }
    if (rest.length < 2) return [{ s: body }];
    const out = [{ s: head }, { k: 1, s: rest[0] }];
    const fit = rest.slice(1, -1).join("\n\n");
    if (fit) out.push({ s: "\n\n" }, { k: 2, s: fit });
    out.push({ s: "\n\n" }, { k: 3, s: rest[rest.length - 1] });
    return out;
  }
  const an = XSMS[scenario] && XSMS[scenario][style];
  if (!an) return [{ s: body }];
  const fi = body.indexOf(an[0]), ai = body.indexOf(an[1]);
  if (fi < 0 || ai < 0 || ai < fi) return [{ s: body }];
  const seg = (k, s) => { const t = s.replace(/\s+$/, ""); return [{ k, s: t }, { s: s.slice(t.length) }]; };
  return [...seg(1, body.slice(0, fi)), ...(ai > fi ? seg(2, body.slice(fi, ai)) : []), { k: 3, s: body.slice(ai) }];
}

function XMarkedDraft({ body, tail, email, scenario, style, refresh, hover, setHover }) {
  const parts = xSplit(body, email, scenario, style);
  return (
    <div className={"draft-body x-marked" + (refresh ? " refresh" : "")} onMouseLeave={() => setHover(0)}>
      {parts.map((p, i) =>
        p.k ? (
          <span key={i} className={`x-mv x-mv-${p.k}${hover === p.k ? " is-hot" : ""}`} onMouseEnter={() => setHover(p.k)} onClick={() => setHover(hover === p.k ? 0 : p.k)}>
            <span className={`x-badge x-badge-${p.k} x-mv-n`} data-n={p.k} aria-hidden="true" />{p.s}
          </span>
        ) : (
          <I.Fragment key={i}>{p.s}</I.Fragment>
        )
      )}
      {tail}
    </div>
  );
}

const XMOVE_NAMES = ["Match", "Fit", "Ask"];

function XWhyPanel({ scenario, style, email, consentOk, premiumOk, quoteNumber, hover, setHover, lead }) {
  const sc = nf[scenario], st = rf[style], cell = XMOVES[scenario] && XMOVES[scenario][style];
  if (!sc || !st || !cell) return null;
  return (
    <div className="panel x-why">
      <div className="panel-head">
        <div className="title">Why this draft</div>
        <div className="sub">Three moves, in order. Point at one to see it in the draft.</div>
      </div>
      <div className="panel-body">
        <div className="rationale-item">
          <div className="head">Scenario</div>
          <div className="val">{sc.label}</div>
          <div className="why">{sc.why}</div>
        </div>
        <div className="rationale-item">
          <div className="head">Communication style · read from their first message</div>
          <div className="val">{st.label}</div>
          <div className="why">{st.why}</div>
          <XLevers style={style} scenario={scenario} channel={email ? "email" : "text"} />
        </div>
        {["m", "f", "a"].map((k, i) => (
          <div key={`${scenario}-${style}-${k}`} className={`rationale-item x-move x-move-${i + 1}${hover === i + 1 ? " is-hot" : ""}`} style={{ animationDelay: `${i * 89}ms` }}
            onMouseEnter={() => setHover(i + 1)} onMouseLeave={() => setHover(0)} onClick={() => setHover(hover === i + 1 ? 0 : i + 1)}>
            <div className="head"><span className={`x-badge x-badge-${i + 1}`} data-n={i + 1} aria-hidden="true" />{XMOVE_NAMES[i]}</div>
            <div className="val">{xFillLabel(cell[k].label, lead)}</div>
            <div className="why">{cell[k].why}</div>
          </div>
        ))}
        <div className="rationale-item">
          <div className="head">Question type</div>
          <div className="val">{st.q}</div>
          <div className="why">{st.qWhy}</div>
        </div>
        <div className="rationale-item">
          <div className="head">Compliance check</div>
          <ul className="compliance-list">
            <li className={consentOk ? "pass" : "fail"}>{consentOk ? "✓" : "✗"} {email ? "Email" : "SMS"} consent on file</li>
            <li className="pass">✓ Producer license appended</li>
            <li className={premiumOk ? "pass" : "fail"}>{premiumOk ? "✓" : "✗"} Premium pulled from quote {quoteNumber || ""}</li>
            <li className="pass">✓ {email ? "CAN-SPAM unsubscribe via reply" : "STOP/HELP keywords"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Compose corner: what the plan would do with this person at this hour. Illustration on demo data.
const XSCEN_SRC = { raw: "IL", current: "CC", winback: "WB", xdate: "XD", following: "QN" };
const XSCEN_DAY = { raw: 0, current: 0, winback: 0, xdate: -7, following: 1 };
function xBestNow(scenario, style, lead, now) {
  const src = scenario === "raw" && lead && lead.source === "referral" ? "RF" : XSCEN_SRC[scenario];
  if (!src) return null;
  const contacted = scenario !== "raw";
  const consent = (lead && lead.consent) || { sms: true, email: true };
  const pseudo = { id: "compose", name: lead ? lead.name : "", style, source: src, day: XSCEN_DAY[scenario], done: src === "RF" ? 1 : 0, contacted, seen: scenario === "raw" ? 0 : null, consent };
  const steps = xDueToday(pseudo).today;
  if (!steps.length) return null;
  const step = steps[0], st = XSTYLE[style] || XSTYLE.story;
  const then = steps[1] ? `${XCH[xPickChannel(steps[1], pseudo, contacted).ch]} · ${steps[1].what.toLowerCase()}` : null;
  if (step.win === "now" || step.win === "soon") {
    const L = XLEGAL.call, W = XWIN[step.win];
    if (now >= L[0] && now < L[1] - 10) return { ch: "call", when: "Now", why: W.why, ref: W.ref, then: src === "RF" ? "an intro email about 20 minutes after the call, naming who sent them" : "the quote by email at ~20 minutes; call again at 30–60 minutes" };
    if (consent.email) return { ch: "email", when: "Now", why: "After 8 pm calls and texts wait for the morning; the quote can still go by email tonight", ref: "T7", then: "Call at 9:00 AM, when the office opens" };
    return { ch: "call", when: "9:00 AM", why: "The office opens at 9; calls are legal from 8 am their time", ref: "T7", then: null };
  }
  // the channels this step allows, that they have okayed, and that fit before a first conversation
  let allowed = step.ch.filter((c) => xAllowed(c, pseudo));
  if (!contacted && allowed.length > 1) allowed = allowed.filter((c) => c !== "text");
  if (!allowed.length) return { ch: step.ch[0], when: "Waits", why: "No consent on file for the channels this step uses", ref: "T7", then: null };
  // which of them has a good hour right now; if none, the soonest good hour; style breaks ties
  const cands = [];
  for (const c of allowed) for (const wk of XCHWIN[c]) {
    const w = XWIN[wk], L = XLEGAL[c], lo = Math.max(w.lo, L[0]), hi = Math.min(w.hi, L[1]);
    const inNow = now >= lo && now < hi, at = inNow ? now : now < lo ? lo : lo + 1440;
    cands.push({ c, wk, w, inNow, at, rank: st.pref.indexOf(c) });
  }
  cands.sort((a, b) => (b.inNow - a.inNow) || (a.inNow ? a.rank - b.rank : a.at - b.at || a.rank - b.rank));
  const b = cands[0];
  const when = b.inNow ? "Now" : b.at >= 1440 ? `Tomorrow ${xFmt(b.at - 1440)}` : xFmt(b.at);
  const top = st.pref.find((c) => allowed.includes(c));
  const styled = b.c === top ? st.short : `The hour picks ${XCH[b.c].toLowerCase()} ${b.inNow ? "now" : "next"}; a ${rf[style].label}'s first choice is ${XCH[top].toLowerCase()} (${xNextOpen(top, now)})`;
  return { ch: b.c, when, why: b.w.why, ref: b.w.ref, chWhy: styled, then };
}

function xNextOpen(c, now) {
  const opts = XCHWIN[c].map((wk) => { const w = XWIN[wk], L = XLEGAL[c], lo = Math.max(w.lo, L[0]), hi = Math.min(w.hi, L[1]); return now >= lo && now < hi ? now : now < lo ? lo : lo + 1440; });
  const at = Math.min(...opts);
  return at === now ? "open now" : at >= 1440 ? `tomorrow ${xFmt(at - 1440)}` : `best at ${xFmt(at)}`;
}
function XBestNow({ scenario, style, lead, channel, setChannel }) {
  useXS();
  const [, setTick] = I.useState(0);
  I.useEffect(() => { const t = setInterval(() => setTick((x) => x + 1), 15000); return () => clearInterval(t); }, []);
  const now = xClock();
  const b = xBestNow(scenario, style, lead, now);
  if (!b) return null;
  const draftCh = channel === "sms" ? "text" : "email";
  const canSwitch = b.ch !== "call" && b.ch !== draftCh && setChannel;
  return (
    <div className={`x-best x-best-${b.ch}`} aria-live="polite">
      <div className="x-best-top">
        <span className="x-best-k">{b.when === "Now" ? "Now" : `Best at ${b.when}`}</span>
        <span className={`x-chip x-chip-${b.ch}`}>{XCH[b.ch]}</span>
        <span className="x-best-clock mono">{xFmt(now)}</span>
      </div>
      <div className="x-best-why">{b.why}.</div>
      {b.chWhy && <div className="x-best-then">{b.chWhy}.</div>}
      {b.then && <div className="x-best-then">Then: {b.then}</div>}
      {b.ch === "call" && <div className="x-best-then">This draft is the follow-up after the call.</div>}
      {canSwitch && <button className="x-best-switch" onClick={() => setChannel(b.ch === "text" ? "sms" : "email")}>Show the {b.ch === "text" ? "text" : "email"} draft</button>}
    </div>
  );
}
