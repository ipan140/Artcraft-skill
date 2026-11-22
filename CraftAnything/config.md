# Craft Anything Configuration (Panel Rekayasa Balik & Rekonstruksi)

Dokumen ini adalah saklar konfigurasi untuk menganalisa dan merekonstruksi aplikasi, web, atau game di **Craft Anything**.

---

## 🎛️ Pengaturan Aktif

```yaml
# ========================================================
# 1. TARGET REKONSTRUKSI
# Pilihan: web_app | mobile_app | canvas_game | api_backend
# ========================================================
target_type: "web_app"

# ========================================================
# 2. METODE DEKONSTRUKSI
# ========================================================
analysis:
  inspect_dom_hierarchy: true
  intercept_network_api: true
  extract_design_tokens: true
  map_state_machines: true

# ========================================================
# 3. TARGET IMPLEMENTASI BARU
# ========================================================
rebuild_stack:
  frontend: "react_tailwind"    # react_tailwind | vue_tailwind | vanilla_html_canvas
  state_management: "zustand"   # zustand | redux_toolkit | native_state
  api_mocking: "msw"            # msw (Mock Service Worker) | json_server
```
