# Profil Target: Game Canvas & Interaktif (2D/3D Canvas Games)

Profil ini mengatur aturan dekonstruksi dan rekonstruksi untuk game berbasis web (HTML5 Canvas 2D, WebGL, PixiJS, Three.js) dan aplikasi simulasi interaktif.

---

## 1. Karakteristik Target Canvas Game
- **Model Eksekusi**: Siklus Game Loop kontinu 60 Frame Per Second (FPS) menggunakan `requestAnimationFrame`.
- **Manajemen Pipeline**:
  - `Process Input` (Keyboard, mouse, touch, gamepad) $\rightarrow$ `Update State & Physics` (Delta time, gravitasi, kecepatan, tabrakan) $\rightarrow$ `Render Canvas` (Clear screen, draw sprites, particle FX).
- **Struktur State**: Koordinat posisi ($X, Y$), vektor kecepatan ($V_x, V_y$), akselerasi, orientasi sudut (*rotation angle*), dan status entitas (hidup, tertabrak, meledak, game over).

---

## 2. Metodologi Dekonstruksi Game

### 2.1 Dekonstruksi Fisika & Tabrakan (Collision Detection)
1. **Deteksi Kotak Batas (AABB - Axis-Aligned Bounding Box)**:
   - Evaluasi apakah dua entitas saling bertabrakan: `x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2`.
2. **Deteksi Lingkaran (Circle / Radial Collision)**:
   - Jarak Euclidean kuadrat: $(x_2 - x_1)^2 + (y_2 - y_1)^2 \le (r_1 + r_2)^2$.
3. **Penyusunan Peta Kisi / Tilemap**:
   - Analisa grid 2D array untuk rintangan, platform, dinding maze, dan titik spawn musuh.

### 2.2 Ekstraksi Siklus Animasi & Partikel
- Lembar sprite (*sprite sheet*): baris, kolom, lebar frame, dan interval waktu pergantian frame.
- Sistem partikel (*particle emitter*): lifespan partikel, sudut sebar, laju perlambatan (*friction*), dan degradasi transparansi (*fade out*).

---

## 3. Strategi Rekonstruksi Bersih (Clean Rebuild)
1. **Time-Step Bebas Framerate (Delta Time)**:
   - Gerakan objek harus dikalikan dengan `deltaTime` (waktu berlalu antar frame dalam detik) agar kecepatan game konstan di layar 60Hz, 120Hz, maupun 144Hz: `x += speed * dt`.
2. **Entity Component System (ECS) Ringan**:
   - Pisahkan data entitas (komponen) dari logika manipulasi data (sistem gerak, sistem tabrakan, sistem render).
3. **Pembersihan Memori (Object Pooling)**:
   - Gunakan kembali objek peluru (*bullet pool*) atau partikel lama daripada membuat objek baru terus-menerus (`new Bullet()`) yang memicu jeda Garbage Collector (GC lag).
