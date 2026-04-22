/* ============================================================
   build.js — Webify Builder (FULLY FIXED)
   ============================================================ */

const API_URL = "http://localhost:5000/generate";
let currentProject  = null;
let originalHTML    = "";
let tempHTML        = "";
let undoStack       = [];
let redoStack       = [];
let selectedEl      = null;          // element inside iframe currently selected
let veOpen          = false;

/* ────────────────────────────────────────────────────────────
   BACKEND STATUS  — always shows "Connected" immediately
──────────────────────────────────────────────────────────── */
function initBackendStatus() {
  const el = document.getElementById("backendStatus");
  if (!el) return;

  el.className = "backend-status checking";
  el.innerHTML = '<i class="fas fa-circle"></i> Checking backend…';

  fetch("http://localhost:5000/health")
    .then(res => res.json())
    .then(() => {
      el.className = "backend-status online";
      el.innerHTML = '<i class="fas fa-circle"></i> Backend Online';
    })
    .catch(() => {
      el.className = "backend-status offline";
      el.innerHTML = '<i class="fas fa-circle"></i> Backend Offline';
    });
}

/* ────────────────────────────────────────────────────────────
   PROGRESS BAR ANIMATION
──────────────────────────────────────────────────────────── */
const BUILD_STEPS = [
  "Analyzing your prompt…",
  "Designing layout & structure…",
  "Writing HTML & CSS…",
  "Adding interactivity…",
  "Finalizing your website…"
];

let stepInterval = null;

function startProgress() {
  const fill  = document.getElementById("genBarFill");
  const text  = document.getElementById("genText");
  const step  = document.getElementById("genStep");
  if (!fill || !text || !step) return;

  let current = 0;
  const total = BUILD_STEPS.length;

  function advanceTo(idx) {
    const pct = Math.round(((idx + 1) / total) * 100);
    fill.style.width  = pct + "%";
    text.textContent  = BUILD_STEPS[idx];
    step.textContent  = `Step ${idx + 1} / ${total}`;
  }

  advanceTo(0);
  current = 1;

  stepInterval = setInterval(() => {
    if (current >= total) {
      clearInterval(stepInterval);
      return;
    }
    advanceTo(current);
    current++;
  }, 900);   // advance every 900 ms so all 5 steps play out
}

function stopProgress() {
  clearInterval(stepInterval);
  const fill = document.getElementById("genBarFill");
  const text = document.getElementById("genText");
  const step = document.getElementById("genStep");
  if (fill) fill.style.width  = "100%";
  if (text) text.textContent  = "Website ready!";
  if (step) step.textContent  = "Complete ✓";
}

function resetProgress() {
  clearInterval(stepInterval);
  const fill = document.getElementById("genBarFill");
  const text = document.getElementById("genText");
  const step = document.getElementById("genStep");
  if (fill) fill.style.width  = "0%";
  if (text) text.textContent  = BUILD_STEPS[0];
  if (step) step.textContent  = "Step 1 / 5";
}

/* ────────────────────────────────────────────────────────────
   GENERATE WEBSITE
──────────────────────────────────────────────────────────── */
async function generateWebsite() {
  const input  = document.getElementById("buildPrompt");
  const prompt = input ? input.value.trim() : "";
  if (!prompt) { showToast("Please enter a prompt first", "warn"); return; }

  const overlay = document.getElementById("genOverlay");
  if (overlay) overlay.classList.add("active");

  resetProgress();
  startProgress();

  try {
    const res  = await fetch(API_URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ prompt })
});

if (!res.ok) {
  throw new Error("Backend not responding");
}

let data;
try {
  data = await res.json();
} catch {
  throw new Error("Invalid response from backend");
}

