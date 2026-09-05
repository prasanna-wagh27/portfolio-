// Regenerates lib/icons.ts from the simple-icons package so brand marks are
// the real ones, never hand-drawn. Run: node scripts/gen-icons.mjs
import { writeFileSync } from "node:fs";
import * as si from "simple-icons";

const WANT = [
  "react", "nextdotjs", "typescript", "javascript", "vite", "tailwindcss", "mui",
  "reactquery", "nodedotjs", "express", "springboot", "jsonwebtokens", "typeorm",
  "postgresql", "mysql", "redis", "docker", "vercel", "railway", "githubactions",
  "git", "github", "gitlab", "claude", "angular", "openjdk",
];

const rows = WANT.map((slug) => {
  const icon = si["si" + slug[0].toUpperCase() + slug.slice(1)];
  if (!icon) throw new Error(`simple-icons has no icon for "${slug}"`);
  return `  ${JSON.stringify(slug)}: { title: ${JSON.stringify(icon.title)}, hex: ${JSON.stringify("#" + icon.hex)}, path: ${JSON.stringify(icon.path)} },`;
});

writeFileSync(
  "lib/icons.ts",
  `// Generated from the \`simple-icons\` package (CC0) — do not hand-edit.\n` +
    `// Regenerate with: node scripts/gen-icons.mjs\n\n` +
    `export type TechIcon = { title: string; hex: string; path: string };\n\n` +
    `export const ICONS: Record<string, TechIcon> = {\n${rows.join("\n")}\n};\n`,
);
console.log(`wrote ${rows.length} icons`);
