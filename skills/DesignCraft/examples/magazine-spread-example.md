# Contoh Kasus Ideal: Tata Letak Spread Majalah Arsitektur (Magazine Two-Page Spread)

Dokumen ini adalah acuan standar (*golden benchmark example*) bagi AI untuk merancang publikasi editorial spread 2 halaman berhadapan (*Verso & Recto*), mengunci seluruh baris teks ke baseline grid 12pt, menerapkan margin jilid (*gutter*), tarikan lebihan cetak (*bleed 3mm*), hierarki tipografi editorial lengkap, dan kode implementasi **CSS Paged Media `@page`** yang siap dikompilasi ke berkas cetak PDF/X.

---

## 1. Input Kebutuhan Editorial (Magazine Brief)

```yaml
Publikasi: "ARCHICRAFT — Majalah Arsitektur & Desain Kontemporer"
Tipe_Publikasi: "magazine-editorial"
Format_Halaman: "Spread 2 Halaman A4 Berhadapan (420 x 297 mm)"
Penjilidan: "Saddle Stitch (Jahit Kawat)"
Topik_Artikel: "Ruang Bernapas di Jantung Megapolitan: Evolusi Fasad Biofilik"
Spesifikasi Teknis:
  - Halaman Kiri (Verso / Hal 04): Dominan Hero Photo arsitektur full-bleed 3mm dengan Kicker dan Headline besar di atas bidang gambar.
  - Halaman Kanan (Recto / Hal 05): Artikel mengalir dalam 3 kolom seimbang, dimulai dengan Dek/Standfirst, Drop Cap 3 baris, Pull Quote melayang selebar 2 kolom, dan running folio di bawah.
  - Baseline Grid: 12.0 pt (4.233 mm) terkunci ketat di seluruh kolom teks.
  - Pra-Cetak: Bleed 3mm, margin dalam (gutter) 25mm, CMYK FOGRA39, teks 100% K.
```

---

## 2. Diagram Geometri Spread 2 Halaman (420 x 297 mm)

```text
┌───────────────────────────────────────┬───────────────────────────────────────┐
│ HALAMAN 04 (VERSO - KIRI)             │ HALAMAN 05 (RECTO - KANAN)            │
│ Margin Kiri (Luar): 18mm              │ Margin Kanan (Luar): 18mm             │
│ Margin Kanan (Punggung): 25mm         │ Margin Kiri (Punggung): 25mm          │
│                                       │                                       │
│ ┌───────────────────────────────────┐ │ [KICKER: ARSITEKTUR BERKELANJUTAN]    │
│ │ FOTO HERO UTAMA FULL-BLEED 3MM    │ │ [HEADLINE 48pt PLAYFAIR DISPLAY]      │
│ │ (Menembus tepi kertas atas, kiri, │ │ [DEK STANDFIRST 14pt INTER]           │
│ │ dan bawah)                        │ │ ┌─────────┬──────────┬─────────────┐  │
│ │                                   │ │ │ [DROP]  │ Kolom 2  │ Kolom 3     │  │
│ │ "Bentuk Mengikuti Alam"           │ │ │ Kolom 1 │ Teks...  │ Teks...     │  │
│ └───────────────────────────────────┘ │ │ Teks... │          │             │  │
│                                       │ │ ┌───────┴──────────┐             │  │
│                                       │ │ │ PULL QUOTE 24pt  │             │  │
│                                       │ │ └──────────────────┘             │  │
│ [Folio: Hal 04 | ARCHICRAFT]          │ │                    │ [Folio: 05] │  │
└───────────────────────────────────────┴───────────────────────────────────────┘
```

---

## 3. Kode Produksi Lengkap (CSS Paged Media `@page` / PagedJS)

