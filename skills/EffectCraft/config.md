# Master Configuration (Panel Kendali VFX & Node Graph Compositing)

Dokumen ini berfungsi sebagai panel kendali utama untuk **EffectCraft Skill**. Ubah konfigurasi di bawah ini untuk mengarahkan AI ke tipe shot VFX (Green Screen Keying, CG Multi-Pass, Tracking & Cleanup), resolusi kanvas, pipeline warna ACEScg / Linear 32-bit float, modul aktif, serta format script simpul (*Nuke script, Fusion comp, atau Python OpenTimelineIO*).

---

## 🎛️ Konfigurasi Aktif

```yaml
# ========================================================
# 1. TIPE SHOT & PIPELINE VFX (SHOT ARCHETYPE)
# Pilihan: green-screen-keying | cg-multipass-comp | tracking-cleanup-plate | custom-vfx
# ========================================================
target_shot: "green-screen-keying"

# Jika memilih 'custom-vfx', tentukan jenisnya di bawah:
# Pilihan: particle-simulation | sci-fi-energy-blast | motion-graphics-title | deep-compositing
custom_vfx_type: "particle-simulation"

# ========================================================
# 2. RESOLUSI & MANAJEMEN WARNA KELAS FILM
# ========================================================
render_pipeline:
  canvas_resolution: "4k_uhd"     # 1080p | 4k_uhd (3840x2160) | dci_4k (4096x2160)
  framerate: 24.0                 # 23.976 | 24.0 | 25.0 | 29.97 | 60.0
  working_bit_depth: "32_float"   # 32_float (Linear Compositing) | 16_half_float
  color_management: "aces_cg"     # aces_cg (ACES 1.3) | linear_srgb | rec709
  script_engine: "nuke_node_tree" # nuke_node_tree (.nk) | fusion_comp (.comp) | python_api

# ========================================================
# 3. MODUL AKTIF (MODULE SWITCHES)
# Set true untuk mengaktifkan, false untuk melewati
# ========================================================
modules_enabled:
  linear_color_aces: true         # modules/01-linear-color-aces.md (ACEScg, IDT/ODT, 32-bit Linear)
  keying_despill_edges: true      # modules/02-keying-despill-edges.md (Dual-Matte, Despill, Light Wrap)
  tracking_matchmove_3d: true     # modules/03-tracking-matchmove-3d.md (Camera Solve, Planar, Parallax)
  output_format: true             # modules/04-output-format.md (Template Spesifikasi Simpul & Script)
  multipass_aov_rebuild: true     # modules/05-multipass-aov-rebuild.md (Beauty Formula, AOVs, Cryptomatte)
  roto_cleanplate_paint: true     # modules/06-roto-cleanplate-paint.md (Rotoscoping Sendi, Wire Removal)
  optical_effects_lens: true      # modules/07-optical-effects-lens.md (Undistort/Redistort, Flare, Bokeh)
  film_grain_delivery: true       # modules/08-film-grain-delivery.md (Degrain/Regrain, Master EXR 16/32-bit)

# ========================================================
# 4. PREFERENSI & BATAS TOLERANSI TEKNIS
# ========================================================
preferences:
  max_tracking_error_px: 0.5      # Batas toleransi error kamera solve (maks 0.5 piksel)
  separate_core_and_edge_matte: true # Wajibkan pemisahan matte padat (core) dan rambut (edge)
  regrain_all_cg_elements: true   # Wajib samakan butiran grain pada seluruh elemen 3D/grafis
  strictness: "strict"            # strict | balanced | permissive
  refer_to_examples: true         # Wajib mengacu ke examples/hero-greenscreen-comp-example.md
```

---

## 📖 Petunjuk untuk Pengguna
1. **Ganti Tipe Shot**: Ubah `target_shot` ke `"green-screen-keying"`, `"cg-multipass-comp"`, `"tracking-cleanup-plate"`, atau `"custom-vfx"` sesuai shot rekaman yang sedang Anda kerjakan.
2. **Kustomisasi Pipeline**: Sesuaikan `canvas_resolution` (1080p / 4K UHD) dan `color_management` (`aces_cg` untuk film standar industri).
3. **Aktifkan / Matikan Modul**: Atur nilai di `modules_enabled` menjadi `false` jika tidak diperlukan dalam proyek tertentu.
