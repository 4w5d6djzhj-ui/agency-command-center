// v18 checks: the style read that moves (Live Coach), Life & health readiness (Live Coach, the work card, the
// Now box, the queue card), the lozenges on rows and cards, the four style colors (light and dark), reduced
// motion, phone width, no "AI" wording. The model fixtures run the same lifehealth.jsx source the page compiles.
// Usage: node v18-coach.mjs "http://127.0.0.1:4210/"   (the page root; the script adds ?view= itself)
import { chromium } from '/opt/npm-tools/node_modules/playwright/index.mjs';
import { readFileSync } from 'node:fs';
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
const txt = async (l) => (await l.first().textContent().catch(() => '')).replace(/\s+/g, ' ').trim();
const coach = async (p) => { await p.locator('.tabs button:text-is("Live Coach")').click(); await p.waitForSelector('.x-sr'); await p.waitForTimeout(700); };
const next = (p) => p.locator('main button:text-is("Next turn")').click();
const prev = (p) => p.locator('main button:text-is("Previous")').click();
const pct = (p, k) => p.evaluate((k) => { const f = document.querySelector(`.x-sr .sr-row[data-style="${k}"] .sr-fill`); return f.getBoundingClientRect().width / f.parentElement.getBoundingClientRect().width * 100; }, k);
const noAI = (s) => !/\bAI\b/.test(s) && !/\bai-/i.test(s);

// ---- 0. the model fixtures (the shared readiness model, as compiled into the page)
{
  const src = readFileSync(new URL('../patch/src/lifehealth.jsx', import.meta.url), 'utf8');
  const model = src.slice(0, src.indexOf('// ---- v1 · the panel'));
  const M = new Function(model + '\nreturn { readiness, lhLine, LH_NOTE, LH_WHAT_OPENS };')();
  const f1 = M.readiness({ text: 'we just had a baby and bought a house, want the family protected', latest: 'we just had a baby and bought a house, want the family protected', style: 'story', greenLight: true, talked: true });
  ok(f1.level === 'ready' && f1.levelWord === 'READY' && f1.confidence === 'Clear', 'fixture: baby + house + family + yes -> READY, Clear ' + JSON.stringify(f1));
  const f2 = M.readiness({ text: 'just send me the quote', latest: 'just send me the quote', style: 'doer', talked: true });
  ok(f2.level === 'notyet' && f2.levelWord === 'NOT YET', 'fixture: "just send me the quote" -> NOT YET ' + f2.levelWord);
  const said = "with the baby coming, my wife's been asking about life insurance";
  const f3a = M.readiness({ text: said, latest: said, style: 'story', talked: true });
  const f3b = M.readiness({ text: said + '. not right now', latest: 'not right now', style: 'story', talked: true });
  const rank = { notyet: 0, seed: 1, ready: 2 };
  ok(rank[f3b.level] < rank[f3a.level] && f3b.cues.includes('pushback'), `fixture: a pushback turn drops the level ${f3a.levelWord} -> ${f3b.levelWord}`);
  const q = M.readiness({ text: 'we just had a baby', latest: 'we just had a baby', style: 'asker', talked: true });
  ok(q.score <= 69, 'fixture: a Questioner caps at SEED until the yes ' + q.score);
  ok(/Life protects the payments/.test(M.lhLine('open', 'story', f1)) && /the baby/.test(M.lhLine('open', 'story', f1)), 'Open line fills the event');
  for (const st of ['story', 'asker', 'doer', 'thinker']) for (const k of ['open', 'gap', 'ask']) ok(!/guarantee|tax|grow|growth|cash value|return/i.test(M.lhLine(k, st, f1)), `no growth/tax/guarantee claim in ${k}/${st}`);
}

