// The four status components on the ads.css token layer (v18): Lozenge, ProgressTracker, SectionMessage,
// EmptyState. Status is always a word; color only supports it. Same class names in v1, v2 and Next Step.
// The v1 base has one light theme, so the page pins data-theme="light": the token layer's dark values apply
// only where a page has a dark theme of its own (data-theme="dark").
try { const de = document.documentElement; if (!de.hasAttribute("data-theme")) de.setAttribute("data-theme", "light"); } catch (e) {}

const XLZ_KINDS = ["information", "success", "warning", "danger", "discovery", "story", "asker", "doer", "thinker"];
// appearance: default · information · success · warning · danger · discovery · story · asker · doer · thinker
function Lozenge({ appearance, bold, children, title, className }) {
  const a = XLZ_KINDS.includes(appearance) ? " lz-" + appearance : "";
  return <span className={"lz" + a + (bold ? " bold" : "") + (className ? " " + className : "")} title={title}>{children}</span>;
}
// steps: [[key, label], ...] or [label, ...]; current: the index of the step on screen
function ProgressTracker({ steps, current }) {
  const list = (steps || []).map((s) => (Array.isArray(s) ? s : [s, s]));
  return (
    <ol className="pt" aria-label={`Step ${(current || 0) + 1} of ${list.length}`}>
      {list.map(([k, label], i) => (
        <li key={k} className={i < current ? "visited" : i === current ? "current" : ""} aria-current={i === current ? "step" : undefined}>{label}</li>
      ))}
    </ol>
  );
}
const XSM_ICON = { information: "i", discovery: "?", warning: "!", danger: "!", success: "✓" };
// one title, one line, one action ({ label, onClick })
function SectionMessage({ appearance, title, children, action }) {
  const a = XSM_ICON[appearance] ? appearance : "information";
  return (
    <div className={"sm sm-" + a} role={a === "warning" || a === "danger" ? "alert" : "note"}>
      <span className="sm-icon" aria-hidden="true">{XSM_ICON[a]}</span>
      <div>
        {title && <div className="sm-title">{title}</div>}
        <div className="sm-body">{children}</div>
        {action && <button type="button" className="sm-action" onClick={action.onClick}>{action.label}</button>}
      </div>
    </div>
  );
}
// a box that can be empty says what happens next
function EmptyState({ children, action }) {
  return (
    <div className="es">
      <div>{children}</div>
      {action && <button type="button" className="es-action" onClick={action.onClick}>{action.label}</button>}
    </div>
  );
}
// a communication-style chip as a lozenge in the style's color (the style-pill class stays as a hook)
function XStyleLz({ style, title }) {
  const st = rf[style];
  return <span className={`lz lz-${style} style-pill ${style}`} title={title || "Communication style"}>{st ? st.label : style}</span>;
}
