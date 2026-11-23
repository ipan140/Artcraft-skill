# Modul 07: Separasi Warna CMYK & Standar Tinta Cetak (CMYK & Color Separation)

Modul ini menetapkan manajemen warna pra-cetak percetakan offset: perbedaan 100% K vs Rich Black, pembatasan densitas tinta total (Total Area Coverage / TAC $\le 300\%$), profil warna FOGRA39 / GRACoL, dan penggunaan tinta khusus (*Spot Color / Pantone*).

---

## 1. Aturan Emas Teks Hitam: 100% K vs Rich Black

Dalam dunia cetak offset komersial, warna hitam memiliki dua fungsi yang sangat berbeda:

```text
1. TEKS TUBUH (BODY COPY) KECIL (< 18 pt):
   Formula Wajib: C: 0%  M: 0%  Y: 0%  K: 100% (Pure Black / 100% K)
   Alasan: Hanya dicetak oleh 1 pelat silinder (Black). Jika registrasi mekanis mesin cetak
   meleset 0.05mm, teks tetap tajam sempurna tanpa bayangan blur pelangi di tepi huruf.

2. BIDANG BLOK BESAR / HEADLINE RAKSASA (> 36 pt):
   Formula Wajib: C: 60%  M: 40%  Y: 40%  K: 100% (Warm/Cool Rich Black)
   Alasan: Jika bidang blok besar hanya diberi 100% K, warnanya akan terlihat abu-abu kusam
   dan belang. Tinta Cyan, Magenta, dan Yellow di bawahnya memberikan efek hitam pekat mewah.
```

---

## 2. Batas Total Ink Coverage (TAC / Total Area Coverage)

Total Area Coverage (TAC) adalah jumlah persentase seluruh tinta CMYK pada satu titik koordinat cetak:

$$\text{TAC} = \%C + \%M + \%Y + \%K$$

- **Batas Aman Kertas Berlapis (Coated Art Paper)**: Maksimal **`300% s/d 320%`**.
- **Batas Aman Kertas Koran / Uncoated HVS**: Maksimal **`240% s/d 260%`**.

> [!CAUTION]
> Dilarang keras menggunakan formula `C:100 M:100 Y:100 K:100` (TAC = 400%). Kertas akan basah kuyup oleh tinta, tinta tidak sempat mengering di mesin cetak, dan akan menjiplak kotor ke halaman belakang lembaran berikutnya (*set-off / ink smudge*).

---

## 3. Profil Standar Industri Percetakan (ICC Profiles)
1. **ISO Coated v2 (ECI) / FOGRA39**:
   - Profil standar percetakan offset paling umum di Eropa, Asia, dan Indonesia untuk kertas coated (*Art Paper / Matt Paper*).
2. **GRACoL 2006 Coated 1v2**:
   - Standar percetakan umum di Amerika Utara (US Commercial Offset).
3. **Warna Khusus (Spot Color / Pantone Matching System - PMS)**:
   - Digunakan jika publikasi menuntut warna logo korporat yang 100% akurat tanpa interpolasi titik raster CMYK, atau untuk tinta khusus seperti Emas Metalik (*Pantone 871 C*), Perak (*Pantone 877 C*), atau Neon Fluo.
