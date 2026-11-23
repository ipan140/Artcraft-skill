# Asset Profile: Custom Multi-UDIM 3D Asset Template

Template ini digunakan untuk merancang pipeline pengecatan tekstur 3D kustom pada model berskala besar yang membutuhkan pembagian banyak ubin UV (*Multi-Tile UDIM Layout*), seperti set lingkungan sinematik atau robot mecha raksasa.

---

## 1. Deklarasi Parameter Aset & Peta UV

```yaml
asset_name: "custom_3d_production_asset"
category: "multi_udim_hero"
texturing_engine: "substance_3d_painter"

uv_architecture:
  layout_mode: "udim"
  tile_count: 4
  tile_range: [1001, 1004]
  texel_density_target_px_cm: 20.48
  uv_padding_dilation_px: 16

baking_setup:
  high_poly_source: true
  antialiasing: "subsampling_4x4"
  match_by: "mesh_name" # match_by: mesh_name (_low / _high)
  maps_to_bake:
    - "tangent_normal"
    - "world_space_normal"
    - "ambient_occlusion"
    - "curvature"
    - "position"
    - "thickness"
    - "material_id"
```

---

## 2. Struktur Pembagian Ubin UDIM

| Indeks Tile | Penamaan Sub-Sistem Model | Alokasi Resolusi |
|---|---|---|
| **1001** | `Head / Cockpit / Primary Hero Focus` | 4096 x 4096 (4K) |
| **1002** | `Torso / Main Chassis Frame` | 4096 x 4096 (4K) |
| **1003** | `Limbs / Mechanical Actuators` | 2048 x 2048 (2K) |
| **1004** | `Accessories / Stencils / Hydraulics` | 2048 x 2048 (2K) |

---

## 3. Matriks Pengendali Modul Aktif

1. **UV Padding**: Wajib minimal 16 piksel untuk mencegah artefak garis jahitan (*seam bleed*) pada mipmap level 3 ke atas.
2. **Anchor Points**: Gunakan Anchor Points untuk membagikan detail height dari satu layer ke layer mask di atasnya.
3. **Ekspor Engine**: Pastikan pengemasan saluran ORM selaras dengan standar pipeline render studio.
