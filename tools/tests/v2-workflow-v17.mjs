// v17 acceptance for v2: the Workflow view (default), the time box per task, the marks, the card beneath a row,
// Approve with its send time, strike-then-fold, the Now box's "Next →", the view switch, reduced motion, no "AI" words.
// Run: node tools/tests/v2-workflow-v17.mjs [base]   (default http://127.0.0.1:4210/tools/dist/v2/)
import { chromium } from '/opt/npm-tools/node_modules/playwright/index.mjs';
const BASE = process.argv[2] || 'http://127.0.0.1:4210/tools/dist/v2/';
const origin = new URL(BASE).origin;
const b = await chromium.launch();
let pass = 0, fail = 0; const fails = [];
const ok = (cond, name, info = '') => { if (cond) pass++; else { fail++; fails.push(`${name}${info !== '' ? ' · ' + info : ''}`); } };

async function open(q = '', o = {}) {
  const w = o.w || 1440, h = o.h || 900;
  const ctx = await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500, reducedMotion: o.reduce ? 'reduce' : 'no-preference' });
  await ctx.addInitScript(() => { try { localStorage.setItem('acc.confidential.v2', JSON.stringify({ at: 'test' })); } catch (e) {} });
  const p = await ctx.newPage(); const errs = [], ext = [];
  p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  p.on('request', r => { const u = r.url(); if (!u.startsWith(origin) && !u.startsWith('data:')) ext.push(u); });
  await p.goto(BASE + q, { waitUntil: 'networkidle' });
  return { p, ctx, errs, ext };
}
async function clock(p, m) { await p.click('#demoBtn'); await p.click(`#clocks button[data-m="${m}"]`); await p.keyboard.press('Escape'); await p.waitForTimeout(100); }
const vis = (p, s) => p.locator(s).first().isVisible().catch(() => false);
const txt = (p, s) => p.locator(s).first().innerText().catch(() => '');

