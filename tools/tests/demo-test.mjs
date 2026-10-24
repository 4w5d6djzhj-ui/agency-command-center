// Deep interaction test: every tab, both personas, every button, Compose matrix, Live Coach turns, Discovery persistence/export/clear.
import { chromium } from '/opt/npm-tools/node_modules/playwright/index.mjs';
const BASE = process.argv[2] || 'http://localhost:4195';
const NAV = new Set(['Alex', 'Maya', 'Today', 'Compose', 'Live Coach', 'Retention', 'Triggers', 'Referrals', 'Manager', 'Discovery']);
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, acceptDownloads: true });
const page = await ctx.newPage();
const problems = [], log = [];
page.on('pageerror', e => problems.push('PAGEERROR ' + e.message.slice(0, 200)));
page.on('console', m => { if (m.type() === 'error') problems.push('CONSOLE ' + m.text().slice(0, 200)); });
page.on('requestfailed', r => problems.push('REQFAIL ' + r.url()));
page.on('dialog', async d => { log.push(`dialog(${d.type()}): ${d.message().slice(0, 60)}`); await d.accept(); });

const t0 = Date.now();
await page.goto(BASE, { waitUntil: 'networkidle' });
log.push(`load ${Date.now() - t0}ms`);
const gate = async () => { const g = page.locator('button.gate-accept'); if (await g.count()) { await g.click(); await page.waitForTimeout(150); log.push('gate accepted'); } };
await gate();
const blank = async () => (await page.evaluate(() => document.body.innerText.length)) < 200;
const click = async (sel) => { const l = page.locator(sel).first(); if (await l.count()) { await l.click({ timeout: 2000 }); await page.waitForTimeout(80); return true; } return false; };
const tab = (t) => click(`.tabs button:text-is("${t}")`);
const persona_ = async (n) => { await click('.x-demo-btn'); const ok = await click(`.x-demo-panel .x-seg button:has-text("${n}")`); await page.keyboard.press('Escape'); await page.waitForTimeout(80); return ok; };
const fonts = await page.evaluate(async () => { await document.fonts.ready; return [...new Set([...document.fonts].filter(f => f.status === 'loaded').map(f => f.family))]; });
log.push('fonts: ' + fonts.join(', '));

let clicks = 0;
for (const persona of ['Alex', 'Maya']) {
  await persona_(persona);
  const tabs = await page.$$eval('.tabs button', els => els.map(e => e.innerText.trim()));
  log.push(`${persona}: tabs = ${tabs.join(' | ')}`);
  for (const t of tabs) {
    await tab(t);
    if (await blank()) problems.push(`BLANK after opening ${t} as ${persona}`);
    // click every non-nav button once (skip destructive/download ones; tested separately)
    const labels = await page.$$eval('main button', els => els.map(e => e.innerText.trim()).filter(x => x && x.length < 50));
    for (const label of [...new Set(labels)]) {
      if (NAV.has(label) || /clear all|export json/i.test(label)) continue;
      const btns = page.locator('main button', { hasText: label });
      const n = Math.min(await btns.count(), 3);
      for (let i = 0; i < n; i++) {
        try { await btns.nth(i).click({ timeout: 1500 }); clicks++; await page.waitForTimeout(40); } catch { }
        await page.keyboard.press('Escape').catch(() => {});
        if (await blank()) { problems.push(`BLANK after "${label}" on ${t} (${persona})`); await page.goto(BASE, { waitUntil: 'networkidle' }); await gate(); await persona_(persona); await tab(t); }
      }
    }
  }
}
log.push(`buttons clicked: ${clicks}`);

