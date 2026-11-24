export interface SkillMetadata {
  id: string;
  name: string;
  folder: string;
  category: string;
  description: string;
  modulesCount: number;
  highlight: string;
}

export const ARTCRAFT_SKILLS: SkillMetadata[] = [
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
    description: "Ilustrasi vektor presisi, titik simpul extrema Bézier, pixel-grid snapping, dan SVG bersih",
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

export interface AgentPlatform {
  name: string;
  defaultPath: string;
  description: string;
}

export const AGENT_PLATFORMS: Record<string, AgentPlatform> = {
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
