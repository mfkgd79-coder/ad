// backend/server.js (FINAL - TEMPLATE ENGINE VERSION)

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import archiver from "archiver";

// ENGINE IMPORTS
import { extractIntent } from "./engine/intentEngine.js";
import { fallbackExtract } from "./engine/fallbackEngine.js";
import { matchTemplate } from "./engine/templateMatcher.js";
import { injectData } from "./engine/injector.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

/* ===============================
   GENERATE PROJECT (NEW FLOW)
================================ */
async function generateProject(prompt) {

  console.log("🚀 Prompt:", prompt);

  // 1️⃣ Intent extraction
  let result = await extractIntent(prompt);

  let intent = result.success
    ? result.intent
    : fallbackExtract(prompt);

  console.log("🧠 Intent:", intent.type);

  // 2️⃣ Template matching
  const { template } = matchTemplate(intent);

  console.log("📁 Template:", template.id);

  // 3️⃣ Load template files
  const templateDir = path.join(__dirname, template.path);

  const htmlPath = path.join(templateDir, "index.html");

  if (!fs.existsSync(htmlPath)) {
    throw new Error("Template index.html not found");
  }

  let html = fs.readFileSync(htmlPath, "utf-8");

  // 4️⃣ Inject dynamic content
  const finalHtml = injectData(html, intent);

  return {
    projectName: `${template.id}-project`,
    framework: "html",
    files: [
      {
        path: "index.html",
        content: finalHtml
      }
    ]
  };
}

/* ===============================
   GENERATE API
================================ */
app.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        error: "Prompt required"
      });
    }

    const parsed = await generateProject(prompt);

    const projectDir = path.join(__dirname, "generated", parsed.projectName);

    // Remove old
    if (fs.existsSync(projectDir)) {
      fs.rmSync(projectDir, { recursive: true, force: true });
    }

    fs.mkdirSync(projectDir, { recursive: true });

    // Write files
    parsed.files.forEach(file => {
      fs.writeFileSync(
        path.join(projectDir, file.path),
        file.content,
        "utf-8"
      );
    });

    console.log("✅ Files created");

    /* ZIP */
    const zipPath = `${projectDir}.zip`;
    const output = fs.createWriteStream(zipPath);
    const archive = archiver("zip", { zlib: { level: 9 } });

    archive.pipe(output);
    archive.directory(projectDir, false);

    await new Promise((resolve, reject) => {
      archive.on("finish", resolve);
      archive.on("error", reject);
      archive.finalize();
    });

    console.log("📦 ZIP ready");

    res.json({
      success: true,
      framework: parsed.framework,
      projectName: parsed.projectName,
      downloadPath: `/${parsed.projectName}.zip`,
      previewPath: `/${parsed.projectName}/index.html`
    });

  } catch (err) {
    console.error("❌ ERROR:", err);

    res.status(500).json({
      success: false,
      error: err.message || "Generation failed"
    });
  }
});

/* ===============================
   HEALTH CHECK
================================ */
app.get("/health", (req, res) => {
  res.json({ status: "online" });
});

/* ===============================
   STATIC FILES
================================ */
app.use(express.static(path.join(__dirname, "../frontend")));
app.use(express.static(path.join(__dirname, "generated")));

app.get("/", (req, res) => {
  res.redirect("/index.html");
});

/* ===============================
   START SERVER
================================ */
app.listen(PORT, () => {
  console.log("=================================");
  console.log("🚀 Webify Server Running (TEMPLATE ENGINE)");
  console.log(`🌐 http://localhost:${PORT}`);
  console.log("=================================");
});