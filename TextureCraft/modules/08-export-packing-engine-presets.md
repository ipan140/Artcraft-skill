# Modul 08: Export Presets, Channel Packing & Engine Integration

Modul ini menetapkan preset ekspor tekstur untuk Unreal Engine 5, Unity HDRP/URP, Blender Cycles, format glTF 2.0, serta kontrol pelebaran batas teksel (*texture dilation padding*).

---

## 1. Standar Ekspor Unreal Engine 5 (T_Asset_*)

| Nama Berkas Ekspor | Saluran RGB / A | Peta Tekstur yang Dikemas | Ruang Warna |
|---|---|---|---|
| `T_Asset_BaseColor.png` | RGB | Base Color / Albedo | **sRGB** |
| `T_Asset_Normal.png` | RGB | Tangent Space Normal (**DirectX -Y**) | **Linear / Non-Color (16-bit disarankan)** |
| `T_Asset_ORM.png` | **R** | **Ambient Occlusion (AO)** | **Linear / Non-Color** |
| | **G** | **Roughness** | **Linear / Non-Color** |
| | **B** | **Metallic** | **Linear / Non-Color** |
| `T_Asset_Emissive.png` *(Opsional)* | RGB | Emissive Glow Map | **sRGB** |

---

## 2. Standar Ekspor Unity HDRP (MaskMap)

| Saluran Tekstur | Peta Tekstur | Catatan Teknis |
|---|---|---|
| **Red (R)** | Metallic | Nilai kelogaman $0.0 - 1.0$ |
| **Green (G)** | Ambient Occlusion | Bayangan mikro oklusi |
| **Blue (B)** | Detail Mask | Untuk tekstur mikro sekunder |
| **Alpha (A)** | Smoothness | Inversi Roughness ($1.0 - \text{Roughness}$) |

---

## 3. Ekspor Multi-Tile UDIM

Saat mengekspor aset multi-tile, berkas otomatis diberi penomoran token `<UDIM>`:
- `T_Rifle_BaseColor.1001.png`
- `T_Rifle_BaseColor.1002.png`
- `T_Rifle_ORM.1001.png`
- `T_Rifle_ORM.1002.png`

Engine seperti Unreal Engine 5 dan Blender Cycles akan otomatis membaca seluruh tile UDIM sebagai satu kesatuan *Virtual Texture* tanpa perlu menghubungkan puluhan node material secara manual.
