"""Grafy k úkolům z mikroekonomie (1–5). Spuštění: python3 grafy.py"""
import os

import numpy as np
import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.backends.backend_pdf import PdfPages

OUT = os.path.dirname(os.path.abspath(__file__))
plt.rcParams.update({"font.size": 11, "axes.spines.top": False, "axes.spines.right": False})

BLUE, RED, GREEN, GRAY, ORANGE = "#1f5fbf", "#c62828", "#2e7d32", "#777777", "#ef6c00"


def axes_arrows(ax):
    ax.plot(1, 0, ">k", transform=ax.get_yaxis_transform(), clip_on=False, ms=6)
    ax.plot(0, 1, "^k", transform=ax.get_xaxis_transform(), clip_on=False, ms=6)


def point(ax, x, y, label, dx=0.15, dy=0.15, color="k", ha="left"):
    ax.plot(x, y, "o", color=color, ms=7, zorder=5)
    ax.annotate(label, (x, y), (x + dx, y + dy), fontsize=12, fontweight="bold", color=color, ha=ha)


def guides(ax, x, y, color=GRAY):
    ax.plot([x, x], [0, y], "--", color=color, lw=1)
    ax.plot([0, x], [y, y], "--", color=color, lw=1)


# ---------------------------------------------------------------- Úkol 1
def ukol1():
    # TU = 8Q - Q^2, MU = dTU/dQ = 8 - 2Q -> MU = 0 při Q = 4 (nasycení)
    q = np.linspace(0, 5.5, 300)
    tu, mu = 8 * q - q**2, 8 - 2 * q
    fig, (a1, a2) = plt.subplots(2, 1, figsize=(7, 9), sharex=True)

    a1.plot(q, tu, color=BLUE, lw=2.5, label="TU – celkový užitek")
    for k in range(1, 6):
        a1.plot(k, 8 * k - k**2, "o", color=BLUE, ms=5)
    point(a1, 4, 16, "S – bod nasycení\n(TU max)", dx=-0.25, dy=1.0, color=RED, ha="right")
    a1.annotate("TU klesá\n(nevolnost)", (5, 15), (5.05, 10.5), fontsize=10, color=RED,
                arrowprops=dict(arrowstyle="->", color=RED))
    a1.set_ylabel("TU (celkový užitek)")
    a1.set_ylim(0, 19.5)
    a1.set_yticks(range(0, 20, 4))
    a1.set_xlabel("Q (počet sklenic piva)")
    a1.tick_params(labelbottom=True)
    a1.set_title("Úkol 1 – celkový a mezní užitek", fontweight="bold")
    a1.legend(loc="upper left")

    a2.plot(q, mu, color=GREEN, lw=2.5, label="MU – mezní užitek")
    a2.axhline(0, color="k", lw=1)
    point(a2, 4, 0, "MU = 0", dx=0.1, dy=0.6, color=RED)
    a2.fill_between(q, mu, 0, where=q > 4, color=RED, alpha=0.15)
    a2.text(4.1, -3.4, "MU < 0 (újma)", color=RED, fontsize=10)
    a2.text(2.3, 5.2, "MU > 0, ale klesá\n(zákon klesajícího MU)", color=GREEN, fontsize=10)
    a2.set_ylabel("MU (mezní užitek)")
    a2.set_xlabel("Q (počet sklenic piva)")
    a2.set_ylim(-3.8, 9)
    a2.set_yticks(range(-2, 10, 2))
    a2.legend(loc="upper right")

    for ax in (a1, a2):
        ax.axvline(4, color=RED, ls="--", lw=1.2)
        ax.set_xlim(0, 5.8)
        ax.set_xticks(range(0, 6))
        axes_arrows(ax)
    fig.tight_layout()
    return fig


# ---------------------------------------------------------------- Úkol 2
def l_curve(ax, c, label, color, lw=2):
    ax.plot([c, c, 13.5], [7.5, c, c], color=color, lw=lw)
    ax.text(13.6, c, label, color=color, fontsize=11, va="center", fontweight="bold")


