# Modul 08: Engine Integration & Shader Translation

Modul ini menetapkan pedoman ekspor dan penerjemahan logika material prosedural ke dalam shader grafis siap pakai di berbagai engine (Unreal Engine 5, Blender Cycles Principled BSDF, dan glTF 2.0).

---

## 1. Unreal Engine 5 (Nanite & Lumen Integration)

- **Shading Model**: *Default Lit* dengan alur kerja Metallic/Roughness.
- **Normal Map Setting**: Texture Group diset ke *WorldNormalMap*, Compression format diset ke *BC5 (Two-channel X & Y with Z derived in pixel shader)*.
- **Nanite Displacement**: Hubungkan saluran *Height/Displacement* ke pin Displacement pada Material Node Graph dengan skala unit sentimeter dunia nyata (*World Space Displacement*).

---

## 2. Blender Cycles & EEVEE (Principled BSDF Python Automation)

Skrip pembuatan nodetree material otomatis di Blender:

```python
import bpy

def create_pbr_material(mat_name="M_ProceduralSteel"):
    mat = bpy.data.materials.new(name=mat_name)
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    links = mat.node_tree.links
    nodes.clear()

    # Output node
    node_out = nodes.new(type="ShaderNodeOutputMaterial")
    node_out.location = (400, 0)

    # Principled BSDF
    node_bsdf = nodes.new(type="ShaderNodeBsdfPrincipled")
    node_bsdf.location = (0, 0)
    links.new(node_bsdf.outputs["BSDF"], node_out.inputs["Surface"])

    return mat
```

---

## 3. Ekspor Standar Web 3D (glTF 2.0 PBR)

- Standar glTF mengemas tekstur ke dalam dua file utama:
  1. `baseColorTexture`: Saluran RGB untuk Albedo, Saluran Alpha untuk Opacity.
  2. `metallicRoughnessTexture`: Saluran **Blue** untuk Metallic, Saluran **Green** untuk Roughness. Saluran Red diabaikan.
- Normal map glTF wajib berformat **OpenGL (+Y)**.
