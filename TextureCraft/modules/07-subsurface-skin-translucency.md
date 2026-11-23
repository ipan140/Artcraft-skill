# Modul 07: Subsurface Scattering & Skin Translucency

Modul ini menetapkan protokol pembuatan peta ketebalan (*Thickness Map*), pemodelan lapisan kulit manusia (*Epidermis vs Subdermis*), dan transmisi hamburan cahaya bawah permukaan (*Subsurface Scattering / SSS*).

---

## 1. Fisika Hamburan Bawah Permukaan Kulit (Skin SSS Mechanics)

Kulit manusia tersusun atas beberapa lapisan optik:

```
[1. Lapisan Minyak Sebum] ──> Spekular jernih tajam, Roughness 0.20 - 0.35, IOR 1.45
        ↓
[2. Lapisan Epidermis] ──> Pigmen melanin (cokelat/kuning), tekstur pori-pori mikro
        ↓
[3. Lapisan Subdermis] ──> Jaringan hemoglobin darah kaya oksigen (warna merah tua membara)
```

---

## 2. Peta Pembantu Hamburan Kulit

1. **Subsurface Color Map (Scatter Albedo)**:
   - Berisi warna darah merah-oranye jenuh murni (Hex `#A82218`). Area daging tebal menyerap spektrum biru/hijau dan hanya meneruskan spektrum merah hangat ke luar.
2. **Thickness Map (Scattering Mask)**:
   - Nilai $1.0$ (putih) pada area daun telinga, cuping hidung, jari jemari, dan bibir.
   - Nilai $0.0$ (hitam) pada area dahi, tulang pipi, dan tengkorak kepala tebal.
3. **Roughness Mapping Wajah**:
   - Dahi dan hidung (*T-zone*): Lebih berminyak, Roughness $0.30 - 0.40$.
   - Pipi dan dagu: Lebih kering, Roughness $0.50 - 0.65$.

---

## 3. Integrasi Shader Unreal Engine 5 & Marmoset

- Di Unreal Engine 5, gunakan Material Shading Model: **Subsurface** atau **Subsurface Profile**.
- Hubungkan peta Thickness ke pin *Subsurface / Opacity* untuk mengontrol jarak penetrasi hamburan cahaya (*mean free path*).
