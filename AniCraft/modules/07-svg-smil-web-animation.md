# Modul 07: SVG SMIL, CSS Keyframes & Web Animations API

Modul ini menetapkan arsitektur animasi vektor langsung di peramban web (*Native Web Vector Animations*), pemanfaatan animasi SMIL SVG (`<animateTransform>`), CSS `@keyframes`, dan Web Animations API (WAAPI).

---

## 1. Animasi SMIL Tertanam dalam SVG (Self-Contained Animated SVG)

Format SMIL memungkinkan berkas `.svg` bergerak secara mandiri tanpa memerlukan pustaka JavaScript eksternal:

```xml
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Lingkaran Berdenyut Mandiri -->
  <circle cx="50" cy="50" r="20" fill="#0066FF">
    <!-- Animasi Denyut Skala Radius -->
    <animate attributeName="r" values="20; 35; 20" dur="1.5s" repeatCount="indefinite"
             calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
    <!-- Animasi Opasitas -->
    <animate attributeName="opacity" values="1; 0.4; 1" dur="1.5s" repeatCount="indefinite" />
  </circle>
</svg>
```

---

## 2. Animasi Berbasis CSS `@keyframes` pada Vektor

Untuk interaktivitas responsif berbasis status hover atau class Tailwind/CSS:

```css
@keyframes spinPulse {
  0% {
    transform: rotate(0deg) scale(1);
    opacity: 1;
  }
  50% {
    transform: rotate(180deg) scale(1.15);
    opacity: 0.7;
  }
  100% {
    transform: rotate(360deg) scale(1);
    opacity: 1;
  }
}

.animated-svg-icon {
  transform-origin: center;
  animation: spinPulse 2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
}
```

---

## 3. Web Animations API (WAAPI) untuk Animasi Berkinerja Tinggi

- WAAPI berjalan langsung pada *Compositor Thread* browser, sehingga animasi tetap mulus $60\text{ FPS}$ meskipun CPU utama sedang sibuk memproses komputasi JavaScript berat:

```javascript
const icon = document.querySelector("#my-vector-path");
icon.animate([
  { transform: "scale(1) rotate(0deg)", opacity: 1 },
  { transform: "scale(1.2) rotate(45deg)", opacity: 0.8 },
  { transform: "scale(1) rotate(0deg)", opacity: 1 }
], {
  duration: 400,
  easing: "cubic-bezier(0.16, 1, 0.3, 1)",
  iterations: 1
});
```
