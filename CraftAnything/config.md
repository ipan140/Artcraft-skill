# Master Configuration (Panel Kendali Dekonstruksi & Rekonstruksi)

Dokumen ini berfungsi sebagai panel kendali utama untuk **CraftAnything Skill**. Ubah konfigurasi di bawah ini untuk mengarahkan AI ke tipe target aplikasi yang akan dibongkar (*reverse engineering*), metode analisis, modul aktif, stack implementasi baru, serta preferensi rekonstruksi.

---

## 🎛️ Konfigurasi Aktif

```yaml
# ========================================================
# 1. TIPE TARGET APLIKASI (TARGET ARCHETYPE)
# Pilihan: web-app | mobile-app | canvas-game | custom-target
# ========================================================
target_type: "web-app"

# Jika memilih 'custom-target', tentukan jenisnya di bawah:
# Pilihan: backend-api | cli-tool | chrome-extension | scraping-crawler
custom_target_type: "backend-api"

# ========================================================
# 2. STACK IMPLEMENTASI REKONSTRUKSI BARU (REBUILD STACK)
# ========================================================
rebuild_stack:
  framework: "react"            # react | nextjs | vue | svelte | vanilla-canvas
  styling_engine: "tailwind"    # tailwind | css-modules | styled-components
  language: "typescript"        # typescript | javascript
  state_management: "zustand"   # zustand | redux-toolkit | react-query | context-reducer
  api_layer: "msw"              # msw (Mock Service Worker) | in-memory-mock | trpc

# ========================================================
# 3. MODUL AKTIF (MODULE SWITCHES)
# Set true untuk mengaktifkan, false untuk melewati
# ========================================================
modules_enabled:
  dom_deconstruction: true        # modules/01-dom-deconstruction.md (DOM Tree, Layout, CSS Reverse)
  api_network_reverse: true       # modules/02-api-network-reverse.md (Payload, Header, WebSocket, JWT)
  state_logic_extraction: true    # modules/03-state-logic-extraction.md (State Machine, Business Logic)
  output_format: true             # modules/04-output-format.md (Template Spesifikasi & Kode Utuh)
  clean_rebuild_architecture: true # modules/05-clean-rebuild-architecture.md (Clean Architecture, Repositories)
  asset_media_extraction: true    # modules/06-asset-media-extraction.md (Token Warna, SVG, Sprite)
  mocking_emulation: true         # modules/07-mocking-emulation.md (Mock Data Realistis, Latency, Error)
  performance_security: true      # modules/08-performance-security.md (Sanitasi Kode, Anti-Bloat, XSS)

# ========================================================
# 4. PREFERENSI & ATRIBUT REKONSTRUKSI
# ========================================================
preferences:
  strip_third_party_trackers: true # Bersihkan tracker analitik/iklan pihak ketiga dari kode asli
  typescript_strict_mode: true    # Paksa type checking ketat (tanpa 'any')
  include_mock_data: true         # Sediakan dataset tiruan lengkap agar langsung bisa dijalankan
  strictness: "strict"            # strict | balanced | permissive
  refer_to_examples: true         # Wajib mengacu ke examples/trello-kanban-rebuild-example.md
```

---

## 📖 Petunjuk untuk Pengguna
1. **Pilih Tipe Target**: Ubah `target_type` ke `"web-app"`, `"mobile-app"`, `"canvas-game"`, atau `"custom-target"` sesuai aplikasi yang ingin Anda bedah.
2. **Kustomisasi Stack**: Sesuaikan `framework`, `styling_engine`, dan `state_management` yang ingin Anda gunakan untuk membangun kembali aplikasi tersebut.
3. **Aktifkan / Matikan Modul**: Atur nilai di `modules_enabled` menjadi `false` jika tidak diperlukan dalam proyek tertentu.