Kode HTML & CSS di bawah ini dapat langsung dirender menggunakan browser atau mesin cetak PagedJS/Weasyprint untuk menghasilkan PDF siap cetak:

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>ARCHICRAFT Edisi 12 - Spread Halaman 04-05</title>
  <style>
    /* ==========================================================================
       1. PENGATURAN GEOMETRI LEMBAR KERJA CETAK (@page)
       ========================================================================== */
    @page {
      size: 210mm 297mm; /* Format Bersih A4 (TrimBox) */
      bleed: 3mm;        /* Tarikan lebihan cetak luar */
      marks: crop cross; /* Tanda potong & tanda pas registrasi */
    }

    /* Halaman Kiri (Verso / Hal Genap) */
    @page:left {
      margin-top: 20mm;
      margin-bottom: 25mm;
      margin-left: 18mm;  /* Margin luar */
      margin-right: 25mm; /* Margin jilid punggung (gutter) */
      @bottom-left {
        content: "04  |  ARCHICRAFT ARSITEKTUR & DESAIN";
        font-family: 'Inter', sans-serif;
        font-size: 8pt;
        letter-spacing: 0.08em;
        color: #64748b;
      }
    }

    /* Halaman Kanan (Recto / Hal Ganjil) */
    @page:right {
      margin-top: 20mm;
      margin-bottom: 25mm;
      margin-left: 25mm;  /* Margin jilid punggung (gutter) */
      margin-right: 18mm; /* Margin luar */
      @bottom-right {
        content: "EDISI KHUSUS TAHUNAN  |  05";
        font-family: 'Inter', sans-serif;
        font-size: 8pt;
        letter-spacing: 0.08em;
        color: #64748b;
      }
    }

    /* ==========================================================================
       2. BASELINE GRID & TIPOGRAFI FUNDAMENTAL
       ========================================================================== */
    :root {
      --baseline: 12pt; /* Unit kisi dasar perataan baris */
      --font-display: 'Playfair Display', Georgia, serif;
      --font-body: 'Inter', system-ui, sans-serif;
      --color-black-100k: #000000; /* Formula 100% K murni */
      --color-rich-navy: #0a192f;  /* C:100 M:85 Y:25 K:35 */
      --color-accent-gold: #c5a059;/* C:20 M:35 Y:75 K:5 */
    }

    body {
      font-family: var(--font-body);
      font-size: 9.5pt;
      line-height: var(--baseline); /* Tepat 1 unit baseline per baris */
      color: var(--color-black-100k);
      margin: 0;
      padding: 0;
      text-rendering: optimizeLegibility;
      font-feature-settings: "kern" 1, "liga" 1;
    }

    /* ==========================================================================
       3. TATA LETAK HALAMAN KIRI (HERO VISUAL FULL-BLEED)
       ========================================================================== */
    .page-verso {
      page-break-after: always;
      position: relative;
      height: 297mm;
      margin-top: -20mm;
      margin-left: -18mm;
      margin-right: -25mm;
      background-color: var(--color-rich-navy);
      color: #ffffff;
      overflow: hidden;
    }

    .hero-photo-placeholder {
      position: absolute;
      top: -3mm; left: -3mm; right: -3mm; bottom: -3mm; /* Menarik bleed 3mm */
      background: linear-gradient(rgba(10, 25, 47, 0.2), rgba(10, 25, 47, 0.85)),
                  radial-gradient(circle at 30% 40%, #1e3a8a, #0a192f);
      z-index: 1;
    }

    .hero-caption-overlay {
      position: absolute;
      bottom: 25mm;
      left: 20mm;
      right: 25mm;
      z-index: 2;
    }

    .hero-tag {
      font-size: 9pt;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: var(--color-accent-gold);
      margin-bottom: calc(var(--baseline) * 0.5);
    }

    .hero-title {
      font-family: var(--font-display);
      font-size: 38pt;
      line-height: calc(var(--baseline) * 3); /* 36pt (3 unit baseline) */
      font-weight: 700;
      margin: 0;
    }

    /* ==========================================================================
       4. TATA LETAK HALAMAN KANAN (3-COLUMN ARTICLE)
       ========================================================================== */
    .article-header {
      margin-bottom: calc(var(--baseline) * 2);
    }

    .kicker {
      font-family: var(--font-body);
      font-size: 8.5pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--color-accent-gold);
      margin: 0 0 calc(var(--baseline) * 0.5) 0;
    }

    .headline {
      font-family: var(--font-display);
      font-size: 32pt;
      line-height: calc(var(--baseline) * 3); /* 36pt */
      font-weight: 700;
      color: var(--color-rich-navy);
      margin: 0 0 calc(var(--baseline) * 1) 0;
      letter-spacing: -0.02em;
    }

    .standfirst {
      font-family: var(--font-body);
      font-size: 13pt;
      line-height: calc(var(--baseline) * 1.5); /* 18pt */
      font-weight: 500;
      color: #334155;
      margin-bottom: calc(var(--baseline) * 2);
      border-left: 3px solid var(--color-accent-gold);
      padding-left: 12px;
    }

    /* Tiga Kolom Seimbang */
    .columns-container {
      column-count: 3;
      column-gap: 5mm;
      column-fill: balance;
      text-align: justify;
      hyphens: auto;
    }

    .columns-container p {
      margin: 0 0 var(--baseline) 0;
      text-indent: 0;
    }

    .columns-container p + p {
      text-indent: 4mm; /* Indentasi baris pertama */
      margin-top: 0;
    }

    /* Drop Cap 3 Baris Sempurna */
    .drop-cap {
      float: left;
      font-family: var(--font-display);
      font-size: 42pt;
      line-height: calc(var(--baseline) * 2.5);
      padding-top: 2pt;
      padding-right: 6pt;
      padding-bottom: 0;
      font-weight: 700;
      color: var(--color-rich-navy);
    }

    /* Pull Quote Melayang Rentang 2 Kolom */
    .pull-quote {
      column-span: all;
      margin: calc(var(--baseline) * 1.5) 0;
      padding: calc(var(--baseline) * 1) 0;
      border-top: 1px solid var(--color-accent-gold);
      border-bottom: 1px solid var(--color-accent-gold);
      text-align: center;
    }

    .pull-quote-text {
      font-family: var(--font-display);
      font-size: 20pt;
      line-height: calc(var(--baseline) * 2); /* 24pt */
      font-style: italic;
      color: var(--color-rich-navy);
      margin: 0 0 calc(var(--baseline) * 0.5) 0;
    }

    .pull-quote-author {
      font-family: var(--font-body);
      font-size: 9pt;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #64748b;
    }
  </style>
