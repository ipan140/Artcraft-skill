# MaterialCraft Configuration (Panel Kendali Material Prosedural)

Dokumen ini adalah saklar konfigurasi utama untuk perancangan dan sintesis material PBR prosedural di **MaterialCraft**.

---

## 🎛️ Pengaturan Aktif (Active Configurations)

```yaml
# ========================================================
# 1. PEMILIHAN PROFIL MATERIAL (Surface Target Selector)
# ========================================================
# Pilih salah satu profil target dari folder materials/:
# - metals-weathered
# - dielectrics-stone-concrete
# - organics-wood-fabric
# - custom-material
target_material: "metals-weathered"

# ========================================================
# 2. STANDAR FISIKA PBR & ENGINE TARGET
# ========================================================
pbr_workflow: "metallic_roughness"     # metallic_roughness | specular_glossiness
texture_resolution: 4096               # 1024 | 2048 | 4096 (4K) | 8192 (8K)
normal_map_format: "directx"           # directx (-Y) | opengl (+Y)
channel_packing: "unreal_orm"          # unreal_orm (R:AO, G:Rough, B:Metal) | unity_maskmap | gltf_standard
seamless_tiling: true
target_engine: "unreal_engine_5"       # unreal_engine_5 | blender_cycles | unity_urp | gltf

# ========================================================
# 3. AKTIVASI MODUL (Module Switches)
# ========================================================
modules_enabled:
  01_pbr_workflow_theory: true
  02_height_displacement_sculpting: true
  03_normal_curvature_generation: true
  04_output_format: true
  05_color_albedo_tinting: true
  06_roughness_micro_surface: true
  07_channel_packing_optimization: true
  08_engine_integration_shaders: true

# ========================================================
# 4. PREFERENSI KUALITAS PERMUKAAN
# ========================================================
preferences:
  dielectric_f0: 0.04
  prevent_albedo_clipping: true        # Batasi sRGB antara 30 hingga 240
  subsurface_scattering: false
  anisotropy: false
  clearcoat_layer: false
  micro_grunge_intensity: 0.35
```

---

## 🛠️ Panduan Penggunaan Konfigurasi
1. Tetapkan `target_material` sesuai dengan jenis permukaan yang ingin dibuat (misal: `dielectrics-stone-concrete` untuk marmer atau aspal).
2. Tentukan `normal_map_format` sesuai pipeline game engine Anda: `directx` untuk Unreal Engine 5 atau `opengl` untuk Blender dan glTF Web 3D.
3. Jalankan sintesis material dengan mengikuti modul-modul aktif di folder `modules/`.
