"""Site update v9 (rebuilds v7 and v8 on top of the v6 bundle, then adds v9):
v7: no AI wording; Compose moves per style with levers and marked drafts; Today action queue.
v8: sequencing engine (lead type x style x consent x hour), Day plan with logic, plan vs usual day,
test calculator, demo clock, Now bar on every screen, Compose best-now corner, brand line + tagline.
v9: lean Today (andon line, process before results, calls vs messages to check, small wins), compliance
check, plan-vs-done and strategy charts, warm leads with consent on file.
v17: Workflow is the default Today view (one status line, four boxes, a time box on every task).
v18: the style read that moves (Live Coach), Life & health readiness, the semantic token layer and lozenges.
Usage: python3 -I patch.py REPO_DIR
Writes a plain index.html + assets/ at the repo root; when the root page is the encrypted one, the plain
page is rebuilt from tools/dist/index.html (or the v6 base page). tools/protect.py locks it afterwards."""
import base64, glob, hashlib, os, re, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
repo = sys.argv[1]
BASE = "3e12ef3"  # the v6 commit: the bundle before any injected components
git = lambda *a: subprocess.run(["git", "-C", repo, *a], check=True, capture_output=True, text=True).stdout
base_html = git("show", f"{BASE}:index.html")
base_js_name = re.search(r"assets/(index-[\w]+\.js)", base_html).group(1)
base_css_name = re.search(r"assets/(index-[\w]+\.css)", base_html).group(1)
js = git("show", f"{BASE}:assets/{base_js_name}")
css = git("show", f"{BASE}:assets/{base_css_name}")
orig = js


def rep(old, new, n=1):
    global js
    c = js.count(old)
    assert c == n, f"{old[:90]!r}: expected {n}, found {c}"
    js = js.replace(old, new)


def match_end(s, i):
    """index just past the call that starts at s[i], skipping strings and template literals"""
    i = s.index("(", i)
    depth, n = 0, len(s)
    while i < n:
        c = s[i]
        if c in "\"'":
            q = c; i += 1
            while s[i] != q:
                i += 2 if s[i] == "\\" else 1
        elif c == "`":
            i += 1
            while s[i] != "`":
                if s[i] == "\\": i += 2; continue
                if s.startswith("${", i):
                    k, d2 = i + 2, 1
                    while d2:
                        if s[k] in "\"'`":
                            q = s[k]; k += 1
                            while s[k] != q:
                                k += 2 if s[k] == "\\" else 1
                        elif s[k] == "{": d2 += 1
                        elif s[k] == "}": d2 -= 1
                        k += 1
                    i = k; continue
                i += 1
        elif c in "([{":
            depth += 1
        elif c in ")]}":
            depth -= 1
            if depth == 0:
                return i + 1
        i += 1
    raise ValueError("unbalanced")


# 0. compile the components (JSX -> React.createElement on the bundle's React, `I`)
src_files = ["moves.jsx", "compose.jsx", "engine.jsx", "compare.jsx", "timebox.jsx", "ads.jsx", "lifehealth.jsx", "styleread.jsx", "today.jsx", "queue.jsx", "compliance.jsx", "charts.jsx", "protime.jsx", "daystrip.jsx", "plan.jsx", "nowbar.jsx", "demo.jsx", "classic.jsx", "workflow.jsx", "look.jsx", "evidence.jsx"]
src = "\n".join(open(os.path.join(HERE, "src", f), encoding="utf-8").read() for f in src_files)
os.makedirs(os.path.join(HERE, "build"), exist_ok=True)
open(os.path.join(HERE, "build", "ext.jsx"), "w", encoding="utf-8").write(src)
subprocess.run([os.path.join(HERE, "node_modules", ".bin", "esbuild"), os.path.join(HERE, "build", "ext.jsx"),
                "--outfile=" + os.path.join(HERE, "build", "ext.js"), "--loader:.jsx=jsx",
                "--jsx-factory=I.createElement", "--jsx-fragment=I.Fragment", "--target=es2020", "--log-level=warning"], check=True)
