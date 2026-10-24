// Workflow (v17), the default Today view: one status line and four boxes. Box 1 lists every lead to work
// today, each row a time box, the name, the next step in words, three marks and one button; tapping it
// opens the work card beneath the row. Box 2 is the one lead to work now, Box 3 the new leads inside their
// first minutes, Box 4 what is booked or renewing in the next three days. Same engine, same records and the
// same handlers as the queue (xAct, xUndo): nothing here sets a rule, it only shows the plan differently.

const XWF_FOLD_MS = 1021; // a finished row: strike (377 ms), then fold (610 ms), then it moves under Done today

// ---- the clock on a box: the time, and how much of the task's window has passed ---------------------
// rows show the hour digits on the hour ("3 PM") and h:mm otherwise; cards and the hero show the full time
function xTbTime(min, full) {
  const m = ((Math.round(min) % 1440) + 1440) % 1440, h = Math.floor(m / 60), mm = m % 60;
  const hh = String(((h + 11) % 12) + 1), sub = h >= 12 ? "PM" : "AM", hm = `${hh}:${String(mm).padStart(2, "0")}`;
  if (full) return { label: hm, sub };
  return mm ? { label: hm, sub: "" } : { label: hh, sub };
}
// the window the fill rises across (minutes): the task's own window; a new lead's five minutes; for a
// message, from the approval (or 9:00) to the minute it sends
function xTbWindow(t, d) {
  if (d && d.k === "scheduled") return [d.when != null ? Math.min(d.when, d.t) : XDAY.open, d.t];
  if (!t || t.tomorrow) return null;
  if (t.ch !== "call") return [Math.min(XDAY.open, t.slot), t.slot];
  if (t.booked) return [t.slot - 60, t.slot];
  if (t.wk === "now" && t.lead.seen != null) { const l = xLanded(t.lead); return [l, l + 5]; }
  const W = XWIN[t.wk];
  if (W && W.rel && t.p && t.p.anchor != null) return [t.p.anchor + W.rel[0], t.p.anchor + W.rel[1]];
  if (W && W.lo != null) return [W.lo, W.hi];
  return [XDAY.open, XDAY.close];
}
function xTbFrac(win, now) {
  if (!win) return 0;
  const [lo, hi] = win;
  if (hi <= lo) return now >= hi ? 1 : 0;
  return Math.max(0, Math.min(1, (now - lo) / (hi - lo)));
}
// the one-line why for the Now box: the window's own reason, first clause
function xWFWhy(t) {
  if (!t) return "";
  if (t.booked && !t.late) return "They picked this time. Be early.";
  if (t.tomorrow) return "After 8 pm, calls and texts wait for the morning.";
  const w = XWIN[t.wk];
  if (!w || !w.why) return "";
  const parts = w.why.split(/;\s|, and |:\s/);
  let s = parts[0];
  if (s.length < 21 && parts[1]) s += ": " + parts[1].split(/, with /)[0];
  return s.replace(/\.$/, "") + ".";
}
function xWFWaitWords(reason) {
  if (!reason) return "waits";
  if (/Do Not Call/.test(reason)) return "waits: Do Not Call";
  if (/^No \w+ consent/.test(reason)) return "waits: no OK on file";
  if (reason === XSTYLE.noTextFirst) return "waits: after the first conversation";
  return "waits";
}

