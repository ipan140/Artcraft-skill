# Modul 04: Format Output Standar AI (Editorial Layout Specification)

Modul ini mendikte bagaimana AI harus memformat dan menyajikan respon ketika merancang tata letak publikasi editorial, spesifikasi geometri grid, dan kode implementasi cetak (CSS Paged Media `@page` / InDesign Script / Typst).

---

## 1. Struktur Respon Wajib AI

Setiap kali AI menyajikan rancangan tata letak publikasi editorial, respon **WAJIB** mengikuti urutan 5 bagian berikut:

1. **Ringkasan Publikasi & Geometri Lembar Kerja**:
   - Sebutkan tipe publikasi (`magazine-editorial`, `book-novel`, dsb.), format halaman (misal A4 Spread: `420 x 297 mm`), orientasi, margin jilid, bleed `3.0 mm`, dan baseline grid `12.0 pt`.
2. **Hierarki Editorial & Penataan Grid**:
   - Struktur jumlah kolom per halaman, pembagian pilar teks vs zona foto hero, dan spesifikasi tipografi lengkap (Kicker, Headline, Dek, Drop Cap, Body, Pull Quote, Folio).
3. **Kode Implementasi Layout Siap Render (CSS Paged Media `@page` atau Typst)**:
   - Sediakan kode utuh lengkap dengan aturan `@page`, `@top-left`, `@bottom-right`, selektor layout kolom, dan kelas utility baseline grid.
   - Kode dilarang menggunakan placeholder penundaan seperti `/* tambahkan teks artikel sendiri... */`. Teks editorial harus realistis.
4. **Detail Separasi Warna CMYK & Pre-Press Notes**:
   - Nilai komposisi tinta CMYK untuk judul, teks tubuh (100% K), latar belakang, dan konfirmasi batas TAC $\le 300\%$.
5. **Checklist Kualitas Pra-Cetak (Pre-Press Checklist)**:
   - Verifikasi kepatuhan teknis sebelum berkas dikirim ke percetakan offset atau diekspor ke format PDF/X.

---

## 2. Template Output Markdown Resmi

Contoh format yang harus diikuti oleh AI:

````markdown
### 📖 Publikasi Editorial: [Judul Artikel / Proyek Majalah]
Tipe: `[Publication Type]` | Format: `[A4 Spread (420 x 297 mm)]` | Baseline Grid: `12.0 pt` | Bleed: `3.0 mm`

#### 1. Spesifikasi Geometri Grid & Margin
| Parameter | Nilai Teknis | Keterangan Fungsi |
| :--- | :--- | :--- |
| Format Bersih (TrimBox) | 210 x 297 mm (per halaman) | A4 Standar Tegak (Portrait) |
| Bleed Area | 3.0 mm di seluruh sisi luar | Mencegah garis putih saat potong pisau |
| Margin Dalam (Gutter) | 25.0 mm | Ruang aman penjilidan jahit kawat/lem |
| Margin Luar / Atas / Bawah | 18.0 mm / 20.0 mm / 25.0 mm | Area pegangan jempol & running folio |
| Grid Kolom | 3 Kolom (Lebar 52mm, Celah 5mm) | Fleksibel untuk variasi span 1, 2, atau 3 kolom |

#### 2. Kode CSS Paged Media `@page` (`spread-layout.html`)
```html
<!DOCTYPE html>
<html lang="id">
<head>
  <style>
    @page {
      size: a4;
      margin: 20mm 18mm 25mm 25mm;
      bleed: 3mm;
      marks: crop cross;
    }
    @page:left {
      margin-left: 18mm;
      margin-right: 25mm;
      @bottom-left { content: counter(page); font-family: sans-serif; font-size: 9pt; }
      @top-left { content: "ARSITEKTUR & DESAIN MODERN"; font-size: 8pt; letter-spacing: 0.1em; }
    }
    @page:right {
      margin-left: 25mm;
      margin-right: 18mm;
      @bottom-right { content: counter(page); font-family: sans-serif; font-size: 9pt; }
      @top-right { content: "EDISI KHUSUS TAHUNAN"; font-size: 8pt; letter-spacing: 0.1em; }
    }
    /* ... kode styling lengkap tanpa pemotongan ... */
  </style>
</head>
<body>
  <!-- Struktur konten artikel lengkap -->
</body>
</html>
```

#### 3. Manajemen Warna Pra-Cetak (Pre-Press CMYK)
- **Teks Tubuh**: `C:0 M:0 Y:0 K:100` (100% Black murni untuk ketajaman baca maksimal).
- **Aksen Judul**: Deep Navy (`C:100 M:80 Y:20 K:30`, TAC: 230% - Aman di bawah 300%).
- **Latar Card**: Warm Grey Tint (`C:0 M:2 Y:4 K:8`).

#### ✅ Checklist Verifikasi Pra-Cetak (Pre-press Quality):
- [x] Baseline grid 12pt terkunci sempurna lintas 3 kolom
- [x] Bleed 3mm aktif pada seluruh gambar yang menyentuh pinggir kertas
- [x] Margin dalam (gutter) 25mm mengantisipasi lipatan jilid
- [x] Teks tubuh bebas dari warna 4-pelat (100% K murni)
- [x] Zero Widows & Orphans (tidak ada kata tunggal di akhir paragraf)
````

---

## 3. Larangan Khusus untuk AI
- **Dilarang Menghilangkan Nilai Numerik Geometri**: Selalu sebutkan ukuran dalam milimeter (`mm`) atau poin (`pt`).
- **Dilarang Menggunakan Warna RGB untuk Output Cetak Offset**: Gunakan formulasi CMYK atau Pantone PMS.
- **Dilarang Mengabaikan `config.md`**: Selalu baca preferensi ukuran kertas dan jumlah kolom yang diset pengguna.