if (!data || !data.success || !data.files || !data.files[0]) {
  throw new Error(data?.error || "Invalid backend response");
}
    if (!data.success) throw new Error(data.error || "Generation failed");

    stopProgress();
    await sleep(400);   // let "complete" flash briefly

    currentProject = data;
    originalHTML   = data.files[0].content;
    tempHTML       = originalHTML;
    undoStack      = [tempHTML];
    redoStack      = [];

    document.getElementById("promptStage").style.display  = "none";
    document.getElementById("builderStage").style.display = "flex";

    // Populate code panel
    setCodePanelContent();
    loadPreview();

  } catch (err) {
    stopProgress();
    showToast("Error: " + err.message, "error");
  } finally {
    if (overlay) overlay.classList.remove("active");
  }
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

/* ────────────────────────────────────────────────────────────
   PREVIEW
──────────────────────────────────────────────────────────── */
function loadPreview(html) {
  const iframe = document.getElementById("previewFrame");
  if (!iframe) return;
  const content = html || tempHTML;
  const blob    = new Blob([content], { type: "text/html" });
  iframe.src    = URL.createObjectURL(blob);

  iframe.onload = () => {
    const doc = iframe.contentDocument;
    if (!doc) return;

    // Inject double-click editor overlay into iframe
    injectEditorOverlay(doc);
  };
}

/* ────────────────────────────────────────────────────────────
   INJECT EDITOR OVERLAY INTO IFRAME
──────────────────────────────────────────────────────────── */
function injectEditorOverlay(doc) {
  // Remove scripts for safety
  doc.querySelectorAll("script").forEach(s => s.remove());

  // Inject hover highlight style
  const style = doc.createElement("style");
  style.id    = "__webify_edit_style__";
  style.textContent = `
    .__webify_hover {
      outline: 2px dashed rgba(121,107,216,0.7) !important;
      outline-offset: 2px !important;
      cursor: crosshair !important;
    }
    .__webify_selected {
      outline: 2px solid #796BD8 !important;
      outline-offset: 2px !important;
    }
    .__webify_editable_inline {
      outline: 2px solid #796BD8 !important;
      outline-offset: 2px !important;
      min-width: 20px;
      min-height: 1em;
    }
  `;
  doc.head.appendChild(style);

  // Hover highlight
  doc.body.addEventListener("mouseover", e => {
    if (e.target === doc.body || e.target === doc.documentElement) return;
    e.target.classList.add("__webify_hover");
  });
  doc.body.addEventListener("mouseout", e => {
    e.target.classList.remove("__webify_hover");
  });

  // Double-click → open visual editor
  doc.body.addEventListener("dblclick", e => {
    e.preventDefault();
    e.stopPropagation();
    const el = e.target;
    if (!el || el === doc.body || el === doc.documentElement) return;

    // Deselect previous
    doc.querySelectorAll(".__webify_selected").forEach(x => x.classList.remove("__webify_selected"));
    el.classList.add("__webify_selected");

    selectedEl = el;
    openVisualEditor(el, doc);
  });
}

/* ────────────────────────────────────────────────────────────
   VISUAL EDITOR PANEL (side drawer)
──────────────────────────────────────────────────────────── */
function openVisualEditor(el, doc) {
  const panel    = document.getElementById("vePanel");
  const backdrop = document.getElementById("veBackdrop");
  const tag      = document.getElementById("veTagLabel");

  if (!panel) return;

  // Populate tag label
  if (tag) tag.textContent = el.tagName.toLowerCase();

  // ── CONTENT TAB ──
  populateContent(el);
  // ── STYLE TAB ──
  populateStyle(el);
  // ── LAYOUT TAB ──
  populateLayout(el);
  // ── CODE TAB ──
  const rawHTML = document.getElementById("ve-raw-html");
  if (rawHTML) rawHTML.value = el.outerHTML;

  // Switch to content tab
  switchVeTab("content");

  // Open panel
  panel.classList.add("open");
  if (backdrop) backdrop.classList.add("open");
  veOpen = true;

  // Adjust preview margin
  const previewShell = document.getElementById("previewShell");
  if (previewShell) previewShell.style.marginRight = "400px";
}

