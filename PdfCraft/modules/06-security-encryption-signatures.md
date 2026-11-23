# Modul 06: Security, Encryption & Digital Signatures

Modul ini mendefinisikan standar enkripsi kriptografi AES-256, kontrol izin akses (*permissions*), dan implementasi tanda tangan digital berbasis sertifikat X.509 (PAdES).

---

## 1. Enkripsi Standar Kriptografi Modern (AES-256)

PDF standar ISO 32000 mendukung enkripsi tingkat tinggi:

- **Filter Enkripsi**: Gunakan `Standard V5 (R=6)` dengan algoritma **AES-256 (CBC/GCM)**. Hindari algoritma lama seperti RC4 (40-bit/128-bit) yang sudah rentan retak.
- **Dual Password Model**:
  1. **User Password**: Kata sandi yang diperlukan hanya untuk membuka dan membaca isi dokumen.
  2. **Owner / Permissions Password**: Kata sandi untuk mengubah hak akses, mencetak, menyalin teks, atau memodifikasi dokumen.

---

## 2. Bitmask Bendera Izin Akses (Permissions Flags)

Kamus izin akses mengontrol kemampuan pembaca:

| Izin Akses | Nilai Flag | Deskripsi Keamanan |
|---|---|---|
| **Printing** | Bit 3 (Low) / Bit 12 (High) | Mengizinkan pencetakan resolusi tinggi atau dilarang sama sekali |
| **Modify Contents** | Bit 4 | Mencegah penambahan atau perubahan halaman |
| **Copy Text / Media** | Bit 5 | Melarang penyalinan teks ke clipboard |
| **Annotations / Forms** | Bit 6 | Mengizinkan pengisian form dan tanda tangan digital tanpa mengizinkan perubahan layout |
| **Accessibility** | Bit 10 | Wajib selalu diizinkan agar pembaca tuna netra (screen reader) tetap berfungsi |

---

## 3. Tanda Tangan Digital PAdES (PDF Advanced Electronic Signatures)

- Format tanda tangan wajib mengikuti standar **ETSI TS 102 778 (PAdES)**.
- **Kamus Tanda Tangan**: Objek `/Sig` dengan subfilter `/adbe.pkcs7.detached` atau `/ETSI.CAdES.detached`.
- **Integritas Byte-Range**: Tanda tangan memverifikasi seluruh stream dokumen kecuali byte alokasi tanda tangan itu sendiri (`/ByteRange [0, offset1, offset2, len2]`). Perubahan satu bit saja setelah penandatanganan akan membatalkan validitas sertifikat.
- **Timestamping Authority (TSA)**: Sertakan token waktu RFC 3161 terpercaya untuk membuktikan waktu penandatanganan dokumen secara hukum.
