#!/usr/bin/env node


// src/index.ts
import { Command } from "commander";

// src/commands/init.ts
import * as p from "@clack/prompts";
import pc2 from "picocolors";
import path2 from "path";

// src/constants/skills.ts
var ARTCRAFT_SKILLS = [
  {
    id: "figcraft",
    name: "FigCraft",
    folder: "FigCraft",
    category: "Frontend & UI/UX",
    description: "Komponen UI frontend, design tokens, multi-device adaptive, dark mode, dan WCAG AA",
    modulesCount: 8,
    highlight: "React + Tailwind + shadcn/ui"
  },
  {
    id: "anicraft",
    name: "AniCraft",
    folder: "AniCraft",
    category: "Motion & Animation",
    description: "Animasi vektor 2D, 12 prinsip animasi, graph editor bezier, dan Lottie JSON/Framer",
    modulesCount: 8,
    highlight: "Lottie JSON + Framer Motion"
  },
  {
    id: "cadcraft",
    name: "CADCraft",
    folder: "CADCraft",
    category: "Engineering Drafting",
    description: "Gambar kerja 2D/3D teknis standar ISO/ANSI, standarisasi layer, dan toleransi GD&T",
    modulesCount: 8,
    highlight: "ezdxf Python + ISO 286"
  },
  {
    id: "craftanything",
    name: "CraftAnything",
    folder: "CraftAnything",
    category: "Reverse Engineering",
    description: "Dekonstruksi arsitektur website/game, reverse engineering DOM/API, dan rekonstruksi kode",
    modulesCount: 8,
    highlight: "DOM Inspector + API Rebuilder"
  },
  {
    id: "deckcraft",
    name: "DeckCraft",
    folder: "DeckCraft",
    category: "Presentation & Pitch",
    description: "Slide presentasi eksekutif 16:9, alur Minto Pyramid, cognitive ease, dan speaker notes",
    modulesCount: 8,
    highlight: "Marp Markdown + Paged CSS"
  },
  {
    id: "designcraft",
    name: "DesignCraft",
    folder: "DesignCraft",
    category: "Editorial & Print",
    description: "Tata letak editorial majalah/buku, baseline grid, facing pages, gutter margin, dan CMYK",
    modulesCount: 8,
    highlight: "CSS Paged Media + Pre-Press"
  },
  {
    id: "effectcraft",
    name: "EffectCraft",
    folder: "EffectCraft",
    category: "VFX & Compositing",
    description: "Visual effects berbasis node graph, green screen despill, 3D tracking, dan linear 32-bit",
    modulesCount: 8,
    highlight: "Nuke Python + OpenColorIO"
  },
  {
    id: "filmcraft",
    name: "FilmCraft",
    folder: "FilmCraft",
    category: "Video Editing",
    description: "Editing video NLE, pemotongan berirama (J/L-Cut), color grading Rec.709, dan audio ducking",
    modulesCount: 8,
    highlight: "OpenTimelineIO (OTIO) + EDL"
  },
  {
    id: "gridcraft",
    name: "GridCraft",
    folder: "GridCraft",
    category: "Data & Spreadsheets",
    description: "Permodelan keuangan 3-sheet, formula modern (XLOOKUP, LET, LAMBDA), dan audit model",
    modulesCount: 8,
    highlight: "openpyxl Python + SaaS Model"
  },
  {
    id: "lightcraft",
    name: "LightCraft",
    folder: "LightCraft",
    category: "Photography & RAW",
    description: "Pengembangan foto RAW non-destruktif, tone curves (S-Curve), lensa optik, dan HSL",
    modulesCount: 8,
    highlight: "Adobe Camera Raw XMP XML"
  },
  {
    id: "mailcraft",
    name: "MailCraft",
    folder: "MailCraft",
    category: "Business Communication",
    description: "Korespondensi surel bisnis eksekutif, BLUF, action items, batas waktu, dan payload .ics",
    modulesCount: 8,
    highlight: "RFC 5545 .ics + BLUF Framework"
  },
  {
    id: "materialcraft",
    name: "MaterialCraft",
    folder: "MaterialCraft",
    category: "Procedural 3D Shaders",
    description: "Material prosedural PBR tak terbatas resolusi berbasis node (Cook-Torrance, ORM packing)",
    modulesCount: 8,
    highlight: "Blender bpy + Unreal ORM"
  },
  {
    id: "pdfcraft",
    name: "PdfCraft",
    folder: "PdfCraft",
    category: "Document Engineering",
    description: "Form PDF interaktif AcroForm, enkripsi AES-256, redaksi permanen, dan arsip PDF/A-2b",
    modulesCount: 8,
    highlight: "PyMuPDF fitz + PAdES Signatures"
  },
  {
    id: "photocraft",
    name: "PhotoCraft",
    folder: "PhotoCraft",
    category: "Raster Retouching",
    description: "Manipulasi raster non-destruktif 16-bit, frequency separation, dan dual curves D&B",
    modulesCount: 8,
    highlight: "Photoshop ExtendScript JSX"
  },
  {
    id: "solidcraft",
    name: "SolidCraft",
    folder: "SolidCraft",
    category: "Parametric 3D CAD",
    description: "Pemodelan padat parametrik (B-Rep), sketsa kendala penuh (zero DOF), DFM CNC/Injeksi, STEP",
    modulesCount: 8,
    highlight: "Python CadQuery + STEP AP214"
  },
  {
    id: "soundcraft",
    name: "SoundCraft",
    folder: "SoundCraft",
    category: "Audio Engineering",
    description: "Perekaman audio, vocal channel strip, sidechain ducking, DME stems, dan mastering LUFS",
    modulesCount: 8,
    highlight: "FFmpeg filter_complex + EBU R128"
  },
  {
    id: "texturecraft",
    name: "TextureCraft",
    folder: "TextureCraft",
    category: "3D Texture Painting",
    description: "Pengecatan tekstur mesh 3D, UV UDIM multi-tile, baking peta AO/Curvature, dan smart masks",
    modulesCount: 8,
    highlight: "Substance 3D Painter Python"
  },
  {
    id: "vectorcraft",
    name: "VectorCraft",
    folder: "VectorCraft",
    category: "Vector Design & Icons",
    description: "Ilustrasi vektor presisi, titik simpul extrema B\xE9zier, pixel-grid snapping, dan SVG bersih",
    modulesCount: 8,
    highlight: "Clean SVG + SVGO Optimization"
  },
  {
    id: "wordcraft",
    name: "WordCraft",
    folder: "WordCraft",
    category: "Corporate Documents",
    description: "Naskah korporat formal, proposal tender lelang, Heading 1-3, BLUF summary, dan sitasi APA",
    modulesCount: 8,
    highlight: "python-docx + Corporate DOCX"
  }
];
var AGENT_PLATFORMS = {
  antigravity: {
    name: "Google Antigravity",
    defaultPath: "./.agents/skills",
    description: "Format standar skill bawaan untuk ekosistem Google Antigravity (AGY)"
  },
  cursor: {
    name: "Cursor AI",
    defaultPath: "./.cursor/rules",
    description: "Rules dan panduan agent coding untuk editor Cursor"
  },
  claude: {
    name: "Claude Code / Anthropic",
    defaultPath: "./.claude/skills",
    description: "Custom tool & skill bundle untuk Claude Code CLI"
  },
  copilot: {
    name: "GitHub Copilot",
    defaultPath: "./.github/copilot-instructions.d",
    description: "Instruksi modular untuk GitHub Copilot Workspace"
  },
  roo: {
    name: "Roo Code / Cline",
    defaultPath: "./.roo/rules",
    description: "Custom rules untuk ekstensi VS Code Roo Code"
  },
  custom: {
    name: "Custom Directory",
    defaultPath: "./skills",
    description: "Tentukan folder tujuan Anda sendiri secara bebas"
  }
};