function closeVisualEditor() {
  const panel    = document.getElementById("vePanel");
  const backdrop = document.getElementById("veBackdrop");
  if (panel)    panel.classList.remove("open");
  if (backdrop) backdrop.classList.remove("open");
  veOpen = false;

  const previewShell = document.getElementById("previewShell");
  if (previewShell) previewShell.style.marginRight = "0";

  // Deselect
  const iframe = document.getElementById("previewFrame");
  if (iframe && iframe.contentDocument) {
    iframe.contentDocument.querySelectorAll(".__webify_selected")
      .forEach(x => x.classList.remove("__webify_selected"));
  }
  selectedEl = null;
}

function populateContent(el) {
  const tag = el.tagName.toLowerCase();

  // Text
  const vgText = document.getElementById("vg-text");
  const veText = document.getElementById("ve-text");
  if (vgText && veText) {
    vgText.style.display = "block";
    veText.value = el.innerText || el.textContent || "";
  }

  // Link
  const vgHref = document.getElementById("vg-href");
  const veHref = document.getElementById("ve-href");
  if (vgHref && veHref) {
    if (tag === "a") {
      vgHref.style.display = "block";
      veHref.value = el.href || el.getAttribute("href") || "";
    } else {
      vgHref.style.display = "none";
    }
  }

  // Image
  const vgImg = document.getElementById("vg-img");
  if (vgImg) {
    if (tag === "img") {
      vgImg.style.display = "block";
      const src = document.getElementById("ve-img-src");
      const alt = document.getElementById("ve-img-alt");
      if (src) src.value = el.src || "";
      if (alt) alt.value = el.alt || "";
    } else {
      vgImg.style.display = "none";
    }
  }

  // Button
  const vgBtn = document.getElementById("vg-btn");
  if (vgBtn) {
    if (tag === "button" || tag === "a") {
      vgBtn.style.display = "block";
      const btnText = document.getElementById("ve-btn-text");
      const btnHref = document.getElementById("ve-btn-href");
      if (btnText) btnText.value = el.innerText || "";
      if (btnHref && tag === "a") btnHref.value = el.href || "";
    } else {
      vgBtn.style.display = "none";
    }
  }
}

function populateStyle(el) {
  const cs = window.getComputedStyle
    ? (document.getElementById("previewFrame").contentWindow || {}).getComputedStyle
      ? document.getElementById("previewFrame").contentWindow.getComputedStyle(el)
      : null
    : null;

  const get = (prop) => cs ? cs.getPropertyValue(prop) : "";

  // Colors
  setColorInputs("ve-color", "ve-color-hex", el.style.color || get("color") || "#000000");
  setColorInputs("ve-bg",    "ve-bg-hex",    el.style.backgroundColor || get("background-color") || "#ffffff");

  // Font size
  const fsRaw  = el.style.fontSize || get("font-size") || "";
  const fsNum  = parseFloat(fsRaw) || "";
  const fsUnit = fsRaw.replace(/[\d.]/g, "") || "px";
  setVal("ve-font-size", fsNum);
  setSelectVal("ve-font-unit", fsUnit);

  // Font weight
  setSelectVal("ve-font-weight", el.style.fontWeight || get("font-weight") || "");
  // Font family
  setSelectVal("ve-font-family", el.style.fontFamily || "");
  // Font style
  setSelectVal("ve-font-style", el.style.fontStyle || get("font-style") || "");
  // Text align
  const align = el.style.textAlign || get("text-align") || "";
  document.querySelectorAll(".al-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.align === align);
  });
  // Text decoration
  setSelectVal("ve-text-dec", el.style.textDecoration || get("text-decoration-line") || "");

  // Radius
  const brRaw = el.style.borderRadius || get("border-radius") || "";
  setVal("ve-radius", parseFloat(brRaw) || "");
  setSelectVal("ve-radius-unit", brRaw.replace(/[\d.]/g, "") || "px");

  // Opacity
  const op = parseFloat(el.style.opacity || get("opacity") || "1");
  const opEl = document.getElementById("ve-opacity");
  const opLbl = document.getElementById("ve-opacity-label");
  if (opEl)  opEl.value = Math.round(op * 100);
  if (opLbl) opLbl.textContent = Math.round(op * 100) + "%";

  // Shadow & border
  setVal("ve-shadow", el.style.boxShadow || "");
  setVal("ve-border", el.style.border || "");
  setVal("ve-extra-css", "");
}

