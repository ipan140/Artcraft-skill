# Modul 04: Format Output Standar AI (RAW Photo Development Specification)

Modul ini mendikte bagaimana AI harus menyajikan rekomendasi parameter slider numerik (-100 s/d +100), blok kode XML preset XMP resmi, panduan penggunaan masker lokal (*masking*), dan checklist verifikasi kualitas foto.

---

## 1. Struktur Respon Wajib AI

Setiap kali AI memberikan instruksi pengembangan foto RAW berdasarkan skill ini, respon **WAJIB** mengikuti urutan 5 bagian berikut:

1. **Ringkasan Foto & Visi Editorial**:
   - Sebutkan genre (`portrait-skintones`, `landscape-nature`, dsb.), kondisi pencahayaan rekaman awal (misal: under-exposed -1 stop, golden hour backlight), dan target mood akhir.
2. **Tabel Parameter Slider Numerik Lengkap**:
   - Bagian Panel Basic (Kelvin, Tint, Exposure, Contrast, Highlights, Shadows, Whites, Blacks, Texture, Clarity, Dehaze, Vibrance, Saturation).
   - Bagian Tone Curve (Koordinat titik Point Curve).
   - Bagian HSL / Color Mixer (Nilai Hue, Saturation, Luminance untuk 8 warna).
   - Bagian Color Grading 3-Way (Shadows, Midtones, Highlights H/S/L).
3. **Instruksi Masking Kuas & Gradien Lokal**:
   - Jelaskan area mana yang perlu diberi masker selektif (Subject Mask, Radial Gradient, Linear Gradient) beserta slider spesifiknya.
4. **Blok Berkas Preset XMP XML Resmi**:
   - XML preset Adobe Camera Raw / Lightroom yang dapat langsung disimpan sebagai berkas `.xmp` dan diimpor oleh pengguna ke aplikasi.
5. **Checklist Verifikasi Kualitas Pra-Ekspor**:
   - Pemeriksaan bebas kliping, kealamian tekstur kulit, ketajaman, dan penghapusan chromatic aberration.

---

## 2. Template Output Markdown Resmi

Contoh format yang harus diikuti oleh AI:

````markdown
### 📷 Resep Pengembangan RAW: [Judul Foto / Konsep]
Genre: `[Target Genre]` | Ruang Warna: `[ProPhoto RGB / Adobe RGB]` | Mood: `Warm Golden Glow`

#### 1. Panel Dasar (Basic Adjustments)
| Slider Parameter | Nilai Numerik | Fungsi Teknis & Alasan |
| :--- | :---: | :--- |
| **White Balance Temp** | `5850 K` | Memberikan kehangatan senja alami pada adegan |
| **Tint** | `+8` | Menetralkan bias hijau daun pada bayangan wajah |
| **Exposure** | `+0.45` | Mengangkat kecerahan keseluruhan ke rentang histogram optimal |
| **Contrast** | `+10` | Penegasan kontras awal sebelum tone curve |
| **Highlights** | `-75` | Menyelamatkan tekstur awan dan pendar cahaya langit |
| **Shadows** | `+40` | Membuka detail pakaian dan bayangan mata subjek |
| **Whites** | `+15` | Menetapkan titik putih puncak tanpa kliping |
| **Blacks** | `-12` | Mengunci kontras hitam pekat di rambut |
| **Texture** | `+10` | Menajamkan helai rambut dan kain tanpa mengasarkan pori wajah |
| **Clarity** | `+4` | Mikro-kontras moderat |
| **Dehaze** | `+8` | Menembus kabut tipis atmosfer |
| **Vibrance** | `+18` | Menaikkan warna muted tanpa membuat kulit over-saturated |
| **Saturation** | `-2` | Menjaga stabilitas warna keseluruhan |

#### 2. Kalibrasi Saluran HSL Kunci
- **Orange**: `Hue: +3, Saturation: -8, Luminance: +16` (Kulit bersih bercahaya alami)
- **Yellow**: `Hue: +15, Saturation: -12, Luminance: +5` (Meredakan pendar rumput kering)
- **Blue**: `Hue: -10, Saturation: +10, Luminance: -18` (Langit senja lebih pekat ke arah teal)

#### 3. Cuplikan Berkas Preset XMP (`Golden_Portrait.xmp`)
```xml
<x:xmpmeta xmlns:x="adobe:ns:meta/">
 <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
  <rdf:Description xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/"
   crs:PresetType="Normal"
   crs:Temperature="5850"
   crs:Tint="8"
   crs:Exposure2012="+0.45"
   crs:Highlights2012="-75"
   crs:Shadows2012="+40"
   crs:Whites2012="+15"
   crs:Blacks2012="-12"
   crs:Texture="+10"
   crs:Clarity2012="+4"
   crs:Dehaze="+8"
   crs:Vibrance="+18"
   crs:Saturation="-2">
  </rdf:Description>
 </rdf:RDF>
</x:xmpmeta>
```

#### ✅ Checklist Verifikasi Kualitas Foto:
- [x] Nol kliping highlight pada dahi dan hidung subjek (Histogram aman)
- [x] Rona kulit terisolasi alami tanpa bias hijau rumput
- [x] Tekstur pori-pori kulit terlindungi (tanpa over-smoothing)
- [x] Koreksi profil distorsi dan vinyet lensa aktif
- [x] Masking ketajaman aktif (Alt-drag > 60) agar langit bebas noise
````

---

## 3. Larangan Khusus untuk AI
- **Dilarang Menulis Instruksi Kualitatif Mengambang**: Jangan hanya menulis `"tambahkan sedikit exposure"`; selalu berikan nilai angka presisi (misal: `+0.35 EV`).
- **Dilarang Menghilangkan Nilai HSL Oranye pada Foto Potret**: Selalu spesifikasikan Hue, Saturation, dan Luminance untuk saluran Orange karena merupakan pengendali utama warna kulit manusia.
