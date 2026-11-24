import pc from "picocolors";

export function getAsciiBanner(): string {
  const line1 = pc.cyan("   ___          _     ____                __  _   ");
  const line2 = pc.cyan("  / _ \\  _ __  | |_  / ___|_ __  __ _    / _| | |_ ");
  const line3 = pc.blue(" / /_\\ \\| '__| | __| | |   | '__|/ _` |  | |_  | __|");
  const line4 = pc.blue("/ / _ \\ \\ |    | |_  | |___| |  | (_| |  |  _| | |_ ");
  const line5 = pc.magenta("\\_/   \\_/_|     \\__|  \\____|_|   \\__,_|  |_|    \\__|");
  const tag = pc.bold(pc.white("  🎨 ArtCraft Suite — AI Skills & Agent Architecture (v2.1.0)"));
  const author = pc.dim("  Created by Ivano Rossi Sugiyanto • 19 Modular AI Craft Skills");

  return `\n${line1}\n${line2}\n${line3}\n${line4}\n${line5}\n\n${tag}\n${author}\n`;
}
