# MailCraft Configuration (Panel Kendali Surel & Produktivitas)

Dokumen ini adalah saklar konfigurasi komunikasi dan kalender di **MailCraft**.

---

## 🎛️ Pengaturan Aktif

```yaml
# ========================================================
# 1. GAYA BAHASA & TONE SUREL
# ========================================================
tone: "executive_polite"        # executive_polite | casual_collaborative | formal_legal
default_language: "id"          # id (Bahasa Indonesia) | en (English)
signature_style: "corporate"    # corporate | minimal | none

# ========================================================
# 2. KALENDER & RAPAT
# ========================================================
calendar:
  default_meeting_duration_min: 30
  generate_ics_payload: true    # Sertakan blok berkas .ics pada undangan rapat
  time_zone: "Asia/Jakarta"     # WIB (UTC+7)
```
