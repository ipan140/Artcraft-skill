# Profil Genre: Fotografi Arsitektur & Interior (Architecture & Real Estate)

Profil ini mengatur aturan pengembangan foto RAW untuk gedung perkantoran eksterior, fasad arsitektur modern, dan desain interior ruangan berlampu campuran.

---

## 1. Karakteristik & Tantangan Arsitektur
- **Garis Vertikal Tegak Lurus**: Gedung tinggi tidak boleh tampak jatuh ke belakang (*keystone perspective distortion*).
- **Pencahayaan Campuran (Mixed Lighting)**: Ruangan interior memuat cahaya matahari dari jendela (Daylight 5600K) yang bercampur dengan lampu interior plafon (Tungsten 2700K).
- **Window Pull (Pemandangan Luar Jendela)**: Menyeimbangkan ruangan dalam yang teduh dengan pemandangan taman luar jendela yang sangat terang.

---

## 2. Geometri & Koreksi Perspektif (Upright Transformation)

Sebelum menyentuh warna atau eksposur, lakukan koreksi geometri:

1. **Lens Profile Correction**: Wajib dicentang untuk meluruskan distorsi cembung lensa sudut lebar (misal lensa 14-24mm).
2. **Upright Mode (Vertical / Auto)**:
   - Pilih mode **Vertical** atau gunakan **Guided Upright** (tarik 2 garis vertikal pada sudut dinding kiri dan kanan gedung).
   - Pastikan garis vertikal kolom dan kusen pintu berdiri tegak lurus sempurna 90° terhadap lantai.

---

## 3. Penanganan Warna Interior & Jendela
- **Netralisasi Lampu Campur (Color Cast Cleanup)**:
  - Gunakan masker kuas lokal atau range mask pada area cahaya lampu plafon.
  - Turunkan temperatur kelvin lokal `-10` dan turunkan Yellow/Orange Saturation `-20` agar dinding putih tidak tampak kuning bernoda minyak.
- **Exposure Interior Bracket Blend**:
  - Highlights ditarik penuh `-100` pada masker jendela untuk memperlihatkan pemandangan pepohonan di luar kaca.