ext = open(os.path.join(HERE, "build", "ext.js"), encoding="utf-8").read()
assert "import " not in ext and "export " not in ext and "require(" not in ext
names = set(re.findall(r"^(?:const|function|let|var)\s+([A-Za-z_$][\w$]*)", ext, re.M))
clash = [n for n in names if re.search(r"(?<![\w$.])" + re.escape(n) + r"(?![\w$])", orig)]
# a word that appears in the bundle only inside string literals (e.g. "readiness" in a label) is not a clash
_code = re.sub(r'"(?:[^"\\\n]|\\.)*"', '""', orig)
clash = [n for n in clash if re.search(r"(?<![\w$.\-])" + re.escape(n) + r"(?![\w$\-])", _code)]
assert not clash, f"name clash: {clash}"
for g in ["I", "rf", "nf", "tf", "$n", "zl", "Bl", "cf", "df", "Zm", "Pp", "Rp", "Uf", "Gm", "Ef", "Kt", "Yl"]:
    assert re.search(r"(?:^|[;,{}\s])(?:const |var |let |function )?" + re.escape(g) + r"\s*[=(]", orig), g

# v18 Live Coach: the style read (fixed order, moving bars, the delta, the ghost, READING/LOCKED/TIE) replaces
# the body of the bundle's Cf; the coach (If) passes its turn index (r) and the turns so far (We = Kt.slice(0,r+1))
js, _n = re.subn(r"function Cf\(\{dimensions:e,dominant:t\}\)\{if\(!e\)return null;.*?\}(?=function _f\(\{ids:e\}\))",
                 lambda m: "function Cf(p){return o.jsx(XStyleRead,p)}", js, count=2, flags=re.S)
assert _n == 1, f"Cf: expected 1 replacement, made {_n}"
rep('o.jsx(Cf,{dimensions:y.dimensions,dominant:_})', 'o.jsx(Cf,{dimensions:y.dimensions,dominant:_,turn:r,transcript:We,signal:y.signal})')
# the read as a lozenge in the coach's header, so the words it picks are tied to the read
rep('o.jsxs("div",{className:"coach-head",children:[o.jsx("div",{className:"title",children:"Coach · current turn"}),o.jsx("div",{className:"sub",children:y.stamp})]})',
    'o.jsxs("div",{className:"coach-head x-coach-head",children:[o.jsxs("div",{children:[o.jsx("div",{className:"title",children:"Coach · current turn"}),o.jsx("div",{className:"sub",children:y.stamp})]}),o.jsx(XReadLozenge,{turn:r,transcript:We})]})')
# the heard line under the bars now names the words that moved the read; the coach's signal label becomes its
# tooltip (one line instead of two). Life & health readiness sits directly under the read; the Ask waits
# behind open suitability items (Yl, checks x)
rep('o.jsxs("div",{className:"signal-tag",children:["Signal: ",y.signal]})]}),',
    'null]}),o.jsx(XCoachLife,{turn:r,transcript:We,dominant:_,gate:y.lifeSignal?Yl.filter(q=>q.blocker&&!x[q.id]).length:0}),')
# 1. AI wording -> plain wording (v7)
rep('"Compose (AI-drafted email and SMS in your voice)"', '"Compose (email and text drafts in your voice)"')
rep('title:"Has corporate published any specific guidance on AI in client communications?"',
    'title:"Has corporate published any specific guidance on automated or templated client communications?"')
rep('title:"Has the E&O carrier published any guidance on AI-assisted communications?"',
    'title:"Has the E&O carrier published any guidance on automated or template-assisted communications?"')
rep('"The producer who sent the message (even if AI-drafted)"', '"The producer who sent the message (even if the system drafted it)"')
rep('We need 3-5 examples per question type to train the recommender."', 'We need 3-5 examples per question type to build the recommendations."')
rep('title:"Should reps be able to override the system\'s classification, and should the system learn from that?"',
    'title:"Should reps be able to override the style the system suggests, and should the override stick for that customer?"')
rep('"Joint ownership of derived models (the trained brain)"', '"Joint ownership of what is built from the data (playbook, rules)"')
rep('title:"The four frameworks (the brain)"', 'title:"The four frameworks (the method)"')

