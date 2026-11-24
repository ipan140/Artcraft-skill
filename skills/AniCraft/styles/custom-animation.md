# Style Profile: Custom Vector Animation Pipeline

Template ini digunakan untuk merancang pipeline animasi vektor 2D kustom baru (misalnya: animasi banner iklan HTML5 interaktif, simulator fisika partikel gerak, animasi infografis dashboard keuangan, atau video explainer hybrid).

---

## 1. Deklarasi Parameter Proyek Animasi

```yaml
animation_name: "custom_vector_motion"
target_medium: "web_lottie" # web_lottie | video_mp4 | svg_smil | remotion
canvas:
  preset: "1080p_fhd" # 1080p_fhd (1920x1080) | square_1_1 (1080x1080) | vertical_9_16
  width_px: 1920
  height_px: 1080
  framerate_fps: 60
  duration_seconds: 5.0
  total_frames: 300

physics:
  default_easing: "cubic-bezier(0.16, 1, 0.3, 1)"
  enable_motion_blur: false
  loop_animation: true
```

---

## 2. Diagram Alir Tahapan Produksi

```
[Aset Vektor SVG Terpisah Layer] ──┐
                                   ├──> [Rigging & Penempatan Anchor] ──> [Keyframing Pose-to-Pose] ──> [Penyelarasan Graph Editor]
[Naskah / Storyboard Waktu] ───────┘                                                                             │
                                                                                                                 ▼
                                                                                                   [Ekspor Lottie JSON / MP4]
```

---

## 3. Matriks Pengendali Modul Aktif

1. **Interpolasi Simpul**: Pastikan path morphing memiliki jumlah node titik simpul yang sama persis.
2. **Optimasi Lottie**: Bersihkan keyframe ganda pada frame yang tidak mengalami perubahan nilai.
3. **Penyelarasan Loop**: Pastikan nilai transformasi pada frame terakhir sama persis dengan frame awal ($F_{\text{end}} = F_0$).
