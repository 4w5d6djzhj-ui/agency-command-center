// Today, lean: the next action at the top, process before results, the work split by who does it
// (your calls; then texts, then emails the system drafted and timed for you to check and send).

// ---- the 4DX lead measures captured on a call: one tap each ---------------------------------------
function xAsks() {
  let life = 0, ref = 0;
  for (const k of Object.keys(XS.asks)) { if (XS.asks[k].life) life++; if (XS.asks[k].ref) ref++; }
  return { life, ref };
}
function XAsks({ lead }) {
  const s = useXS();
  const a = s.asks[lead.id] || {};
  const flip = (k) => xSet((st) => ({ asks: { ...st.asks, [lead.id]: { ...(st.asks[lead.id] || {}), [k]: !a[k] } } }));
  return (
    <div className="x-asks" role="group" aria-label="On this call">
      <span className="x-asks-k">On this call</span>
      <button className={"x-ask" + (a.life ? " is-on" : "")} aria-pressed={!!a.life} onClick={() => flip("life")}>{a.life ? "✓ " : ""}Asked about life</button>
      <button className={"x-ask" + (a.ref ? " is-on" : "")} aria-pressed={!!a.ref} onClick={() => flip("ref")}>{a.ref ? "✓ " : ""}Asked for a referral</button>
    </div>
  );
}

// ---- results week to date: a single day's households is mostly noise, the week is the signal --------
// (demo history for the days before today; today's numbers are live)
function xWeek(score, F) {
  const wd = new Date().getDay(), idx = wd === 0 || wd === 6 ? 5 : wd, prior = idx - 1;
  const apps = Math.round(prior * 3.25) + score.apps, hh = Math.round(prior * 1.5) + score.hh;
  return { idx, prior, apps, hh, appsGoal: F.apps * 5, hhGoal: F.households * 5, appsTick: F.apps * prior, hhTick: F.households * prior };
}

// ---- the andon line: are we on plan, and the one next thing to do ---------------------------------
function XStatusLine({ pr, next, now, onOpen }) {
  const b = pr.behind;
  const st = b === 0 ? ["ok", "✓", pr.doneNow ? "On track" : "Ready"] : b <= 3 ? ["warn", "●", `${b} running late`] : ["bad", "▲", `${b} late`];
  const open = Math.max(0, pr.dueNow - pr.doneNow);
  return (
    <div className="x-status" role="status">
      <span className={`x-andon is-${st[0]}`}><span aria-hidden="true">{st[1]}</span>{st[2]}</span>
      {Object.keys(XS.help).length > 0 && <span className="x-andon is-help"><span aria-hidden="true">●</span>{Object.keys(XS.help).length} help asked</span>}
      <span className="x-status-t" title="Late = more than 30 minutes past its time">{pr.doneNow} done · {open} due now · {Math.max(0, pr.plan.length - pr.dueNow)} later today{pr.firstsDone ? ` · first calls inside 5 min: ${pr.fast} of ${pr.firstsDone}` : ""}</span>
    </div>
  );
}

