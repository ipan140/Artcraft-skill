# Master Configuration (Panel Kendali Surel Eksekutif & Kalender)

Dokumen ini berfungsi sebagai panel kendali utama untuk **MailCraft Skill**. Ubah konfigurasi di bawah ini untuk mengarahkan AI ke skenario komunikasi surel (Executive Decision, Client Negotiation, Meeting Scheduling), gaya bahasa (*tone*), zona waktu kalender, pembuatan payload RFC 5545 `.ics`, serta modul aktif.

---

## 🎛️ Konfigurasi Aktif

```yaml
# ========================================================
# 1. TIPE SKENARIO KOMUNIKASI (SCENARIO ARCHETYPE)
# Pilihan: executive-decision | client-negotiation | meeting-scheduling | custom-email
# ========================================================
target_scenario: "executive-decision"

# Jika memilih 'custom-email', tentukan jenisnya di bawah:
# Pilihan: incident-crisis | investor-monthly-update | overdue-invoice-collection | onboarding-welcome
custom_email_type: "incident-crisis"

# ========================================================
# 2. GAYA BAHASA, TONE & IDENTITAS
# ========================================================
communication_settings:
  tone: "executive_polite"        # executive_polite | assertive_diplomatic | warm_collaborative | formal_legal
  default_language: "id"          # id (Bahasa Indonesia) | en (English Business)
  signature_style: "corporate"    # corporate | minimal | legal_disclaimer
  bluf_framework: true            # Wajibkan Bottom Line Up Front di paragraf pertama

# ========================================================
# 3. PENJADWALAN & PAYLOAD KALENDER (.ICS)
# ========================================================
calendar:
  generate_ics_payload: true      # Hasilkan blok data iCalendar RFC 5545 otomatis
  default_meeting_duration_min: 30# 15 | 30 | 45 | 60
  time_zone: "Asia/Jakarta"       # Asia/Jakarta (WIB UTC+7) | UTC | America/New_York
  meeting_platform: "google_meet" # google_meet | zoom | microsoft_teams | in_person

# ========================================================
# 4. MODUL AKTIF (MODULE SWITCHES)
# Set true untuk mengaktifkan, false untuk melewati
# ========================================================
modules_enabled:
  subject_lines_bluf: true        # modules/01-subject-lines-bluf.md (Tag Subjek, BLUF, Anti-Basa-Basi)
  action_items_deadlines: true    # modules/02-action-items-deadlines.md (Poin Aksi, PIC, Deadline Jam)
  calendar_ics_payload: true      # modules/03-calendar-ics-payload.md (RFC 5545 .ics, VEVENT, Alarms)
  output_format: true             # modules/04-output-format.md (Template To/Cc, Email Body, .ics Code)
  tone_diplomacy_assertiveness: true # modules/05-tone-diplomacy-assertiveness.md (Diplomasi, Penolakan Sopan)
  followup_escalation_cadence: true  # modules/06-followup-escalation-cadence.md (Siklus Follow-Up, Tangga Eskalasi)
  corporate_signatures_branding: true# modules/07-corporate-signatures-branding.md (Tanda Tangan, Legal Disclaimer)
  deliverability_spam_hygiene: true  # modules/08-deliverability-spam-hygiene.md (Anti-Spam Words, RFC 822)

# ========================================================
# 5. PREFERENSI & BATASAN KOGNITIF
# ========================================================
preferences:
  max_paragraphs: 3               # Surel efektif maksimal 3 paragraf pendek
  enforce_explicit_deadlines: true# Wajib menyebutkan hari, tanggal, jam, dan zona waktu spesifik
  strictness: "strict"            # strict | balanced | permissive
  refer_to_examples: true         # Wajib mengacu ke examples/executive-approval-request-example.md
```

---

## 📖 Petunjuk untuk Pengguna
1. **Pilih Skenario Surel**: Ubah `target_scenario` ke `"executive-decision"`, `"client-negotiation"`, `"meeting-scheduling"`, atau `"custom-email"` sesuai tujuan korespondensi Anda.
2. **Kustomisasi Bahasa & Tone**: Sesuaikan `default_language` (`"id"` atau `"en"`) dan `tone` (`"executive_polite"` untuk pimpinan, atau `"assertive_diplomatic"` untuk negosiasi vendor).
3. **Aktifkan / Matikan Modul**: Atur nilai di `modules_enabled` menjadi `false` jika tidak diperlukan dalam proyek tertentu.
