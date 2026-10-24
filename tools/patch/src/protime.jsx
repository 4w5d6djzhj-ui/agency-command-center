// Open time: the stretches of the office day (9 to 5, lunch off) with no call, text or email planned. Instead of leaving them blank,
// the screen fills them with five-minute proactive work for tomorrow and the week, built from today's list:
// quotes owed to the people who talked, tomorrow's first calls, next week's renewals, referral asks, a
// life review, the consent check, the story of the week. Each is one tap to mark done.
function xOpenBlocks(day) {
  // inside the office day (9 to 5), with lunch off; a touch takes 10 minutes, the huddle the first 10
  const lo = XDAY.open, hi = XDAY.close;
  const used = day.touches.filter((t) => !t.tomorrow).map((t) => [t.slot, t.slot + 10]).concat([[XDAY.lunch[0], XDAY.lunch[1]], [lo, lo + 10]]).sort((a, b) => a[0] - b[0]);
  const gaps = [];
  let prev = lo;
  for (const [s, e] of used.concat([[hi, hi]])) {
    const end = Math.min(s, hi);
    if (end - prev >= 30) {
      if (end - prev > 110) { const mid = Math.round((prev + end) / 2 / 5) * 5; gaps.push([prev, mid], [mid, end]); }
      else gaps.push([prev, end]);
    }
    prev = Math.max(prev, Math.min(e, hi));
    if (prev >= hi) break;
  }
  return gaps.slice(0, 3);
}
function xProContext(day) {
  const talked = [], quoted = new Set();
  for (const k of Object.keys(XS.done)) { const d = XS.done[k]; const id = k.split("#")[0]; if (d.k === "talked") talked.push(id); if (d.k === "quoted" || d.k === "signed") quoted.add(id); }
  const owe = XQ.filter((l) => talked.includes(l.id) && !quoted.has(l.id));
  const renewals = XQ.filter((l) => l.scenario === "xdate").length;
  const stops = XQ.filter((l) => l.consent && l.consent.stop).length;
  const life = XQ.find((l) => l.source === "LE");
  return { owe, renewals, stops, life };
}
function xProTasks(day) {
  const c = xProContext(day);
  const names = c.owe.slice(0, 2).map((l) => xFirst(l.name)).join(" and ");
  const lib = [
    { id: "quotes", k: c.owe.length ? `Send the quote${c.owe.length === 1 ? "" : "s"} to ${names}` : "Send this morning's quotes", min: 5, t: c.owe.length ? `${c.owe.length === 1 ? xFirst(c.owe[0].name) + " talked this morning and has" : "Both talked this morning and have"} no quote out yet. The follow-up plan starts the moment it goes out.` : "Anyone who talked this morning and has no quote out yet; the plan starts the moment it goes out.", slot: 0 },
    { id: "consent", k: "Consent check, once", min: 2, t: c.stops ? `${c.stops} STOP came in at 7:42 today; texts are off for her and the record shows it. Read the five lines once; nothing to fix.` : "Read the five lines once; nothing to fix.", slot: 0 },
    { id: "tomorrow", k: "Pick tomorrow's first three calls", min: 5, t: "They are already first on tomorrow's plan. Read their words once now, so the first calls at 9 start warm.", slot: 1 },
    { id: "renewals", k: `Next week's renewals: ${c.renewals}`, min: 5, t: `${c.renewals} on your list renew within two weeks. Line up the re-quotes today so each gets its call before the notice lands.`, slot: 1 },
    { id: "referrals", k: "Two referral asks", min: 5, t: "Call two customers who signed this month and ask for one name each. Asked is the measure, not received.", slot: 1 },
    { id: "life", k: c.life ? `Book ${xFirst(c.life.name)}'s life review` : "Book one life review", min: 5, t: c.life ? `${xFirst(c.life.name)} had a baby this month. Ten minutes: auto protects the car, home protects the house, life protects the payments.` : "One household with a new baby, home or driver: ten minutes on what protects the payments.", slot: 2 },
    { id: "story", k: "Story of the week", min: 5, t: "Four lines for Friday's huddle: who they were, what you said, what they said back, what is safe now.", slot: 2 },
  ];
  return lib;
}
function xProCount(day) {
  const tasks = xProTasks(day);
  return { done: tasks.filter((t) => XS.pro[t.id]).length, total: tasks.length };
}
function xCoolCount() { return { done: XCOOL.filter((l) => XS.cool[l.id]).length, total: XCOOL.length }; }
function XOpenTime({ day, now, coach }) {
  const s = useXS();
  const gaps = xOpenBlocks(day);
  const tasks = xProTasks(day);
  const byGap = gaps.map((g, i) => ({ g, tasks: tasks.filter((t) => t.slot === Math.min(i, 2)) }));
  if (gaps.length < 3) { const spare = tasks.filter((t) => t.slot >= gaps.length); if (byGap.length) byGap[byGap.length - 1].tasks.push(...spare); }
  const done = tasks.filter((t) => s.pro[t.id]).length;
  const toggle = (id) => xSet((st) => { const pro = { ...st.pro }; if (pro[id]) delete pro[id]; else pro[id] = xClock(); return { pro }; });
  return (
    <div className="card x-open">
      <div className="card-head"><span className="title">Open time · proactive</span><span className="count">{done} of {tasks.length}</span></div>
      <div className="x-open-body">
        {coach && <div className="x-open-rule">The hours with no call, text or email planned. Five minutes each, for tomorrow and the week; one tap when it's done.</div>}
        {byGap.map(({ g, tasks: ts }, i) => (
          <div key={i} className={"x-open-block" + (now >= g[0] && now < g[1] ? " is-now" : now >= g[1] ? " is-past" : "")}>
            <div className="x-open-when"><span className="mono">{xFmt(g[0])}–{xFmt(g[1])}</span><span className="x-open-len">{Math.round((g[1] - g[0]) / 5) * 5} min open{now >= g[0] && now < g[1] ? " · now" : ""}</span></div>
            <ul className="x-open-list">
              {ts.map((t) => (
                <li key={t.id} className={s.pro[t.id] ? "is-done" : ""}>
                  <button className="x-open-check" aria-pressed={!!s.pro[t.id]} onClick={() => toggle(t.id)} aria-label={s.pro[t.id] ? `Done: ${t.k}` : `Mark done: ${t.k}`}>{s.pro[t.id] ? "✓" : ""}</button>
                  <div className="x-open-text"><div className="x-open-k">{t.k} <span className="x-mins">{t.min} min</span></div>{coach && !s.pro[t.id] && <div className="x-open-t">{t.t}</div>}{s.pro[t.id] && <div className="x-open-t">Done {xFmt(s.pro[t.id])}</div>}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {!byGap.length && <div className="x-empty">No open time today: the plan fills the day.</div>}
      </div>
    </div>
  );
}

// The eight cooler leads, folded at the end of their channel's lane: not due today, worked in any open minute.
function XCoolFold({ ch, coach }) {
  const s = useXS();
  const list = XCOOL.filter((l) => xCoolChannel(l) === ch);
  if (!list.length) return null;
  const done = list.filter((l) => s.cool[l.id]).length;
  const toggle = (id) => xSet((st) => { const cool = { ...st.cool }; if (cool[id]) delete cool[id]; else cool[id] = xClock(); return { cool }; });
  return (
    <details className="x-later x-cool">
      <summary>Cooler leads · any open minute · {list.length}{done ? ` · ${done} done` : ""}</summary>
      {coach && <div className="x-open-rule">Not hot and not due by their plan. One suggested channel inside their consent, one opener, five minutes, one tap when it's done.</div>}
      <ul className="x-open-list x-cool-list">
        {list.map((l) => {
          const d = s.cool[l.id];
          return (
            <li key={l.id} className={d ? "is-done" : ""}>
              <button className="x-open-check" aria-pressed={!!d} onClick={() => toggle(l.id)} aria-label={d ? `Done: ${l.name}` : `Mark done: ${l.name}`}>{d ? "✓" : ""}</button>
              <div className="x-open-text">
                <div className="x-open-k"><span className="x-cool-name">{l.name}</span><span className={`style-pill ${l.style}`}>{rf[l.style] ? rf[l.style].label : l.style}</span><span className="x-tag">{XSRC[l.source].label}</span><span className={`x-chip x-chip-${ch}`}>{XCH[ch]}</span><span className="x-mins">5 min</span></div>
                {!d && <div className="x-open-t">{l.why}{coach ? ` Say: "${xFillSay(l.say, l, XS.persona || "Alex")}"` : ""}{ch === "call" ? ` · ${l.phone}` : ""}</div>}
                {d && <div className="x-open-t">Done {xFmt(d)}</div>}
              </div>
            </li>
          );
        })}
      </ul>
    </details>
  );
}
