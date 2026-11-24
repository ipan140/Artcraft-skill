# Profil Target: Kustom Software (Backend APIs, CLIs, & Extensions)

Profil ini digunakan ketika objek yang dibongkar dan dibangun kembali adalah software di luar UI web standar—seperti **Backend REST/GraphQL APIs**, **Alat Terminal CLI**, **Ekstensi Browser (Chrome Extension)**, atau **Mesin Pengikis Web (Web Scraping Crawler)**.

---

## 1. Konfigurasi Target Kustom

Tentukan jenis target kustom pada [config.md](../config.md) pada opsi `custom_target_type`:

```yaml
target_type: "custom-target"
custom_target_type: "backend-api" # backend-api | cli-tool | chrome-extension | scraping-crawler
```

---

## 2. Profil 1: Layanan Backend & API (Backend Services)
- **Metode Dekonstruksi**:
  - Sadap struktur URL rute (`/api/v1/resource/:id`).
  - Petakan skema relasi data entitas (ERD: Users, Orders, Products, Transaksi).
  - Identifikasi middleware: CORS, Rate Limiter, Body Parser, Bearer Auth Token.
- **Strategi Rekonstruksi**:
  - Bangun arsitektur Controller $\rightarrow$ Service $\rightarrow$ Repository menggunakan Node.js/Express/Fastify atau Go/Python.
  - Sediakan validasi skema input ketat menggunakan Zod atau Joi.

---

## 3. Profil 2: Ekstensi Browser (Chrome / WebExtensions)
- **Metode Dekonstruksi**:
  - Analisa berkas `manifest.json` (permissions, host permissions, background service worker, content scripts, popup HTML).
  - Pahami komunikasi pesan antar konteks via `chrome.runtime.sendMessage` dan `chrome.tabs.sendMessage`.
- **Strategi Rekonstruksi**:
  - Gunakan Manifest V3 standar modern.
  - Isolasi CSS content script menggunakan Shadow DOM agar tidak merusak gaya tampilan website induk yang sedang dibuka pengguna.

---

## 4. Profil 3: Alat Terminal CLI (Command-Line Interface)
- **Metode Dekonstruksi**:
  - Identifikasi argumen perintah (`commands`, `subcommands`, `flags/options`, `positional arguments`).
  - Analisa input interaktif (prompt pilihan, input password tersembunyi, progress bar).
- **Strategi Rekonstruksi**:
  - Gunakan library CLI modern (seperti Commander.js, Inquirer, atau Click di Python).
  - Sediakan pesan bantuan `--help` yang ramah dan kode keluar (*exit codes*) standar: `0` untuk sukses, `1` untuk galat umum.

---

## 5. Profil 4: Bot Pengikis Web (Web Scraper & Crawler)
- **Metode Dekonstruksi**:
  - Identifikasi apakah data dirender di sisi server (HTML mentah) atau melalui panggilan AJAX API tersembunyi.
  - Periksa proteksi anti-bot dasar (User-Agent header, cookie session, CSRF token).
- **Strategi Rekonstruksi**:
  - Prioritaskan memanggil API internal JSON langsung jika tersedia daripada mem-parse elemen HTML yang rapuh.
  - Terapkan delay acak dan exponential backoff untuk menghormati kapasitas server target.
