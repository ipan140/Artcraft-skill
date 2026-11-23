# Modul 03: Normal, Curvature & Occlusion Generation

Modul ini menetapkan algoritma konversi dari peta tinggi skalar (*greyscale height*) menjadi vektor normal permukaan (*tangent space normal*), masker kelengkungan (*curvature mask*), dan bayangan celah (*ambient occlusion*).

---

## 1. Konversi Height-to-Normal (Sobel Filter & Y-Inversion)

Vektor normal dihitung dari gradien parsial ketinggian sumbu horizontal ($dX$) dan vertikal ($dY$):

$$dX = \text{Sobel}_x(H), \quad dY = \text{Sobel}_y(H)$$
$$\vec{N} = \text{Normalize}\left( -dX \cdot k, \; -dY \cdot k \cdot \text{Sign}(Y), \; 1.0 \right)$$
$$\text{Color}(R, G, B) = \vec{N} \times 0.5 + 0.5$$

### Matriks Konvensi DirectX vs OpenGL:

| Format Engine | Arah Vektor Y Hijau | Target Mesin / Software | Penyesuaian Shader |
|---|---|---|---|
| **DirectX (-Y)** | Cahaya datang dari bawah (Green inverted) | Unreal Engine 5, 3ds Max, Marmoset | Balik channel hijau jika dari OpenGL |
| **OpenGL (+Y)** | Cahaya datang dari atas (Green standard) | Blender Cycles, Unity URP/HDRP, Godot, glTF | Standar default ekspor WebGL/glTF |

---

## 2. Peta Kelengkungan (Curvature Maps: Convex & Concave)

Peta kelengkungan diturunkan dari operator Laplace $\nabla^2 H$:

1. **Curvature Convex (Tepi Menonjol / Ridges)**:
   - Digunakan sebagai masker utama untuk keausan cat (*edge wear*), goresan gesekan, dan peluruhan logam.
2. **Curvature Concave (Lembah Celah / Crevices)**:
   - Digunakan sebagai masker penumpukan debu, kotoran akumulasi, dan lumut organik.

---

## 3. Komputasi Ambient Occlusion (AO)

- Menghitung persentase oklusi hemisfer cahaya langit di setiap titik piksel.
- **Ray Radius Multi-skala**: Gabungkan oklusi radius besar ($16 - 32$ piksel) untuk naungan bayangan makro dan radius kecil ($2 - 4$ piksel) untuk retakan mikro tajam.
- Nilai AO bernilai $1.0$ (putih = terbuka bebas cahaya) dan $< 0.4$ (abu-abu gelap = celah tersekap).
