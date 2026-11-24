# Modul 03: Dimensi & GD&T (Geometric Dimensioning & Tolerancing)

Modul ini menetapkan aturan pemberian ukuran presisi, penetapan kerangka datum acuan, toleransi geometris (ASME Y14.5 / ISO 1101), dan suaian lubang-poros (ISO 286).

---

## 1. Aturan Emas Dimensi Gambar Teknik (Dimensioning Rules)

1. **Jarak Garis Dimensi**:
   - Garis dimensi pertama berjarak minimal `10 mm` dari garis kontur benda.
   - Jarak antar garis dimensi berikutnya berjarak konstan `7 mm s/d 8 mm`.
   - Garis bantu ukur (*extension line*) harus memanjang `2 mm s/d 3 mm` melewati kepala panah dimensi.
2. **Jangan Menimpa Kontur Benda**:
   - Tarik seluruh garis ukuran keluar dari badan benda gambar kerja.
   - Jangan pernah menggunakan garis kontur benda nyata atau garis sumbu sebagai garis dimensi.
3. **Pemberian Dimensi Lingkaran & Silinder**:
   - Berikan simbol diameter `Ø` di depan angka ukuran (misal: `Ø 45`).
   - Pada pandangan memanjang silinder, tuliskan ukuran diameter, jangan pada pandangan lingkaran penuh jika pandangan memanjang lebih jelas menunjukkan panjang silinder.
   - Gunakan simbol radius `R` untuk busur lingkaran yang tidak membentuk lingkaran utuh (misal: `R 12`).

---

## 2. Sistem Toleransi Suaian ISO 286 (Fits & Clearances)

Pilihlah pasangan toleransi berbasis sistem lubang dasar (*Hole-Basis System*) dengan toleransi dasar lubang `H`:

| Jenis Suaian | Pasangan ISO | Aplikasi Tipikal | Karakteristik Mekanikal |
| :--- | :--- | :--- | :--- |
| **Loose Clearance** | `H11 / c11` | Engsel pintu, tuas rem kasar | Celah sangat longgar, ada gerakan bebas. |
| **Normal Running** | `H8 / f7` | Bantalan luncur mesin, poros transmisi | Berputar mulus dengan pelumasan oli normal. |
| **Precision Sliding**| `H7 / g6` | Spindle mesin bubut, katup hidrolik | Sangat presisi, meluncur mulus tanpa goyangan (*no play*). |
| **Locating Transition**| `H7 / k6` | Roda gigi yang dipasak pada poros | Pas tepat, dapat dirakit/dilepas dengan palu lunak. |
| **Light Press Fit** | `H7 / p6` | Bushing bantalan yang dipress permanen | Membutuhkan alat press hidrolik saat pemasangan. |
| **Heavy Shrink Fit** | `H7 / s6` | Ring roda kereta api, kopling berat | Membutuhkan ekspansi termal (pemanasan ring). |

---

## 3. GD&T: Simbol Toleransi Geometris (ASME Y14.5 / ISO 1101)

### 3.1 Struktur Kotak Kontrol Fitur (Feature Control Frame)
Format standar penulisan GD&T dalam kotak persegi:

```text
┌───────────┬──────────────┬─────────┬──────────┬─────────┐
│  Simbol   │  Toleransi   │ Datum A │ Datum B  │ Datum C │
│ Geometris │ (Ø 0.05 (M)) │ (Primer)│(Sekunder)│(Tersier)│
└───────────┴──────────────┴─────────┴──────────┴─────────┘
```

### 3.2 Katalog Simbol Geometris Utama

| Kategori | Simbol | Karakteristik | Penjelasan Fungsi |
| :--- | :--- | :--- | :--- |
| **Bentuk (Form)** | `—` | Kelurusan (*Straightness*) | Memastikan elemen garis lurus dalam batas toleransi. |
| | `⏥` | Kerataan (*Flatness*) | Permukaan bidang harus berada di antara 2 bidang paralel berjarak $t$. |
| | `○` | Kebundaran (*Circularity*) | Irisan tegak lurus silinder harus bundar sempurna. |
| | `⌭` | Silindrisitas (*Cylindricity*) | Keseluruhan permukaan luar silinder merata dan lurus. |
| **Orientasi** | `⟂` | Ketegaklurusan (*Perpendicularity*)| Bidang/sumbu harus membentuk sudut 90° tepat terhadap datum. |
| | `∥` | Kesejajaran (*Parallelism*) | Bidang harus sejajar konstan terhadap bidang datum. |
| | `∠` | Ketirusan / Kemiringan (*Angularity*)| Permukaan membentuk sudut presisi terhadap bidang datum. |
| **Lokasi** | `⌖` | Posisi Nyata (*True Position*) | Mengontrol posisi sumbu lubang baut dari titik teoritis murni. |
| | `◎` | Konsentrisitas (*Concentricity*) | Kesamaan pusat sumbu antara dua diameter poros. |
| | `⌯` | Simetri (*Symmetry*) | Bidang median fitur simetris terhadap datum tengah. |
| **Runout** | `↗` | Runout Melingkar (*Circular Runout*)| Mengukur simpangan putar saat benda diputar 360°. |
| | `⌰` | Runout Total (*Total Runout*) | Mengukur deviasi seluruh permukaan silinder saat berputar. |

### 3.3 Modifier Material Condition
- `(M)`: Maximum Material Condition (MMC) – Memberikan bonus toleransi saat fitur menjauhi batas material maksimum.
- `(L)`: Least Material Condition (LMC).
- `(R)`: Regardless of Feature Size (RFS) – Toleransi tetap berlaku ketat tanpa bonus.
