# Modul 05: Validasi Data & Kontrol Input (Data Validation & Input Controls)

Modul ini menetapkan pembuatan menu pilihan dropdown (*Data Validation Lists*), batas rentang angka (*range clamping*), pesan kesalahan interaktif (*input tooltips*), dan proteksi lembar kerja (*sheet protection*).

---

## 1. Aturan Validasi Data Dropdown (In-Cell Dropdowns)

Untuk memastikan pengguna tidak salah mengetik kata kunci asumsi (misal "Bulanan" vs "Tiap Bulan"):

1. **Buat Tabel Referensi Master**:
   - Letakkan daftar pilihan di lembar `Inputs` atau `Metadata` (misal rentang `Inputs!$Z$2:$Z$5` berisi: `"Optimistis"`, `"Moderat"`, `"Pesimistis"`).
2. **Kunci Validasi Sel (Data Validation Settings)**:
   - Pilih tipe: **Daftar / List**.
   - Sumber: `=Inputs!$Z$2:$Z$5`.
   - Centang opsi: *In-cell dropdown* dan *Abaikan sel kosong*.
3. **Pesan Kesalahan Input (Error Alert)**:
   - Judul Galat: `Pilihan Tidak Valid`.
   - Pesan: `Silakan pilih salah satu opsi dari menu dropdown yang tersedia untuk menjaga konsistensi permodelan.`

---

## 2. Pembatasan Rentang Nilai (Range Clamping & Numeric Guards)
- **Persentase**: Batasi nilai persentase agar berada di antara `0.0` (0%) dan `1.0` (100%).
- **Formula Penjaga Rentang (In-Formula Clamp)**:
  Jika pengguna tidak menggunakan validasi sel, amankan rumus dengan fungsi `MEDIAN` atau `MIN/MAX`:
```excel
=MEDIAN(0, Persentase_Input_Pengguna, 1)
```
Rumus di atas memastikan bahwa jika pengguna memasukkan angka negatif, nilai akan dikunci di 0; dan jika memasukkan angka di atas 100%, nilai akan dikunci di 1.

---

## 3. Penguncian Sel & Proteksi Lembar Kerja (Sheet Protection)
- **Status Awal Sel di Excel**: Secara default, semua sel berstatus *Locked*.
- **Langkah Kerja Proteksi**:
  1. Seleksi seluruh sel input berwarna kuning (`#FEF3C7`), buka Format Cells $\rightarrow$ Protection $\rightarrow$ **Hapus centang Locked**.
  2. Lindungi Sheet: Review $\rightarrow$ Protect Sheet (Aktifkan password opsional).
  3. Hasil: Pengguna dapat dengan leluasa mengisi angka di sel kuning, namun **tidak akan bisa sengaja maupun tidak sengaja menghapus atau mengubah sel formula** yang rumit.
