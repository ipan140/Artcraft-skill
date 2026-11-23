# Domain Profile: Iconography Systems & Micro UI Icons

Profil ini mengatur pembuatan sistem ikon antarmuka digital (UI Icon Sets: $16\text{ px}$, $20\text{ px}$, $24\text{ px}$, $32\text{ px}$), penyelarasan grid piksel sempurna (*pixel grid alignment*), ketebalan garis konsisten (*stroke weight*), dan keseimbangan optik (*optical balancing*).

---

## 1. Kanvas Standar & Garis Batas Aman (Keyline Shapes)

Setiap ikon pada ukuran kanvas dasar $24 \times 24\text{ px}$ menggunakan kisi geometri panduan:

```
┌──────────────────────────┐  Kanvas: 24 x 24 px
│  ┌────────────────────┐  │  Padding Luar: 2 px di setiap sisi
│  │  ┌──────────────┐  │  │  Kotak Persegi: 18 x 18 px
│  │  │   (Lingkar)  │  │  │  Lingkaran Diameter: 20 px (Kompensasi optik)
│  │  │   20 x 20 px │  │  │  Persegi Panjang Horisontal: 20 x 16 px
│  │  └──────────────┘  │  │  Persegi Panjang Vertikal: 16 x 20 px
│  └────────────────────┘  │
└──────────────────────────┘
```

---

## 2. Snapping Grid Piksel Mutlak (Pixel Snapping)

Untuk mencegah anti-aliasing buram pada layar non-retina:
- **Garis Berujung Koordinat Penuh**: Garis vertikal dan horizontal harus menempati koordinat bulat ($X = 4.0\text{ px}$, bukan $X = 4.37\text{ px}$).
- **Stroke Berpusat (Center Stroke)**:
  - Jika menggunakan stroke $2.0\text{ px}$ tengah (*Center Alignment*), garis harus ditempatkan tepat pada garis grid integer.
  - Jika menggunakan stroke $1.0\text{ px}$ tengah, garis harus ditempatkan pada offset setengah piksel ($0.5, 1.5, 2.5$) agar badan garis $1\text{ px}$ memenuhi piksel layar secara utuh tanpa bayangan abu-abu di tepinya.

---

## 3. Gaya Varian Terpadu (Consistent Icon Styles)

Setiap ikon harus dirancang dalam 2 gaya pasangan yang konsisten:
1. **Outline / Stroke Style**: Garis tegas $2\text{ px}$, sudut sambungan membulat (*Round Join / Round Cap*).
2. **Filled / Solid Style**: Bentuk siluet padat untuk menandai status tombol aktif (*active state*).