def ukol2():
    fig, ax = plt.subplots(figsize=(8, 6))
    x = np.linspace(0, 12, 100)
    ax.plot(x, 6 - 0.5 * x, color=BLUE, lw=2.5, label="BL: 100·X + 200·Y = 1200")
    ax.plot([0, 7.5], [0, 7.5], ":", color=GRAY, lw=1.5)
    ax.text(7.7, 7.4, "Y = X (poměr 1:1)", color=GRAY, fontsize=10)
    for c, lab, col in [(2, "U₁", GREEN), (4, "U₂", ORANGE), (6, "U₃", "#7b1fa2")]:
        l_curve(ax, c, lab, col, lw=3)
    ax.plot([], [], color=ORANGE, lw=3, label="U₁, U₂, U₃ – indiferenční křivky (tvar L)")
    ax.annotate("roh IC leží\nna přímce Y = X", (6, 6), (7.3, 4.6), fontsize=10, color="#7b1fa2",
                arrowprops=dict(arrowstyle="->", color="#7b1fa2"))
    guides(ax, 4, 4)
    point(ax, 4, 4, "E (optimum)", dx=0.3, dy=-0.55, color=RED)
    ax.set_xticks([0, 2, 4, 6, 8, 10, 12])
    ax.set_yticks([0, 2, 4, 6])
    ax.set_xlim(0, 14.5)
    ax.set_ylim(0, 8.6)
    ax.set_xlabel("X (množství statku X)")
    ax.set_ylabel("Y (množství statku Y)")
    ax.set_title("Úkol 2 – dokonalé komplementy, optimum E = [4; 4]", fontweight="bold")
    ax.legend(loc="upper right", fontsize=10)
    axes_arrows(ax)
    fig.tight_layout()
    return fig


# ---------------------------------------------------------------- Úkol 3
def ukol3():
    # stejný spotřebitel jako v úkolu 2, P_Y vzroste z 200 na 400 Kč
    fig, ax = plt.subplots(figsize=(8, 6))
    x = np.linspace(0, 12, 100)
    ax.plot(x, 6 - 0.5 * x, color=BLUE, lw=2.5, label="BL₁ ($P_Y$ = 200 Kč)")
    ax.plot(x, 3 - 0.25 * x, color=RED, lw=2.5, label="BL₂ ($P_Y$ = 400 Kč)")
    ax.plot([0, 7.5], [0, 7.5], ":", color=GRAY, lw=1.5)
    l_curve(ax, 4, "U₁", BLUE)
    l_curve(ax, 2.4, "U₂", RED)
    guides(ax, 4, 4)
    guides(ax, 2.4, 2.4)
    point(ax, 4, 4, "E₁", dx=0.25, dy=0.25, color=BLUE)
    point(ax, 2.4, 2.4, "E₂", dx=0.25, dy=-0.5, color=RED)
    ax.annotate("", (2.55, 2.55), (3.85, 3.85), arrowprops=dict(arrowstyle="->", lw=2, color="k"))
    ax.annotate("BL se otočí\nkolem průsečíku\nna ose X", (12, 0), (8.8, 2.2), fontsize=10,
                arrowprops=dict(arrowstyle="->", color=GRAY))
    ax.set_xticks([0, 2.4, 4, 8, 12])
    ax.set_xticklabels(["0", "X₂=2,4", "X₁=4", "8", "12"])
    ax.set_yticks([0, 2.4, 3, 4, 6])
    ax.set_yticklabels(["0", "Y₂=2,4", "3", "Y₁=4", "6"])
    ax.set_xlim(0, 14.5)
    ax.set_ylim(0, 7.8)
    ax.set_xlabel("X (množství statku X)")
    ax.set_ylabel("Y (množství statku Y)")
    ax.set_title("Úkol 3 – růst ceny $P_Y$: optimum se posune z E₁ do E₂", fontweight="bold")
    ax.legend(loc="upper right")
    axes_arrows(ax)
    fig.tight_layout()
    return fig