// ---- one row: what its box, words and button say -----------------------------------------------------
function xWFPending(v, now) {
  let pend = null;
  for (const t of v.doneTs) { const d = XS.done[t.id]; if (d && d.k === "scheduled" && d.t > now) pend = t; }
  return pend;
}
function xWFInfo(v, now, full) {
  const pend = xWFPending(v, now), t = v.current;
  if (pend && (!t || !xIsDue(t, now))) {
    const d = XS.done[pend.id], tm = xTbTime(d.t, full);
    return { mode: "approved", t: pend, ch: pend.ch, sort: d.t, label: tm.label, sub: tm.sub, frac: xTbFrac(xTbWindow(pend, d), now), state: "approved",
      title: `${XCH[pend.ch]} · approved · sends ${xFmt(d.t)}`, step: `Approved · ${xFmt(d.t)}`,
      stepTitle: `Approved${d.by ? ` by ${d.by}` : ""} at ${xFmt(d.when != null ? d.when : now)}; it sends by itself at ${xFmt(d.t)}` };
  }
  if (t) {
    const due = xIsDue(t, now), msg = t.ch !== "call", st = xStatusOf(t, now);
    const tm = t.tomorrow ? { label: full ? "9:00" : "9", sub: "AM" } : xTbTime(t.slot, full);
    const state = t.blocked ? "blocked" : due ? "due" : msg ? "ready" : "planned";
    const now1 = t.wk === "now" && t.lead.seen != null;
    const when = t.tomorrow ? "tomorrow 9:00 AM" : now1 ? "now" : xFmt(t.slot);
    let step;
    if (t.blocked) step = `${XCH[t.ch]} · ${xWFWaitWords(t.chReason)}`;
    else if (msg) step = due ? `${XCH[t.ch]} · ${st.text.toLowerCase()}` : `${XCH[t.ch]} · sends ${when}`;
    else if (!due) step = `Call · ${when}${t.booked ? " · booked" : ""}`;
    else if (now1) step = `Call · now · ${st.text}`;
    else step = /^Due since/.test(st.text) ? `Call · ${st.text.toLowerCase()}` : `Call · ${when} · due now`;
    const words = t.blocked ? `blocked: ${t.chReason || "this step waits"}` : due ? "due now" : msg ? "ready to check" : "planned";
    return { mode: "live", t, ch: t.ch, due, sort: t.tomorrow ? 1e4 + t.slot : t.slot, label: tm.label, sub: tm.sub,
      frac: t.blocked ? 0 : xTbFrac(xTbWindow(t, null), now), state,
      title: `${XCH[t.ch]} · ${msg && !t.blocked && !now1 ? "sends " : ""}${when} · ${words}`, step,
      stepTitle: t.blocked ? t.chReason : `${t.step.what} · ${xTouchWhy(t)}`,
      badge: state === "ready" ? "Check" : null, btn: msg ? "Check" : "Call" };
  }
  if (v.last) {
    const d = XS.done[v.last.id], at = d.k === "scheduled" ? d.t : d.when != null ? d.when : d.t;
    const what = d.k === "scheduled" ? "Sent" : XOUT[d.k] || "Done";
    return { mode: "done", t: v.last, ch: v.last.ch, sort: at, label: "", sub: "", frac: 0, state: "done",
      title: `${XCH[v.last.ch]} · done · ${what} ${xFmt(at)}`, step: `${what} · ${xFmt(at)}`, stepTitle: xOutcomeText(v) };
  }
  return { mode: "none", t: null, ch: "call", sort: 2e4, label: "", sub: "", frac: 0, state: "planned", title: "Nothing due today", step: "Nothing due today" };
}
// a cooler lead: not due by its plan, worked in any open minute; one suggested channel inside consent
function xWFCoolInfo(l) {
  const ch = xCoolChannel(l), d = XS.cool[l.id];
  if (d != null) return { mode: "done", ch, label: "", sub: "", frac: 0, state: "done", title: `${XCH[ch]} · done ${xFmt(d)}`, step: `Done · ${xFmt(d)}` };
  return { mode: "cool", ch, label: "open", sub: "", frac: 0, state: "planned", title: `${XCH[ch]} · any open minute · planned`, step: `${XCH[ch]} · any open minute`, btn: ch === "call" ? "Call" : "Check" };
}

