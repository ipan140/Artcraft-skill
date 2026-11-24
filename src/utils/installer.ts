import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ARTCRAFT_SKILLS, type SkillMetadata } from "../constants/skills.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Mendapatkan lokasi direktori sumber skill ArtCraft.
 * Mendukung eksekusi lokal (di dalam repo) maupun saat dijalankan via global npx package.
 */
export async function getSkillsSourceDir(): Promise<string> {
  // 1. Cek relatif dari file yang dikompilasi di dist/
  const possiblePaths = [
    path.resolve(__dirname, ".."),           // Saat dijalankan dari dist/ di root repo
    path.resolve(__dirname, "../.."),        // Cadangan
    process.cwd(),                           // Jika user menjalankan di dalam repo ArtCraft
  ];

  for (const candidate of possiblePaths) {
    try {
      const checkPath = path.join(candidate, "FigCraft", "SKILL.md");
      await fs.access(checkPath);
      return candidate;
    } catch {
      // Coba path berikutnya
    }
  }

  // Jika tidak ditemukan lokal, gunakan direktori repo root saat ini
  return path.resolve(__dirname, "..");
}

/**
 * Menyalin satu folder skill ke folder tujuan pengguna.
 */
export async function installSkill(
  skill: SkillMetadata,
  targetDirectory: string,
  sourceBaseDir: string
): Promise<{ success: boolean; targetPath: string; error?: string }> {
  const sourcePath = path.join(sourceBaseDir, skill.folder);
  const destPath = path.join(targetDirectory, skill.folder);

  try {
    // Pastikan folder sumber ada
    await fs.access(sourcePath);

    // Buat direktori tujuan jika belum ada
    await fs.mkdir(destPath, { recursive: true });

    // Salin rekursif seluruh isi folder skill
    await fs.cp(sourcePath, destPath, {
      recursive: true,
      force: true,
    });

    return { success: true, targetPath: destPath };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    return { success: false, targetPath: destPath, error: errorMsg };
  }
}
