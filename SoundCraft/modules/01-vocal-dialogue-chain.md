# Modul 01: Vocal & Dialogue Signal Chain Architecture

Modul ini menetapkan susunan baku rantai sinyal vokal (*channel strip processing*) untuk percakapan manusia, podcast, voiceover, dan vokal musik.

---

## 1. Urutan Rantai Pemrosesan Sinyal Baku

```
[Mikrofon Kondensor / Dinamis]
        ↓
[1. Pembersihan Pra-Filter: High-Pass Filter (HPF) 75 - 85 Hz]
        ↓
[2. Restorasi Spektral: De-Noise & De-Clicker]
        ↓
[3. Subtractive Surgical EQ: Potong Frekuensi Resonansi Ruangan]
        ↓
[4. De-Esser: Redam Sibilance Huruf 'S' (5.0 - 8.0 kHz)]
        ↓
[5. Primary Dynamic Control: Kompresor VCA / Opto]
        ↓
[6. Additive Tonal EQ: Kehangatan Low-Mid & Kecerahan Air Shelf]
        ↓
[7. Peak Limiter / Safety Ceiling: -1.0 dB True Peak]
```

---

## 2. Parameter Rinci Tiap Tahapan Rantai

1. **High-Pass Filter (HPF)**:
   - Titik potong $80\text{ Hz}$ dengan kemiringan lereng $18\text{ dB/octave}$ (Butterworth).
   - Menghilangkan getaran langkah kaki di lantai, hembusan AC, dan kedekatan mikrofon berlebih (*proximity effect*).
2. **Subtractive EQ**:
   - Gunakan filter Bell dengan faktor $Q$ sempit ($Q = 4 - 8$).
   - Telusuri dan potong frekuensi dengung kotak ruangan (*room boxiness*) di kisaran $300 - 500\text{ Hz}$ sebesar $-2\text{ dB} - 4\text{ dB}$.
   - Potong resonansi sengau (*nasal resonance*) di kisaran $800 - 1200\text{ Hz}$ jika vokal terdengar seperti tersumbat.
3. **De-Esser**:
   - Frekuensi target: $6200\text{ Hz}$ (wanita) atau $5200\text{ Hz}$ (pria).
   - Ambang batas (Threshold) diatur hingga reduksi gain saat konsonan 'S' mencapai $-4\text{ dB} - 6\text{ dB}$.
4. **Kompresor Dinamika Primer**:
   - Rasio: $3:1$ hingga $4:1$.
   - Attack: $15 - 25\text{ ms}$ (membiarkan konsonan awal kata terdengar tajam sebelum kompresor menekan).
   - Release: $100 - 150\text{ ms}$ (kembali ke normal tanpa efek memompa/*pumping*).
5. **Additive EQ**:
   - High Shelf pada $10 - 12\text{ kHz}$ dinaikkan $+1.5\text{ dB} - 2.5\text{ dB}$ untuk memberikan sensasi vokal modern yang berkelas (*expensive vocal sheen*).