// ---- the lead's timeline on the card: done · now · next, as time boxes ------------------------------
function xWFTimeline(v, now) {
  const out = [], lead = v.lead;
  if (v.last) {
    const d = XS.done[v.last.id], pending = d.k === "scheduled" && d.t > now, at = d.k === "scheduled" ? d.t : d.when != null ? d.when : d.t;
    const tm = xTbTime(at, false);
    out.push({ k: "Done", ch: v.last.ch, state: pending ? "approved" : "done", label: tm.label, sub: tm.sub, frac: pending ? xTbFrac(xTbWindow(v.last, d), now) : 0,
      words: `${pending ? "Approved, sends" : d.k === "scheduled" ? "Sent" : XOUT[d.k]} · ${xFmt(at)}`, title: `Done today · ${XCH[v.last.ch]} · ${v.last.step.what}` });
  } else if ((lead.done || 0) > 0) {
    const s = XSRC[lead.source].steps.find((x) => x.n === lead.done);
    if (s) out.push({ k: "Done", ch: s.ch[0], state: "done", label: "", sub: "", frac: 0, words: `Step ${s.n} · ${s.what}`, title: `Done before today · step ${s.n}: ${s.what}` });
  }
  const t = v.current;
  if (t) {
    const i = xWFInfo({ ...v, doneTs: [] }, now, false);
    out.push({ k: "Now", ch: t.ch, state: i.state, label: i.label, sub: i.sub, frac: i.frac, words: `${i.step} · ${t.step.what}`, title: i.title });
    const later = v.ts.filter((x) => !XS.done[x.id] && x.id !== t.id && (x.tomorrow - t.tomorrow || x.slot - t.slot) >= 0);
    if (later[0]) {
      const x = later[0], tm = x.tomorrow ? { label: "9", sub: "AM" } : xTbTime(x.slot, false);
      out.push({ k: "Next", ch: x.ch, state: x.blocked ? "blocked" : "planned", label: tm.label, sub: tm.sub, frac: 0,
        words: `${XCH[x.ch]} · ${x.tomorrow ? "tomorrow 9:00 AM" : xFmt(x.slot)} · ${x.step.what}`, title: `${XCH[x.ch]} · ${x.label} · planned` });
      return out;
    }
  }
  if (v.p && v.p.next) {
    const s = v.p.next, back = lead.source === "XD" || lead.source === "RI", dd = s.dayS;
    const label = back ? (dd < 0 ? `X−${-dd}` : `X+${dd}`) : `D${dd}`; // the caption says "Day 90"; the box face holds four characters
    const ch = xPickChannel(s, lead, v.p.contacted).ch;
    out.push({ k: "Next", ch, state: "planned", label, sub: "", frac: 0, words: xNextLabel(v.p).replace(/^Next: /, ""), title: `${XCH[ch]} · ${xNextLabel(v.p)}` });
  }
  return out;
}
function XWFTimeline({ v, now }) {
  const items = xWFTimeline(v, now);
  if (!items.length) return null;
  return (
    <ol className="x-wf-tl" aria-label="This lead's timeline: done, now, next">
      {items.map((it) => (
        <li key={it.k} className={"x-wf-tl-" + it.k.toLowerCase()}>
          <XTimeBox h={21} ch={it.ch} label={it.label} sub={it.sub} frac={it.frac} state={it.state} title={it.title} />
          <div className="x-wf-tl-text"><div className="x-wf-tl-k">{it.k}</div><div className="x-wf-tl-t">{it.words}</div></div>
        </li>
      ))}
    </ol>
  );
}

