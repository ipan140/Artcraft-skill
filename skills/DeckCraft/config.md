# Master Configuration (Panel Kendali Presentasi & Slide)

Dokumen ini berfungsi sebagai panel kendali utama untuk **DeckCraft Skill**. Ubah konfigurasi di bawah ini untuk mengarahkan AI ke target audiens presentasi, gaya visual (Dark Executive, Minimal Light, dsb.), struktur narasi (Minto Pyramid, Problem-Solution), modul aktif, serta preferensi penyajian slide.

---

## 🎛️ Konfigurasi Aktif

```yaml
# ========================================================
# 1. TARGET AUDIENS PRESENTASI (AUDIENCE TARGET)
# Pilihan: investor-pitch | executive-board | keynote-product | custom-audience
# ========================================================
target_audience: "executive-board"

# Jika memilih 'custom-audience', tentukan jenisnya di bawah:
# Pilihan: b2b-sales | team-allhands | educational-workshop | webinar
custom_audience_type: "b2b-sales"

# ========================================================
# 2. FORMAT & GAYA VISUAL SLIDE
# ========================================================
visual_style:
  aspect_ratio: "16_9"          # 16_9 (Widescreen 1920x1080) | 4_3 (Klasik)
  theme_preset: "dark_executive"# dark_executive | minimal_light | modern_enterprise | vibrant_startup
  primary_accent: "#2563EB"     # Warna aksen angka metrik & CTA (misal: Royal Blue)
  secondary_accent: "#10B981"   # Warna pendukung tren positif / sukses (Emerald)
  background_color: "#0F172A"   # Warna kanvas slide (Slate-900)
  font_heading: "Inter"         # Inter | Plus Jakarta Sans | Montserrat | Playfair Display
  font_body: "Inter"

# ========================================================
# 3. MODUL AKTIF (MODULE SWITCHES)
# Set true untuk mengaktifkan, false untuk melewati
# ========================================================
modules_enabled:
  visual_hierarchy_layout: true   # modules/01-visual-hierarchy-layout.md (Grid 16:9, Hirarki 3 Detik)
  storytelling_narrative: true    # modules/02-storytelling-narrative.md (Minto Pyramid, Action Titles)
  data_visualization_metrics: true# modules/03-data-visualization-metrics.md (Hero Stat, Kartu Metrik)
  output_format: true             # modules/04-output-format.md (Template Spesifikasi Slide & Script)
  speaker_notes_delivery: true    # modules/05-speaker-notes-delivery.md (Naskah Presenter, Transisi, Q&A)
  typography_tokens: true         # modules/06-typography-tokens.md (Skala Font, Kontras Warna WCAG)
  slide_archetypes: true          # modules/07-slide-archetypes.md (Katalog Pola Slide: Cover, 3-Pillar, dll)
  export_presentation: true       # modules/08-export-presentation.md (Format Marp, HTML Slide, PDF Vektor)

# ========================================================
# 4. PREFERENSI & ATRIBUT STORYTELLING
# ========================================================
preferences:
  max_bullets_per_slide: 3        # Beban kognitif rendah: maksimal 3 poin per slide
  require_action_titles: true     # Judul wajib berupa kesimpulan aktif, bukan label statis
  include_speaker_notes: true     # Wajib menyertakan naskah kata-kata presenter
  strictness: "strict"            # strict | balanced | permissive
  refer_to_examples: true         # Wajib mengacu ke examples/executive-pitch-example.md
```

---

## 📖 Petunjuk untuk Pengguna
1. **Ganti Target Audiens**: Ubah `target_audience` ke `"investor-pitch"`, `"executive-board"`, `"keynote-product"`, atau `"custom-audience"` sesuai siapa yang akan menyaksikan presentasi Anda.
2. **Kustomisasi Tema**: Sesuaikan `theme_preset` (`"dark_executive"` untuk suasana profesional formal, atau `"minimal_light"` untuk presentasi cetak/dokumen rapat).
3. **Aktifkan / Matikan Modul**: Atur nilai di `modules_enabled` menjadi `false` jika tidak diperlukan dalam proyek tertentu.
