"""Optimální množství práce – výpočet (sympy) a zápis ve zlomcích (matplotlib mathtext)."""
import os

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
import sympy as sp

OUT = os.path.dirname(os.path.abspath(__file__))

# výpočet
L, K = sp.symbols("L K", positive=True)
TC, w, r = 16, 10, 20
sol = sp.solve([sp.Eq(4 * K / w, 2 * L / r), sp.Eq(w * L + r * K, TC)], [L, K], dict=True)[0]
assert sol[L] == sp.Rational(16, 15) and sol[K] == sp.Rational(4, 15)

lines = [
    ("h", "Zadání"),
    ("m", r"$TC = 16 \qquad MP_L = 4K \qquad MP_K = 2L \qquad w = 10 \qquad r = 20$"),
    ("h", "1. Podmínka optima"),
    ("m", r"$\dfrac{MP_L}{w} = \dfrac{MP_K}{r}$"),
    ("m", r"$\dfrac{4K}{10} = \dfrac{2L}{20} \quad\Rightarrow\quad \dfrac{2K}{5} = \dfrac{L}{10}"
          r" \quad\Rightarrow\quad L = 4K$"),
    ("h", "2. Rozpočtové omezení (isocost)"),
    ("m", r"$w \cdot L + r \cdot K = TC \quad\Rightarrow\quad 10L + 20K = 16$"),
    ("h", "3. Dosazení  L = 4K"),
    ("m", r"$10 \cdot 4K + 20K = 16 \quad\Rightarrow\quad 60K = 16"
          r" \quad\Rightarrow\quad K = \dfrac{16}{60} = \dfrac{4}{15}$"),
    ("h", "4. Množství práce"),
    ("m", r"$L = 4K = 4 \cdot \dfrac{4}{15} = \dfrac{16}{15} \doteq 1{,}07$"),
    ("h", "Kontrola"),
    ("m", r"$10 \cdot \dfrac{16}{15} + 20 \cdot \dfrac{4}{15} = \dfrac{160}{15} + \dfrac{80}{15}"
          r" = \dfrac{240}{15} = 16 \;\checkmark$"),
    ("r", r"Výsledek:  $L = \dfrac{16}{15} \doteq \mathbf{1{,}07}$"),
]

fig = plt.figure(figsize=(8.27, 11.69))
fig.text(0.5, 0.96, "Optimální množství práce", ha="center", fontsize=20, fontweight="bold")
y = 0.915
for kind, txt in lines:
    if kind == "h":
        y -= 0.008
        fig.text(0.07, y, txt, fontsize=14, fontweight="bold", color="#1f5fbf")
        y -= 0.047
    elif kind == "m":
        fig.text(0.1, y, txt, fontsize=16, va="center")
        y -= 0.063
    else:
        y -= 0.02
        fig.text(0.5, y, txt, fontsize=20, ha="center", va="center", color="#2e7d32",
                 bbox=dict(boxstyle="round,pad=0.6", fc="#e8f5e9", ec="#2e7d32", lw=2))
fig.savefig(os.path.join(OUT, "optimum_prace.png"), dpi=150)
fig.savefig(os.path.join(OUT, "optimum_prace.pdf"))
print("L =", sol[L], "≈", round(float(sol[L]), 2), "| K =", sol[K])
