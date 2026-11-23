# Modul 08: Programmatic Generation & Tooling Ecosystem

Modul ini menetapkan panduan integrasi alat pemrograman untuk generasi dokumen otomatis, manipulasi PDF, dan ekstraksi data berbasis kode.

---

## 1. Ekosistem Tooling PDF Rekomendasi

| Library / Tool | Bahasa / Runtime | Kekuatan Utama | Kasus Penggunaan Ideal |
|---|---|---|---|
| **PyMuPDF (`fitz`)** | Python / C (MuPDF) | Kecepatan ekstrem, redaksi sejati, ekstraksi teks & tabel presisi | Audit, sanitasi, redaksi, rendering halaman ke gambar |
| **ReportLab** | Python | Kontrol layout presisi matematika, PDF/A engine, Flowable canvas | Pembuatan faktur korporat, sertifikat, laporan finansial terstruktur |
| **pdf-lib** | JavaScript / TypeScript | Berjalan di Node.js & Browser, modifikasi form, merging halaman | Serverless AWS Lambda form-filling & web apps |
| **WeasyPrint** | Python (HTML/CSS) | Mengubah HTML5 + CSS Paged Media `@page` menjadi PDF berkualitas cetak | Laporan bergaya web dengan tabel dinamis dan CSS modern |

---

## 2. Pola Penulisan PyMuPDF yang Aman & Efisien

```python
import fitz  # PyMuPDF

def secure_and_redact_pdf(input_path: str, output_path: str, sensitive_keyword: str):
    doc = fitz.open(input_path)
    
    for page in doc:
        # 1. Cari koordinat teks sensitif
        text_instances = page.search_for(sensitive_keyword)
        
        # 2. Tandai dan eksekusi redaksi sejati
        for rect in text_instances:
            page.add_redact_annot(rect, fill=(0, 0, 0))  # Isi kotak hitam
            
        # Terapkan redaksi: menghapus teks dari stream konten
        page.apply_redactions()

    # 3. Simpan dengan garbage collection dan kompresi maksimal
    doc.save(
        output_path,
        garbage=4,          # Bersihkan semua objek yatim yang tidak terpakai
        deflate=True,       # Kompresi FlateDecode
        clean=True          # Sanitasi stream internal
    )
    doc.close()
```
