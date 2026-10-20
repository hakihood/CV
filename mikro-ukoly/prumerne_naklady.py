"""Průměrné variabilní náklady AVC(Q=3) – zápis ve zlomcích (matplotlib mathtext)."""
import os

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt

OUT = os.path.dirname(os.path.abspath(__file__))

lines = [
    ("h", "Zadání"),
    ("m", r"$TC = (1 + 6) + 2Q = 7 + 2Q$"),
    ("h", "1. Rozdělení nákladů"),
    ("m", r"$FC = 7 \qquad$ (fixní – nezávisí na Q)"),
    ("m", r"$VC = 2Q \qquad$ (variabilní – rostou s Q)"),
    ("h", "2. Průměrné variabilní náklady"),
    ("m", r"$AVC = \dfrac{VC}{Q} = \dfrac{2Q}{Q} = 2$"),
    ("h", "3. Dosazení  Q = 3"),
    ("m", r"$AVC(3) = \dfrac{2 \cdot 3}{3} = \dfrac{6}{3} = 2$"),
    ("r", r"Výsledek:  $AVC(3) = \mathbf{2}$"),
]

fig = plt.figure(figsize=(8.27, 8))
fig.text(0.5, 0.95, "Průměrné variabilní náklady", ha="center", fontsize=20, fontweight="bold")
y = 0.88
for kind, txt in lines:
    if kind == "h":
        y -= 0.01
        fig.text(0.07, y, txt, fontsize=14, fontweight="bold", color="#1f5fbf")
        y -= 0.065
    elif kind == "m":
        fig.text(0.1, y, txt, fontsize=17, va="center")
        y -= 0.085
    else:
        y -= 0.03
        fig.text(0.5, y, txt, fontsize=22, ha="center", va="center", color="#2e7d32",
                 bbox=dict(boxstyle="round,pad=0.6", fc="#e8f5e9", ec="#2e7d32", lw=2))
fig.savefig(os.path.join(OUT, "prumerne_naklady.png"), dpi=150)
fig.savefig(os.path.join(OUT, "prumerne_naklady.pdf"))
