# Profil Disiplin: Kustom Teknik (Custom Engineering Discipline)

Profil ini digunakan ketika proyek memerlukan disiplin teknis khusus di luar mesin, arsitektur, dan sipil—seperti **Piping & Instrumentation (P&ID)**, **Sistem Tata Udara (HVAC)**, **Elektrikal & Wiring (Single Line Diagram)**, atau **Topografi & Pemetaan Lahan**.

---

## 1. Konfigurasi Disiplin Kustom

Tentukan jenis disiplin kustom pada [config.md](../config.md) pada opsi `custom_discipline_type`:

```yaml
target_discipline: "custom-discipline"
custom_discipline_type: "piping-mep" # piping-mep | electrical-schematic | hvac | surveyor-topography
```

---

## 2. Profil 1: Perpipaan & Instrumentasi (Piping & P&ID)

- **Standar Acuan**: ISA 5.1 (Instrumentation Symbols and Identification) & ASME B31.3.
- **Ukuran Garis Pipa (Line Tagging)**:
  - Format tag: `[Ukuran Pipa]" - [Kode Fluida] - [Nomor Jalur] - [Spesifikasi Pipa] - [Isolasi]`
  - Contoh: `4"-CW-1002-CS150-N` (Pipa 4 inch, Cooling Water, Jalur 1002, Carbon Steel Class 150, Tanpa Isolasi).
- **Simbol Katup & Instrumen**:
  - Gate Valve, Globe Valve, Check Valve, Ball Valve, Pressure Relief Valve (PRV).
  - Gelembung Instrumentasi: Bulat utuh (instrumen lapangan), bulat bergaris horizontal tengah (instrumen di panel kontrol utama DCS).

---

## 3. Profil 2: Elektrikal & Skematik (Electrical Single Line Diagram - SLD)

- **Standar Acuan**: IEC 60617 (Standar Simbol Listrik Internasional) / IEEE 315.
- **Hierarki Jaringan**:
  - Penyulang Utama Tegangan Menengah (TM 20kV) $\rightarrow$ Transformator Distribusi Step-Down $\rightarrow$ Panel Utama Tegangan Rendah (LVMDP) $\rightarrow$ Sub-Distribution Panel (SDP) $\rightarrow$ Beban Akhir.
- **Anotasi Proteksi & Kabel**:
  - Nilai pemutus daya: misal `MCCB 3P 250A 36kA`.
  - Spesifikasi kabel: misal `4x(1x185mm²) NYY + 1x95mm² BC Grounding`.
  - Simbol CT (Current Transformer), PT (Potential Transformer), dan Relay Proteksi OCR/GFR.

---

## 4. Profil 3: Tata Udara & Ventilasi (HVAC Ducting)

- **Standar Acuan**: SMACNA (Sheet Metal and Air Conditioning Contractors' National Association).
- **Notasi Ducting**:
  - Dimensi ducting segiempat: `Lebar (W) x Tinggi (H)` (misal `600 x 300 mm`).
  - Laju aliran udara (CFM atau m³/jam): misal `1200 CFM`.
  - Kecepatan aliran: misal `V = 4.5 m/s`.
  - Tipe Diffuser: Supply Air Diffuser (SAD), Return Air Grille (RAG), Fresh Air Louver (FAL).

---

## 5. Profil 4: Topografi & Kontur Tanah (Surveying)

- **Standar Acuan**: Standar Pemetaan Kadastral / Geodesi Nasional.
- **Elemen Gambar**:
  - Garis Kontur Indeks (garis tebal 0.35mm, beranotasi angka ketinggian meter setiap kelipatan 5m).
  - Garis Kontur Antara (garis tipis 0.18mm tanpa teks).
  - Arah Utara Geografis (True North Arrow) dan Koordinat UTM (Easting & Northing).
  - Titik Bench Mark (BM) resmi dengan koordinat $X, Y, Z$.
