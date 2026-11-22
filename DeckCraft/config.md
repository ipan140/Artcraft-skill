# DeckCraft Configuration (Panel Kendali Presentasi & Slide)

Dokumen ini adalah saklar konfigurasi pembuatan presentasi eksekutif di **DeckCraft**.

---

## 🎛️ Pengaturan Aktif

```yaml
# ========================================================
# 1. FORMAT & ASPEK RASIO
# Pilihan: 16_9 (Widescreen 1920x1080) | 4_3 (Klasik)
# ========================================================
aspect_ratio: "16_9"

# ========================================================
# 2. GAYA & TEMA VISUAL
# ========================================================
theme:
  preset: "dark_executive"      # dark_executive | minimal_light | startup_vibrant
  primary_accent: "#2563EB"     # Warna penegas angka metrik
  background_color: "#0F172A"   # Slate-900
  font_heading: "Inter"
  font_body: "Inter"

# ========================================================
# 3. STRUKTUR & STORYTELLING
# ========================================================
narrative:
  framework: "minto_pyramid"    # minto_pyramid (SCR) | problem_solution | pitch_deck
  max_bullets_per_slide: 3      # Beban kognitif rendah: maksimal 3 poin
  require_action_titles: true   # Judul harus berupa kesimpulan kalimat aktif
  include_speaker_notes: true   # Sertakan naskah kata-kata presenter
```
