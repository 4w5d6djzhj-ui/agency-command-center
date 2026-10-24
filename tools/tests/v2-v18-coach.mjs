// v18 acceptance for v2 (v2.6): the Live Coach style read that moves, Life & health readiness (Live Coach, the work card,
// the Lanes card and the Now box), the lozenges on rows and cards, the shared token layer, reduced motion, dark mode.
// Run: node tools/tests/v2-v18-coach.mjs [base]   (default http://127.0.0.1:4210/tools/dist/v2/)
// SHARED_DIR points at the folder holding the shared ads.css and lifehealth.js (checked verbatim against the page).
import { chromium } from '/opt/npm-tools/node_modules/playwright/index.mjs';
import { readFileSync, existsSync } from 'node:fs';
import { createRequire } from 'node:module';
const BASE = process.argv[2] || 'http://127.0.0.1:4210/tools/dist/v2/';
const SHARED = process.env.SHARED_DIR || '/tmp/claude-0/-home-claude/450c7058-02aa-5149-beb4-2c2542a236d0/scratchpad/next/';
const origin = new URL(BASE).origin;
const b = await chromium.launch();
let pass = 0, fail = 0; const fails = [];
const ok = (cond, name, info = '') => { if (cond) pass++; else { fail++; fails.push(`${name}${info !== '' ? ' · ' + info : ''}`); } };
const wait = ms => new Promise(r => setTimeout(r, ms));

async function open(q = '', o = {}) {
  const w = o.w || 1440, h = o.h || 900;
  const ctx = await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500, reducedMotion: o.reduce ? 'reduce' : 'no-preference', colorScheme: o.dark ? 'dark' : 'light' });
  await ctx.addInitScript(() => { try { localStorage.setItem('acc.confidential.v2', JSON.stringify({ at: 'test' })); } catch (e) {} });
  const p = await ctx.newPage(); const errs = [], ext = [];
  p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  p.on('request', r => { const u = r.url(); if (!u.startsWith(origin) && !u.startsWith('data:')) ext.push(u); });
  await p.goto(BASE + q, { waitUntil: 'networkidle' });
  return { p, ctx, errs, ext };
}
async function clock(p, m) { await p.click('#demoBtn'); await p.click(`#clocks button[data-m="${m}"]`); await p.keyboard.press('Escape'); await p.waitForTimeout(100); }
const txt = (p, s) => p.locator(s).first().innerText().catch(() => '');
const coach = async p => { await p.click('.tabs a[data-tab="coach"]'); await p.waitForTimeout(150); };
const next = async p => p.click('#nextTurn');
// the read as the page shows it: names in order, lead, its state lozenge, the fill widths (style and computed share of the track)
const read = p => p.evaluate(() => [...document.querySelectorAll('#sr .sr-row')].map(r => {
  const f = r.querySelector('.sr-fill'), t = r.querySelector('.sr-track');
  return { k: r.dataset.style, name: r.querySelector('.sr-name').textContent, lead: r.classList.contains('lead'), moved: r.classList.contains('moved'),
    state: (r.querySelector('.sr-state .lz') || {}).innerText || '', stateBold: !!r.querySelector('.sr-state .lz.bold'), target: parseFloat(f.style.width),
    share: f.getBoundingClientRect().width / t.getBoundingClientRect().width * 100, pct: r.querySelector('.sr-pct').textContent,
    ghost: r.querySelector('.sr-ghost').style.left, ghostOn: getComputedStyle(r.querySelector('.sr-ghost')).opacity !== '0',
    delta: (r.querySelector('.sr-delta') || {}).textContent || '', bg: getComputedStyle(f).backgroundColor, dur: getComputedStyle(f).transitionDuration,
    deltaAnim: r.querySelector('.sr-delta') ? getComputedStyle(r.querySelector('.sr-delta')).animationName : '' };
}));
const leadOf = rows => rows.find(r => r.lead) || {};
const LIGHT = ['rgb(194, 65, 106)', 'rgb(15, 143, 160)', 'rgb(74, 63, 201)', 'rgb(154, 122, 0)'];
const DARK = ['rgb(212, 92, 132)', 'rgb(39, 166, 182)', 'rgb(127, 114, 224)', 'rgb(184, 150, 31)'];
const lhHead = (p, s) => txt(p, `${s} .lh-head`);

