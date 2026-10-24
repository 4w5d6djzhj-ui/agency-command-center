// Charts for the plan, the strategy and progress. Plain SVG: thin marks, hairline grid, one axis per
// chart, direct labels, a hover readout, and a table view under each chart. Channel colors were run
// through the palette validator (all pairs pass; labels carry the lighter green).
const XCOL = { call: "#2a78d6", email: "#c8790f", text: "#1baf7a", plan: "#C9D3E3", done: "#1F3864", grid: "#ECE8DE", axis: "#C3C2B7", now: "#8C2F39" };

// ---- the numbers behind every chart: planned, due by now, done, by hour and in total ----------------
function xProgress(day, now) {
  const views = xLeadViews(day);
  const stopped = {};
  for (const v of views) stopped[v.lead.id] = !v.current && v.doneTs.some((t) => XSTOP.test(XS.done[t.id].k));
  // a touch counts toward the plan unless its lead already said yes, no or "not now" (then it isn't needed)
  const plan = day.touches.filter((t) => !t.tomorrow && (XS.done[t.id] || !stopped[t.lead.id]));
  const done = plan.filter((t) => XS.done[t.id]);
  const at = (t) => (XS.done[t.id] && XS.done[t.id].t != null ? XS.done[t.id].t : t.slot);
  const dueNow = plan.filter((t) => t.slot <= now).length;
  const doneNow = done.filter((t) => at(t) <= now + 0.01).length;
  const hours = [];
  // the office day, 9 to 5 (a touch outside it, a new lead's call at 8:50 say, counts in the nearest hour)
  for (let h = 9; h <= 16; h++) {
    const inH = (m) => (h === 9 ? m < 10 * 60 : h === 16 ? m >= 16 * 60 : m >= h * 60 && m < (h + 1) * 60);
    hours.push({ h, plan: plan.filter((t) => inH(t.slot)).length, done: done.filter((t) => inH(at(t))).length });
  }
  const calls = plan.filter((t) => t.ch === "call"), callsDone = calls.filter((t) => XS.done[t.id]);
  const firsts = day.touches.filter((t) => t.wk === "now" && t.lead.seen != null);
  const fast = firsts.filter((t) => XS.done[t.id] && XS.done[t.id].t != null && XS.done[t.id].t - xLanded(t.lead) <= 5).length;
  const behind = plan.filter((t) => !XS.done[t.id] && t.slot < now - 30).length;
  const firstsDone = firsts.filter((t) => XS.done[t.id]).length;
  return { views, plan, done, handled: done.length, at, dueNow, doneNow, behind, hours, calls: calls.length, callsDone: callsDone.length, firsts: firsts.length, firstsDone, fast, stopped };
}

// ---- a meter: done against the day's number, with a tick where the plan says you should be by now ----
function XMeter({ label, v, of, tick, unit, sub }) {
  const pct = of ? Math.min(1, v / of) : 0, tp = of && tick != null ? Math.min(1, tick / of) : null;
  return (
    <div className="x-meter" role="group" aria-label={`${label}: ${v} of ${of}${tick != null ? `, plan by now ${tick}` : ""}`}>
      <div className="x-meter-top"><span className="x-meter-k">{label}</span><span className="x-meter-v">{v}<small> / {of}{unit ? ` ${unit}` : ""}</small></span></div>
      <div className="x-meter-track"><i style={{ width: pct * 100 + "%" }} />{tp != null && <b className="x-meter-tick" style={{ left: tp * 100 + "%" }} title={`Plan by now: ${tick}`} />}</div>
      <div className="x-meter-sub">{of ? (pct < 0.5 ? `${v} done` : v >= of ? "Done" : `${of - v} to go`) : ""}{sub ? ` · ${sub}` : ""}</div>
    </div>
  );
}

