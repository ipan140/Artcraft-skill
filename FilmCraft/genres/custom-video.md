# Profil Genre: Kustom Format Video (Custom Video Formats)

Profil ini digunakan ketika proyek video berada di luar format bioskop atau TV tradisional—seperti **Video Pendek Vertikal 9:16 (Instagram Reels / TikTok / YouTube Shorts)**, **Video Musik (Music Video)**, **Vlog YouTube Personal**, atau **Modul Kursus Online**.

---

## 1. Konfigurasi Format Kustom

Tentukan jenis format video kustom pada [config.md](../config.md) pada opsi `custom_video_type`:

```yaml
target_genre: "custom-video"
custom_video_type: "vertical-reels-tiktok" # vertical-reels-tiktok | music-video | youtube-vlog | online-course
```

---

## 2. Profil 1: Video Vertikal Media Sosial (Reels & TikTok 9:16)
- **Resolusi Kanvas**: `1080 x 1920 px` (Portrait 9:16) @ 30fps atau 60fps.
- **Zona Aman Antarmuka (UI Safe Zone)**:
  - Bagian atas (margin 150px): Dihuni oleh bar navigasi pencarian dan tab feed aplikasi.
  - Bagian bawah (margin 300px): Dihuni oleh caption teks akun, nama lagu, dan tombol navigasi home.
  - Sisi kanan (margin 120px): Dihuni oleh deretan tombol Like, Komentar, Share, dan Audio icon.
  - **Seluruh teks, wajah subjek, dan informasi grafis wajib berada di area tengah (*Center Safe Zone*)**.
- **Subtitle Kinetik**: Teks per kata muncul bergantian dengan animasi pop skala (*karaoke-style captions*) untuk mempertahankan retensi tontonan tanpa suara.

---

## 3. Profil 2: Video Musik (Music Video)
- **Sinkronisasi Lip-Sync Presisi**:
  - Klip vokal penyanyi wajib dikunci akurat 100% pada track vokal master tanpa jeda 1 frame pun.
- **Eksplorasi Transisi Berani**:
  - Bebas menerapkan teknik *Whip Pan*, *Match Cut*, *Flash Frame*, dan *Speed Ramping* yang agresif untuk memperkuat ketukan lagu.

---

## 4. Profil 3: Video Edukasi & Kursus Online (Online Courses)
- **Komposisi Split-Screen**:
  - Sisi Kiri / Atas: Rekaman tangkapan layar perangkat lunak atau slide presentasi.
  - Sisi Kanan / Bawah: Gelembung kamera presenter (*talking-head webcam circle*).
- **Penekanan Visual**: Gunakan zoom dinamis (*digital punch-in 115%*) untuk memperjelas area tombol software yang sedang dibahas.
