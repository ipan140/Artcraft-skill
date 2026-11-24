# Profil Skenario: Kustom Korespondensi Surel (Custom Email Scenarios)

Profil ini digunakan ketika situasi komunikasi berada di luar persetujuan eksekutif, negosiasi, dan jadwal rapat—seperti **Surel Komunikasi Tanggap Insiden / Downtime Sistem (Incident Crisis)**, **Laporan Pembaruan Investor Bulanan (Monthly Investor Update)**, atau **Surel Penagihan Invoice Tertunggak (Overdue Invoice Collection)**.

---

## 1. Konfigurasi Skenario Kustom

Tentukan jenis skenario kustom pada [config.md](../config.md) pada opsi `custom_email_type`:

```yaml
target_scenario: "custom-email"
custom_email_type: "incident-crisis" # incident-crisis | investor-monthly-update | overdue-invoice-collection | onboarding-welcome
```

---

## 2. Profil 1: Komunikasi Insiden Sistem (Incident Downtime Communication)
- **Aturan Psikologis**: Transparansi penuh, empati tulus, tanpa mencari kambing hitam (*no blame shifting*).
- **Struktur 4 Langkah**:
  1. *Apa yang Terjadi?*: Penjelasan ringkas layanan apa yang terganggu dan sejak pukul berapa.
  2. *Apa Dampaknya bagi Pengguna?*: Apakah data aman? (misal: "Seluruh data transaksi dan enkripsi saldo tersimpan 100% aman").
  3. *Tindakan Perbaikan*: Apa yang sedang dikerjakan oleh tim teknis saat ini.
  4. *Saluran Pembaruan Berikutnya*: Waktu pasti kapan update status berikutnya akan dikirimkan (misal: "Pembaruan berikutnya akan kami sampaikan pukul 14:00 WIB di halaman status.domain.com").

---

## 3. Profil 2: Laporan Bulanan Investor (Investor Monthly Update)
- **Format Konsisten & Berbobot**:
  - *Satu Paragraf Sorotan Utama*: Pencapaian terbesar bulan ini.
  - *Metrik Kunci (Scorecard)*: ARR, MoM Growth %, Burn Rate bulanan, Runway tersisa (dalam jumlah bulan).
  - *Kemenangan Kunci (Wins)* & *Tantangan Berat (Lowlights/Learnings)*.
  - *Permintaan Bantuan (The Asks)*: Pengenalan ke calon klien tertentu, rekomendasi kandidat talenta senior.

---

## 4. Profil 3: Penagihan Invoice Tertunggak (Overdue Collection)
- **Pendekatan Bertahap**:
  - *Pengingat 1 (Hari H Jatuh Tempo)*: Nada ramah, asumsi invoice hanya terlewat oleh bagian keuangan (*"Hanya ingin memastikan Anda telah menerima faktur No. 102..."*).
  - *Pengingat 2 (7 Hari Lewat Jatuh Tempo)*: Nada formal, menyertakan salinan PDF faktur dan rincian rekening bank transfer.
  - *Pengingat 3 (14 Hari Lewat)*: Nada tegas, memberitahukan penghentian sementara akses layanan (*service suspension notice*) sesuai klausul kontrak jika pembayaran belum terverifikasi dalam 3 hari kerja.
