// Day plan: the whole day as the engine lays it out, the logic behind every touch, the plan vs. the
// usual day (process, computed on the same 20 people), and the test that would prove the close rate.

const XTAGLINE = "An agent's experience and judgment, at every team member's fingertips.";
const XRULES = [];
const XHOURS = [];
const XTEST = [];
const XDESIGN = [];
const XCLOCKS = [["Live", null], ["9:00 AM", 9 * 60], ["11:00 AM", 11 * 60], ["2:30 PM", 14 * 60 + 30], ["4:30 PM", 16 * 60 + 30], ["8:15 PM", 20 * 60 + 15]];

function XRefs({ ids }) {
  const list = (ids || []).filter((k, i, a) => k && XREF[k] && a.indexOf(k) === i);
  if (!list.length) return null;
  return <span className="x-refs">{list.map((k) => <span key={k} className="x-ref" title={XREF[k].s}>{k}</span>)}</span>;
}

function XClockBar() {
  const s = useXS();
  return (
    <div className="x-clockbar">
      <span className="x-viewbar-label">Clock</span>
      <div className="x-seg" role="group" aria-label="Demo clock">
        {XCLOCKS.map(([l, v]) => (
          <button key={l} className={s.clock === v ? "active" : ""} aria-pressed={s.clock === v} onClick={() => xSetClock(v)}>{l}</button>
        ))}
      </div>
    </div>
  );
}

function XPlanRow({ t, now }) {
  const lead = t.lead, d = XS.done[t.id];
  const v = { cls: d ? "is-done" : !t.tomorrow && t.slot <= now ? "is-due" : "" };
  return (
    <div className={`x-plan-row x-st-${lead.style} ${v.cls}`}>
      <div className="x-plan-time mono">{t.tomorrow ? "9:00 AM" : t.doneAt != null ? xFmt(t.slot) : t.wk === "now" ? (t.slot <= now ? "Now" : xFmt(t.slot)) : t.label}</div>
      <div className="x-plan-main">
        <div className="x-row-line1">
          <span className={`x-chip x-chip-${t.ch}`}>{XCH[t.ch]}</span>
          <span className="x-name">{lead.name}</span>
          <span className={`style-pill ${lead.style}`}>{rf[lead.style].label}</span>
          <span className="x-plan-src">{XSRC[lead.source].label}</span>
          {d && <span className="x-check">✓ {XOUT[d.k]}</span>}
          {XS.chan[t.id] && <span className="x-override" title="A team member changed the channel; the plan keeps the hour that fits it">changed by you</span>}
        </div>
        <div className="x-plan-step mono">{t.booked ? `Booked call · ${lead.at}` : `Step ${t.step.n} of ${t.p.N} · ${xDayLabel(lead)} · ${t.step.what}`}</div>
        {!d && !t.tomorrow && t.slot < now - 30 && (
          <label className="x-miss">Late · why?
            <select value={XS.miss[t.id] || ""} onChange={(e) => xSet((st) => ({ miss: { ...st.miss, [t.id]: e.target.value } }))}>
              {["", "On another call", "Waiting on them", "Walk-in or service", "Moved it on purpose", "Other"].map((o) => <option key={o} value={o}>{o || "Pick one"}</option>)}
            </select>
          </label>
        )}
        <div className="x-plan-why">{xTouchWhy(t)} <XRefs ids={[t.step.ref, t.chReason && /style rule/.test(t.chReason) ? t.p.style.ref : null, t.chReason === XSTYLE.noTextFirst ? "T10" : null, t.wk && XWIN[t.wk] && XWIN[t.wk].ref]} /></div>
      </div>
    </div>
  );
}

