import { chromium } from '/opt/npm-tools/node_modules/playwright/index.mjs';
const base = process.argv[2], out = process.argv[3]; const b = await chromium.launch(); const bad = []; const ok = (c, m) => { if (!c) bad.push(m); };
for (const [w, h, tag] of [[1440, 900, 'd'], [390, 844, 'm']]) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: tag === 'm' ? 2 : 1 }); const p = await ctx.newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  await p.goto(base, { waitUntil: 'networkidle' });
  const g = p.locator('button.gate-accept'); if (await g.count()) await g.click(); await p.waitForSelector('.topbar');
  await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(900);
  for (const persona of ['Alex', 'Maya']) {
    await p.locator(`.persona-pill button:text-is("${persona}")`).click(); await p.locator('.tabs button:text-is("Today")').click(); await p.waitForTimeout(400);
    const line = (await p.locator('main .x-strip-model').innerText()).trim();
    ok(line === '20 prospects · 7 quotes · 4 apps / 2 HH protected', `${tag}/${persona} today line: ${line}`);
  }
  await p.locator('.persona-pill button:text-is("Alex")').click(); await p.locator('.tabs button:text-is("Today")').click(); await p.waitForTimeout(900);
  await p.screenshot({ path: `${out}${tag}-today.png`, clip: { x: 0, y: 0, width: w, height: Math.min(h, 520) } });
  await p.locator('.tabs button:text-is("Compose")').click(); await p.waitForTimeout(900);
  const sub = (await p.locator('main .page-head .greeting').innerText()).trim();
  ok(sub.endsWith('Compliance-checked.'), `${tag} compose line: ${sub}`);
  ok(!(await p.locator('main').innerText()).includes('AI-drafted in your voice'), `${tag} compose still has the AI line`);
  await p.screenshot({ path: `${out}${tag}-compose.png`, clip: { x: 0, y: 0, width: w, height: Math.min(h, 520) } });
  ok((await p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)) <= 0, `${tag} overflow`);
  ok(errs.length === 0, `${tag} errors: ${errs.join(' | ')}`);
  await ctx.close();
}
console.log(bad.length ? 'PROBLEMS:\n' + bad.join('\n') : 'v6 checks: all passed'); await b.close();
