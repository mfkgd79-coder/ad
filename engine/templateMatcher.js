// backend/engine/templateMatcher.js

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let registryCache = null;

function loadRegistry() {
  if (registryCache) return registryCache;

  const filePath = path.join(__dirname, "..", "templates", "registry.json");

  if (!fs.existsSync(filePath)) {
    throw new Error("registry.json not found");
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  registryCache = JSON.parse(raw);

  return registryCache;
}

export function matchTemplate(intent) {
  const registry = loadRegistry();
  const templates = registry.templates;

  let bestMatch = null;
  let bestScore = -1;
  let categoryMatch = null;

  for (const tmpl of templates) {
    let score = 0;

    // Category match is most important
    if (tmpl.category === intent.type) {
      score += 50;
      if (!categoryMatch) categoryMatch = tmpl;
    }
    
    if (tmpl.theme === intent.theme) score += 15;
    if (tmpl.style === intent.style) score += 10;

    if (tmpl.tags && intent.features) {
      intent.features.forEach(f => {
        if (tmpl.tags.includes(f)) score += 5;
      });
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = tmpl;
    }
  }

  // If no good match found, prefer category match over first template
  if (!bestMatch || bestScore < 15) {
    bestMatch = categoryMatch || templates[0];
  }

  console.log("✅ Template:", bestMatch.id, "Score:", bestScore);

  return { template: bestMatch, score: bestScore };
}