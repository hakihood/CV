"""Regenerate the downloadable CV PDFs in public/.

The "Download PDF" button serves these pre-generated files instead of calling
window.print(), because the browser print dialog rasterizes to several pages
when margins are left on "Default" (or the user picks "Microsoft Print to PDF"),
which strips the text layer and breaks ATS parsing.

Run this whenever the CV content changes, then commit the updated PDFs:

    pip install playwright && playwright install chromium
    # against local dev server:
    npm run dev &                       # in another terminal
    python scripts/export-pdf.py
    # or against the deployed site:
    python scripts/export-pdf.py https://www.daiduongbui-cv.cz/

Produces real text PDFs (selectable text + clickable links), one A4 page each,
for both languages (cs, en), toggled via the in-page language switch.
"""
import sys
from pathlib import Path

from playwright.sync_api import sync_playwright

BASE = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:3000/"
PUBLIC = Path(__file__).resolve().parent.parent / "public"


def main() -> None:
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1400, "height": 1250})
        page.goto(BASE, wait_until="networkidle")
        page.wait_for_selector(".page")
        page.evaluate("() => document.fonts.ready")
        page.wait_for_timeout(1200)

        for lang in ("cs", "en"):
            if page.get_attribute(".page", "lang") != lang:
                # The toggle is a no-op until React hydrates; wait for the
                # language to actually flip so a slow first load can't leave
                # the wrong language in the PDF.
                page.click('[data-testid="language-toggle"]')
                page.wait_for_function(f"() => document.querySelector('.page').lang === '{lang}'")
                page.wait_for_timeout(300)
            pdf = page.pdf(
                format="A4",
                print_background=True,
                margin={"top": "0", "right": "0", "bottom": "0", "left": "0"},
            )
            out = PUBLIC / f"Dai_Duong_Bui_CV_{lang}.pdf"
            out.write_bytes(pdf)
            print(f"{lang}: {len(pdf) // 1024} kB -> {out.relative_to(PUBLIC.parent)}")

        browser.close()


if __name__ == "__main__":
    main()
