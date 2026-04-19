// backend/engine/injector.js

export function injectData(html, intent) {
  let output = html;

  const replacements = {
    "{{businessName}}": intent.businessName,
    "{{headline}}": intent.headline,
    "{{subheadline}}": intent.subheadline,
    "{{description}}": intent.description,
    "{{primaryColor}}": intent.colors?.primary || "#6366F1",
    "{{secondaryColor}}": intent.colors?.secondary || "#8B5CF6"
  };

  for (const key in replacements) {
    const value = replacements[key];
    const regex = new RegExp(key, "g");
    output = output.replace(regex, value);
  }

  return output;
}