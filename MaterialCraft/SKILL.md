---
name: materialcraft-skill
description: >-
  Panduan desain material prosedural tak terbatas resolusi, formula noise pattern,
  konversi height map ke normal map, dan peracikan channel PBR di MaterialCraft.
---

# MaterialCraft Skill

Skill ini memandu AI dalam merancang material 3D fotorealistik (logam, beton, marmer, kayu lapuk, kain) menggunakan susunan node prosedural di **MaterialCraft**.

---

## 🧱 Anatomi Jaringan Node Material

1. **Height Foundation**:
   - Gabungkan noise frekuensi rendah (bentuk makro) dengan noise frekuensi tinggi (pori-pori/kerutan mikro).
2. **Roughness Mapping**:
   - Balikkan peta tinggi dan tambahkan variasi kotoran/goresan agar pantulan kilap tidak seragam.
3. **Metallic Purity**:
   - Logam bernilai murni 1.0 (putih), isolator non-logam bernilai murni 0.0 (hitam).

---

## 📋 Alur Eksekusi AI
1. Periksa resolusi dan alur kerja di [config.md](./config.md).
2. Sajikan diagram pohon node (Input Generators -> Filters/Blends -> Output PBR Maps).
