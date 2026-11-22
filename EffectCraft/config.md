# EffectCraft Configuration (Panel Kendali VFX & Motion Graphics)

Dokumen ini adalah saklar konfigurasi efek visual dan compositing di **EffectCraft**.

---

## 🎛️ Pengaturan Aktif

```yaml
# ========================================================
# 1. RESOLUSI & COLORSPACE COMPOSITING
# ========================================================
canvas_resolution: "4k_uhd"     # 1080p | 4k_uhd (3840x2160) | dci_4k
framerate: 24.0
working_bit_depth: 32           # 16-bit float | 32-bit float (linear compositing)
color_management: "aces_cg"     # aces_cg | linear_srgb | rec709

# ========================================================
# 2. OPERASI SIMPUL (NODE GRAPH)
# ========================================================
pipeline:
  keying_algorithm: "despill_chroma" # despill_chroma | difference_key | luma_key
  tracking_mode: "planar_3d"    # point_tracker | planar_3d | camera_solver
  motion_blur_samples: 16
  render_channels:
    - "diffuse"
    - "specular"
    - "ambient_occlusion"
    - "depth_z"
    - "motion_vectors"
```
