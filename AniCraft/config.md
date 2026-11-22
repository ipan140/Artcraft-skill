# AniCraft Configuration (Panel Kendali Animasi Vektor 2D)

Dokumen ini adalah saklar konfigurasi spesifik untuk proyek animasi vektor 2D di **AniCraft**.

---

## 🎛️ Pengaturan Aktif

```yaml
# ========================================================
# 1. CANVAS & RESOLUSI TIMELINE
# Pilihan: 1080p_fhd (1920x1080) | 4k_uhd | square_1_1 (1080x1080) | vertical_9_16 (1080x1920) | custom
# ========================================================
canvas_preset: "1080p_fhd"

# Frame rate: 24 (Sinematik) | 30 (Standar Web/UI) | 60 (Ultra Smooth / Gaming)
framerate: 30

# Durasi default animasi (dalam detik atau frames)
duration_seconds: 3.0

# ========================================================
# 2. INTERPOLASI & KURVA EASING
# ========================================================
motion:
  default_easing: "cubic_bezier"     # linear | cubic_bezier | spring | bounce | hold
  bezier_curves:
    ease_out: [0.16, 1, 0.3, 1]      # Sangat cepat di awal, melambat lembut di akhir
    ease_in: [0.7, 0, 0.84, 0]       # Mulai perlahan, melesat di akhir
    ease_in_out: [0.65, 0, 0.35, 1]  # Halus di awal dan akhir
    anticipation_overshoot: [0.34, 1.56, 0.64, 1] # Efek membal (pop/bounce)
  snap_to_pixel_grid: true           # Mencegah blur pada tepi vektor saat bergerak

# ========================================================
# 3. FITUR RIGGING & VEKTOR
# ========================================================
vector_settings:
  allow_path_morphing: true          # Mengubah bentuk path titik-demi-titik
  match_vertex_count: true           # Otomatis cocokkan jumlah node saat morphing
  enable_2d_bone_rigging: false      # Rigging kerangka untuk animasi karakter
  use_inverse_kinematics: false      # IK untuk pergerakan kaki/tangan alami

# ========================================================
# 4. EKSPOR & DELIVERY
# ========================================================
export:
  primary_format: "lottie_json"      # lottie_json | dot_lottie | animated_svg | mp4 | gif
  compress_lottie: true              # Optimasi file JSON (hapus metadata berlebih)
  embed_fonts: true
  transparent_background: true
```
