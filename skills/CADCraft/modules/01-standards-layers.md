# Modul 01: Sistem Layer & Standar Garis CAD (ISO 128 / ASME Y14.2)

Modul ini menetapkan konfigurasi layer baku, palet warna ACI (AutoCAD Color Index), jenis garis (*linetype*), dan ketebalan garis standar (*lineweight*).

---

## 1. Tabel Konfigurasi Layer Standar CAD

Setiap gambar kerja wajib memisahkan entitas ke dalam layer tersendiri. Jangan pernah menggambar semua elemen di layer `0` atau layer `Defpoints`:

| Nama Layer | Warna Standar ACI | Linetype | Lineweight (ISO) | Deskripsi & Penggunaan |
| :--- | :--- | :--- | :--- | :--- |
| `VISIBLE` | Putih / Hitam (`7`) | Continuous | `0.50 mm` | Kontur tepi benda nyata yang terlihat langsung dari arah pandang. |
| `HIDDEN` | Cyan (`4`) | Hidden / Dashed | `0.25 mm` | Garis sudut/tepi fitur tersembunyi yang tertutup material. |
| `CENTER` | Merah (`1`) | Center / DashDot| `0.25 mm` | Sumbu simetri, lingkaran poros, dan pitch circle lubang baut. |
| `DIMENSION`| Hijau (`3`) | Continuous | `0.25 mm` | Garis ukur, garis bantu ukur, dan angka dimensi. |
| `TEXT` | Kuning (`2`) | Continuous | `0.35 mm` | Anotasi catatan teknik, callouts, dan nomor pandangan. |
| `HATCH` | Abu-abu (`8` atau `9`)| Continuous | `0.18 mm` | Garis arsiran penampang potongan material (*section cuts*). |
| `SECTION` | Magenta (`6`) | Phantom / Dashed| `0.70 mm` / `0.35 mm`| Garis lintasan bidang potong (*cutting plane line*) dan tanda panah. |
| `TITLE_BLOCK`| Putih (`7`)| Continuous | `0.35 mm` / `0.70 mm`| Bingkai etiket gambar dan garis tabel data resmi. |
| `DEFPOINTS` | Putih (`7`) | Continuous | Default (No Plot)| Titik referensi dimensi, batas viewport modelspace (tidak dicetak). |

---

## 2. Rasio Ketebalan Garis (ISO 128 Line Width Groups)

Standar ISO menetapkan rasio ketebalan garis $1 : \sqrt{2} \approx 1 : 1.4$. Dalam satu set gambar, pilihlah salah satu kelompok ketebalan garis:

- **Grup 0.5 (Paling Umum)**:
  - Garis sangat tebal: `0.70 mm` (Batas kertas etiket, ujung bidang potong).
  - Garis tebal (*thick line*): `0.50 mm` (Garis benda tampak nyata).
  - Garis tipis (*thin line*): `0.25 mm` (Dimensi, garis arsir, garis sumbu, garis tersembunyi).
  - Garis sangat tipis: `0.18 mm` (Arsir padat material khusus).

- **Grup 0.7 (Untuk Gambar Skala Besar / A1-A0)**:
  - Garis tebal: `0.70 mm`
  - Garis tipis: `0.35 mm`

---

## 3. Aturan Pertemuan Garis (Linetype Intersection Rules)
1. **Garis Tersembunyi (Hidden Lines)**:
   - Garis putus-putus harus bersinggungan langsung dengan garis kontur tebal tempat ia bermula.
   - Jika dua garis tersembunyi berpotongan di sudut, titik sudut harus tertutup oleh strip garis, bukan celah kosong.
2. **Garis Sumbu (Centerlines)**:
   - Garis sumbu harus menonjol keluar melewati tepi kontur benda sebesar `2 mm s/d 5 mm` (pada skala cetak 1:1).
   - Di titik pusat lingkaran, garis sumbu harus saling bersilangan pada segmen strip panjang, bukan celah (*gap*).
