// The Now bar: on every screen, the one next thing to do and how long it has. Tap it and it opens.
function XNowBar() {
  useXS();
  const [, setTick] = I.useState(0);
  I.useEffect(() => { const t = setInterval(() => setTick((x) => x + 1), 1000); return () => clearInterval(t); }, []);
  const now = xClock();
  const views = xLeadViews(xBuildDay(XQ, now));
  const order = xWorkOrder(views, now);
  const v = order[0];
  const go = (id) => {
    // on the Workflow the card opens beneath its row and scrolls into view; elsewhere the queue opens at the top
    if (XS.home === "workflow") { xSet({ view: "workflow", open: id, focus: false, wfLast: null, wfScroll: id }); if (XNav.go) XNav.go("today"); return; }
    xSet({ view: "queue", open: id, focus: false }); if (XNav.go) XNav.go("today"); try { window.scrollTo({ top: 0, behavior: "smooth" }); } catch (e) {}
  };
  if (!v) return <button className="x-nowbar is-clear" onClick={() => go(null)}><span className="x-nowbar-k">Done</span><span className="x-nowbar-name">All {XQ.length} touched today</span></button>;
  const t = v.current, due = xIsDue(t, now), st = xStatusOf(t, now);
  return (
    <button className={`x-nowbar x-nowbar-${t.ch}${due ? " is-due" : ""}`} onClick={() => go(v.lead.id)} aria-label={`${due ? "Now" : "Next"}: ${XCH[t.ch]} ${v.lead.name}, ${st.text}`}>
      <span className="x-nowbar-dot" aria-hidden="true" />
      <span className="x-nowbar-k">{due ? "Now" : "Next"}</span>
      <span className="x-nowbar-ch">{XCH[t.ch]}</span>
      <span className="x-nowbar-name">{v.lead.name}</span>
      <span className="x-nowbar-t mono">{st.text}</span>
      <span className="x-nowbar-go" aria-hidden="true">›</span>
    </button>
  );
}

function XBrandTagline() {
  return <div className="brand-tagline">An agent's experience <span className="amp">&amp;</span> judgment, at every team member's fingertips.</div>;
}
