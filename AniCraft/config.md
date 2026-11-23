# AniCraft Configuration (Panel Kendali Animasi Vektor & Linimasa)

Dokumen ini adalah saklar konfigurasi utama untuk perancangan animasi gerak vektor 2D, pengaturan linimasa keyframe, kurva pelambatan Bézier, dan ekspor Lottie di **AniCraft**.

---

## 🎛️ Pengaturan Aktif (Active Configurations)

```yaml
# ========================================================
# 1. PEMILIHAN GAYA ANIMASI (Style Target Selector)
# ========================================================
# Pilih salah satu profil target dari folder styles/:
# - ui-micro-interactions
# - motion-graphics
# - character-animation
# - custom-animation
target_style: "ui-micro-interactions"

# ========================================================
# 2. KANVAS & LINIMASA (Canvas & Timeline Setup)
# ========================================================
canvas:
  preset: "square_1_1"               # 1080p_fhd (1920x1080) | square_1_1 (1080x1080) | vertical_9_16
  width_px: 1080
  height_px: 1080
  framerate_fps: 60                  # 60 (UI/Digital) | 30 (Web) | 24 (Sinematik/Kartun)
  default_duration_sec: 1.5          # Durasi standar animasi mikro

# ========================================================
# 3. FISIKA & KURVA PELAMBATAN (Physics & Easing Curves)
# ========================================================
physics:
  default_easing: "cubic-bezier(0.16, 1, 0.3, 1)" # Ultra smooth ease-out
  enable_spring: true                # Simulasi pantulan pegas halus
  bounce_damping: 15
  stiffness: 120
  respect_reduced_motion: true       # Dukung aksesibilitas sistem pengguna

# ========================================================
# 4. AKTIVASI MODUL (Module Switches)
# ========================================================
modules_enabled:
  01_timeline_keyframing_principles: true
  02_easing_curves_graph_editor: true
  03_path_morphing_vector_shapes: true
  04_output_format: true
  05_lottie_json_optimization: true
  06_parenting_rigging_anchor_points: true
  07_svg_smil_web_animation: true
  08_export_video_codecs_tooling: true

# ========================================================
# 5. PROTOKOL EKSPOR FORMAT
# ========================================================
export:
  primary_format: "lottie_json"      # lottie_json | dotlottie | mp4_h264 | svg_smil | remotion
  compress_dotlottie: true           # Kompresi ZIP 80% lebih kecil
  bake_transforms: false             # Jangan hancurkan hierarki parenting
  max_json_file_size_kb: 25.0
```

---

## 🛠️ Panduan Penggunaan Konfigurasi
1. Tentukan `target_style` sesuai kebutuhan proyek (misal: `ui-micro-interactions` untuk tombol dan ikon, atau `motion-graphics` untuk video promosi).
2. Pertahankan `framerate_fps: 60` untuk menjamin animasi antarmuka yang sangat mulus pada layar modern.
3. Jalankan penyusunan keyframe linimasa dan pembuatan komponen gerak mengikuti panduan di folder `modules/`.
