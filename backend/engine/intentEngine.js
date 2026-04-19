// backend/engine/intentEngine.js

import Groq from "groq-sdk";
import dotenv from "dotenv";
dotenv.config();

let groq = null;

if (process.env.GROQ_API_KEY) {
  groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
}

export async function extractIntent(prompt) {
  try {
    if (!groq) {
      throw new Error("No API key");
    }

    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: `
Extract structured website intent.

Return ONLY JSON with:
type, theme, style, features, pages, colors, businessName, headline, subheadline, description
`
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.3,
      max_tokens: 600,
      response_format: { type: "json_object" }
    });

    let content = response.choices[0].message.content.trim();

    if (content.startsWith("```")) {
      content = content.replace(/```json|```/g, "").trim();
    }

    const parsed = JSON.parse(content);

    return {
      success: true,
      intent: normalizeIntent(parsed)
    };

  } catch (err) {
    console.log("⚠️ Intent AI failed:", err.message);
    return { success: false };
  }
}

function normalizeIntent(data) {
  // Normalize type to lowercase category, replacing underscores/hyphens with spaces
  // Also remove content in parentheses and extract first meaningful word if needed
  let type = (data.type || "landing").toLowerCase().trim()
    .replace(/[_-]/g, " ")
    .replace(/\s*\([^)]*\)/g, "") // Remove parentheses content
    .replace(/\s+/g, " ") // Normalize multiple spaces to single space
    .trim();
  
  // Map common type names to categories
  const typeMap = {
    "landing page": "landing",
    "landing": "landing",
    "product landing": "landing",
    "app landing": "landing",
    "portfolio": "portfolio",
    "personal portfolio": "portfolio",
    "portfolio website": "portfolio",
    "saas": "saas",
    "saas product": "saas",
    "software as a service": "saas",
    "restaurant": "restaurant",
    "restaurant menu": "restaurant",
    "food service": "restaurant",
    "cafe": "restaurant",
    "bar": "restaurant",
    "bistro": "restaurant",
    "ecommerce": "ecommerce",
    "e commerce": "ecommerce",
    "e-commerce": "ecommerce",
    "ecommerce website": "ecommerce",
    "shop": "ecommerce",
    "store": "ecommerce",
    "business": "business",
    "business website": "business",
    "company": "business",
    "corporate": "business",
    "agency": "agency",
    "marketing agency": "agency",
    "creative agency": "agency",
    "blog": "blog",
    "blog website": "blog",
    "education": "education",
    "online course": "education",
    "academy": "education",
    "healthcare": "healthcare",
    "medical": "healthcare",
    "clinic": "healthcare",
    "hospital": "healthcare",
    "dashboard": "dashboard",
    "admin dashboard": "dashboard",
    "analytics": "dashboard",
    "fashion": "fashion",
    "fashion brand": "fashion",
    "clothing": "fashion",
    "apparel": "fashion"
  };
  
  type = typeMap[type] || type;
  
  return {
    type,
    theme: data.theme || "dark",
    style: data.style || "modern",
    features: data.features || ["hero"],
    pages: data.pages || ["index"],
    framework: "html",
    colors: data.colors || {
      primary: "#6366F1",
      secondary: "#8B5CF6"
    },
    businessName: data.businessName || "My Website",
    headline: data.headline || "Welcome",
    subheadline: data.subheadline || "We build amazing things",
    description: data.description || "Modern website"
  };
}