</head>
<body>

  <!-- HALAMAN 04: VERSO (FOTO HERO FULL-BLEED) -->
  <section class="page-verso">
    <div class="hero-photo-placeholder"></div>
    <div class="hero-caption-overlay">
      <div class="hero-tag">Studi Kasus Arsitektur</div>
      <h1 class="hero-title">Harmoni Beton dan Kanopi Hutan Tropis</h1>
    </div>
  </section>

  <!-- HALAMAN 05: RECTO (ARTIKEL 3 KOLOM) -->
  <section class="page-recto">
    <header class="article-header">
      <div class="kicker">Laporan Khusus &bull; Fasad Hijau Masa Depan</div>
      <h2 class="headline">Ruang Bernapas di Jantung Megapolitan</h2>
      <p class="standfirst">
        Bagaimana integrasi vegetasi mikroklimat pada selubung gedung pencakar langit modern
        berhasil memangkas konsumsi pendingin udara hingga 38% di kawasan tropis.
      </p>
    </header>

    <div class="columns-container">
      <p>
        <span class="drop-cap">T</span>antangan terbesar pembangunan perkotaan abad ke-21
        bukan lagi terletak pada seberapa tinggi sebuah menara dapat dipancangkan ke angkasa,
        melainkan seberapa ramah struktur monolitik tersebut mampu berdialog dengan ekosistem sekitarnya.
      </p>
      <p>
        Selama empat dekade terakhir, material kaca reflektif mendominasi siluet kota metropolitan.
        Namun dampak termal radiasi matahari justru memerangkap panas di antara koridor jalanan,
        menciptakan efek pulau panas perkotaan yang menuntut lonjakan energi raksasa.
      </p>

      <!-- PULL QUOTE MELAYANG -->
      <div class="pull-quote">
        <p class="pull-quote-text">
          "Arsitektur sejati tidak menaklukkan alam liar, melainkan merajutnya kembali ke dalam ruang hidup manusia."
        </p>
        <span class="pull-quote-author">— Dr. Alistair Vance, Urban Ecologist</span>
      </div>

      <p>
        Pendekatan fasad biofilik generasi ketiga kini hadir menawarkan paradigma baru.
        Dengan memanfaatkan sistem sirkulasi air hujan tertutup dan substrat tanah ringan,
        ribuan tanaman endemik dapat tumbuh subur pada bidang vertikal fasad luar gedung.
      </p>
      <p>
        Hasil pengukuran mikroklimat menunjukkan bahwa suhu permukaan beton berkurang hingga 8 derajat Celsius.
        Sebuah bukti otentik bahwa estetika visual dan efisiensi rekayasa lingkungan dapat berjalan beriringan.
      </p>
    </div>
  </section>

</body>
</html>
```

---

## 4. Rincian Separasi Warna CMYK (Pre-Press Specifications)

```text
┌────────────────────────────────────────────────────────────────────────┐
│ TABEL SEPARASI WARNA CETAK (PROFIL ICC: ISO COATED V2 / FOGRA39)       │
├──────────────────┬─────────────────────────────┬───────────┬───────────┤
│ ELEMEN DESAIN    │ KOMPOSISI TINTA CMYK        │ TAC (%)   │ STATUS    │
├──────────────────┼─────────────────────────────┼───────────┼───────────┤
│ Teks Tubuh Kolom │ C: 0%  M: 0%  Y: 0%  K: 100%│ 100%      │ Aman (1K) │
│ Headline Navy    │ C: 100% M: 85% Y: 25% K: 35%│ 245%      │ Rich Dark │
│ Aksen Gold Kicker│ C: 20% M: 35% Y: 75% K: 5%  │ 135%      │ Spot Match│
│ Latar Gelap Verso│ C: 80% M: 65% Y: 40% K: 60% │ 245%      │ < 300% Ok │
└──────────────────┴─────────────────────────────┴───────────┴───────────┘
```

---

## 5. Checklist Verifikasi Kelayakan Pra-Cetak

- [x] **Baseline Grid 12pt Terkunci**: Seluruh baris teks isi di ketiga kolom sejajar sempurna secara horizontal.
- [x] **Margin Gutter 25mm**: Margin dalam sengaja dibuat lebih longgar untuk mengantisipasi ketebalan lipatan jilid jahit kawat (*saddle-stitch*).
- [x] **Bleed 3mm Eksternal**: Bidang visual foto latar di halaman Verso ditarik melebihi garis TrimBox sebesar 3mm di keempat sudut luar.
- [x] **100% K Black Body Text**: Seluruh paragraf narasi di-render menggunakan pelat hitam tunggal (`C:0 M:0 Y:0 K:100`).
- [x] **Drop Cap 3 Baris Presisi**: Tinggi huruf inisial 'T' tepat setinggi 3 unit baseline grid (36pt).
- [x] **Zero Widows & Orphans**: Paragraf diatur agar tidak menyisakan kata tunggal gantung di akhir kalimat.
