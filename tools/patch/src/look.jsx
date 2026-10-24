// Today's look: four compartments a team member reads in five seconds, in the order the day runs.
// Needs first touch (new leads inside their window) · Calls today · Messages to check · Small wins
// (people whose every touch for today is done). Each names the next few people; a tap opens their card.
function xLook(views, order, now, handled, score) {
  const firsts = views.filter((v) => v.current && v.lead.seen != null && v.lead.day === 0 && v.current.wk === "now").sort((a, b) => xFreshKey(a.lead, now) - xFreshKey(b.lead, now));
  const calls = order.filter((v) => v.current && v.current.ch === "call" && !v.current.blocked && !firsts.includes(v));
  const msgs = order.filter((v) => v.current && v.current.ch !== "call" && !v.current.blocked);
  const callsDone = views.filter((v) => v.doneTs.some((d) => d.ch === "call")).length;
  const wins = handled.slice().sort((a, b) => (XS.done[b.last.id].at || 0) - (XS.done[a.last.id].at || 0));
  return [
    { k: "first", title: "Needs first touch", n: firsts.length, of: null, sub: firsts.length ? `oldest ${Math.max(...firsts.map((v) => Math.max(0, Math.round(now - xLanded(v.lead)))))} min` : "none waiting", names: firsts.slice(0, 3).map((v) => ({ id: v.lead.id, t: v.lead.name, s: `${Math.max(0, Math.round(now - xLanded(v.lead)))} min` })), tone: firsts.some((v) => now - xLanded(v.lead) > 5) ? "late" : firsts.length ? "now" : "quiet", empty: "Every new lead has had its first call." },
    { k: "calls", title: "Calls today", n: callsDone, of: callsDone + calls.length, sub: calls.length ? `next: ${xFmt(calls[0].current.slot)}` : "all done", names: calls.slice(0, 3).map((v) => ({ id: v.lead.id, t: v.lead.name, s: xIsDue(v.current, now) ? "due now" : xFmt(v.current.slot) })), tone: calls.some((v) => xIsDue(v.current, now)) ? "now" : "quiet", empty: "No calls left today." },
    { k: "msgs", title: "Messages to check", n: msgs.length, of: null, sub: msgs.length ? `${msgs.filter((v) => v.current.ch === "text").length} texts · ${msgs.filter((v) => v.current.ch === "email").length} emails` : "all sent", names: msgs.slice(0, 3).map((v) => ({ id: v.lead.id, t: v.lead.name, s: XCH[v.current.ch].toLowerCase() })), tone: msgs.some((v) => xIsDue(v.current, now)) ? "now" : "quiet", empty: "Every message is checked." },
    { k: "wins", title: "Small wins", n: wins.length, of: XQ.length, sub: `${score.quotes} quote${score.quotes === 1 ? "" : "s"}${score.hh ? ` · ${score.hh} household${score.hh === 1 ? "" : "s"} protected` : ""}`, names: wins.slice(0, 3).map((v) => ({ id: v.lead.id, t: v.lead.name, s: xOutcomeShort(v) })), tone: wins.length ? "win" : "quiet", empty: "The first one comes with the first call." },
  ];
}
function xOutcomeShort(v) {
  const d = XS.done[v.last.id];
  if (!d) return "done";
  if (d.k === "signed") return "signed";
  if (d.k === "quoted") return "quoted";
  if (d.k === "talked") return "talked";
  if (d.k === "notnow") return "not now";
  if (d.k === "sent" || d.k === "scheduled") return "sent";
  return XOUT[d.k] ? XOUT[d.k].toLowerCase() : "done";
}
function XLook({ views, order, now, handled, score, onOpen }) {
  const q = xLook(views, order, now, handled, score);
  return (
    <div className="x-look" role="group" aria-label="Today's look">
      {q.map((c) => (
        <div key={c.k} className={`x-look-q is-${c.tone}`}>
          <div className="x-look-head"><span className="x-look-title">{c.title}</span><span className="x-look-n"><b>{c.n}</b>{c.of != null ? <small>/{c.of}</small> : null}</span></div>
          <div className="x-look-sub">{c.sub}</div>
          {c.names.length ? (
            <ul className="x-look-list">
              {c.names.map((p) => <li key={p.id}><button className="x-look-name" onClick={() => onOpen(p.id)}>{p.t}</button><span className="x-look-when">{p.s}</span></li>)}
            </ul>
          ) : <div className="x-look-empty">{c.empty}</div>}
        </div>
      ))}
    </div>
  );
}