// ---------- shared files: one verbatim copy each in the page; the model's fixtures
{
  const html = await (await fetch(BASE)).text();
  if (existsSync(SHARED + 'ads.css') && existsSync(SHARED + 'lifehealth.js')) {
    const ads = readFileSync(SHARED + 'ads.css', 'utf8').trimEnd();
    const lj = readFileSync(SHARED + 'lifehealth.js', 'utf8').split('\n').filter(l => !l.startsWith('if (typeof module !== "undefined") module.exports')).join('\n').trimEnd();
    ok(html.split(ads).length === 2, 'ads.css is in the page verbatim, once');
    ok(html.split(lj).length === 2, 'lifehealth.js is in the page verbatim (minus module.exports), once');
    const { readiness } = createRequire(import.meta.url)(SHARED + 'lifehealth.js');
    const f1 = readiness({ text: 'we just had a baby and bought a house, want the family protected', style: 'story', greenLight: true, talked: true });
    ok(f1.level === 'ready' && f1.confidence === 'Clear', 'fixture: baby + house + family + yes → READY, Clear', `${f1.levelWord} ${f1.confidence}`);
    const f2 = readiness({ text: 'just send me the quote', style: 'doer', talked: false });
    ok(f2.level === 'notyet', 'fixture: "just send me the quote" → NOT YET', f2.levelWord);
    const f3a = readiness({ text: 'the baby has us upside down', latest: 'the baby has us upside down', style: 'story', talked: true });
    const f3b = readiness({ text: 'the baby has us upside down. not right now', latest: 'not right now', style: 'story', talked: true });
    ok(f3a.level === 'seed' && f3b.level === 'notyet' && f3b.cues.includes('pushback'), 'fixture: a pushback turn drops the level', `${f3a.levelWord} → ${f3b.levelWord}`);
  } else ok(false, 'shared files found at SHARED_DIR', SHARED);
  ok(!/\bAI\b|(^|[^a-z])ai-/m.test(html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ')), 'no "AI" words in the page markup');
}

// ---------- Live Coach, desk: the read moves turn by turn
{
  const { p, ctx, errs, ext } = await open();
  await coach(p);
  let r = await read(p);
  ok(JSON.stringify(r.map(x => x.name)) === '["Storyteller","Questioner","Doer","Thinker"]', 'four rows in the fixed order', r.map(x => x.name).join(','));
  ok(JSON.stringify(r.map(x => x.bg)) === JSON.stringify(LIGHT), 'the four style colors (light)', r.map(x => x.bg).join(' | '));
  ok(r.every(x => x.dur.split(',')[0].trim() === '0.61s'), 'widths transition 610 ms', r[0].dur);
  ok(leadOf(r).k === 'story' && leadOf(r).state === 'TIE', 'turn 1: near even, Storyteller leads with TIE', JSON.stringify(r.map(x => x.target)));
  ok(/^Turn 1 · first read, Storyteller 38 · heard: “/.test(await txt(p, '#srHeard')) && await p.locator('#srHeard mark').count() >= 1, 'turn 1: the heard line names the turn and marks his words', await txt(p, '#srHeard'));
  ok(/STORYTELLER · TIE/.test(await txt(p, '#coachPanel .coachhead')), 'the suggestion header carries the read as a lozenge', await txt(p, '#coachPanel .coachhead'));
  ok(await p.locator('#lhCoach .lh-seed').count() === 1 && /^SEED/.test(await lhHead(p, '#lhCoach')) && /one sentence, no ask/.test(await lhHead(p, '#lhCoach')), 'Life & health turn 1: SEED, "one sentence, no ask"', await lhHead(p, '#lhCoach'));
  ok(await p.locator('#lhCoach .pt').count() === 0 && await p.locator('#lhCoach .lh-line').count() === 1 && /Can I ask you one thing about the baby\?/.test(await txt(p, '#lhCoach .lh-line')), 'SEED shows only the Open line (no tracker)');
  ok(/Illustration only, not a policy or quote, subject to underwriting\./.test(await txt(p, '#lhCoach')), 'the illustration footer under the line');
  ok(await p.locator('#lhCoach .rm .rm-ticks').count() === 1 && await p.locator('#lhCoach .rm[role="meter"]').getAttribute('aria-valuenow') === '50', 'the meter with its ticks, value 50');

  // turn 2: Questioner moves most (+25), the bars move, the ghost holds the previous value
  await next(p); await wait(60);
  r = await read(p);
  const q = r.find(x => x.k === 'asker');
  ok(q.target === 56 && Math.abs(q.share - 56) > 3, 'turn 2: Questioner width is mid-transition after 60 ms', `share ${q.share.toFixed(1)} → ${q.target}`);
  ok(q.moved && q.delta === '+25', 'turn 2: the row that moved most pulses and carries "+25"', `${q.moved} ${q.delta}`);
  ok(await p.locator('.sr-delta').count() === 1, 'one delta lozenge at a time');
  ok(r.find(x => x.k === 'story').ghost === '38%' && r.find(x => x.k === 'story').ghostOn, 'ghost tick at the previous value (Storyteller 38%)');
  await wait(900);
  r = await read(p);
  ok(r.every(x => Math.abs(x.share - x.target) < 1.5), 'after the transition the widths sit at their values', r.map(x => x.share.toFixed(0) + '/' + x.target).join(' '));
  ok(leadOf(r).k === 'asker' && leadOf(r).state === 'READING', 'turn 2: Questioner leads, READING');
  ok(/^Turn 2 · Questioner up 25 · heard: “/.test(await txt(p, '#srHeard')) && /What is the difference/i.test(await txt(p, '#srHeard mark')), 'turn 2 heard line: Questioner up 25 with his words marked', await txt(p, '#srHeard'));
  ok(/QUESTIONER · READING/.test(await txt(p, '#coachPanel .coachhead')), 'turn 2 header lozenge follows the read');
  await wait(1000);
  ok(await p.locator('.sr-delta').count() === 0 && !(await read(p)).some(x => x.moved), 'the delta lozenge is gone after 1.6 s');
  ok(JSON.stringify((await read(p)).map(x => x.name)) === '["Storyteller","Questioner","Doer","Thinker"]', 'rows never re-sort');

  // turn 3: the pushback — the read ties, the life door closes
  const before = await lhHead(p, '#lhCoach');
  await next(p); await wait(700);
  r = await read(p);
  ok(leadOf(r).k === 'thinker' && leadOf(r).state === 'TIE', 'turn 3: Thinker leads within 10 points, TIE');
  ok(/PUSHBACK/.test(await txt(p, '#coachPanel .coachhead')), 'turn 3: the header says PUSHBACK in words');
  const l3 = await lhHead(p, '#lhCoach');
  ok(/^SEED/.test(before) && /^NOT YET/.test(l3) && /finish the main ask first/.test(l3), 'a pushback turn drops Life & health from SEED to NOT YET', `${before} → ${l3}`);
  ok(await txt(p, '#lhCoach .es') === 'What would open it: a life event in their words, or a yes on the quote.' && await p.locator('#lhCoach .lh-line').count() === 0, 'NOT YET: the empty state says what would open it, no line');
  ok(/PUSHBACK/.test(await txt(p, '#lhCoach .lh-cues')), 'the cues say pushback in words');

  // turn 4: the life story — Storyteller up 48, READY, the tracker one line at a time
  await next(p); await wait(60);
  const m60 = await p.evaluate(() => { const f = document.querySelector('#lhCoach .rm-fill'); return [f.getBoundingClientRect().width / f.parentElement.getBoundingClientRect().width * 100, parseFloat(f.style.width), parseFloat(f.dataset.to)]; });
  ok(m60[2] === 80 && m60[0] < 70, 'the readiness meter moves with the turn (mid-transition)', m60.map(x => x.toFixed(0)).join(' '));
  await wait(800);
  r = await read(p);
  ok(leadOf(r).k === 'story' && leadOf(r).state === 'READING' && r.find(x => x.k === 'story').pct === '84%', 'turn 4: Storyteller 84, READING (not two turns yet)');
  ok(/^Turn 4 · Storyteller up 48 · heard: “It is just, if something happened to me, my wife/.test(await txt(p, '#srHeard')) && await p.locator('#srHeard mark').count() === 2, 'turn 4 heard line with two marked phrases', await txt(p, '#srHeard'));
  ok(/^READY/.test(await lhHead(p, '#lhCoach')) && /confidence: Clear/.test(await lhHead(p, '#lhCoach')), 'turn 4: READY, confidence Clear', await lhHead(p, '#lhCoach'));
  ok(JSON.stringify(await p.locator('#lhCoach .pt li').allInnerTexts()) === '["Open","Gap","Ask"]' && await txt(p, '#lhCoach .pt li.current') === 'Open', 'the progress tracker Open · Gap · Ask, Open current');
  ok(await p.locator('#lhCoach .lh-line').count() === 1 && await p.locator('#lhCoach [data-act="lh-back"]').isDisabled(), 'one line visible; Back is off on the first line');
  const open1 = await txt(p, '#lhCoach .lh-line');
  await p.click('#lhCoach [data-act="lh-next"]');
  ok(await txt(p, '#lhCoach .pt li.current') === 'Gap' && await p.locator('#lhCoach .pt li.visited').count() === 1 && await p.locator('#lhCoach .lh-line').count() === 1 && await txt(p, '#lhCoach .lh-line') !== open1, '"Next line →" advances to Gap, still one line');
  await p.click('#lhCoach [data-act="lh-next"]');
  ok(await txt(p, '#lhCoach .pt li.current') === 'Ask' && await p.locator('#lhCoach [data-act="lh-next"]').isDisabled(), 'then Ask; Next is off on the last line');
  await p.click('#lhCoach [data-act="lh-back"]');
  ok(await txt(p, '#lhCoach .pt li.current') === 'Gap', '"← Back" steps back');
  ok(await p.evaluate(() => document.activeElement && document.activeElement.closest('#lhCoach') !== null), 'focus stays in the panel after a step');

  // turn 5: the yes — LOCKED
  await next(p); await wait(800);
  r = await read(p);
  ok(leadOf(r).k === 'story' && leadOf(r).state === 'LOCKED' && leadOf(r).stateBold && leadOf(r).pct === '93%', 'turn 5: Storyteller 93, LOCKED (bold)');
  ok(/STORYTELLER · LOCKED/.test(await txt(p, '#coachPanel .coachhead')), 'turn 5 header: STORYTELLER · LOCKED');
  ok(/SAID YES/.test(await txt(p, '#lhCoach .lh-cues')) && /^READY/.test(await lhHead(p, '#lhCoach')), 'the yes is a cue; still READY');
  ok(await txt(p, '#turnN') === 'turn 5 of 5' && await p.locator('#chat .bub').count() === 9, 'the conversation shows five turns');

  // Why: the style's why in a section message
  await p.click('#srWhy');
  ok(await p.locator('#srWhyMsg .sm').isVisible() && /They decide by whether you listened/.test(await txt(p, '#srWhyMsg')) && await p.locator('#srWhy').getAttribute('aria-expanded') === 'true', '"Why" opens the style\'s why in a section message');
  await p.click('#srWhyMsg .sm-action');
  ok(await p.locator('#srWhyMsg').isHidden(), 'the section message hides with its one action');

  // Replay: turns 1…5 at one per 1.618 s, then back to the current turn
  await p.click('#srReplay');
  const seen = [];
  for (let i = 0; i < 60; i++) { const t = await txt(p, '#srHeard'); const m = t.match(/Turn (\d)/); if (m && seen[seen.length - 1] !== +m[1]) seen.push(+m[1]); await wait(150); if (!(await p.locator('#srReplay').isDisabled())) break; }
  ok(JSON.stringify(seen) === '[1,2,3,4,5]', 'Replay runs through all turns in order', JSON.stringify(seen));
  ok(!/REPLAY/i.test(await txt(p, '#srHeard')) && /^Turn 5/.test(await txt(p, '#srHeard')) && leadOf(await read(p)).state === 'LOCKED', 'then returns to the current turn');

  // no "AI" words in the coach view, any turn
  let ai = [];
  for (let i = 0; i < 5; i++) { await next(p); await wait(50); const t = await p.evaluate(() => document.querySelector('#view-coach').innerText); const m = t.match(/\bAI\b|(^|[^a-z])ai-/gim); if (m) ai.push(m.join(',')); }
  ok(ai.length === 0, 'no "AI" strings in Live Coach', ai.join(' | '));
  ok(errs.length === 0, 'no console errors (coach)', errs.join(' | '));
  ok(ext.length === 0, 'no external requests', ext.join(' | '));
  await ctx.close();
}

// ---------- Live Coach, reduced motion: the values jump, the delta does not animate
{
  const { p, ctx, errs } = await open('', { reduce: true });
  await coach(p);
  ok((await read(p)).every(x => x.dur.split(',').every(d => parseFloat(d) === 0)), 'reduced motion: no width transition');
  await next(p); await wait(40);
  const r = await read(p);
  ok(r.every(x => Math.abs(x.share - x.target) < 1.5), 'reduced motion: the widths jump to their values', r.map(x => x.share.toFixed(0) + '/' + x.target).join(' '));
  ok(r.find(x => x.k === 'asker').deltaAnim === 'none', 'reduced motion: the delta lozenge does not animate');
  await wait(1800);
  ok(await p.locator('.sr-delta').count() === 0, 'reduced motion: the delta still goes away');
  ok(await p.evaluate(() => getComputedStyle(document.querySelector('#lhCoach .rm-fill')).transitionDuration.split(',').every(d => parseFloat(d) === 0)), 'reduced motion: the meter jumps');
  await p.click('#srReplay'); await wait(120);
  ok(/Turn 1/.test(await txt(p, '#srHeard')) && (await read(p)).every(x => Math.abs(x.share - x.target) < 1.5), 'reduced motion: Replay starts at once and jumps');
  ok(errs.length === 0, 'no console errors (reduced motion)', errs.join(' | '));
  await ctx.close();
}

// ---------- Today: lozenges on rows, cards and the Now box; Life & health opens in place
{
  const { p, ctx, errs } = await open();
  await clock(p, 660);
  const rows = await p.evaluate(() => [...document.querySelectorAll('#wflist .wrow')].map(r => { const z = r.querySelector('.wrow-who .lz'); return z && [...z.classList].find(c => /^lz-(story|asker|doer|thinker)$/.test(c)) && z.textContent; }));
  ok(rows.length === 28 && rows.every(Boolean), 'every row\'s style chip is a style lozenge', rows.filter(x => !x).length);
  ok(await p.locator('.wchip, .chip, .pill, .urg').count() === 0, 'no old chips left (style, status, consent, Book)');
  ok(await p.locator('#wflist .wrow .lh-lz').count() === 0, 'rows get no Life & health lozenge');
  // Now box: Ben Fixture, Thinker, NOT YET
  ok(await p.locator('#wfnow .wnow-name .lz.lz-thinker').innerText() === 'THINKER', 'Now box: the style lozenge');
  ok(await txt(p, '#wfnow .lh-lz') === 'LIFE & HEALTH · NOT YET' && /not yet, finish the main ask first/.test(await p.locator('#wfnow .lh-lz').getAttribute('title')), 'Now box: "LIFE & HEALTH · NOT YET" with a title in words');
  await p.click('#wfnow .lh-lz');
  ok(await p.locator('#wfnow .lh').isVisible() && /^NOT YET/.test(await lhHead(p, '#wfnow')) && /What would open it/.test(await txt(p, '#wfnow .es')) && await p.locator('#wfnow .lh-lz').getAttribute('aria-expanded') === 'true', 'Now box: the lozenge opens the panel in place (NOT YET, the empty state)');
  ok(await txt(p, '#wfnow .btn') === 'Call', 'Now box keeps its one button');
  await p.click('#wfnow .lh-lz');
  ok(await p.locator('#wfnow .lh').count() === 0, 'Now box: tap again to close');
  // the Workflow card: Diego Mock, Doer, booked → READY, Clear
  await p.click('.wrow[data-id="C-003"] > .btn');
  const card = p.locator('.wrow[data-id="C-003"] .wcard');
  const chips = await card.locator('.chips > *').evaluateAll(els => els.map(e => [e.className, e.innerText]));
  ok(JSON.stringify(chips.slice(0, 2).map(c => c[1])) === '["EMAIL OK","TEXT OK"]' && chips.slice(0, 2).every(c => /\blz\b.*lz-success/.test(c[0])), 'card chips are lozenges with the same words', JSON.stringify(chips));
  ok(/lh-lz/.test(chips[chips.length - 1][0]) && chips[chips.length - 1][1] === 'LIFE & HEALTH · READY' && /lz-success bold/.test(chips[chips.length - 1][0]), 'the Life & health lozenge ends the chips row: READY, success bold');
  await card.locator('.lh-lz').click();
  ok(await card.locator('.lh').isVisible() && /^READY/.test(await lhHead(p, '.wrow[data-id="C-003"] .wcard')) && /confidence: Clear/.test(await lhHead(p, '.wrow[data-id="C-003"] .wcard')), 'tapping it opens the panel in the card: READY, Clear');
  ok(/BABY/.test(await txt(p, '.wrow[data-id="C-003"] .lh-cues')) && /SAID YES/.test(await txt(p, '.wrow[data-id="C-003"] .lh-cues')), 'the cues: their words and the booked call as the yes');
  ok(await card.locator('.lh-line').count() === 1 && await txt(p, '.wrow[data-id="C-003"] .pt li.current') === 'Open' && /^“One more thing, thirty seconds\./.test(await txt(p, '.wrow[data-id="C-003"] .lh-line')), 'one line at a time, the Doer\'s Open line first');
  await card.locator('[data-act="lh-next"]').click();
  await p.locator('.wrow[data-id="C-003"] [data-act="lh-next"]').click();
  ok(await txt(p, '.wrow[data-id="C-003"] .pt li.current') === 'Ask' && /Ready to sign by (Monday|Tuesday|Wednesday|Thursday|Friday)\./.test(await txt(p, '.wrow[data-id="C-003"] .lh-line')), 'the tracker advances to the Ask, with the day named');
  ok(!/\b(guarantee|guaranteed|tax-free|grows|growth|cash value)\b/i.test(await txt(p, '.wrow[data-id="C-003"] .lh')), 'no growth, tax or guarantee words in the life lines');
  ok(await p.locator('.wrow[data-id="C-003"] .wcard .lh').evaluate(e => { const c = e.closest('.wcard').getBoundingClientRect(), r = e.getBoundingClientRect(); return r.left >= c.left && r.right <= c.right + 0.5; }), 'the panel sits inside the card');
  // a NOT YET card and a SEED card
  await p.click('.wrow[data-id="Q01"] .wrow-head');
  ok(await txt(p, '.wrow[data-id="Q01"] .lh-lz') === 'LIFE & HEALTH · NOT YET', '"just send me the quote" → NOT YET on the card');
  await p.click('.wrow[data-id="Q15"] > .btn');
  ok(await txt(p, '.wrow[data-id="Q15"] .lh-lz') === 'LIFE & HEALTH · SEED' && /lz-discovery/.test(await p.locator('.wrow[data-id="Q15"] .lh-lz').getAttribute('class')), 'a Thinker with a new baby → SEED (discovery)');
  await p.click('.wrow[data-id="Q15"] .lh-lz');
  ok(await p.locator('.wrow[data-id="Q15"] .lh .pt').count() === 0 && await p.locator('.wrow[data-id="Q15"] .lh-line').count() === 1 && /^“No decision today\./.test(await txt(p, '.wrow[data-id="Q15"] .lh-line')), 'SEED on a card: only the Open line, in the Thinker\'s words');
  // Workflow still behaves: Approve still reads the same
  ok(/^Approve · sends \d{1,2}:\d{2} (AM|PM)$/.test(await txt(p, '.wrow[data-id="Q15"] [data-act="wf-approve"]')), 'the card\'s Approve button is unchanged');
  ok(errs.length === 0, 'no console errors (Today)', errs.join(' | '));
  await ctx.close();
}

// ---------- Lanes: the card lozenge opens the same panel; status chips are lozenges
{
  const { p, ctx, errs } = await open('?view=lanes');
  ok(await p.locator('#lane-stop .card.stop .lz.lz-danger.bold').first().innerText() === 'STOPPED', 'Lanes: "stopped" is a danger lozenge');
  ok(await p.locator('#view-today .card .when-lz').count() > 10 && await p.locator('#view-today .when').count() === 0, 'Lanes: the time and status chips are lozenges');
  const oc = p.locator('#lane-calls .card.open').first();
  ok(await oc.count() === 1 && await oc.locator('.chips .lh-lz').count() === 1, 'Lanes: the open card ends its chips with Life & health');
  await oc.locator('.lh-lz').click();
  ok(await p.locator('#lane-calls .card.open .lh').isVisible() && await p.locator('#lane-calls .card.open .lh-lz').getAttribute('aria-expanded') === 'true', 'Lanes: the lozenge opens the panel in place');
  ok(errs.length === 0, 'no console errors (Lanes)', errs.join(' | '));
  await ctx.close();
}

// ---------- dark mode: the tokens carry the dark values; the coach renders cleanly
{
  const { p, ctx, errs } = await open('', { dark: true });
  await coach(p);
  ok(JSON.stringify((await read(p)).map(x => x.bg)) === JSON.stringify(DARK), 'the four style colors (dark)', (await read(p)).map(x => x.bg).join(' | '));
  for (let i = 0; i < 4; i++) { await next(p); await wait(120); }
  await wait(800);
  ok(await p.evaluate(() => getComputedStyle(document.body).backgroundColor) === 'rgb(16, 21, 27)', 'dark: body background');
  ok(await p.evaluate(() => { const z = document.querySelector('#lhCoach .lh-head .lz'); const c = getComputedStyle(z); return c.backgroundColor === 'rgb(91, 199, 143)' && c.color === 'rgb(16, 21, 27)'; }), 'dark: READY lozenge is success bold with the dark-surface text');
  ok(await p.evaluate(() => getComputedStyle(document.querySelector('.sr-row.lead .sr-name')).color) === 'rgb(230, 234, 238)', 'dark: the lead name in ink');
  await p.click('.tabs a[data-tab="today"]'); await clock(p, 660); await p.click('.wrow[data-id="C-003"] > .btn'); await p.click('.wrow[data-id="C-003"] .lh-lz');
  ok(await p.evaluate(() => getComputedStyle(document.querySelector('.wrow[data-id="C-003"] .lh')).backgroundColor) === 'rgb(23, 30, 38)', 'dark: the card panel sits on the dark surface');
  ok(errs.length === 0, 'dark: no console errors', errs.join(' | '));
  await ctx.close();
}

// ---------- phone: the coach fits
{
  const { p, ctx, errs } = await open('', { w: 390, h: 844 });
  await coach(p); for (let i = 0; i < 3; i++) { await next(p); await wait(100); }
  await wait(800);
  ok(await p.evaluate(() => document.documentElement.scrollWidth - innerWidth) <= 0, 'phone: no horizontal scroll in Live Coach');
  ok(await p.evaluate(() => [...document.querySelectorAll('#sr .sr-row')].every(r => r.scrollWidth <= r.clientWidth + 1)), 'phone: the read rows fit');
  ok(await p.evaluate(() => [...document.querySelectorAll('#lhCoach .lh-btn')].every(e => e.getBoundingClientRect().height >= 44)), 'phone: the line buttons are tappable');
  ok(errs.length === 0, 'phone: no console errors', errs.join(' | '));
  await ctx.close();
}

await b.close();
console.log(`v2-v18-coach: ${pass} passed, ${fail} failed`);
if (fail) { console.log(fails.map(f => '  FAIL ' + f).join('\n')); process.exit(1); }
