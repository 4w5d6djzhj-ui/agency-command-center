// v17 checks: the Workflow view (the default Today view): one status line and four boxes, a time box and
// three titled marks on every row, Check -> the card beneath the row -> Approve · sends h:mm -> "Approved",
// a call outcome strikes the row and folds it under Done today, the Now box and "Next →", the view switch,
// the ?view= parameter, reduced motion, phone order, no "AI" wording.
// Usage: node workflow-v17.mjs "http://127.0.0.1:4210/"   (the page root, no parameters)
import { chromium } from '/opt/npm-tools/node_modules/playwright/index.mjs';
const base = (process.argv[2] || 'http://127.0.0.1:4210/').replace(/\?.*$/, '');
const b = await chromium.launch(); const bad = []; let n = 0; const ok = (c, m) => { n++; if (!c) bad.push(m); };
const errs = [];
async function open(q, opts = {}) {
  const ctx = await b.newContext({ viewport: opts.phone ? { width: 390, height: 844 } : { width: 1440, height: 900 }, isMobile: !!opts.phone, hasTouch: !!opts.phone, deviceScaleFactor: opts.phone ? 2 : 1, reducedMotion: opts.reduce ? 'reduce' : 'no-preference' });
  const p = await ctx.newPage();
  p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  await p.goto(base + (q || ''), { waitUntil: 'networkidle' });
  const g = p.locator('button.gate-accept'); if (await g.count()) await g.click();
  await p.waitForSelector('.topbar'); await p.waitForTimeout(250);
  return p;
}
const txt = async (l) => (await l.first().innerText().catch(() => '')).replace(/\s+/g, ' ').trim();
const item = (p, id) => p.locator(`.x-wf-item[data-lead="${id}"]`);

