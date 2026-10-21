#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import { initProject } from "../src/commands/init.js";

const program = new Command();

program
  .name("vibefix")
  .description("Scaffold rules, GEMINI.md, and Antigravity slash commands")
  .version("1.0.0");

program
  .command("init")
  .description("Scaffold rules/, .agent/workflows/, and GEMINI.md into project")
  .option("-f, --force", "Overwrite existing files if present")
  .action(async (options) => {
    console.log(chalk.cyan("🚀 Initializing VibeFix architecture..."));
    await initProject(options);
  });

program.parse(process.argv);