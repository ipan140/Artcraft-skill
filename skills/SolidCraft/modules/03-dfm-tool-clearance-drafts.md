# Modul 03: DFM - Tool Clearance, Drafts & Undercuts

Modul ini menetapkan prinsip Desain untuk Manufaktur (*Design for Manufacturing / DFM*), radius lintasan mata pahat CNC, sudut bukaan cetakan injeksi plastik (*draft angles*), dan eliminasi ceruk undercut tersembunyi.

---

## 1. DFM Pemesinan CNC (Subtractive Machining)

1. **Jangkauan Pahat (Tool Reach & Aspect Ratio)**:
   - Hindari kantong dalam sempit yang membutuhkan rasio panjang terhadap diameter mata pahat $L/D > 5$, karena akan menyebabkan pembengkokan pahat dan hasil akhir permukaan kasar.
2. **Radius Dasar Kantong (Floor Radius)**:
   - Berikan radius fillet kecil pada lantai dasar kantong ($R \approx 0.5 - 1.0\text{ mm}$) daripada sudut tajam mati $90^\circ$ agar umur mata pahat bull-nose lebih awet.
3. **Standarisasi Diameter Lubang Baut**:
   - Rancang lubang bor mengikuti ukuran mata bor metrik standar (misal: lubang tembus $M6 = \varnothing 6.6\text{ mm}$, lubang ulir $M6 = \varnothing 5.0\text{ mm}$).

---

## 2. DFM Cetakan Injeksi Plastik & Pengecoran Logam (Draft & Parting Lines)

1. **Analisis Garis Pisah Cetakan (Parting Line)**:
   - Rancang geometri sedemikian rupa sehingga garis belah cetakan (*core and cavity separation*) dapat berada pada satu bidang datar kontinu.
2. **Sudut Kemiringan Cetakan (Draft Angle)**:
   - Dinding luar: Minimal $1.5^\circ$.
   - Dinding dalam (yang menyusut dan mencengkeram core cetakan): Minimal $2.0^\circ$.
   - Rusuk penguat: $0.5^\circ - 1.0^\circ$.
3. **Pencegahan Undercuts**:
   - Hindari fitur tonjolan samping atau lubang melintang yang tegak lurus arah buka cetakan, karena memerlukan mekanisme *side-action slider* tambahan yang meningkatkan biaya cetakan ribuan dolar.

---

## 3. Evaluasi DFM Otomatis

Sebelum merilis model ke lantai produksi, lakukan:
- *Draft Analysis*: Warna hijau untuk draft positif, merah untuk draft negatif, dan kuning untuk dinding tegak tanpa draft.
- *Thickness Analysis*: Deteksi area tebal lokal yang berpotensi menimbulkan *sink marks* atau gelembung udara internal.
