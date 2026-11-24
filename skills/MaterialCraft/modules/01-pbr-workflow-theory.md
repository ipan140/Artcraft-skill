# Modul 01: PBR Workflow & Color Space Theory

Modul ini menetapkan prinsip fundamental rendering berbasis fisika (*Physically Based Rendering / PBR*), konservasi energi cahaya, dan linearitas ruang warna channel tekstur.

---

## 1. Konservasi Energi & Hukum Optik

Dalam model rendering modern (Cook-Torrance microfacet BRDF), jumlah total energi cahaya yang dipantulkan dan diserap tidak boleh melebihi energi cahaya yang datang:
$$\text{Outgoing Light} \le \text{Incoming Light}$$

1. **Dielektrik (Non-Logam)**:
   - Sebagian besar cahaya masuk ke dalam badan material (*refraction/subsurface absorption*) dan dihamburkan kembali sebagai warna difus/albedo.
   - Refleksi spekular specular Fresnel pada sudut normal ($F_0$) berkisar antara $2\% - 5\%$ (standar industri $0.04$).
2. **Konduktor (Logam)**:
   - Logam tidak memiliki hamburan cahaya difus; semua absorpsi terjadi di permukaan mikroskopis.
   - Albedo murni berfungsi sebagai warna pantulan spekular ($F_0$ berkisar antara $70\% - 100\%$).
   - Channel Difus pada logam murni bernilai hitam mutlak.

---

## 2. Alur Kerja Standar: Metallic-Roughness vs Specular-Glossiness

| Peta Tekstur | Metallic-Roughness (Standar Utama) | Specular-Glossiness (Warisan) | Ruang Warna (*Color Space*) |
|---|---|---|---|
| **Albedo / Base Color** | Warna murni dielektrik + Warna pantulan logam | Warna difus murni dielektrik saja | **sRGB (Gamma Corrected)** |
| **Micro-surface** | **Roughness** ($0.0$ mulus, $1.0$ buram kasar) | **Glossiness** ($1.0$ mulus, $0.0$ kasar) | **Linear / Raw / Non-Color** |
| **Material Type** | **Metallic** ($0.0$ dielektrik, $1.0$ logam murni) | **Specular Map** (Warna pantulan $F_0$) | **Linear / Raw / Non-Color** |
| **Normal Map** | Vector tangent space $(X, Y, Z)$ | Vector tangent space $(X, Y, Z)$ | **Linear / Raw / Non-Color** |
| **Ambient Occlusion** | Bayangan oklusi mikro celah sempit | Bayangan oklusi mikro celah sempit | **Linear / Raw / Non-Color** |

> [!IMPORTANT]
> Jangan pernah mengimpor peta Roughness, Metallic, Normal, atau Height dengan profil warna **sRGB**. Semua data matematis non-warna wajib diset ke **Linear / Non-Color / Raw Data** untuk menghindari distorsi gamma kurva eksponensial.