// ---- results as squares: small counts read at a glance; each one fills as it happens ------------------
function XUnits({ label, v, of, bump }) {
  return (
    <div className="x-meter x-units" role="group" aria-label={`${label}: ${v} of ${of}`}>
      <div className="x-meter-top"><span className="x-meter-k">{label}</span><span className="x-meter-v"><span key={bump || 0} className={bump ? "x-pop" : ""}>{v}</span><small> / {of}</small></span></div>
      <div className="x-units-row" aria-hidden="true">{Array.from({ length: of }, (_, i) => <i key={i} className={i < v ? "is-on" : ""} />)}</div>
      <div className="x-meter-sub">{v >= of ? "Goal met" : v / of < 0.5 ? `${v} so far` : `${of - v} to go`}</div>
    </div>
  );
}

// render a chart at its real width so its text stays at true size
function useBoxWidth(def) {
  const ref = I.useRef(null);
  const [w, setW] = I.useState(def);
  I.useEffect(() => {
    if (!ref.current || typeof ResizeObserver === "undefined") return undefined;
    const ro = new ResizeObserver((es) => { const cw = Math.round(es[0].contentRect.width); if (cw > 0) setW(cw); });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  return [ref, w];
}

// ---- burn-up: cumulative touches planned vs done through the day, one axis, the now line ------------
function XBurnUp({ pr, now, height }) {
  const [hov, setHov] = I.useState(null);
  const [box, W] = useBoxWidth(610);
  const H = height || 165, L = 34, R = 76, T = 13, B = 26;
  const x0 = XDAY.open, x1 = XDAY.close, total = Math.max(1, pr.plan.length);
  const sx = (m) => L + ((Math.max(x0, Math.min(x1, m)) - x0) / (x1 - x0)) * (W - L - R);
  const sy = (n) => T + (1 - n / total) * (H - T - B);
  const steps = (times) => { const s = times.slice().sort((a, b) => a - b); const pts = [[x0, 0]]; s.forEach((m, i) => { pts.push([Math.max(x0, m), i]); pts.push([Math.max(x0, m), i + 1]); }); return pts; };
  const planPts = steps(pr.plan.map((t) => t.slot)); planPts.push([x1, pr.plan.length]);
  const donePts = steps(pr.done.map((t) => pr.at(t)).filter((m) => m <= now + 0.01)); donePts.push([Math.min(Math.max(now, x0), x1), pr.doneNow]);
  const path = (pts) => pts.map(([m, n], i) => `${i ? "L" : "M"}${sx(m).toFixed(1)},${sy(n).toFixed(1)}`).join("");
  const ticks = W < 430 ? [9, 11, 13, 15, 17] : [9, 10, 11, 12, 13, 14, 15, 16, 17];
  const yt = [0, Math.round(total / 2), total];
  const cum = (m) => ({ plan: pr.plan.filter((t) => t.slot <= m).length, done: pr.done.filter((t) => pr.at(t) <= Math.min(m, now)).length });
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect(), px = ((e.clientX - r.left) / r.width) * W;
    const m = Math.round((x0 + ((px - L) / (W - L - R)) * (x1 - x0)) / 30) * 30;
    if (m < x0 || m > x1) { setHov(null); return; }
    setHov({ m, ...cum(m) });
  };
  const nowIn = now >= x0 && now <= x1;
  return (
    <figure className="x-chart x-burn" ref={box}>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Touches planned vs done by time of day: ${pr.doneNow} done, ${pr.dueNow} planned by now, ${pr.plan.length} today`} onPointerMove={move} onPointerLeave={() => setHov(null)}>
        {yt.map((n) => <g key={n}><line x1={L} x2={W - R} y1={sy(n)} y2={sy(n)} stroke={XCOL.grid} /><text x={L - 5} y={sy(n) + 3} textAnchor="end" className="x-ax">{n}</text></g>)}
        {ticks.map((h) => <text key={h} x={sx(h * 60)} y={H - 8} textAnchor="middle" className="x-ax">{h === 12 ? "12 PM" : h > 12 ? `${h - 12} PM` : `${h} AM`}</text>)}
        <path d={path(planPts)} fill="none" stroke={XCOL.plan} strokeWidth="2" strokeLinejoin="round" />
        <path d={path(donePts)} fill="none" stroke={XCOL.done} strokeWidth="2" strokeLinejoin="round" />
        {nowIn && <g><line x1={sx(now)} x2={sx(now)} y1={T} y2={H - B} stroke={XCOL.now} /><text x={sx(now) + 4} y={T + 8} className="x-ax x-ax-now">now</text></g>}
        <circle cx={sx(Math.min(Math.max(now, x0), x1))} cy={sy(pr.doneNow)} r="4.5" fill={XCOL.done} stroke="#fff" strokeWidth="2" />
        <text x={W - R + 5} y={sy(pr.plan.length) + 4} className="x-lab">{pr.plan.length} planned</text>
        <text x={Math.min(sx(now), W - R) + 8} y={sy(pr.doneNow) + 4} className="x-lab x-lab-strong">{pr.doneNow} done</text>
        {hov && <g><line x1={sx(hov.m)} x2={sx(hov.m)} y1={T} y2={H - B} stroke={XCOL.axis} /></g>}
      </svg>
      {hov && <div className="x-tip" style={{ left: `${(sx(hov.m) / W) * 100}%` }}><b>{hov.done}</b> done · <b>{hov.plan}</b> planned<span>{xFmt(hov.m)}</span></div>}
      <figcaption className="x-legend"><span><i className="x-key-line" style={{ background: XCOL.done }} />Done</span><span><i className="x-key-line" style={{ background: XCOL.plan }} />Planned</span><span><i className="x-key-line" style={{ background: XCOL.now }} />Now</span></figcaption>
      <XTable caption="Touches by the hour" cols={["Hour", "Planned", "Done"]} rows={pr.hours.map((r) => [xFmt(r.h * 60), r.plan, r.done])} />
    </figure>
  );
}

// ---- hour by hour: the lean production board as columns, planned (light) with done inside (dark) -----
function XHourBars({ pr, now }) {
  const [hov, setHov] = I.useState(null);
  const [box, W] = useBoxWidth(610);
  const H = 110, L = 8, R = 8, T = 16, B = 22;
  const max = Math.max(1, ...pr.hours.map((r) => r.plan), ...pr.hours.map((r) => r.done));
  const n = pr.hours.length, band = (W - L - R) / n, bw = Math.min(21, band * 0.55);
  const sy = (v) => T + (1 - v / max) * (H - T - B);
  const nowH = Math.floor(now / 60);
  return (
    <figure className="x-chart x-hours" ref={box}>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Touches planned and done in each hour" onPointerLeave={() => setHov(null)}>
        <line x1={L} x2={W - R} y1={sy(0)} y2={sy(0)} stroke={XCOL.axis} />
        {pr.hours.map((r, i) => {
          const cx = L + band * i + band / 2;
          const bar = (v, w, fill) => v > 0 ? <path d={`M${cx - w / 2},${sy(0)}V${sy(v) + 3}q0,-3 3,-3h${w - 6}q3,0 3,3V${sy(0)}Z`} fill={fill} /> : null;
          return (
            <g key={r.h} onPointerEnter={() => setHov(i)} tabIndex="0" onFocus={() => setHov(i)} onBlur={() => setHov(null)}>
              <rect x={cx - band / 2} y={T} width={band} height={H - T - B} fill="transparent" />
              {bar(r.plan, bw, XCOL.plan)}
              {bar(Math.min(r.done, max), Math.max(5, bw - 8), XCOL.done)}
              <text x={cx} y={H - 8} textAnchor="middle" className={"x-ax" + (r.h === nowH ? " x-ax-now" : "")}>{r.h > 12 ? r.h - 12 : r.h}</text>
              {r.plan > 0 && <text x={cx} y={sy(r.plan) - 4} textAnchor="middle" className="x-lab-sm">{r.done ? `${r.done}/${r.plan}` : r.plan}</text>}
            </g>
          );
        })}
      </svg>
      {hov != null && <div className="x-tip" style={{ left: `${((L + ((W - L - R) / n) * hov + (W - L - R) / n / 2) / W) * 100}%` }}><b>{pr.hours[hov].done}</b> done of <b>{pr.hours[hov].plan}</b><span>{xFmt(pr.hours[hov].h * 60)} hour</span></div>}
      <figcaption className="x-legend"><span><i className="x-key-box" style={{ background: XCOL.done }} />Done</span><span><i className="x-key-box" style={{ background: XCOL.plan }} />Planned</span></figcaption>
    </figure>
  );
}

// ---- small wins: one tile per person on today's list, filled as their touch for today is handled ------
function XTiles({ pr, onOpen }) {
  const order = pr.views.slice().sort((a, b) => (b.doneTs.length > 0) - (a.doneTs.length > 0));
  const state = (v) => {
    const k = v.doneTs.map((t) => XS.done[t.id].k);
    if (k.includes("signed")) return ["won", "Signed"];
    if (k.includes("quoted")) return ["won", "Quoted"];
    if (!v.current && v.doneTs.length) return ["done", "Done for today"];
    if (v.doneTs.length) return ["part", "Started"];
    return ["todo", "To do"];
  };
  const handled = pr.views.filter((v) => !v.current && v.doneTs.length).length;
  return (
    <div className="x-tiles-wrap">
      <div className="x-tiles" role="list" aria-label={`${handled} of ${pr.views.length} people handled today`}>
        {order.map((v) => {
          const [s, label] = state(v);
          return (
            <button key={v.lead.id} role="listitem" className={`x-tile-p is-${s}`} title={`${v.lead.name} · ${label}`} aria-label={`${v.lead.name}: ${label}`} onClick={() => onOpen && onOpen(v.lead.id)}>
              <span aria-hidden="true">{s === "won" ? "★" : s === "done" ? "✓" : s === "part" ? "•" : ""}</span>
            </button>
          );
        })}
      </div>
      <div className="x-tiles-key"><span><i className="is-won" />Quoted or signed</span><span><i className="is-done" />Done for today</span><span><i className="is-part" />Started</span><span><i className="is-todo" />To do</span></div>
    </div>
  );
}

// ---- the strategy: every lead type's cadence on one day axis (calls, emails, texts) -------------------
// zoom: day 0 gets its own column, its steps spread in order (now, 20 min, 30-60 min, 1-2 h, 4-6 pm)
const XSTRAT_FWD = ["IL", "RF", "PI", "QN", "CC", "LE"], XSTRAT_BACK = ["XD", "RI", "WB"];
function XCadence({ keys, lo, hi, title, sub, zoom, ticks }) {
  const [hov, setHov] = I.useState(null);
  const [box, W] = useBoxWidth(470);
  const narrow = W < 430, rowH = 34, L = narrow ? 92 : 128, R = 44, T = 8, B = 26, H = T + B + rowH * keys.length;
  const Z = zoom ? (narrow ? 55 : 89) : 0, a0 = L + (zoom ? Z + 13 : 0), lo2 = zoom ? 1 : lo;
  const sx = (d) => a0 + ((d - lo2) / (hi - lo2)) * (W - R - a0);
  const tk = ticks || [lo, hi];
  const chOf = (st) => (st.ch.length > 1 && st.ch[0] === "text" ? "text" : st.ch[0]);
  const mark = (ch, x, y) => {
    const c = XCOL[ch] || XCOL.call;
    if (ch === "email") return <rect x={x - 4.5} y={y - 4.5} width="9" height="9" rx="1.5" fill={c} stroke="#fff" strokeWidth="2" />;
    if (ch === "text") return <path d={`M${x},${y - 6}L${x + 6},${y + 4.5}L${x - 6},${y + 4.5}Z`} fill={c} stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />;
    return <circle cx={x} cy={y} r="5" fill={c} stroke="#fff" strokeWidth="2" />;
  };
  const when = (k, st) => {
    if (st.day > 0) return `day ${st.day}`;
    if (st.day < 0) return `${-st.day} days before`;
    const w = XWIN[st.win];
    return lo < 0 ? "on the date" : w && w.rel ? `day 0, ${w.label}` : st.win === "now" ? "day 0, right away" : st.win === "soon" ? "day 0, first open slot" : `day 0, ${w ? w.label : ""}`;
  };
  return (
    <figure className="x-chart x-cadence">
      {title && <div className="x-chart-title">{title}{sub && <span>{sub}</span>}</div>}
      <div className="x-chart-box" ref={box}>
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${title}: each lead type's steps by day`} onPointerLeave={() => setHov(null)}>
          {zoom && <g><rect x={L} y={T} width={Z} height={H - T - B} rx="3" fill="#F5F2EB" /><text x={L + Z / 2} y={H - 9} textAnchor="middle" className="x-ax">day 0</text></g>}
          {tk.map((d) => <g key={d}><line x1={sx(d)} x2={sx(d)} y1={T} y2={H - B} stroke={d === 0 && lo < 0 ? XCOL.axis : XCOL.grid} /><text x={sx(d)} y={H - 9} textAnchor="middle" className="x-ax">{d === 0 && lo < 0 ? "date" : d}</text></g>)}
          {keys.map((k, i) => {
            const y = T + rowH * i + rowH / 2, all = XSRC[k].steps;
            const inRange = all.filter((st) => st.day >= lo && st.day <= hi), later = all.filter((st) => st.day > hi);
            const d0 = zoom ? inRange.filter((st) => st.day === 0) : [];
            const byDay = {};
            return (
              <g key={k}>
                <text x={L - 8} y={y + 4} textAnchor="end" className="x-lab">{XSRC[k].label}</text>
                <line x1={zoom ? a0 : sx(lo)} x2={sx(hi)} y1={y} y2={y} stroke={XCOL.grid} />
                {inRange.map((st) => {
                  let x;
                  if (zoom && st.day === 0) { const j = d0.indexOf(st); x = L + 11 + (d0.length > 1 ? (j / (d0.length - 1)) * (Z - 22) : (Z - 22) / 2); }
                  else { const j = (byDay[st.day] = (byDay[st.day] || 0) + 1) - 1; x = sx(st.day) + j * 10; }
                  const ch = chOf(st), h = { k, st, x, y, ch };
                  return (
                    <g key={st.n} onPointerEnter={() => setHov(h)} onFocus={() => setHov(h)} onBlur={() => setHov(null)} tabIndex="0" aria-label={`${XSRC[k].label}, step ${st.n}: ${XCH[ch]}, ${st.what}, ${when(k, st)}`}>
                      <circle cx={x} cy={y} r="12" fill="transparent" />
                      {mark(ch, x, y)}
                    </g>
                  );
                })}
                {later.length > 0 && <text x={W - R + 6} y={y + 4} className="x-lab-sm">+{later.length} later</text>}
              </g>
            );
          })}
        </svg>
        {hov && <div className="x-tip" style={{ left: `${(hov.x / W) * 100}%`, top: `${(hov.y / H) * 100}%` }}><b>{XCH[hov.ch]}</b> {hov.st.what}<span>{XSRC[hov.k].label} · {when(hov.k, hov.st)}{hov.st.vm ? ` · voicemail ${hov.st.vm} sec` : ""}</span></div>}
      </div>
      <figcaption className="x-legend"><span><i className="x-key-dot" style={{ background: XCOL.call }} />Call</span><span><i className="x-key-sq" style={{ background: XCOL.email }} />Email</span><span><i className="x-key-tri" style={{ borderBottomColor: XCOL.text }} />Text, once they've talked to you</span></figcaption>
      <XTable caption={title} cols={["Lead type", "Steps"]} rows={keys.map((k) => [XSRC[k].label, XSRC[k].steps.map((st) => `${XCH[chOf(st)]} ${st.day < 0 ? "−" + -st.day : st.day}`).join(" · ")])} />
    </figure>
  );
}

// ---- a table view under every chart (the same numbers without the picture) ---------------------------
function XTable({ caption, cols, rows }) {
  return (
    <details className="x-table">
      <summary>Show as a table</summary>
      <table><caption>{caption}</caption><thead><tr>{cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
        <tbody>{rows.map((r, i) => <tr key={i}>{r.map((c, j) => (j ? <td key={j}>{c}</td> : <th key={j} scope="row">{c}</th>))}</tr>)}</tbody></table>
    </details>
  );
}
