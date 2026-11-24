# Modul 01: PDF/A Archival Compliance & Color Standards

Modul ini menetapkan pedoman kepatuhan standar arsip internasional ISO 19005 (PDF/A) untuk menjamin pelestarian jangka panjang dokumen digital.

---

## 1. Varian Standar PDF/A

| Standar ISO | Basis Versi PDF | Fitur Utama | Kasus Penggunaan Ideal |
|---|---|---|---|
| **PDF/A-1b** | PDF 1.4 | Penanaman font dasar, profil ICC, tanpa enkripsi | Arsip dokumen statis warisan |
| **PDF/A-2b** *(Standar Rekomendasi)* | PDF 1.7 | Mendukung kompresi transparansi & JPEG2000 | Kontrak bisnis, laporan finansial, PDF modern |
| **PDF/A-2u** | PDF 1.7 | Level 2b + Pemetaan teks Unicode (ToUnicode) | Dokumen multi-bahasa yang dapat dicari/searchable |
| **PDF/A-3** | PDF 1.7 | Mengizinkan file lampiran format bebas (XML, CSV, CAD) | Faktur elektronik (ZUGFeRD / Factur-X) |

---

## 2. Aturan Ketat PDF/A (Compliance Rules)

1. **Penanaman Font Wajib (Mandatory Font Embedding)**:
   - Semua font (TrueType, OpenType, Type 1) wajib ditanamkan secara penuh (*embedded*) atau dalam subset (*embedded subset*). Dilarang mengandalkan font sistem lokal mesin pengguna.
2. **Ketiadaan Konten Terlarang**:
   - Dilarang menyertakan audio, video, atau eksekusi JavaScript berbahaya di luar fungsi form standar.
   - Dilarang menggunakan enkripsi proteksi sandi (dokumen PDF/A harus dapat dibuka selamanya tanpa ketergantungan kata sandi).
3. **Output Intent & Profil Warna ICC**:
   - Setiap berkas PDF/A wajib menyertakan kamus `OutputIntent` dengan profil warna ICC tertanam (misal: sRGB v4 ICC Profile untuk DeviceRGB, atau Coated FOGRA39 untuk DeviceCMYK).
4. **Metadata XMP Terstruktur**:
   - Metadata `pdfaExtension`, `dc:title`, `dc:creator`, dan tanggal modifikasi harus disimpan dalam stream XML XMP murni yang sinkron dengan kamus `/Info`.
