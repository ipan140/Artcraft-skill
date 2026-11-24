# SoundCraft Configuration (Panel Kendali Studio Audio & Mixing)

Dokumen ini adalah saklar konfigurasi utama untuk perancangan rantai vokal, perutean bus DME, kompresi dinamika, dan standardisasi kenyaringan LUFS di **SoundCraft**.

---

## 🎛️ Pengaturan Aktif (Active Configurations)

```yaml
# ========================================================
# 1. PEMILIHAN FORMAT PRODUKSI (Production Target Selector)
# ========================================================
# Pilih salah satu profil target dari folder productions/:
# - podcast-dialogue
# - cinema-commercial-mix
# - music-vocal-production
# - game-audio-sfx
target_production: "podcast-dialogue"

# ========================================================
# 2. SAMPLING & RESOLUSI AUDIO (Digital Audio Standards)
# ========================================================
sample_rate_hz: 48000                # 48000 (Video/Broadcast) | 44100 (Musik CD) | 96000 (High-Res)
bit_depth: 24                        # 24-bit PCM | 32-bit float
target_loudness_lufs: -16.0          # -16.0 (Podcast) | -14.0 (Music/Streaming) | -23.0 (TV EBU R128)
true_peak_ceiling_db: -1.0           # Batas aman inter-sample distortion (-1.0 dBTP)
loudness_range_lra_target: 6.0       # Rentang dinamika (LRA)

# ========================================================
# 3. STRUKTUR PERUTEAN BUS & DUCKING
# ========================================================
routing:
  enable_sidechain_ducking: true     # Turunkan otomatis volume musik saat narasi aktif
  sidechain_ducking_depth_db: -4.0   # Kedalaman pemotongan volume musik
  ducking_release_ms: 320            # Waktu pemulihan volume musik yang halus
  mono_bass_cutoff_hz: 120           # Satukan frekuensi sub-bass ke mono murni
  stem_buses:
    - "dialogue_bus"
    - "sfx_bus"
    - "music_bus"
    - "master_bus"

# ========================================================
# 4. AKTIVASI MODUL (Module Switches)
# ========================================================
modules_enabled:
  01_vocal_dialogue_chain: true
  02_equalization_spectral_repair: true
  03_dynamics_compression_gating: true
  04_output_format: true
  05_sidechain_ducking_routing: true
  06_spatial_reverb_delay_stereo: true
  07_mastering_loudness_lufs: true
  08_daw_integration_ffmpeg_tooling: true

# ========================================================
# 5. PREFERENSI PEMROSESAN SINYAL
# ========================================================
preferences:
  vocal_hpf_cutoff_hz: 80.0          # Filter pemotong gemuruh mikrofon
  deesser_target_freq_hz: 6200.0     # Frekuensi pusat peredaman sibilance 'S'
  limiter_oversampling: "4x"         # Oversampling True Peak Limiter
```

---

## 🛠️ Panduan Penggunaan Konfigurasi
1. Tentukan `target_production` sesuai output konten (misal: `podcast-dialogue` untuk podcast atau `cinema-commercial-mix` untuk iklan TV).
2. Sesuaikan `target_loudness_lufs` dengan regulasi platform tujuan (-16 LUFS untuk podcast, -14 LUFS untuk YouTube, -23 LUFS untuk televisi).
3. Jalankan penyusunan rantai sinyal dan eksekusi filter FFmpeg dengan mengikuti panduan di folder `modules/`.
