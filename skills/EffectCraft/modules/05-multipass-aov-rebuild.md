# Modul 05: Rekonstruksi CGI Multi-Pass & AOVs (Multi-Pass AOV Rebuild)

Modul ini menetapkan aljabar rekombinasi lapisan render 3D (Arbitrary Output Variables / AOVs) dari file OpenEXR 32-bit float, manipulasi pantulan cahaya, serta isolasi ID objek menggunakan Cryptomatte.

---

## 1. Aljabar Rekonstruksi Beauty Pass (The Additive Beauty Pipeline)

Ketika file multi-channel EXR dibuka di Nuke/Fusion, rekonstruksi gambar 3D utuh (*beauty pass*) dilakukan menggunakan pohon simpul matematis murni:

```text
                   [Raw Diffuse] ──┐
                                   ├── (Merge: Multiply) ──┐
                   [Diffuse Light]─┘                       │
                                                           ├── (Merge: Plus) ──┐
                   [Specular Light]────────────────────────┘                   │
                                                                               ├── (Merge: Plus) ──┐
                   [Global Illumination (Indirect)]────────────────────────────┘                   │
                                                                                                   ├── (Merge: Plus) ── [Full Beauty]
                   [Subsurface Scattering (SSS)]───────────────────────────────────────────────────┘
```

1. **Komponen Diffuse**: `Raw Diffuse` (tekstur murni) dikalikan (*Multiply*) dengan `Diffuse Light` (cahaya langsung).
2. **Komponen Pantulan & Hamburan**: Hasil diffuse di atas dijumlahkan (*Merge operation: Plus*) dengan `Specular`, `Indirect GI`, `SSS`, dan `Emission`.
3. **Mengapa Menggunakan Operasi Plus?**:
   - Dalam fisika fotometrik, penambahan foton cahaya bersifat aditif murni ($1 + 1 = 2$). Menggunakan operasi `Screen` atau `Over` pada saluran cahaya adalah kesalahan fatal yang membuat rendering CGI tampak kartun dan tidak realistis.

---

## 2. Pemanfaatan Saluran Utilitas (Utility AOVs)

1. **Ambient Occlusion (AO)**:
   - Digabungkan menggunakan operasi **Multiply** di bagian paling akhir rekonstruksi beauty:
   $$\text{Final Beauty} = \text{Full Beauty} \times \text{Ambient Occlusion}$$
   - Gunakan node Grade pada AO pass untuk mengontrol intensitas bayangan celah sempit tanpa membuat objek menjadi gosong.
2. **World Normal Pass ($N$)**:
   - Menyimpan vektor arah permukaan objek ($X=\text{Merah}, Y=\text{Hijau}, Z=\text{Biru}$).
   - Digunakan dengan node Relight / Shader 3D di Nuke untuk memodifikasi arah pencahayaan atau menambahkan lampu rim light virtual (*2.5D relighting*) tanpa perlu merender ulang di software 3D.
3. **Cryptomatte**:
   - Standar industri isolasi objek dan material 3D berbasis hash string nama mesh.
   - Memungkinkan compositor mengekstrak matte alpha instan dengan motion blur dan transparansi sempurna hanya dengan satu klik picker.
