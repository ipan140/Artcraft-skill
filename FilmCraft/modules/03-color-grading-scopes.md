# Modul 03: Koreksi Warna & Alat Ukur Scopes (Color Grading & Scopes)

Modul ini menetapkan metodologi koreksi warna primer (*primary balance*), pembacaan alat ukur profesional (Waveform, RGB Parade, Vectorscope Skin Tone Line 10:30), penyelarasan shot (*shot matching*), dan penciptaan gaya visual sinematik (*creative look*).

---

## 1. Alat Ukur Warna Wajib (The Four Video Scopes)

Jangan pernah mengandalkan mata telanjang atau layar monitor yang belum dikalibrasi. Gunakan alat ukur matematis:

1. **Waveform Monitor (Luma / Y)**:
   - Mengukur kecerahan cahaya dari hitam mutlak (`0 IRE / 0%`) hingga putih maksimal (`100 IRE / 100%`).
   - *Batas Shadow*: Titik hitam tergelap (*crushed black*) dijaga pada kisaran `0 s/d 5 IRE`.
   - *Batas Highlight*: Titik putih terpancar dijaga di bawah `100 IRE` (untuk SDR Rec.709) agar tidak terpotong kliping (*blown out*).
2. **RGB Parade**:
   - Memisahkan saluran Merah, Hijau, dan Biru berdampingan secara horizontal.
   - Digunakan untuk **Neutral White Balance**: Jika tembok putih di rekaman tampak kekuningan, kolom Merah dan Hijau akan tampak lebih tinggi dari Biru. Sesuaikan gain hingga ketiga puncak RGB sejajar rata pada garis horizontal yang sama.
3. **Vectorscope (Hue & Saturation)**:
   - Roda lingkaran 360° yang mengukur rona warna (*hue*) dan kepekatan saturasi.
   - Kotak target penanda: Red, Magenta, Blue, Cyan, Green, Yellow.
   - Titik pusat lingkaran menunjukkan warna netral tanpa saturasi (abu-abu/putih/hitam).

---

## 2. Garis Ajaib Rona Kulit (The 10:30 Skin Tone Line)

Terlepas dari etnis, ras, atau warna kulit manusia (kulit terang, sawo matang, atau gelap), **pigmen darah di bawah kulit manusia memancarkan rona warna yang persis sama pada vectorscope**:

```text
                           [Red Target]
                                ▲
                               │     / [SKIN TONE LINE: Sudut Jam 10:30]
                               │    /  (Wajib dilewati oleh piksel kulit wajah)
           [Magenta Target] ───┼───/─── [Yellow Target]
                               │  /
                               │ /
                               ▼
```

- **Prosedur Penguncian**:
  - Buat seleksi masker melingkar (*qualifier/power window*) yang hanya menutupi area pipi atau dahi aktor.
  - Periksa Vectorscope: Jejak piksel kulit **wajib jatuh tepat di sepanjang garis garis jam 10:30**.
  - Jika piksel melenceng ke arah kuning $\rightarrow$ kulit tampak pucat/sakit liver.
  - Jika piksel melenceng ke arah magenta $\rightarrow$ kulit tampak terbakar matahari/merah abnormal.

---

## 3. Alur Tiga Tahap Color Grading (The 3-Step Grade)
1. **Langkah 1: Normalisasi / Technical Conversion**: Mengonversi rekaman Log mentah kamera (ARRI LogC, Sony S-Log3, Canon C-Log) ke ruang display standar Rec.709 menggunakan CST (Color Space Transform).
2. **Langkah 2: Primary Balance & Shot Matching**: Menyamakan exposure, contrast pivot, dan white balance agar semua klip dalam satu adegan terasa direkam pada waktu dan pencahayaan yang sama.
3. **Langkah 3: Creative Look (Look Development)**: Penerapan palet warna artistik (seperti kontras komplementer *Teal & Orange*, tampilan film seluloid Kodak 2383 print emulation, atau desaturasi thriller).
