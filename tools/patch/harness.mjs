// Node harness: compiles the site's source files the way patch.py does and runs the day builder
// headless, so a change to the hour windows can be checked by the numbers before a rebuild.
// Usage: node harness.mjs [clockMinutes] [--fresh]
import { readFileSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
const files = ["moves.jsx", "compose.jsx", "engine.jsx", "compare.jsx", "today.jsx", "queue.jsx", "compliance.jsx", "charts.jsx", "protime.jsx", "daystrip.jsx", "plan.jsx", "nowbar.jsx", "evidence.jsx"];
const clockArg = process.argv[2] && !process.argv[2].startsWith("--") ? Number(process.argv[2]) : 11 * 60;
const fresh = process.argv.includes("--fresh");

const stub = `
const noop = () => {};
const I = { createElement: noop, Fragment: "f", useState: (v) => [v, noop], useEffect: noop, useRef: () => ({ current: null }), useMemo: (f) => f(), useCallback: (f) => f, useLayoutEffect: noop, useSyncExternalStore: (s, g) => g() };
const o = { jsx: noop, jsxs: noop, Fragment: "f" };
const rf = noop, nf = noop, tf = noop, $n = noop, zl = noop, Bl = noop, cf = noop, df = noop, Zm = noop, Pp = noop, Rp = noop, Uf = noop, Gm = noop;
const Ef = { funnel: { leads: 20, quoted: 7, apps: 4, households: 2 } };
globalThis.window = { localStorage: { getItem: () => null, setItem: noop }, location: { search: ${JSON.stringify(fresh ? "?fresh=1" : "")} }, addEventListener: noop, removeEventListener: noop, matchMedia: () => ({ matches: false, addEventListener: noop }) };
globalThis.document = { addEventListener: noop, removeEventListener: noop, querySelector: () => null, body: { classList: { add: noop, remove: noop } } };
globalThis.localStorage = window.localStorage;
`;
const src = files.map((f) => readFileSync(join(HERE, "src", f), "utf-8")).join("\n");
const tail = `
export { xBuildDay, XQ, XS, xSeedUpTo, xOpenBlocks, xProTasks, XWIN, XDAY, xFmt, xClock, xSetClock, xStartOver, XCOL, XLEGAL };
`;
writeFileSync(join(HERE, "build", "harness-in.jsx"), stub + src + tail);
execFileSync(join(HERE, "node_modules", ".bin", "esbuild"), [join(HERE, "build", "harness-in.jsx"), "--jsx-factory=I.createElement", "--jsx-fragment=I.Fragment", "--target=es2020", "--format=esm", "--outfile=" + join(HERE, "build", "harness-out.mjs"), "--log-level=warning"]);
const m = await import(pathToFileURL(join(HERE, "build", "harness-out.mjs")).href + "?t=" + Date.now());

const { xBuildDay, XQ, XS, xSeedUpTo, xOpenBlocks, xProTasks, xFmt, XDAY } = m;
XS.clock = clockArg;
if (!fresh) xSeedUpTo(clockArg, true);
const day = xBuildDay(XQ, clockArg);
const today = day.touches.filter((t) => !t.tomorrow);
const byHour = {};
for (const t of today) { const h = Math.floor(t.slot / 60); byHour[h] = byHour[h] || { call: 0, text: 0, email: 0, booked: 0 }; byHour[h][t.booked ? "booked" : t.ch]++; }
console.log(`clock ${xFmt(clockArg)} · ${today.length} touches today · ${day.touches.length - today.length} tomorrow`);
for (let h = 7; h <= 20; h++) {
  const b = byHour[h];
  if (!b) continue;
  const n = b.call + b.text + b.email + b.booked;
  console.log(`${String(h).padStart(2)}:00  ${"█".repeat(n).padEnd(14)} ${n}  calls ${b.call}  texts ${b.text}  emails ${b.email}  booked ${b.booked}`);
}
console.log("windows used:", Object.entries(today.reduce((a, t) => { a[t.wk] = (a[t.wk] || 0) + 1; return a; }, {})).map(([k, v]) => `${k} ${v}`).join(" · "));
console.log("open blocks:", xOpenBlocks(day).map((g) => `${xFmt(g[0])}–${xFmt(g[1])}`).join(", "));
if (process.argv.includes("--list")) for (const t of today) console.log(`${xFmt(t.slot).padStart(8)}  ${t.ch.padEnd(5)} ${t.wk.padEnd(8)} ${t.lead.name.padEnd(22)} ${t.step.what}${XS.done[t.id] ? "  (done)" : ""}`);
