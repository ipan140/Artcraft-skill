# Profil Disiplin: Teknik Mesin & Manufaktur (Mechanical Engineering)

Profil ini mengatur aturan gambar kerja untuk komponen mesin, bagian bubut/milling CNC, rakitan mekanik (*assemblies*), dan manufaktur presisi.

---

## 1. Standar Acuan & Satuan
- **Standar Utama**: ISO (ISO 128 untuk drafting, ISO 1101 untuk GD&T, ISO 286 untuk suaian lubang/poros) atau ASME Y14.5M.
- **Satuan Acuan**: Milimeter (`mm`), presisi 3 desimal (`0.001 mm`) untuk area toleransi kritis.
- **Sistem Proyeksi**: Default menggunakan **Third Angle Projection** (Proyeksi Sudut Ketiga) dengan simbol kerucut terpancung wajib di etiket.

---

## 2. Aturan Manufaktur & Permesinan Presisi

### 2.1 Sistem Suaian ISO 286 (Fits & Tolerances)
- **Suaian Longgar / Clearance Fit**: Misal `H7/g6` (poros dapat berputar bebas dalam bantalan).
- **Suaian Transisi / Transition Fit**: Misal `H7/k6` atau `H7/m6` (komponen dirakit dengan palu karet atau sedikit tekanan).
- **Suaian Paksa / Interference Fit**: Misal `H7/p6` atau `H7/s6` (perlu pemanasan sleeve atau hidrolik press untuk perakitan permanen).

### 2.2 Simbol Tekstur & Kekasaran Permukaan (ISO 1302)
- Cantumkan nilai kekasaran $Ra$ ($\mu m$):
  - Bagian non-kritis (hasil casting/raw stock): $Ra = 6.3 - 12.5\ \mu m$.
  - Bagian permesinan umum (rough milling/turning): $Ra = 3.2\ \mu m$.
  - Bagian fungsional presisi (finish turning/grinding): $Ra = 0.8 - 1.6\ \mu m$.
  - Dudukan bearing / seal hidrolik: $Ra = 0.2 - 0.4\ \mu m$.

---

## 3. Fitur Khusus Mekanikal
1. **Chamfer & Fillet**:
   - Berikan notasi konsisten: `2 x 45°` atau `C2.0` untuk chamfer luar pelindung tajam.
   - Cantumkan radius fillet internal untuk mencegah konsentrasi tegangan (*stress concentration*).
2. **Ulir Standar (Thread Callouts)**:
   - Metrik kasar: `M10 x 1.5 - 6H` (lubang) / `6g` (baut).
   - Metrik halus: `M12 x 1.25`.
   - Lubang bor dan ulir: Berikan kedalaman bor tap (`tap drill depth`) dan kedalaman ulir efektif.
3. **Alur Pasak & Spline**:
   - Wajib menyertakan toleransi lebar dan kedalaman alur pasak sesuai standar DIN 6885 / ISO 773.

---

## 4. Hirarki Pandangan & Potongan
- Tampilkan pandangan utama yang paling banyak merepresentasikan bentuk benda (*front view*).
- Gunakan potongan separuh (*half section*) untuk benda simetris silindris agar fitur luar dan rongga dalam terlihat sekaligus.
- Selalu gambarkan garis sumbu (*centerline*) pada seluruh fitur silinder, lingkaran baut (*pitch circle diameter / PCD*), dan lubang tembus.