function populateLayout(el) {
  const cs = document.getElementById("previewFrame").contentWindow
    ? document.getElementById("previewFrame").contentWindow.getComputedStyle(el)
    : null;
  const get = (p) => cs ? cs.getPropertyValue(p) : "";

  // W / H
  setVal("ve-width",  parseFloat(el.style.width  || get("width"))  || "");
  setVal("ve-height", parseFloat(el.style.height || get("height")) || "");
  setSelectVal("ve-width-unit",  el.style.width  ? el.style.width.replace(/[\d.]/g, "")  : "px");
  setSelectVal("ve-height-unit", el.style.height ? el.style.height.replace(/[\d.]/g, "") : "px");

  // Padding
  const pt = parseFloat(el.style.paddingTop    || get("padding-top"))    || "";
  const pr = parseFloat(el.style.paddingRight  || get("padding-right"))  || "";
  const pb = parseFloat(el.style.paddingBottom || get("padding-bottom")) || "";
  const pl = parseFloat(el.style.paddingLeft   || get("padding-left"))   || "";
  setVal("ve-pt", pt); setVal("ve-pr", pr); setVal("ve-pb", pb); setVal("ve-pl", pl);

  // Margin
  const mt = parseFloat(el.style.marginTop    || get("margin-top"))    || "";
  const mr = parseFloat(el.style.marginRight  || get("margin-right"))  || "";
  const mb = parseFloat(el.style.marginBottom || get("margin-bottom")) || "";
  const ml = parseFloat(el.style.marginLeft   || get("margin-left"))   || "";
  setVal("ve-mt", mt); setVal("ve-mr", mr); setVal("ve-mb", mb); setVal("ve-ml", ml);

  // Display / Position
  setSelectVal("ve-display",  el.style.display  || get("display")  || "");
  setSelectVal("ve-position", el.style.position || get("position") || "");
}

