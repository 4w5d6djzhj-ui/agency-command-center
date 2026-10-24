// v9 checks: the v7 and v8 behaviors on the new lean Today, plus the v9 additions
// (compliance check with records, lanes, routine-only batch approve, coaching switch, help, charts).
import { chromium } from '/opt/npm-tools/node_modules/playwright/index.mjs';
const base = process.argv[2]; const b = await chromium.launch(); const bad = []; const ok = (c, m) => { if (!c) bad.push(m); };
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } }); const p = await ctx.newPage();
const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
await p.goto(base, { waitUntil: 'networkidle' });
const g = p.locator('button.gate-accept'); if (await g.count()) await g.click(); await p.waitForSelector('.topbar');
const txt = async (sel) => (await p.locator(sel).first().innerText().catch(() => '')).replace(/\s+/g, ' ').trim();
const wait = (ms = 200) => p.waitForTimeout(ms);
const demo = async () => { if (!(await p.locator('.x-demo-panel').count())) { await p.locator('.x-demo-btn').click(); await p.waitForTimeout(150); } };
const demoClose = async () => { if (await p.locator('.x-demo-panel').count()) { await p.keyboard.press('Escape'); await wait(120); } };
const view = async (l) => { await demo(); await p.locator('.x-viewbar button', { hasText: l }).click(); await wait(250); await demoClose(); };
const clock = async (l) => { await demo(); await p.locator('.x-clockbar button', { hasText: l }).click(); await wait(200); await demoClose(); };
const row = (name) => p.locator('.x-row').filter({ has: p.locator(`.x-name:text-is("${name}")`) });
const meter = async (label) => txt(`.x-meter:has(.x-meter-k:text-is("${label}")) .x-meter-v`);

