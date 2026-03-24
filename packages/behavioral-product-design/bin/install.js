#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const os = require("os");

const SKILL_NAME = "behavioral-product-design";
const skillSrc = path.join(__dirname, "..", "skill.md");
const skillsDir = path.join(os.homedir(), ".claude", "skills");
const skillDest = path.join(skillsDir, `${SKILL_NAME}.md`);

fs.mkdirSync(skillsDir, { recursive: true });
fs.copyFileSync(skillSrc, skillDest);

console.log(`\n  \x1b[32m✓\x1b[0m  Installed \x1b[1m${SKILL_NAME}\x1b[0m skill to ${skillDest}`);
console.log(`\n  Skill is now available in Claude Code.`);
console.log(`  From The Founders Foyer — featuring Kristen Berman (Irrational Labs, co-founded with Dan Ariely)\n`);
