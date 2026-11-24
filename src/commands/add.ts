import * as p from "@clack/prompts";
import pc from "picocolors";
import path from "node:path";
import { ARTCRAFT_SKILLS } from "../constants/skills.js";
import { getSkillsSourceDir, installSkill } from "../utils/installer.js";

export interface AddOptions {
  path?: string;
}

export async function runAdd(skillNames: string[], options: AddOptions = {}): Promise<void> {
  const targetPath = options.path || "./.agents/skills";

  if (!skillNames || skillNames.length === 0) {
    console.error(pc.red("Error: Harap sebutkan minimal satu nama skill yang ingin dipasang."));
    console.log(`Contoh: ${pc.cyan("npx artcraft-skill add figcraft solidcraft")}`);
    process.exit(1);
  }

  const normalizedRequested = skillNames.map((s) => s.toLowerCase().trim());
  const matchedSkills = ARTCRAFT_SKILLS.filter((s) =>
    normalizedRequested.includes(s.id.toLowerCase()) || normalizedRequested.includes(s.name.toLowerCase())
  );

  if (matchedSkills.length === 0) {
    console.error(pc.red("Error: Tidak ada nama skill yang cocok. Jalankan 'npx artcraft-skill list' untuk melihat daftar."));
    process.exit(1);
  }

  const s = p.spinner();
  s.start(`Memasang ${matchedSkills.length} skill ke ${targetPath}...`);

  const sourceBaseDir = await getSkillsSourceDir();
  const absoluteTargetDir = path.resolve(process.cwd(), targetPath);

  for (const skill of matchedSkills) {
    s.message(`Menyalin ${pc.cyan(skill.name)}...`);
    await installSkill(skill, absoluteTargetDir, sourceBaseDir);
  }

  s.stop(pc.green(`✔ Berhasil memasang ${matchedSkills.length} skill ke ${absoluteTargetDir}`));
}