// src/utils/banner.ts
import pc from "picocolors";
function getAsciiBanner() {
  const line1 = pc.cyan("   ___          _     ____                __  _   ");
  const line2 = pc.cyan("  / _ \\  _ __  | |_  / ___|_ __  __ _    / _| | |_ ");
  const line3 = pc.blue(" / /_\\ \\| '__| | __| | |   | '__|/ _` |  | |_  | __|");
  const line4 = pc.blue("/ / _ \\ \\ |    | |_  | |___| |  | (_| |  |  _| | |_ ");
  const line5 = pc.magenta("\\_/   \\_/_|     \\__|  \\____|_|   \\__,_|  |_|    \\__|");
  const tag = pc.bold(pc.white("  \u{1F3A8} ArtCraft Suite \u2014 AI Skills & Agent Architecture (v2.1.0)"));
  const author = pc.dim("  Created by Ivano Rossi Sugiyanto \u2022 19 Modular AI Craft Skills");
  return `
${line1}
${line2}
${line3}
${line4}
${line5}

${tag}
${author}
`;
}

// src/utils/installer.ts
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
async function getSkillsSourceDir() {
  const possiblePaths = [
    path.resolve(__dirname, ".."),
    // Saat dijalankan dari dist/ di root repo
    path.resolve(__dirname, "../.."),
    // Cadangan
    process.cwd()
    // Jika user menjalankan di dalam repo ArtCraft
  ];
  for (const candidate of possiblePaths) {
    try {
      const checkPath = path.join(candidate, "FigCraft", "SKILL.md");
      await fs.access(checkPath);
      return candidate;
    } catch {
    }
  }
  return path.resolve(__dirname, "..");
}
async function installSkill(skill, targetDirectory, sourceBaseDir) {
  const sourcePath = path.join(sourceBaseDir, skill.folder);
  const destPath = path.join(targetDirectory, skill.folder);
  try {
    await fs.access(sourcePath);
    await fs.mkdir(destPath, { recursive: true });
    await fs.cp(sourcePath, destPath, {
      recursive: true,
      force: true
    });
    return { success: true, targetPath: destPath };
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    return { success: false, targetPath: destPath, error: errorMsg };
  }
}

