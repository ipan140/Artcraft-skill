# Profil Disiplin: Arsitektur & Bangunan (Architectural Drafting)

Profil ini mengatur aturan gambar kerja untuk denah lantai (*floor plans*), tampak bangunan (*elevations*), potongan gedung (*building sections*), dan detail arsitektural.

---

## 1. Standar Acuan & Satuan
- **Standar Utama**: ISO 128 / AIA CAD Layer Guidelines (American Institute of Architects).
- **Satuan Acuan**: Milimeter (`mm`) atau Meter (`m`) tergantung skala gambar.
- **Skala Umum**:
  - Denah & Tampak Gedung: `1:50` atau `1:100`.
  - Site Plan (Tata Letak Lahan): `1:200` atau `1:500`.
  - Detail Arsitektur (Kusen, Plafon, Tangga): `1:10` atau `1:20`.

---

## 2. Sistem Grid & Elemen Struktural Arsitektur

### 2.1 Grid Kolom As (Axis Grid)
- Kolom struktural utama harus diikat dengan grid lingkaran berhuruf (arah vertikal: A, B, C...) dan berangka (arah horizontal: 1, 2, 3...).
- Garis grid menggunakan garis sumbu (*chain linetype*) warna merah/magenta dengan ketebalan 0.25mm.

### 2.2 Hirarki Dinding & Bukaan
1. **Dinding Utama (Bata / Beton / Hebel)**:
   - Garis luar dinding: garis tebal kontinu 0.35mm - 0.50mm.
   - Arsiran bata (*hatch ANSI32* / garis miring 45° berjarak rapat): tebal garis tipis 0.15mm - 0.18mm.
2. **Pintu & Jendela (Doors & Windows)**:
   - Daun pintu digambarkan terbuka dengan busur bukaan 90° (garis tipis kontinu 0.18mm).
   - Tulis kode tipe bukaan: misal `P1` (Pintu Utama), `J1` (Jendela Kaca), `V1` (Ventilasi).

---

## 3. Notasi Elevasi & Dimensi Arsitektural
- **Elevasi Peil Lantai**:
  - Peil lantai utama nol: `± 0.00`.
  - Area basah (kamar mandi/teras): `- 0.05`.
  - Lantai atas: `+ 3.60`.
- **Rantai Dimensi 3 Tingkat (Three-Tier Dimension String)**:
  1. *String 1 (Terdalam)*: Jarak bukaan pintu/jendela ke tepi dinding.
  2. *String 2 (Menengah)*: Jarak antar as dinding/kolom struktural.
  3. *String 3 (Terluar)*: Dimensi total panjang/lebar keseluruhan bangunan.

---

## 4. Legenda Ruang & Material
- Setiap ruangan harus memuat:
  - Nama Ruang (huruf kapital, font tinggi 3.0mm): misal `RUANG TAMU`.
  - Elevasi Peil Lantai: misal `Lt. Keramik 60x60, Peil ±0.00`.
  - Luas Ruangan opsional: misal `(18.5 m²)`.
