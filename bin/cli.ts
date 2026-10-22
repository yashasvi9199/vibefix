#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { initProject } from "../src/commands/init.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getVersion(): string {
  try {
    const pkgPath = path.resolve(__dirname, "../../package.json");
    const pkg = JSON.parse(readFileSync(pkgPath, "utf8")) as { version: string };
    return pkg.version;
  } catch {
    return "1.0.2";
  }
}

const program = new Command();

program
  .name("vibefix")
  .description("Scaffold rules, GEMINI.md, and Antigravity slash commands")
  .version(getVersion());

program
  .command("init")
  .description("Scaffold rules/, .agent/workflows/, and GEMINI.md into project")
  .option("-f, --force", "Overwrite existing files if present")
  .action(async (options) => {
    console.log(chalk.cyan("🚀 Initializing VibeFix architecture..."));
    await initProject(options);
  });

program.parse(process.argv);