# Master Configuration (Panel Kendali Proyek Editing Video & Pasca-Produksi)

Dokumen ini berfungsi sebagai panel kendali utama untuk **FilmCraft Skill**. Ubah konfigurasi di bawah ini untuk mengarahkan AI ke tipe genre proyek video (Narrative Cinema, Commercial Ad, Documentary), resolusi kanvas, framerate, manajemen warna (Rec.709 / DaVinci Wide Gamut), modul aktif, serta standar audio mastering.

---

## 🎛️ Konfigurasi Aktif

```yaml
# ========================================================
# 1. TIPE GENRE & FORMAT PROYEK (GENRE ARCHETYPE)
# Pilihan: narrative-cinema | commercial-advertising | documentary-interview | custom-video
# ========================================================
target_genre: "commercial-advertising"

# Jika memilih 'custom-video', tentukan jenisnya di bawah:
# Pilihan: vertical-reels-tiktok | music-video | youtube-vlog | online-course
custom_video_type: "vertical-reels-tiktok"

# ========================================================
# 2. RESOLUSI, FRAMERATE & WARNA KELAS BIOSKOP
# ========================================================
video_settings:
  project_resolution: "4k_uhd"    # 1080p_fhd (1920x1080) | 4k_uhd (3840x2160) | dci_4k | vertical_9_16 (1080x1920)
  framerate: 24.0                 # 23.976 | 24.0 | 25.0 | 29.97 | 59.94 | 60.0
  aspect_ratio: "16_9"            # 16_9 | 2.39_1 (Anamorphic CinemaScope) | 9_16 (Vertical Reels)
  color_management: "rec709_g24"  # rec709_g24 (Broadcast Gamma 2.4) | rec709_a (Apple QuickTime) | davinci_wide_gamut | aces_cct
  timeline_engine: "opentimelineio" # opentimelineio (.otio) | edl_cmx3600 | fcpxml

# ========================================================
# 3. MODUL AKTIF (MODULE SWITCHES)
# Set true untuk mengaktifkan, false untuk melewati
# ========================================================
modules_enabled:
  timeline_shot_grammar: true     # modules/01-timeline-shot-grammar.md (Shot Sizes, Aturan 180°, Eye-Line)
  cutting_techniques_pacing: true # modules/02-cutting-techniques-pacing.md (Cutting on Action, J/L-Cut, Rhythm)
  color_grading_scopes: true      # modules/03-color-grading-scopes.md (Vectorscope Skin Tone 10:30, Waveform)
  output_format: true             # modules/04-output-format.md (Template Spesifikasi Timeline & Cue Sheet)
  audio_mixing_ducking: true      # modules/05-audio-mixing-ducking.md (Auto-Ducking -18dB, Dialog -12dB, LUFS)
  broll_visual_continuity: true  # modules/06-broll-visual-continuity.md (A/B-Roll Sync, Speed Ramp, Match Action)
  subtitles_motion_graphics: true # modules/07-subtitles-motion-graphics.md (Lower Thirds, Title-Safe, Kinetik Text)
  export_mastering_codecs: true   # modules/08-export-mastering-codecs.md (ProRes 422 HQ vs H.264, Color Tagging)

# ========================================================
# 4. PREFERENSI & STANDAR AUDIO-VISUAL
# ========================================================
preferences:
  target_lufs: -14.0              # -14.0 LUFS (YouTube/Streaming) | -23.0 LUFS (EBU R128 Broadcast TV)
  auto_audio_ducking: true        # Turunkan volume musik latar -18dB s/d -24dB saat dialog aktif
  enforce_180_degree_rule: true   # Cegah crossing the line pada adegan percakapan subjek
  strictness: "strict"            # strict | balanced | permissive
  refer_to_examples: true         # Wajib mengacu ke examples/commercial-ad-timeline-example.md
```

---

## 📖 Petunjuk untuk Pengguna
1. **Ganti Genre Video**: Ubah `target_genre` ke `"narrative-cinema"`, `"commercial-advertising"`, `"documentary-interview"`, atau `"custom-video"` sebelum merancang timeline.
2. **Kustomisasi Standar**: Sesuaikan `project_resolution` dan `target_lufs` (-14 LUFS untuk internet atau -23 LUFS untuk TV broadcast).
3. **Aktifkan / Matikan Modul**: Atur nilai di `modules_enabled` menjadi `false` jika tidak diperlukan dalam proyek tertentu.
