---
name: soundcraft-skill
description: >-
  Panduan pembersihan rekaman suara vokal, pemotongan audio ritmis, balancing frekuensi EQ,
  kompresi dinamika, dan mastering kenyaringan standar platform di SoundCraft.
---

# SoundCraft Skill

Skill ini memandu AI dalam merekayasa audio sejernih kristal, penataan track rekaman, dan mixing suara berdaya saing komersial di **SoundCraft**.

---

## 🎙️ Rantai Sinyal Vokal Standar (Vocal Chain)

1. **Subtractive EQ**: Potong frekuensi gemuruh di bawah 80Hz (*high-pass filter*); kurangi resonansi ruangan yang berdengung di area 300-500Hz.
2. **De-Esser**: Redam desisan tajam huruf 'S' di frekuensi 5kHz – 8kHz.
3. **Compressor**: Haluskan rentang dinamika (rasio 3:1 atau 4:1, attack 20ms, release 100ms).
4. **Additive EQ & Air**: Berikan sentuhan kehangatan di 200Hz dan kilau kejernihan di atas 10kHz (*high shelf*).
5. **Master Limiter**: Kunci puncak kenyaringan pada `-1.0 dB True Peak` dan `-14.0 LUFS Integrated`.

---

## 📋 Alur Eksekusi AI
1. Periksa target LUFS di [config.md](./config.md).
2. Sajikan rincian rantai efek per track (Vokal, SFX, Musik) dan pengaturan nilai parameter audio.
