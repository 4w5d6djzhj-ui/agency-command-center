// The time box · one SVG for v1, v2 and the Next Step tool. Keep the three copies identical.
// timeBoxSVG(opts) -> string of <svg>. Cabinet-style oblique box: the front face is a golden rectangle
// (w = φ·h), the depth is h/φ, receding at 45° and drawn at half length, so the top and right faces read.
// opts: { h: 21|34|55, ch: 'call'|'text'|'email', label: '3:00', sub: 'PM', frac: 0..1,
//         state: 'planned'|'due'|'ready'|'approved'|'done'|'blocked', title: 'Call · 3:00 PM · due now' }
const TB_PHI = 1.618;
const TB_COLORS = {
  call:  { c: "#1F6FD1", top: "#8FB7EA", front: "#E1ECFB", right: "#174F93" },
  text:  { c: "#178A5B", top: "#8BC9AC", front: "#DFF3E8", right: "#116543" },
  email: { c: "#B8640F", top: "#DCB086", front: "#FBEBD9", right: "#8A4A0B" },
  ok:    { c: "#2E7D4F", top: "#95C2A6", front: "#DFF3E8", right: "#225C3B" },
  bad:   { c: "#8C2F39", top: "#C59299", front: "#F6E3E5", right: "#66222A" },
};
const TB_GLYPH = {
  // 24×24 line glyphs, white, 2-px strokes, upright on the top face
  call: '<path d="M6 3h4l2 5-2.5 1.5a11 11 0 0 0 5 5L16 12l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2z"/>',
  text: '<path d="M4 5h16v10H9l-5 4z"/>',
  email: '<path d="M3 6h18v12H3z M3 6l9 7 9-7"/>',
};
function timeBoxSVG(o) {
  const h = o.h || 21, w = Math.round(h * TB_PHI), d = h / TB_PHI, dx = d * 0.5, dy = d * 0.5;
  const st = o.state || "planned";
  const pal = TB_COLORS[st === "done" ? "ok" : st === "blocked" ? "bad" : (o.ch || "call")] || TB_COLORS.call;
  const done = st === "done";
  const H = done ? Math.round(h / TB_PHI) : h;           // a done box collapses to a slab
  const W = w + dx, VH = H + dy, x0 = 0, y0 = dy;       // front face at (0, dy)
  const frac = done || st === "blocked" ? 0 : Math.max(0, Math.min(1, o.frac || 0));
  const fillH = frac * H;
  const top = `${x0},${y0} ${x0 + w},${y0} ${x0 + w + dx},${y0 - dy} ${x0 + dx},${y0 - dy}`;
  const right = `${x0 + w},${y0} ${x0 + w + dx},${y0 - dy} ${x0 + w + dx},${y0 - dy + H} ${x0 + w},${y0 + H}`;
  const small = h <= 21;
  const fs = small ? 9.5 : h <= 34 ? 13 : 21;           // label size: Fibonacci-ish steps
  // the fill rises behind the label; at row size it is a tint so the small digits never straddle a dark edge
  const inkOnFill = !small && frac > 0.55;
  const fillOpacity = small ? 0.38 : 1;
  const labelColor = done || st === "blocked" ? "#fff" : inkOnFill ? "#fff" : "#1A2330";
  const label = done ? "" : st === "blocked" ? "" : (o.label || "");
  const sub = done || st === "blocked" ? "" : (o.sub || "");
  const glyph = !small && TB_GLYPH[o.ch] ? `<g transform="translate(${x0 + dx / 2 + w / 2 - dy * 0.375},${y0 - dy + dy * 0.125}) scale(${(dy * 0.75) / 24})" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" stroke-linecap="round">${TB_GLYPH[o.ch]}</g>` : "";
  const mark = st === "approved" || done ? "✓" : st === "blocked" ? "!" : "";
  const markSize = small ? 9 : h <= 34 ? 13 : 21;
  const markEl = mark ? `<text x="${done ? x0 + w / 2 : x0 + w + dx / 2}" y="${done ? y0 + H / 2 + markSize * 0.36 : y0 + H / 2 + markSize * 0.36 - dy / 2}" text-anchor="middle" font-size="${done ? markSize * 1.3 : markSize}" font-weight="700" fill="#fff" font-family="var(--mono, ui-monospace, monospace)">${mark}</text>` : "";
  const title = o.title || "";
  return `<svg class="tb tb-${st} tb-${o.ch || "call"}" viewBox="0 0 ${W} ${VH}" width="${W}" height="${VH}" role="img" aria-label="${title}"${title ? ` data-title="${title}"` : ""}>${title ? `<title>${title}</title>` : ""}
<polygon class="tb-top" points="${top}" fill="${pal.top}"/>
<polygon class="tb-right" points="${right}" fill="${pal.right}"/>
<rect class="tb-front" x="${x0}" y="${y0}" width="${w}" height="${H}" fill="${done || st === "blocked" ? pal.c : pal.front}"/>
${fillH > 0 ? `<rect class="tb-fill" x="${x0}" y="${y0 + H - fillH}" width="${w}" height="${fillH}" fill="${pal.c}" fill-opacity="${fillOpacity}"/><rect x="${x0}" y="${y0 + H - fillH}" width="${w}" height="1" fill="${pal.right}" opacity=".6"/>` : ""}
<rect class="tb-ring" x="${x0 + 0.5}" y="${y0 + 0.5}" width="${w - 1}" height="${H - 1}" fill="none" stroke="${pal.right}" stroke-opacity=".35"/>
${label ? (() => {
    // label and sub laid out as one group, centered on the front face (mono: ~0.6 em per character)
    const lw = label.length * fs * 0.6, sw = sub ? sub.length * fs * 0.55 * 0.6 + fs * 0.2 : 0;
    const start = x0 + w / 2 - (lw + sw) / 2, halo = inkOnFill ? pal.right : "#fff";
    return `<text class="tb-label" x="${start}" y="${y0 + H / 2 + fs * 0.36}" font-size="${fs}" font-weight="500" fill="${labelColor}" stroke="${halo}" stroke-width="${fs * 0.18}" stroke-linejoin="round" paint-order="stroke" font-family="var(--mono, ui-monospace, monospace)">${label}</text>` +
      (sub ? `<text class="tb-sub" x="${start + lw + fs * 0.2}" y="${y0 + H / 2 + fs * 0.36}" font-size="${fs * 0.55}" fill="${labelColor}" stroke="${halo}" stroke-width="${fs * 0.12}" paint-order="stroke" font-family="var(--mono, ui-monospace, monospace)">${sub}</text>` : "");
  })() : ""}
${glyph}${markEl}</svg>`;
}
// The marks: the 13-px cube family. markSVG({ kind: 'email'|'text'|'ok', on: true|false, barred: false, title })
function markSVG(o) {
  const h = 8, w = 13, d = 5, dx = 2.5, dy = 2.5, W = w + dx, VH = h + dy, y0 = dy;
  const pal = TB_COLORS[o.kind === "ok" ? "ok" : o.kind] || TB_COLORS.ok;
  const on = !!o.on;
  const top = `0,${y0} ${w},${y0} ${w + dx},${y0 - dy} ${dx},${y0 - dy}`;
  const right = `${w},${y0} ${w + dx},${y0 - dy} ${w + dx},${y0 - dy + h} ${w},${y0 + h}`;
  const body = on
    ? `<polygon points="${top}" fill="${pal.top}"/><polygon points="${right}" fill="${pal.right}"/><rect x="0" y="${y0}" width="${w}" height="${h}" fill="${pal.c}"/><path d="M3.2 ${y0 + 4.2} l2.4 2.4 l4.4 -4.6" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>`
    : `<polygon points="${top}" fill="none" stroke="${pal.c}" stroke-width=".9" stroke-opacity=".55"/><polygon points="${right}" fill="none" stroke="${pal.c}" stroke-width=".9" stroke-opacity=".55"/><rect x=".45" y="${y0 + 0.45}" width="${w - 0.9}" height="${h - 0.9}" fill="none" stroke="${pal.c}" stroke-width=".9" stroke-opacity=".7"/>${o.barred ? `<path d="M1.5 ${y0 + h - 1.5} L${w - 1.5} ${y0 + 1.5}" stroke="${pal.c}" stroke-width="1.2" stroke-linecap="round"/>` : ""}`;
  return `<svg class="tbm tbm-${o.kind}${on ? " on" : ""}" viewBox="0 0 ${W} ${VH}" width="${W}" height="${VH}" role="img" aria-label="${o.title || ""}"><title>${o.title || ""}</title>${body}</svg>`;
}

