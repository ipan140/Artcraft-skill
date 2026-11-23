# Profil Shot: Efek Khusus Kustom (Custom VFX & Motion Graphics)

Profil ini digunakan ketika kebutuhan efek visual berada di luar keying dan 3D tracking standar—seperti **Simulasi Partikel (Api, Asap, Ledakan, Debu)**, **Sihir Energi Sci-Fi (Lasers, Shields, Portal)**, **Motion Graphics Opening Title**, atau **Deep Compositing EXR**.

---

## 1. Konfigurasi Efek Kustom

Tentukan jenis efek kustom pada [config.md](../config.md) pada opsi `custom_vfx_type`:

```yaml
target_shot: "custom-vfx"
custom_vfx_type: "particle-simulation" # particle-simulation | sci-fi-energy-blast | motion-graphics-title | deep-compositing
```

---

## 2. Profil 1: Simulasi Partikel Atmosfer (Atmospheric Particles)
- **Tipe Elemen**: Debu melayang di udara (*dust motes*), percikan bara api (*embers/sparks*), tetesan hujan, atau asap kabut ground fog.
- **Kunci Realisme**:
  - Variasi kecepatan partikel acak (*turbulence field*) dan variasi ukuran partikel.
  - Tambahkan interaksi pencahayaan: jika ada ledakan api, pantulan cahaya oranye (*light spill*) harus menyinari wajah aktor dan lantai di sekitarnya.

---

## 3. Profil 2: Elemen Energi Fiksi Ilmiah (Sci-Fi Energy Blast & Portals)
- **Tipe Elemen**: Sinar laser, perisai energi holografik, atau distorsi ruang waktu portal.
- **Teknik Compositing**:
  - Gunakan multi-tier glow: Inti putih panas (*Core White Hot* 100% brightness) $\rightarrow$ Pendar dalam warna jenuh (*Inner Saturated Glow*) $\rightarrow$ Pendar luar eksponensial lembut yang luas (*Atmospheric Falloff*).
  - Tambahkan efek pembiasan lensa (*Heat Haze / Optical Refraction*) menggunakan node iDistort dengan noise map animasi.

---

## 4. Profil 3: Motion Graphics & Tipografi Judul Sinematik (Motion Titles)
- **Tipe Elemen**: Bumper logo studio, judul film sinematik 3D, atau infografis HUD (Heads-Up Display).
- **Kunci Realisme**:
  - Selalu aktifkan **Motion Blur** dengan minimal 16 samples untuk setiap animasi transformasi posisi atau rotasi cepat.
  - Terapkan efek aberasi kromatik optik dan vignette di sudut-sudut layar agar elemen grafis digital terasa direkam oleh lensa kamera nyata.