/* ────────────────────────────────────────────────────────────
   APPLY CHANGES FROM VISUAL EDITOR
──────────────────────────────────────────────────────────── */
function applyVisualEditorChanges() {
  if (!selectedEl) return;
  const el = selectedEl;
  const tag = el.tagName.toLowerCase();

  // ── CONTENT ──
  const veText = document.getElementById("ve-text");
  if (veText && tag !== "img") {
    // Only update text, preserve child elements
    if (!el.children.length) {
      el.textContent = veText.value;
    } else {
      el.firstChild && el.firstChild.nodeType === 3
        ? (el.firstChild.textContent = veText.value)
        : null;
    }
  }
  const veHref = document.getElementById("ve-href");
  if (veHref && tag === "a") el.setAttribute("href", veHref.value);

  const veImgSrc = document.getElementById("ve-img-src");
  const veImgAlt = document.getElementById("ve-img-alt");
  if (veImgSrc && tag === "img") {
    el.src = veImgSrc.value;
    if (veImgAlt) el.alt = veImgAlt.value;
  }

  // ── STYLE ──
  const color   = document.getElementById("ve-color-hex");
  const bg      = document.getElementById("ve-bg-hex");
  const fsNum   = getVal("ve-font-size");
  const fsUnit  = getSelectVal("ve-font-unit") || "px";
  const fw      = getSelectVal("ve-font-weight");
  const ff      = getSelectVal("ve-font-family");
  const fst     = getSelectVal("ve-font-style");
  const tdec    = getSelectVal("ve-text-dec");
  const brNum   = getVal("ve-radius");
  const brUnit  = getSelectVal("ve-radius-unit") || "px";
  const opacity = document.getElementById("ve-opacity");
  const shadow  = getVal("ve-shadow");
  const border  = getVal("ve-border");
  const extra   = getVal("ve-extra-css");

  if (color && color.value) el.style.color           = color.value;
  if (bg    && bg.value)    el.style.backgroundColor = bg.value;
  if (fsNum !== "")         el.style.fontSize        = fsNum + fsUnit;
  if (fw)                   el.style.fontWeight      = fw;
  if (ff)                   el.style.fontFamily      = ff;
  if (fst)                  el.style.fontStyle       = fst;
  if (tdec)                 el.style.textDecoration  = tdec;
  if (brNum !== "")         el.style.borderRadius    = brNum + brUnit;
  if (opacity)              el.style.opacity         = (parseInt(opacity.value) / 100).toString();
  if (shadow)               el.style.boxShadow       = shadow;
  if (border)               el.style.border          = border;
  // Text align from active button
  const activeAlign = document.querySelector(".al-btn.active");
  if (activeAlign)          el.style.textAlign = activeAlign.dataset.align;

  // Extra CSS (parse simple key:value pairs)
  if (extra) {
    extra.split(";").forEach(rule => {
      const [k, v] = rule.split(":").map(s => s.trim());
      if (k && v) {
        const camel = k.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
        el.style[camel] = v;
      }
    });
  }

  // ── LAYOUT ──
  const wNum  = getVal("ve-width");
  const wUnit = getSelectVal("ve-width-unit")  || "px";
  const hNum  = getVal("ve-height");
  const hUnit = getSelectVal("ve-height-unit") || "px";
  if (wNum !== "")  el.style.width  = wNum  + wUnit;
  if (hNum !== "")  el.style.height = hNum  + hUnit;

  const pt = getVal("ve-pt"); const pr = getVal("ve-pr");
  const pb = getVal("ve-pb"); const pl = getVal("ve-pl");
  if (pt !== "") el.style.paddingTop    = pt + "px";
  if (pr !== "") el.style.paddingRight  = pr + "px";
  if (pb !== "") el.style.paddingBottom = pb + "px";
  if (pl !== "") el.style.paddingLeft   = pl + "px";

  const mt = getVal("ve-mt"); const mr = getVal("ve-mr");
  const mb = getVal("ve-mb"); const ml = getVal("ve-ml");
  if (mt !== "") el.style.marginTop    = mt + "px";
  if (mr !== "") el.style.marginRight  = mr + "px";
  if (mb !== "") el.style.marginBottom = mb + "px";
  if (ml !== "") el.style.marginLeft   = ml + "px";

  const display  = getSelectVal("ve-display");
  const position = getSelectVal("ve-position");
  if (display)  el.style.display  = display;
  if (position) el.style.position = position;

  // ── CODE TAB — raw HTML replacement ──
  const rawHTML = getVal("ve-raw-html");
  if (rawHTML && rawHTML !== el.outerHTML) {
    el.outerHTML = rawHTML;
    // selectedEl is now stale — close panel
    closeVisualEditor();
  }

  // Inject CSS
  const rawCSS = getVal("ve-raw-css");
  if (rawCSS) {
    const iframe = document.getElementById("previewFrame");
    const doc    = iframe.contentDocument;
    let styleTag = doc.getElementById("__webify_injected_css__");
    if (!styleTag) {
      styleTag = doc.createElement("style");
      styleTag.id = "__webify_injected_css__";
      doc.head.appendChild(styleTag);
    }
    styleTag.textContent += "\n" + rawCSS;
  }

  // Inject JS
  const rawJS = getVal("ve-raw-js");
  if (rawJS) {
    const iframe = document.getElementById("previewFrame");
    const doc    = iframe.contentDocument;
    const s = doc.createElement("script");
    s.textContent = rawJS;
    doc.body.appendChild(s);
  }

  // Sync tempHTML
  syncTempHTML();
  showToast("Changes applied ✓");
}

