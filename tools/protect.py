#!/usr/bin/env python3
"""Lock both demos behind an access code.

The served pages are encrypted with the code (StatiCrypt: PBKDF2 + AES, decrypted in the browser), so the
content is unreadable without it, in view-source included. The plain builds move to tools/dist/ for the
tests and the engineer; the root keeps only the encrypted pages, the fonts and the favicon.

Usage: STATICRYPT_DIR=<folder with npm i staticrypt> python3 tools/protect.py REPO_DIR CODE
Run it after tools/patch/patch.py (main site) and after any edit to v2 in tools/dist/v2/index.html.
"""
import os, re, shutil, subprocess, sys

repo, code = sys.argv[1], sys.argv[2]
HERE = os.path.dirname(os.path.abspath(__file__))
dist = os.path.join(repo, "tools", "dist")
os.makedirs(os.path.join(dist, "assets"), exist_ok=True)
os.makedirs(os.path.join(dist, "v2"), exist_ok=True)

def run_staticrypt(src_html, out_dir, title):
    cmd = [os.path.join(os.environ["STATICRYPT_DIR"], "node_modules", ".bin", "staticrypt"), src_html, "-p", code, "-d", out_dir, "--short",
           "--remember", "1", "--template-title", title, "--template-button", "Open",
           "--template-instructions", "This is a private demonstration. Enter the access code you were given.",
           "--template-placeholder", "Access code", "--template-error", "That code is not right.",
           "--template-remember", "Remember on this device for a day",
           "--template-color-primary", "#1F3864", "--template-color-secondary", "#F4F5F1", "-c", "false"]
    subprocess.run(cmd, check=True, cwd=os.environ["STATICRYPT_DIR"])

# ---- main site: inline the bundle so one file holds everything, then encrypt it
root_html = os.path.join(repo, "index.html")
html = open(root_html, encoding="utf-8").read()
if "staticrypt" in html:
    # already encrypted: rebuild from the plain copy in dist
    html = open(os.path.join(dist, "index.html"), encoding="utf-8").read()
js = re.search(r'<script type="module" crossorigin src="\./(assets/index-[^"]+\.js)"></script>', html)
css = re.search(r'<link rel="stylesheet" crossorigin href="\./(assets/index-[^"]+\.css)">', html)
if not (js and css):
    sys.exit("index.html does not reference a plain bundle; run patch.py first")
# the plain build goes to dist (page + assets), for the tests and the engineer
for name in os.listdir(os.path.join(repo, "assets")):
    shutil.copy(os.path.join(repo, "assets", name), os.path.join(dist, "assets", name))
open(os.path.join(dist, "index.html"), "w", encoding="utf-8").write(html)
shutil.copy(os.path.join(repo, "favicon.svg"), os.path.join(dist, "favicon.svg"))
# inline: script and stylesheet into the page; font urls keep pointing at assets/
js_src = open(os.path.join(dist, js.group(1)), encoding="utf-8").read()
css_src = open(os.path.join(dist, css.group(1)), encoding="utf-8").read().replace("url(./", "url(./assets/")
inlined = html.replace(js.group(0), "<script type=\"module\">" + js_src.replace("</script", "<\\/script") + "</script>")
inlined = inlined.replace(css.group(0), "<style>" + css_src + "</style>")
tmp = os.path.join(dist, "_inlined.html")
open(tmp, "w", encoding="utf-8").write(inlined)
out = os.path.join(dist, "_enc")
run_staticrypt(tmp, out, "Agency Command Center · Demonstration")
shutil.move(os.path.join(out, "_inlined.html"), root_html)
os.remove(tmp); shutil.rmtree(out)
# the served assets folder keeps fonts and nothing readable
for name in os.listdir(os.path.join(repo, "assets")):
    if name.endswith(".js") or name.endswith(".css"):
        os.remove(os.path.join(repo, "assets", name))

# ---- v2: one file already; the plain copy lives in dist/v2
v2_root = os.path.join(repo, "v2", "index.html")
v2_plain = os.path.join(dist, "v2", "index.html")
v2 = open(v2_root, encoding="utf-8").read()
if "staticrypt" not in v2:
    open(v2_plain, "w", encoding="utf-8").write(v2)
if not os.path.exists(v2_plain):
    sys.exit("no plain v2 at tools/dist/v2/index.html")
if os.path.isdir(os.path.join(repo, "v2", "fonts")):
    shutil.copytree(os.path.join(repo, "v2", "fonts"), os.path.join(dist, "v2", "fonts"), dirs_exist_ok=True)
out = os.path.join(dist, "_enc2")
run_staticrypt(v2_plain, out, "Agency Command Center · Demonstration")
shutil.move(os.path.join(out, "index.html"), v2_root)
shutil.rmtree(out)

# ---- next/: the team tool. Its plain source stays OUTSIDE the repo (NEXT_SRC); only the locked page is written.
next_src = os.environ.get("NEXT_SRC")
if next_src:
    if not os.path.exists(next_src):
        sys.exit(f"NEXT_SRC not found: {next_src}")
    os.makedirs(os.path.join(repo, "next"), exist_ok=True)
    out = os.path.join(dist, "_enc3")
    run_staticrypt(next_src, out, "Next Step · Agency Command Center")
    shutil.move(os.path.join(out, os.path.basename(next_src)), os.path.join(repo, "next", "index.html"))
    shutil.rmtree(out)
    print("locked: next/index.html (plain source kept outside the repo)")
print("locked: index.html and v2/index.html; plain builds in tools/dist/")
