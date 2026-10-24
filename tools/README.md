# How this site is built, tested and deployed

The live site is a static Vite/React 18 bundle. Since v7 (Oct 23, 2026) it is produced by **patching** the
v6 bundle (commit `3e12ef3`) with components compiled from `tools/patch/src/`, not by a Vite build. The repo
holds the built files (`index.html`, `assets/`) plus everything needed to rebuild them from this folder.

## Layout

| Path | What |
| --- | --- |
| `index.html`, `v2/index.html` | The two demos **as served: encrypted with the access code** (StatiCrypt, PBKDF2 + AES, decrypted in the browser). `assets/` and `v2/fonts/` hold fonts only. |
| `tools/dist/` | The plain builds: `index.html` + `assets/` (main site) and `v2/index.html` + `fonts/`. Tests run against these; edit v2 here. |
| `tools/protect.py` | Inlines the main bundle, encrypts both pages with the code, moves the plain builds to `tools/dist/`. |
| `tools/patch/patch.py` | Rebuilds `index.html` + `assets/` from the v6 base commit and `src/`. |
| `tools/patch/src/*.jsx`, `ext.css` | The injected components: engine (sequencing), today (leads), queue (Today view), compose, compare, compliance, charts, protime (open time + cooler leads), daystrip, plan, nowbar, evidence (rules and tags), moves. |
| `tools/patch/harness.mjs` | Headless run of the day builder: `node harness.mjs [clockMinutes] [--fresh] [--list]`. |
| `tools/tests/*.mjs` | Playwright suites: `v11-check` (seeded 11 AM state, open time, cooler leads), `v9-check` (fresh day, lanes, compliance, Compose corner), `v6-check`, `v5-check`, `demo-test`, `v8-mobile`, `v12-look` (screenshots). |

## Rebuild

```
cd tools/patch
npm install esbuild            # once; node_modules is not committed
python3 -I patch.py /path/to/this/repo          # writes the plain page + assets at the repo root
cd .. && npm install staticrypt                 # once, anywhere; point STATICRYPT_DIR at that folder
STATICRYPT_DIR=/path/to/that python3 tools/protect.py /path/to/this/repo <access code>
```

`protect.py` moves the plain build to `tools/dist/`, inlines the bundle into one file and encrypts it; the
root `index.html` and `v2/index.html` are what GitHub Pages serves. Edit v2 at `tools/dist/v2/index.html`
and run `protect.py` again.

`patch.py` compiles `src/*.jsx` with esbuild (`--jsx-factory=I.createElement --jsx-fragment=I.Fragment
--target=es2020`), injects the result before `function ey(` in the v6 bundle, appends `ext.css`, moves the
standards band to the footer, and rewrites the asset hashes in `index.html`. The file order in `src_files`
matters (engine before the views, evidence last).

## Test

```
python3 -m http.server 4210 --bind 127.0.0.1      # from the repo root
node tools/tests/v11-check.mjs "http://127.0.0.1:4210/tools/dist/"           # seeded state: run WITHOUT ?fresh=1
node tools/tests/v9-check.mjs  "http://127.0.0.1:4210/tools/dist/?fresh=1"   # the others run WITH ?fresh=1
```

Playwright is imported from `/opt/npm-tools/node_modules/playwright/index.mjs` in these scripts; change the
import path to your install.

## Deploy

GitHub Pages serves the `gh-pages` branch. `v2/` lives in `main` as well, so pushing `main` to `gh-pages`
carries both sites:

```
git push origin main
git push -f origin main:gh-pages
gh run list --limit 1        # the "pages build and deployment" run must show success
```

Browsers cache Pages for 10 minutes; append `?r=2` or hard-refresh to see a new deploy. The served pages ask for
the access code; "remember on this device" keeps it for a day.

## Rules encoded in the engine (summary)

Office day 9–5 with lunch 12–1 blocked for planned work; emails 9–10, calls and texts 10–noon, texts and
emails 1–3, calls 3–5; a new lead's day-one burst (call now, email ~20 min, call 30–60, call 1–2 h) runs on
its own clock and may cross lunch. Cadences alternate morning and afternoon windows across attempts. Consent
and legal hours (8 am–8 pm) are enforced by the engine; a STOP suppresses texts the same day. The demo seeds
the morning as done at 11:00 AM; `?fresh=1` skips seeding. Twenty warm leads run the lanes (calls, then texts,
then emails); eight cooler leads fold at the end of their channel's lane for open time.

All demo people, numbers and phones (555-01xx) are synthetic.