// Compose matrix
await persona_('Alex'); await tab('Compose');
const sel = page.locator('select').first();
const opts = await sel.evaluate(s => [...s.options].map(o => o.value));
let drafts = 0;
for (const o of opts) {
  await sel.selectOption(o);
  for (const sc of ['Raw new', 'Current customer', 'Win-back', 'X-date · not now', 'Following up']) {
    await click(`main button:text-is("${sc}")`);
    for (const st of ['Storyteller', 'Questioner', 'Doer', 'Thinker']) {
      await click(`main button:text-is("${st}")`);
      for (const ch of ['Email', 'SMS']) {
        await click(`main .channel-toggle button:text-is("${ch}")`);
        const body = await page.locator('.draft-area').first().innerText().catch(() => '');
        if (body.trim().length < 20) problems.push(`EMPTY DRAFT lead=${o} ${sc}/${st}/${ch}`); else drafts++;
      }
    }
  }
}
log.push(`compose drafts rendered: ${drafts} (expected ${opts.length * 5 * 4 * 2})`);

// Live Coach: walk all turns
await tab('Live Coach');
let turns = 0;
for (let i = 0; i < 8; i++) { if (!(await page.locator('main button:text-is("Next turn")').first().isEnabled().catch(() => false))) break; await click('main button:text-is("Next turn")'); turns++; }
const turnLabel = await page.locator('text=/Turn \\d+ of \\d+/').first().innerText().catch(() => '?');
log.push(`live coach: advanced ${turns} turns → "${turnLabel}"`);
await click('main button:text-is("✓ Worked")'); await click('main button:text-is("Reset")');

// Discovery: answer, persist, export, clear
await tab('Discovery');
const toggles = page.locator('main button', { hasText: '▸' });
for (let i = 0, n = await toggles.count(); i < n; i++) { try { await toggles.nth(i).click({ timeout: 1000 }); } catch { } }
await page.locator('main .dq-input').first().fill('Demo test answer');
await page.locator('main .dq-options button').first().click(); await page.waitForTimeout(1200);
const count = async () => { const m = (await page.locator('main').innerText()).match(/(\d+) \/ 105 answered/i); return m ? +m[1] : -1; };
const n1 = await count(), v1 = await page.locator('main .dq-input').first().inputValue();
await page.reload({ waitUntil: 'networkidle' }); await gate(); await tab('Discovery');
const n2 = await count(), v2 = await page.locator('main .dq-input').first().inputValue().catch(() => '');
log.push(`discovery before reload: ${n1}/105 answered, first field "${v1}" | after: ${n2}/105, "${v2}"`);
if (n1 < 0 || n2 !== n1 || v2 !== v1 || !v1) problems.push('DISCOVERY answers did not persist across reload');
const [dl] = await Promise.all([page.waitForEvent('download', { timeout: 5000 }).catch(() => null), click('main button:has-text("Export JSON")')]);
log.push('export json download: ' + (dl ? `${dl.suggestedFilename()} ok` : 'NO DOWNLOAD EVENT'));
await click('main button:has-text("Clear all")');
const stamp3 = await page.locator('.dq-saved-stamp').first().innerText().catch(() => '');
log.push(`after clear all: "${stamp3.trim()}"`);

// Keyboard nav on tabs + mobile
await tab('Today'); await page.locator('.tabs button.active, .tabs button[aria-selected="true"]').first().focus().catch(() => {});
await page.keyboard.press('ArrowRight'); await page.waitForTimeout(150);
log.push('keyboard ArrowRight → active tab: ' + (await page.locator('.tabs button.active').first().innerText().catch(() => '?')));
await page.setViewportSize({ width: 390, height: 844 });
for (const t of ['Today', 'Compose', 'Live Coach', 'Retention', 'Triggers', 'Referrals', 'Manager', 'Discovery']) { await tab(t); const o = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth); if (o > 0) problems.push(`MOBILE overflow on ${t}: +${o}px`); }
log.push('mobile pass done');

await browser.close();
console.log(log.join('\n'));
console.log('\nPROBLEMS: ' + problems.length + (problems.length ? '\n' + [...new Set(problems)].join('\n') : ' — none'));