// Three pause points in the day, like a checklist read at natural breaks: start, midday, wrap-up.
function XRhythm({ day, now }) {
  const done = (t) => !!XS.done[t.id];
  const views = xLeadViews(day);
  const live = views.filter((v) => v.current);
  const overdue = live.filter((v) => !v.current.tomorrow && v.current.slot < now - 30).length;
  const touched = xScore(XS.done).touched;
  const left = day.touches.filter((t) => !done(t) && !t.tomorrow && t.slot >= now).length;
  const first = day.touches.filter((t) => !t.tomorrow).sort((a, b) => a.slot - b.slot)[0];
  const pts = [
    { at: 9 * 60, k: "Start · huddle", t: `${day.touches.length} touches planned, the first at ${first ? first.label === "Now" ? xFmt(Math.max(now, 9 * 60)) : first.label : "9:00 AM"}; ${XQ.filter((l) => l.seen != null && l.day === 0).length} new leads, ${XQ.filter((l) => l.at).length} booked calls${Object.keys(XS.help).length ? `, ${Object.keys(XS.help).length} help asked` : ""}. Read your two commitments. Nothing to sort or set up.`, ref: ["T26", "T35"] },
    { at: 12 * 60, k: "Midday check", t: overdue ? `${overdue} lead${overdue === 1 ? "" : "s"} with a touch past due by more than 30 minutes. They are at the top of the queue.` : "Nothing past due. Lunch is off; messages at 1, calls from 3.", ref: ["T18"] },
    { at: 17 * 60, k: "Wrap-up", t: `${touched} of ${XQ.length} touched${left ? `, ${left} touch${left === 1 ? "" : "es"} still ahead today` : ""}. Every lead already has its next step set.`, ref: ["T34"] },
  ];
  return (
    <div className="card x-rhythm">
      <div className="card-head"><span className="title">The day's three pause points</span><span className="count">{xFmt(now)}</span></div>
      <ol className="x-rhythm-list">
        {pts.map((p) => (
          <li key={p.k} className={now >= p.at && (p.at === 17 * 60 || now < p.at + 4 * 60) ? "is-now" : now > p.at ? "is-past" : ""}>
            <span className="x-rhythm-at mono">{xFmt(p.at)}</span><span className="x-rhythm-k">{p.k}</span><span className="x-rhythm-t">{p.t} <XRefs ids={p.ref} /></span>
            {p.at === 17 * 60 && <XReflect />}
          </li>
        ))}
      </ol>
    </div>
  );
}

// one line at the end of the day: what worked (kept in this browser only)
function XReflect() {
  const key = "acc.reflect." + new Date().toISOString().slice(0, 10);
  const [v, setV] = I.useState(() => { try { return window.localStorage.getItem(key) || ""; } catch (e) { return ""; } });
  return (
    <label className="x-reflect">One thing that worked today
      <input value={v} maxLength={140} placeholder="e.g. calling the new leads before the emails" onChange={(e) => { setV(e.target.value); try { window.localStorage.setItem(key, e.target.value); } catch (x) {} }} />
    </label>
  );
}