// ---- 1. the default view, seeded 11:00 state: one line, four boxes, 28 rows
{
  const p = await open('');
  ok((await p.locator('section.x-wf').count()) === 1, 'default view is Workflow');
  ok((await txt(p.locator('.x-wf-line .x-viewswitch button.active'))) === 'Workflow', 'switch shows Workflow active');
  const sw = await p.$$eval('.x-wf-line .x-viewswitch button', bs => bs.map(x => x.textContent.trim()));
  ok(JSON.stringify(sw) === JSON.stringify(['Workflow', 'Classic', 'Action queue']), 'view switch order ' + JSON.stringify(sw));
  ok((await p.locator('main .x-wf-line').count()) === 1 && (await p.locator('.x-wf-line .x-status').count()) === 1 && (await p.locator('.x-wf-line .x-comp').count()) === 1 && (await p.locator('.x-wf-line .x-planlink').count()) === 1, 'one status line with compliance, switch and Day plan');
  ok((await p.locator('.x-wf > *').count()) === 2 && (await p.locator('.x-wf-grid > .card').count()) === 4, 'four boxes and nothing else ' + await p.locator('.x-wf-grid > .card').count());
  ok((await p.locator('main .x-strip, main .x-board, main .x-look, main .x-topgrid').count()) === 0, 'no strip, board or look in Workflow');
  const heads = await p.$$eval('.x-wf-grid > .card > .card-head .title', ts => ts.map(t => t.textContent.trim()));
  ok(JSON.stringify(heads) === JSON.stringify(["Today's prospects", 'Now', 'Needs first touch', 'Coming up']), 'box titles ' + JSON.stringify(heads));
  ok(/^28 today · \d+ small wins?$/.test(await txt(p.locator('.x-wf-list > .card-head .count'))), 'box 1 header ' + await txt(p.locator('.x-wf-list > .card-head .count')));
  ok((await p.locator('.x-wf-list .x-wf-item').count()) === 28, 'box 1 holds 28 rows ' + await p.locator('.x-wf-list .x-wf-item').count());
  ok(/^Done today \(\d+\)$/.test(await txt(p.locator('details.x-wf-done > summary'))), 'done fold ' + await txt(p.locator('details.x-wf-done > summary')));
  // every row: one time box, three marks in fixed order, each titled in words
  const rows = await p.$$eval('.x-wf-list .x-wf-row', rs => rs.map(r => ({ tb: r.querySelectorAll('svg.tb').length, tbTitle: (r.querySelector('svg.tb title') || {}).textContent || '', marks: [...r.querySelectorAll('svg.tbm')].map(m => [m.getAttribute('class').match(/tbm-(\w+)/)[1], (m.querySelector('title') || {}).textContent || '', m.getAttribute('aria-label') || '']) })));
  ok(rows.length === 28, 'rows ' + rows.length);
  ok(rows.every(r => r.tb === 1 && r.tbTitle.length > 6), 'one titled time box per row');
  ok(rows.every(r => r.marks.length === 3 && r.marks.map(m => m[0]).join() === 'email,text,ok' && r.marks.every(m => m[1].length > 6 && m[1] === m[2])), 'three titled marks per row in order');
  const nadia = await item(p, 'Q20').locator('svg.tbm-text title').textContent();
  ok(nadia === 'Texted STOP', 'STOP mark title ' + nadia);
  ok(/Text waits: after the first conversation/.test(await item(p, 'Q01').locator('svg.tbm-text title').textContent()), 'no text before the first conversation');
  ok(/^Compliance ✓: consent, hours and state rules/.test(await item(p, 'Q01').locator('svg.tbm-ok title').textContent()), 'compliance mark title');
  // buttons: Call on call rows, Check on message rows
  const btns = await p.$$eval('.x-wf-rows .x-wf-item', is => is.map(i => [i.querySelector('.x-wf-step').textContent, (i.querySelector('.x-wf-btn') || {}).textContent]));
  ok(btns.filter(([s]) => /^Call/.test(s)).every(([, x]) => x === 'Call') && btns.filter(([s]) => /^(Text|Email)/.test(s)).every(([, x]) => x === 'Check') && btns.some(([, x]) => x === 'Check'), 'Call / Check buttons ' + JSON.stringify(btns.slice(0, 6)));
  // golden split on a desk
  const L = await p.locator('.x-wf-list').boundingBox(), R = await p.locator('.x-wf-now').boundingBox();
  const ratio = L.width / (L.width + R.width);
  ok(Math.abs(ratio - 0.618) < 0.01 && Math.abs(R.x - (L.x + L.width) - 21) < 1.5, 'golden split ' + ratio.toFixed(3));
  // the Now box: one lead, the one button, a hero time box
  ok((await p.locator('.x-wf-now .x-wf-hero-name').count()) === 1 && (await p.locator('.x-wf-now svg.tb').count()) === 1, 'Now box: one lead, one box');
  const hero = await p.locator('.x-wf-now svg.tb').getAttribute('width');
  ok(Math.round(+hero) === 106, 'hero box h=55 (w 89 + depth) ' + hero);
  ok((await p.locator('.x-wf-soon svg.tb').count()) >= 1 && Math.round(+(await p.locator('.x-wf-soon svg.tb').first().getAttribute('width'))) === 66, 'Coming up boxes at h=34 (w 55 + depth)');
  // Day plan link and back
  await p.locator('.x-wf-line .x-planlink').click(); await p.waitForTimeout(250);
  ok((await p.locator('.x-plan').count()) === 1, 'Day plan opens');
  await p.locator('.x-backbar .x-planlink').click(); await p.waitForTimeout(250);
  ok((await p.locator('section.x-wf').count()) === 1, 'back to Workflow');
  // the Demo drawer lists the same three views, then the Day plan
  await p.locator('.x-demo-btn').click(); await p.waitForTimeout(150);
  const dv = await p.$$eval('.x-demo-panel .x-viewbar button', bs => bs.map(x => x.textContent.trim()));
  ok(JSON.stringify(dv) === JSON.stringify(['Workflow', 'Classic', 'Action queue', 'Day plan']), 'drawer views ' + JSON.stringify(dv));
  await p.locator('.x-demo-panel .x-viewbar button', { hasText: 'Classic' }).click(); await p.waitForTimeout(250);
  ok((await p.locator('.x-classic .today-grid').count()) === 1, 'Classic as built');
  await p.locator('.x-viewswitch button', { hasText: 'Action queue' }).click(); await p.waitForTimeout(250);
  ok((await p.locator('.x-lane').count()) >= 2, 'Action queue as built');
  await p.locator('.x-viewswitch button', { hasText: 'Workflow' }).click(); await p.waitForTimeout(250);
  ok((await p.locator('section.x-wf').count()) === 1, 'switch back to Workflow');
  // no AI wording on screen
  const body = await p.locator('body').innerText();
  ok(!/\bAI\b/.test(body) && !/\bai-/i.test(body), 'no AI strings');
  await p.context().close();
}