// ---- 1. Live Coach · the style read moves
{
  const p = await open('');
  await coach(p);
  const order = await p.$$eval('.x-sr .sr-row', rs => rs.map(r => r.dataset.style + ':' + r.querySelector('.sr-name').textContent));
  ok(JSON.stringify(order) === JSON.stringify(['story:Storyteller', 'asker:Questioner', 'doer:Doer', 'thinker:Thinker']), 'four rows in fixed order ' + JSON.stringify(order));
  ok((await p.locator('.style-dims, .dim-row').count()) === 0, 'the old Cf bars are gone');
  // the four style colors, light then dark
  const colors = await p.evaluate(() => {
    const read = () => ['story', 'asker', 'doer', 'thinker'].map(k => getComputedStyle(document.querySelector(`.x-sr .sr-row[data-style="${k}"] .sr-fill`)).backgroundColor);
    const de = document.documentElement, was = de.getAttribute('data-theme');
    const light = read(); de.setAttribute('data-theme', 'dark'); const dark = read(); de.setAttribute('data-theme', was || 'light');
    return { light, dark, theme: was };
  });
  ok(JSON.stringify(colors.light) === JSON.stringify(['rgb(194, 65, 106)', 'rgb(15, 143, 160)', 'rgb(74, 63, 201)', 'rgb(154, 122, 0)']), 'style colors, light ' + JSON.stringify(colors.light));
  ok(JSON.stringify(colors.dark) === JSON.stringify(['rgb(212, 92, 132)', 'rgb(39, 166, 182)', 'rgb(127, 114, 224)', 'rgb(184, 150, 31)']), 'style colors, dark ' + JSON.stringify(colors.dark));
  ok(colors.theme === 'light', 'the light-only v1 base pins data-theme="light"');
  // turn 1: Questioner leads, READING, the heard line names the turn with the words marked
  ok((await p.locator('.x-sr .sr-row.lead').count()) === 1 && (await p.locator('.x-sr .sr-row.lead').getAttribute('data-style')) === 'asker', 'turn 1: Questioner is .lead');
  ok((await txt(p.locator('.x-sr .sr-row.lead .sr-word'))) === 'READING', 'turn 1: READING');
  ok((await p.locator('.x-sr .sr-row:not(.lead) .sr-word .lz').count()) === 0, 'only the leading row carries the word');
  const op = await p.$$eval('.x-sr .sr-row', rs => rs.map(r => +getComputedStyle(r.querySelector('.sr-fill')).opacity));
  ok(op[1] === 1 && [op[0], op[2], op[3]].every(o => Math.abs(o - 0.38) < 0.01), 'lead full color, the others at 38% ' + op.join());
  const h1 = await txt(p.locator('.x-sr .sr-heard'));
  ok(/^Turn 1 · Questioner 62 · heard: “.*shopping around.*”$/.test(h1), 'heard line, turn 1: ' + h1);
  ok(JSON.stringify(await p.$$eval('.x-sr .sr-heard mark', ms => ms.map(m => m.textContent))) === JSON.stringify(['shopping around', 'cheapest']), 'the matching words are marked');
  ok((await p.locator('.x-sr .sr-ghost').count()) === 0, 'no ghost on turn 1');
  ok(/Questioner · READING/i.test(await txt(p.locator('.coach-head .x-read-lz'))), 'coach header lozenge ' + await txt(p.locator('.coach-head .x-read-lz')));
  const tr = await p.$eval('.x-sr .sr-fill', f => [getComputedStyle(f).transitionProperty, getComputedStyle(f).transitionDuration]);
  ok(/width/.test(tr[0]) && /0\.61s/.test(tr[1]), 'fill transitions its width over 610 ms ' + tr.join(' '));
  // step to turn 2: the width moves through the middle, the delta appears then goes, the ghost holds 62
  const m = await p.evaluate(async () => {
    const f = () => document.querySelector('.x-sr .sr-row[data-style="asker"] .sr-fill');
    const w = () => f().getBoundingClientRect().width / f().parentElement.getBoundingClientRect().width * 100;
    const w0 = w(); [...document.querySelectorAll('main button')].find(x => x.textContent.trim() === 'Next turn').click();
    await new Promise(r => setTimeout(r, 160));
    const w1 = w(), delta = [...document.querySelectorAll('.x-sr .sr-delta')].map(d => [d.closest('.sr-row').dataset.style, d.textContent]);
    const moved = [...document.querySelectorAll('.x-sr .sr-row.moved')].map(r => r.dataset.style);
    await new Promise(r => setTimeout(r, 800));
    return { w0, w1, w2: w(), delta, moved };
  });
  ok(Math.abs(m.w0 - 62) < 1 && Math.abs(m.w2 - 78) < 1 && m.w1 > m.w0 + 1 && m.w1 < m.w2 - 1, `turn 2: width animates 62 -> 78 (${m.w0.toFixed(1)} · ${m.w1.toFixed(1)} · ${m.w2.toFixed(1)})`);
  ok(JSON.stringify(m.delta) === JSON.stringify([['asker', '+16']]), 'delta lozenge on the biggest mover ' + JSON.stringify(m.delta));
  ok(JSON.stringify(m.moved) === JSON.stringify(['asker']), '.moved pulse on that row ' + JSON.stringify(m.moved));
  ok((await p.locator('.x-sr .sr-ghost').count()) === 4, 'ghost ticks on turn 2');
  const gl = await p.$eval('.x-sr .sr-row[data-style="asker"] .sr-ghost', g => g.style.left);
  ok(gl === '62%', 'the ghost holds the previous value ' + gl);
  await p.waitForTimeout(1000);
  ok((await p.locator('.x-sr .sr-delta').count()) === 0, 'the delta is gone after 1.618 s');
  ok((await txt(p.locator('.x-sr .sr-row.lead .sr-word'))) === 'LOCKED' && (await p.locator('.x-sr .sr-row.lead .sr-word .lz.bold').count()) === 1, 'turn 2: LOCKED (bold)');
  ok(/^Turn 2 · Questioner up 16 · heard: /.test(await txt(p.locator('.x-sr .sr-heard'))), 'heard line, turn 2: ' + await txt(p.locator('.x-sr .sr-heard')));
  // turns 3 and 4: the read flips to Storyteller, a TIE
  await next(p); await p.waitForTimeout(250);
  ok(/^Turn 3 · Thinker up 7 · heard: “Look, I really don.t want to get into all that\.”$/.test(await txt(p.locator('.x-sr .sr-heard'))), 'heard line, turn 3: ' + await txt(p.locator('.x-sr .sr-heard')));
  await next(p); await p.waitForTimeout(800);
  ok((await p.locator('.x-sr .sr-row.lead').getAttribute('data-style')) === 'story' && (await txt(p.locator('.x-sr .sr-row.lead .sr-word'))) === 'TIE', 'turn 4: Storyteller leads, TIE');
  const h4 = await txt(p.locator('.x-sr .sr-heard'));
  ok(/^Turn 4 · Storyteller up 62 · heard: “.*wife.*someone real.*”$/.test(h4), 'heard line, turn 4: ' + h4);
  ok(Math.abs((await pct(p, 'story')) - 80) < 1, 'story bar at 80');
  // step back: the ghost and the delta follow the turn shown
  await prev(p); await p.waitForTimeout(250);
  ok(/^Turn 3 · Thinker up 7/.test(await txt(p.locator('.x-sr .sr-heard'))) && (await p.$eval('.x-sr .sr-row[data-style="asker"] .sr-ghost', g => g.style.left)) === '78%', 'back to turn 3: heard line and ghost (78%)');
  ok(JSON.stringify(await p.$$eval('.x-sr .sr-delta', ds => ds.map(d => d.textContent))) === JSON.stringify(['+7']), 'back to turn 3: delta +7');
  await next(p); await p.waitForTimeout(800);
  // Why opens the style's why in a section message
  await p.locator('.x-sr .x-sr-link', { hasText: 'Why Storyteller?' }).click(); await p.waitForTimeout(150);
  ok((await p.locator('.x-sr .sm.sm-discovery').count()) === 1 && /You can tell from the first message: it's long and personal/.test(await txt(p.locator('.x-sr .sm .sm-body'))), 'Why: section message with the style\'s why');
  await p.locator('.x-sr .sm .sm-action').click(); await p.waitForTimeout(100);
  ok((await p.locator('.x-sr .sm').count()) === 0, 'Why closes');
  // Replay the read: turns 1…4, one per 1.618 s, then back to the current turn
  const seq = await p.evaluate(async () => {
    const btn = () => document.querySelector('.x-sr .x-sr-replay');
    btn().click(); await new Promise(r => setTimeout(r, 60)); const out = [];
    const t0 = Date.now();
    while (Date.now() - t0 < 8200) { const t = document.querySelector('.x-sr').dataset.turn; if (out[out.length - 1] !== t) out.push(t); await new Promise(r => setTimeout(r, 90)); }
    return { out, label: btn().textContent };
  });
  ok(JSON.stringify(seq.out) === JSON.stringify(['1', '2', '3', '4']) && seq.label === '▶ Replay the read', 'replay runs 1…4 and returns ' + JSON.stringify(seq));
  ok((await txt(p.locator('.x-sr .sr-heard'))).startsWith('Turn 4 ·'), 'back on the current turn after the replay');
  // no AI wording on Live Coach, every turn
  let clean = true;
  for (let i = 0; i < 2; i++) { await next(p); await p.waitForTimeout(200); clean = clean && noAI(await p.locator('main').innerText()); }
  ok(clean && noAI(await p.locator('body').innerText()), 'no AI strings on Live Coach');
  await p.context().close();
}

