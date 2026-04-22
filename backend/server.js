import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import archiver from "archiver";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

/* ===============================
   CONFIG (ONLY N8N)
================================ */
const N8N_WEBHOOK = "http://localhost:5678/webhook/generate-website";
/* ===============================
   CLEAN HTML
================================ */
function cleanHTML(output) {
  if (!output) return "<h1>No Output</h1>";

  const start = output.indexOf("<!DOCTYPE html");
  if (start !== -1) return output.slice(start);

  const htmlStart = output.indexOf("<html");
  if (htmlStart !== -1) return output.slice(htmlStart);

  return output;
}

/* ===============================
   CALL N8N
================================ */
async function callN8n(prompt) {
  try {
    const res = await fetch(N8N_WEBHOOK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    // 🔥 NEW: check HTTP status
    if (!res.ok) {
      throw new Error(`n8n HTTP error: ${res.status}`);
    }

    const text = await res.text();

    // 🔥 FIX: handle empty / whitespace response
    if (!text || text.trim() === "") {
      throw new Error("Empty response from n8n");
    }

    let data;

    try {
      data = JSON.parse(text);
    } catch (e) {
      throw new Error("Invalid JSON from n8n: " + text.substring(0, 200));
    }

    // 🔥 FIX: better debug
    if (!data || !data.html) {
      throw new Error("Missing HTML in n8n response: " + JSON.stringify(data));
    }

    return cleanHTML(data.html);

  } catch (err) {
    console.error("❌ n8n ERROR:", err.message);
    return null;
  }
}

/* ===============================
   GENERATE PROJECT
================================ */
async function generateProject(prompt) {
  const html = await callN8n(prompt);

  if (!html) {
    throw new Error("Website generation failed (no HTML returned)");
  }

  return {
    projectName: "webify-project",
    framework: "html",
    files: [
      {
        path: "index.html",
        content: html
      }
    ]
  };
}

/* ===============================
   API
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

    if (fs.existsSync(projectDir)) {
      fs.rmSync(projectDir, { recursive: true, force: true });
    }

    fs.mkdirSync(projectDir, { recursive: true });

    parsed.files.forEach(file => {
      fs.writeFileSync(
        path.join(projectDir, file.path),
        file.content,
        "utf-8"
      );
    });

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

    res.json({
      success: true,
      html: parsed.files[0].content,
      files: parsed.files,
      projectName: parsed.projectName,
      downloadPath: `/${parsed.projectName}.zip`,
      previewPath: `/${parsed.projectName}/index.html`
    });

  } catch (err) {
    console.error("❌ ERROR:", err);

    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

/* =============================== */
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use(express.static(path.join(__dirname, "../frontend")));
app.use(express.static(path.join(__dirname, "generated")));

app.listen(PORT, () => {
  console.log("=================================");
  console.log("🚀 Webify Server (n8n mode)");
  console.log(`🌐 http://localhost:${PORT}`);
  console.log("=================================");
});