// src/commands/init.ts
async function runInit(options = {}) {
  console.log(getAsciiBanner());
  p.intro(pc2.bgCyan(pc2.black(" ArtCraft Skill CLI \u2014 Interactive Setup ")));
  let selectedPlatformKey = options.platform;
  if (!selectedPlatformKey || !AGENT_PLATFORMS[selectedPlatformKey]) {
    selectedPlatformKey = await p.select({
      message: "Pilih platform AI Coding Agent yang Anda gunakan:",
      initialValue: "antigravity",
      options: [
        { value: "antigravity", label: "Google Antigravity (AGY)", hint: "./.agents/skills" },
        { value: "cursor", label: "Cursor AI", hint: "./.cursor/rules" },
        { value: "claude", label: "Claude Code / Anthropic", hint: "./.claude/skills" },
        { value: "copilot", label: "GitHub Copilot", hint: "./.github/copilot-instructions.d" },
        { value: "roo", label: "Roo Code / Cline", hint: "./.roo/rules" },
        { value: "custom", label: "Kustom Direktori", hint: "Tentukan folder bebas" }
      ]
    });
    if (p.isCancel(selectedPlatformKey)) {
      p.cancel("Operasi dibatalkan.");
      process.exit(0);
    }
  }
  const platformInfo = AGENT_PLATFORMS[selectedPlatformKey] || AGENT_PLATFORMS.antigravity;
  let targetPath = options.path;
  if (!targetPath) {
    targetPath = await p.text({
      message: `Folder tujuan instalasi skill:`,
      placeholder: platformInfo.defaultPath,
      defaultValue: platformInfo.defaultPath,
      validate(value) {
        if (!value.trim()) return "Path tidak boleh kosong.";
      }
    });
    if (p.isCancel(targetPath)) {
      p.cancel("Operasi dibatalkan.");
      process.exit(0);
    }
  }
  let selectedSkillIds = [];
  if (options.all) {
    selectedSkillIds = ARTCRAFT_SKILLS.map((s2) => s2.id);
  } else {
    const skillChoices = [
      {
        value: "__ALL__",
        label: pc2.bold(pc2.green("\u2728 [PILIH SEMUA] \u2014 Instal seluruh 19 Skill ArtCraft")),
        hint: "Rekomendasi untuk suite lengkap"
      },
      ...ARTCRAFT_SKILLS.map((skill) => ({
        value: skill.id,
        label: `${pc2.bold(skill.name)} \u2014 ${skill.description}`,
        hint: skill.highlight
      }))
    ];
    const answer = await p.multiselect({
      message: "Pilih skill ArtCraft yang ingin Anda pasang (tekan Spasi untuk memilih):",
      options: skillChoices,
      required: true
    });
    if (p.isCancel(answer)) {
      p.cancel("Operasi dibatalkan.");
      process.exit(0);
    }
    if (answer.includes("__ALL__")) {
      selectedSkillIds = ARTCRAFT_SKILLS.map((s2) => s2.id);
    } else {
      selectedSkillIds = answer;
    }
  }
  const skillsToInstall = ARTCRAFT_SKILLS.filter((s2) => selectedSkillIds.includes(s2.id));
  if (!options.yes) {
    const shouldProceed = await p.confirm({
      message: `Pasang ${pc2.bold(pc2.cyan(skillsToInstall.length))} skill ke ${pc2.bold(pc2.yellow(targetPath))}?`,
      initialValue: true
    });
    if (p.isCancel(shouldProceed) || !shouldProceed) {
      p.cancel("Instalasi dibatalkan oleh pengguna.");
      process.exit(0);
    }
  }
  const s = p.spinner();
  s.start(`Menginstal ${skillsToInstall.length} skill ArtCraft...`);
  const sourceBaseDir = await getSkillsSourceDir();
  const absoluteTargetDir = path2.resolve(process.cwd(), targetPath);
  const results = [];
  for (const skill of skillsToInstall) {
    s.message(`Menyalin modul ${pc2.cyan(skill.name)}...`);
    const res = await installSkill(skill, absoluteTargetDir, sourceBaseDir);
    results.push({ skill, success: res.success, error: res.error });
  }
  s.stop(pc2.green(`\u2714 Selesai! Berhasil memasang ${skillsToInstall.length} skill ArtCraft.`));
  const successList = results.filter((r) => r.success);
  const failedList = results.filter((r) => !r.success);
  let summaryContent = `${pc2.bold("Direktori:")} ${absoluteTargetDir}

`;
  summaryContent += `${pc2.bold("Daftar Skill Terpasang:")}
`;
  for (const item of successList) {
    summaryContent += `  ${pc2.green("\u2714")} ${pc2.bold(item.skill.name)} (${item.skill.highlight})
`;
  }
  if (failedList.length > 0) {
    summaryContent += `
${pc2.bold(pc2.red("Gagal dipasang:"))}
`;
    for (const item of failedList) {
      summaryContent += `  ${pc2.red("\u2716")} ${item.skill.name}: ${item.error}
`;
    }
  }
  p.note(summaryContent, "Ringkasan Instalasi ArtCraft Suite");
  p.outro(
    pc2.bold(
      `\u{1F389} ${pc2.cyan("Instalasi Sukses!")} Sekarang asisten AI Anda dapat menggunakan skill ini secara otomatis.`
    )
  );
}

