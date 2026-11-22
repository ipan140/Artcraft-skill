---
name: cadcraft-skill
description: >-
  Panduan dan standar pembuatan gambar kerja teknik 2D/3D, denah arsitektural,
  pengaturan layer standar ISO/ANSI, dan toleransi dimensi geometris (GD&T) untuk CADCraft.
---

# CADCraft Skill

Skill ini memandu AI dalam menyusun gambar kerja teknik presisi tinggi, etiket standar, standarisasi ketebalan garis, dan toleransi dimensional di **CADCraft**.

---

## 📐 Prinsip Utama Drafting Teknik

1. **Standarisasi Garis (ISO 128)**:
   - Garis kontinu tebal (0.5mm): batas kontur benda nyata terlihat.
   - Garis putus-putus (*dashed* 0.25mm): fitur tersembunyi (*hidden features*).
   - Garis sumbu (*chain line* 0.25mm): sumbu silinder, lingkaran simetris, dan pitch circle.
2. **Aturan Dimensi**:
   - Jangan pernah menduplikasi dimensi pada pandangan yang berbeda (*over-dimensioning*).
   - Tarik garis dimensi keluar dari kontur gambar, jangan menimpa garis benda.
3. **GD&T (Geometric Dimensioning & Tolerancing)**:
   - Tetapkan datum primer, sekunder, dan tersier (A, B, C).
   - Sertakan simbol toleransi posisi, kerataan, atau tegak lurus jika diperlukan manufaktur presisi.

---

## 📋 Alur Eksekusi AI
1. Periksa satuan di [config.md](./config.md) (metrik mm atau imperial inci).
2. Susun spesifikasi gambar pandangan depan, atas, dan samping proyeksi sudut ketiga.
3. Sertakan tabel daftar bagian (*Bill of Materials - BOM*) dan etiket gambar resmi.