// ---------- desk: default view, structure at the demo's 11:00 state
{
  const { p, ctx, errs, ext } = await open();
  ok(await p.evaluate(() => document.querySelector('#view-today').dataset.view) === 'workflow', 'default view is Workflow');
  // the pulse runs on a due box at load (and reduced motion turns it off, below)
  ok(await p.evaluate(() => { const e = document.querySelector('#wflist .tb-due'); return !!e && getComputedStyle(e).animationName === 'tb-pulse'; }), 'a due box pulses at load');
  ok(await vis(p, '.wf') && !(await vis(p, '.lanespanel')) && !(await vis(p, '#lane-calls')), 'Workflow shows the four boxes, not the lanes');
  ok(!(await vis(p, '#burn')) && !(await vis(p, '#strip')) && !(await vis(p, '#look')), 'no charts, strip or board in Workflow');
  await clock(p, 660);
  const stat = await txt(p, '#wfstat');
  ok(/^11:00 AM/.test(stat) && /\b3 of 28 done\b/.test(stat) && /Next: call Ben Fixture now/.test(stat), 'one status line: time · N of 28 done · Next', stat.replace(/\n/g, ' '));
  ok(await p.locator('#wfstat .btn', { hasText: 'Open' }).count() === 1, 'status line has its Open button');
  ok(/Compliance/.test(await txt(p, '#cpill summary')), 'compliance pill on the status line');
  ok(await p.evaluate(() => { const c = document.querySelector('.wfctl'); return c.lastElementChild.id === 'planlink' && c.lastElementChild.textContent.includes('Day plan'); }), 'Day plan link at the right end');
  const sw = await p.locator('#vsw button').allInnerTexts();
  ok(JSON.stringify(sw) === '["Workflow","Lanes","Look"]', 'view switch has three options in order', JSON.stringify(sw));
  ok(await p.locator('#vsw button.on').innerText() === 'Workflow' && await p.locator('#vsw button[aria-pressed="true"]').count() === 1, 'switch marks Workflow as on');
  const dv = await p.locator('#views button').allInnerTexts();
  ok(JSON.stringify(dv) === '["Workflow","Lanes","Look"]', 'demo drawer view row lists the three', JSON.stringify(dv));
  // four boxes, golden split
  const heads = await p.locator('.wf h2').allInnerTexts();
  ok(JSON.stringify(heads) === `["Today's prospects","Now","Needs first touch","Coming up"]`, 'four boxes with their names', JSON.stringify(heads));
  const split = await p.evaluate(() => { const a = document.querySelector('.wlistbox').getBoundingClientRect().width, s = document.querySelector('.wfside').getBoundingClientRect().width; return a / (a + s); });
  ok(Math.abs(split - 0.618) < 0.01, 'golden split 61.8 / 38.2 on desk', split.toFixed(3));
  ok(/^28 today · 3 small wins$/.test(await txt(p, '#wb1meta')), 'Box 1 header: 28 today · N small wins', await txt(p, '#wb1meta'));
  // Box 1: 28 rows, 20 outside the cooler fold, 8 under it
  const rows = await p.locator('#wflist .wrow').count();
  const cool = await p.locator('#wflist details.wcool .wrow').count();
  ok(rows === 28, 'Box 1 has 28 rows', rows);
  ok(cool === 8 && rows - cool === 20, '20 warm rows, 8 under the cooler fold', `${rows - cool} / ${cool}`);
  ok(/^8 cooler leads · open time$/.test(await txt(p, 'details.wcool > summary')), 'cooler fold reads "8 cooler leads · open time"');
  ok(!(await p.locator('details.wcool').evaluate(d => d.open)), 'cooler fold is folded');
  ok(/^Done today \(3\)$/.test(await txt(p, 'details.wdone > summary')), 'Done today (3) at 11:00');
  // each row: one time box, three marks with titles, in order
  const rowCheck = await p.evaluate(() => [...document.querySelectorAll('#wflist .wrow')].map(r => {
    const h = r.querySelector('.wrow-head'), tb = h.querySelectorAll('svg.tb'), m = [...h.querySelectorAll('svg.tbm')];
    return { id: r.dataset.id, tb: tb.length, label: tb[0] && tb[0].getAttribute('aria-label'), role: tb[0] && tb[0].getAttribute('role'),
      marks: m.map(x => x.classList[1]).join(','), titles: m.every(x => (x.querySelector('title') || {}).textContent && x.getAttribute('aria-label')) };
  }));
  ok(rowCheck.every(r => r.tb === 1 && r.role === 'img' && r.label), 'each row has one time-box SVG, role=img, labelled in words', JSON.stringify(rowCheck.filter(r => r.tb !== 1 || !r.label)));
  ok(rowCheck.every(r => r.marks === 'tbm-email,tbm-text,tbm-ok' && r.titles), 'each row has three marks (email · text · compliance) with titles');
  const mt = id => p.evaluate(id => [...document.querySelectorAll(`.wrow[data-id="${id}"] .wrow-head svg.tbm title`)].map(t => t.textContent), id);
  ok((await mt('Q20'))[1] === 'Texted STOP', 'STOP lead: Text mark titled "Texted STOP"');
  ok((await mt('K01'))[1] === 'Text waits: no OK on file', 'no text consent: "Text waits: no OK on file"');
  ok((await mt('Q10'))[1] === 'Text ready' && (await mt('Q10'))[0] === 'Email ready' && /^Compliance ✓/.test((await mt('Q10'))[2]), 'ready marks titled in words');
  ok(await p.evaluate(() => { const s = document.querySelector('.wrow[data-id="K01"] svg.tbm-text'); return !s.classList.contains('on') && !!s.querySelector('path'); }), 'Text waits mark is hollow with a bar');
  ok(await p.locator('.wrow[data-id="Q20"] .wrow-head svg.tb-blocked').count() === 1 && /Needs a decision · texted STOP/.test(await txt(p, '.wrow[data-id="Q20"] .wrow-next')), 'stopped lead: blocked box and the reason in words');
  // next step in words, buttons
  ok(/^Call · 3:10 PM$/.test(await txt(p, '.wrow[data-id="Q12"] .wrow-next')) && await txt(p, '.wrow[data-id="Q12"] > .btn') === 'Call', 'call row: "Call · 3:10 PM" and a Call button');
  ok(/^Email · sends 1:10 PM$/.test(await txt(p, '.wrow[data-id="Q09"] .wrow-next')) && await txt(p, '.wrow[data-id="Q09"] > .btn') === 'Check', 'message row: "Email · sends 1:10 PM" and a Check button');
  ok(await p.evaluate(() => { const s = document.querySelector('.wrow[data-id="Q09"] svg.tb'); return s.classList.contains('tb-ready') && s.querySelector('.tb-label').textContent === '1:10' && !!s.querySelector('.tb-fill'); }), 'message box shows its send time and the elapsed fill');
  // Now box: one lead, the hero box (55), one button
  ok(await p.locator('#wfnow .wnow').count() === 1 && await p.locator('#wfnow svg.tb').count() === 1, 'Now box holds one lead and one time box');
  ok(await p.evaluate(() => { const s = document.querySelector('#wfnow svg.tb'); return Math.round(+s.getAttribute('width')) === Math.round(89 + 55 / 1.618 / 2); }), 'Now box: hero box h=55 (w=89)');
  ok(await txt(p, '#wfnow .btn') === 'Call' && /Ben Fixture/.test(await txt(p, '#wfnow .wnow-name')), 'Now box: Ben Fixture with a Call button');
  // Needs first touch: freshest first; Coming up: booked calls and X-dates with h=34 boxes
  ok(JSON.stringify(await p.locator('#wffirst .wmini-name').allInnerTexts()) === '["Priya Placeholder","Ben Fixture"]', 'Needs first touch: new leads, freshest first');
  const soon = await p.locator('#wfsoon .wmini-name').allInnerTexts();
  ok(JSON.stringify(soon) === '["Diego Mock","Marcus Sample","Sarah Doe"]', 'Coming up: booked calls and X-dates within three days', JSON.stringify(soon));
  ok(await p.evaluate(() => [...document.querySelectorAll('#wfsoon svg.tb')].every(s => Math.round(+s.getAttribute('width')) === Math.round(55 + 34 / 1.618 / 2))), 'Coming up uses h=34 boxes');

  // a message row's Check opens the card beneath the row; Approve shows "sends h:mm"; the row then reads Approved
  await p.click('.wrow[data-id="Q09"] > .btn');
  const card = p.locator('.wrow[data-id="Q09"] .wcard');
  ok(await card.isVisible(), 'Check opens the card');
  ok(await p.evaluate(() => { const r = document.querySelector('.wrow[data-id="Q09"]'), h = r.querySelector('.wrow-head').getBoundingClientRect(), c = r.querySelector('.wcard').getBoundingClientRect(); return c.top >= h.bottom - 1 && Math.abs(c.left - h.left) < 2; }), 'the card opens beneath its row');
  ok(await p.locator('.wrow[data-id="Q09"] > .btn').getAttribute('aria-expanded') === 'true', 'row button reports aria-expanded');
  ok(await card.locator('.subj').count() === 1 && await card.locator('.move').count() >= 2 && await card.locator('.fact, mark').count() >= 1, 'the draft with its facts marked');
  const why = await card.locator('.wwhy').innerText();
  ok(/^Why this draft · Hakobian Strategic Coaching: No pressure\. Something to think with\. A date for the next touch\. A no-question plus explicit control\./.test(why), 'coaching line: style essence + the Ask\'s why', why);
  ok(JSON.stringify(await card.locator('.wtl-k').allInnerTexts()) === '["DONE","NOW","NEXT"]' && await card.locator('.wtl svg.tb').count() === 3, 'three-box timeline: done · now · next');
  ok(await card.locator('.wtl svg.tb-done').count() === 1, 'timeline: the done step is a done box');
  const appr = await card.locator('[data-act="wf-approve"]').innerText();
  ok(/^Approve · sends \d{1,2}:\d{2} (AM|PM)$/.test(appr), 'primary button "Approve · sends h:mm"', appr);
  ok(await card.locator('button', { hasText: 'Edit' }).count() === 1 && await card.locator('button', { hasText: 'Skip' }).count() === 1, 'Edit and Skip beside Approve');
  await card.locator('[data-act="wf-approve"]').click();
  await p.waitForTimeout(150);
  const q9 = await txt(p, '.wrow[data-id="Q09"] .wrow-next');
  ok(q9 === 'Approved · ' + appr.replace('Approve · sends ', ''), 'row reads "Approved · h:mm"', q9);
  ok(await p.locator('.wrow[data-id="Q09"] .wrow-head svg.tb-approved').count() === 1 && await p.evaluate(() => [...document.querySelectorAll('.wrow[data-id="Q09"] .wrow-head svg.tb text')].some(t => t.textContent === '✓')), 'approved row shows the ✓ state');
  ok(await p.locator('.wrow[data-id="Q09"] .wcard').count() === 0, 'the card closes after Approve');
  ok(await p.locator('#wflist > ul > .wrow[data-id="Q09"]').count() === 1, 'an approved message stays on the list until its hour');
  ok(/^28 today · 4 small wins$/.test(await txt(p, '#wb1meta')), 'small wins count the approval');
  ok(await p.locator('#wflist .wrow.is-open').count() === 1, 'the next due row opens by itself after Approve');
  ok(await txt(p, '#wfnow .btn') === 'Next →', 'Now box shows "Next →" after Approve');

  // a call row's outcome strikes the row, then folds it under Done today; Now shows "Next →"
  await p.click('.wrow[data-id="Q01"] .wrow-head');
  const c1 = p.locator('.wrow[data-id="Q01"] .wcard');
  ok(await c1.isVisible() && await c1.locator('.script .move').count() >= 1 && await c1.locator('[data-wftimer]').count() === 1, 'call card: say-lines and the timer');
  ok(JSON.stringify(await c1.locator('[data-act="wf-out"]').allInnerTexts()) === '["Talked","Voicemail","No answer"]', 'call card: the three outcomes');
  await c1.locator('[data-out="Talked"]').click();
  ok(await p.locator('.wrow[data-id="Q01"]').evaluate(r => r.classList.contains('row-done-anim') && getComputedStyle(r).textDecorationLine.includes('line-through')), 'the completed row strikes through');
  ok(await p.locator('#wflist > ul > .wrow[data-id="Q01"]').count() === 1, 'the struck row stays in place while it folds');
  await p.waitForTimeout(1200);
  ok(await p.locator('details.wdone .wrow[data-id="Q01"]').count() === 1 && await p.locator('#wflist > ul > .wrow[data-id="Q01"]').count() === 0, 'then folds under Done today');
  ok(/^Done today \(4\)$/.test(await txt(p, 'details.wdone > summary')), 'Done today (N) counts it');
  ok(await p.locator('#wfnow .wnow').count() === 1 && await txt(p, '#wfnow .btn') === 'Next →', 'Now box shows one lead and "Next →" after an outcome');
  ok(/✓ Talked · Priya Placeholder/.test(await txt(p, '#wfnow .wnow-done')), 'Now box confirms the outcome in words');
  const nowId = await p.locator('#wfnow .wnow').getAttribute('data-id');
  ok(await p.locator(`#wflist .wrow.is-open[data-id="${nowId}"]`).count() === 1, 'the next due row (the Now lead) opened by itself');
  await p.click('#wfnow .btn');
  ok(await txt(p, '#wfnow .btn') === 'Call' && await p.locator(`#wflist .wrow.is-open[data-id="${nowId}"]`).count() === 1, '"Next →" loads the next lead and its row');
  // Ben was the last new lead: Needs first touch empties
  await p.locator(`.wrow[data-id="${nowId}"] [data-out="No answer"]`).click();
  await p.waitForTimeout(1100);
  ok(/^None waiting · a new lead gets its first call inside a minute\.$/.test(await txt(p, '#wffirst')), 'Needs first touch empty state', await txt(p, '#wffirst'));
  // Edit in place, then Skip folds
  await p.click('.wrow[data-id="Q15"] > .btn');
  await p.click('.wrow[data-id="Q15"] [data-act="wf-edit"]');
  ok(await p.locator('.wrow[data-id="Q15"] textarea.wedit').isVisible() && /^Subject: /.test(await p.locator('.wrow[data-id="Q15"] textarea.wedit').inputValue()), 'Edit opens a textarea in place');
  await p.click('.wrow[data-id="Q15"] [data-act="wf-skip"]');
  await p.waitForTimeout(1100);
  ok(await p.locator('details.wdone .wrow[data-id="Q15"]').count() === 1, 'Skip folds the row into Done today');
  // a stopped lead's card offers the decision
  await p.click('.wrow[data-id="Q20"] > .btn');
  ok(/Replied STOP/.test(await txt(p, '.wrow[data-id="Q20"] .wcard')) && await p.locator('.wrow[data-id="Q20"] [data-act="decide"]').count() === 2, 'stopped lead: the reason in words and the two choices');
  // the switch and the Day plan link
  await p.click('#vsw button[data-v="lanes"]');
  ok(await p.evaluate(() => document.querySelector('#view-today').dataset.view) === 'lanes' && await vis(p, '#lane-calls') && !(await vis(p, '.wf')) && /view=lanes/.test(p.url()), 'switch → Lanes (and ?view=lanes in the address)');
  await p.click('#vsw button[data-v="look"]');
  ok(await vis(p, '#look') && !(await vis(p, '#strip')) && !(await vis(p, '#lane-calls')), 'switch → Look shows the four quadrants');
  await p.click('#look .lookname >> nth=0');
  ok(await p.evaluate(() => document.querySelector('#view-today').dataset.view) === 'workflow' && await p.locator('#wflist .wrow.is-open').count() === 1, 'a name in Look opens its row in Workflow');
  await p.click('#demoBtn'); await p.click('#views button[data-v="lanes"]');
  ok(await p.evaluate(() => document.querySelector('#view-today').dataset.view) === 'lanes' && await p.locator('#demoPanel').isHidden(), 'demo drawer view row switches the view');
  await p.click('#planlink');
  ok(await vis(p, '#view-plans') && !(await vis(p, '#view-today')), 'Day plan link opens the plans');
  // no "AI" words anywhere on screen: every tab, every view
  let aiHits = [];
  for (const t of ['today', 'compose', 'plans', 'coach', 'book', 'scoreboard', 'why']) {
    await p.click(`.tabs a[data-tab="${t}"]`);
    for (const v of t === 'today' ? ['workflow', 'lanes', 'look'] : [null]) {
      if (v) await p.click(`#vsw button[data-v="${v}"]`);
      const body = await p.evaluate(() => document.body.innerText);
      const m = body.match(/\bAI\b|(^|[^a-z])ai-/gim); if (m) aiHits.push(`${t}${v ? '/' + v : ''}: ${m.join(',')}`);
    }
  }
  ok(aiHits.length === 0, 'no "AI" / "ai-" strings in the visible text', aiHits.join(' | '));
  ok(await p.evaluate(() => document.documentElement.scrollWidth - innerWidth) <= 0, 'no horizontal scroll on desk');
  ok(errs.length === 0, 'no console errors (desk)', errs.join(' | '));
  ok(ext.length === 0, 'no external requests', ext.join(' | '));
  await ctx.close();
}

