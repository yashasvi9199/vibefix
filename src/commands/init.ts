import fs from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import chalk from "chalk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolves to package root whether running locally or inside node_modules
function getTemplatesDir(): string {
  const rootTemplates = path.resolve(__dirname, "../../../templates");
  if (existsSync(rootTemplates)) {
    return rootTemplates;
  }
  return path.resolve(__dirname, "../../templates");
}

const TEMPLATES_DIR = getTemplatesDir();

async function copyFolder(src: string, dest: string, force: boolean) {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyFolder(srcPath, destPath, force);
    } else {
      if (!force) {
        try {
          await fs.access(destPath);
          console.log(chalk.gray(`  - Skipping existing: ${entry.name}`));
          continue;
        } catch {}
      }
      await fs.copyFile(srcPath, destPath);
      console.log(chalk.green(`  ✔ Injected: ${entry.name}`));
    }
  }
}

export async function initProject(options: { force?: boolean }) {
  const targetDir = process.cwd();
  const force = !!options.force;

  try {
    // 1. Copy rules/
    console.log(chalk.bold("\n📁 Deploying rules/ directory..."));
    await copyFolder(
      path.join(TEMPLATES_DIR, "rules"),
      path.join(targetDir, "rules"),
      force
    );

    // 2. Copy .agent/workflows/
    console.log(chalk.bold("\n⚡ Deploying .agent/workflows/ slash commands..."));
    await copyFolder(
      path.join(TEMPLATES_DIR, "workflows"),
      path.join(targetDir, ".agent", "workflows"),
      force
    );

    // 3. Copy GEMINI.md to project root
    console.log(chalk.bold("\n📄 Deploying GEMINI.md routing prompt..."));
    const geminiSrc = path.join(TEMPLATES_DIR, "GEMINI.md");
    const geminiDest = path.join(targetDir, "GEMINI.md");
    let writeGemini = true;
    if (!force) {
      try {
        await fs.access(geminiDest);
        console.log(chalk.gray("  - GEMINI.md already exists, skipping"));
        writeGemini = false;
      } catch {}
    }
    if (writeGemini) {
      await fs.copyFile(geminiSrc, geminiDest);
      console.log(chalk.green("  ✔ Injected: GEMINI.md"));
    }

    console.log(chalk.cyan.bold("\n✨ VibeFix initialized successfully!"));
    console.log(chalk.yellow("Open Antigravity IDE and type '/' in chat to view your slash commands.\n"));
  } catch (err) {
    console.error(chalk.red("Initialization failed:"), err);
    process.exit(1);
  }
}