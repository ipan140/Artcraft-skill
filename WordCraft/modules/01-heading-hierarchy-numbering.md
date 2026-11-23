# Modul 01: Heading Hierarchy & Decimal Outline Numbering

Modul ini menetapkan struktur penomoran judul bertingkat (*Multi-Level Decimal Numbering*), konsistensi hirarki bab, dan aturan pemutusan halaman otomatis sebelum Bab Utama (*Heading 1*).

---

## 1. Aturan Penomoran Desimal Bertingkat (Outline Hierarchy)

Dalam penyusunan dokumen formal, gunakan sistem penomoran desimal yang ketat dan konsisten hingga maksimal 3 tingkat kedalaman:

- **Heading 1 (Tingkat 1 - Bab Utama)**: `BAB 1: PENDAHULUAN`
  - Selalu diletakkan di bagian paling atas halaman baru (*Page Break Before = True*).
  - Huruf kapital penuh (*ALL CAPS*) atau Title Case berbobot Bold tebal ($18 - 22\text{ pt}$).
- **Heading 2 (Tingkat 2 - Sub-Bab)**: `1.1 Latar Belakang Masalah`
  - Huruf Title Case berbobot Bold ($13 - 15\text{ pt}$).
  - Spasi sebelum paragraf: $12\text{ pt}$, spasi setelah paragraf: $6\text{ pt}$.
- **Heading 3 (Tingkat 3 - Pokok Bahasan)**: `1.1.1 Batasan Arsitektur Sistem`
  - Huruf Title Case berbobot Semi-bold ($11 - 12\text{ pt}$).
- **Heading 4 (Tingkat 4 - Rincian Spesifik)**: `a. Parameter Komputasi CPU`
  - Gunakan penomoran alfabet atau bullet point untuk menghindari nomor angka yang terlalu panjang seperti `1.1.1.1.1`.

---

## 2. Pengendalian Teks Menggantung (Keep with Next & Widow/Orphan)

Untuk mencegah teks judul terpisah dari paragraf isinya:
1. **Keep with Next (Pertahankan Bersama Berikutnya)**:
   - Wajib diaktifkan pada semua style Heading 1, 2, dan 3. Mencegah judul bab tercetak di baris paling bawah halaman sementara isi pembahasannya melompat ke halaman berikutnya.
2. **Widow / Orphan Control**:
   - Aktifkan pada seluruh paragraf teks isi. Mencegah satu baris tunggal dari sebuah paragraf tertinggal sendirian di bagian bawah atau atas halaman.