// ---------- URL params set the first view
for (const [v, show, hide] of [['lanes', '#lane-calls', '.wf'], ['look', '#look', '#lane-calls'], ['workflow', '.wf', '#lane-calls']]) {
  const { p, ctx, errs } = await open('?view=' + v);
  ok(await p.evaluate(() => document.querySelector('#view-today').dataset.view) === v && await vis(p, show) && !(await vis(p, hide)), `?view=${v} sets the first view`);
  ok(await p.locator('#vsw button.on').getAttribute('data-v') === v, `?view=${v}: the switch shows it`);
  if (v === 'lanes') {
    // a cooler lead's call card opens in Lanes (its say-line is a single string)
    await p.click('#lane-calls details.fold.cool > summary');
    await p.click('#lane-calls .card[data-id="K07"] .r1');
    ok(await p.locator('#lane-calls .card.open[data-id="K07"] .script .move').count() === 1, 'Lanes: a cooler call card opens with its say-line');
  }
  ok(errs.length === 0, `?view=${v}: no console errors`, errs.join(' | '));
  await ctx.close();
}

// ---------- reduced motion: no pulse
{
  const { p, ctx } = await open('', { reduce: true });
  ok(await p.evaluate(() => { const e = [...document.querySelectorAll('.tb-due')]; return e.length > 0 && e.every(x => getComputedStyle(x).animationName === 'none'); }), 'prefers-reduced-motion disables the pulse');
  ok(await p.evaluate(() => { const r = document.createElement('div'); r.className = 'row-done-anim'; document.body.append(r); const t = getComputedStyle(r).transitionDuration; r.remove(); return t.split(',').every(x => parseFloat(x) === 0); }), 'prefers-reduced-motion disables the strike-and-fold motion');
  await ctx.close();
}

