# Profil Shot: Integrasi CGI Multi-Pass (CG Multi-Pass Compositing)

Profil ini mengatur alur kerja penggabungan elemen 3D Computer-Generated Imagery (CGI) dari software 3D (Maya, Blender, Houdini, Unreal Engine) ke dalam rekaman nyata menggunakan file multi-layer OpenEXR 32-bit float.

---

## 1. Karakteristik & Saluran Render (Render Passes / AOVs)

Dalam file OpenEXR multi-layer, elemen 3D dipisahkan menjadi saluran-saluran cahaya murni:

- **Albedo / Raw Diffuse**: Warna tekstur dasar murni tanpa pengaruh cahaya atau bayangan.
- **Diffuse Light**: Intensitas dan warna cahaya langsung yang jatuh di atas permukaan objek.
- **Specular / Reflection**: Pantulan kilap langsung dari sumber lampu studio.
- **Global Illumination (GI) / Indirect Light**: Pantulan cahaya sekunder dari dinding atau lantai sekitar (*color bleeding*).
- **Subsurface Scattering (SSS)**: Cahaya yang menembus ke dalam lapisan daging/kulit/lilin lalu memantul keluar kembali.
- **Ambient Occlusion (AO)**: Bayangan kontak di sudut-sudut pertemuan geometri sempit.
- **Emission**: Cahaya mandiri dari lampu LED atau layar gadget.
- **Data Channels**: `Z-Depth` (jarak kamera ke objek), `World Normal` (orientasi permukaan $X,Y,Z$), `Motion Vectors` (vektor kecepatan piksel).

---

## 2. Rumus Rekonstruksi Beauty Pass Matematis

Untuk mendapatkan kontrol penuh atas setiap aspek cahaya di Nuke/Fusion, rekonstruksi gambar 3D menggunakan aljabar simpul berikut:

$$\text{Full Beauty} = (\text{Raw Diffuse} \times \text{Diffuse Light}) + \text{Specular} + \text{Indirect} + \text{SSS} + \text{Emission}$$

### Modifikasi Tambahan:
$$\text{Contact Shadowing} = \text{Full Beauty} \times \text{Ambient Occlusion}$$

Dengan alur ini, compositor dapat mengubah warna kilap specular atau menaikkan kecerahan pantulan GI tanpa perlu melakukan re-render 3D berjam-jam.

---

## 3. Efek Atmosfer & Kedalaman (Z-Depth Fog / Haze)
- Gunakan saluran `Z-Depth` yang telah dinormalisasi menggunakan node Grade/Remap.
- Masukkan kabut atmosfer (*atmospheric aerial haze*) di mana objek 3D yang semakin jauh dari kamera akan memudar kontrasnya dan warnanya menyatu dengan warna langit cakrawala.
- Tambahkan Defocus/Bokeh fisik menggunakan node ZDefocus yang membaca saluran kedalaman untuk mensimulasikan Depth of Field (DoF) lensa kamera asli.
