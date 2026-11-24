# Profil Disiplin: Teknik Sipil & Struktur (Civil & Structural Engineering)

Profil ini mengatur aturan gambar kerja untuk konstruksi sipil, pembesian beton bertulang (*reinforced concrete*), struktur baja profil (*structural steel*), dan detail pondasi.

---

## 1. Standar Acuan & Satuan
- **Standar Utama**: ACI (American Concrete Institute) / AISC (American Institute of Steel Construction) / SNI Konstruksi & ISO.
- **Satuan Acuan**: Milimeter (`mm`) untuk detail sambungan baja & pembesian; Meter (`m`) untuk layout kontur tanah & elevasi muka air tanah.
- **Skala Umum**:
  - Denah Penulangan & Pondasi: `1:50` atau `1:100`.
  - Detail Penampang Balok/Kolom: `1:20` atau `1:25`.
  - Detail Sambungan Baja (*Connection Details*): `1:5` atau `1:10`.

---

## 2. Struktur Beton Bertulang (Reinforced Concrete)

### 2.1 Notasi Pembesian (Rebar Callout)
- Notasi tulangan wajib mencantumkan:
  - Jumlah tulangan utama: misal `4 D 19` (4 batang tulangan ulir diameter 19 mm).
  - Jarak sengkang/begel: misal `Ø 10 - 150` (tulangan polos diameter 10 mm dengan jarak antar sengkang 150 mm).
- **Selimut Beton (Concrete Cover)**:
  - Wajib digambarkan dengan jelas (tebal 25mm s/d 50mm tergantung eksposur tanah/cuaca).
- **Panjang Penyaluran & Kait (Development Length & Hooks)**:
  - Bengkokan standar 90° atau 135° pada ujung begel anti-gempa.

### 2.2 Tabel Penulangan (Bending Schedule)
- Gambar detail potongan balok dan kolom wajib disertai tabel rebar schedule yang memuat kode batang, diameter, bentuk potongan, panjang per potong, dan total berat baja (kg).

---

## 3. Struktur Baja (Structural Steel)

### 3.1 Profil Baja Standar
- Tuliskan identifikasi profil resmi:
  - Wide Flange: `WF 300 x 150 x 6.5 x 9`
  - H-Beam: `H 200 x 200 x 8 x 12`
  - Kanal C: `UNP 150 x 75 x 6.5`
  - Siku Sama Kaki: `L 75 x 75 x 6`
  - Pipa Kotak: `HSS 100 x 100 x 4.5`

### 3.2 Detail Sambungan Baut & Las
- **Baut Mutu Tinggi (High Strength Bolts)**:
  - Notasi baut: misal `6 - Baut A325 M20 (Gusset Plate t=10mm)`.
  - Jarak tepi lubang baut (*edge distance*) dan jarak antar sumbu baut (*pitch distance*) harus mematuhi standar AISC minimum ($1.5 \times d$).
- **Simbol Pengelasan**:
  - Tentukan jenis las: las sudut (*fillet weld*), las tumpul (*groove weld*), tebal leher las (*weld throat*), dan apakah pengelasan dilakukan di workshop atau di lapangan (*field weld flag*).

---

## 4. Pondasi & Pekerjaan Tanah
- Detail pondasi telapak/tiang pancang harus mencantumkan:
  - Elevasi dasar galian dan lapisan pasir urug ($t = 50\text{mm}$).
  - Lantai kerja beton rabat ($t = 50 - 100\text{mm}$).
  - Angkur baja pengikat base plate kolom pedestal.
