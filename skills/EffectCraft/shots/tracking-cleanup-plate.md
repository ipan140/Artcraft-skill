# Profil Shot: Pelacakan Kamera & Pembersihan Plat (Tracking & Cleanup Plate)

Profil ini mengatur alur kerja matchmoving kamera 3D, pelacakan bidang datar (*planar tracking*), penggantian layar monitor/ponsel (*screen replacement*), penghapusan kawat pemeran pengganti (*wire removal*), dan rekonstruksi background bersih (*clean plate generation*).

---

## 1. Karakteristik & Kategori Tugas Cleanup

Dalam produksi film, 40% pekerjaan compositing adalah pembersihan elemen yang tidak diinginkan dari rekaman:

1. **Screen Replacement (Ganti Layar Gadget / Billboard)**:
   - Menempelkan antarmuka grafis ke layar ponsel, tablet, atau TV yang dipegang aktor yang bergerak.
2. **Rig & Wire Removal**:
   - Menghilangkan tali sling pengaman aktor saat adegan terbang/melompat, tongkat penyangga boneka animatronik, atau mikrofon boom yang bocor ke dalam frame.
3. **Pembersihan Set & Logo**:
   - Menghapus merek sponsor yang belum berizin, kabel listrik di dinding, atau jejak ban kru film di pasir/tanah.

---

## 2. Metodologi Pelacakan (Tracking Workflow)

1. **Planar Tracking (Mocha Style)**:
   - Gunakan planar tracking untuk permukaan datar (layar ponsel, dinding, lantai jalan).
   - Ekspor data sebagai **Corner Pin 4-Titik** untuk menempelkan grafis baru dengan distorsi perspektif sempurna.
2. **3D Camera Solver (Matchmoving)**:
   - Lacak minimal 80–120 titik fitur (*feature points*) di seluruh foreground dan background.
   - Tetapkan bidang dasar lantai (*ground plane*) dan skala koordinat dunia nyata.
   - Syarat Lolos Sensor Film: **Root Mean Square (RMS) Error wajib $\le 0.5$ piksel**.

---

## 3. Rekonstruksi Plat Bersih (Clean Plate Painting)
- Pilih frame di mana objek background tertutup paling sedikit (*reference hero frame*).
- Gunakan teknik clone stamping, patch projection menggunakan kamera 3D yang telah di-solve, atau frame blending.
- Kunci Keberhasilan: **Wajib memasang kembali butiran grain film asli** di atas area tambalan clean plate agar area yang dicat tidak tampak buram (*smeared*) dan mati.
