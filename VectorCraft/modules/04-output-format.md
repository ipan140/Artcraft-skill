# Modul 04: Standard Output Format & Pipeline Architecture

Modul ini mendefinisikan template baku laporan perancangan grafis vektor di **VectorCraft**, mencakup cetak biru konstruksi geometris (*geometric blueprint*), rincian koordinat path, dan kode SVG produksi bersih mandiri (*clean standalone SVG markup*).

---

## 1. Struktur Baku Laporan VectorCraft

Setiap respons perancangan grafik vektor harus mengikuti urutan berikut:

```markdown
# VectorCraft Technical Specification: [Nama Aset Vektor / Logo / Ikon]

## 1. Parameter Kanvas & Kisi Vektor (Canvas Specs)
- Domain Kategori: [brand-identity-logos / iconography-systems / editorial / custom]
- Ukuran Kanvas Dasar & ViewBox: [e.g., 24x24 px / 512x512 px / 1000x1000]
- Skema Warna: [Hex / sRGB / CMYK Swatches]
- Toleransi Presisi Titik: [2 desimal pembulatan]

## 2. Diagram Cetak Biru Konstruksi Geometri (Mermaid Blueprint)
[Mermaid diagram pembentukan geometri dari lingkaran primitif dasar hingga operasi boolean akhir]

## 3. Rincian Jalur Path Vektor (Path Geometry Breakdown)
- Path 1: [Fungsi bentuk, perintah d="..." SVG, status fill/stroke]
- Path 2: [Relasi boolean terhadap Path 1]
- Penggunaan Anchor Extrema & Nilai Radius

## 4. Kode SVG Produksi Bersih (Clean SVG Code Block)
[Kode lengkap mandiri SVG 1.1/2.0 yang valid, teroptimasi, tanpa tag editor pihak ketiga]

## 5. Panduan Implementasi & Skalabilitas (Usage Guide)
- Skala minimum yang diizinkan (e.g. 16px favicon)
- Variasi warna monokrom (hitam di atas putih, putih di atas hitam)

## 6. Checklist Verifikasi & Kualitas Vektor
- [ ] Checklist anchor economy, snapping grid, dan teks-ke-outlines
```

---

## 2. Contoh Diagram Konstruksi Geometri (Mermaid)

```mermaid
graph TD
    Grid[Grid Kanvas 512x512 px Origin Center 256,256] --> C1[Lingkaran Luar R=200px]
    Grid --> C2[Lingkaran Dalam R=120px]
    Grid --> Rect1[Kotak Persegi Pemotong 45°]
    
    C1 & C2 --> SUB1[Operasi Boolean: Minus Front C2 dari C1]
    SUB1 --> RING[Bentuk Cincin Flensa]
    
    RING & Rect1 --> SUB2[Operasi Boolean: Potong Sayap Sudut Kanan]
    SUB2 --> FINAL_PATH[Jalur Vektor Tunggal Bersih: d='M... C... Z']
    FINAL_PATH --> SVG_OUT((Aset Logo Teroptimasi SVG))
```
