# Production Profile: Interactive Game Audio & Foley SFX

Profil ini menetapkan panduan perancangan aset suara efek (SFX), langkah kaki karakter (*Foley*), suara benturan senjata (*impacts*), antarmuka pengguna (UI sounds), dan persiapan integrasi middleware audio game (Wwise / FMOD).

---

## 1. Standar Pemodelan Aset Game Audio

- **Format Master**: WAV PCM 48kHz / 24-bit (atau 96kHz / 24-bit untuk modulasi pitch shift ekstrem).
- **Titik Potong Titik Nol (Zero-Crossing Trimming)**:
  - Setiap file SFX wajib dipotong tepat pada titik perlintasan nol tegangan (*zero-crossing*) pada bagian awal (head) dan akhir (tail) untuk mencegah bunyi letupan (*pop/click*) saat audio diputar berulang kali di dalam game engine.
- **Pewadahan Variasi Aset (Asset Variations)**:
  - Setiap tindakan dalam game (misal: langkah kaki di tanah kering) wajib memiliki minimal **5 - 8 variasi suara** berbeda untuk menghindari kelelahan telinga pemain (*ear fatigue*).

---

## 2. Pembentukan Transien & Pelapisan Frekuensi (Transient Sculpting)

Bangun suara benturan (*impact SFX*) menggunakan metode pelapisan 3 elemen:

```
[Layer 1: Sub / Low Thump] (Gelombang sinus 50-90Hz, memberikan bobot fisik berat)
        +
[Layer 2: Body / Mechanical Texture] (Logam beradu / pecahan kayu di area 400-2500Hz)
        +
[Layer 3: Top Snap / Transient Click] (Puncak serangan tajam 3-8kHz dengan durasi < 15ms)
        =
[Final Composite Impact Asset] (Normalized to -1.0 dBFS Peak)
```

---

## 3. Penataan Loop Tanpa Putus (Seamless Looping)

- Untuk suara ambient latar (angin, mesin kapal, hujan):
  - Buat crossfade halus sepanjang $500\text{ ms} - 1500\text{ ms}$ antara ujung akhir dan awal berkas audio.
  - Verifikasi kesinambungan fase dengan memutar audio berulang-ulang tanpa jeda di dalam DAW.