// ---- 2. fresh day: 20 open + 8 cooler; Check -> card beneath -> Approve · sends h:mm -> Approved
{
  const p = await open('?fresh=1');
  ok((await p.locator('.x-wf-rows > .x-wf-item').count()) === 20, 'fresh: 20 open rows ' + await p.locator('.x-wf-rows > .x-wf-item').count());
  ok((await p.locator('details.x-wf-cool .x-wf-item').count()) === 8 && /^8 cooler leads · open time/.test(await txt(p.locator('details.x-wf-cool > summary'))), 'fresh: 8 under the cooler fold');
  ok((await p.locator('details.x-wf-done').count()) === 0, 'fresh: nothing done');
  // a message that sends later today
  const msgIds = await p.$$eval('.x-wf-rows > .x-wf-item', is => is.filter(i => /^(Text|Email) · sends \d/.test(i.querySelector('.x-wf-step').textContent)).map(i => i.dataset.lead));
  ok(msgIds.length >= 1, 'a message row that sends later ' + msgIds.join());
  const id = msgIds[0], row = item(p, id);
  ok((await row.locator('.tb-badge').count()) === 1 && /check/i.test(await txt(row.locator('.tb-badge'))), 'ready-to-check badge under the box');
  await row.locator('.x-wf-btn', { hasText: 'Check' }).click(); await p.waitForTimeout(300);
  ok((await row.locator('.x-wf-card').count()) === 1 && (await p.locator('.x-wf-card').count()) === 1, 'Check opens one card');
  const rb = await row.locator('.x-wf-row').boundingBox(), cb = await row.locator('.x-wf-card').boundingBox();
  ok(cb.y >= rb.y + rb.height - 1 && Math.abs(cb.x - rb.x) < 80 && cb.width > rb.width * 0.8, 'the card is beneath the row');
  ok((await p.locator('.x-cwork').count()) === 0, 'no side panel');
  ok((await row.locator('.x-wf-draft mark').count()) >= 1, 'facts marked in the draft');
  const coach = (await row.locator('.x-wf-coach').textContent()).replace(/\s+/g, ' ').trim();
  ok(/^Why this draft · Hakobian Strategic Coaching: \S/.test(coach), 'coaching line ' + coach);
  const tl = await row.locator('.x-wf-tl li').count();
  ok(tl >= 2 && tl <= 3 && (await row.locator('.x-wf-tl li svg.tb').count()) === tl, 'timeline of time boxes ' + tl);
  const ap = await txt(row.locator('.x-wf-approve'));
  ok(/^Approve · sends \d{1,2}:\d{2} (AM|PM)$/.test(ap), 'approve label ' + ap);
  ok((await row.locator('.x-wf-acts .btn', { hasText: 'Edit' }).count()) === 1 && (await row.locator('.x-wf-acts .btn', { hasText: 'Skip' }).count()) === 1, 'Edit and Skip');
  await row.locator('.x-wf-acts .btn', { hasText: 'Edit' }).click(); await p.waitForTimeout(100);
  ok((await row.locator('textarea.x-wf-edit').count()) === 1, 'Edit opens the textarea in place');
  await row.locator('.x-wf-acts .btn', { hasText: 'Done editing' }).click(); await p.waitForTimeout(100);
  const sends = ap.replace('Approve · sends ', '');
  await row.locator('.x-wf-approve').click(); await p.waitForTimeout(300);
  ok((await txt(row.locator('.x-wf-step'))) === `Approved · ${sends}`, 'row reads Approved ' + await txt(row.locator('.x-wf-step')));
  ok(/tb-approved/.test(await row.locator('.x-wf-row svg.tb').getAttribute('class')) && /approved/.test(await row.locator('.x-wf-row svg.tb title').textContent()), 'approved box with its title');
  ok((await p.locator('.x-wf-item.is-open').count()) === 1 && (await row.locator('.x-wf-card').count()) === 0, 'card closed, the next row opened by itself');

  // ---- 3. a call outcome strikes the row, then folds it under Done today; Now shows "Next →"
  const first = await p.$$eval('.x-wf-rows > .x-wf-item', is => is.filter(i => /^Call/.test(i.querySelector('.x-wf-step').textContent)).map(i => i.dataset.lead)[0]);
  const crow = item(p, first);
  if (!(await crow.locator('.x-wf-card').count())) { await crow.locator('.x-wf-btn').click(); await p.waitForTimeout(250); }
  ok((await crow.locator('.x-wf-card .x-say li').count()) === 3 && (await crow.locator('.x-wf-card .x-timer').count()) === 1, 'call card: say-lines and timer');
  await crow.locator('.x-outs .btn', { hasText: 'Talked' }).click(); await p.waitForTimeout(120);
  ok((await p.locator(`.x-wf-rows > .x-wf-item.row-done-anim[data-lead="${first}"]`).count()) === 1, 'outcome strikes the row');
  const deco = await p.locator(`.x-wf-item[data-lead="${first}"] .x-name`).evaluate(e => getComputedStyle(e).textDecorationLine);
  ok(/line-through/.test(deco), 'struck through ' + deco);
  ok((await txt(p.locator('.x-wf-now .x-wf-hero-btn'))) === 'Next →' && (await p.locator('.x-wf-now .x-wf-hero-name').count()) === 1, 'Now box: one lead and Next →');
  await p.waitForTimeout(1300);
  ok((await p.locator(`.x-wf-rows [data-lead="${first}"]`).count()) === 0 && (await p.locator(`details.x-wf-done .x-wf-item[data-lead="${first}"]`).count()) === 1, 'folded under Done today');
  ok(/^Done today \(\d+\)$/.test(await txt(p.locator('details.x-wf-done > summary'))), 'Done today count');
  const heroName = await txt(p.locator('.x-wf-now .x-wf-hero-name'));
  await p.locator('.x-wf-now .x-wf-hero-btn').click(); await p.waitForTimeout(400);
  ok((await txt(p.locator('.x-wf-item.is-open .x-name'))) === heroName, 'Next → opens the next due row ' + heroName);
  ok((await txt(p.locator('.x-wf-now .x-wf-hero-btn'))) !== 'Next →', 'Next → is used once');
  // undo from the fold puts it back
  await p.locator('details.x-wf-done > summary').click(); await p.waitForTimeout(100);
  await p.locator(`details.x-wf-done .x-wf-item[data-lead="${first}"] .x-wf-undo`).click(); await p.waitForTimeout(250);
  ok((await p.locator(`.x-wf-rows [data-lead="${first}"]`).count()) === 1, 'undo brings the row back');
  // a cooler lead: open, mark done
  await p.locator('details.x-wf-cool > summary').click(); await p.waitForTimeout(100);
  const cool = p.locator('details.x-wf-cool .x-wf-item').first();
  await cool.locator('.x-wf-btn').click(); await p.waitForTimeout(200);
  await cool.locator('.x-wf-card .btn', { hasText: 'Mark done' }).click(); await p.waitForTimeout(200);
  ok(/^Done · /.test(await txt(cool.locator('.x-wf-step'))) && /1 done/.test(await txt(p.locator('details.x-wf-cool > summary'))), 'cooler lead counted');
  const body = await p.locator('body').innerText();
  ok(!/\bAI\b/.test(body) && !/\bai-/i.test(body), 'no AI strings with the cards open');
  await p.context().close();
}

