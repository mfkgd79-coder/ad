// backend/engine/fallbackEngine.js

const KEYWORD_MAP = {
  portfolio: ["portfolio", "personal", "resume", "cv", "about me", "freelancer", "my work"],
  saas: ["saas", "software", "platform", "tool", "app", "subscription", "pricing plan"],
  restaurant: ["restaurant", "food", "cafe", "menu", "dining", "bistro", "bakery", "coffee", "pizza", "bar"],
  ecommerce: ["shop", "store", "ecommerce", "product", "cart", "checkout"],
  business: ["business", "corporate", "company", "services", "consulting"],
  agency: ["agency", "creative", "marketing", "branding"],
  landing: ["landing", "launch", "signup"],
  blog: ["blog", "article", "news"],
  education: ["education", "course", "academy"],
  healthcare: ["clinic", "hospital", "doctor"],
  dashboard: ["dashboard", "admin", "analytics"],
  fashion: ["fashion", "clothing", "brand"]
};

const THEMES = ["dark", "light", "colorful"];
const STYLES = ["modern", "minimal", "glass", "classic"];

export function fallbackExtract(prompt) {
  const lower = prompt.toLowerCase();

  let type = "landing";
  let maxScore = 0;

  for (const [cat, keywords] of Object.entries(KEYWORD_MAP)) {
    let score = 0;
    keywords.forEach(kw => {
      if (lower.includes(kw)) score += kw.includes(" ") ? 3 : 2;
    });

    if (score > maxScore) {
      maxScore = score;
      type = cat;
    }
  }

  return {
    type,
    theme: "dark",
    style: "modern",
    features: ["hero", "about", "contact"],
    pages: ["index"],
    framework: "html",
    colors: {
      primary: "#6366F1",
      secondary: "#8B5CF6"
    },
    businessName: "My Website",
    headline: "Welcome to Our Website",
    subheadline: "We build modern experiences",
    description: "A clean and responsive website powered by smart templates."
  };
}