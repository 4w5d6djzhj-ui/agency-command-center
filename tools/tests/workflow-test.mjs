// Workflow test for a new team member: can they find the first action without instruction, and how many
// taps and how much scrolling do the five daily tasks take? Run against v1 (/) and v2 (/v2/).
import { chromium } from '/opt/npm-tools/node_modules/playwright/index.mjs';
const base = 'http://127.0.0.1:4210';
const b = await chromium.launch();
const out = {};
const log = (site, vp, k, v) => { (out[`${site} @${vp}`] ||= {})[k] = v; };

async function open(site, vp) {
  const ctx = await b.newContext({ viewport: vp === 'phone' ? { width: 390, height: 844 } : { width: 1440, height: 900 }, isMobile: vp === 'phone', hasTouch: vp === 'phone', deviceScaleFactor: vp === 'phone' ? 2 : 1 });
  const p = await ctx.newPage(); const errs = [];
  p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error' && !/fonts.googleapis|gstatic|ERR_TUNNEL/.test(m.text())) errs.push(m.text()); });
  const t0 = Date.now();
  await p.goto(site === 'v1' ? `${base}/` : `${base}/v2/`, { waitUntil: 'networkidle' });
  const g = p.locator('button.gate-accept'); if (await g.count()) await g.click();
  await p.waitForTimeout(400);
  const load = Date.now() - t0;
  return { p, ctx, errs, load };
}
const boxY = async (loc) => { const bb = await loc.first().boundingBox().catch(() => null); return bb ? Math.round(bb.y + (await loc.first().evaluate(() => window.scrollY))) : null; };
const countAbove = async (p, h) => p.evaluate((h) => [...document.querySelectorAll('button, a, select, input, [role=button]')].filter(e => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0 && r.top >= 0 && r.top < h; }).length, h);
const textAbove = async (p, h) => p.evaluate((h) => { let n = 0; const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); while (w.nextNode()) { const t = w.currentNode; const el = t.parentElement; if (!el) continue; const r = el.getBoundingClientRect(); if (r.top >= 0 && r.top < h && r.width > 0) n += t.textContent.trim().split(/\s+/).filter(Boolean).length; } return n; }, h);
const fontSizes = async (p) => p.evaluate(() => { const s = new Set(); document.querySelectorAll('body *').forEach(e => { if (e.children.length === 0 && e.textContent.trim()) s.add(getComputedStyle(e).fontSize); }); return [...s].sort((a, b) => parseFloat(a) - parseFloat(b)); });
const colors = async (p) => p.evaluate(() => { const s = new Set(); document.querySelectorAll('body *').forEach(e => { const c = getComputedStyle(e); [c.color, c.backgroundColor, c.borderTopColor].forEach(v => { if (v && v !== 'rgba(0, 0, 0, 0)' && v !== 'transparent') s.add(v); }); }); return s.size; });