function XTestCalc() {
  const [base, setBase] = I.useState(10), [target, setTarget] = I.useState(15), [perDay, setPerDay] = I.useState(20), [agencies, setAgencies] = I.useState(1), [power, setPower] = I.useState(0.8);
  const n = xSampleSize(base / 100, target / 100, power);
  const rel = xSampleSize(base / 100, (base * 1.05) / 100, power);
  const perAll = Math.max(1, perDay * agencies);
  const days = n ? Math.ceil((2 * n) / perAll) : null, relDays = rel ? Math.ceil((2 * rel) / perAll) : null;
  // working days in plain words: days, then weeks (5 a week), then years (250 a year)
  const span = (d) => (d < 10 ? `${d} working day${d === 1 ? "" : "s"}` : d < 520 ? `about ${Math.round(d / 5)} weeks` : `about ${Math.round(d / 250)} years`);
  const num = (v, set, min, max, step) => <input type="number" className="x-num" value={v} min={min} max={max} step={step || 1} onChange={(e) => { const x = parseFloat(e.target.value); if (!isNaN(x)) set(Math.min(max, Math.max(min, x))); }} />;
  return (
    <div className="x-calc">
      <div className="x-calc-grid">
        <label>Close rate today (%){num(base, setBase, 1, 60, 0.5)}</label>
        <label>Close rate with the plan (%){num(target, setTarget, 1, 80, 0.5)}</label>
        <label>Leads a day per agency{num(perDay, setPerDay, 1, 500)}</label>
        <label>Agencies in the test{num(agencies, setAgencies, 1, 5000)}</label>
      </div>
      <div className="x-seg x-calc-power" role="group" aria-label="Power">
        {[[0.8, "80% power"], [0.9, "90% power"]].map(([v, l]) => <button key={l} className={power === v ? "active" : ""} aria-pressed={power === v} onClick={() => setPower(v)}>{l}</button>)}
      </div>
      {n ? (
        <div className="x-calc-out">
          <div><b className="x-calc-big">{n.toLocaleString()}</b> leads per arm · <b>{(2 * n).toLocaleString()}</b> in all</div>
          <div>{days.toLocaleString()} working day{days === 1 ? "" : "s"} ({span(days)}) at {perAll.toLocaleString()} leads a day, plus 45 days for the last leads to bind</div>
          <div className="x-calc-rel">“5% better” read as relative ({base}% → {(base * 1.05).toFixed(2).replace(/\.?0+$/, "")}%): <b>{rel ? rel.toLocaleString() : "—"}</b> per arm, {rel ? (2 * rel).toLocaleString() : "—"} in all{relDays ? `: ${span(relDays)} at this volume` : ""}.</div>
        </div>
      ) : <div className="x-calc-out">Set a plan rate above today's rate.</div>}
    </div>
  );
}

function XDayPlan({ persona }) {
  const s = useXS();
  if (!XS.seeded) { XS.seeded = true; if (!XFRESH) xSeedUpTo(XS.clock, true); }
  const [seed, setSeed] = I.useState(7);
  const now = xClock();
  const day = xBuildDay(XQ, now);
  const mix = { call: 0, text: 0, email: 0 };
  for (const t of day.touches) mix[t.ch]++;
  const byHour = {};
  const tomorrow = day.touches.filter((t) => t.tomorrow);
  const rightNow = day.touches.filter((t) => !t.tomorrow && t.wk === "now" && !XS.done[t.id]);
  for (const t of day.touches) { if (t.tomorrow || rightNow.includes(t)) continue; const h = Math.max(8, Math.min(20, Math.floor(t.slot / 60))); (byHour[h] = byHour[h] || []).push(t); }
  const hours = XHOURS.length ? XHOURS : Array.from({ length: 12 }, (_, i) => ({ h: 8 + i, label: "", why: "" }));
  const nowH = Math.floor(now / 60);
  const cmp = I.useMemo(() => xCompare(XQ, seed), [seed]);
  const people = new Set(day.touches.map((t) => t.lead.id)).size;
  const pr = xProgress(day, now);
  const order = xWorkOrder(pr.views, now);
  const next = order.find((v) => xIsDue(v.current, now)) || order[0] || null;
  return (
    <section className="view active x-plan">
      <div className="page-head">
        <div>
          <h1>The whole day, planned.</h1>
          <div className="greeting">{day.touches.length} touches for {people} people · {mix.call} calls · {mix.text} texts · {mix.email} emails. Different people get different channels, at different hours, in a different order.</div>
        </div>
        <div className="x-head-side"><XClockBar /><XCompliance day={day} /></div>
      </div>
      <div className="x-plan-grid">
        <div className="x-plan-main-col">
        <div className="card x-progress">
          <div className="card-head"><span className="title">Plan vs done</span><span className="count">{pr.doneNow} done · {pr.dueNow} planned by now · {pr.plan.length} today</span></div>
          <div className="x-progress-body">
            <XStatusLine pr={pr} next={next} now={now} onOpen={(id) => xSet({ view: "queue", open: id })} />
            <div className="x-chart-title">Through the day<span>touches done against the plan; the gap is how far behind or ahead <XRefs ids={["T33", "T28"]} /></span></div>
            <XBurnUp pr={pr} now={now} />
            <div className="x-chart-title">Hour by hour<span>planned and done in each hour, like a lean production board <XRefs ids={["T22", "T32"]} /></span></div>
            <XHourBars pr={pr} now={now} />
          </div>
        </div>
        <div className="card x-timeline">
          <div className="card-head"><span className="title">Today, hour by hour</span><span className="count">now {xFmt(now)}</span></div>
          {rightNow.length > 0 && (
            <div className="x-hour is-now x-hour-right-now">
              <div className="x-hour-head"><span className="x-hour-time mono">Now</span><span className="x-hour-label">New leads: the first call, inside a minute</span><span className="x-hour-why">{XWIN.now.why}. <XRefs ids={[XWIN.now.ref]} /></span></div>
              {rightNow.slice().sort((a, b) => xFreshKey(a.lead, now) - xFreshKey(b.lead, now)).map((t) => <XPlanRow key={t.id} t={t} now={now} />)}
            </div>
          )}
          {hours.map((hr) => {
            const rows = (byHour[hr.h] || []).slice().sort((a, b) => a.slot - b.slot);
            const isNow = nowH === hr.h;
            if ((hr.h >= 18 || hr.h < 9) && !rows.length) return null;
            return (
              <div key={hr.h} className={"x-hour" + (rows.length ? "" : " is-empty") + (isNow ? " is-now" : "")}>
                <div className="x-hour-head"><span className="x-hour-time mono">{xFmt(hr.h * 60)}</span><span className="x-hour-label">{hr.label}{isNow && <span className="x-now-tag">now</span>}</span><span className="x-hour-why">{hr.why} {hr.ref && <XRefs ids={[].concat(hr.ref)} />}</span></div>
                {rows.map((t) => <XPlanRow key={t.id} t={t} now={now} />)}
              </div>
            );
          })}
          {tomorrow.length > 0 && (
            <div className="x-hour is-now">
              <div className="x-hour-head"><span className="x-hour-time mono">9:00 AM</span><span className="x-hour-label">Tomorrow, first thing</span><span className="x-hour-why">After 8 pm, calls and texts wait for the morning; email can still go out. <XRefs ids={["T7"]} /></span></div>
              {tomorrow.map((t) => <XPlanRow key={t.id} t={t} now={now} />)}
            </div>
          )}
          <div className="x-queue-foot"><span>This is the same plan the Action queue runs. Change the clock, a lead's style or its consent, and the step, channel and hour move with it.</span></div>
        </div>
        </div>
        <div className="x-side x-plan-side">
          <XRhythm day={day} now={now} />
          <div className="card x-commit">
            <div className="card-head"><span className="title">This week's two commitments</span><span className="count">if-then</span></div>
            <ol className="x-rules">
              <li><div className="x-rule-t">If a new lead lands while I'm on a call, then I call it within five minutes of hanging up.</div></li>
              <li><div className="x-rule-t">If a quoted lead hasn't answered by day 3, then I call at 4 pm with their style's question.</div></li>
            </ol>
            <div className="x-commit-foot">Set in the weekly WIG session, written as "if X, then I'll do Y at a time." Demo examples. <XRefs ids={["T35"]} /></div>
          </div>
          <div className="card x-strategy">
            <div className="card-head"><span className="title">The strategy</span><span className="count">every lead type</span></div>
            <div className="x-strategy-body">
              <XCadence keys={XSTRAT_FWD} lo={0} hi={22} zoom ticks={[1, 5, 10, 15, 22]} title="From the first touch" sub="Day 0 opens up to show the minutes: call now, email at 20, call at 30–60 and 1–2 hours" />
              <XCadence keys={XSTRAT_BACK} lo={-60} hi={10} ticks={[-60, -45, -30, -21, -14, -7, 0, 10]} title="Around their date" sub="Days before and after the renewal date or the anniversary" />
              <div className="x-strategy-note">Same pace for every communication style; the style changes the words. Texts only once they've talked to you.</div>
            </div>
          </div>
          <div className="card">
            <div className="card-head"><span className="title">The formula</span><span className="count">{XRULES.length} rules</span></div>
            <ol className="x-rules">
              {XRULES.map((r, i) => <li key={i}><div className="x-rule-k">{r.k}</div><div className="x-rule-t">{r.t} <XRefs ids={r.ref} /></div></li>)}
            </ol>
          </div>
          <div className="card x-vs">
            <div className="card-head"><span className="title">The plan vs. the usual day</span><button className="btn ghost x-vs-shuffle" onClick={() => setSeed((x) => x + 1)}>Run another usual day</button></div>
            <div className="x-vs-body">
              <div className="x-vs-head"><span /><span>Usual day</span><span>Hakobian plan</span></div>
              {cmp.map((r, i) => (
                <div key={i} className="x-vs-row">
                  <div className="x-vs-lever">{r.k}</div>
                  <div className="x-vs-guess">{r.usual}</div>
                  <div className="x-vs-hak">{r.plan}</div>
                  <div className="x-vs-ev">{r.why}. <XRefs ids={r.ref} /></div>
                </div>
              ))}
              <div className="x-vs-note">Same 20 people, same day. The usual day is a model of a team member without a plan: starts at 9:15, works the list in whatever order it sits, checks the lead inbox every two hours, picks a channel out of habit (6 calls, 2–3 emails, 1–2 texts in 10), sends one template, stops after about two tries. These are process numbers, not results, and this usual day is generous: a secret shop of 25 insurers found 1.45 call attempts per lead and 2.3 days to a first call. Whether the plan closes more households is what the test below measures.</div>
            </div>
          </div>
          <div className="card x-test">
            <div className="card-head"><span className="title">How to prove it</span><span className="count">the test</span></div>
            <ol className="x-rules x-test-steps">
              {XTEST.map((t, i) => <li key={i}><div className="x-rule-t">{t}</div></li>)}
            </ol>
            <XTestCalc />
          </div>
          {XDESIGN.length > 0 && (
            <div className="card x-design">
              <div className="card-head"><span className="title">Built to need no training</span><span className="count">{XDESIGN.length} rules</span></div>
              <ol className="x-rules x-design-rules">
                {XDESIGN.map((r, i) => <li key={i}><div className="x-rule-k">{r.k}</div><div className="x-rule-t">{r.t} <XRefs ids={r.ref} /></div></li>)}
              </ol>
            </div>
          )}
          <div className="card x-sources">
            <div className="card-head"><span className="title">What the tags mean</span><span className="count">{Object.keys(XREF).length} sources</span></div>
            <ul className="x-source-list">
              {Object.values(XREF).map((r) => <li key={r.k}><span className="x-ref">{r.k}</span><span>{r.s}</span></li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
