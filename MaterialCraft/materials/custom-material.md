# Surface Profile: Custom Hybrid Material Template

Template ini digunakan untuk merancang material prosedural hibrida baru yang memadukan berbagai karakteristik (misalnya: material alien kristalin, komposit serat karbon futuristik, lumut organik di atas batu kuno, atau lapisan resin transparan).

---

## 1. Deklarasi Parameter Material

```yaml
material_name: "custom_procedural_surface"
category: "hybrid_composite"
workflow: "metallic_roughness"

physics:
  dielectric_f0: 0.04
  base_metallic_range: [0.0, 1.0]
  base_roughness_range: [0.1, 0.9]
  subsurface_scattering: false
  anisotropy: false
  clearcoat: false

generator_pipeline:
  macro_pattern: "voronoi_cells"
  breakup_noise: "perlin_flow"
  micro_detail: "high_frequency_white_noise"
```

---

## 2. Diagram Blok Pemrosesan Sinyal Prosedural

```
[Pattern Generator 1] ──┐
                         ├──> [Blender / Math Min-Max] ──> [Height Map] ──> [Normal Map (Sobel)]
[Pattern Generator 2] ──┘                                        │
                                                                 ├──> [Ambient Occlusion]
                                                                 └──> [Curvature Mask]
                                                                             │
[Gradient Map / Albedo Palette] <────────────────────────────────────────────┤
                                                                             │
[Roughness Modulator (Invert + Grunge)] <────────────────────────────────────┘
```

---

## 3. Matriks Pengendali Modul Aktif

1. **Height & Displacement**: Tentukan batas elevasi maksimum ($0.0 - 1.0$) untuk tessellation displacement.
2. **Channel Packing**: Pilih format pengemasan akhir (Unreal ORM, Unity MaskMap, atau glTF).
3. **Kepatuhan Tiling**: Uji material dengan translasi offset UV $+0.5$ pada sumbu $U$ dan $V$ untuk memastikan ketiadaan garis sambungan (*seam lines*).