// ---- 2. Live Coach · Life & health readiness, recomputed each turn
{
  const p = await open('');
  await coach(p);
  const lh = p.locator('.x-lh-coach');
  ok((await p.locator('.coach-body > .coach-section').nth(0).locator('.x-sr').count()) === 1 && (await p.locator('.coach-body > .coach-section').nth(1).locator('.x-lh').count()) === 1, 'readiness sits directly under the style read');
  ok((await p.locator('.coach-panel .signal-tag').count()) === 0 && /^Signal: /.test(await p.locator('.x-sr .sr-heard').getAttribute('title')), 'the coach\'s signal label rides on the heard line (one line, not two)');
  const lv = async () => [await lh.locator('.x-lh').getAttribute('data-level'), +(await lh.locator('.x-lh').getAttribute('data-score'))];
  const L = [await lv()];
  ok(L[0][0] === 'notyet' && (await txt(lh.locator('.x-lh-head .lz'))) === 'NOT YET', 'turn 1: NOT YET');
  ok((await txt(lh.locator('.x-lh-wait'))) === 'Not yet · finish the main ask first' && (await txt(lh.locator('.es'))) === 'What would open it: a life event in their words, or a yes on the quote.', 'NOT YET: one line and the empty state');
  ok((await txt(lh.locator('.x-lh-note'))) === 'Illustration only, not a policy or quote, subject to underwriting.', 'the illustration footer');
  ok(/^Confidence · (Clear|Likely|Your call)$/.test(await txt(lh.locator('.x-lh-conf'))), 'confidence in words ' + await txt(lh.locator('.x-lh-conf')));
  ok((await lh.locator('.rm .rm-ticks').count()) === 1 && (await lh.locator('.rm').getAttribute('role')) === 'meter', 'the meter with its ticks');
  for (let i = 1; i < 6; i++) { await next(p); await p.waitForTimeout(250); L.push(await lv()); }
  ok(JSON.stringify(L.map(x => x[0])) === JSON.stringify(['notyet', 'notyet', 'notyet', 'seed', 'seed', 'ready']), 'levels by turn ' + JSON.stringify(L));
  ok(L[2][1] < L[1][1], 'the pushback turn drops the score ' + L[1][1] + ' -> ' + L[2][1]);
  // back to turn 3 for the pushback cue, then 4 for SEED
  for (let i = 0; i < 3; i++) { await prev(p); await p.waitForTimeout(150); }
  ok((await lh.locator('.x-lh-cues .lz', { hasText: 'pushback' }).count()) === 1, 'turn 3: the pushback cue');
  await next(p); await p.waitForTimeout(700);
  const w4 = await lh.locator('.rm-fill').evaluate(f => f.getBoundingClientRect().width / f.parentElement.getBoundingClientRect().width * 100);
  ok(Math.abs(w4 - 50) < 1.5, 'the meter fill follows the turns ' + w4.toFixed(1));
  ok((await lh.locator('.x-lh-line').count()) === 1 && (await lh.locator('.x-lh-line').getAttribute('data-step')) === 'open' && (await lh.locator('.pt').count()) === 0 && (await lh.locator('.x-lh-next').count()) === 0, 'SEED: the Open line only, no tracker');
  ok(/one sentence, no ask/.test(await txt(lh.locator('.x-lh-head'))) && /about the baby\?/.test(await txt(lh.locator('.x-lh-line'))), 'SEED: "one sentence, no ask" and the event filled');
  ok((await lh.locator('.x-lh-cues .lz').allTextContents()).includes('baby'), 'cues in their words');
  await next(p); await next(p); await p.waitForTimeout(500);
  // READY: the tracker, one line at a time
  ok((await txt(lh.locator('.x-lh-head .lz'))) === 'READY' && (await lh.locator('.x-lh-head .lz.lz-success.bold').count()) === 1, 'turn 6: READY (success, bold)');
  ok((await lh.locator('.pt li').count()) === 3 && (await txt(lh.locator('.pt li.current'))) === 'Open' && (await lh.locator('.x-lh-line').count()) === 1, 'READY: tracker on Open, one line');
  ok((await lh.locator('.x-lh-cues .lz', { hasText: 'said yes' }).count()) === 1, 'the booked meeting is the yes');
  const lines = [await txt(lh.locator('.x-lh-line'))];
  await lh.locator('.x-lh-next').click(); await p.waitForTimeout(100);
  ok((await txt(lh.locator('.pt li.current'))) === 'Gap' && (await lh.locator('.pt li.visited').count()) === 1 && (await lh.locator('.x-lh-line').count()) === 1, 'Next line → Gap, still one line');
  lines.push(await txt(lh.locator('.x-lh-line')));
  await lh.locator('.x-lh-next').click(); await p.waitForTimeout(100);
  ok((await txt(lh.locator('.pt li.current'))) === 'Ask' && (await lh.locator('.x-lh-next').isDisabled()), 'Next line → Ask, the last step');
  lines.push(await txt(lh.locator('.x-lh-line')));
  ok(new Set(lines).size === 3 && /Life protects the payments/.test(lines[0]) && /The gap is the payments/.test(lines[1]) && /You pick the day/.test(lines[2]), 'Open · Gap · Ask lines ' + JSON.stringify(lines));
  ok((await lh.locator('.sm.sm-warning').count()) === 1 && /Suitability first/.test(await txt(lh.locator('.sm .sm-title'))), 'the Ask waits behind the open suitability items');
  await p.$$eval('.life-checklist input[type=checkbox]', is => is.forEach(i => i.click())); await p.waitForTimeout(150);
  ok((await lh.locator('.sm').count()) === 0, 'cleared suitability lifts the stop');
  await lh.locator('.x-lh-back').click(); await p.waitForTimeout(100);
  ok((await txt(lh.locator('.pt li.current'))) === 'Gap', '← Back');
  ok(noAI(await p.locator('body').innerText()), 'no AI strings with readiness open');
  await p.context().close();
}

