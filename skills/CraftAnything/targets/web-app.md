# Profil Target: Aplikasi Web (Modern Web Applications)

Profil ini mengatur aturan dekonstruksi dan rekonstruksi untuk Single Page Applications (SPA), Multi-Page Apps (MPA), dan Server-Side Rendered (SSR) web applications.

---

## 1. Karakteristik Target Web App
- **Lingkungan Eksekusi**: Browser Web modern (Chrome, Safari, Firefox, Edge).
- **Arsitektur Rendering**: React / Next.js / Vue / Svelte dengan DOM Tree dan CSS Object Model (CSSOM).
- **Manajemen Alur**: Client-side routing, URL state (query params), browser history (`pushState`/`replaceState`), cookies, dan `localStorage`/`sessionStorage`.

---

## 2. Metodologi Dekonstruksi Web App

### 2.1 Pemetaan Pohon DOM & Komponen
1. **Container & Shell**:
   - Identifikasi App Shell: Header global, Navigasi Sidebar, Main Content Area, Footer, dan Modal Portal root.
2. **Layout Engine**:
   - Bedah apakah menggunakan Flexbox satu dimensi (`flex-row`, `justify-between`) atau CSS Grid dua dimensi (`grid-cols-12`).
   - Identifikasi titik henti responsif (*breakpoints*): `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`.
3. **Pola Form & Interaksi**:
   - Cari tahu penanganan input: unmanaged input dengan `ref` atau controlled inputs dengan two-way binding.

### 2.2 Penyadapan Siklus Data & Jaringan
- **Pola Fetching**: REST API endpoints, GraphQL queries, Server-Sent Events (SSE), atau polling berkala.
- **Strategi Caching**: Cache-first, stale-while-revalidate, atau direct fetch tanpa cache.
- **Autentikasi**: Bearer JWT di header `Authorization` atau HttpOnly Session Cookie.

---

## 3. Strategi Rekonstruksi Bersih (Clean Rebuild)
1. **Desain Komponen Atomik**:
   - Susun ulang komponen dari level atom (Button, Input, Badge) $\rightarrow$ molekul (SearchBar, FormField) $\rightarrow$ organisme (CardList, HeaderBar) $\rightarrow$ halaman (DashboardView).
2. **Manajemen State Terpusat**:
   - Gunakan Zustand atau React Context sederhana untuk global state, dan isolasi state lokal komponen (seperti input teks atau toggle modal).
3. **Mocking Mandiri**:
   - Wajib menyediakan data tiruan realistis dalam format JSON sehingga UI dapat dirender sempurna tanpa memerlukan koneksi backend aktif.
