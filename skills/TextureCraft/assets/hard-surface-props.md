# Asset Profile: Hard-Surface Props, Weapons & Vehicles

Profil ini menetapkan panduan pelukisan tekstur 3D (*3D texture painting*) untuk model poligon keras (*hard-surface*) seperti senjata militer, robot fiksi ilmiah, kendaraan lapis baja, dan peti logistik (*crates*), menekankan keausan tepi cat, rembesan oli gravitasi, dan penempelan decal stensil.

---

## 1. Strategi Pelapisan Material Pintar (Layering Storytelling)

Setiap aset hard-surface harus menceritakan riwayat penggunaannya melalui 5 lapisan kronologis:

```
[Layer 5: Micro Dust & Smudges] (Debu halus di permukaan horizontal, jejak tangan)
        ↑
[Layer 4: Oil Leaks & Drip Stains] (Rembesan cairan hidrolik/oli mengalir ke bawah akibat gravitasi)
        ↑
[Layer 3: Topcoat Paint & Decals] (Warna kamuflase/cat bodi + nomor seri & stensil peringatan)
        ↑
[Layer 2: Primer Coat] (Lapisan cat dasar anti-karat, tersingkap di sekitar tepi yang terkelupas)
        ↑
[Layer 1: Bare Base Metal] (Baja karbon / aluminium tempa mentah, terekspos di sudut paling tajam)
```

---

## 2. Kerapatan Teksel & Skala Detail (Texel Density)

- **Standar Kerapatan Teksel**:
  - Senjata Sudut Pandang Orang Pertama (First-Person Weapon): $40.96\text{ px/cm}$ (Resolusi 4K pada 1 atau 2 tile UDIM).
  - Kendaraan / Karakter Utama (Third-Person Hero): $20.48\text{ px/cm}$.
  - Properti Lingkungan Umum (World Props): $10.24\text{ px/cm}$.
- **Alokasi Skala UV**: Berikan skala UV $25 - 35\%$ lebih besar pada bagian yang sering dilihat dekat kamera (misal: penutup laras, tombol pelatuk, dan bidikan optik).

---

## 3. Pemanfaatan Peta Geometri Mesh (Baked Maps)

- **Curvature Map**: Penggerak utama *generator edge wear* untuk mengikis cat lapisan atas mengekspos logam dasar.
- **Ambient Occlusion (AO)**: Mengunci akumulasi kotoran dan jelaga mesin di sudut ceruk sambungan baut.
- **Position Map (Sumbu Y Dunia)**: Digunakan bersama masker gradien vertikal untuk menempatkan lumpur kering di bagian bawah kendaraan dan cipratan debu tanah.
