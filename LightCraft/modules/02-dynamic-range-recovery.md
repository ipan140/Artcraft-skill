# Modul 02: Pemulihan Rentang Dinamis (Dynamic Range Recovery)

Modul ini menetapkan teknik pemulihan detail pada area terang terbakar (*Highlights Recovery*), pembukaan area bayangan gelap (*Shadows Lifting*), serta penetapan titik kontras tepi (*Whites & Blacks Clipping Points*).

---

## 1. Kuartet Slider Rentang Dinamis (The 4 Dynamic Range Sliders)

Dalam panel Basic Lightroom/Capture One, keempat slider ini memanipulasi zona kecerahan yang berbeda secara non-destruktif:

```text
       [Blacks]        [Shadows]        [Highlights]        [Whites]
          │                │                 │                 │
          ▼                ▼                 ▼                 ▼
   Titik Hitam      Buka Detail Gelap  Penyelamatan Awan  Titik Putih
   Paling Bawah     Baju & Pepohonan   & Kilap Wajah      Paling Terang
```

---

## 2. Prosedur Pemulihan Bertahap (Step-by-Step Recovery)

1. **Highlights Recovery (Zona 70% - 95%)**:
   - Tarik slider Highlights ke kiri (`-40 s/d -100`).
   - Karena sensor RAW menyimpan informasi ekstra 1 hingga 2 stop di atas batas putih visual, menarik Highlights akan memunculkan kembali gumpalan tekstur awan dan gradasi warna langit tanpa membuat foto menjadi kusam.
2. **Shadows Opening (Zona 5% - 30%)**:
   - Naikkan slider Shadows ke kanan (`+20 s/d +60`).
   - Jangan membuka Shadows hingga `+100` pada rekaman ber-ISO tinggi, karena hal tersebut akan mengekspos bintik noise chroma/luminance pada area gelap.
3. **Penetapan Titik Whites (Alt/Option Key Shortcut)**:
   - Tahan tombol `Alt` (Windows) atau `Option` (macOS) lalu geser slider Whites ke kanan.
   - Layar akan berubah menjadi hitam pekat. Geser Whites hingga beberapa bintik warna putih/merah pertama mulai muncul di layar. Itulah titik putih maksimum tanpa over-clipping.
4. **Penetapan Titik Blacks (Alt/Option Key Shortcut)**:
   - Tahan tombol `Alt` lalu geser slider Blacks ke kiri.
   - Layar akan berubah menjadi putih pekat. Geser Blacks hingga bintik hitam pertama mulai tampak. Hal ini memastikan foto memiliki jangkar kontras hitam pekat (*anchor black*) yang mantap.
