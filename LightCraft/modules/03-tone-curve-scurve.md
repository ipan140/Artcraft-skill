# Modul 03: Manipulasi Kurva Kontras (Tone Curve & S-Curve Mastery)

Modul ini menetapkan seni manipulasi kurva nada (*Tone Curve*): kurva kontras S-Curve parametrik, kurva titik (*Point Curve*), pemisahan saluran kurva Red/Green/Blue, serta efek pudar film seluloid (*Matte Shadows*).

---

## 1. Anatomi Kurva Kontras S-Curve (The Classic S-Curve)

Kurva S-Curve adalah metode paling elegan untuk memberikan kontras dramatis (*punchy pop*) tanpa merusak detail highlight dan shadow:

```text
Output Terang
   100% ┌───────────────────────────● (Titik Highlight Ditarik Naik +10%)
        │                         .-'
        │                       .'
        │            ●─────────' (Titik Midtone Tetap di Tengah 50%)
        │          .'
        │       .-'
     0% └──────●───────────────────── (Titik Shadow Ditekan Turun -10%)
        0%                         100% Input Terang
```

- **Mekanisme**: Naikkan titik di kuadran kanan atas (Highlight $\approx 75\%$) sebesar $+5\% \text{ s/d } +10\%$, dan turunkan titik di kuadran kiri bawah (Shadow $\approx 25\%$) sebesar $-5\% \text{ s/d } -10\%$.
- **Hasil**: Nada tengah (*midtones*) mendapatkan gradasi tajam yang membuat foto tampak hidup dan berdimensi 3D.

---

## 2. Efek Matte Shadows Sinematik (Faded Film Look)
- Tarik titik jangkar paling kiri bawah (koordinat awal `Input: 0, Output: 0`) naik ke atas menjadi `Input: 0, Output: 15 s/d 25`.
- **Hasil**: Hitam pekat mutlak diubah menjadi abu-abu arang lembut (*crushed matte charcoal*), meniru karakteristik kertas cetak foto analog vintage atau film bioskop 35mm.

---

## 3. Kurva Titik Saluran Warna Terpisah (RGB Channel Curves)
Manipulasi warna kreatif dilakukan dengan menggeser kurva per saluran independen:

1. **Kurva Merah (Red Channel)**:
   - Naikkan titik shadow untuk memberi rona hangat/merah pada area gelap; turunkan titik shadow untuk memunculkan warna Cyan sejuk.
2. **Kurva Hijau (Green Channel)**:
   - Naikkan untuk menambah warna hijau; turunkan untuk memberi rona Magenta pada shadow.
3. **Kurva Biru (Blue Channel)**:
   - Naikkan titik shadow (`Input: 0, Output: 10`) untuk memberikan rona biru laut (*shadow blue tint*); turunkan titik highlight untuk memberikan rona kuning gading (*creamy warm highlights*).
