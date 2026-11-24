# Profil Skenario: Penjadwalan Rapat & Kalender (Meeting Scheduling)

Profil ini mengatur aturan penulisan surel undangan rapat kerja, eliminasi bolak-balik mencocokkan jadwal (*calendar ping-pong*), penegasan 3 poin agenda terukur, dan pembuatan berkas lampiran kalender standar RFC 5545 (`.ics`).

---

## 1. Menghilangkan Gesekan Penjadwalan (Frictionless Scheduling)

Jangan pernah mengirim email mengambang seperti: *"Kapan Anda luang untuk ngobrol?"*. Hal ini membebankan pekerjaan mental kepada lawan bicara:

### Pola Penjadwalan Tanpa Gesekan:
1. **Tawarkan 2–3 Pilihan Slot Waktu Spesifik Lengkap dengan Zona Waktu**:
   - *"Kami mengusulkan panggilan video 25 menit pada salah satu waktu berikut:*
     - *Opsi 1: Selasa, 24 November 2026, pukul 10:00 – 10:25 WIB*
     - *Opsi 2: Rabu, 25 November 2026, pukul 14:00 – 14:25 WIB*
     - *Opsi 3: Kamis, 26 November 2026, pukul 15:30 – 15:55 WIB"*
2. **Sediakan Tautan Kalender Instan Sebagai Alternatif**:
   - *"Atau jika Anda lebih memilih waktu lain, silakan pilih slot yang paling nyaman langsung di kalender tim kami: [tautan kalender]."*

---

## 2. Struktur Tiga Pilar Agenda Rapat Wajib

Setiap undangan rapat wajib memuat agenda agar peserta dapat mempersiapkan diri:

```text
Agenda Rapat Singkat (Durasi: 25 Menit):
1. [00 - 05 Menit]: Evaluasi Masalah Bottleneck Integrasi API saat ini.
2. [05 - 18 Menit]: Review 2 Opsi Solusi Teknis & Dampak Biaya Server.
3. [18 - 25 Menit]: Penetapan Keputusan Final & PIC Penanggung Jawab Eksekusi.
```

---

## 3. Integrasi Lampiran Kalender RFC 5545 (.ics)
- Selalu sediakan blok payload berkas `.ics` di akhir surel.
- Aplikasi email seperti Google Workspace, Outlook, dan Apple Mail akan secara otomatis mendeteksi blok data ini dan memunculkan tombol satu klik: `Tambahkan ke Kalender (Add to Calendar)`.
