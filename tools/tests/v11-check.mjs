import { chromium } from '/opt/npm-tools/node_modules/playwright/index.mjs';
const base = process.argv[2]; const b = await chromium.launch(); const bad = []; const ok = (c, m) => { if (!c) bad.push(m); };
const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
await p.goto(base, { waitUntil: 'networkidle' });
const g = p.locator('button.gate-accept'); if (await g.count()) await g.click(); await p.waitForSelector('.topbar');
const txt = async (sel) => (await p.locator(sel).first().innerText().catch(() => '')).replace(/\s+/g, ' ').trim();
const meter = async (label) => txt(`.x-meter:has(.x-meter-k:text-is("${label}")) .x-meter-v`);
const num = (s) => parseInt(s);
// opens at 11:00 with the morning done
ok(/demo clock 11:00 AM/.test(await txt('.x-strip-cap')), 'opens at 11 ' + await txt('.x-strip-cap'));
ok(num(await meter('Touches')) >= 8, 'touches seeded ' + await meter('Touches'));
ok(num(await meter('Calls')) >= 3, 'calls seeded ' + await meter('Calls'));
ok(num(await meter('Quotes today')) >= 1, 'quote seeded ' + await meter('Quotes today'));
ok(/On track|running late/.test(await txt('.x-status')), 'status ' + await txt('.x-status'));
ok(/\d+ handled/.test(await txt('.x-queue-head .count')), 'handled seeded ' + await txt('.x-queue-head .count'));
ok((await p.locator('.x-strip-dot.is-done').count()) >= 8, 'strip filled dots');
ok((await p.locator('.x-strip-open').count()) >= 2, 'strip open bands');
// five-minute framing
ok((await p.locator('.x-row .x-mins').count()) >= 10, 'five-minute chips');
ok(/of 5:00/.test(await txt('.x-row.is-open .x-timer')), 'timer on the open card ' + await txt('.x-row.is-open .x-timer'));
ok(/Next 5 minutes|Start the next 5 minutes/.test(await txt('.x-start-btn')), 'start button ' + await txt('.x-start-btn'));
// open time: blocks and tasks, one tap counts
ok((await p.locator('.x-open-block:not(.x-cool)').count()) === 3, 'open blocks ' + await p.locator('.x-open-block:not(.x-cool)').count());
ok((await p.locator('.x-open-block:not(.x-cool) .x-open-list li').count()) >= 7, 'open tasks ' + await p.locator('.x-open-block:not(.x-cool) .x-open-list li').count());
// eight cooler leads for any open minute, one tap each, counted on the board
await p.$$eval('details.x-cool', ds => ds.forEach(d => { d.open = true; })); await p.waitForTimeout(100);
ok((await p.locator('.x-cool li').count()) === 8 && (await p.locator('details.x-cool').count()) === 3, 'cooler leads in three lanes ' + await p.locator('.x-cool li').count());
ok((await p.locator('.x-lane:has(.x-group-title:has-text("Your calls")) .x-cool li').count()) === 3, 'cooler calls in the calls lane');
ok(/0 \/ 8/.test(await meter('Cooler')), 'cooler meter ' + await meter('Cooler'));
await p.locator('.x-cool .x-open-check').first().click(); await p.waitForTimeout(150);
ok(/1 \/ 8/.test(await meter('Cooler')) && (await p.locator('.x-cool li.is-done').count()) === 1, 'cooler lead counted ' + await meter('Cooler'));
ok(/x-chip-(call|email|text)/.test(await p.locator('.x-cool li').first().innerHTML()), 'cooler lead has a channel');
const nina = p.locator('.x-cool li', { hasText: 'Nina Lorem' });
ok((await nina.locator('.x-chip-email').count()) === 1 && (await nina.locator('.x-chip-text').count()) === 0, 'no text to a lead without text consent');
ok(/0 \/ [78]/.test(await meter('Proactive')), 'proactive 0 ' + await meter('Proactive'));
await p.locator('.x-open .x-open-check').first().click(); await p.waitForTimeout(150);
ok(/1 \/ [78]/.test(await meter('Proactive')) && /1 of [78]/.test(await txt('.x-open .count')), 'proactive counted');
ok((await p.locator('.x-open .x-open-list li.is-done').count()) === 1, 'task marked done');
// the clock bar reseeds: 9:00 is a fresh day, 2:30 has more done
await p.locator('.x-demo-btn').click(); await p.waitForTimeout(150);
await p.locator('.x-clockbar button', { hasText: '2:30 PM' }).click(); await p.waitForTimeout(250);
await p.keyboard.press('Escape'); await p.waitForTimeout(150);
const t230 = num(await meter('Touches'));
ok(t230 >= 12, 'more done at 2:30 ' + t230);
await p.locator('.x-queue-foot .btn', { hasText: 'Start the day over' }).click(); await p.waitForTimeout(250);
ok(/demo clock 9:00 AM/.test(await txt('.x-strip-cap')) && num(await meter('Touches')) === 0 && /0 \/ [78]/.test(await meter('Proactive')) && /0 \/ 8/.test(await meter('Cooler')), 'start over = fresh 9:00 ' + await txt('.x-strip-cap') + ' ' + await meter('Touches'));
ok(/Start the next 5 minutes/.test(await txt('.x-start-btn')), 'fresh start button');
// phone: no overflow with the new card
const m = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true }); const q = await m.newPage();
await q.goto(base, { waitUntil: 'networkidle' }); const g2 = q.locator('button.gate-accept'); if (await g2.count()) await g2.click(); await q.waitForSelector('.topbar'); await q.waitForTimeout(400);
ok((await q.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)) === 0, 'phone overflow');
ok(errs.length === 0, 'errors: ' + errs.join(' | '));
console.log(bad.length ? 'PROBLEMS:\n' + bad.join('\n') : 'v11 checks: all passed'); await b.close();
