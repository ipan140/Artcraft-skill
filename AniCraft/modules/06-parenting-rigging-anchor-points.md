# Modul 06: Layer Parenting, Rigging & Anchor Point Alignment

Modul ini menetapkan aturan perakitan hierarki layer induk-anak (*Parent-Child Layering*), penempatan titik poros perputaran (*Anchor Points*), penggunaan *Null Objects*, dan kendali kinematika maju (*Forward Kinematics*).

---

## 1. Aturan Emas Penempatan Titik Poros (The Anchor Point Rule)

> [!IMPORTANT]
> **TENTUKAN TITIK POROS SEBELUM MEMBUAT KEYFRAME PERTAMA!**
> Mengubah posisi Anchor Point setelah membuat keyframe posisi (*Position*) atau rotasi (*Rotation*) akan merusak seluruh jalur koordinat yang telah dibuat dan memaksa Anda mengulang pekerjaan dari awal.

- **Lokasi Poros Standar Berdasarkan Elemen**:
  - Jarum Jam / Roda Berputar: Titik pusat geometris mutlak $(X = 50\%, Y = 50\%)$.
  - Tangan Melambai: Pada engsel pergelangan bahu atau siku.
  - Pintu Membuka: Pada engsel tepi kiri atau tepi kanan.
  - Karakter Melompat: Pada titik tumpu telapak kaki di lantai $(X = 50\%, Y = 100\%)$.

---

## 2. Pengendali Kosong (Null Object Controllers)

Untuk mengendalikan sekelompok elemen kompleks secara serentak (misal: memindahkan seluruh karakter beserta bayangannya, atau menggerakkan kamera panggung):

1. Buat layer **Null Object** sebagai pengendali utama (`Master_Controller`).
2. Tautkan (*Parent*) layer-layer anak ke Null Object tersebut.
3. Saat Null Object digerakkan, diputar, atau diskalakan: seluruh elemen anak akan bergerak mengikuti secara proporsional sambil tetap mempertahankan animasi lokal internal mereka masing-masing.

---

## 3. Relasi Rantai Maju (Forward Kinematics - FK)

- Saat lengan berayun:
  - Rotasi `Upper_Arm` mempengaruhi posisi `Forearm` dan `Hand`.
  - Animasi rotasi `Hand` hanya mempengaruhi telapak tangan tanpa mengubah posisi lengan atas.
- Skala transformasi anak selalu dikalikan dengan skala transformasi induk:
  $$\text{Scale}_{\text{Global}} = \text{Scale}_{\text{Parent}} \times \text{Scale}_{\text{Child}}$$
