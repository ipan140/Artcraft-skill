# Style Profile: 2D Character Rigging & Narrative Animation

Profil ini menetapkan panduan animasi karakter kartun dan maskot 2D (*Cutout & Skeletal Rigging*), siklus berjalan (*Walk Cycles*), ekspresi emosi wajah, dan penerapan penuh 12 Prinsip Animasi Disney.

---

## 1. Anatomi Siklus Berjalan (8-Frame Walk Cycle)

Siklus langkah kaki karakter dibangun dari 4 pose kunci fundamental:

```
[1. Contact Pose (Pose Kontak)] ──> Kedua kaki menyentuh tanah, tumit depan menyentuh lantai
        ↓
[2. Down / Recoil Pose (Pose Tertekan)] ──> Lutut depan menekuk menyerap beban tubuh, kepala terendah
        ↓
[3. Passing Pose (Pose Melintas)] ──> Kaki belakang terangkat melintasi kaki tumpu, pinggul naik
        ↓
[4. Up / High Point Pose (Pose Tertinggi)] ──> Tumit kaki tumpu berjinjit mendorong ke depan, kepala tertinggi
        ↓
[Ulangi Siklus untuk Sisi Kaki Berlawanan]
```

---

## 2. Rantai Sambungan Hirarkis (Rigging Parenting & Forward Kinematics)

- Struktur hierarki parenting tulang karakter wajib teratur:
  `Master_Hips` $\rightarrow$ `Torso` $\rightarrow$ `Neck` $\rightarrow$ `Head`.
  `Torso` $\rightarrow$ `Clavicle` $\rightarrow$ `Upper_Arm` $\rightarrow$ `Forearm` $\rightarrow$ `Hand`.
  `Hips` $\rightarrow$ `Upper_Leg` $\rightarrow$ `Lower_Leg` $\rightarrow$ `Foot`.
- Letakkan titik poros (*Anchor Points*) tepat pada sendi engsel tulang biologis (bahu, siku, lutut, pergelangan tangan).

---

## 3. Aksi Tumpang Tindih & Ekor Kelambatan (Follow Through & Overlapping)

- Rambut panjang, ujung dasi, mantel jubah, atau ekor karakter tidak boleh bergerak bersamaan dengan tubuh utama.
- Berikan penundaan waktu (*drag delay*) sebesar $2 - 5\text{ frame}$ di belakang pergerakan pinggul atau kepala untuk memberikan ilusi elastisitas dan bobot massa alami.
