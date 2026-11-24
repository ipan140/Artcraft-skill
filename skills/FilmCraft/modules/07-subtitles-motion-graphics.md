# Modul 07: Subtitle & Grafis Layar (Subtitles & Motion Graphics)

Modul ini menetapkan batas aman penempatan grafis layar (*Action-Safe & Title-Safe Areas*), perancangan Lower Thirds pengenal tokoh, serta standar subtitle kinetik (*kinetic auto-captions*) untuk konsumsi video seluler.

---

## 1. Batas Area Aman Layar (Safe Margins)

Setiap televisi dan layar monitor memiliki potensi memotong pinggiran gambar (*overscan*). Gunakan batas acuan industri (SMPTE ST 2046-1):

```text
┌────────────────────────────────────────────────────────┐ < Batas Fisik Layar 100%
│  ┌──────────────────────────────────────────────────┐  │ < Action-Safe Area (90% Luas Layar)
│  │  ┌────────────────────────────────────────────┐  │  │ < Title-Safe Area (80% Luas Layar)
│  │  │                                            │  │  │
│  │  │  SELURUH TEKS, LOGO, SUBTITLE &            │  │  │
│  │  │  LOWER THIRDS WAJIB DI DALAM KOTAK INI     │  │  │
│  │  │                                            │  │  │
│  │  └────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────┘
```

- **Action-Safe (90%)**: Area aman untuk aksi penting (seperti kepala aktor atau gerakan tangan). Di luar area ini, risiko terpotong oleh bezel televisi sangat tinggi.
- **Title-Safe (80%)**: Area aman absolut untuk seluruh elemen tipografi, nomor kontak, subtitle, dan logo merek.

---

## 2. Desain Lower Thirds Pengenal Tokoh

Lower Thirds yang elegan tidak boleh menutupi separuh wajah narasumber:

- **Tinggi Maksimal**: Maksimal menempati `12% s/d 15%` dari tinggi total layar.
- **Hirarki Dua Baris (Two-Line Hierarchy)**:
  - Baris 1: *NAMA TOKOH LENGKAP* (Font Sans Bold 28pt, Huruf Kapital, Warna Putih Bersih).
  - Baris 2: *Jabatan / Gelar / Institusi* (Font Sans Regular 18pt, Warna Aksen Emas/Cyan/Abu-abu Terang).
- **Latar Belakang Penegas**: Gunakan balok persegi panjang semi-transparan (`black/60%`) atau efek gradasi halus agar teks terbaca tajam di atas latar belakang baju yang berwarna putih maupun ramai.

---

## 3. Subtitle Kinetik Layar Vertikal (Mobile Kinetic Captions)
- **Rasio Pembacaan Tanpa Suara**: Lebih dari 70% pengguna ponsel menonton video di tempat umum dengan audio dimatikan (*muted*).
- **Aturan Pemenggalan**: Tampilkan maksimal `3 s/d 5 kata per baris` di tengah layar.
- **Efek Pop-Up Kinetik**: Berikan animasi pembesaran skala mikro (`scale: 1.15x`) dan sorotan warna cerah (Kuning `#FACC15` atau Hijau Neon) tepat pada kata yang sedang diucapkan pembicara secara real-time (*karaoke text effect*).
