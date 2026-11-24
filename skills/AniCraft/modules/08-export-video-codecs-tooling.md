# Modul 08: Video Export, Codecs & Remotion Automation

Modul ini mendefinisikan standar konversi animasi vektor ke format video linier (MP4 H.264/HEVC, ProRes 4444 dengan transparansi saluran alpha), optimasi palet warna animasi GIF, dan otomasi rendering berbasis kode menggunakan Remotion.

---

## 1. Matriks Standar Format Ekspor Video

| Format Ekspor | Codec Video | Saluran Alpha (Transparan) | Kasus Penggunaan Ideal |
|---|---|---|---|
| **Lottie JSON** | Data Vektor JSON | Ya (Alami) | Aplikasi Android, iOS, dan Web Interaktif |
| **dotLottie (.lottie)**| ZIP Terkompresi | Ya (Alami) | Aplikasi produksi modern (ukuran 80% lebih kecil) |
| **Apple ProRes 4444** | ProRes 4444 XQ | **Ya (32-bit RGBA)** | Aset overlay untuk editor video NLE (Premiere / DaVinci) |
| **MP4 Video** | H.264 / AAC | Tidak (Background padat) | Video promosi media sosial, YouTube, Instagram |
| **Animated GIF** | Palet 256 Warna | Ya (Biner 1-bit) | Lampiran email, stiker chat, dokumentasi README |

---

## 2. Optimasi Palet Animasi GIF

- Standar GIF dibatasi maksimal **256 warna index**.
- Jangan gunakan gradien halus berlebih pada animasi GIF karena akan memicu garis patahan kasar (*banding posterization*).
- Gunakan algoritma *Perceptual Adaptive Palette* dengan dithering *Diffusion* tipis ($50 - 75\%$) untuk menghasilkan ukuran file ringan di bawah $2\text{ MB}$.

---

## 3. Rendering Vektor Terprogram via Remotion (React Video)

Remotion memungkinkan perenderan animasi vektor React ke dalam video MP4 secara terprogram melalui terminal atau server CI/CD:

```typescript
import { Composition } from "remotion";
import { VectorLogoIntro } from "./VectorLogoIntro";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="LogoIntro"
      component={VectorLogoIntro}
      durationInFrames={180}
      fps={60}
      width={1920}
      height={1080}
      defaultProps={{
        primaryColor: "#0052D4",
        brandName: "AniCraft Studio"
      }}
    />
  );
};
```
