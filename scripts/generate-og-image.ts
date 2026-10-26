import { writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const root = process.cwd();
const svgOut = join(root, "public/og-image.svg");
const pngOut = join(root, "public/og-image.png");

const FONT = "Segoe UI, Helvetica, Arial, sans-serif";

// Palette (matches the site's dark splash + cyan accent)
const BG = "#071014";
const ACCENT = "#22d3ee";
const INK = "#eef8fa";
const MUTED = "#b7cdd4";
const FAINT = "#5a7a86";
const PANEL = "#0d1b20";
const LINE = "#1d3640";

/** Small rounded node with a label, used in the comparison diagram. */
function node(x: number, y: number, w: number, label: string, accent = false) {
  const stroke = accent ? ACCENT : LINE;
  const fill = accent ? "#0e2730" : PANEL;
  const text = accent ? ACCENT : MUTED;
  return `
    <rect x="${x}" y="${y}" width="${w}" height="46" rx="10" fill="${fill}" stroke="${stroke}" stroke-width="2"/>
    <text x="${x + w / 2}" y="${y + 29}" text-anchor="middle" fill="${text}" font-family="${FONT}" font-size="20" font-weight="700">${label}</text>`;
}

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img">
  <defs>
    <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
      <circle cx="1.5" cy="1.5" r="1" fill="${ACCENT}" fill-opacity="0.12"/>
    </pattern>
    <radialGradient id="glow" cx="20%" cy="0%" r="70%">
      <stop offset="0%" stop-color="${ACCENT}" stop-opacity="0.18"/>
      <stop offset="60%" stop-color="${BG}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="${BG}"/>
  <rect width="1200" height="630" fill="url(#dots)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Kicker + headline -->
  <text x="72" y="104" fill="${ACCENT}" font-family="${FONT}" font-size="26" font-weight="700" letter-spacing="0.08em">AMAZON ECS GATEWAY · WALKTHROUGH</text>
  <text x="72" y="180" fill="${INK}" font-family="${FONT}" font-size="58" font-weight="800">One gateway, not one</text>
  <text x="72" y="248" fill="${INK}" font-family="${FONT}" font-size="58" font-weight="800">ALB per service</text>

  <!-- Comparison diagram -->
  <g transform="translate(72,310)">
    <!-- Traditional -->
    <text x="0" y="0" fill="${FAINT}" font-family="${FONT}" font-size="20" font-weight="700" letter-spacing="0.06em">TRADITIONAL</text>
    ${node(0, 20, 150, "ALB + cert")}
    ${node(0, 90, 150, "ALB + cert")}
    <line x1="150" y1="43" x2="214" y2="43" stroke="${LINE}" stroke-width="2"/>
    <line x1="150" y1="113" x2="214" y2="113" stroke="${LINE}" stroke-width="2"/>
    ${node(214, 20, 140, "Service A")}
    ${node(214, 90, 140, "Service B")}

    <!-- Divider arrow -->
    <text x="430" y="86" text-anchor="middle" fill="${ACCENT}" font-family="${FONT}" font-size="48" font-weight="700">→</text>

    <!-- With a gateway -->
    <text x="500" y="0" fill="${ACCENT}" font-family="${FONT}" font-size="20" font-weight="700" letter-spacing="0.06em">WITH A GATEWAY</text>
    ${node(500, 55, 190, "Shared ALB + cert", true)}
    <path d="M690 78 H740 M740 43 V113 M740 43 H782 M740 113 H782" fill="none" stroke="${ACCENT}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    ${node(782, 20, 140, "Service A")}
    ${node(782, 90, 140, "Service B")}
  </g>

  <!-- Footer -->
  <text x="72" y="590" fill="${FAINT}" font-family="${FONT}" font-size="22">ecs-gateway-walkthrough.johna.kiwi</text>
</svg>
`;

writeFileSync(svgOut, svg);
await sharp(Buffer.from(svg)).png().toFile(pngOut);
console.log(`Wrote ${svgOut}`);
console.log(`Wrote ${pngOut}`);
