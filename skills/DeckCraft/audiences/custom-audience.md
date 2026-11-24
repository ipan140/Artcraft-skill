# Profil Audiens: Kustom Presentasi (Custom Audience Profile)

Profil ini digunakan ketika presentasi ditujukan untuk audiens khusus di luar dewan direksi, investor, dan panggung keynote—seperti **Penawaran Penjualan B2B (B2B Sales Pitch)**, **Pertemuan Internal Tim (All-Hands)**, atau **Lokakarya Edukasi (Workshop/Webinar)**.

---

## 1. Konfigurasi Audiens Kustom

Tentukan jenis audiens kustom pada [config.md](../config.md) pada opsi `custom_audience_type`:

```yaml
target_audience: "custom-audience"
custom_audience_type: "b2b-sales" # b2b-sales | team-allhands | educational-workshop | webinar
```

---

## 2. Profil 1: Penawaran Solusi Bisnis (B2B Sales Pitch)
- **Fokus Audiens**: Pembeli korporat / procurement manager yang memikirkan efisiensi alur kerja dan keamanan data perusahaan.
- **Struktur Alur**:
  - Diagnosis Masalah Klien $\rightarrow$ Studi Kasus Sukses di Industri Sejenis $\rightarrow$ Arsitektur Solusi & Timeline Implementasi $\rightarrow$ Skema Harga & ROI Kalkulator.
- **Elemen Kunci**: Sertakan logo klien terpercaya (*social proof*) dan sertifikasi keamanan (SOC2, ISO 27001).

---

## 3. Profil 2: Rapat Internal Seluruh Karyawan (Company All-Hands)
- **Fokus Audiens**: Karyawan lintas divisi (engineering, sales, ops, HR).
- **Struktur Alur**:
  - Perayaan Keberhasilan Kuartal Ini $\rightarrow$ Metrik Utama Perusahaan $\rightarrow$ Prioritas Strategis Kuartal Depan $\rightarrow$ Pengumuman Penting & Sesi Tanya Jawab Terbuka (Q&A).
- **Tone Suara**: Hangat, transparan, inklusif, dan menyemangati tim.

---

## 4. Profil 3: Lokakarya & Webinar Edukasi (Workshop & Webinar)
- **Fokus Audiens**: Peserta yang ingin mempelajari keterampilan baru secara bertahap.
- **Struktur Alur**:
  - Tujuan Pembelajaran (*Learning Outcomes*) $\rightarrow$ Kerangka Teori $\rightarrow$ Langkah Praktis (Step-by-Step Tutorial) $\rightarrow$ Studi Kasus Latihan $\rightarrow$ Lembar Rangkuman / Cheat Sheet.
- **Elemen Kunci**: Berikan tanda penanda waktu (*time-box indicator*) dan instruksi latihan yang jelas.