// ---- 3. reduced motion: the values jump, no pulse, no delta animation
{
  const p = await open('', { reduce: true });
  await coach(p);
  const r = await p.evaluate(async () => {
    const f = () => document.querySelector('.x-sr .sr-row[data-style="asker"] .sr-fill');
    const w = () => f().getBoundingClientRect().width / f().parentElement.getBoundingClientRect().width * 100;
    [...document.querySelectorAll('main button')].find(x => x.textContent.trim() === 'Next turn').click();
    await new Promise(res => setTimeout(res, 120));
    const d = document.querySelector('.x-sr .sr-delta');
    return { w: w(), dur: getComputedStyle(f()).transitionDuration, anim: d ? getComputedStyle(d).animationName : 'none', rm: getComputedStyle(document.querySelector('.x-lh .rm-fill')).transitionDuration };
  });
  ok(Math.abs(r.w - 78) < 0.5 && parseFloat(r.dur) < 0.01 && r.anim === 'none' && parseFloat(r.rm) < 0.01, 'reduced motion: the bars jump ' + JSON.stringify(r));
  await p.context().close();
  // and through page.emulateMedia on a running page
  const q = await open('');
  await coach(q);
  await q.emulateMedia({ reducedMotion: 'reduce' });
  ok(parseFloat(await q.$eval('.x-sr .sr-fill', f => getComputedStyle(f).transitionDuration)) < 0.01, 'emulateMedia(reduce): no transition');
  await q.context().close();
}