# 2. inject the components just before the app (all data consts exist by then)
rep("function ey(){", ext.strip() + "\nfunction ey(){")

# 3. app: Today = the action queue; the Now bar can switch tabs
rep('n==="today"&&o.jsx(Uf,{persona:e})', 'n==="today"&&o.jsx(XToday,{persona:e})')
rep('[n,r]=I.useState("today"),', '[n,r]=I.useState("today"),xNavReady=(XNav.go=r,0),')

# 4. tab bar gets the Now bar
nav_start = js.index('return o.jsx("nav",{className:"tabs",role:"tablist"')
nav_call_start = nav_start + len("return ")
nav_end = match_end(js, nav_call_start)
nav_call = js[nav_call_start:nav_end]
assert nav_call.startswith('o.jsx("nav"') and nav_call.count('className:"tabs"') == 1
js = js[:nav_call_start] + 'o.jsxs("div",{className:"tabs-wrap",children:[' + nav_call + ',o.jsx(XNowBar,{})]})' + js[nav_end:]

# 5. header: the descriptor line and the tagline
rep('o.jsx("div",{className:"sub",children:"Hakobian Follow-Up · Automated Coach"})]})]})',
    'o.jsx("div",{className:"sub",children:"Hakobian Strategic Follow-Up · Hakobian Automated Coach"})]}),o.jsx(XBrandTagline,{})]})')

# 6. Compose: hover state, marked draft, rebuilt Why panel (v7) and the best-now corner (v8)
rep("[d,m]=I.useState({}),y=hp[a]||Dl[0]", "[d,m]=I.useState({}),[xHv,xSetHv]=I.useState(0),y=hp[a]||Dl[0]")
rep('o.jsx("div",{className:`draft-body ${w?"refresh":""}`,children:M})',
    "o.jsx(XMarkedDraft,{body:Ue,tail:L?df(N):cf,email:L,scenario:u,style:p,refresh:w,hover:xHv,setHover:xSetHv})")
rep('o.jsxs("div",{className:"panel-head",children:[o.jsx("div",{className:"title",children:"Draft"}),o.jsxs("div",{className:"sub",children:["To ",y.name," · From ",o.jsx("span",{children:e})]})]})',
    'o.jsxs("div",{className:"panel-head x-draft-head",children:[o.jsxs("div",{children:[o.jsx("div",{className:"title",children:"Draft"}),o.jsxs("div",{className:"sub",children:["To ",y.name," · From ",o.jsx("span",{children:e})]})]}),o.jsx(XBestNow,{scenario:u,style:p,lead:y,channel:f,setChannel:g})]})')
start_marker = 'o.jsxs("div",{className:"panel",children:[o.jsxs("div",{className:"panel-head",children:[o.jsx("div",{className:"title",children:"Why this draft"})'
assert js.count(start_marker) == 1
s0 = js.index(start_marker)
e0 = match_end(js, s0)
old_panel = js[s0:e0]
assert "Green light · compliance check" in old_panel and old_panel.count("Why this draft") == 1
js = js[:s0] + "o.jsx(XWhyPanel,{scenario:u,style:p,email:L,consentOk:E,premiumOk:G,quoteNumber:y.quoteNumber,hover:xHv,setHover:xSetHv,lead:y})" + js[e0:]

for w in ["AI-drafted", "AI-assisted", "guidance on AI", "train the recommender", "trained brain", "(the brain)", "system learn"]:
    assert w not in js, w

# 6b. v10 lean top: the standards band moves to the footer; Compose gets a compact head
rep('o.jsx(Ym,{persona:e,onPersonaChange:s}),o.jsx(PrincipleBand,{}),', 'o.jsx(Ym,{persona:e,onPersonaChange:s}),')
# v13: the persona switch leaves the header for the Demo drawer; tabs carry group markers
rep('o.jsxs("div",{className:"persona-switch",children:[o.jsx("span",{children:"Acting as"}),o.jsx("div",{className:"persona-pill",role:"group","aria-label":"Acting persona",children:["Alex","Maya"].map(n=>o.jsx("button",{className:e===n?"active":"","aria-pressed":e===n,onClick:()=>t(n),children:n},n))})]})',
    'o.jsx(XDemoDrawer,{persona:e,onPersonaChange:t})')
