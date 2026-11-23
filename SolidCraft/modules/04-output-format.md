# Modul 04: Standard Output Format & Pipeline Architecture

Modul ini mendefinisikan template baku laporan perancangan benda padat parametrik di **SolidCraft**, mencakup diagram alir pohon fitur (*feature tree*), tabel parameter rekayasa, dan kode implementasi parametrik (Python CadQuery / OpenSCAD).

---

## 1. Struktur Baku Laporan SolidCraft

Setiap respons perancangan model solid 3D harus mengikuti urutan berikut:

```markdown
# SolidCraft Engineering Specification: [Nama Komponen / Perakitan]

## 1. Parameter Desain & Manufaktur (Engineering Specs)
- Metode Manufaktur: [CNC Machined / Injection Molded / 3D Printed / Sheet Metal]
- Material & Massa Jenis: [Aluminium 6061-T6 / ABS Plastic / Stainless 304]
- Satuan Kerja: [Millimeters, Linear Precision 0.001]
- Kelas Toleransi: [ISO 2768-m (Medium) / ISO 286 Fit Class]

## 2. Diagram Pohon Fitur Rekayasa (Feature Tree Diagram)
[Mermaid diagram urutan langkah dari Datum Planes hingga Cosmetic Fillets]

## 3. Tabel Parameter Sketsa & Dimensi (Parametric Table)
- Nama Variabel: [e.g., `bore_diameter`, `wall_thickness`, `flange_pcd`]
- Nilai Nominal & Toleransi: [e.g., `50.0 mm H7 (+0.030/-0.000)`]
- Relasi Persamaan: [e.g., `pcd = bore_diameter + 30.0`]

## 4. Skrip Automasi Parametrik (Python CadQuery / OpenSCAD Code)
[Kode lengkap mandiri yang dapat langsung dieksekusi untuk menghasilkan geometri solid STEP / STL]

## 5. Analisis DFM & Catatan Manufaktur (Manufacturing Notes)
- Tooling clearance & draft validation
- Rekomendasi penjepitan ragum / orientasi cetak

## 6. Checklist Verifikasi Rekayasa Solid
- [ ] Checklist kendala penuh, eliminasi sudut tajam, dan kepatuhan STEP
```

---

## 2. Contoh Diagram Pohon Fitur (Mermaid)

```mermaid
graph TD
    Plane[Top Datum Plane XY] --> Sk1[Sketsa 1: Kontur Flensa PCD - Fully Constrained]
    Sk1 --> F1[Fitur 1: Base Extrude Boss 18mm]
    F1 --> Sk2[Sketsa 2: Lubang Poros Tengah]
    Sk2 --> F2[Fitur 2: Extrude Cut Through-All H7]
    F2 --> Sk3[Sketsa 3: Pola Lubang Baut M6 x 6 Baut]
    Sk3 --> F3[Fitur 3: Circular Pattern Hole Wizard M6]
    F3 --> F4[Fitur 4: O-Ring Groove Revolve Cut]
    F4 --> F5[Fitur 5: Fillet Transisi R2.5mm]
    F5 --> F6[Fitur 6: Chamfer Masuk Pahat 1.0mm x 45°]
```
