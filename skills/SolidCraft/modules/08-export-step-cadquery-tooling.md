# Modul 08: Programmatic Solid Modeling & STEP Exchange

Modul ini menetapkan panduan integrasi alat pemodelan parametrik berbasis kode (*Code-CAD*) menggunakan Python CadQuery / OpenSCAD, standar pertukaran berkas netral STEP (ISO 10303), dan resolusi tessellation mesh STL.

---

## 1. CadQuery (Python OpenCASCADE CAD Framework)

CadQuery adalah framework pemodelan parametrik berbasis Python yang memanfaatkan kernel geometri kelas industri **OpenCASCADE (OCCT)**:

- Menggunakan sintaks berbasis chaining yang bersih:
  ```python
  import cadquery as cq

  # Membuat balok berlubang dengan fillet
  result = (
      cq.Workplane("XY")
      .box(100.0, 60.0, 20.0)
      .faces(">Z")
      .workplane()
      .hole(30.0)
      .edges("|Z")
      .fillet(5.0)
  )

  # Ekspor ke format STEP standar
  cq.exporters.export(result, "bracket.step")
  ```

---

## 2. Standar Protokol Pertukaran Berkas CAD (STEP Protocols)

| Format Protokol | Standar ISO | Deskripsi & Kemampuan |
|---|---|---|
| **STEP AP203** | ISO 10303-203 | Standar geometri benda padat 3D murni dasar (tanpa warna part/layer) |
| **STEP AP214** *(Standar Rekomendasi)* | ISO 10303-214 | Mendukung warna komponen, layer, toleransi GD&T, dan perakitan otomotif |
| **STEP AP242** | ISO 10303-242 | Standar modern paling lengkap: integrasi Model-Based Definition (MBD 3D annotations) |
| **IGES (.igs)** | ANSI | Format permukaan warisan; hindari karena sering menghasilkan *stitched surface errors* |

---

## 3. Kontrol Kualitas Mesh Tessellation (Ekspor STL / 3MF)

Saat mengekspor model solid ke format poligonal untuk 3D printing (STL/3MF):
- **Chord Tolerance (Deviasi Deviasi Permukaan)**: $\le 0.01\text{ mm}$ untuk memastikan lubang silinder bundar tidak menjadi segi banyak kasar (*faceting*).
- **Angular Tolerance**: $\le 5^\circ$ untuk kelengkungan kurva halus.
- **Manifold Check**: Model STL wajib berstatus *Watertight Solid (2-Manifold)* tanpa lubang terbuka, normal terbalik, atau geometri non-manifold.
