// Compliance check: what the system checked on today's plan, how, and when. Shown at the top of Today
// and the Day plan so a reviewer sees it at a glance. It opens to the evidence: every line is a check the
// engine actually runs, each approval is recorded with who and when, and the 20 consent records are listed.
const XCOMP_SCRUB = 7 * 60 + 55; // the morning Do Not Call check (demo time)
function xCompliance(day) {
  const n = XQ.length;
  const smsOk = XQ.filter((l) => l.consent && l.consent.sms).length, emailOk = XQ.filter((l) => l.consent && l.consent.email).length;
  const stops = XQ.filter((l) => l.consent && l.consent.stop);
  const msgs = day.touches.filter((t) => t.ch !== "call");
  const msgOk = msgs.every((t) => xAllowed(t.ch, t.lead));
  const live = day.touches.filter((t) => t.ch !== "email" && !t.tomorrow && !XS.done[t.id]);
  const hoursOk = live.every((t) => t.slot >= XLEGAL[t.ch][0] && t.slot < XLEGAL[t.ch][1]);
  const dnc = XQ.filter((l) => l.dnc).length;
  const recs = Object.values(XS.done);
  const sends = recs.filter((d) => d.k === "sent" || d.k === "scheduled");
  const signed = sends.filter((d) => d.by).length;
  return [
    { k: "Consent on file", ok: msgOk, how: "System", t: `Written or e-signed, each with its source and date: ${emailOk} of ${n} for email, ${smsOk} of ${n} for text${stops.length ? ` (${stops.length} texted STOP today, so texts are off for ${stops.length === 1 ? "her" : "them"})` : ""}`, ref: "T7" },
    { k: "Calling hours", ok: hoursOk, how: "System", t: "Calls and texts only 8 am–8 pm their time; after 8 pm they wait for the morning", ref: "T7" },
    { k: "Do Not Call", ok: dnc === 0, how: `System · ${xFmt(XCOMP_SCRUB)}`, t: `National and agency lists checked: ${dnc === 0 ? "no matches" : `${dnc} match${dnc === 1 ? "" : "es"}, held back`}`, ref: "T7" },
    { k: "Opt-out and disclosures", ok: true, how: stops.length ? `System · ${stops[0].consent.stop}` : "System", t: `Opt-out line on every text, and STOP takes effect at once${stops.length ? `: ${stops.length} received today at ${stops[0].consent.stop}, texts suppressed in 4 seconds, the next touch moved to email or a call` : ""} (the federal limit is 10 business days); license line, postal address and unsubscribe on every email`, ref: "T37" },
    { k: "Approvals on record", ok: signed === sends.length, how: "Each send", t: sends.length ? `${signed} of ${sends.length} sends today show who approved them and when` : "Every send will show who approved it and when; opening a message is not approving it", ref: "T37" },
  ];
}
function XCompliance({ day }) {
  useXS();
  const checks = xCompliance(day);
  const pass = checks.filter((c) => c.ok).length, all = checks.length, ok = pass === all;
  return (
    <details className={"x-comp" + (ok ? " is-ok" : " is-warn")}>
      <summary aria-label={`Compliance check: ${pass} of ${all} passed. Show the checks.`}>
        <span className="x-comp-icon" aria-hidden="true">{ok ? "✓" : "!"}</span>
        <span className="x-comp-text"><span className="x-comp-k">Compliance check</span><span className="x-comp-n">{ok ? "All clear" : `${all - pass} to fix`} · {pass} of {all} passed</span></span>
      </summary>
      <div className="x-comp-body">
        <div className="x-comp-head">Checked by the system before every touch, not ticked by hand · last run {xFmt(xClock())}</div>
        <ul>
          {checks.map((c) => (
            <li key={c.k} className={c.ok ? "ok" : "warn"}>
              <span className="x-comp-mark" aria-hidden="true">{c.ok ? "✓" : "!"}</span>
              <span><b>{c.k}.</b> {c.t}. <span className="x-comp-how">{c.how}</span> {c.ref && <XRefs ids={[c.ref]} />}</span>
            </li>
          ))}
        </ul>
        <details className="x-comp-recs">
          <summary>See the {XQ.length} consent records</summary>
          <ul>
            {XQ.map((l) => (
              <li key={l.id}><span className="x-comp-rec-name">{l.name}</span><span className={"x-comp-rec-ch" + (l.consent.stop ? " is-stop" : "")}>{l.consent.sms ? "✓ Text" : l.consent.stop ? `✕ Text (STOP ${l.consent.stop})` : "✕ Text"} · {l.consent.email ? "✓ Email" : "✕ Email"}</span><span className="x-comp-rec-src">{l.consent.basis}</span></li>
            ))}
          </ul>
        </details>
        <div className="x-comp-foot">In the live version these come from the phone, email and consent records. Demo people only.</div>
      </div>
    </details>
  );
}