// ---- 4. the work card, the Now box, the queue card: the Life & health lozenge opens the panel in place
{
  const p = await open('');
  // rows get nothing; the style chips are lozenges in the style colors
  ok((await p.locator('.x-wf-row .x-lh-chip').count()) === 0, 'Workflow rows carry no Life & health lozenge');
  const styles = await p.$$eval('.x-wf-list .x-wf-row', rs => rs.map(r => { const l = r.querySelector('.x-wf-who .lz.style-pill'); return l ? [...l.classList].find(c => /^lz-(story|asker|doer|thinker)$/.test(c)) || '' : ''; }));
  ok(styles.length === 28 && styles.every(Boolean), 'every Workflow row: the style chip is a lozenge ' + styles.filter(x => !x).length);
  const sc = await p.$eval('.x-wf-list .lz-story', e => [getComputedStyle(e).color, getComputedStyle(document.documentElement).getPropertyValue('--style-story-text').trim()]);
  ok(sc[0] === 'rgb(142, 42, 78)' && sc[1].toUpperCase() === '#8E2A4E', 'style lozenge text color ' + sc.join(' '));
  ok(await p.$eval('.x-wf-list .lz-story', e => e.textContent === 'Storyteller' && e.getAttribute('title') === 'Communication style'), 'same words, titled');
  // Marcus (booked, READY): open his card, tap the lozenge, step the lines
  const it = p.locator('.x-wf-item[data-lead="C-002"]');
  await it.locator('.x-wf-row').click(); await p.waitForTimeout(350);
  const chip = it.locator('.x-wf-card .x-lh-chip');
  ok((await chip.count()) === 1 && (await txt(chip)) === 'Life & health · READY' && (await chip.getAttribute('aria-expanded')) === 'false', 'work card: LIFE & HEALTH · READY ' + await txt(chip));
  ok(/Confidence: Clear/.test(await chip.getAttribute('title')), 'the lozenge has a title in words');
  await chip.click(); await p.waitForTimeout(250);
  const panel = it.locator('.x-wf-card .x-lh-card');
  ok((await panel.count()) === 1 && (await chip.getAttribute('aria-expanded')) === 'true', 'tapping it opens the panel inside the card');
  ok((await panel.locator('.pt li').count()) === 3 && (await panel.locator('.x-lh-line').count()) === 1 && (await txt(panel.locator('.pt li.current'))) === 'Open', 'card: tracker, one line');
  await panel.locator('.x-lh-next').click(); await p.waitForTimeout(100);
  ok((await txt(panel.locator('.pt li.current'))) === 'Gap' && (await panel.locator('.x-lh-line').count()) === 1, 'card: Next line → Gap');
  await panel.locator('.x-lh-back').click(); await p.waitForTimeout(100);
  ok((await txt(panel.locator('.pt li.current'))) === 'Open', 'card: ← Back');
  ok((await txt(panel.locator('.x-lh-note'))) === 'Illustration only, not a policy or quote, subject to underwriting.', 'card: the illustration footer');
  ok((await it.locator('.x-wf-card .x-say li').count()) === 3, 'the call card is intact under the panel');
  await panel.locator('.x-lh-close').click(); await p.waitForTimeout(100);
  ok((await panel.count()) === 0 && (await it.locator('.x-wf-card').count()) === 1, 'the panel closes, the card stays open');
  // Hana (thinker, new baby, no yes yet): SEED, the Open line only
  const h = p.locator('.x-wf-item[data-lead="Q15"]');
  await h.locator('.x-wf-row').click(); await p.waitForTimeout(300);
  ok((await txt(h.locator('.x-lh-chip'))) === 'Life & health · SEED', 'Hana: SEED ' + await txt(h.locator('.x-lh-chip')));
  await h.locator('.x-lh-chip').click(); await p.waitForTimeout(200);
  ok((await h.locator('.x-lh-card .x-lh-line').getAttribute('data-step')) === 'open' && (await h.locator('.x-lh-card .pt').count()) === 0, 'Hana: the Open line only');
  ok(/No decision today/.test(await txt(h.locator('.x-lh-card .x-lh-line'))), 'Hana: the Thinker\'s Open line');
  // the Now box
  const now = p.locator('.x-wf-now');
  ok((await now.locator('.x-wf-hero-chips .x-lh-chip').count()) === 1 && /^Life & health · (READY|SEED|NOT YET)$/.test(await txt(now.locator('.x-lh-chip'))), 'Now box: the lozenge in the chips row');
  await now.locator('.x-lh-chip').click(); await p.waitForTimeout(200);
  ok((await now.locator('.x-lh-card .x-lh').count()) === 1, 'Now box: the panel opens in place');
  ok((await txt(now.locator('.x-lh-head .lz'))) === 'NOT YET' && (await now.locator('.x-lh-card .es').count()) === 1, 'Now box (Priya, "just send me the quote"): NOT YET with what would open it');
  ok(noAI(await p.locator('body').innerText()), 'no AI strings with the panels open');
  await p.context().close();
}

