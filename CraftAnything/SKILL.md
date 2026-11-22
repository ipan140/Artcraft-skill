---
name: craft-anything-skill
description: >-
  Panduan dekonstruksi cara kerja website, aplikasi, atau game, inspeksi alur data dan API,
  serta rekonstruksi kode mandiri yang bersih dan terstruktur untuk Craft Anything.
---

# Craft Anything Skill

Skill ini memandu AI dalam membongkar (*reverse engineer*) cara kerja software apa pun lalu membangun ulang kodenya secara mandiri, bersih, dan modern di **Craft Anything**.

---

## 🔍 Alur Dekonstruksi & Rekonstruksi

1. **Pemetaan Hirarki UI & Komponen**:
   - Analisa susunan layout, layout tree, container flex/grid, dan interaksi animasi.
2. **Penyadapan Alur Data & API**:
   - Identifikasi payload request/response, pola caching, web socket, atau state lokal.
3. **Ekstraksi Logika Inti**:
   - Temukan logika bisnis atau *game loop* (update -> render -> user input).
4. **Membangun Ulang (Clean Rebuild)**:
   - Tulis ulang arsitektur menggunakan stack modern tanpa kode sisa atau dependensi usang.

---

## 📋 Alur Eksekusi AI
1. Baca [config.md](./config.md) untuk stack target yang diinginkan.
2. Sajikan breakdown arsitektur: Diagram alur kerja -> Struktur data -> Kode implementasi utuh.