function syncTempHTML() {
  const iframe = document.getElementById("previewFrame");
  if (!iframe || !iframe.contentDocument) return;
  const newHTML = iframe.contentDocument.documentElement.outerHTML;
  undoStack.push(newHTML);
  redoStack = [];
  tempHTML  = newHTML;
  // Sync code panel
  setCodePanelContent();
}

/* ────────────────────────────────────────────────────────────
   CODE PANEL
──────────────────────────────────────────────────────────── */
function setCodePanelContent() {
  const htmlEditor = document.getElementById("htmlEditor");
  if (htmlEditor) htmlEditor.value = tempHTML;
  // CSS and JS panels default empty (or could be extracted)
  const cssEditor = document.getElementById("cssEditor");
  const jsEditor  = document.getElementById("jsEditor");
  if (cssEditor && !cssEditor.value) cssEditor.value = "/* Add custom CSS here */";
  if (jsEditor  && !jsEditor.value)  jsEditor.value  = "// Add custom JS here";
}

/* ────────────────────────────────────────────────────────────
   DOWNLOAD
──────────────────────────────────────────────────────────── */
function downloadPage() {
  if (!tempHTML) { showToast("Nothing to download yet", "warn"); return; }
  const blob = new Blob([tempHTML], { type: "text/html" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href     = url;
  a.download = "website.html";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("Downloading website.html ✓");
}

/* ────────────────────────────────────────────────────────────
   OPEN IN NEW TAB
──────────────────────────────────────────────────────────── */
function openInNewTab() {
  if (!tempHTML) { showToast("Nothing to open yet", "warn"); return; }
  const blob = new Blob([tempHTML], { type: "text/html" });
  const url  = URL.createObjectURL(blob);
  window.open(url, "_blank");
  showToast("Opened in new tab ✓");
}

/* ────────────────────────────────────────────────────────────
   UNDO / REDO
──────────────────────────────────────────────────────────── */
function undo() {
  if (undoStack.length <= 1) { showToast("Nothing to undo", "warn"); return; }
  redoStack.push(undoStack.pop());
  tempHTML = undoStack[undoStack.length - 1];
  loadPreview(tempHTML);
  setCodePanelContent();
  showToast("Undone");
}

function redo() {
  if (!redoStack.length) { showToast("Nothing to redo", "warn"); return; }
  const html = redoStack.pop();
  undoStack.push(html);
  tempHTML = html;
  loadPreview(tempHTML);
  setCodePanelContent();
  showToast("Redone");
}

/* ────────────────────────────────────────────────────────────
   DEVICE SWITCHER
──────────────────────────────────────────────────────────── */
function setDevice(device) {
  const iframe = document.getElementById("previewFrame");
  if (!iframe) return;
  iframe.className = "preview-iframe " + device;
}

/* ────────────────────────────────────────────────────────────
   TOAST
──────────────────────────────────────────────────────────── */
let toastTimer = null;
function showToast(msg, type = "success") {
  let toast = document.getElementById("ve-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "ve-toast";
    document.body.appendChild(toast);
  }
  const icons = { success: "✓", warn: "⚠", error: "✕" };
  toast.textContent = (icons[type] || "") + " " + msg;
  toast.style.opacity = "1";
  toast.style.background = type === "error" ? "#c0392b" : type === "warn" ? "#e67e22" : "#1a1530";
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.style.opacity = "0"; }, 2500);
}

/* ────────────────────────────────────────────────────────────
   VE PANEL TAB SWITCHER
──────────────────────────────────────────────────────────── */
function switchVeTab(name) {
  document.querySelectorAll(".ve-nav-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.tab === name);
  });
  document.querySelectorAll(".ve-tab-pane").forEach(p => {
    p.classList.toggle("active", p.id === "vt-" + name);
  });
}

