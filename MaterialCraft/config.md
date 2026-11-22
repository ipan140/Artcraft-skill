# MaterialCraft Configuration (Panel Kendali Material Prosedural)

Dokumen ini adalah saklar konfigurasi pembuatan material PBR di **MaterialCraft**.

---

## 🎛️ Pengaturan Aktif

```yaml
# ========================================================
# 1. STANDAR SHADING PBR
# ========================================================
workflow: "metallic_roughness"  # metallic_roughness | specular_glossiness
texture_resolution: 4096        # 1024 | 2048 | 4096 (4K) | 8192 (8K)
normal_map_format: "directx"    # directx (-Y) | opengl (+Y)
seamless_tiling: true

# ========================================================
# 2. EKSPOR TARGET MESIN
# ========================================================
export_preset: "unreal_engine_5" # unreal_engine_5 | blender_cycles | unity_urp | gltf
```
