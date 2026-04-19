// js/build.js (FINAL CLEAN VERSION)

const API_URL = "/generate";
const HEALTH_URL = "/health";

let currentProject = null;

// Editing state
let originalHTML = "";
let tempHTML = "";
let selectedElement = null;

// Undo/Redo
let editHistory = [];
let historyIndex = -1;

/* ===============================
   BACKEND STATUS
================================ */
async function checkBackendStatus() {
  const statusEl = document.getElementById("backendStatus");
  if (!statusEl) return;

  try {
    const res = await fetch(HEALTH_URL);
    await res.json();

    statusEl.className = "backend-status connected";
    statusEl.innerHTML = "🟢 Backend Connected";
  } catch {
    statusEl.className = "backend-status disconnected";
    statusEl.innerHTML = "🔴 Backend Offline";
  }
}

/* ===============================
   GENERATE WEBSITE
================================ */
async function generateWebsite() {
  const input = document.getElementById("buildPrompt");
  const prompt = input.value.trim();

  if (!prompt) {
    alert("Enter a prompt");
    return;
  }

  const overlay = document.getElementById("genOverlay");
  if (overlay) overlay.classList.add("active");

  try {
    // fake delay for smooth UX
    await new Promise(res => setTimeout(res, 2000));

    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    if (!res.ok) throw new Error("Server error");

    const data = await res.json();

    if (!data.success) {
      throw new Error(data.error || "Generation failed");
    }

    currentProject = data;

    originalHTML = data.files[0].content;
    tempHTML = originalHTML;

    document.getElementById("promptStage").style.display = "none";
    document.getElementById("builderStage").style.display = "flex";

    loadPreview();

  } catch (err) {
    console.error(err);
    alert("Error: " + err.message);
  }

  if (overlay) overlay.classList.remove("active");
}

/* ===============================
   LOAD PREVIEW
================================ */
function loadPreview() {
  const iframe = document.getElementById("previewFrame");

  const blob = new Blob([tempHTML], { type: "text/html" });
  iframe.src = URL.createObjectURL(blob);

  iframe.onload = () => {
    const doc = iframe.contentDocument;

    // remove scripts (avoid break)
    doc.querySelectorAll("script").forEach(s => s.remove());

    doc.body.addEventListener("dblclick", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openEditor(e.target);
    });
  };
}

/* ===============================
   OPEN EDITOR
================================ */
function openEditor(el) {
  if (!el) return;

  selectedElement = el;

  editHistory = [];
  historyIndex = -1;
  saveHistory();

  const panel = document.getElementById("vePanel");
  if (!panel) return;

  panel.classList.add("active");

  document.getElementById("ve-text").value = el.innerText || "";

  highlightElement(el);
}

/* ===============================
   HIGHLIGHT
================================ */
function highlightElement(el) {
  const iframe = document.getElementById("previewFrame");
  const doc = iframe.contentDocument;

  doc.querySelectorAll("[data-selected]").forEach(e => {
    e.removeAttribute("data-selected");
    e.style.outline = "";
  });

  el.setAttribute("data-selected", "true");
  el.style.outline = "2px solid #796BD8";
}

/* ===============================
   UPDATE HTML
================================ */
function updateTempHTML() {
  const iframe = document.getElementById("previewFrame");
  if (!iframe || !iframe.contentDocument) return;

  tempHTML = iframe.contentDocument.documentElement.outerHTML;
  saveHistory();
}

/* ===============================
   APPLY TEXT
================================ */
function applyChanges() {
  if (!selectedElement) return;

  const newText = document.getElementById("ve-text").value;
  selectedElement.innerText = newText;

  updateTempHTML();
}

/* ===============================
   SAVE / CANCEL
================================ */
function closeEditor(save = false) {
  const panel = document.getElementById("vePanel");
  if (panel) panel.classList.remove("active");

  if (save) {
    originalHTML = tempHTML;
  } else {
    tempHTML = originalHTML;
    loadPreview();
  }

  selectedElement = null;
}

/* ===============================
   UNDO / REDO
================================ */
function saveHistory() {
  editHistory = editHistory.slice(0, historyIndex + 1);
  editHistory.push(tempHTML);
  historyIndex++;
}

function undoEdit() {
  if (historyIndex <= 0) return;

  historyIndex--;
  tempHTML = editHistory[historyIndex];
  loadPreview();
}

function redoEdit() {
  if (historyIndex >= editHistory.length - 1) return;

  historyIndex++;
  tempHTML = editHistory[historyIndex];
  loadPreview();
}

/* ===============================
   EVENTS
================================ */
document.addEventListener("DOMContentLoaded", () => {

  checkBackendStatus();

  document.getElementById("generateBtn")?.addEventListener("click", generateWebsite);

  document.getElementById("applyBtn")?.addEventListener("click", applyChanges);
  document.getElementById("saveBtn")?.addEventListener("click", () => closeEditor(true));
  document.getElementById("cancelBtn")?.addEventListener("click", () => closeEditor(false));

  document.getElementById("undoBtn")?.addEventListener("click", undoEdit);
  document.getElementById("redoBtn")?.addEventListener("click", redoEdit);

  document.getElementById("veClose")?.addEventListener("click", () => {
    document.getElementById("vePanel").classList.remove("active");
  });

  // ENTER to generate
  document.getElementById("buildPrompt")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      generateWebsite();
    }
  });

});

/* ===============================
   LIVE EDIT CONTROLS
================================ */

// TEXT
document.getElementById("ve-text")?.addEventListener("input", (e) => {
  if (!selectedElement) return;

  selectedElement.innerText = e.target.value;
  updateTempHTML();
});

// COLOR
document.getElementById("ve-color")?.addEventListener("input", (e) => {
  if (!selectedElement) return;

  selectedElement.style.color = e.target.value;
  updateTempHTML();
});

// BACKGROUND
document.getElementById("ve-bg")?.addEventListener("input", (e) => {
  if (!selectedElement) return;

  selectedElement.style.backgroundColor = e.target.value;
  updateTempHTML();
});

// FONT
document.getElementById("ve-font-family")?.addEventListener("change", (e) => {
  if (!selectedElement) return;

  selectedElement.style.fontFamily = e.target.value;
  updateTempHTML();
});

// BORDER RADIUS
document.getElementById("ve-radius")?.addEventListener("input", (e) => {
  if (!selectedElement) return;

  selectedElement.style.borderRadius = e.target.value + "px";
  updateTempHTML();
});