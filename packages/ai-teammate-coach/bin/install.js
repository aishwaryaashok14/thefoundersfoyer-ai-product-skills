#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const os = require("os");

const SKILL_NAME = "ai-teammate-coach";
const skillSrc = path.join(__dirname, "..", "SKILL.md");
const home = os.homedir();

const targets = [
  { dir: path.join(home, ".claude", "skills"), label: "Claude Code" },
  { dir: path.join(home, ".agents", "skills"), label: "Universal (Codex, Gemini CLI, Kiro)" },
];

// Detect Cursor in current working directory
const cursorDir = path.join(process.cwd(), ".cursor", "rules");
if (fs.existsSync(path.join(process.cwd(), ".cursor"))) {
  targets.push({ dir: cursorDir, label: "Cursor" });
}

console.log();
let installed = 0;
for (const { dir, label } of targets) {
  try {
    fs.mkdirSync(dir, { recursive: true });
    fs.copyFileSync(skillSrc, path.join(dir, `${SKILL_NAME}.md`));
    console.log(`  \x1b[32m✓\x1b[0m  ${label}: ${path.join(dir, `${SKILL_NAME}.md`)}`);
    installed++;
  } catch (e) {
    console.log(`  \x1b[33m⚠\x1b[0m  ${label}: skipped (${e.message})`);
  }
}

console.log(`\n  Installed to ${installed} platform${installed !== 1 ? "s" : ""}. Skill is now available.`);
console.log(`  From The Founders Foyer — featuring Jacob Bank (Relay, ex-Gmail) & Dan Shipper (Every)\n`);