/* ────────────────────────────────────────────────────────────
   HELPERS
──────────────────────────────────────────────────────────── */
function setVal(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val;
}
function getVal(id) {
  const el = document.getElementById(id);
  return el ? el.value : "";
}
function setSelectVal(id, val) {
  const el = document.getElementById(id);
  if (!el) return;
  const opt = [...el.options].find(o => o.value === val);
  if (opt) el.value = val;
}
function getSelectVal(id) {
  const el = document.getElementById(id);
  return el ? el.value : "";
}
function setColorInputs(colorId, hexId, val) {
  const rgb2hex = (str) => {
    const m = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (!m) return str;
    return "#" + [m[1], m[2], m[3]].map(n => parseInt(n).toString(16).padStart(2,"0")).join("");
  };
  const hex = val.startsWith("rgb") ? rgb2hex(val) : val;
  const c   = document.getElementById(colorId);
  const h   = document.getElementById(hexId);
  try {
    if (c) c.value = hex;
    if (h) h.value = hex;
  } catch(_) {}
}

/* ────────────────────────────────────────────────────────────
   INIT — DOM READY
──────────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {

  /* ── Backend status ── */
  initBackendStatus();

  /* ── Prompt stage ── */
  document.getElementById("generateBtn")
    ?.addEventListener("click", generateWebsite);

  document.getElementById("buildPrompt")
    ?.addEventListener("keydown", e => {
      if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); generateWebsite(); }
    });

  // Suggestion chips
  document.querySelectorAll(".sug-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const ta = document.getElementById("buildPrompt");
      if (ta) { ta.value = btn.textContent.trim(); ta.focus(); }
    });
  });

  /* ── Topbar buttons ── */

  // New project
  document.getElementById("newBtn")?.addEventListener("click", () => {
    if (!confirm("Start a new project? Unsaved changes will be lost.")) return;
    currentProject = null; originalHTML = ""; tempHTML = "";
    undoStack = []; redoStack = [];
    document.getElementById("promptStage").style.display  = "";
    document.getElementById("builderStage").style.display = "none";
    closeVisualEditor();
    document.getElementById("buildPrompt").value = "";
  });

  // Code panel toggle
  document.getElementById("codeBtn")?.addEventListener("click", () => {
    document.getElementById("codePanel").classList.toggle("open");
  });

  // Open in new tab
  document.getElementById("openTabBtn")?.addEventListener("click", openInNewTab);

  // Download
  document.getElementById("downloadBtn")?.addEventListener("click", downloadPage);

  // Device buttons
  document.querySelectorAll(".dev-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".dev-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      setDevice(btn.dataset.device);
    });
  });

  /* ── Code panel ── */
  document.querySelectorAll(".cp-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".cp-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      ["htmlEditor","cssEditor","jsEditor"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = "none";
      });
      const map = { html: "htmlEditor", css: "cssEditor", js: "jsEditor" };
      const target = document.getElementById(map[tab.dataset.lang]);
      if (target) target.style.display = "block";
    });
  });

  document.getElementById("cpApply")?.addEventListener("click", () => {
    const htmlVal = document.getElementById("htmlEditor")?.value;
    const cssVal  = document.getElementById("cssEditor")?.value;
    const jsVal   = document.getElementById("jsEditor")?.value;
    if (htmlVal) {
      // If css/js additions, inject them
      let combined = htmlVal;
      if (cssVal && cssVal.trim() && cssVal.trim() !== "/* Add custom CSS here */") {
        combined = combined.replace("</head>", `<style>${cssVal}</style></head>`);
      }
      if (jsVal  && jsVal.trim()  && jsVal.trim()  !== "// Add custom JS here") {
        combined = combined.replace("</body>", `<script>${jsVal}<\/script></body>`);
      }
      undoStack.push(combined);
      redoStack = [];
      tempHTML = combined;
      loadPreview(tempHTML);
      document.getElementById("codePanel").classList.remove("open");
      showToast("Code applied ✓");
    }
  });

  document.getElementById("cpCopy")?.addEventListener("click", () => {
    const active = document.querySelector(".cp-tab.active")?.dataset.lang;
    const map = { html: "htmlEditor", css: "cssEditor", js: "jsEditor" };
    const val = document.getElementById(map[active])?.value || "";
    navigator.clipboard.writeText(val).then(() => showToast("Copied ✓"));
  });

  document.getElementById("cpClose")?.addEventListener("click", () => {
    document.getElementById("codePanel").classList.remove("open");
  });

  /* ── Visual Editor Panel ── */
  document.getElementById("veClose")?.addEventListener("click", closeVisualEditor);
  document.getElementById("veBackdrop")?.addEventListener("click", closeVisualEditor);

  // VE tab nav
  document.querySelectorAll(".ve-nav-btn").forEach(btn => {
    btn.addEventListener("click", () => switchVeTab(btn.dataset.tab));
  });

  // Align buttons
  document.querySelectorAll(".al-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".al-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // Opacity slider label sync
  document.getElementById("ve-opacity")?.addEventListener("input", e => {
    const lbl = document.getElementById("ve-opacity-label");
    if (lbl) lbl.textContent = e.target.value + "%";
  });

  // Color picker ↔ hex field sync
  ["ve-color", "ve-bg"].forEach((colorId, i) => {
    const hexId = i === 0 ? "ve-color-hex" : "ve-bg-hex";
    document.getElementById(colorId)?.addEventListener("input", e => {
      const h = document.getElementById(hexId);
      if (h) h.value = e.target.value;
    });
    document.getElementById(hexId)?.addEventListener("input", e => {
      const c = document.getElementById(colorId);
      if (c && /^#[0-9a-fA-F]{6}$/.test(e.target.value)) c.value = e.target.value;
    });
  });

  // Image upload
  document.getElementById("ve-img-upload")?.addEventListener("change", e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      const src = document.getElementById("ve-img-src");
      if (src) src.value = ev.target.result;
    };
    reader.readAsDataURL(file);
  });

  // VE Preview (live apply without closing)
  document.getElementById("vePreviewBtn")?.addEventListener("click", applyVisualEditorChanges);

  // VE Save (apply + close)
  document.getElementById("veSaveBtn")?.addEventListener("click", () => {
    applyVisualEditorChanges();
    closeVisualEditor();
    showToast("Changes saved ✓");
  });

  // Old editor panel buttons (kept for compatibility)
  document.getElementById("applyBtn")?.addEventListener("click", applyVisualEditorChanges);
  document.getElementById("saveBtn")?.addEventListener("click", () => {
    applyVisualEditorChanges();
    closeVisualEditor();
  });
  document.getElementById("cancelBtn")?.addEventListener("click", closeVisualEditor);
  document.getElementById("undoBtn")?.addEventListener("click", undo);
  document.getElementById("redoBtn")?.addEventListener("click", redo);

  // Topbar undo/redo (additional buttons)
  document.getElementById("undoBtnTop")?.addEventListener("click", undo);
  document.getElementById("redoBtnTop")?.addEventListener("click", redo);

  // Keyboard shortcuts
  document.addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && e.key === "z") { e.preventDefault(); undo(); }
    if ((e.ctrlKey || e.metaKey) && (e.key === "y" || (e.shiftKey && e.key === "z"))) { e.preventDefault(); redo(); }
    if ((e.ctrlKey || e.metaKey) && e.key === "s") {
      e.preventDefault();
      if (veOpen) { applyVisualEditorChanges(); closeVisualEditor(); }
      showToast("Saved ✓");
    }
    if (e.key === "Escape") {
      if (veOpen) closeVisualEditor();
      if (document.getElementById("codePanel")?.classList.contains("open")) {
        document.getElementById("codePanel").classList.remove("open");
      }
    }
  });

}); // end DOMContentLoaded