rep('{id:"retention",label:"Retention"}', '{id:"retention",label:"Retention",grp:"Book"}')
# v14: the classic rows carry the STOP chip and the ECRM source; the page head is hidden under the queue's top
rep('o.jsx("span",{className:`style-pill ${s.cls}`,title:"Communication style",children:s.label}),a&&o.jsx(Rp,{consent:a})]})]}),o.jsxs("div",{className:"right",children:[f&&o.jsx("div",{className:`sla-pill sla-${f}`',
    'o.jsx("span",{className:`style-pill ${s.cls}`,title:"Communication style",children:s.label}),a&&o.jsx(Rp,{consent:a}),o.jsx(XClassicExtras,{name:n})]})]}),o.jsxs("div",{className:"right",children:[f&&o.jsx("div",{className:`sla-pill sla-${f}`')

rep('{id:"manager",label:"Manager",principalOnly:!0}', '{id:"manager",label:"Manager",principalOnly:!0,grp:"Admin"}')
rep('className:`tab ${u?"active":""}`,onClick:()=>t(a.id)', 'className:`tab ${u?"active":""} ${a.grp?"tab-group":""}`,"data-group":a.grp||null,onClick:()=>t(a.id)')

rep('o.jsx(Zf,{})]})', 'o.jsx(PrincipleBand,{}),o.jsx(Zf,{})]})')
rep('o.jsxs("div",{className:"page-head",children:[o.jsxs("div",{children:[o.jsx("h1",{children:"Compose"}),o.jsx("div",{className:"greeting",children:"Compliance-checked."})]}),o.jsx("div",{className:"stamp",children:"Match · Fit · Ask, in that order"})]})',
    'o.jsxs("div",{className:"page-head x-compose-head",children:[o.jsxs("div",{children:[o.jsx("h1",{children:"Compose"}),o.jsx("div",{className:"greeting",children:"Pick the lead, the scenario, the style and the channel; the draft and its three moves follow. Compliance-checked."})]}),o.jsx("div",{className:"stamp",children:"Match · Fit · Ask, in that order"})]})')

# 7. styles
css += "\n" + open(os.path.join(HERE, "src", "ext.css"), encoding="utf-8").read()


# 8. write with fresh names, replacing whatever bundle the repo holds now
def digest(s):
    return base64.urlsafe_b64encode(hashlib.sha256(s.encode()).digest()).decode()[:8].replace("-", "x").replace("_", "y")


html_path = os.path.join(repo, "index.html")
html = open(html_path, encoding="utf-8").read()
if "staticrypt" in html or not re.search(r"assets/index-[\w]+\.js", html):
    # the served page is the locked one: start the plain page from the plain build (or the v6 page)
    plain = os.path.join(repo, "tools", "dist", "index.html")
    html = open(plain, encoding="utf-8").read() if os.path.exists(plain) else base_html
cur_js = re.search(r"assets/(index-[\w]+\.js)", html).group(1)
cur_css = re.search(r"assets/(index-[\w]+\.css)", html).group(1)
new_js = f"index-{digest(js)}.js"
new_css = f"index-{digest(css)}.css"
for f in glob.glob(os.path.join(repo, "assets", "index-*.js")) + glob.glob(os.path.join(repo, "assets", "index-*.css")):
    os.remove(f)
open(os.path.join(repo, "assets", new_js), "w", encoding="utf-8").write(js)
open(os.path.join(repo, "assets", new_css), "w", encoding="utf-8").write(css)
html = html.replace(cur_js, new_js).replace(cur_css, new_css)
assert new_js in html and new_css in html
open(html_path, "w", encoding="utf-8").write(html)
print("js ", cur_js, "->", new_js, f"(+{len(js) - len(orig)} bytes over v6)")
print("css", cur_css, "->", new_css)
print("declared:", len(names), "names")