// ---- process before results: lead measures on the left, the results they drive on the right -------
function XScoreboard({ pr, score, F, bump, onStart, fresh, pro, cool }) {
  const asks = xAsks(), wk = xWeek(score, F);
  const s = useXS();
  const more = !!s.boardOpen;
  return (
    <div className={"x-board" + (more ? " is-more" : "")}>
      <div className="x-board-mini">
        <span><b>{pr.handled}</b>/{pr.plan.length} touches</span><span><b>{pr.callsDone}</b>/{pr.calls} calls</span><span><b>{score.quotes}</b>/{F.quoted} quotes</span><span><b>{wk.apps}</b>/{wk.appsGoal} apps this week</span>
        <button className="x-board-more" aria-expanded={more} onClick={() => xSet({ boardOpen: !more })}>{more ? "Less" : "More"}</button>
      </div>
      <div className="x-board-group x-board-process">
        <div className="x-board-k">Process<span>what you control</span></div>
        <div className="x-board-row">
          <XMeter label="Touches" v={pr.handled} of={pr.plan.length} tick={pr.dueNow} sub={`by now ${pr.dueNow}`} />
          <XMeter label="Calls" v={pr.callsDone} of={pr.calls} />
          <XMeter label="Life talks" v={asks.life} of={3} />
          <XMeter label="Referrals" v={asks.ref} of={3} />
          <XMeter label="Proactive" v={pro.done} of={pro.total} />
          <XMeter label="Cooler" v={cool.done} of={cool.total} />
        </div>
      </div>
      <div className="x-board-arrow" aria-hidden="true">→</div>
      <div className="x-board-group x-board-results">
        <div className="x-board-k">Results<span>they follow · apps and households week to date (demo history)</span></div>
        <div className="x-board-row">
          <XUnits label="Quotes today" v={score.quotes} of={F.quoted} bump={bump.quotes} />
          <XMeter label="Apps · week" v={wk.apps} of={wk.appsGoal} tick={wk.appsTick} sub={wk.prior ? `plan so far ${wk.appsTick}` : "week starts today"} />
          <XMeter label="HH · week" v={wk.hh} of={wk.hhGoal} tick={wk.hhTick} sub={wk.prior ? `plan so far ${wk.hhTick}` : "week starts today"} />
        </div>
      </div>
      <div className="x-start">
        <button className={"x-start-btn" + (fresh ? " x-first" : "")} onClick={onStart}>{fresh ? "Start the next 5 minutes" : "Next 5 minutes"} <span aria-hidden="true">→</span></button>
        <div className="x-start-sub">One at a time, five minutes each; the next one opens by itself.</div>
      </div>
    </div>
  );
}

