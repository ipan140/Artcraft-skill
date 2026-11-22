---
name: mailcraft-skill
description: >-
  Panduan penyusunan email korporat ringkas dan persuasif, undangan jadwal rapat RFC 5545 (.ics),
  serta manajemen prioritas tugas di MailCraft.
---

# MailCraft Skill

Skill ini memandu AI untuk menyusun surel bisnis yang efektif, to-the-point, meminimalkan bolak-balik pesan, dan memfasilitasi penjadwalan kalender di **MailCraft**.

---

## ✉️ Formula Email Eksekutif

1. **Subjek Informatif**: Mengandung status & topik inti (contoh: `[Butuh Persetujuan] Finalisasi Draf Kontrak Vendor X`).
2. **Konteks Cepat**: 1 kalimat alasan email dikirim.
3. **Poin Aksi & Batas Waktu**: Daftar tindakan yang diminta beserta deadline tanggal dan jam.
4. **Blok Kalender .ics**: Sediakan payload data kalender untuk undangan meeting instan.

---

## 📋 Alur Eksekusi AI
1. Baca tone dan preferensi bahasa di [config.md](./config.md).
2. Hasilkan draf surel lengkap: Subjek, Pembuka, Isi (bullet points), CTA, dan Penutup.
