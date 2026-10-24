// Demo controls live in one drawer, out of a team member's way: who you're acting as, the demo clock, the
// Today view (queue, day plan, classic), coaching on or off, and start the day over. The header shows one
// small "Demo" button; the product itself carries none of these switches.
function XDemoDrawer({ persona, onPersonaChange }) {
  const s = useXS();
  const open = !!s.demoOpen;
  const ref = I.useRef(null);
  I.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) xSet({ demoOpen: false }); };
    const onKey = (e) => { if (e.key === "Escape") xSet({ demoOpen: false }); };
    document.addEventListener("pointerdown", onDoc); document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("pointerdown", onDoc); document.removeEventListener("keydown", onKey); };
  }, [open]);
  return (
    <div className={"x-demo" + (open ? " is-open" : "")} ref={ref}>
      <button className="x-demo-btn" aria-expanded={open} aria-controls="x-demo-panel" onClick={() => xSet({ demoOpen: !open })} title="Demo controls: persona, clock, views">
        <span className="x-demo-dot" aria-hidden="true" />Demo{open ? " ×" : ""}
      </button>
      {open && (
        <div className="x-demo-panel" id="x-demo-panel" role="region" aria-label="Demo controls">
          <div className="x-demo-row">
            <span className="x-viewbar-label">Acting as</span>
            <div className="x-seg" role="group" aria-label="Acting persona">
              {["Alex", "Maya"].map((n) => <button key={n} className={persona === n ? "active" : ""} aria-pressed={persona === n} onClick={() => onPersonaChange(n)}>{n}{n === "Alex" ? " · Agent" : " · Producer"}</button>)}
            </div>
          </div>
          <div className="x-demo-row x-clockbar">
            <span className="x-viewbar-label">Clock</span>
            <div className="x-seg" role="group" aria-label="Demo clock">
              {XCLOCKS.map(([l, v]) => <button key={l} className={s.clock === v ? "active" : ""} aria-pressed={s.clock === v} onClick={() => xSetClock(v)}>{l}</button>)}
            </div>
          </div>
          <div className="x-demo-row x-viewbar">
            <span className="x-viewbar-label">Today view</span>
            <div className="x-seg" role="group" aria-label="Today view">
              {[["queue", "Action queue"], ["plan", "Day plan"], ["classic", "Classic"]].map(([k, l]) => <button key={k} className={s.view === k ? "active" : ""} aria-pressed={s.view === k} onClick={() => { xSet({ view: k, demoOpen: false }); if (XNav.go) XNav.go("today"); }}>{l}</button>)}
            </div>
          </div>
          <div className="x-demo-row x-statebar">
            <span className="x-viewbar-label">State rules</span>
            <div className="x-seg" role="group" aria-label="Agency state">
              {Object.keys(XSTATE).map((k) => <button key={k} className={s.state === k ? "active" : ""} aria-pressed={s.state === k} onClick={() => xSet({ state: k })} title={XSTATE[k].note}>{k}</button>)}
            </div>
            <span className="x-demo-hint">{xState().cap ? `${xState().label}: ${xState().cap} calls per person in 24 h` : `${xState().label}: no attempt cap`}</span>
          </div>
          <div className="x-demo-row">
            <span className="x-viewbar-label">Coaching</span>
            <div className="x-seg" role="group" aria-label="Coaching">
              {[[true, "On"], [false, "Off"]].map(([v, l]) => <button key={l} className={s.coach === v ? "active" : ""} aria-pressed={s.coach === v} onClick={() => xSetCoach(v)}>{l}</button>)}
            </div>
            <button className="btn ghost x-demo-reset" onClick={() => xStartOver()}>Start the day over</button>
          </div>
          <div className="x-demo-note">These controls exist for the demonstration only; a team member's screen opens on today's plan with none of them.</div>
        </div>
      )}
    </div>
  );
}
