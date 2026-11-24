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
  const possiblePaths = [
    path.resolve(__dirname, "../skills"),       // Saat dijalankan dari dist/ di root repo
    path.resolve(__dirname, "../../skills"),    // Cadangan saat nested di node_modules
    path.join(process.cwd(), "skills"),         // Jika user menjalankan di dalam repo ArtCraft
    path.resolve(__dirname, ".."),              // Fallback langsung ke parent
    process.cwd(),                              // Fallback root
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

  // Jika tidak ditemukan, default ke folder skills di root
  return path.resolve(__dirname, "../skills");
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
