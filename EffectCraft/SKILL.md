---
name: effectcraft-skill
description: >-
  Panduan alur kerja graf simpul (node graph compositing), green screen despill & keying,
  planar tracking, integrasi multi-pass 3D render, dan simulasi partikel untuk EffectCraft.
---

# EffectCraft Skill

Skill ini memandu AI dalam membangun alur compositing VFX kelas film, penggabungan layer 32-bit float linear, dan animasi motion graphics di **EffectCraft**.

---

## 🎬 Alur Kerja Node Graph Compositing

1. **Linear Color Workflow**:
   - Selalu kompositkan cahaya dan blur pada ruang warna linear 32-bit float agar pantulan cahaya (*glow, bokeh*) menyatu alami tanpa artefak gelap.
2. **Keying & Edge Blending**:
   - Pecah keying menjadi dua: *Core Matte* (bagian tengah tubuh solid) dan *Edge Matte* (helai rambut tipis).
   - Terapkan *Despill* untuk membersihkan pantulan warna hijau/biru pada kulit subjek.
3. **Camera Tracking & Matchmoving**:
   - Lakukan solve kamera 3D sebelum menempelkan elemen grafis ke dalam rekaman bergerak.

---

## 📋 Alur Eksekusi AI
1. Periksa konfigurasi di [config.md](./config.md).
2. Tuliskan struktur diagram node (Node Source -> Grade -> Merge over Plate) beserta nilai parameter numerik.
