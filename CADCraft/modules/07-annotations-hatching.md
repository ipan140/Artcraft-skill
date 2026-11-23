# Modul 07: Anotasi Teks & Standar Arsir Penampang (Hatching & Annotations ISO 128-50)

Modul ini menetapkan tipografi teknik standar, aturan penarikan garis penunjuk (*leader lines*), dan pola arsiran material penampang potongan (*cross-hatching*).

---

## 1. Standar Pola Arsir Material Penampang (ISO 128-50)

Arsir penampang digunakan untuk membedakan jenis material saat benda dipotong. Garis arsir digambar pada layer `HATCH` dengan garis tipis kontinu (`0.18 mm s/d 0.25 mm`):

| Material Teknik | Pola Arsiran CAD (AutoCAD Pattern) | Deskripsi Visual & Sudut |
| :--- | :--- | :--- |
| **Baja Karbon / Besi Cor** | `ANSI31` | Garis miring sejajar tunggal bersudut 45°, jarak seragam 2mm–4mm. |
| **Kuningan / Tembaga / Perunggu**| `ANSI33` | Garis putus-putus dan garis utuh berselang-seling miring 45°. |
| **Aluminium / Logam Ringan** | `ANSI38` | Garis sejajar miring 45° diselingi pasangan garis ganda. |
| **Plastik / Karet / Isolator** | `ANSI37` | Garis silang kotak (*crosshatch*) miring 45° dan 135°. |
| **Beton Bertulang (Concrete)** | `AR-CONC` | Kombinasi acak kerikil segitiga/poligon dan titik-titik pasir halus. |
| **Pasangan Bata Merah** | `ANSI32` | Pasangan garis ganda miring 45°. |
| **Kayu Lintang (Wood End-Grain)**| Garis melingkar konsentris meniru lingkaran tahunan pohon kayu. |

### 1.1 Aturan Khusus Potongan Rakitan (Assembly Section Hatching)
- Jika dua komponen logam yang berbeda bersentuhan pada bidang potong, arah sudut arsiran harus **berlawanan** (komponen A miring `+45°`, komponen B miring `-45°` atau `135°`).
- Untuk komponen ketiga yang berdekatan, ubah kerapatan jarak antar garis arsir (*hatch scale*) agar batas fisik antar part terlihat sangat kontras.

---

## 2. Tipografi & Gaya Teks Teknik (CAD Text Styles)

* **Font Standar Resmi**: `ISOCPEUR`, `Romans.shx`, atau `Arial` (hindari font dekoratif atau serif seperti Times New Roman).
* **Tinggi Teks Standar Cetak (ISO Standard Text Heights)**:

| Fungsi Teks | Tinggi Teks Cetak (mm) | Ketebalan Garis Teks |
| :--- | :---: | :---: |
| Angka Dimensi & Toleransi | `2.5 mm` | 0.25 mm |
| Catatan Teknik Umum (*General Notes*) | `3.0 mm s/d 3.5 mm` | 0.35 mm |
| Nama Pandangan (misal: `POTONGAN A-A`) | `5.0 mm s/d 7.0 mm` | 0.50 mm |
| Judul Utama Komponen pada Etiket | `7.0 mm s/d 10.0 mm` | 0.70 mm |

---

## 3. Garis Penunjuk Anotasi (Leader Lines)
1. Garis penunjuk (*leader line*) harus selalu ditarik miring (sudut yang disarankan: 30°, 45°, atau 60°), tidak boleh horizontal atau vertikal murni agar tidak tertukar dengan garis gambar benda.
2. Pada ujung yang menempel ke teks catatan, garis penunjuk harus memiliki garis landasan horizontal pendek (*landing*) sepanjang `3 mm s/d 5 mm`.
3. Titik akhir sentuhan ke benda:
   - Menggunakan **ujung panah tajam** jika menunjuk pada garis tepi/kontur benda.
   - Menggunakan **titik bulat hitam pejal (dot)** jika menunjuk ke dalam bidang permukaan atau massa benda.
