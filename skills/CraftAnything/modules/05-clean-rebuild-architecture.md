# Modul 05: Pola Arsitektur Rekonstruksi Bersih (Clean Rebuild Architecture)

Modul ini menetapkan prinsip arsitektur perangkat lunak modern untuk mengubah kode yang dibongkar (*reverse engineered*) menjadi struktur modular yang rapi, mudah diuji, dan skalabel (*clean architecture*).

---

## 1. Prinsip Pemisahan Lapisan (Layered Separation)

Struktur proyek hasil rekonstruksi wajib memisahkan tanggung jawab kode ke dalam 4 lapisan:

```text
src/
├── types/          # [Layer 1: Domain Entities] Kontrak tipe data murni (tanpa dependensi framework)
├── services/       # [Layer 2: Data Sources & Repositories] Panggilan API, storage adapter, cache
├── store/          # [Layer 3: Application State & Use Cases] Zustand / Redux, Finite State Machines
└── components/     # [Layer 4: Presentation / UI] Komponen React/Vue dengan styling Tailwind murni
```

---

## 2. Pola Repositori untuk Data Fetching (Repository Pattern)

Jangan pernah memanggil `fetch()` atau `axios()` secara langsung di dalam komponen UI (`useEffect`). Bungkus komunikasi data dalam repositori:

```typescript
// src/services/boardRepository.ts
import { KanbanCardItem, BoardColumn } from "../types";

export interface IBoardRepository {
  getBoardData(boardId: string): Promise<{ columns: BoardColumn[]; cards: KanbanCardItem[] }>;
  updateCardPosition(cardId: string, newColId: string, newIndex: number): Promise<boolean>;
  createCard(colId: string, title: string): Promise<KanbanCardItem>;
}

// Implementasi Mock Offline untuk Eksekusi Mandiri
export class MockBoardRepository implements IBoardRepository {
  async getBoardData(boardId: string) {
    // Simulasi delay jaringan 200ms
    await new Promise((r) => setTimeout(r, 200));
    return { columns: mockColumns, cards: mockCards };
  }
  
  async updateCardPosition(cardId: string, newColId: string, newIndex: number) {
    return true;
  }

  async createCard(colId: string, title: string) {
    return {
      id: `card-${Date.now()}`,
      boardId: "board-1",
      columnId: colId,
      title,
      orderIndex: 999,
      tags: [],
      assignees: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  }
}
```

---

## 3. Komponen Presentasional Murni vs Komponen Pintar (Smart vs Dumb Components)
- **Komponen Pintar (Container)**: Berlangganan ke store/state (`useKanbanStore`), menangani event handler, dan menyalurkan data ke komponen anak.
- **Komponen Presentasional (Dumb / UI)**: Hanya menerima props dan callback fungsi (`onClick`, `onDragStart`), tidak memiliki dependensi ke global store, sehingga 100% reusable dan mudah diuji dengan Storybook atau unit test.
