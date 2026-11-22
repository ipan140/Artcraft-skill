# Master Configuration (Saklar Utama)

Dokumen ini berfungsi sebagai panel kendali utama untuk **my-custom-skill**. Ubah konfigurasi di bawah ini untuk mengarahkan AI ke target perangkat, stack teknologi, modul aktif, dan preferensi proyek.

---

## 🎛️ Konfigurasi Aktif

```yaml
# ========================================================
# 1. TARGET PERANGKAT (DEVICE TARGET)
# Pilihan: mobile | tablet-ipad | desktop | custom-device
# ========================================================
target_device: "desktop"

# Jika memilih 'custom-device', tentukan jenisnya di bawah:
# Pilihan: foldable | smart-tv | ultrawide | kiosk | smartwatch
custom_device_type: "foldable"

# ========================================================
# 2. STACK TEKNOLOGI
# ========================================================
tech_stack:
  framework: "react"            # react | nextjs | vue | svelte | react-native
  styling_engine: "tailwind"    # tailwind | css-modules | styled-components | vanilla-css
  language: "typescript"        # typescript | javascript
  component_library: "shadcn"   # shadcn | radix | headlessui | custom

# ========================================================
# 3. MODUL AKTIF (MODULE SWITCHES)
# Set true untuk mengaktifkan, false untuk melewati
# ========================================================
modules_enabled:
  design_system: true           # modules/01-design-system.md
  architecture: true            # modules/02-architecture.md
  coding_rules: true            # modules/03-coding-rules.md
  output_format: true           # modules/04-output-format.md
  states_motion: true           # modules/05-states-motion.md (Loading, Empty, Error, Motion)
  assets_media: true            # modules/06-assets-media.md (Aspect ratio, Fallbacks, Icons)
  accessibility: true           # modules/07-accessibility.md (WCAG AA, Keyboards, ARIA)
  theme_i18n: true              # modules/08-theme-i18n.md (Dark Mode, Multi-bahasa)

# ========================================================
# 4. PREFERENSI & VALIDASI
# ========================================================
preferences:
  dark_mode_support: true       # Tambahkan varian dark: pada styling
  accessibility_level: "WCAG-AA"# WCAG-A | WCAG-AA | WCAG-AAA
  include_test_boilerplate: false # Generate template unit test (Jest/Vitest)
  strictness: "strict"          # strict | balanced | permissive
  refer_to_examples: true       # Wajib mengacu ke examples/card-example.md
```

---

## 📖 Petunjuk untuk Pengguna
1. **Ganti Target Perangkat**: Ubah `target_device` ke `"mobile"`, `"tablet-ipad"`, atau `"desktop"` sebelum meminta AI membuat UI.
2. **Kustomisasi Stack**: Sesuaikan `framework` dan `styling_engine` dengan proyek yang sedang Anda kerjakan.
3. **Aktifkan / Matikan Modul**: Atur nilai modul di `modules_enabled` menjadi `false` jika tidak diperlukan dalam proyek tertentu.
