---
name: texturecraft-skill
description: >-
  Panduan pelukisan tekstur 3D di permukaan poligon, baking peta mesh (Curvature/AO),
  masking cat terkelupas (edge-wear), dan integrasi material fisik di TextureCraft.
---

# TextureCraft Skill

Skill ini memandu AI dalam melukis tekstur model 3D dengan detail keausan realistis, kotoran alami di sudut lekukan, dan penataan UV tile di **TextureCraft**.

---

## 🎨 Strategi Pengecatan 3D Multi-Lapis

1. **Baking Peta Mesh Acuan**:
   - *Curvature Map* menandai sudut-sudut tajam yang sering terbentur.
   - *Ambient Occlusion Map* menandai celah-celah tersembunyi tempat debu menumpuk.
2. **Layering Realistis**:
   - Layer 1: Bahan dasar logam mentah.
   - Layer 2: Lapisan cat warna dengan mask yang dikendalikan oleh curvature map (memunculkan cat terkelupas di tepi tajam).
   - Layer 3: Sidik jari dan debu tipis di atas permukaan cat.

---

## 📋 Alur Eksekusi AI
1. Periksa resolusi di [config.md](./config.md).
2. Tuliskan susunan layer kuas, peta mask, dan instruksi penempatan UV seam.
