# SoundCraft Configuration (Panel Kendali Studio Audio)

Dokumen ini adalah saklar konfigurasi rekaman dan mixing audio di **SoundCraft**.

---

## 🎛️ Pengaturan Aktif

```yaml
# ========================================================
# 1. SAMPLING & RESOLUSI AUDIO
# ========================================================
sample_rate_hz: 48000           # 48000 (Video/Broadcast) | 44100 (Musik CD) | 96000
bit_depth: 24                   # 24-bit | 32-bit float
target_loudness_lufs: -14.0     # -14.0 (Streaming) | -16.0 (Podcast) | -23.0 (TV)
true_peak_ceiling_db: -1.0

# ========================================================
# 2. STRUKTUR BUS MIXING
# ========================================================
routing:
  enable_sidechain_ducking: true
  stem_buses:
    - "dialogue_bus"
    - "sfx_bus"
    - "music_bus"
    - "master_bus"
```
