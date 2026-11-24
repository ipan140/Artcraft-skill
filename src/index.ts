import { Command } from "commander";
import { runInit } from "./commands/init.js";
import { runList } from "./commands/list.js";
import { runAdd } from "./commands/add.js";

const program = new Command();

program
  .name("artcraft-skill")
  .description("Interactive CLI installer and manager for the ArtCraft AI Agent Skills suite")
  .version("2.1.0");

// Default action saat mengetik: npx artcraft-skill
program
  .command("init", { isDefault: true })
  .description("Jalankan wizard interaktif untuk memilih dan memasang skill ArtCraft")
  .option("-a, --all", "Pasang seluruh 19 skill tanpa konfirmasi checklist")
  .option("-y, --yes", "Lewati konfirmasi persetujuan (auto-confirm)")
  .option("-p, --path <path>", "Tentukan direktori folder tujuan instalasi")
  .option("-e, --platform <platform>", "Tentukan platform target (antigravity, cursor, claude, copilot, roo)")
  .action(async (options) => {
    await runInit(options);
  });

program
  .command("list")
  .description("Tampilkan daftar lengkap 19 skill ArtCraft beserta kategori dan deskripsinya")
  .action(() => {
    runList();
  });

program
  .command("add <skills...>")
  .description("Pasang satu atau beberapa skill secara langsung")
  .option("-p, --path <path>", "Direktori tujuan (default: ./.agents/skills)")
  .action(async (skills, options) => {
    await runAdd(skills, options);
  });

program.parse(process.argv);
