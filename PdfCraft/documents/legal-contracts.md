# Document Profile: Legal Contracts & Agreements

Profil ini menetapkan aturan pembuatan dan manipulasi dokumen hukum (Master Service Agreement, Non-Disclosure Agreement, Kontrak Kerja, Akta Perjanjian) yang menuntut keabsahan hukum, integritas halaman, penandaan nomor halaman beruntun (*Bates Stamping*), dan blok tanda tangan digital.

---

## 1. Spesifikasi Teknis Dokumen Hukum

- **Standar PDF**: PDF/A-2b atau PDF/A-3 (ISO 19005-2/3) untuk memastikan dokumen tetap terbaca identik dalam 50+ tahun ke depan.
- **Ukuran Kertas**: A4 ($210 \times 297\text{ mm}$) atau US Letter ($8.5 \times 11\text{ inci}$).
- **Margin Standar**:
  - Atas / Bawah: $25\text{ mm}$
  - Luar: $20\text{ mm}$
  - Dalam (Binding / Gutter): $30\text{ mm}$ (ruang untuk jilid/staples)
- **Tipografi Hukum**:
  - Font primer: Serif berlisensi bersih (misal: *Liberation Serif*, *Times New Roman*, atau *Merriweather*).
  - Ukuran teks tubuh: $10.5\text{ pt} - 11.5\text{ pt}$ dengan line height $1.35 - 1.45$.
  - Penomoran pasal: Format hierarkis multi-level (`Pasal 1`, `1.1`, `1.1.1`).

---

## 2. Fitur Integritas & Keamanan Dokumen

1. **Watermark Draf / Kerahasiaan**:
   - Teks diagonal berputar $45^\circ$, font semi-transparan (opasitas $12\% - 15\%$), teks *"CONFIDENTIAL"* atau *"DRAFT"*.
2. **Bates Stamping / Nomor Pelari Halaman**:
   - Format wajib: `Halaman [X] dari [Y]` atau kode registrasi perkara `DOC-2026-XXXX-[0001]`.
3. **Blok Tanda Tangan Formal (Signature Blocks)**:
   - Kotak tanda tangan digital (`SigField`) berstandar PAdES (PDF Advanced Electronic Signatures) dengan penandaan tanggal otomatis dan verifikasi sertifikat X.509.
