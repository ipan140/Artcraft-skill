# Surface Profile: Weathered & Oxidized Metals

Profil ini menetapkan aturan prosedural untuk material berbasis konduktor (logam) dengan variasi keausan fisik, oksidasi (karat/patina), goresan mikro, dan cat terkelupas (*chipped paint*).

---

## 1. Karakteristik Fisik Logam (PBR Physics)

- **Metallic Value**: Logam murni harus bernilai $1.0$ (putih bersih) pada area terbuka. Area berkarat atau terkelupas adalah dielektrik non-logam sehingga Metallic bernilai $0.0$.
- **Base Color / Albedo**:
  - Besi/Baja Murni: Nilai linier RGB `(0.56, 0.57, 0.58)`
  - Tembaga (Copper): `(0.95, 0.64, 0.54)`
  - Emas (Gold): `(1.00, 0.78, 0.34)`
  - Aluminium: `(0.91, 0.92, 0.92)`
  - Karat Besi (Rust): Warna kemerahan/kecokelatan gelap `(0.24, 0.08, 0.03)` dengan nilai metallic $0.0$.
- **Roughness Profile**:
  - Logam mulus dipoles: $0.15 - 0.25$
  - Logam tergores industri (*scratched steel*): $0.40 - 0.60$
  - Karat berpori (*heavy rust*): $0.85 - 0.95$

---

## 2. Arsitektur Node Lapisan (Layered Architecture)

```
[Layer 0: Raw Base Metal]
        ↓
[Layer 1: Primer / Undercoat Paint] (Opsional)
        ↓
[Layer 2: Surface Coat / Lacquer] (Dibatasi oleh Edge Curvature & Scratches Mask)
        ↓
[Layer 3: Surface Imperfections] (Debu, jejak sidik jari, oksidasi lembab)
```

---

## 3. Masking Keausan Tepi (Curvature & Edge Wear)

1. Gunakan node **Curvature (Convex)** untuk mendeteksi sudut tajam.
2. Kalikan (*Multiply*) dengan **Perlin / Grunge Noise** frekuensi tinggi untuk memecah garis keausan agar tidak seragam.
3. Gunakan kurva kontras tinggi (*Levels / Histogram Scan*) untuk menghasilkan mask biner tajam tempat cat mengelupas mengekspos logam dasar.
