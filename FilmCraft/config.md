# FilmCraft Configuration (Panel Kendali Proyek Video)

Dokumen ini adalah saklar konfigurasi spesifik untuk pengeditan video di **FilmCraft**.

---

## 🎛️ Pengaturan Aktif

```yaml
project_format: "1080p_fhd"      # 1080p_fhd | 4k_uhd | vertical_reels (1080x1920)
framerate: 24                    # 23.976 | 24 | 30 | 60
color_space: "rec709"            # rec709 | rec2020 | aces_cct
target_lufs: -14.0               # -14 LUFS (YouTube/Streaming) | -23 (TV)
export_codec: "h264"             # h264 | h265 | prores_422
auto_audio_ducking: true         # Turunkan musik -18dB saat vokal berbicara
```
