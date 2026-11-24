import pc from "picocolors";
import { ARTCRAFT_SKILLS } from "../constants/skills.js";
import { getAsciiBanner } from "../utils/banner.js";

export function runList(): void {
  console.log(getAsciiBanner());
  console.log(pc.bold(pc.white(`📋 Daftar Lengkap 19 Skill ArtCraft Suite:\n`)));

  const categories = Array.from(new Set(ARTCRAFT_SKILLS.map((s) => s.category)));

  for (const cat of categories) {
    console.log(pc.bold(pc.cyan(`\n▪ [Kategori: ${cat}]`)));
    const skillsInCat = ARTCRAFT_SKILLS.filter((s) => s.category === cat);

    for (const skill of skillsInCat) {
      console.log(
        `  ${pc.green("•")} ${pc.bold(pc.yellow(skill.name.padEnd(16)))} ` +
        `${pc.white(skill.description)} ` +
        `${pc.dim(`[${skill.highlight}]`)}`
      );
    }
  }

  console.log(
    pc.dim(
      `\nUntuk menginstal, jalankan: ${pc.cyan("npx artcraft-skill init")} atau ${pc.cyan(
        "npx artcraft-skill add <nama-skill>"
      )}\n`
    )
  );
}