// ---- a message the system drafted and timed: the parts to check are marked, one tap sends it --------
function xPeek(body, lead) {
  const first = xFirst(lead.name);
  const text = (body || "").replace(/\s+/g, " ").trim();
  const short = text.length > 190 ? text.slice(0, 187).replace(/\s+\S*$/, "") + "…" : text;
  const parts = short.split(new RegExp(`(\\$\\d[\\d,]*(?:\\/mo\\.?)?|\\b${first}\\b|\\[[^\\]]+\\])`, "g"));
  return parts.map((p, i) => (i % 2 ? <mark key={i} className={/^\[/.test(p) ? "x-fill" : ""}>{p}</mark> : p));
}
function XMsgRow({ v, now, isOpen, persona, onToggle, onAct, onUndo }) {
  const lead = v.lead, t = v.current;
  const msg = t ? xMessage(lead, t.ch, persona) : null;
  const later = t && !t.tomorrow && t.slot > now;
  return (
    <div className={`x-row x-msgrow x-st-${lead.style}${isOpen && t ? " is-open" : ""}`}>
      <div className="x-row-main" onClick={() => t && onToggle()}>
        <div className="x-row-text">
          <div className="x-row-line1">
            <span className="x-name">{lead.name}</span>
            <span className={`style-pill ${lead.style}`} title="Communication style">{rf[lead.style].label}</span>
            <span className={`x-chip x-chip-${t.ch}`}>{XCH[t.ch]}</span>
            <span className="x-tag">{XQ_GROUPS.find((g) => g.k === v.group).tag}</span>
            <span className="x-mins" title="Check the marked facts and approve: about two minutes">2 min</span>
            {!xBatchOk(v) && <span className="x-alone" title="Life-insurance messages are approved one at a time">Check by itself</span>}
          </div>
          <div className="x-row-step">{`Step ${t.step.n} of ${v.p.N} · ${xDayLabel(lead)} · ${t.step.what}`}</div>
          {msg && <div className="x-msg-peek">{t.ch === "email" && <b>{/[.?!…]$/.test(msg.subject) ? msg.subject : msg.subject + "."} </b>}{xPeek(msg.body, lead)}</div>}
          <div className="x-facts">Check: {xFacts(lead, t.ch)}</div>
        </div>
        <div className="x-row-side">
          <div className="x-sends"><span className="x-sends-k">sends</span><XWhen t={t} now={now} /></div>
          <button className="btn primary x-approve" onClick={(e) => { e.stopPropagation(); onAct(later ? "scheduled" : "sent"); }}>{later ? "Approve" : "Send"}</button>
        </div>
      </div>
      {isOpen && <XDo v={v} persona={persona} onAct={onAct} />}
    </div>
  );
}

// the facts a draft was built from, so a check is quick and specific
function xFacts(lead, ch) {
  const f = [`${xFirst(lead.name)}'s name`];
  if (lead.proposed) f.push(`$${lead.proposed}/mo quote`);
  if (lead.current) f.push(`$${lead.current}/mo today`);
  f.push(ch === "text" ? "text consent on file" : "email consent on file");
  return f.join(" · ");
}
// one tap to pull in a named person (the andon cord): the card is marked until they answer
function XHelp({ lead, persona }) {
  const s = useXS();
  const h = s.help[lead.id];
  const who = persona === "Alex" ? "Maya" : "Alex";
  if (h) return <div className="x-help is-on"><span aria-hidden="true">●</span> Help asked {xFmt(h.at)} · {h.to} will see it here <button className="x-undo" onClick={() => { const n = { ...s.help }; delete n[lead.id]; xSet({ help: n }); }}>Cancel</button></div>;
  return <div className="x-help"><button className="x-help-btn" onClick={() => xSet((st) => ({ help: { ...st.help, [lead.id]: { at: xClock(), to: who, by: persona } } }))}>Stuck? Ask {who}</button></div>;
}

// routine template messages can be approved in one batch; anything about life insurance is checked alone
function xBatchOk(v) {
  return !/\blife\b/i.test([v.lead.reason, ...(v.lead.meta || [])].join(" "));
}
// approve every routine drafted message in the list at once (each still sends at its own hour)
function xApproveAll(rows) {
  const now = xClock(), done = { ...XS.done };
  for (const v of rows) {
    const t = v.current;
    if (!t || t.ch === "call" || t.blocked || !xBatchOk(v)) continue;
    const later = !t.tomorrow && t.slot > now;
    done[t.id] = { k: later ? "scheduled" : "sent", ch: t.ch, at: Date.now(), t: later ? t.slot : now, batch: true, by: XS.persona || null, when: now };
  }
  xSet({ done });
}

// show what's due and the next three; fold the rest of the day away (fewer things in view at once)
function xFold(list, now, row, open) {
  const due = list.filter((v) => xIsDue(v.current, now) || v.lead.id === open);
  const later = list.filter((v) => !due.includes(v));
  const shown = later.slice(0, Math.max(0, 3 - Math.max(0, due.length - 4))), rest = later.slice(shown.length);
  return (
    <>
      {due.map(row)}
      {shown.map(row)}
      {rest.length > 0 && (
        <details className="x-later">
          <summary>Later today · {rest.length} more</summary>
          {rest.map(row)}
        </details>
      )}
    </>
  );
}

// messages are not due: they are worked any time and send at their hour, so the lane shows them all,
// in the order they will send
function xAllMsgs(list, now, row) {
  const sorted = list.slice().sort((a, b) => a.current.slot - b.current.slot);
  return <>{sorted.map(row)}</>;
}
function XLane({ title, n, rule, action, children, quiet, sub }) {
  return (
    <div className={"x-lane" + (quiet ? " is-quiet" : "") + (sub ? " is-sub" : "")}>
      <div className="x-group-head"><span className="x-group-title">{title}</span><span className="x-group-n">{n}</span>{rule && <span className="x-group-rule">{rule}</span>}{action}</div>
      {children}
    </div>
  );
}

function XToday({ persona }) {
  const s = useXS();
  const [, setTick] = I.useState(0);
  I.useEffect(() => { const t = setInterval(() => setTick((x) => x + 1), 1000); return () => clearInterval(t); }, []);
  if (s.view === "workflow") return <XWorkflow persona={persona} />;
  if (s.view === "classic") return <XClassic persona={persona} />;
  if (s.view === "plan") { const home = s.home === "workflow" || s.home === "classic" ? s.home : "queue"; return <><div className="x-backbar"><button className="x-planlink" onClick={() => xSet({ view: home })}>{home === "workflow" ? "← Back to Workflow" : home === "classic" ? "← Back to Classic" : "← Back to today's queue"}</button></div><XDayPlan persona={persona} /></>; }

  XS.persona = persona;
  if (!XS.seeded) { XS.seeded = true; if (!XFRESH) xSeedUpTo(XS.clock, true); }
  const now = xClock();
  const day = xBuildDay(XQ, now);
  const pr = xProgress(day, now);
  const views = pr.views;
  const order = xWorkOrder(views, now);
  const F = Ef.funnel;
  const score = xScore(s.done);
  const open = s.open != null ? s.open : order[0] ? order[0].lead.id : null;
  const openV = views.find((v) => v.lead.id === open) || null;
  const sideV = (openV && openV.current ? openV : null) || order[0] || views[0];
  const next = order.find((v) => xIsDue(v.current, now)) || order[0] || null;
  const booked = views.filter((v) => v.lead.at).sort((a, b) => xParseAt(a.lead.at) - xParseAt(b.lead.at));
  const blocked = order.filter((v) => v.current.blocked);
  const calls = order.filter((v) => v.current.ch === "call" && !v.current.blocked);
  const msgs = order.filter((v) => v.current.ch !== "call" && !v.current.blocked);
  const texts = msgs.filter((v) => v.current.ch === "text"), emails = msgs.filter((v) => v.current.ch === "email");
  const msgsDue = msgs.filter((v) => xIsDue(v.current, now));
  const batch = msgs.filter(xBatchOk);
  const handled = views.filter((v) => !v.current && v.doneTs.length);
  const sched = day.touches.filter((t) => XS.done[t.id] && XS.done[t.id].k === "scheduled" && XS.done[t.id].t > now).sort((a, b) => a.slot - b.slot);
  const start = () => { if (!openV || !openV.current) xSet({ open: next ? next.lead.id : null }); xSet({ focus: true }); };
  const fresh = !Object.keys(s.done).length;
  const mix = { call: 0, text: 0, email: 0 };
  for (const t of pr.plan) mix[t.ch]++;
  const auto = mix.text + mix.email;
  const openLead = (id) => xSet({ open: id });
  const row = (v) => (
    v.current.ch === "call"
      ? <XRow key={v.lead.id} v={v} now={now} isOpen={open === v.lead.id} persona={persona} onToggle={(force) => xSet({ open: force === true ? v.lead.id : open === v.lead.id ? "" : v.lead.id })} onAct={(k) => xAct(v, k, order)} onUndo={() => xUndo(v)} />
      : <XMsgRow key={v.lead.id} v={v} now={now} isOpen={open === v.lead.id} persona={persona} onToggle={() => xSet({ open: open === v.lead.id ? "" : v.lead.id })} onAct={(k) => xAct(v, k, order)} onUndo={() => xUndo(v)} />
  );
  return (
    <section className="view active x-today x-lean">
      <div className="x-top">
        <div className="x-top-left">
          <h1>{Gm(Math.floor(now / 60))}, <span>{persona}</span>.</h1>
          <XStatusLine pr={pr} next={next} now={now} onOpen={openLead} />
        </div>
        <div className="x-top-right">
          <XCompliance day={day} />
          <XViewSwitch view="queue" />
          <button className="x-planlink" onClick={() => xSet({ view: "plan" })} title="The whole day, hour by hour">Day plan →</button>
        </div>
      </div>
      <div className="x-topgrid">
        <XLook views={views} order={order} now={now} handled={handled} score={score} onOpen={openLead} />
        <div className="x-topright">
          <XDayStrip pr={pr} now={now} mix={mix} clock={s.clock} />
          <XScoreboard pr={pr} score={score} F={F} bump={s.bump} onStart={start} fresh={fresh} pro={xProCount(day)} cool={xCoolCount()} />
        </div>
      </div>
      <div className="x-grid">
        <div className="card x-queue">
          <div className="card-head x-queue-head">
            <span className="title">Today's prospects · {XQ.length} + {XCOOL.length} cooler</span>
            <div className="x-seg x-coach" role="group" aria-label="Coaching">
              <span className="x-viewbar-label">Coaching</span>
              {[[true, "On"], [false, "Off"]].map(([v, l]) => <button key={l} className={s.coach === v ? "active" : ""} aria-pressed={s.coach === v} onClick={() => xSetCoach(v)} title={v ? "Tips and the why on every touch: best for newer team members" : "Just the work: for experienced team members"}>{l}</button>)}
            </div>
            <span className="count">{handled.length} handled · {XQ.length - handled.length} to go</span>
          </div>
          {blocked.length > 0 && (
            <XLane title="Needs a decision" n={blocked.length} rule="The system stopped these; each says why.">
              {blocked.map(row)}
            </XLane>
          )}
          <XLane title="Your calls · at their hour" n={calls.length} rule={s.coach ? "Calls happen at their hour: that is where the contact rate is. Due now first, then by time; your words are on each call." : null}>
            {xFold(calls, now, row, open)}
            {!calls.length && <div className="x-empty">No calls left today.</div>}
            <XCoolFold ch="call" coach={s.coach} />
          </XLane>
          <div className="x-lane-group">
            <div className="x-group-head x-group-head-msgs"><span className="x-group-title">Messages · work any time</span><span className="x-group-n">{msgs.length}</span>{s.coach && <span className="x-group-rule">Drafted from your templates. Check the marked parts and approve whenever you have a minute, in open time or at a pause point; each one sends by itself at its set hour, and the send records who approved it.</span>}
              {batch.length > 1 ? <button className="btn x-approve-all" onClick={() => xApproveAll(msgs)} title={batch.length < msgs.length ? `${msgs.length - batch.length} marked “Check by itself” stay for you to approve one at a time` : undefined}>Approve {batch.length === msgs.length ? `all ${batch.length}` : `${batch.length} routine`}</button> : null}</div>
            <XLane title="Texts" n={texts.length} sub>
              {xAllMsgs(texts, now, row)}
              {!texts.length && <div className="x-empty">Every text is checked. They send at their hours.</div>}
              <XCoolFold ch="text" coach={s.coach} />
            </XLane>
            <XLane title="Emails" n={emails.length} sub>
              {xAllMsgs(emails, now, row)}
              {!emails.length && <div className="x-empty">Every email is checked. They send at their hours.</div>}
              <XCoolFold ch="email" coach={s.coach} />
            </XLane>
          </div>
          {(sched.length > 0 || handled.length > 0) && (
            <details className="x-lane x-lane-done">
              <summary className="x-group-head"><span className="x-group-title">Handled today</span><span className="x-group-n">{handled.length}</span><span className="x-group-rule">{sched.length ? `${sched.length} approved message${sched.length === 1 ? "" : "s"} will send on time` : "Tap to see them"}</span></summary>
              {sched.map((t) => <div key={t.id} className="x-done-row"><span className="mono">{xFmt(t.slot)}</span><span className={`x-chip x-chip-${t.ch}`}>{XCH[t.ch]}</span><span>{t.lead.name}</span><span className="x-done-what">{t.step.what} · approved, sends on time</span></div>)}
              {handled.map((v) => <div key={v.lead.id} className="x-done-row"><span className="x-check">✓</span><span>{v.lead.name}</span><span className="x-done-what">{xOutcomeText(v)}</span><button className="x-undo" onClick={() => xUndo(v)}>Undo</button></div>)}
            </details>
          )}
          <div className="x-queue-foot"><span>Every lead comes preset with its step, its channel, its hour and its words. Nothing to set up.</span><button className="btn ghost" onClick={() => xStartOver()}>Start the day over</button></div>
        </div>
        <div className="x-side">
          <XOpenTime day={day} now={now} coach={s.coach} />
          {s.coach && sideV && <XHowTo lead={sideV.lead} ch={sideV.current ? sideV.current.ch : "call"} />}
          <div className="card x-agenda">
            <div className="card-head"><span className="title">Booked today</span><span className="count">{String(booked.length).padStart(2, "0")}</span></div>
            {booked.map((v) => (
              <button key={v.lead.id} className={"x-agenda-row" + (v.current ? "" : " is-done")} onClick={() => xSet({ open: v.lead.id })}>
                <span className="mono x-agenda-time">{v.lead.at}</span><span className="x-agenda-name">{v.lead.name}</span><span className="x-agenda-what">{v.lead.reason}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      {s.focus && (
        <XFocus v={openV && openV.current ? openV : next} now={now} persona={persona} score={score} total={XQ.length}
          onAct={(k) => xAct(openV && openV.current ? openV : next, k, order)} onClose={() => xSet({ focus: false })} />
      )}
    </section>
  );
}
