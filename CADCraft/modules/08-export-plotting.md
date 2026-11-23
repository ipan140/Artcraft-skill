# Modul 08: Ekspor, Skala Cetak & Pengaturan Plotting (Plotting & Sheet Layout)

Modul ini menetapkan ukuran kertas standar internasional (ISO seri A & ANSI seri A-E), margin batas gambar, skala viewport, konfigurasi pen table (`.ctb`), dan format berkas ekspor (*DXF, DWG, PDF Vektor*).

---

## 1. Ukuran Kertas & Margin Lembar Kerja

### 1.1 Ukuran Lembar ISO Seri A (Metrik)

| Format Kertas | Dimensi Bersih ($L \times T$ mm) | Margin Kiri (Jilid) | Margin Atas/Kanan/Bawah |
| :---: | :---: | :---: | :---: |
| **A4** | `210 x 297 mm` (Tegak / Portait) | `20 mm` | `10 mm` (atau `5 mm`) |
| **A3** | `420 x 297 mm` (Lanskap) | `20 mm` | `10 mm` |
| **A2** | `594 x 420 mm` (Lanskap) | `20 mm` | `10 mm` |
| **A1** | `841 x 594 mm` (Lanskap) | `20 mm` | `10 mm` |
| **A0** | `1189 x 841 mm` (Lanskap) | `20 mm` | `10 mm` |

> Margin kiri selalu berukuran `20 mm` untuk memberi ruang saat lembar gambar dilubangi (*punch hole*) atau dijilid ke dalam map arsip teknik resmi (*drawing binder*).

---

## 2. Pengaturan Skala Gambar & Viewport Cetak

Model geometri di ruang kerja (*Modelspace*) **selalu digambar dengan skala 1:1 (ukuran asli fisik sesungguhnya)**. Penyesuaian skala hanya dilakukan pada Viewport di ruang tata letak (*Paperspace / Layout*):

- **Skala Pembesaran**: `2:1`, `5:1`, `10:1` (khusus komponen kecil presisi, jam tangan, instrumen mikro).
- **Skala Penuh**: `1:1` (komponen mesin ukuran sedang).
- **Skala Pengecilan Mekanikal**: `1:2`, `1:5`, `1:10`, `1:20`.
- **Skala Bangunan & Gedung**: `1:50`, `1:100`, `1:200`.
- **Skala Wilayah / Tata Lahan / Sipil**: `1:500`, `1:1000`, `1:5000`.

---

## 3. Pen Table Style (Color-Dependent Plot Style - `.ctb`)

Gunakan pen style monokrom baku untuk memastikan gambar dicetak tajam dengan warna hitam pekat dan ketebalan garis presisi:

```text
Warna AutoCAD 1 (Merah)   -> Dicetak Hitam, Lineweight: 0.25 mm (Garis Sumbu / Center)
Warna AutoCAD 2 (Kuning)  -> Dicetak Hitam, Lineweight: 0.35 mm (Teks / Catatan)
Warna AutoCAD 3 (Hijau)   -> Dicetak Hitam, Lineweight: 0.25 mm (Dimensi Ukuran)
Warna AutoCAD 4 (Cyan)    -> Dicetak Hitam, Lineweight: 0.25 mm (Garis Tersembunyi)
Warna AutoCAD 6 (Magenta) -> Dicetak Hitam, Lineweight: 0.70 mm (Garis Potongan Utama)
Warna AutoCAD 7 (Putih)   -> Dicetak Hitam, Lineweight: 0.50 mm (Kontur Benda Tampak)
Warna AutoCAD 8 (Abu-abu) -> Dicetak Abu-abu 50%, Lineweight: 0.18 mm (Arsiran Penampang)
```

---

## 4. Format Berkas Ekspor (Export Standards)
1. **DXF (Drawing Exchange Format)**:
   - Format standar interoperabilitas universal antar software CAD (AutoCAD, FreeCAD, SolidWorks, LibreCAD, CNC CAM).
   - Simpan dalam versi **AutoCAD 2010 / R2010 DXF** untuk kompatibilitas maksimum tanpa merusak entitas dimensi dan teks.
2. **PDF Vektor Teknis**:
   - Ekspor harus mempertahankan layer vektor (*searchable text and vector line art*), bukan raster piksel gambar kompresi (*raster image*).
   - DPI Plotter minimum: `600 DPI s/d 1200 DPI` untuk memastikan garis tipis 0.18mm tidak terputus saat dicetak di mesin plotter blueprint.
