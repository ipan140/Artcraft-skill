# Modul 03: Standar Pra-Cetak, Bleed & Tanda Potong (Pre-press Bleed & Crop Marks)

Modul ini menetapkan parameter teknis persiapan berkas sebelum dikirim ke mesin cetak offset atau digital: pengaturan tarikan lebihan cetak (*bleed*), area catatan teknis (*slug*), dan kotak geometri PDF standar (*Box Dimensions*).

---

## 1. Geometri Kotak Halaman PDF Standar (PDF Page Boxes)

Setiap halaman dokumen cetak profesional memiliki 5 batas kotak konsentris:

```text
┌────────────────────────────────────────────────────────┐ < MediaBox (Ukuran kertas fisik mesin)
│  ┌──────────────────────────────────────────────────┐  │ < BleedBox (Tarikan warna keluar +3mm)
│  │  ┌────────────────────────────────────────────┐  │  │ < TrimBox (Ukuran bersih akhir setelah dipotong)
│  │  │  ┌──────────────────────────────────────┐  │  │  │ < MarginBox / Live Area (Batas teks aman)
│  │  │  │                                      │  │  │  │
│  │  │  │      AREA TEKS & KONTEN AMAN         │  │  │  │
│  │  │  │                                      │  │  │  │
│  │  │  └──────────────────────────────────────┘  │  │  │
│  │  └────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────┘
```

1. **TrimBox (Ukuran Bersih Potong)**:
   - Dimensi riil publikasi akhir setelah dipotong pisau gilotin (misal A4: `210 x 297 mm`).
2. **BleedBox (Ukuran Lebih Cetak)**:
   - Tambahan minimal `3.0 mm` (atau `5.0 mm` untuk kemasan karton) di keempat sisi luar TrimBox.
   - Semua gambar, foto latar, atau blok warna yang menyentuh tepi halaman **wajib ditarik hingga mencapai garis BleedBox**.
   - Tujuan: Mencegah munculnya garis putih tipis jelek jika pisau potong mesin meleset $0.5\text{mm}$.
3. **Live Area / Margin Aman**:
   - Area teks inti berjarak minimal `5.0 mm` ke dalam dari garis TrimBox agar teks tidak terpotong pisau cetak.

---

## 2. Area Catatan Teknis (Slug Area)
- Bidang di luar BleedBox selebar `5.0 mm s/d 10.0 mm` di bagian bawah atau atas lembar kerja.
- Digunakan untuk mencetak informasi non-desain untuk operator mesin percetakan:
  - Nama Dokumen: misal `MAJALAH_ARSITEKTUR_EDISI_12_SPREAD_HAL_04-05.pdf`
  - Tanggal Pembuatan & Waktu Ekspor
  - Separasi Warna: Tanda lingkaran registrasi cetak (*registration targets*) dan skala CMYK densitometer (*color bars*).

---

## 3. Tanda Potong & Tanda Registrasi (Printer's Marks)
- **Crop Marks (Tanda Potong)**: Garis tipis 0.25pt di luar sudut TrimBox yang menunjukkan titik di mana pisau mesin potong harus memotong kertas.
- **Registration Marks (Tanda Pas)**: Simbol lingkaran silang presisi yang digunakan operator cetak untuk memastikan keempat pelat cetak (Cyan, Magenta, Yellow, Black) mencetak tepat di atas titik yang sama (*perfect registration*).
