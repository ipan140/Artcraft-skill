# Modul 01: Bézier Curves, Anchor Point Economy & Extrema

Modul ini menetapkan kaidah matematika kurva Bézier kubik, efisiensi penempatan titik simpul (*Anchor Point Economy*), aturan titik puncak kurva (*Curve Extrema*), dan keselarasan lengan pengarah (*Handle Alignment*).

---

## 1. Aturan Titik Puncak Kurva (The Extrema Rule)

Dalam desain vektor profesional:
- **Tempatkan Anchor Point Hanya pada Titik Ekstrem**:
  - Titik tertinggi (Top Extrema)
  - Titik terendah (Bottom Extrema)
  - Titik paling kiri (Left Extrema)
  - Titik paling kanan (Right Extrema)
- **Dilarang Menaruh Titik di Tengah Lengkungan (Mid-curve Points)**:
  - Menaruh titik di tengah-tengah lengkungan kurva menghasilkan sudut benjolan tak kasat mata (*kink / flat spots*) dan memperbesar ukuran berkas SVG.
  - Sebuah lingkaran sempurna hanya membutuhkan tepat **4 titik anchor**, bukan 8 atau 16 titik.

---

## 2. Penguncian Lengan Pengarah (Orthogonal Handle Alignment)

- Lengan pengarah (*Bézier Handles*) pada titik-titik ekstrem harus selalu ditarik **Sejajar Sumbu Horizontal atau Vertikal** (tahan tombol `Shift` saat menggambar di Illustrator/Figma/Inkscape).
- Lengan horizontal hanya mengontrol kelengkungan sumbu $X$, dan lengan vertikal hanya mengontrol kelengkungan sumbu $Y$. Hal ini menjamin kelengkungan kurva halus (*G2 Continuity*) tanpa distorsi sudut.

---

## 3. Tiga Tipe Simpul Node Titik Vektor

| Tipe Node | Karakteristik Perilaku | Penerapan Ideal |
|---|---|---|
| **Smooth Node (Halus)** | Kedua handle berlawanan arah $180^\circ$ segaris lurus; panjang handle dapat berbeda | Lengkungan organik, transisi bentuk bodi |
| **Symmetrical Node (Simetris)** | Kedua handle segaris lurus dan memiliki panjang yang sama persis | Lingkaran, elips sempurna, kubah simetris |
| **Corner / Cusp Node (Sudut Tajam)** | Kedua handle dapat ditarik ke sudut sembarang secara independen atau tanpa handle | Sudut bintang, ujung anak panah, patahan geometris $90^\circ$ |
