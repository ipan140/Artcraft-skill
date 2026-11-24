# Master Configuration (Panel Kendali Sentral CADCraft)

Dokumen ini berfungsi sebagai panel kendali utama untuk **CADCraft Skill**. Ubah konfigurasi di bawah ini untuk mengarahkan AI ke target disiplin teknik, standar drafting (ISO/ASME), modul aktif, sistem layer, dan format keluaran CAD.

---

## 🎛️ Konfigurasi Aktif

```yaml
# ========================================================
# 1. TARGET DISIPLIN TEKNIK (DISCIPLINE TARGET)
# Pilihan: mechanical | architectural | civil-structural | custom-discipline
# ========================================================
target_discipline: "mechanical"

# Jika memilih 'custom-discipline', tentukan jenisnya di bawah:
# Pilihan: piping-mep | electrical-schematic | hvac | surveyor-topography
custom_discipline_type: "piping-mep"

# ========================================================
# 2. STANDAR & METROLOGI CAD
# ========================================================
cad_standards:
  standard: "iso"                 # iso (metrik) | asme-ansi (imperial) | din | jis
  unit: "millimeters"             # millimeters | meters | inches | feet
  precision_decimals: 3           # Presisi desimal (0.001 mm / 0.0001 in)
  projection_angle: "third_angle" # third_angle (AS/Asia) | first_angle (Eropa)
  code_engine: "python-ezdxf"     # python-ezdxf | autolisp | dxf-ascii | openscad

# ========================================================
# 3. MODUL AKTIF (MODULE SWITCHES)
# Set true untuk mengaktifkan, false untuk melewati
# ========================================================
modules_enabled:
  standards_layers: true          # modules/01-standards-layers.md (Layer, Tebal Garis, Linetype)
  projection_views: true          # modules/02-projection-views.md (Proyeksi 1st/3rd, Potongan, Isometrik)
  dimensioning_gdt: true          # modules/03-dimensioning-gdt.md (Dimensi, GD&T, Toleransi ISO 286)
  output_format: true             # modules/04-output-format.md (Template Spesifikasi & Script CAD)
  title_block_bom: true           # modules/05-title-block-bom.md (Etiket ISO 7200, BOM, Kolom Revisi)
  blocks_symbols: true            # modules/06-blocks-symbols.md (Simbol Las, Finishing ISO 1302, Blok)
  annotations_hatching: true      # modules/07-annotations-hatching.md (Arsir ISO 128-50, Teks, Callouts)
  export_plotting: true           # modules/08-export-plotting.md (Sheet A0-A4, Skala Cetak, Pen Table)

# ========================================================
# 4. PREFERENSI & ATRIBUT DRAFTING
# ========================================================
preferences:
  sheet_size: "A3"                # A4 | A3 | A2 | A1 | A0 | ANSI-B | ANSI-D
  scale: "1:1"                    # 1:1 | 1:2 | 1:5 | 1:10 | 1:20 | 1:50 | 1:100
  include_title_block: true       # Tambahkan kepala gambar / etiket standar resmi
  include_bom_table: true         # Buat daftar komponen (Bill of Materials)
  strictness: "strict"            # strict (toleransi ketat) | balanced | permissive
  refer_to_examples: true         # Wajib mengacu ke examples/mechanical-flange-example.md
```

---

## 📖 Petunjuk untuk Pengguna
1. **Ganti Target Disiplin**: Ubah `target_discipline` ke `"mechanical"`, `"architectural"`, `"civil-structural"`, atau `"custom-discipline"` sebelum meminta AI membuat gambar teknik.
2. **Kustomisasi Standar**: Sesuaikan `standard` (ISO atau ASME) dan `projection_angle` (First Angle atau Third Angle) sesuai kebutuhan workshop atau klien Anda.
3. **Aktifkan / Matikan Modul**: Atur nilai di `modules_enabled` menjadi `false` jika tidak diperlukan dalam proyek tertentu.