// ---------- phone: stacked Now, Today's prospects, Needs first touch, Coming up
{
  const { p, ctx, errs } = await open('', { w: 390, h: 844 });
  await clock(p, 660);
  const ys = await p.evaluate(() => ['.wnowbox', '.wlistbox', '.wfirstbox', '.wsoonbox'].map(s => document.querySelector(s).getBoundingClientRect().top));
  ok(ys.every((y, i) => i === 0 || y > ys[i - 1]), 'phone order: Now, Today\'s prospects, Needs first touch, Coming up', ys.map(Math.round).join(','));
  ok(await p.evaluate(() => { const w = document.querySelector('.wlistbox').getBoundingClientRect().width; return ['.wnowbox', '.wfirstbox', '.wsoonbox'].every(s => Math.abs(document.querySelector(s).getBoundingClientRect().width - w) < 1); }), 'phone: the four boxes share one width');
  ok(await p.evaluate(() => document.documentElement.scrollWidth - innerWidth) <= 0, 'no horizontal scroll on a phone');
  ok(await p.evaluate(() => [...document.querySelectorAll('#wflist > ul > .wrow .wrow-next')].every(e => e.scrollWidth <= e.clientWidth + 1)), 'phone: next-step words fit their row');
  ok(await p.evaluate(() => [...document.querySelectorAll('#wflist > ul > .wrow > .btn')].every(e => e.getBoundingClientRect().height >= 34)), 'phone: row buttons stay tappable');
  await p.click('.wrow[data-id="Q10"] > .btn');
  ok(await p.locator('.wrow[data-id="Q10"] .wcard').isVisible() && await p.evaluate(() => document.documentElement.scrollWidth - innerWidth) <= 0, 'phone: a text card opens without overflow');
  ok(errs.length === 0, 'no console errors (phone)', errs.join(' | '));
  await ctx.close();
}

await b.close();
console.log(`v2-workflow-v17: ${pass} passed, ${fail} failed`);
if (fail) { console.log(fails.map(f => '  FAIL ' + f).join('\n')); process.exit(1); }
