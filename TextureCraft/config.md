# TextureCraft Configuration (Panel Pengecatan Tekstur 3D)

Dokumen ini adalah saklar konfigurasi pengecatan tekstur pada model 3D di **TextureCraft**.

---

## 🎛️ Pengaturan Aktif

```yaml
# ========================================================
# 1. RESOLUSI & UDIM
# ========================================================
texture_resolution: 4096        # 2048 | 4096 (4K)
uv_layout_mode: "udim"          # standard_0_1 | udim (multi-tile)
symmetry_painting: true

# ========================================================
# 2. PETA GEOMETRI (BAKED MAPS)
# ========================================================
baked_maps:
  - "ambient_occlusion"
  - "curvature"
  - "world_space_normal"
  - "thickness"

# ========================================================
# 3. PRESET EKSPOR
# ========================================================
export_target: "unreal_engine_5" # unreal_engine_5 | blender | unity
```
