# Modul 05: Permanent Redaction & Metadata Sanitization

Modul ini menetapkan protokol penghapusan permanen data sensitif (*True Geometric Redaction*), pembersihan metadata tersembunyi, dan pencegahan kebocoran informasi (*data leakage*).

---

## 1. Bahaya "Redaksi Semu" (False Redaction Hazards)

> [!CAUTION]
> Menempatkan kotak hitam grafis (*black rectangle overlay*) di atas teks sensitif atau mengubah warna font menjadi hitam **BUKAN** redaksi! Teks asli di bawahnya tetap tersimpan dalam stream konten dan dapat disalin (*copy-paste*) atau diekstrak oleh program pembaca teks.

---

## 2. Redaksi Geometris Sejati (True PDF Redaction)

Proses redaksi sejati wajib menghancurkan data pada 3 lapisan:

1. **Lapisan Teks Vektor**: Hapus glyph karakter dan operator teks (`Tj`, `TJ`) dari stream konten halaman yang berada di dalam koordinat bounding box redaksi.
2. **Lapisan Gambar Bitmap**: Jika teks berada di dalam gambar hasil scan (OCR), piksel-piksel gambar di bawah kotak sensor wajib di-*burn-in* dan diganti dengan piksel hitam/putih padat, dan teks OCR layer di belakangnya wajib dihapus.
3. **Pembersihan Anotasi**: Hapus catatan tempel (*sticky notes*), komentar, dan riwayat revisi yang terkait dengan teks yang disensor.

---

## 3. Sanitasi Metadata & Kamus Tersembunyi

Sebelum merilis dokumen publik:
- **Kamus `/Info`**: Hapus atau samarkan nama pembuat dokumen, path folder lokal pengarang, nama printer, dan riwayat perangkat lunak pembuat.
- **Paket XML XMP**: Bersihkan metadata `xmpMM:History`, `pdfx:`, dan data geolokasi EXIF pada gambar yang disematkan.
- **Halaman yang Dihapus**: Pastikan objek-objek halaman yang telah dihapus tidak lagi tersimpan sebagai objek yatim (*unreferenced orphan objects*) dalam file PDF dengan melakukan pemadatan ulang (*garbage collection / clean incremental updates*).