// ---- the draft, with the three moves and the facts to check marked -----------------------------------
function xWFFacts(s, lead, key) {
  const first = xFirst(lead.name).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = String(s).split(new RegExp(`(\\$\\d[\\d,]*(?:\\/mo\\.?)?|\\b${first}\\b|\\[[^\\]]+\\])`, "g"));
  return parts.map((p, i) => (i % 2 ? <mark key={key + "-" + i} className={/^\[/.test(p) ? "x-fill" : ""}>{p}</mark> : p));
}
function XWFDraft({ body, lead, email }) {
  const [hover, setHover] = I.useState(0);
  const parts = xSplit(body, email, lead.scenario, lead.style);
  return (
    <div className="x-msg-body x-marked x-wf-draft" onMouseLeave={() => setHover(0)}>
      {parts.map((p, i) => p.k ? (
        <span key={i} className={`x-mv x-mv-${p.k}${hover === p.k ? " is-hot" : ""}`} title={XMOVE_NAMES[p.k - 1]} onMouseEnter={() => setHover(p.k)}>
          <span className={`x-badge x-badge-${p.k} x-mv-n`} data-n={p.k} aria-hidden="true" />{xWFFacts(p.s, lead, i)}
        </span>
      ) : <I.Fragment key={i}>{xWFFacts(p.s, lead, i)}</I.Fragment>)}
    </div>
  );
}

// ---- the work cards beneath a row ------------------------------------------------------------------
// a drafted message: the draft with its facts marked, the coaching line, the timeline; Approve · Edit · Skip
function XWFMsgCard({ v, now, persona, onAct }) {
  const t = v.current, lead = v.lead, ch = t.ch;
  const [edit, setEdit] = I.useState(false);
  const [text, setText] = I.useState(null);
  const msg = xMessage(lead, ch, persona);
  const okText = !!lead.consent.sms, okEmail = !!lead.consent.email;
  const noConsent = (ch === "text" && !okText) || (ch === "email" && !okEmail);
  const blocked = noConsent || t.blocked;
  const k = xOuts(ch, t)[0];
  const sendsAt = k === "scheduled" ? xFmt(t.slot) : xFmt(now);
  const cell = XMOVES[lead.scenario] && XMOVES[lead.scenario][lead.style];
  const body = text != null ? text : msg ? msg.body : "";
  return (
    <div className="x-wf-compose">
      {blocked && (
        <div className="x-wf-blocked" role="note">
          <span><b>This step waits.</b> {noConsent ? `No ${ch} consent on file` : t.chReason || "The system stopped it"}. Pick another channel:</span>
          <div className="x-seg x-chan" role="group" aria-label="Channel">
            {["call", "text", "email"].map((c) => {
              const dis = (c === "text" && !okText) || (c === "email" && !okEmail);
              return <button key={c} className={ch === c ? "active" : ""} aria-pressed={ch === c} disabled={dis} title={dis ? `No ${c} consent on file` : undefined} onClick={() => xSet((s) => ({ chan: { ...s.chan, [t.id]: c } }))}>{XCH[c]}</button>;
            })}
          </div>
        </div>
      )}
      {msg && (
        <div className="x-msg x-wf-msg">
          {ch === "email" && <div className="x-msg-subject">{msg.subject}</div>}
          {edit
            ? <textarea className="x-wf-edit" value={body} onChange={(e) => setText(e.target.value)} rows={ch === "email" ? 10 : 4} aria-label="Edit the draft" />
            : <XWFDraft body={body} lead={lead} email={ch === "email"} />}
          <div className="x-msg-foot"><span className="x-msg-note">Check: {xFacts(lead, ch)}</span><span className="x-msg-note">{ch === "text" ? `${Zm(body + cf).len} characters with the opt-out line` : "Signature and license line are added on send"}</span></div>
        </div>
      )}
      {cell && <div className="x-wf-coach"><span className="x-wf-coach-k">Why this draft · Hakobian Strategic Coaching:</span> {XESSENCE[lead.style]} {cell.a.why}</div>}
      <XWFTimeline v={v} now={now} />
      <div className="x-wf-acts">
        <button className="btn primary x-wf-approve" disabled={blocked || !msg} onClick={() => onAct(k)}>Approve · sends {sendsAt}</button>
        <button className="btn x-wf-editbtn" aria-pressed={edit} onClick={() => setEdit(!edit)}>{edit ? "Done editing" : "Edit"}</button>
        {text != null && !edit && <span className="x-override">changed by you</span>}
        <button className="btn ghost x-skip" onClick={() => onAct("skip")}>Skip</button>
      </div>
    </div>
  );
}
function XWFCard({ v, info, now, persona, onAct, onUndo }) {
  if (info.mode === "approved") {
    const d = XS.done[info.t.id];
    return (
      <div className="x-wf-card">
        <div className="x-wf-note"><span className="x-check">✓</span> Approved{d.by ? ` by ${d.by}` : ""} at {xFmt(d.when != null ? d.when : now)}. It sends by itself at {xFmt(d.t)}, and the send records who approved it.</div>
        <XWFTimeline v={v} now={now} />
        <div className="x-wf-acts"><button className="btn" onClick={onUndo}>Undo the approval</button></div>
      </div>
    );
  }
  if (!v.current) return null;
  return v.current.ch === "call"
    ? <div className="x-wf-card x-wf-callcard"><XWFTimeline v={v} now={now} /><XDo v={v} persona={persona} onAct={onAct} /></div>
    : <div className="x-wf-card x-wf-msgcard"><XWFMsgCard key={v.current.id} v={v} now={now} persona={persona} onAct={onAct} /></div>;
}
function XWFCoolCard({ l, ch, onDone, onClose }) {
  return (
    <div className="x-wf-card x-wf-coolcard">
      <div className="x-wf-note">{l.why}</div>
      <div className="x-call x-wf-say">
        <div className="x-say-k">{ch === "call" ? `Say it · dial ${l.phone}` : `${XCH[ch]} · one line`}</div>
        <div className="x-say-t">{xFillSay(l.say, l, XS.persona || "Alex")}</div>
      </div>
      <div className="x-wf-acts"><button className="btn primary" onClick={onDone}>Mark done · 5 min</button><button className="btn ghost x-skip" onClick={onClose}>Close</button></div>
    </div>
  );
}

// ---- a row in Box 1 ---------------------------------------------------------------------------------
function XWFRowLine({ lead, v, info, isOpen, onToggle, onUndo }) {
  const clickable = info.mode === "live" || info.mode === "approved" || info.mode === "cool";
  const btn = info.mode === "live" || info.mode === "cool"
    ? <button className={"btn x-wf-btn" + (isOpen ? " primary" : "")} aria-expanded={isOpen} onClick={(e) => { e.stopPropagation(); onToggle(); }}>{info.btn}</button>
    : info.mode === "approved" || info.mode === "done"
      ? <button className="btn x-wf-btn x-wf-undo" onClick={(e) => { e.stopPropagation(); onUndo(); }}>Undo</button>
      : <span className="x-wf-btn" />;
  return (
    <div className="x-wf-row" onClick={clickable ? onToggle : undefined}>
      <XTimeBox h={21} ch={info.ch} label={info.label} sub={info.sub} frac={info.frac} state={info.state} title={info.title} badge={info.badge} />
      <div className="x-wf-who"><span className="x-name">{lead.name}</span><span className={`style-pill ${lead.style}`} title="Communication style">{rf[lead.style] ? rf[lead.style].label : lead.style}</span></div>
      <div className={"x-wf-step" + (info.due ? " is-due" : "")} title={info.stepTitle || info.title}>{info.step}</div>
      <XMarks lead={lead} v={v} />
      {btn}
    </div>
  );
}
function XWFItem({ v, info, now, persona, isOpen, extra, onToggle, onAct, onUndo }) {
  return (
    <div className={"x-wf-item" + (isOpen ? " is-open" : "") + (info.mode === "done" ? " is-done" : "") + (info.mode === "approved" ? " is-approved" : "") + (extra || "")} data-lead={v.lead.id}>
      <XWFRowLine lead={v.lead} v={v} info={info} isOpen={isOpen} onToggle={onToggle} onUndo={onUndo} />
      {isOpen && <XWFCard v={v} info={info} now={now} persona={persona} onAct={onAct} onUndo={onUndo} />}
    </div>
  );
}

// open a lead's card from anywhere (the Now box, the status line, Boxes 3 and 4, the Now bar) and bring it into view
function xWFGo(id) { xSet({ open: id, wfLast: null, wfScroll: id }); }

// ---- Box 2: the one lead to work now ------------------------------------------------------------------
function XWFNow({ v, now, last }) {
  const lastV = last ? (XQ.find((l) => l.id === last.id) || null) : null;
  if (!v) {
    return (
      <div className="card x-wf-now">
        <div className="card-head"><span className="title">Now</span><span className="count">all done</span></div>
        <div className="x-wf-empty">All {XQ.length} touched today. The cooler leads are there for any open minute.</div>
      </div>
    );
  }
  const t = v.current, info = xWFInfo(v, now, true), due = xIsDue(t, now), g = XQ_GROUPS.find((x) => x.k === v.group);
  return (
    <div className="card x-wf-now" aria-live="polite">
      <div className="card-head"><span className="title">Now</span><span className="count">{due ? "due now" : `next at ${t.tomorrow ? "9:00 AM" : xFmt(t.slot)}`}</span></div>
      <div className="x-wf-hero">
        {lastV && <div className="x-wf-hero-last"><span className="x-check">✓</span> {lastV.name} · {last.k === "scheduled" ? "Approved" : XOUT[last.k] || "Done"}. Next up:</div>}
        <XTimeBox h={55} ch={info.ch} label={info.label} sub={info.sub} frac={info.frac} state={info.state} title={info.title} />
        <div className="x-wf-hero-text">
          <div className="x-wf-hero-name">{v.lead.name}</div>
          <div className="x-wf-hero-chips"><span className={`style-pill ${v.lead.style}`} title="Communication style">{rf[v.lead.style].label}</span>{g && <span className="x-tag">{g.tag}</span>}</div>
          <div className="x-wf-hero-step">{info.step}</div>
          <div className="x-wf-hero-why">{xWFWhy(t)}</div>
          <button className={"btn primary x-wf-hero-btn" + (lastV ? " is-next" : "")} onClick={() => xWFGo(v.lead.id)}>{lastV ? "Next →" : info.btn}</button>
        </div>
      </div>
    </div>
  );
}

// ---- Box 3: new leads inside their first minutes, freshest first ----------------------------------------
function XWFFirst({ views, now }) {
  const firsts = views.filter((v) => v.current && v.lead.seen != null && v.lead.day === 0 && v.current.wk === "now").sort((a, b) => xFreshKey(a.lead, now) - xFreshKey(b.lead, now));
  return (
    <div className="card x-wf-first">
      <div className="card-head"><span className="title">Needs first touch</span><span className="count">{firsts.length ? `${firsts.length} waiting` : "none"}</span></div>
      {firsts.length ? firsts.map((v) => {
        const t = v.current, landed = xLanded(v.lead), tm = xTbTime(t.slot, false), st = xStatusOf(t, now), w = Math.max(0, Math.round(now - landed));
        return (
          <div key={v.lead.id} className="x-wf-mini" onClick={() => xWFGo(v.lead.id)}>
            <XTimeBox h={21} ch="call" label={tm.label} sub={tm.sub} frac={xTbFrac([landed, landed + 5], now)} state="due" title={`Call · landed ${xFmt(landed)} · ${w} min ago · due now`} />
            <div className="x-wf-mini-t"><span className="x-name">{v.lead.name}</span><span className="x-wf-mini-sub">Landed {xFmt(landed)} · {st.text}</span></div>
            <button className="btn x-wf-btn" onClick={(e) => { e.stopPropagation(); xWFGo(v.lead.id); }}>Call</button>
          </div>
        );
      }) : <div className="x-wf-empty">None waiting · a new lead gets its first call inside a minute.</div>}
    </div>
  );
}

// ---- Box 4: booked calls and X-dates within three days, as a short timeline --------------------------------
function XWFSoon({ views, now }) {
  const near = (l) => (l.source === "XD" || l.source === "RI") && l.day >= -3 && l.day <= 0;
  const list = views.filter((v) => v.current && (v.lead.at || near(v.lead))).sort((a, b) => (a.current.tomorrow - b.current.tomorrow) || a.current.slot - b.current.slot);
  return (
    <div className="card x-wf-soon">
      <div className="card-head"><span className="title">Coming up</span><span className="count">next 3 days</span></div>
      {list.length ? (
        <div className="x-wf-soon-list">
          {list.map((v) => {
            const t = v.current, tm = t.tomorrow ? { label: "9:00", sub: "AM" } : xTbTime(t.slot, true), due = xIsDue(t, now);
            const kind = v.lead.at ? (/^(Booked|Callback)\b/.test(v.lead.reason) ? v.lead.reason : `Booked · ${v.lead.reason}`) : v.lead.day === 0 ? `Renews today · ${t.step.what}` : `Renews in ${-v.lead.day} days · ${t.step.what}`;
            return (
              <button key={v.lead.id} className="x-wf-mini x-wf-soon-row" onClick={() => xWFGo(v.lead.id)}>
                <XTimeBox h={34} ch={t.ch} label={tm.label} sub={tm.sub} frac={xTbFrac(xTbWindow(t, null), now)} state={t.blocked ? "blocked" : due ? "due" : "planned"} title={`${XCH[t.ch]} · ${t.tomorrow ? "tomorrow 9:00 AM" : xFmt(t.slot)} · ${due ? "due now" : "planned"}`} />
                <span className="x-wf-mini-t"><span className="x-name">{v.lead.name}</span><span className="x-wf-mini-sub" title={kind}>{XCH[t.ch]} · {t.tomorrow ? "tomorrow 9:00 AM" : xFmt(t.slot)}{due ? " · due now" : ""} · {kind}</span></span>
              </button>
            );
          })}
        </div>
      ) : <div className="x-wf-empty">Nothing booked or renewing in the next three days.</div>}
    </div>
  );
}

// ---- the view -----------------------------------------------------------------------------------------
function XWorkflow({ persona }) {
  const s = useXS();
  const [, bump] = I.useState(0);
  const prevIds = I.useRef([]);
  XS.persona = persona;
  if (!XS.seeded) { XS.seeded = true; if (!XFRESH) xSeedUpTo(XS.clock, true); }
  const now = xClock();
  const day = xBuildDay(XQ, now);
  const pr = xProgress(day, now);
  const views = pr.views;
  const order = xWorkOrder(views, now);
  const next = order.find((v) => xIsDue(v.current, now)) || order[0] || null;
  const handled = views.filter((v) => !v.current && v.doneTs.length);
  const coolDone = XCOOL.filter((l) => s.cool[l.id] != null).length;
  const wins = handled.length + coolDone;
  const open = s.open;
  const info = {};
  for (const v of views) info[v.lead.id] = xWFInfo(v, now, false);
  const byId = {};
  for (const v of views) byId[v.lead.id] = v;
  // the list: due rows first in the system's order, then the rest by time; finished leads fold under Done
  // today, after a row that just finished has stayed in its place, struck through, for a moment
  const t0 = Date.now(), strike = s.wfStrike || {};
  const striking = (id) => strike[id] != null && t0 - strike[id] < XWF_FOLD_MS;
  const dueIds = order.filter((v) => xIsDue(v.current, now) && info[v.lead.id].mode === "live").map((v) => v.lead.id);
  const restIds = views.filter((v) => !dueIds.includes(v.lead.id) && info[v.lead.id].mode !== "done").sort((a, b) => info[a.lead.id].sort - info[b.lead.id].sort).map((v) => v.lead.id);
  const mainIds = [...dueIds, ...restIds];
  for (const v of views) {
    const id = v.lead.id;
    if (info[id].mode !== "done" || !striking(id)) continue;
    const at = prevIds.current.indexOf(id);
    mainIds.splice(at < 0 ? mainIds.length : Math.min(at, mainIds.length), 0, id);
  }
  const doneIds = views.filter((v) => info[v.lead.id].mode === "done" && !striking(v.lead.id)).sort((a, b) => info[b.lead.id].sort - info[a.lead.id].sort).map((v) => v.lead.id);
  I.useEffect(() => { prevIds.current = mainIds; });
  // bring a card someone asked for into view
  I.useEffect(() => {
    const id = XS.wfScroll;
    if (!id) return;
    XS.wfScroll = null;
    const el = document.querySelector(`.x-wf [data-lead="${id}"]`);
    if (!el) return;
    let calm = false;
    try { calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
    const r = el.getBoundingClientRect();
    if (r.top < 89 || r.top > window.innerHeight * 0.618) el.scrollIntoView({ block: "start", behavior: calm ? "auto" : "smooth" });
  });
  const act = (v, k) => {
    if (k !== "skip") {
      xSet((st) => ({ wfStrike: { ...(st.wfStrike || {}), [v.lead.id]: Date.now() }, wfLast: { id: v.lead.id, k, at: Date.now() } }));
      setTimeout(() => bump((x) => x + 1), 34);
      setTimeout(() => bump((x) => x + 1), XWF_FOLD_MS + 13);
    }
    xAct(v, k, order);
  };
  const toggle = (id) => xSet({ open: open === id ? "" : id, wfLast: null });
  const item = (id, extra) => {
    const v = byId[id];
    return <XWFItem key={id} v={v} info={info[id]} now={now} persona={persona} isOpen={open === id && info[id].mode !== "done"} extra={extra}
      onToggle={() => toggle(id)} onAct={(k) => act(v, k)} onUndo={() => xUndo(v)} />;
  };
  const coolToggle = (id) => xSet((st) => { const cool = { ...st.cool }; if (cool[id] != null) delete cool[id]; else cool[id] = xClock(); return { cool, open: st.open === id ? "" : st.open }; });
  const nextT = next && next.current;
  const nextWhen = nextT ? (nextT.wk === "now" && next.lead.seen != null ? "now" : xIsDue(nextT, now) ? "due now" : nextT.tomorrow ? "tomorrow 9:00 AM" : `at ${xFmt(nextT.slot)}`) : "";
  return (
    <section className="view active x-today x-wf">
      <div className="x-wf-line">
        <div className="x-wf-line-l">
          <span className="x-wf-clock" title="Demo clock">{xFmt(now)}</span>
          <XStatusLine pr={pr} next={next} now={now} onOpen={xWFGo} />
          {next && <span className="x-wf-next">Next: <b>{XCH[nextT.ch]} {next.lead.name}</b> · {nextWhen}<button className="x-wf-open" onClick={() => xWFGo(next.lead.id)}>Open</button></span>}
        </div>
        <div className="x-wf-line-r">
          <XCompliance day={day} />
          <XViewSwitch view="workflow" />
          <button className="x-planlink" onClick={() => xSet({ view: "plan" })} title="The whole day, hour by hour">Day plan →</button>
        </div>
      </div>
      <div className="x-wf-grid">
        <div className="card x-wf-list">
          <div className="card-head"><span className="title">Today's prospects</span><span className="count">{XQ.length + XCOOL.length} today · {wins} small win{wins === 1 ? "" : "s"}</span></div>
          <div className="x-wf-rows">
            {mainIds.map((id) => {
              if (info[id].mode === "done" && striking(id)) return item(id, " row-done-anim" + (t0 - strike[id] > 30 ? " is-fold" : ""));
              return item(id);
            })}
          </div>
          <details className="x-later x-cool x-wf-fold x-wf-cool">
            <summary>{XCOOL.length} cooler leads · open time{coolDone ? ` · ${coolDone} done` : ""}</summary>
            {XCOOL.map((l) => {
              const ci = xWFCoolInfo(l), isOpen = open === l.id && ci.mode === "cool";
              return (
                <div key={l.id} className={"x-wf-item x-wf-coolitem" + (isOpen ? " is-open" : "") + (ci.mode === "done" ? " is-done" : "")} data-lead={l.id}>
                  <XWFRowLine lead={l} v={null} info={ci} isOpen={isOpen} onToggle={() => toggle(l.id)} onUndo={() => coolToggle(l.id)} />
                  {isOpen && <XWFCoolCard l={l} ch={ci.ch} onDone={() => coolToggle(l.id)} onClose={() => toggle(l.id)} />}
                </div>
              );
            })}
          </details>
          {doneIds.length > 0 && (
            <details className="x-later x-wf-fold x-wf-done">
              <summary>Done today ({doneIds.length})</summary>
              {doneIds.map((id) => item(id))}
            </details>
          )}
        </div>
        <XWFNow v={next} now={now} last={s.wfLast} />
        <XWFFirst views={views} now={now} />
        <XWFSoon views={views} now={now} />
      </div>
    </section>
  );
}