# ---------------------------------------------------------------- Úkol 4
def ukol4():
    # konvexní IC: U = (1/X + 1/Y)^-1, I = 1200, P_Y = 100, P_X: 200 -> 100 -> 50
    I, py = 1200, 100
    prices = [200, 100, 50]
    demand = lambda p: I / (p + np.sqrt(p * py))
    fig, (a1, a2) = plt.subplots(2, 1, figsize=(8, 10), sharex=True)
    cols = [BLUE, ORANGE, RED]
    xs, ys = [], []
    for i, (p, c) in enumerate(zip(prices, cols), start=1):
        xq, yq = demand(p), I / (py + np.sqrt(p * py))
        xs.append(xq)
        ys.append(yq)
        x = np.linspace(0, I / p, 50)
        a1.plot(x, (I - p * x) / py, color=c, lw=2, label=f"BL{'₁₂₃'[i-1]} ($P_X$ = P{'₁₂₃'[i-1]})")
        u = 1 / (1 / xq + 1 / yq)
        xc = np.linspace(u * 1.06, 25, 300)
        a1.plot(xc, u * xc / (xc - u), color=c, lw=1.5, ls="--")
        a1.text(24.3, u * 24.3 / (24.3 - u) + 0.25, f"U{'₁₂₃'[i-1]}", color=c, fontweight="bold")
        point(a1, xq, yq, f"E{'₁₂₃'[i-1]}", dx=-0.4 if i == 1 else 0.3, dy=0.5, color=c, ha="right" if i == 1 else "left")
        a1.plot([xq, xq], [0, yq], ":", color=GRAY, lw=1.2)
    a1.plot(xs, ys, color=GREEN, lw=2.5, label="ICC (cenová spotřební křivka)")
    a1.set_ylim(0, 13)
    a1.set_ylabel("Y (množství statku Y)")
    a1.set_title("Úkol 4 – odvození individuální poptávky po X", fontweight="bold")
    a1.legend(loc="upper right", fontsize=9)

    p = np.linspace(35, 260, 300)
    a2.plot(demand(p), p, color=GREEN, lw=2.5, label="D (individuální poptávka po X)")
    for i, (xq, pq, c) in enumerate(zip(xs, prices, cols)):
        a2.plot([xq, xq], [pq, 270], ":", color=GRAY, lw=1.2)
        guides(a2, xq, pq)
        point(a2, xq, pq, "ABC"[i], dx=0.3, dy=6, color=c)
    a2.set_yticks(prices)
    a2.set_yticklabels(["P₁", "P₂", "P₃"])
    a2.set_ylim(0, 270)
    a2.set_ylabel("$P_X$ (cena statku X)")
    a2.set_xlabel("X (množství statku X)")
    a2.legend(loc="upper right")

    for ax in (a1, a2):
        ax.set_xlim(0, 26)
        ax.set_xticks(xs)
        ax.set_xticklabels(["X₁", "X₂", "X₃"])
        axes_arrows(ax)
    a1.tick_params(labelbottom=True)
    a1.set_yticks([])
    fig.tight_layout()
    return fig


# ---------------------------------------------------------------- Úkol 5
def ukol5():
    fig, ax = plt.subplots(figsize=(7, 6))
    ax.plot([5, 5], [0.5, 9.5], color=BLUE, lw=3)
    ax.text(5.15, 9.1, "D", color=BLUE, fontsize=14, fontweight="bold")
    guides(ax, 5, 7)
    guides(ax, 5, 3)
    point(ax, 5, 7, "E₁", dx=0.2, dy=0.1, color=RED)
    point(ax, 5, 3, "E₂", dx=0.2, dy=0.1, color=RED)
    ax.annotate("", (4.6, 3.2), (4.6, 6.8), arrowprops=dict(arrowstyle="->", lw=1.8))
    ax.text(5.6, 5, "$E_D$ = 0\nzměna ceny nemění\npoptávané množství", fontsize=10)
    ax.set_xticks([5])
    ax.set_xticklabels(["Q₀"])
    ax.set_yticks([3, 7])
    ax.set_yticklabels(["P₂", "P₁"])
    ax.set_xlim(0, 10)
    ax.set_ylim(0, 10)
    ax.set_xlabel("Q (množství)")
    ax.set_ylabel("P (cena)")
    ax.set_title("Úkol 5 – dokonale neelastická poptávka", fontweight="bold")
    axes_arrows(ax)
    fig.tight_layout()
    return fig


if __name__ == "__main__":
    figs = [ukol1(), ukol2(), ukol3(), ukol4(), ukol5()]
    with PdfPages(os.path.join(OUT, "mikro-ukoly-grafy.pdf")) as pdf:
        for n, f in enumerate(figs, start=1):
            f.savefig(os.path.join(OUT, f"ukol{n}.png"), dpi=150)
            pdf.savefig(f)
