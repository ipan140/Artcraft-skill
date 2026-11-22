---
name: solidcraft-skill
description: >-
  Panduan pemodelan 3D mekanikal solid berbasis sketsa parametrik terkendala,
  pohon fitur rekayasa (feature tree), toleransi manufaktur, dan perakitan komponen di SolidCraft.
---

# SolidCraft Skill

Skill ini memandu AI dalam membangun model 3D padat yang dapat diedit secara parametrik, tahan eror saat ukuran diubah, dan siap diproduksi (CNC/3D Printing) di **SolidCraft**.

---

## ⚙️ Disiplin Pemodelan Parametrik

1. **Sketsa Terkendala Penuh (Fully Constrained)**:
   - Semua garis harus berwarna hitam (terkunci dengan relasi geometris: Horizontal, Vertikal, Tangen, Konsentris, dan ukuran angka pasti).
2. **Fillet & Chamfer di Akhir Pohon**:
   - Jangan letakkan fillet di awal sketsa; terapkan fitur fillet pada objek 3D di bagian akhir pohon fitur (*feature tree*).
3. **Draft Angle untuk Komponen Cetakan**:
   - Selalu berikan kemiringan dinding 1°-2° pada komponen yang diproduksi dengan cetakan injeksi (*injection molding*).

---

## 📋 Alur Eksekusi AI
1. Periksa unit di [config.md](./config.md).
2. Sajikan langkah urutan pohon fitur: Plane -> Sketsa -> Operasi Benda Padat -> Finishing mekanikal.
