import * as p from "@clack/prompts";
import pc from "picocolors";
import path from "node:path";
import { ARTCRAFT_SKILLS, AGENT_PLATFORMS, type SkillMetadata } from "../constants/skills.js";
import { getAsciiBanner } from "../utils/banner.js";
import { getSkillsSourceDir, installSkill } from "../utils/installer.js";

export interface InitOptions {
  all?: boolean;
  yes?: boolean;
  path?: string;
  platform?: string;
}

export async function runInit(options: InitOptions = {}): Promise<void> {
  console.log(getAsciiBanner());

  p.intro(pc.bgCyan(pc.black(" ArtCraft Skill CLI — Interactive Setup ")));

  // 1. Pilih Platform AI Agent
  let selectedPlatformKey = options.platform;
  if (!selectedPlatformKey || !AGENT_PLATFORMS[selectedPlatformKey]) {
    selectedPlatformKey = (await p.select({
      message: "Pilih platform AI Coding Agent yang Anda gunakan:",
      initialValue: "antigravity",
      options: [
        { value: "antigravity", label: "Google Antigravity (AGY)", hint: "./.agents/skills" },
        { value: "cursor", label: "Cursor AI", hint: "./.cursor/rules" },
        { value: "claude", label: "Claude Code / Anthropic", hint: "./.claude/skills" },
        { value: "copilot", label: "GitHub Copilot", hint: "./.github/copilot-instructions.d" },
        { value: "roo", label: "Roo Code / Cline", hint: "./.roo/rules" },
        { value: "custom", label: "Kustom Direktori", hint: "Tentukan folder bebas" },
      ],
    })) as string;

    if (p.isCancel(selectedPlatformKey)) {
      p.cancel("Operasi dibatalkan.");
      process.exit(0);
    }
  }

  const platformInfo = AGENT_PLATFORMS[selectedPlatformKey] || AGENT_PLATFORMS.antigravity;

  // 2. Tentukan Direktori Tujuan
  let targetPath = options.path;
  if (!targetPath) {
    targetPath = (await p.text({
      message: `Folder tujuan instalasi skill:`,
      placeholder: platformInfo.defaultPath,
      defaultValue: platformInfo.defaultPath,
      validate(value) {
        if (!value.trim()) return "Path tidak boleh kosong.";
      },
    })) as string;

    if (p.isCancel(targetPath)) {
      p.cancel("Operasi dibatalkan.");
      process.exit(0);
    }
  }

  // 3. Pemilihan Skill
  let selectedSkillIds: string[] = [];

  if (options.all) {
    selectedSkillIds = ARTCRAFT_SKILLS.map((s) => s.id);
  } else {
    const skillChoices = [
      {
        value: "__ALL__",
        label: pc.bold(pc.green("✨ [PILIH SEMUA] — Instal seluruh 19 Skill ArtCraft")),
        hint: "Rekomendasi untuk suite lengkap",
      },
      ...ARTCRAFT_SKILLS.map((skill) => ({
        value: skill.id,
        label: `${pc.bold(skill.name)} — ${skill.description}`,
        hint: skill.highlight,
      })),
    ];

    const answer = (await p.multiselect({
      message: "Pilih skill ArtCraft yang ingin Anda pasang (tekan Spasi untuk memilih):",
      options: skillChoices,
      required: true,
    })) as string[];

    if (p.isCancel(answer)) {
      p.cancel("Operasi dibatalkan.");
      process.exit(0);
    }

    if (answer.includes("__ALL__")) {
      selectedSkillIds = ARTCRAFT_SKILLS.map((s) => s.id);
    } else {
      selectedSkillIds = answer;
    }
  }

  const skillsToInstall = ARTCRAFT_SKILLS.filter((s) => selectedSkillIds.includes(s.id));

  // 4. Konfirmasi
  if (!options.yes) {
    const shouldProceed = await p.confirm({
      message: `Pasang ${pc.bold(pc.cyan(skillsToInstall.length))} skill ke ${pc.bold(pc.yellow(targetPath))}?`,
      initialValue: true,
    });

    if (p.isCancel(shouldProceed) || !shouldProceed) {
      p.cancel("Instalasi dibatalkan oleh pengguna.");
      process.exit(0);
    }
  }

  // 5. Eksekusi Instalasi dengan Spinner
  const s = p.spinner();
  s.start(`Menginstal ${skillsToInstall.length} skill ArtCraft...`);

  const sourceBaseDir = await getSkillsSourceDir();
  const absoluteTargetDir = path.resolve(process.cwd(), targetPath);

  const results: { skill: SkillMetadata; success: boolean; error?: string }[] = [];

  for (const skill of skillsToInstall) {
    s.message(`Menyalin modul ${pc.cyan(skill.name)}...`);
    const res = await installSkill(skill, absoluteTargetDir, sourceBaseDir);
    results.push({ skill, success: res.success, error: res.error });
  }

  s.stop(pc.green(`✔ Selesai! Berhasil memasang ${skillsToInstall.length} skill ArtCraft.`));

  // 6. Ringkasan & Next Steps
  const successList = results.filter((r) => r.success);
  const failedList = results.filter((r) => !r.success);

  let summaryContent = `${pc.bold("Direktori:")} ${absoluteTargetDir}\n\n`;
  summaryContent += `${pc.bold("Daftar Skill Terpasang:")}\n`;

  for (const item of successList) {
    summaryContent += `  ${pc.green("✔")} ${pc.bold(item.skill.name)} (${item.skill.highlight})\n`;
  }

  if (failedList.length > 0) {
    summaryContent += `\n${pc.bold(pc.red("Gagal dipasang:"))}\n`;
    for (const item of failedList) {
      summaryContent += `  ${pc.red("✖")} ${item.skill.name}: ${item.error}\n`;
    }
  }

  p.note(summaryContent, "Ringkasan Instalasi ArtCraft Suite");

  p.outro(
    pc.bold(
      `🎉 ${pc.cyan("Instalasi Sukses!")} Sekarang asisten AI Anda dapat menggunakan skill ini secara otomatis.`
    )
  );
}
