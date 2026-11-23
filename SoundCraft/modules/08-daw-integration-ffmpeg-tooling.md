# Modul 08: Programmatic Audio Tooling & FFmpeg Filtergraphs

Modul ini menetapkan panduan otomasi rekayasa audio berbasis kode (*Code-Audio*), pembuatan filter audio kompleks FFmpeg (*filter_complex*), normalisasi kenyaringan otomatis, dan integrasi template sesi DAW.

---

## 1. Pemrosesan Rantai Audio Lengkap dengan FFmpeg

FFmpeg menyediakan mesin pemrosesan audio tangguh tanpa memerlukan pembukaan manual software DAW:

### Contoh: Voiceover Cleaning Strip via FFmpeg Filtergraph
```bash
ffmpeg -i raw_voiceover.wav -af "\
highpass=f=80,\
afftdn=nf=-25,\
equalizer=f=350:t=q:w=4:g=-3,\
equalizer=f=3200:t=q:w=2:g=2,\
acompressor=threshold=-20dB:ratio=3:attack=20:release=120:makeup=3dB,\
loudnorm=I=-16:TP=-1.0:LRA=7" \
-c:a pcm_s24le cleaned_voiceover.wav
```

---

## 2. Filtergraph Sidechain Ducking Multi-Input FFmpeg

Perintah berikut menurunkan volume musik latar secara otomatis saat dialog vokal terdengar:

```bash
ffmpeg -i voiceover.wav -i background_music.wav -filter_complex "\
[0:a]asplit=2[vo_main][vo_sidechain];\
[1:a][vo_sidechain]sidechaincompress=\
threshold=0.08:\
ratio=4:\
attack=10:\
release=300:\
makeup=1[ducked_music];\
[vo_main][ducked_music]amix=inputs=2:duration=longest[mixed];\
[mixed]loudnorm=I=-16:TP=-1.0:LRA=6[out]" \
-map "[out]" -c:a pcm_s24le final_podcast_master.wav
```

---

## 3. Ekspor Laporan Kenyaringan JSON FFmpeg (loudnorm Analysis)

Jalankan pass pertama untuk mengukur statistik LUFS audio:
```bash
ffmpeg -i master.wav -af loudnorm=print_format=json -f null -
```

Output JSON memverifikasi secara objektif:
- `input_i`: Integrated LUFS terukur.
- `input_tp`: Puncak True Peak terukur.
- `input_lra`: Rentang dinamika kenyaringan.
