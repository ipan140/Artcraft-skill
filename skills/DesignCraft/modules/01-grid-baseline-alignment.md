# Modul 01: Sistem Grid & Perataan Garis Dasar (Baseline Grid Alignment)

Modul ini menetapkan matematika perataan tata letak cetak: pengaturan baseline grid (misal `12 pt` atau `14 pt`), hubungan harmonis ukuran font dengan leading, serta penguncian baris teks lintas kolom (*snap to baseline grid*).

---

## 1. Konsep & Matematika Baseline Grid

Baseline grid adalah serangkaian garis horizontal tak terlihat yang membentang di seluruh halaman dokumen dengan interval vertikal konstan (biasanya bernilai sama dengan nilai leading teks isi):

$$\text{Baseline Interval} = \text{Leading Body Text} = 12\ \text{pt}\ (4.233\ \text{mm})$$

### Prinsip Harmoni Vertikal (Leading Multiplication Rule)
Semua elemen vertikal (spasi antar paragraf, tinggi judul, margin atas/bawah, jarak gambar) **wajib merupakan kelipatan bulat dari nilai baseline grid**:

- **Teks Tubuh (Body Text)**: Ukuran font `9.5 pt`, Leading `12 pt` $\rightarrow$ Menempati tepat 1 unit baseline grid per baris.
- **Sub-judul (H2)**: Ukuran font `14 pt`, Leading `24 pt` $\rightarrow$ Menempati tepat 2 unit baseline grid.
- **Judul Bagian (H1)**: Ukuran font `21 pt`, Leading `36 pt` $\rightarrow$ Menempati tepat 3 unit baseline grid.
- **Spasi Paragraf / Header Offset**: Wajib bernilai kelipatan `12 pt` (misal spasi sebelum judul: `24 pt`).

---

## 2. Penguncian Garis Dasar Lintas Kolom (Cross-Column Alignment)

Dalam tata letak majalah 3 kolom atau buku berdampingan, **garis dasar huruf di kolom 1 harus sejajar horizontal sempurna dengan garis dasar huruf di kolom 2 dan kolom 3**:

```text
Kolom 1:                               Kolom 2:                               Kolom 3:
Arsitektur modern mengutamakan         Material ramah lingkungan kini         Integrasi teknologi pintar
fungsi di atas sekadar ornamen. ────── menjadi standar wajib seluruh ──────── memungkinkan efisiensi
Ruang publik dirancang adaptif.        proyek perkotaan masa kini.            energi hingga titik nol.
```

Jika teks tidak terkunci ke baseline grid, pembaca akan merasakan halaman berantakan dan tidak profesional secara visual (*visual vibration*).

---

## 3. Penataan Spasi Kotak Gambar & Pull Quotes
- Setiap kotak gambar (*image box*), kutipan melayang (*pull quote*), atau kotak tabel data harus memiliki tinggi total yang **merupakan kelipatan pas dari unit baseline**.
- Teks yang berada tepat di bawah kotak gambar akan otomatis kembali mendarat tepat di atas garis baseline grid tanpa jeda aneh.
