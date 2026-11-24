# Modul 01: Hirarki Visual & Tata Letak Slide (Visual Hierarchy & Layout 16:9)

Modul ini menetapkan prinsip penataan kanvas widescreen 16:9 (resolusi acuan `1920x1080 px`), pemanfaatan ruang kosong (*negative space*), sistem grid kolom, dan uji kecepatan pemahaman 3 detik (*the 3-second rule*).

---

## 1. Aturan Emas 3 Detik (The 3-Second Cognitive Rule)

Slide presentasi yang efektif dirancang bukan untuk dibaca seperti dokumen buku, melainkan untuk dipahami secara visual dalam 3 detik:

```text
Detik ke-1: Mata membaca Action Title di sudut kiri atas (Menangkap pesan inti)
Detik ke-2: Mata tertuju pada Angka Metrik Terbesar atau Diagram Pusat
Detik ke-3: Mata memindai 2-3 poin penjelas ringkas di bawahnya
```

Jika audiens membutuhkan waktu lebih dari 3 detik untuk menemukan poin utama slide, maka slide tersebut **terlalu rumit dan wajib dipecah**.

---

## 2. Struktur Kanvas Widescreen 16:9 (1920 x 1080 px)

Bagi kanvas slide menjadi 3 zona fungsional vertikal:

```text
┌────────────────────────────────────────────────────────────────────────┐
│ [ZONA 1: HEADER & ACTION TITLE] (Tinggi: 180px, Margin Kiri: 120px)    │
│ Judul Kalimat Aktif Berisi Kesimpulan Utama Slide                      │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│ [ZONA 2: BODY & VISUAL CANVAS] (Tinggi: 740px)                         │
│ - Grid 2 Kolom (50% / 50%): Teks Argumen vs Visual Grafik              │
│ - Grid 3 Kolom (33% / 33% / 33%): Tiga Pilar Solusi / Fitur            │
│ - Grid 4 Kolom (25% per kartu): Empat Metrik Kunci                     │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│ [ZONA 3: FOOTER & METADATA] (Tinggi: 80px)                             │
│ Nama Presentasi / Kerahasiaan              Nomor Halaman / Slide No    │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Sistem Kolom Baku (Standard Layout Grids)

1. **Layout 3 Pilar Solusi (Three-Column Pillars)**:
   - Lebar per kolom: `500px` dengan `gap: 40px` di antara kolom.
   - Setiap pilar memuat: Ikon/Nomor urut besar di atas $\rightarrow$ Sub-heading tebal $\rightarrow$ 1-2 baris kalimat penjelas.
2. **Layout Split 50/50 (Hero Stat vs Penjelasan)**:
   - Sisi Kiri: Angka metrik raksasa (misal: `+142%`) dengan badge tren hijau.
   - Sisi Kanan: Penjelasan 2 pemicu utama di balik pertumbuhan tersebut.
3. **Pemanfaatan Ruang Kosong (White Space)**:
   - Jangan pernah mengisi seluruh sudut layar dengan teks. Minimal 40% area kanvas harus dibiarkan kosong agar mata audiens tidak lelah (*visual fatigue*).
