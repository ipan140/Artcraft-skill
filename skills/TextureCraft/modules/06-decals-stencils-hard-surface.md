# Modul 06: Decals, Stencils & Hard-Surface Details

Modul ini mendefinisikan teknik penempatan decal proyeksi (*planar/triplanar decals*), teks stensil nomor seri, garis peringatan bahaya (*hazard stripes*), dan penambahan baut/ventilasi mikro menggunakan saluran normal dan height.

---

## 1. Mode Proyeksi Decal (Decal Projection Modes)

| Mode Proyeksi | Karakteristik Perilaku | Kasus Penggunaan Ideal |
|---|---|---|
| **UV Projection** | Menempel mengikuti topologi UV shell | Logo sponsor pada pakaian atau bodi kendaraan |
| **Planar Projection** | Diproyeksikan tegak lurus dari satu bidang kamera | Teks stensil "KEEP CLEAR", nomor registrasi |
| **Tri-Planar Projection** | Diproyeksikan dari 3 arah $(X,Y,Z)$ dengan blending tepi | Tekstur lumpur, cipratan darah, kamuflase tanpa seam |

---

## 2. Penambahan Baut & Ventilasi Mikro (Floating Normal Decals)

- Menambahkan baut atau lubang ventilasi kecil langsung ke model poligon tinggi (*High-Poly*) sering kali memakan waktu lama dan memperberat geometri.
- Buat layer khusus `Decals_HardSurface`:
  - Hanya aktifkan saluran **Normal** dan **Height**.
  - Nonaktifkan saluran Base Color, Roughness, dan Metallic agar warna material dasar di bawahnya tetap tembus.
  - Cap (*stamp*) menggunakan brush Alpha berbentuk paku keling, baut hex, atau kisi ventilasi.
  - Terapkan *Anchor Point* agar generator kotoran otomatis mengenali tonjolan baut baru tersebut.

---

## 3. Penuaan dan Pengikisan Decal (Decal Weathering)

- Decal yang baru ditempel tampak terlalu bersih dan mengambang di atas bodi.
- Pasang masker clipping pada layer decal yang membaca masker *Edge Wear* dan *Scratch Grunge* dari material di bawahnya sehingga stensil ikut tergores dan mengelupas bersamaan dengan cat bodi kendaraan.
