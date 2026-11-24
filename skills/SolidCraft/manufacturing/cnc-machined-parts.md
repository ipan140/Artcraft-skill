# Manufacturing Profile: CNC Machined Parts (Milling & Turning)

Profil ini menetapkan aturan pemodelan benda padat parametrik untuk komponen logam presisi yang diproduksi melalui proses permesinan CNC 3-Axis / 5-Axis (frais) dan mesin bubut (turning).

---

## 1. Aturan Desain Pemesinan CNC (Design for Machining - DFM)

- **Radius Sudut Dalam (Internal Corner Radii)**:
  - Mata pahat end-mill berbentuk silinder berputar sehingga tidak dapat membuat sudut tajam $90^\circ$ di bagian dalam kantong (*pocket*).
  - Selalu berikan radius sudut dalam minimal $R \ge \frac{1}{2} \times D_{\text{tool}}$. Rekomendasi standar: $R \ge 3.2\text{ mm}$ (untuk end mill diameter $6\text{ mm}$) atau tambahkan *dog-bone / T-bone undercut* jika komponen persegi harus dipasangkan rata.
- **Rasio Kedalaman Kantong (Pocket Depth Ratio)**:
  - Batasi kedalaman kantong maksimal $4 \times$ diameter mata pahat untuk mencegah defleksi pahat dan getaran permukaan (*tool chatter*).
- **Ketebalan Dinding Minimum**:
  - Aluminium: Minimal $1.0\text{ mm}$ (disarankan $1.5\text{ mm}$).
  - Baja: Minimal $0.8\text{ mm}$.

---

## 2. Fitur Silindris & Bubut (Lathe Turning)

- Gunakan fitur **Revolve** di sekitar sumbu tengah untuk komponen silindris (poros, busing, flensa bundar).
- Selalu sediakan relief undercut di ujung ulir baut atau bahu poros untuk lintasan keluar mata pahat pemotong.

---

## 3. Strategi Fixturing & Penjepitan

- Pastikan model memiliki minimal dua bidang datar sejajar yang dapat dijepit dengan aman oleh ragum standar (*machine vise*) tanpa merusak geometri kritis.
- Minimalkan jumlah orientasi pengaturan ulang (*setups*); usahakan semua fitur utama dapat dijangkau dari satu atau dua arah sumbu utama.