for (const vp of ['desk', 'phone']) {
  const H = vp === 'phone' ? 844 : 900;
  // ---------- v1
  {
    const { p, errs, load } = await open('v1', vp);
    log('v1', vp, 'load_ms', load);
    log('v1', vp, 'interactive_above_fold', await countAbove(p, H));
    log('v1', vp, 'words_above_fold', await textAbove(p, H));
    log('v1', vp, 'font_sizes', (await fontSizes(p)).length);
    log('v1', vp, 'colors', await colors(p));
    // T1: first call — where is the primary Call button and the script?
    const callBtn = p.locator('.x-row.is-open .x-act, .x-row .btn:has-text("Call")').first();
    log('v1', vp, 'T1_call_button_y', await boxY(p.locator('.x-row.is-open .btn, .x-row.is-open .x-act')));
    log('v1', vp, 'T1_script_visible_at_load', (await p.locator('.x-row.is-open .x-say, .x-row.is-open .x-script, .x-row.is-open .x-moves').count()) > 0);
    log('v1', vp, 'T1_status_line_y', await boxY(p.locator('.x-status')));
    // T2: log an outcome
    const talked = p.locator('.x-row.is-open button', { hasText: 'Talked' }).first();
    log('v1', vp, 'T2_outcome_clicks', (await talked.count()) ? 1 : null);
    // T3: approve routine messages: one button
    log('v1', vp, 'T3_approve_clicks', (await p.locator('.x-approve-all').count()) ? 1 : 'per-message');
    // T4: STOP gate: is the reason visible on the lead's row without opening?
    await p.$$eval('details.x-later', ds => ds.forEach(d => { d.open = true; }));
    const nadia = p.locator('.x-row', { has: p.locator('.x-name:text-is("Nadia Sandbox")') }).first();
    log('v1', vp, 'T4_stop_reason_on_row', /STOP/i.test(await nadia.innerText().catch(() => '')));
    // T5: compliance records: clicks to see them
    const comp = p.locator('.x-comp > summary').first();
    log('v1', vp, 'T5_compliance_clicks', (await comp.count()) ? 1 : null);
    // T6: cooler lead
    log('v1', vp, 'T6_cooler_clicks', (await p.locator('details.x-cool').count()) ? 2 : null);
    log('v1', vp, 'tabs', await p.locator('.tabs button, .tabs a').count());
    log('v1', vp, 'errors', errs.length);
    await p.screenshot({ path: `../final12/wf-v1-${vp}.png` });
    await p.context().close();
  }
  // ---------- v2
  {
    const { p, errs, load } = await open('v2', vp);
    log('v2', vp, 'load_ms', load);
    log('v2', vp, 'interactive_above_fold', await countAbove(p, H));
    log('v2', vp, 'words_above_fold', await textAbove(p, H));
    log('v2', vp, 'font_sizes', (await fontSizes(p)).length);
    log('v2', vp, 'colors', await colors(p));
    log('v2', vp, 'T1_call_button_y', await boxY(p.locator('#nextt .btn')));
    log('v2', vp, 'T1_status_line_y', await boxY(p.locator('#nowstat')));
    // T1: click Call now → does the script appear? count clicks until a script/moves block is visible
    let clicks = 0;
    const go = p.locator('#nextt .btn').first();
    if (await go.count()) { await go.click(); clicks++; await p.waitForTimeout(300); }
    const scriptVis = await p.locator('.card .say, .card .moves, .card .script, .move').first().isVisible().catch(() => false);
    log('v2', vp, 'T1_clicks_to_script', scriptVis ? clicks : `${clicks}+ (no script on card)`);
    log('v2', vp, 'T2_outcome_clicks', (await p.locator('.card .btn', { hasText: 'Talked' }).count()) ? 1 : null);
    // T3: approve messages: per message via Compose?
    const openDraft = await p.locator('#lane-msgs .btn', { hasText: /Open draft|Approve/ }).count();
    log('v2', vp, 'T3_approve_clicks', (await p.locator('#lane-msgs .btn', { hasText: 'Approve' }).count()) ? 'per-message, in lane' : openDraft ? 'per-message, via Compose (3 each)' : 'none');
    log('v2', vp, 'T4_stop_reason_on_row', /STOP/i.test(await p.locator('#lane-stop').innerText().catch(() => '')));
    log('v2', vp, 'T5_compliance_clicks', (await p.locator('#compl li').count()) ? 0 : null);
    log('v2', vp, 'T5_compliance_records', (await p.locator('#compl').innerText()).includes('record') ? 'yes' : 'no records list');
    log('v2', vp, 'T6_cooler_clicks', 'n/a: cooler leads are strip dots only');
    log('v2', vp, 'tabs', await p.locator('.tabs a').count());
    log('v2', vp, 'errors', errs.length);
    await p.screenshot({ path: `../final12/wf-v2-${vp}.png` });
    await p.context().close();
  }
}
console.log(JSON.stringify(out, null, 1));
await b.close();
