import { chromium } from '/opt/npm-tools/node_modules/playwright/index.mjs';
const base = process.argv[2], out = process.argv[3]; const b = await chromium.launch(); const errs = [];
const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
await p.goto(base, { waitUntil: 'networkidle' });
const g = p.locator('button.gate-accept'); if (await g.count()) await g.click(); await p.waitForSelector('.topbar');
await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
await p.screenshot({ path: out + 'v12-open.png', clip: { x: 0, y: 0, width: 1440, height: 1400 }, fullPage: true });
await p.locator('.x-strip').screenshot({ path: out + 'v12-strip.png' });
await p.locator('.x-open').screenshot({ path: out + 'v12-opentime.png' });
console.log('status:', (await p.locator('.x-status').innerText()).replace(/\s+/g, ' '));
console.log('cap:', (await p.locator('.x-strip-cap').innerText()).replace(/\s+/g, ' '));
console.log('open:', (await p.locator('.x-open').innerText()).replace(/\s+/g, ' ').slice(0, 900));
// day plan view at 11
await p.locator('.x-viewbar button', { hasText: 'Day plan' }).click(); await p.waitForTimeout(300);
await p.screenshot({ path: out + 'v12-plan.png', fullPage: true });
await p.locator('.x-viewbar button', { hasText: 'Charts' }).click().catch(() => {}); await p.waitForTimeout(300);
await p.screenshot({ path: out + 'v12-charts.png', fullPage: true });
// phone
const m = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true }); const q = await m.newPage();
await q.goto(base, { waitUntil: 'networkidle' }); const g2 = q.locator('button.gate-accept'); if (await g2.count()) await g2.click(); await q.waitForSelector('.topbar');
await q.evaluate(() => document.fonts.ready); await q.waitForTimeout(400);
await q.screenshot({ path: out + 'v12-phone.png', clip: { x: 0, y: 0, width: 390, height: 1600 }, fullPage: true });
const sw = await q.evaluate(() => document.documentElement.scrollWidth); console.log('phone scrollWidth', sw);
console.log(errs.length ? errs.join('\n') : 'no errors'); await b.close();
