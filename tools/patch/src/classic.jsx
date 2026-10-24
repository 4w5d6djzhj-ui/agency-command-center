// Classic: the original Today, kept as built (four panels: needs first touch, X-dates, drafts pending review,
// today's call queue), with the queue's top above it (status line, day strip, Process/Results board) and one
// change to the rows: tapping one opens the same five-minute work card the queue uses, in a side panel on a
// desk and a bottom sheet on a phone. Same engine, same handlers, same records.
function xClassicLead(name) {
  return XQ.find((l) => l.name === name) || XCOOL.find((l) => l.name === name) || null;
}
// the row extras the original cards lack: the STOP chip and where the person comes from in the system
function XClassicExtras({ name }) {
  const lead = xClassicLead(name);
  if (!lead) return null;
  return (
    <>
      {lead.consent && lead.consent.stop && <span className="x-chip x-chip-stop" title={lead.consent.basis}>Texted STOP {lead.consent.stop}</span>}
      <span className="x-tag x-src-tag" title="Where this person comes from in the agency's system">{xSource(lead)}</span>
    </>
  );
}
function xClassicOpen(name) {
  const lead = xClassicLead(name);
  if (!lead || !XQ.includes(lead)) return;
  xSet({ open: lead.id, classicWork: true });
}
// view switch a team member can see: the workflow (default), the classic board or the action queue
const XVIEWS = [["workflow", "Workflow"], ["classic", "Classic"], ["queue", "Action queue"]];
function XViewSwitch({ view }) {
  return (
    <div className="x-seg x-viewswitch" role="group" aria-label="Today view">
      {XVIEWS.map(([k, l]) => (
        <button key={k} className={view === k ? "active" : ""} aria-pressed={view === k} onClick={() => xSet({ view: k, home: k, classicWork: false })}>{l}</button>
      ))}
    </div>
  );
}
// the side panel: the open lead's work card, with the queue's handlers
function XClassicWork({ views, order, now, persona }) {
  const s = useXS();
  const open = s.open != null ? s.open : order[0] ? order[0].lead.id : null;
  const v = views.find((x) => x.lead.id === open) || null;
  const show = !!s.classicWork && v && v.current;
  if (!show) return null;
  const close = () => xSet({ classicWork: false });
  const row = v.current.ch === "call"
    ? <XRow v={v} now={now} isOpen persona={persona} onToggle={() => {}} onAct={(k) => { xAct(v, k, order); }} onUndo={() => xUndo(v)} />
    : <XMsgRow v={v} now={now} isOpen persona={persona} onToggle={() => {}} onAct={(k) => { xAct(v, k, order); }} onUndo={() => xUndo(v)} />;
  return (
    <div className="x-cwork" role="dialog" aria-label={`Work card: ${v.lead.name}`}>
      <div className="x-cwork-head"><span className="x-viewbar-label">The next five minutes</span><button className="x-cwork-close" onClick={close} aria-label="Close">×</button></div>
      <div className="x-cwork-body">{row}</div>
      <div className="x-cwork-foot"><span>Same card as the queue: the words, the timer, the outcome. Tap any name on the board to open theirs.</span></div>
    </div>
  );
}
function XClassic({ persona }) {
  const s = useXS();
  XS.persona = persona;
  if (!XS.seeded) { XS.seeded = true; if (!XFRESH) xSeedUpTo(XS.clock, true); }
  const now = xClock();
  const day = xBuildDay(XQ, now);
  const pr = xProgress(day, now);
  const views = pr.views;
  const order = xWorkOrder(views, now);
  const F = Ef.funnel;
  const score = xScore(s.done);
  const next = order.find((v) => xIsDue(v.current, now)) || order[0] || null;
  const fresh = !Object.keys(s.done).length;
  const mix = { call: 0, text: 0, email: 0 };
  for (const t of pr.plan) mix[t.ch]++;
  const start = () => { xSet({ open: next ? next.lead.id : null, classicWork: true }); };
  // the board's rows open the work card: delegated from the original rows, which carry no handlers
  const onBoardClick = (e) => {
    const row = e.target.closest(".today-grid .row");
    if (!row) return;
    const nameEl = row.querySelector(".name");
    if (nameEl) xClassicOpen(nameEl.textContent.trim());
  };
  return (
    <section className={"view active x-today x-lean x-classic" + (s.classicWork ? " has-work" : "")}>
      <div className="x-top">
        <div className="x-top-left">
          <h1>{Gm(Math.floor(now / 60))}, <span>{persona}</span>.</h1>
          <XStatusLine pr={pr} next={next} now={now} onOpen={(id) => xSet({ open: id, classicWork: true })} />
        </div>
        <div className="x-top-right">
          <XCompliance day={day} />
          <XViewSwitch view="classic" />
          <button className="x-planlink" onClick={() => xSet({ view: "plan" })} title="The whole day, hour by hour">Day plan →</button>
        </div>
      </div>
      <div className="x-topgrid x-topgrid-classic">
        <div className="x-topright">
          <XDayStrip pr={pr} now={now} mix={mix} clock={s.clock} />
          <XScoreboard pr={pr} score={score} F={F} bump={s.bump} onStart={start} fresh={fresh} pro={xProCount(day)} cool={xCoolCount()} />
        </div>
      </div>
      <div className="x-classic-grid" onClick={onBoardClick}>
        <div className="x-classic-board"><Uf persona={persona} /></div>
        <XClassicWork views={views} order={order} now={now} persona={persona} />
      </div>
    </section>
  );
}