// ---- React wrappers (the site's bundle: I = React) -------------------------------------------------
// titles go into SVG attributes and <title>, so they are escaped once here; the generators stay verbatim
function xTbEsc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
// A due box pulses once (1.618 s) when it becomes due, then holds still: the clock re-renders the SVG as
// its fill rises, and a fresh SVG would otherwise pulse again. The fill moves in 55 steps.
function XTimeBox({ h, ch, label, sub, frac, state, title, badge }) {
  const [still, setStill] = I.useState(false);
  I.useEffect(() => {
    if (state !== "due") return undefined;
    setStill(false);
    const id = setTimeout(() => setStill(true), 1700);
    return () => clearTimeout(id);
  }, [state]);
  const q = Math.round(Math.max(0, Math.min(1, frac || 0)) * 55) / 55;
  const html = timeBoxSVG({ h: h || 21, ch: ch || "call", label: label || "", sub: sub || "", frac: q, state: state || "planned", title: xTbEsc(title) })
    + (badge ? `<span class="tb-badge" aria-hidden="true">${xTbEsc(badge)}</span>` : "");
  return <span className={"tb-wrap" + (still ? " tb-still" : "")} dangerouslySetInnerHTML={{ __html: html }} />;
}

// The three marks per lead, in a fixed order: Email ready · Text ready · Compliance ✓. Read from the same
// consent records and checks the engine and the compliance check use; nothing new is decided here.
function xMarks(lead, v) {
  const c = lead.consent || {};
  const first = xFirst(lead.name);
  const email = c.email
    ? { kind: "email", on: true, title: "Email ready: OK on file" }
    : { kind: "email", on: false, title: "Email waits: no OK on file" };
  const talked = !!lead.contacted || !!(v && v.p && v.p.contacted);
  const text = c.stop
    ? { kind: "text", on: false, barred: true, title: "Texted STOP" }
    : !c.sms
      ? { kind: "text", on: false, barred: true, title: "Text waits: no OK on file" }
      : !talked
        ? { kind: "text", on: false, title: "Text waits: after the first conversation" }
        : { kind: "text", on: true, title: "Text ready: OK on file" };
  // compliance for this lead today: every message touch inside its consent, every open call and text inside
  // the legal hours for the state, nothing to a Do Not Call number (the checks xCompliance runs for the day)
  const ts = v ? v.ts : [];
  const consentOk = ts.filter((t) => t.ch !== "call").every((t) => xAllowed(t.ch, lead));
  const hoursOk = ts.filter((t) => t.ch !== "email" && !t.tomorrow && !XS.done[t.id]).every((t) => t.slot >= XLEGAL[t.ch][0] && t.slot < XLEGAL[t.ch][1]);
  const dncOk = !lead.dnc;
  const okAll = consentOk && hoursOk && dncOk;
  const why = !consentOk ? "a touch has no consent on file" : !hoursOk ? "a touch sits outside the legal hours" : "on the Do Not Call list";
  const comp = okAll
    ? { kind: "ok", on: true, title: `Compliance ✓: consent, hours and state rules (${xState().label}) checked for ${first} today` }
    : { kind: "ok", on: false, title: `Compliance: needs a look, ${why}` };
  return [email, text, comp];
}
function XMarks({ lead, v }) {
  const ms = xMarks(lead, v);
  const html = `<span class="tbm-row">${ms.map((m) => markSVG({ kind: m.kind, on: m.on, barred: m.barred, title: xTbEsc(m.title) })).join("")}</span>`;
  return <span className="tb-wrap x-marks" role="group" aria-label={ms.map((m) => m.title).join(" · ")} dangerouslySetInnerHTML={{ __html: html }} />;
}
