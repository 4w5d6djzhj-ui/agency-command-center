// The day in one picture: every planned touch is a dot on the hour line, filled when done, ringed red
// when late, the now line moving across. A second's look says how the day is going; no words needed.
function XDayStrip({ pr, now, mix, clock }) {
  const [ref, W] = useBoxWidth(960);
  const H = 72, L = 16, R = 16, top = 14, bottom = 20, lo = XDAY.open, hi = XDAY.close;
  const sx = (m) => L + ((Math.min(hi, Math.max(lo, m)) - lo) / (hi - lo)) * (W - L - R);
  const touches = pr.plan.slice().sort((a, b) => a.slot - b.slot || a.id.localeCompare(b.id));
  const buckets = {};
  const dots = touches.map((t) => { const b = Math.floor(t.slot / 20); const i = (buckets[b] = (buckets[b] || 0) + 1) - 1; return { t, i }; });
  const rowH = (H - top - bottom - 10) / 3;
  const y = (i) => H - bottom - 7 - Math.min(i, 3) * rowH;
  const hours = W < 600 ? [9, 11, 13, 15, 17] : [9, 10, 11, 12, 13, 14, 15, 16, 17];
  const inDay = now >= lo && now <= hi;
  return (
    <div className="x-strip" ref={ref}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H} role="img" aria-label={`${touches.length} touches planned today, ${pr.doneNow} done, ${pr.behind} late`} style={{ display: "block" }}>
        <defs><pattern id="x-lunch-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="6" stroke="var(--line)" strokeWidth="1.5" /></pattern></defs>
        <g className="x-strip-lunch">
          <rect x={sx(XDAY.lunch[0])} y={top - 2} width={Math.max(0, sx(XDAY.lunch[1]) - sx(XDAY.lunch[0]))} height={H - bottom - top + 2} fill="url(#x-lunch-hatch)" rx="3" />
          {sx(XDAY.lunch[1]) - sx(XDAY.lunch[0]) > 44 && <text x={(sx(XDAY.lunch[0]) + sx(XDAY.lunch[1])) / 2} y={top + 9} textAnchor="middle" fontSize="9.5" fill="var(--ink-3)" fontFamily="IBM Plex Mono, monospace" letterSpacing=".06em">LUNCH</text>}
        </g>
        {xOpenBlocks(pr.day || { touches: pr.plan }).map((g, i) => (
          <g key={i} className="x-strip-open">
            <rect x={sx(g[0])} y={top - 2} width={Math.max(0, sx(g[1]) - sx(g[0]))} height={H - bottom - top + 2} fill="var(--paper-warm)" rx="3" />
            {sx(g[1]) - sx(g[0]) > 110 ? <text x={(sx(g[0]) + sx(g[1])) / 2} y={top + 9} textAnchor="middle" fontSize="9.5" fill="var(--ink-3)" fontFamily="IBM Plex Mono, monospace" letterSpacing=".06em">OPEN · 5-MIN WORK</text> : sx(g[1]) - sx(g[0]) > 36 ? <text x={(sx(g[0]) + sx(g[1])) / 2} y={top + 9} textAnchor="middle" fontSize="9.5" fill="var(--ink-3)" fontFamily="IBM Plex Mono, monospace" letterSpacing=".06em">OPEN</text> : null}
          </g>
        ))}
        <line x1={L} x2={W - R} y1={H - bottom} y2={H - bottom} stroke="var(--line)" />
        {hours.map((h) => (
          <g key={h}>
            <line x1={sx(h * 60)} x2={sx(h * 60)} y1={H - bottom - 3} y2={H - bottom + 3} stroke="var(--ink-4)" />
            <text x={sx(h * 60)} y={H - 5} textAnchor={h === hours[0] ? "start" : h === hours[hours.length - 1] ? "end" : "middle"} fontSize="10" fill="var(--ink-3)" fontFamily="IBM Plex Mono, monospace">{(h > 12 ? h - 12 : h) + (h >= 12 ? " PM" : " AM")}</text>
          </g>
        ))}
        {dots.map(({ t, i }) => {
          const d = XS.done[t.id], late = !d && t.slot <= now - 30, c = XCOL[t.ch];
          return (
            <circle key={t.id} cx={sx(t.slot)} cy={y(i)} r={5} fill={d ? c : "var(--surface)"} stroke={late ? "var(--signal)" : c} strokeWidth={late ? 2 : 1.5} className={"x-strip-dot" + (d ? " is-done" : late ? " is-late" : "")}>
              <title>{`${xFmt(t.slot)} · ${XCH[t.ch]} · ${t.lead.name}${d ? " · done" : late ? " · late" : ""}`}</title>
            </circle>
          );
        })}
        {inDay && (
          <g className="x-strip-now">
            <line x1={sx(now)} x2={sx(now)} y1={top - 6} y2={H - bottom} stroke="var(--signal)" strokeWidth="1.5" />
            <text x={sx(now)} y={top - 8 + 4} textAnchor="middle" fontSize="9.5" fontWeight="600" fill="var(--signal)" fontFamily="IBM Plex Mono, monospace" letterSpacing=".08em">NOW</text>
          </g>
        )}
      </svg>
      <div className="x-strip-cap">
        <span><b>{touches.length}</b> touches today · {mix.call} calls · {mix.text + mix.email} messages drafted for you · {XCOOL.length} cooler leads for open time{clock != null ? ` · demo clock ${xFmt(now)}` : ""} · <span className="greeting x-strip-model" title="The day's model: 20 prospects, 7 quotes, 4 applications, 2 households protected">{`${Ef.funnel.leads} prospects · ${Ef.funnel.quoted} quotes · ${Ef.funnel.apps} apps / ${Ef.funnel.households} HH protected`}</span></span>
        <span className="x-strip-key"><i style={{ background: XCOL.call }} />call <i style={{ background: XCOL.email }} />email <i style={{ background: XCOL.text }} />text <em>filled = done · red ring = late</em></span>
      </div>
    </div>
  );
}