// --- header and the Classic button top right
ok((await txt('.brand-text .sub')).toLowerCase() === 'hakobian strategic follow-up · hakobian automated coach', 'sub ' + await txt('.brand-text .sub'));
ok(/experience\s*&\s*judgment, at every team member's fingertips/.test(await txt('.brand-tagline')), 'tagline');
const cb = await p.locator('.x-demo-btn').boundingBox();
ok(cb && cb.x > 1440 * 0.8, 'demo button top right ' + JSON.stringify(cb));
ok((await p.locator('.x-viewbar').count()) === 0 && (await p.locator('.persona-switch').count()) === 0, 'no demo controls in the product header');

// --- compliance check: visible, 5 of 5, opens to the checks and the 20 consent records
ok(/Compliance check All clear · 5 of 5 passed/i.test(await txt('.x-comp summary')), 'comp pill ' + await txt('.x-comp summary'));
await p.locator('.x-comp > summary').first().click(); await wait();
ok((await p.locator('.x-comp[open] .x-comp-body > ul > li.ok').count()) === 5, 'comp 5 ok rows');
ok(/20 of 20 for email, 19 of 20 for text \(1 texted STOP today/.test(await txt('.x-comp[open] .x-comp-body')), 'comp consent line ' + await txt('.x-comp[open] .x-comp-body'));
ok(/STOP takes effect at once: 1 received today at 7:42 AM, texts suppressed in 4 seconds/.test(await txt('.x-comp[open] .x-comp-body')), 'stop line');
await p.locator('.x-comp[open] .x-comp-recs > summary').click(); await wait();
const recs = await p.$$eval('.x-comp[open] .x-comp-recs li', ls => ls.map(l => l.textContent));
ok(recs.length === 20 && recs.filter(r => /✓ Text · ✓ Email/.test(r)).length === 19 && recs.filter(r => /✕ Text \(STOP 7:42 AM\) · ✓ Email/.test(r)).length === 1 && recs.every(r => /\d|today/.test(r)), 'consent records ' + recs.length);
ok(!recs.some(r => /Opted in on the (first|intro) call/.test(r)), 'no verbal-only consent');
await p.locator('.x-comp > summary').first().click(); await wait();

// --- fixed clock, lanes
await clock('11:00 AM');
ok((await p.locator('.x-row').count()) === 20, 'rows ' + await p.locator('.x-row').count());
const lanes = await p.$$eval('.x-lane:not(.x-lane-done)', ls => ls.map(l => [l.querySelector('.x-group-title').textContent, l.querySelectorAll('.x-row').length]));
ok(lanes.length === 3 && lanes[0][0] === 'Your calls' && lanes[1][0] === 'Texts' && lanes[2][0] === 'Emails' && lanes[0][1] + lanes[1][1] + lanes[2][1] === 20, 'lanes ' + JSON.stringify(lanes));
ok(/^NOW CALL Priya Placeholder/i.test(await txt('.x-nowbar')), 'nowbar first ' + await txt('.x-nowbar'));
ok(/late|on track|ready/i.test(await txt('.x-status .x-andon')), 'status line ' + await txt('.x-status'));
ok(/0 \/ 30/.test(await meter('Touches')), 'touches start ' + await meter('Touches'));
ok(/0 handled/.test(await txt('.x-queue-head .count')), 'handled start');
ok((await p.locator('.x-board-process').count()) === 1 && (await p.locator('.x-board-results').count()) === 1, 'process before results');
const bx = await p.locator('.x-board-process').boundingBox(), rx = await p.locator('.x-board-results').boundingBox();
ok(bx.x < rx.x || bx.y < rx.y, 'process first');

// --- Priya: path, no voicemail on call one, no answer keeps her alive with the email next
const pathP = (await row('Priya Placeholder').locator('.x-path').innerText()).replace(/\s+/g, ' ');
ok(/CALL now → EMAIL [\d:]+ [AP]M → CALL [\d:]+ [AP]M → CALL [\d:]+ [AP]M/.test(pathP), 'priya path ' + pathP);
await row('Priya Placeholder').locator('.x-act').click(); await wait(150);
ok(/No voicemail on this call/i.test(await txt('.x-row.is-open .x-vm summary')), 'no voicemail on call one');
await p.locator('.x-row.is-open .x-outs .btn', { hasText: 'No answer' }).click(); await wait(300);
ok(/Email the quote/.test(await row('Priya Placeholder').locator('.x-row-step').innerText()), 'priya next step');
ok(/1 \/ 30/.test(await meter('Touches')), 'touches 1 ' + await meter('Touches'));
const openName = await txt('.x-row.is-open .x-name');
ok(openName === 'Ben Fixture', 'next open ' + openName);

// --- Ben: Signed (2 lines) -> handled, apps +2, households +1, quote +1
const apps0 = parseInt(await meter('Apps · week')), hh0 = parseInt(await meter('HH · week'));
await p.locator('.x-row.is-open .x-outs .btn', { hasText: 'Signed' }).click(); await wait(300);
ok(parseInt(await meter('Apps · week')) === apps0 + 2 && parseInt(await meter('HH · week')) === hh0 + 1, `signed apps ${await meter('Apps · week')} hh ${await meter('HH · week')}`);
ok(/^1 \//.test(await meter('Quotes today')), 'quote counted ' + await meter('Quotes today'));
ok((await row('Ben Fixture').count()) === 0, 'ben left the lanes');
ok(/Ben Fixture.*Signed/.test(await p.locator('.x-lane-done').textContent()), 'ben in handled');
ok(/1 handled/.test(await txt('.x-queue-head .count')), 'handled 1');
// undo puts Ben back
await p.locator('.x-lane-done > summary').click(); await wait(100);
await p.locator('.x-lane-done .x-done-row', { hasText: 'Ben Fixture' }).locator('.x-undo').click(); await wait(250);
ok((await row('Ben Fixture').count()) === 1, 'undo ben');

// --- messages: filled drafts with the facts marked; Hana (life) is checked by itself; Approve routine
const msgRows = await p.$$eval('.x-msgrow', rs => rs.map(r => [r.querySelector('.x-name').textContent, r.querySelector('.x-msg-peek') ? r.querySelector('.x-msg-peek').textContent : '', r.querySelector('.x-facts').textContent, !!r.querySelector('.x-alone')]));
ok(msgRows.length >= 5, 'message rows ' + msgRows.length);
ok(msgRows.every(([, peek]) => peek.length > 40 && !/__|\{|undefined|\?\./.test(peek)), 'drafts filled ' + msgRows.map(r => r[1].slice(0, 40)).join(' | '));
ok(msgRows.every(([, , f]) => /consent on file/.test(f)), 'facts show consent');
const alone = msgRows.filter(r => r[3]).map(r => r[0]);
ok(alone.length >= 1 && alone.every(n => n === 'Hana Template'), 'check-by-itself ' + alone.join(','));
const aa = await txt('.x-approve-all');
ok(/^Approve \d+ routine$/.test(aa), 'approve button ' + aa);
await p.locator('.x-approve-all').click(); await wait(300);
const left = await p.$$eval('.x-msgrow .x-name', ns => ns.map(n => n.textContent));
ok(left.length === alone.length && left.every(n => alone.includes(n)), 'after approve left ' + left.join(','));
ok(/approved message/.test(await txt('.x-lane-done .x-group-rule')), 'approved rule ' + await txt('.x-lane-done .x-group-rule'));
await p.locator('.x-comp > summary').first().click(); await wait();
ok(/(\d+) of \1 sends today show who approved them/.test(await txt('.x-comp[open] .x-comp-body')), 'approvals on record');
await p.locator('.x-comp > summary').first().click(); await wait();
// Hana alone: open, approve
await row('Hana Template').locator('.x-approve').click(); await wait(250);
ok(/Every text is checked/.test(await txt('.x-lane:has(.x-group-title:text-is("Texts"))')), 'texts lane empty');

// --- help (andon) and the coaching switch
await p.$$eval('details.x-later', ds => ds.forEach(d => { d.open = true; })); await wait(100); // Carla's call is in the afternoon window now
await row('Carla Stub').locator('.x-act').click(); await wait(150);
await p.locator('.x-row.is-open .x-help-btn').click(); await wait(150);
ok(/1 help asked/.test(await txt('.x-status')), 'help on status');
ok(/Help asked .* will see it here/.test(await txt('.x-row.is-open .x-help')), 'help on card');
const k1 = await p.$$eval('.x-howto .x-lever-knob', ks => ks.map(k => k.style.left).join(','));
const carlaStyle = await row('Carla Stub').locator('.style-pill').textContent();
const other = p.locator('.x-lane:not(.x-lane-done) .x-row:visible').filter({ hasNot: p.locator(`.style-pill:text-is("${carlaStyle}")`) }).first();
await other.locator('.x-row-main').click(); await wait(200);
const k2 = await p.$$eval('.x-howto .x-lever-knob', ks => ks.map(k => k.style.left).join(','));
ok(k1 && k2 && k1 !== k2, 'howto levers move');
await p.locator('.x-coach button', { hasText: 'Off' }).click(); await wait(200);
ok((await p.locator('.x-howto').count()) === 0 && (await p.locator('.x-lane:not(.x-lane-done) .x-group-rule').count()) === 0 && (await p.locator('.x-why-now').count()) === 0, `coach off hides tips ${await p.locator('.x-howto').count()} ${await p.locator('.x-lane:not(.x-lane-done) .x-group-rule').count()} ${await p.locator('.x-why-now').count()}`);
ok((await p.locator('.x-row').count()) > 0 && (await p.locator('.x-start-btn').count()) === 1, 'coach off keeps the layout');
await p.locator('.x-coach button', { hasText: 'On' }).click(); await wait(200);
ok((await p.locator('.x-howto').count()) === 1, 'coach on');

// --- focus mode + keyboard
await p.locator('.x-start-btn').click(); await wait(400);
ok((await p.locator('.x-focus').count()) === 1, 'focus open');
const t0 = await meter('Touches');
const n1 = await p.locator('.x-focus-name').innerText();
await p.keyboard.press('s'); await wait(300);
ok(n1 !== await p.locator('.x-focus-name').innerText(), 'skip moves on');
await p.evaluate(() => document.activeElement && document.activeElement.blur()); await p.keyboard.press('Enter'); await wait(300);
ok(parseInt(await meter('Touches')) === parseInt(t0) + 1, `enter logs ${t0} -> ${await meter('Touches')}`);
await p.keyboard.press('Escape'); await wait(200);
ok((await p.locator('.x-focus').count()) === 0, 'esc closes');

// --- classic and back
await view('Classic');
ok(/needs first touch/i.test(await p.locator('main').innerText()), 'classic view');
await view('Action queue');
ok((await p.locator('.x-lane').count()) >= 2, 'back to queue');

// --- Day plan: charts, pause points, commitments, strategy, evidence
await p.locator('.x-queue-foot .btn', { hasText: 'Start the day over' }).click(); await wait(200);
await view('Day plan');
ok((await p.locator('.x-progress svg').count()) >= 2, 'burn-up + hour bars');
ok((await p.locator('.x-strategy svg').count()) === 2, 'strategy charts');
ok((await p.locator('.x-progress table, .x-progress .x-table').count()) >= 1 || (await p.locator('.x-progress details').count()) >= 1, 'table twin');
const rh = (await p.locator('.x-rhythm').textContent()).replace(/\s+/g, ' ');
ok(/Start · huddle/.test(rh) && /Midday check/.test(rh) && /Wrap-up/.test(rh), 'pause points');
ok((await p.locator('.x-commit .x-ref').count()) === 1 && (await txt('.x-commit .x-ref')) === 'T35', 'T35 shown');
ok(/37 sources/.test(await txt('.x-sources .count')), 'sources ' + await txt('.x-sources .count'));
const refsUsed = await p.$$eval('.x-ref', rs => rs.map(r => r.textContent));
for (const k of ['T22', 'T26', 'T28', 'T33', 'T34', 'T35', 'T36', 'T37']) ok(refsUsed.includes(k), 'ref shown ' + k);
ok(!/T\d+\b/.test(await p.$$eval('.x-ref', rs => rs.filter(r => !r.title && !r.closest('.x-source-list')).map(r => r.textContent).join(' '))), 'every tag has its source');
// hover tooltip on the burn-up
const bu = p.locator('.x-progress svg').first(); const bb = await bu.boundingBox();
await p.mouse.move(bb.x + bb.width * 0.4, bb.y + bb.height * 0.5); await wait(150);
ok((await p.locator('.x-progress .x-tip').count()) >= 1, 'burn-up tooltip');

// --- after hours: no calls, email still goes
await clock('8:15 PM'); await wait(100);
ok(/Tomorrow, first thing/i.test(await txt('.x-timeline')), 'tomorrow block');
ok(/^NOW EMAIL/i.test(await txt('.x-nowbar')) || /^NEXT/i.test(await txt('.x-nowbar')), 'nowbar after hours ' + await txt('.x-nowbar'));
// plan vs usual + calculator
ok((await p.locator('.x-vs-row').count()) === 7, 'compare rows');
const calc = await txt('.x-calc-out');
ok(/686 leads per arm/.test(calc) && /57,763/.test(calc), 'calc ' + calc);
await p.locator('.x-calc-power button', { hasText: '90%' }).click(); await wait(100);
ok(/918 leads per arm/.test(await txt('.x-calc-out')), '90% power');

// --- Compose corner follows the hour
await clock('9:00 AM');
await p.locator('.tabs button:text-is("Compose")').click(); await wait(300);
await p.locator('#scenario-seg button', { hasText: 'Following up' }).click();
await p.locator('#style-seg button', { hasText: 'Questioner' }).click(); await wait(200);
ok(/^(BEST AT 10:00 AM CALL|NOW EMAIL)/i.test(await txt('.x-best')), 'corner 9:00 ' + await txt('.x-best'));
await p.locator('.tabs button:text-is("Today")').click(); await view('Day plan');
await clock('11:00 AM'); await p.locator('.tabs button:text-is("Compose")').click(); await wait(300);
ok(/^NOW (CALL|TEXT)/i.test(await txt('.x-best')), 'corner 11:00 ' + await txt('.x-best')); // calls and texts both run 10 to noon; the style breaks the tie
await p.locator('#scenario-seg button', { hasText: 'Raw new' }).click(); await wait(200);
ok(/^NOW CALL/i.test(await txt('.x-best')), 'corner raw ' + await txt('.x-best'));

// --- the second call to a new lead carries the first voicemail
await p.locator('.tabs button:text-is("Today")').click(); await view('Action queue');
await row('Priya Placeholder').locator('.x-act').click(); await wait(150);
await p.locator('.x-row.is-open .x-outs .btn', { hasText: 'No answer' }).click(); await wait(250);
await row('Priya Placeholder').locator('.x-approve').click(); await wait(250);
await p.$$eval('details.x-later', ds => ds.forEach(d => { d.open = true; })); await wait(100);
await row('Priya Placeholder').locator('.x-act').click(); await wait(150);
ok(/Leave a voicemail, about 15 seconds/i.test(await txt('.x-row.is-open .x-vm summary')), 'voicemail on call two ' + await txt('.x-row.is-open .x-vm summary'));

// --- Compose: every scenario x style x channel has 3 marked moves; Fit differs by style; levers move
let cells = 0;
await p.locator('.tabs button:text-is("Compose")').click(); await wait(400);
for (const sc of ['Raw new', 'Current customer', 'Win-back', 'X-date · not now', 'Following up']) {
  await p.locator('#scenario-seg button', { hasText: sc }).click(); await wait(150);
  const fits = new Set(), levers = new Set();
  for (const st of ['Storyteller', 'Questioner', 'Doer', 'Thinker']) {
    await p.locator('#style-seg button', { hasText: st }).click(); await wait(150);
    fits.add(await p.locator('.x-move-2 .val').innerText());
    levers.add(await p.$$eval('.x-why .x-lever-knob', ks => ks.map(k => k.style.left).join(',')));
    for (const ch of ['Email', 'SMS']) {
      await p.locator('.channel-toggle button', { hasText: ch }).click(); await wait(120);
      const m = await p.$$eval('.x-marked .x-mv', ms => ms.map(x => x.className.match(/x-mv-(\d)/)[1]).join(''));
      ok(m === '123', `${sc}/${st}/${ch} marks=${m}`);
      ok(!/\{(first|rep|proposed|current|send)\}/.test(await p.locator('.x-why').innerText()), `${sc}/${st} unfilled token`);
      cells++;
    }
  }
  ok(fits.size === 4, `${sc}: Fit repeats (${fits.size})`);
  ok(levers.size === 4, `${sc}: levers repeat (${levers.size})`);
}

// --- no AI words, no individual ranking on Today or the Day plan
const texts = [];
for (const t of ['Today', 'Compose', 'Live Coach', 'Retention', 'Triggers', 'Referrals', 'Manager', 'Discovery']) {
  await p.locator(`.tabs button:text-is("${t}")`).click(); await wait(200);
  if (t === 'Discovery') { await p.locator('main button', { hasText: 'Expand all' }).click().catch(() => {}); await wait(300); }
  texts.push(await p.locator('body').innerText());
}
const all = texts.join('\n');
for (const re of [/\bAI\b/, /AI-/, /artificial intelligence/i, /machine learning/i, /trained brain/i, /\(the brain\)/i]) ok(!re.test(all), 'found ' + re);
ok(!/leaderboard|\brank(ed|ing)?\b #?\d/i.test(texts[0]), 'no ranking on Today');
ok(errs.length === 0, 'errors: ' + errs.join(' | '));
console.log(`cells checked: ${cells}`);
console.log(bad.length ? 'PROBLEMS:\n' + bad.join('\n') : 'v9 checks: all passed'); await b.close();
