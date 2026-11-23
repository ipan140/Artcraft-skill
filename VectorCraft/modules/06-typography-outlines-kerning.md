# Modul 06: Typography to Outlines, Kerning & Custom Lettering

Modul ini menetapkan protokol konversi tipografi menjadi kurva vektor murni (*Text to Outlines*), penyesuaian jarak antarkarakter (*Optical Kerning*), dan modifikasi huruf kustom (*custom lettering*).

---

## 1. Aturan Wajib: Text to Outlines

> [!IMPORTANT]
> Saat merilis file master logo atau materi cetak akhir ke klien atau vendor percetakan:
> Seluruh teks yang menggunakan font sistem wajib diubah menjadi kurva vektor tertutup (`Type -> Create Outlines` / `Ctrl/Cmd + Shift + O`).
> Dokumen tidak boleh mengandung tag teks aktif `<text>` yang mengandalkan file font lokal mesin, karena jika font tersebut tidak terinstal di mesin percetakan, tata letak akan rusak dan digantikan oleh font standar seperti Arial atau Times New Roman.

---

## 2. Kalibrasi Jarak Antarhuruf Optik (Optical Kerning)

Dalam pembuatan kata logo (*Wordmark*):
- Jangan mengandalkan *Metrics Kerning* otomatis bawaan font generator.
- Pasangan huruf kritis yang memiliki ruang miring bebas (seperti `AV`, `WA`, `To`, `LT`, `Ye`) harus disesuaikan jaraknya secara manual agar luas ruang kosong antarhuruf terlihat seimbang secara optik.
- Karakter bulat (seperti `O`, `C`, `G`) harus melampaui sedikit garis dasar (*Baseline*) dan garis batas atas (*Cap Height*) sebesar $1 - 2\%$ (*Overshoot Rule*) agar tidak tampak lebih kecil daripada huruf persegi seperti `H` atau `E`.

---

## 3. Penyatuan Huruf Sambung (Ligature Welding)

- Pada jenis huruf kaligrafi atau skrip bersambung:
  - Sebelum diekspor, seluruh karakter yang saling bertumpuk harus disatukan menggunakan operasi **Union (Unite)** di panel Pathfinder.
  - Mencegah timbulnya garis potong tersembunyi di dalam badan sambungan huruf saat dipotong oleh mesin cutting plotter stiker.