// ---- 5. the queue: lozenges on the rows, the card lozenge on the open card only
{
  const p = await open('?view=queue');
  const nr = await p.locator('.x-row').count();
  ok(nr >= 10 && (await p.locator('.x-row .x-row-line1 > .lz.style-pill').count()) === nr && (await p.locator('.x-row .x-row-line1 > .style-pill:not(.lz)').count()) === 0, 'queue rows: every style chip is a lozenge ' + nr);
  const stop = p.locator('.x-row .lz.lz-danger', { hasText: 'Texted STOP' });
  ok((await stop.count()) === 1 && /^Texted STOP 7:42 AM/.test(await txt(stop)) && (await p.locator('.x-row .x-chip-stop').count()) === 0, 'Texted STOP is a danger lozenge ' + await txt(stop));
  ok((await p.locator('.x-row .x-when.lz.lz-information', { hasText: 'Due now' }).count()) >= 1, 'Due now is an information lozenge');
  ok((await p.locator('.x-row.is-open .x-lh-chip').count()) === 1 && (await p.locator('.x-row:not(.is-open) .x-lh-chip').count()) === 0, 'only the open card carries the Life & health lozenge');
  const open1 = p.locator('.x-row.is-open');
  const name = await txt(open1.locator('.x-name'));
  await open1.locator('.x-lh-chip').click(); await p.waitForTimeout(200);
  ok((await p.locator('.x-row.is-open .x-lh-card').count()) === 1 && (await txt(p.locator('.x-row.is-open .x-name'))) === name, 'queue: tapping the lozenge opens the panel and keeps the card open');
  await p.locator('.x-lane-done > summary').click().catch(() => {}); await p.waitForTimeout(100);
  ok(noAI(await p.locator('body').innerText()), 'no AI strings in the queue');
  await p.context().close();
}

// ---- 6. phone: Live Coach and a card with the panel open, no sideways scroll
{
  const p = await open('', { phone: true });
  const it = p.locator('.x-wf-item[data-lead="C-002"]');
  await it.locator('.x-wf-btn').click(); await p.waitForTimeout(300);
  await it.locator('.x-lh-chip').click(); await p.waitForTimeout(200);
  ok((await it.locator('.x-lh-card').count()) === 1 && (await p.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)) === 0, 'phone: card panel, no overflow');
  await coach(p);
  for (let i = 0; i < 5; i++) { await next(p); await p.waitForTimeout(120); }
  ok((await p.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)) === 0, 'phone: Live Coach, no overflow');
  const rows = await p.$$eval('.x-sr .sr-row', rs => rs.map(r => r.getBoundingClientRect().right));
  ok(rows.every(x => x <= 390), 'phone: the read fits');
  await p.context().close();
}

ok(errs.length === 0, 'errors: ' + errs.join(' | '));
console.log(`v18-coach: ${n - bad.length} of ${n} checks passed`);
console.log(bad.length ? 'PROBLEMS:\n' + bad.join('\n') : 'v18-coach checks: all passed'); await b.close();
process.exit(bad.length ? 1 : 0);