// src/commands/list.ts
import pc3 from "picocolors";
function runList() {
  console.log(getAsciiBanner());
  console.log(pc3.bold(pc3.white(`\u{1F4CB} Daftar Lengkap 19 Skill ArtCraft Suite:
`)));
  const categories = Array.from(new Set(ARTCRAFT_SKILLS.map((s) => s.category)));
  for (const cat of categories) {
    console.log(pc3.bold(pc3.cyan(`
\u25AA [Kategori: ${cat}]`)));
    const skillsInCat = ARTCRAFT_SKILLS.filter((s) => s.category === cat);
    for (const skill of skillsInCat) {
      console.log(
        `  ${pc3.green("\u2022")} ${pc3.bold(pc3.yellow(skill.name.padEnd(16)))} ${pc3.white(skill.description)} ${pc3.dim(`[${skill.highlight}]`)}`
      );
    }
  }
  console.log(
    pc3.dim(
      `
Untuk menginstal, jalankan: ${pc3.cyan("npx artcraft-skill init")} atau ${pc3.cyan(
        "npx artcraft-skill add <nama-skill>"
      )}
`
    )
  );
}

// src/commands/add.ts
import * as p2 from "@clack/prompts";
import pc4 from "picocolors";
import path3 from "path";
async function runAdd(skillNames, options = {}) {
  const targetPath = options.path || "./.agents/skills";
  if (!skillNames || skillNames.length === 0) {
    console.error(pc4.red("Error: Harap sebutkan minimal satu nama skill yang ingin dipasang."));
    console.log(`Contoh: ${pc4.cyan("npx artcraft-skill add figcraft solidcraft")}`);
    process.exit(1);
  }
  const normalizedRequested = skillNames.map((s2) => s2.toLowerCase().trim());
  const matchedSkills = ARTCRAFT_SKILLS.filter(
    (s2) => normalizedRequested.includes(s2.id.toLowerCase()) || normalizedRequested.includes(s2.name.toLowerCase())
  );
  if (matchedSkills.length === 0) {
    console.error(pc4.red("Error: Tidak ada nama skill yang cocok. Jalankan 'npx artcraft-skill list' untuk melihat daftar."));
    process.exit(1);
  }
  const s = p2.spinner();
  s.start(`Memasang ${matchedSkills.length} skill ke ${targetPath}...`);
  const sourceBaseDir = await getSkillsSourceDir();
  const absoluteTargetDir = path3.resolve(process.cwd(), targetPath);
  for (const skill of matchedSkills) {
    s.message(`Menyalin ${pc4.cyan(skill.name)}...`);
    await installSkill(skill, absoluteTargetDir, sourceBaseDir);
  }
  s.stop(pc4.green(`\u2714 Berhasil memasang ${matchedSkills.length} skill ke ${absoluteTargetDir}`));
}

// src/index.ts
var program = new Command();
program.name("artcraft-skill").description("Interactive CLI installer and manager for the ArtCraft AI Agent Skills suite").version("2.1.0");
program.command("init", { isDefault: true }).description("Jalankan wizard interaktif untuk memilih dan memasang skill ArtCraft").option("-a, --all", "Pasang seluruh 19 skill tanpa konfirmasi checklist").option("-y, --yes", "Lewati konfirmasi persetujuan (auto-confirm)").option("-p, --path <path>", "Tentukan direktori folder tujuan instalasi").option("-e, --platform <platform>", "Tentukan platform target (antigravity, cursor, claude, copilot, roo)").action(async (options) => {
  await runInit(options);
});
program.command("list").description("Tampilkan daftar lengkap 19 skill ArtCraft beserta kategori dan deskripsinya").action(() => {
  runList();
});
program.command("add <skills...>").description("Pasang satu atau beberapa skill secara langsung").option("-p, --path <path>", "Direktori tujuan (default: ./.agents/skills)").action(async (skills, options) => {
  await runAdd(skills, options);
});
program.parse(process.argv);
//# sourceMappingURL=index.js.map