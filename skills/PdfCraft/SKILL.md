---
name: pdfcraft-skill
description: >-
  Arsitektur master pemrosesan dokumen PDF korporat, kepatuhan arsip PDF/A-2b,
  pembuatan formulir interaktif AcroForm dengan validasi JavaScript, redaksi permanen
  sanitasi metadata rahasia, dan enkripsi kriptografis AES-256.
---

# PdfCraft Skill: Master PDF Engineering Suite

Skill ini memandu AI untuk bertindak sebagai **Lead Document Systems Engineer & Legal Technologist**, merancang, memvalidasi, mengamankan, dan mengotomasi generasi dokumen PDF yang patuh standar ISO internasional (ISO 32000-1, ISO 19005-2 PDF/A-2b, PAdES).

---

## 🔄 Alur Eksekusi PdfCraft (Flowchart)

```mermaid
flowchart TD
    A[Terima Permintaan Dokumen PDF] --> B[Baca config.md & Pilih Target Profil]
    B --> C{Evaluasi Profil Dokumen}
    C -->|Kontrak Legal/NDA| D1[Baca documents/legal-contracts.md]
    C -->|Formulir Interaktif| D2[Baca documents/interactive-forms.md]
    C -->|Laporan Teknis/Manual| D3[Baca documents/technical-reports.md]
    C -->|Pipeline Kustom| D4[Baca documents/custom-document.md]
    
    D1 & D2 & D3 & D4 --> E[Kepatuhan PDF/A & Font Embedding: Modul 01]
    E --> F[Struktur AcroForm & Script Validasi: Modul 02]
    F --> G[Pohon Bookmarks Outlines & PageLabels: Modul 03]
    G --> H[Protokol Redaksi Sejati & Sanitasi XMP: Modul 05]
    H --> I[Enkripsi AES-256 & Tanda Tangan PAdES: Modul 06]
    I --> J[Kompresi & Eksekusi Skrip PyMuPDF: Modul 04, 07, 08]
    J --> K[Validasi Checklist Kepatuhan & Terbitkan Dokumen]
```

---

## ⚡ 5 Prioritas Eksekusi AI

1. **Kepatuhan Arsip Abadi (PDF/A-2b Standard)**:
   Semua font harus ditanamkan penuh atau subset (`embedded`), profil warna ICC (`OutputIntent`) wajib disertakan, dan dilarang mengandalkan referensi font eksternal.
2. **Formulir AcroForm Siap Render**:
   Setiap widget field input (`TextField`, `CheckBox`, `SignatureField`) harus memiliki nama variabel yang jelas, koordinat bounding box persegi panjang (`Rect`) yang presisi, dan *Normal Appearance Stream* (`/AP`) yang lengkap.
3. **Redaksi Sejati Geometris (Zero Leakage)**:
   Saat melakukan redaksi informasi rahasia, teks dan operator visual wajib dihapus secara fisik dari stream internal PDF (`apply_redactions()`). Dilarang menggunakan kotak hitam semu di atas teks aktif.
4. **Navigasi Bookmark & PageLabels Terpadu**:
   Setiap dokumen di atas 3 halaman wajib memiliki pohon outline bookmark yang mencerminkan daftar isi logis dan kamus `/PageLabels` untuk menyelaraskan nomor Romawi dan desimal.
5. **Skrip Automasi Python Mandiri**:
   Sediakan kode PyMuPDF (`fitz`) atau ReportLab lengkap yang dapat langsung dieksekusi secara mandiri untuk memproduksi atau memproses berkas PDF tanpa ketergantungan modul eksternal yang tidak terdokumentasi.

---

## 📂 Peta Struktur File PdfCraft

| Direktori / File | Fungsi & Peran |
|---|---|
| [`config.md`](file:///c:/Users/Visitor/Downloads/Artcraft-skill-app/PdfCraft/config.md) | Panel kendali utama: saklar profil dokumen, standar arsip PDF/A, enkripsi AES-256, dan saklar modul. |
| [`documents/`](file:///c:/Users/Visitor/Downloads/Artcraft-skill-app/PdfCraft/documents/) | Direktori profil dokumen: kontrak hukum, form interaktif, laporan teknis, dan pipeline kustom. |
| [`modules/`](file:///c:/Users/Visitor/Downloads/Artcraft-skill-app/PdfCraft/modules/) | 8 modul teknis: kepatuhan PDF/A, AcroForms, bookmarks, output format, redaksi sejati, keamanan AES, optimasi, dan tooling. |
| [`examples/`](file:///c:/Users/Visitor/Downloads/Artcraft-skill-app/PdfCraft/examples/) | Golden benchmark: dokumen kontrak pengadaan cloud enterprise dengan AcroForm dan skrip PyMuPDF lengkap. |

---

## 🚫 Larangan Khusus untuk AI (Strict Prohibitions)

1. **DILARANG Melakukan Redaksi Semu**: Menutupi teks rahasia hanya dengan kotak hitam tanpa menghapus string teks dari stream konten halaman dilarang keras karena membahayakan kerahasiaan data.
2. **DILARANG Mengandalkan Font Sistem Lokal**: Dokumen tidak boleh dirilis tanpa menanamkan file font ke dalam berkas PDF.
3. **DILARANG Mengabaikan Kamus Appearance State**: Dilarang hanya menyetel `/NeedAppearances true` tanpa membangun stream tampilan `/AP` resmi untuk widget formulir interaktif.
4. **DILARANG Menghasilkan Skrip Placeholder**: Kode generator PyMuPDF harus lengkap dari pembuatan halaman, teks, field widget, outline, hingga penyimpanan dengan opsi kompresi dan sanitasi metadata.
