# Mikroekonomie – řešení úkolů 1–5

Grafy: `ukol1.png` … `ukol5.png`, všechno najednou v `mikro-ukoly-grafy.pdf`.
Znovu vygenerovat: `python3 grafy.py` (potřeba `matplotlib`, `numpy`).

## 1. Celkový (TU) a mezní (MU) užitek – pivo
- **Osy:** nahoře Q / TU, dole Q / MU, obě se stejnou osou Q (počet sklenic).
- **MU** klesá (zákon klesajícího mezního užitku): 1. sklenice nejvíc, každá další méně.
- **4. sklenice:** MU = 0 → TU je maximální = **bod nasycení S**.
- **5. sklenice:** MU < 0 (nevolnost) → TU klesá.
- Svislá čára v Q = 4 propojuje oba grafy: kde má TU vrchol, tam MU protíná osu Q.

## 2. Dokonalé komplementy, I = 1200, P_X = 100, P_Y = 200
- **Linie rozpočtu (BL):** 100X + 200Y = 1200 → průsečíky X = 1200/100 = **12**, Y = 1200/200 = **6**.
- **Indiferenční křivky** mají tvar písmene **L**, rohy leží na přímce Y = X (poměr 1:1). Užitek U = min(X; Y).
- **Optimum:** X = Y → 100X + 200X = 1200 → X = **4**, Y = **4**. **E = [4; 4]** – roh nejvyšší IC (U₂), která se ještě dotkne BL.

## 3. Růst ceny P_Y (I a P_X beze změny)
- BL se **otočí dovnitř kolem průsečíku na ose X** (X = 12 zůstává), průsečík na ose Y klesne.
- Příklad (stejný spotřebitel jako v úkolu 2): P_Y z 200 na 400 Kč → Y-průsečík 6 → 3.
- Nové optimum: 100X + 400X = 1200 → X = Y = **2,4**. **E₁ [4; 4] → E₂ [2,4; 2,4]**, nižší IC (U₂ < U₁).
- U dokonalých komplementů klesne spotřeba **obou** statků (stejný poměr 1:1) – nastává jen důchodový efekt, substituční je nulový.

## 4. Odvození individuální poptávky po X
- **Horní graf (X, Y):** cena X klesá P₁ → P₂ → P₃, BL se otáčí **ven** kolem průsečíku na ose Y (I a P_Y konstantní). Každá BL se dotýká jiné konvexní IC (U₁ < U₂ < U₃) v bodech **E₁, E₂, E₃**. Spojnice optim = **cenová spotřební křivka (ICC)**.
- **Dolní graf (X, P_X):** z každého optima spustíme svislici dolů na odpovídající cenu: **A [X₁; P₁], B [X₂; P₂], C [X₃; P₃]**.
- Spojením bodů A, B, C dostaneme **křivku individuální poptávky D** – klesající (nižší cena → větší poptávané množství).

## 5. Dokonale neelastická poptávka
- **Svislá** přímka D v množství Q₀ (osy Q / P).
- Při změně ceny P₁ → P₂ zůstává poptávané množství stále Q₀ (body E₁, E₂).
- Cenová elasticita **E_D = 0** (např. nezbytné léky, inzulín).