// ---- 4. the ?view= parameter, with and without ?fresh=1
{
  const p = await open('?view=classic');
  ok((await p.locator('.x-classic').count()) === 1, '?view=classic');
  await p.goto(base + '?fresh=1&view=queue', { waitUntil: 'networkidle' }); await p.waitForTimeout(250);
  ok((await p.locator('.x-lane').count()) >= 2 && /0 handled/.test(await txt(p.locator('.x-queue-head .count'))), '?fresh=1&view=queue');
  await p.goto(base + '?view=workflow', { waitUntil: 'networkidle' }); await p.waitForTimeout(250);
  ok((await p.locator('section.x-wf').count()) === 1, '?view=workflow');
  await p.context().close();
}

// ---- 5. motion: a due box pulses once; reduced motion turns the pulse off
{
  const probe = (p) => p.evaluate(() => { const d = document.createElement('div'); d.innerHTML = '<svg class="tb tb-due" width="10" height="10"></svg>'; document.body.appendChild(d); const a = getComputedStyle(d.firstChild).animationName; d.remove(); return a; });
  const p = await open('?fresh=1');
  ok((await probe(p)) === 'tb-pulse', 'due box pulse ' + await probe(p));
  await p.waitForTimeout(1900);
  const still = await p.$$eval('.x-wf svg.tb-due', ss => ss.map(s => getComputedStyle(s).animationName));
  ok(still.length > 0 && still.every(a => a === 'none'), 'one pulse, then steady');
  await p.context().close();
  const r = await open('?fresh=1', { reduce: true });
  ok((await probe(r)) === 'none', 'reduced motion: no pulse');
  const due = await r.$$eval('.x-wf svg.tb-due', ss => ss.map(s => getComputedStyle(s).animationName));
  ok(due.length > 0 && due.every(a => a === 'none'), 'reduced motion: due boxes still');
  await r.context().close();
}

// ---- 6. phone: stacked Now, Today's prospects, Needs first touch, Coming up; no sideways scroll
{
  const p = await open('', { phone: true });
  const ys = [];
  for (const s of ['.x-wf-now', '.x-wf-list', '.x-wf-first', '.x-wf-soon']) ys.push((await p.locator(s).boundingBox()).y);
  ok(ys[0] < ys[1] && ys[1] < ys[2] && ys[2] < ys[3], 'phone order ' + ys.map(Math.round).join(','));
  ok((await p.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)) === 0, 'phone overflow');
  const r = item(p, 'Q01');
  await r.locator('.x-wf-btn').click(); await p.waitForTimeout(300);
  ok((await r.locator('.x-wf-card').count()) === 1 && (await p.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)) === 0, 'phone card beneath the row, no overflow');
  await p.context().close();
}

ok(errs.length === 0, 'errors: ' + errs.join(' | '));
console.log(`workflow-v17: ${n - bad.length} of ${n} checks passed`);
console.log(bad.length ? 'PROBLEMS:\n' + bad.join('\n') : 'workflow-v17 checks: all passed'); await b.close();
process.exit(bad.length ? 1 : 0);
