# Modul 06: Assembly Modeling, Mates & Kinematic DOF

Modul ini menetapkan protokol perakitan komponen solid (*Assembly Modeling*), relasi pasangan gerak (*mates / constraints*), derajat kebebasan kinematika, dan pemeriksaan interferensi tabrakan komponen (*collision detection*).

---

## 1. Komponen Dasar Tetap (The Grounded Component)

- Komponen pertama yang dimasukkan ke dalam ruang perakitan (*Assembly space*) wajib **Dikunci / Ditetapkan Permanen (Grounded / Fixed)** pada koordinat Origin $(0, 0, 0)$ perakitan.
- Komponen dasar biasanya berupa sasis utama (*chassis*), rumah mesin (*housing*), atau rangka meja mesin (*base frame*).

---

## 2. Hirarki Pasangan Perakitan (Mate Constraints Hierarchy)

Setiap benda bebas di ruang 3D memiliki 6 derajat kebebasan: 3 translasi $(X, Y, Z)$ dan 3 rotasi $(\theta_x, \theta_y, \theta_z)$. Gunakan mates standar untuk mengunci DOF secara rasional:

```
[1. Concentric Mate] ──> Mengunci 2 Translasi (Sumbu lubang sejajar)
        ↓
[2. Coincident / Distance Mate] ──> Mengunci 1 Translasi (Permukaan bahu menempel)
        ↓
[3. Parallel / Angle / Tangent Mate] ──> Mengunci Rotasi yang tersisa (Jika tidak berputar)
```

- **Perakitan Mekanisme Dinamis (Kinematics)**:
  - Sisakan tepat 1 derajat kebebasan rotasi untuk poros berputar atau 1 translasi untuk piston maju-mundur.
  - Tentukan batas gerak (*Limit Mates*) pada langkah stroke minimum dan maksimum.

---

## 3. Pemeriksaan Interferensi Statis (Interference Detection)

Sebelum merilis berkas assembly:
1. Jalankan **Interference Detection Tool** pada seluruh komponen dalam kondisi terpasang.
2. Hasil evaluasi interferensi yang diizinkan hanya interferensi nominal pada ulir baut standar (karena disederhanakan sebagai silinder) dan suaian pas sesak (*press fit*).
3. Seluruh komponen lain wajib menunjukkan **Zero Interferences (0 tabrakan fisik)**.
