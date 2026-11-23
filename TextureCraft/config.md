# TextureCraft Configuration (Panel Pengecatan Tekstur 3D & Baking)

Dokumen ini adalah saklar konfigurasi utama untuk pengecatan tekstur 3D, pemanggangan peta geometri mesh (*high-to-low baking*), tata letak multi-tile UDIM, dan ekspor kemasan ORM di **TextureCraft**.

---

## 🎛️ Pengaturan Aktif (Active Configurations)

```yaml
# ========================================================
# 1. PEMILIHAN TIPE ASET TARGET (Asset Target Selector)
# ========================================================
# Pilih salah satu profil target dari folder assets/:
# - hard-surface-props
# - organic-characters
# - stylized-handpainted
# - custom-texture-asset
target_asset: "hard-surface-props"

# ========================================================
# 2. RESOLUSI & TATA LETAK UV (UV Architecture)
# ========================================================
texture_resolution: 4096             # 1024 | 2048 | 4096 (4K) | 8192 (8K)
uv_layout_mode: "udim"               # standard_0_1 | udim (multi-tile)
texel_density_target_px_cm: 20.48    # Kerapatan teksel nominal (40.96 untuk first-person weapon)
uv_padding_dilation_px: 16           # Jarak aman antarpulau UV
symmetry_painting: true

# ========================================================
# 3. PETA GEOMETRI MESH (Baked Mesh Maps)
# ========================================================
baking:
  match_by_name: true                # Pisahkan baking by _low dan _high mesh names
  antialiasing: "subsampling_4x4"
  normal_map_format: "directx"       # directx (-Y) | opengl (+Y)
  baked_maps:
    - "ambient_occlusion"
    - "curvature"
    - "world_space_normal"
    - "position"
    - "thickness"
    - "id_map"

# ========================================================
# 4. PRESET EKSPOR ENGINE
# ========================================================
export_target: "unreal_engine_5"     # unreal_engine_5 (ORM) | unity_hdrp (MaskMap) | blender | gltf
channel_packing: "unreal_orm"        # R: AO, G: Roughness, B: Metallic

# ========================================================
# 5. AKTIVASI MODUL (Module Switches)
# ========================================================
modules_enabled:
  01_uv_unwrapping_udim_strategy: true
  02_mesh_map_baking_pipeline: true
  03_smart_materials_anchor_points: true
  04_output_format: true
  05_smart_masks_edge_wear_dirt: true
  06_decals_stencils_hard-surface: true
  07_subsurface_skin_translucency: true
  08_export_packing_engine_presets: true
```

---

## 🛠️ Panduan Penggunaan Konfigurasi
1. Tentukan `target_asset` sesuai dengan jenis model 3D yang sedang dikerjakan (misal: `hard-surface-props` untuk senjata atau `organic-characters` untuk karakter).
2. Aktifkan `uv_layout_mode: "udim"` jika aset memiliki lebih dari satu ubin UV (UDIM 1001, 1002, dst).
3. Jalankan penyusunan tumpukan layer dan baking peta geometri mengikuti panduan di folder `modules/`.
