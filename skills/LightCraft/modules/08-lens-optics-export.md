# Modul 08: Koreksi Optik Lensa & Standar Ekspor (Optics Corrections & Export Standards)

Modul ini menetapkan koreksi profil lensa otomatis (*Lens Profiles*), pembersihan garis aberasi kromatik (*Defringe*), penulisan berkas preset Adobe XMP XML, serta standar kompresi ekspor master (*16-bit TIFF vs JPEG sRGB*).

---

## 1. Koreksi Karakteristik Lensa (Optics Panel)

Setiap lensa kamera memiliki cacat optik fisik alami yang harus dinetralkan di awal alur kerja:

1. **Remove Chromatic Aberration (Hapus Aberasi Kromatik)**:
   - **Wajib selalu dicentang**.
   - Otomatis mendeteksi dan menghapus garis tipis ungu (*purple fringing*) dan hijau di tepian objek berkontras tinggi (seperti ranting pohon di depan langit terang).
2. **Enable Profile Corrections (Aktifkan Koreksi Profil)**:
   - Software akan membaca metadata EXIF lensa kamera (Sony G-Master, Canon L-Series, Nikon Z, Fujifilm XF, Sigma Art).
   - **Distortion Correction**: Meluruskan garis cembung barrel pada lensa sudut lebar.
   - **Vignetting Correction**: Mencerahkan kembali sudut-sudut foto yang gelap akibat keterbatasan fisik diameter lensa kaca.
3. **Manual Defringe (Pembersihan Manual)**:
   - Jika fringing ungu membandel masih tersisa pada perhiasan logam atau kacamata, gunakan pipet *Defringe Eyedropper* pada warna ungu tersebut dan atur `Purple Amount: 3 s/d 5`.

---

## 2. Struktur Berkas Preset Eksternal XMP (Adobe Camera Raw / Lightroom)

Berkas `.xmp` adalah format teks XML standar terbuka untuk menyimpan resep pengeditan RAW secara independen:

```xml
<x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="Adobe XMP Core 7.0">
 <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
  <rdf:Description xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/"
   crs:PresetType="Normal"
   crs:Cluster=""
   crs:UUID="LIGHTCRAFT-PRESET-UUID-2026"
   crs:SupportsAmount2="True"
   crs:ProcessVersion="15.4"
   crs:WhiteBalance="Custom"
   crs:Temperature="5600"
   crs:Tint="+6"
   crs:Exposure2012="+0.30"
   crs:Contrast2012="+12"
   crs:Highlights2012="-60"
   crs:Shadows2012="+35"
   crs:Whites2012="+10"
   crs:Blacks2012="-8"
   crs:Texture="+12"
   crs:Clarity2012="+4"
   crs:Dehaze="+5"
   crs:Vibrance="+15"
   crs:Saturation="-2"
   crs:ParametricShadows="-10"
   crs:ParametricDarks="-5"
   crs:ParametricLights="+8"
   crs:ParametricHighlights="-15"
   crs:Sharpness="50"
   crs:SharpenRadius="+0.9"
   crs:SharpenDetail="25"
   crs:SharpenEdgeMasking="75"
   crs:LuminanceSmoothing="15"
   crs:ColorNoiseReduction="25"
   crs:AutoLateralCA="1"
   crs:LensProfileEnable="1">
  </rdf:Description>
 </rdf:RDF>
</x:xmpmeta>
```

---

## 3. Matriks Standar Ekspor Berkas Gambar (Export Master Standards)

| Tujuan Ekspor | Format Berkas | Ruang Warna | Kedalaman Bit | Kualitas / Kompresi |
| :--- | :--- | :--- | :--- | :--- |
| **Media Sosial & Web** (Instagram, Web) | `JPEG (.jpg)` | **sRGB** (Wajib) | 8-bit | Kualitas: `85% - 90%`, Resolusi: `2048px` sisi panjang. |
| **Cetak Fine-Art & Galeri** | `TIFF (.tif)` | **Adobe RGB / ProPhoto** | **16-bit** | Tanpa kompresi (LZW), Resolusi penuh 300 DPI. |
| **Pertukaran Arsip Klien Mentah** | `Adobe DNG (.dng)`| Raw Sensor Asli | 14-bit / 16-bit | Embed Fast Load Data, Lossless Compression. |

> [!WARNING]
> Jangan pernah mengekspor foto untuk media sosial/web menggunakan ruang warna *Adobe RGB* atau *ProPhoto RGB*. Browser ponsel konsumen akan gagal menerjemahkan profil warna tersebut, menyebabkan foto Anda tampak pucat, kusam, dan abu-abu kehijauan saat diunggah ke Instagram.
