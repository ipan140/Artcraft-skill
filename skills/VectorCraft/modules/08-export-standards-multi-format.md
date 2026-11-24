# Modul 08: Multi-Format Vector Export & Delivery Standards

Modul ini menetapkan protokol ekspor berkas aset vektor ke berbagai format industri: SVG untuk web, EPS untuk sablon/merchandise, PDF/X vektor untuk percetakan komersial, dan rasterisasi resolusi tinggi (PNG 1x/2x/3x).

---

## 1. Paket Pengiriman Master Aset (The Brand Master Package)

Setiap pengiriman logo atau aset vektor resmi wajib menyertakan struktur folder pengiriman 4 format:

```
[Asset_Package_Delivery/]
    ├── SVG/ (Skalabel web interaktif, fill='currentColor' untuk ikon)
    ├── EPS/ (Format PostScript netral untuk vendor bordir/sablon/cutting)
    ├── PDF_Vector/ (PDF/X-4 dengan font kurva tertanam untuk cetak offset)
    └── PNG_Raster/ (Latar transparan 300 DPI dalam resolusi @1x, @2x, @3x)
```

---

## 2. Standar Format Ekspor Teknis

| Format Berkas | Standar Teknis | Ruang Warna | Kasus Penggunaan Ideal |
|---|---|---|---|
| **SVG (Scalable Vector Graphics)** | SVG 1.1 / SVG 2.0 (UTF-8) | sRGB | Web, UI aplikasi mobile (React / Flutter), animasi CSS |
| **EPS (Encapsulated PostScript)** | EPS Level 3, Text outlined | CMYK / Pantone | Mesin cutting plotter, bordir tekstil, sablon kaos |
| **PDF Vektor (High-Res Print)** | ISO 15930-7 (PDF/X-4) | CMYK | Brosur, kartu nama, papan reklame billboard |
| **PNG (Raster Transparency)** | PNG-24 Alpha 300 DPI | sRGB | Penggunaan cepat pada Microsoft PowerPoint / Word |

---

## 3. Kepatuhan Warna Monokrom & Kontras Balik

Aset logo vektor resmi harus selalu diuji dan disertakan dalam 4 versi palet warna:
1. **Full Color**: Versi palet warna primer resmi merek.
2. **Monochrome Black**: Versi hitam pekat ($100\%$ K) di atas latar putih untuk pencetakan dokumen faks/stempel cap.
3. **Monochrome White (Inverted)**: Versi putih bersih ($0\%$ warna) di atas latar belakang gelap/foto.
4. **Grayscale**: Versi gradasi abu-abu untuk media cetak surat kabar hitam-putih.
