# Modul 08: Standar Ekspor & Format Presentasi (Export & Delivery Formats)

Modul ini menetapkan format berkas keluaran (*Marp Markdown, HTML Slides, PDF Vektor 16:9, PowerPoint PPTX*), integrasi visual, dan standarisasi cetak dokumen rapat.

---

## 1. Format Marp Markdown (Standar Presenter Otomatis)

Marp adalah format markdown presentasi paling populer untuk pengembang software. Dokumen diawali dengan frontmatter Marp standar:

```markdown
---
marp: true
theme: default
size: 16:9
paginate: true
backgroundColor: #0f172a
color: #f8fafc
style: |
  section {
    font-family: 'Inter', sans-serif;
    padding: 60px 80px;
  }
  h1 {
    color: #60a5fa;
    font-size: 2.2rem;
    margin-bottom: 30px;
  }
  .grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
  .card {
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: 12px;
    padding: 24px;
  }
---

<!-- _class: lead -->
# Judul Presentasi Eksekutif
Sub-judul atau nama presenter di sini

---

# Action Title: Pertumbuhan ARR Q3 Melonjak 142%

<div class="grid-3">
  <div class="card">
    <h2>$2.9M</h2>
    <p>Pendapatan Tahunan Berulang</p>
  </div>
  <div class="card">
    <h2>128%</h2>
    <p>Net Revenue Retention</p>
  </div>
  <div class="card">
    <h2>5 Bulan</h2>
    <p>Payback Period Modal</p>
  </div>
</div>

<!--
Speaker Notes:
Bapak dan Ibu, perhatikan tiga metrik kunci di slide ini...
-->
```

---

## 2. Format HTML / CSS Tailwind Container (Web-Based Decks)
- Slide dapat disajikan dalam bentuk komponen React/HTML yang menggunakan kontainer berukuran rasio tetap `aspect-video w-full max-w-6xl rounded-2xl overflow-hidden`.
- Mendukung navigasi keyboard: panah kanan (`ArrowRight`) untuk maju dan panah kiri (`ArrowLeft`) untuk mundur.

---

## 3. Ekspor PDF Vektor (16:9 Print & Board Memos)
- Wajib menggunakan resolusi vector rendering (300 DPI) agar teks dan angka tajam saat dicetak dalam format landscape A4/Letter untuk bahan bacaan anggota dewan direksi (*leave-behind board packets*).
