const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateOgImage() {
  const publicDir = path.join(__dirname, '../public');

  const logo2Base64 = fs.readFileSync(path.join(publicDir, 'logo2.png')).toString('base64');
  const nfccBase64 = fs.readFileSync(path.join(publicDir, 'nfcc_black.png')).toString('base64');
  const nxctfBase64 = fs.readFileSync(path.join(publicDir, 'nxctf-logo.png')).toString('base64');
  const sttnfBase64 = fs.readFileSync(path.join(publicDir, 'sttnf-logo.png')).toString('base64');

  const width = 1200;
  const height = 630;

  // Clean, high-tech, simple & stunning cyber aesthetic
  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <!-- Background Ambient Glows -->
      <radialGradient id="cyanGlow" cx="20%" cy="35%" r="55%">
        <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.32"/>
        <stop offset="60%" stop-color="#06b6d4" stop-opacity="0.06"/>
        <stop offset="100%" stop-color="#06b6d4" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="purpleGlow" cx="80%" cy="25%" r="60%">
        <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.25"/>
        <stop offset="60%" stop-color="#8b5cf6" stop-opacity="0.05"/>
        <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="orangeGlow" cx="65%" cy="75%" r="50%">
        <stop offset="0%" stop-color="#ff7a00" stop-opacity="0.22"/>
        <stop offset="60%" stop-color="#ff7a00" stop-opacity="0.04"/>
        <stop offset="100%" stop-color="#ff7a00" stop-opacity="0"/>
      </radialGradient>

      <!-- Gradients -->
      <linearGradient id="titleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="100%" stop-color="#e2e8f0"/>
      </linearGradient>
      <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#ff7a00"/>
        <stop offset="50%" stop-color="#fb923c"/>
        <stop offset="100%" stop-color="#f59e0b"/>
      </linearGradient>
      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1e293b" stop-opacity="0.80"/>
        <stop offset="100%" stop-color="#0f172a" stop-opacity="0.92"/>
      </linearGradient>

      <!-- Grid Pattern -->
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" stroke-width="1" stroke-opacity="0.20"/>
      </pattern>

      <!-- Logo Clip -->
      <clipPath id="logoClip">
        <rect width="280" height="280" rx="32" fill="#ffffff" />
      </clipPath>

      <filter id="badgeShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#000000" flood-opacity="0.8"/>
      </filter>
    </defs>

    <style>
      .font-sans { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; }
      .font-mono { font-family: "JetBrains Mono", Consolas, "Courier New", monospace; }
    </style>

    <!-- Base Background -->
    <rect width="${width}" height="${height}" fill="#030712"/>
    <rect width="${width}" height="${height}" fill="url(#grid)"/>
    <rect width="${width}" height="${height}" fill="url(#cyanGlow)"/>
    <rect width="${width}" height="${height}" fill="url(#purpleGlow)"/>
    <rect width="${width}" height="${height}" fill="url(#orangeGlow)"/>

    <!-- Outer Frame & Corner Accents -->
    <rect x="22" y="22" width="${width - 44}" height="${height - 44}" rx="20" fill="none" stroke="#1e293b" stroke-width="1.5" stroke-opacity="0.7"/>
    <path d="M 22 62 L 22 22 L 62 22" fill="none" stroke="#22d3ee" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M ${width - 22} 62 L ${width - 22} 22 L ${width - 62} 22" fill="none" stroke="#a855f7" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M 22 ${height - 62} L 22 ${height - 22} L 62 ${height - 22}" fill="none" stroke="#ff7a00" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M ${width - 22} ${height - 62} L ${width - 22} ${height - 22} L ${width - 62} ${height - 22}" fill="none" stroke="#22d3ee" stroke-width="3.5" stroke-linecap="round"/>

    <!-- ==================== TOP BAR ==================== -->
    <!-- Left: Schedule / Format -->
    <g transform="translate(56, 50)">
      <rect width="365" height="38" rx="19" fill="#0b1120" fill-opacity="0.9" stroke="#22d3ee" stroke-width="1.2" stroke-opacity="0.5"/>
      <circle cx="22" cy="19" r="6" fill="#10b981"/>
      <circle cx="22" cy="19" r="9" fill="none" stroke="#10b981" stroke-width="1.5" stroke-opacity="0.4"/>
      <text x="38" y="24" fill="#22d3ee" font-size="12.5" font-weight="700" letter-spacing="1.5" class="font-mono">07–09 NOV 2026 // 48H JEOPARDY CTF</text>
    </g>

    <!-- Right: Organizers -->
    <g transform="translate(734, 50)">
      <rect width="410" height="38" rx="19" fill="#0b1120" fill-opacity="0.9" stroke="#64748b" stroke-width="1" stroke-opacity="0.35"/>
      <image xlink:href="data:image/png;base64,${nfccBase64}" x="14" y="6" width="26" height="26" />
      <text x="46" y="24" fill="#ff7a00" font-size="12" font-weight="700" letter-spacing="1" class="font-mono">NFCTF (NFCC)</text>
      <text x="175" y="24" fill="#a855f7" font-size="14" font-weight="800" class="font-mono">✕</text>
      <image xlink:href="data:image/png;base64,${nxctfBase64}" x="195" y="6" width="26" height="26" />
      <text x="228" y="24" fill="#22d3ee" font-size="12" font-weight="700" letter-spacing="1" class="font-mono">NXCTF COMMUNITY</text>
    </g>

    <!-- ==================== MAIN HERO SECTION ==================== -->

    <!-- Left: Official NFX Emblem (Large & Crisp) -->
    <g transform="translate(56, 126)">
      <!-- Outer Tech Glow Ring -->
      <circle cx="140" cy="140" r="150" fill="none" stroke="#ff7a00" stroke-width="1.2" stroke-opacity="0.25" stroke-dasharray="6,8"/>
      <circle cx="140" cy="140" r="140" fill="none" stroke="#22d3ee" stroke-width="1" stroke-opacity="0.2"/>

      <!-- Emblem Box -->
      <g filter="url(#badgeShadow)">
        <rect width="280" height="280" rx="32" fill="#000000" stroke="#ff7a00" stroke-width="2" stroke-opacity="0.5"/>
        <g clip-path="url(#logoClip)">
          <image xlink:href="data:image/png;base64,${logo2Base64}" x="10" y="10" width="260" height="260" preserveAspectRatio="xMidYMid meet"/>
        </g>
      </g>

      <!-- Badge below logo -->
      <g transform="translate(60, 266)">
        <rect width="160" height="28" rx="14" fill="#020617" stroke="#22d3ee" stroke-width="1.2"/>
        <text x="80" y="18" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1.5" class="font-mono">SOLO CTF 2026</text>
      </g>
    </g>

    <!-- Right: Event Info (Clean, Modern & Roomy) -->
    <g transform="translate(382, 128)">

      <!-- Eyebrow Pill -->
      <g transform="translate(0, 0)">
        <rect width="320" height="28" rx="8" fill="#1e293b" fill-opacity="0.8" stroke="#334155" stroke-width="1"/>
        <text x="14" y="18" fill="#94a3b8" font-size="11.5" font-weight="700" letter-spacing="2" class="font-mono">NATIONAL &amp; CAMPUS EDITION</text>
      </g>

      <!-- Main Headline Title -->
      <g transform="translate(0, 78)">
        <text x="0" y="0" fill="url(#titleGrad)" font-size="74" font-weight="900" letter-spacing="-2" class="font-sans">
          NFX CTF <tspan fill="url(#orangeGrad)">2026</tspan>
        </text>
      </g>

      <!-- Subtitle Description -->
      <text x="0" y="116" fill="#cbd5e1" font-size="17" font-weight="500" class="font-sans">
        Kompetisi Keamanan Siber Capture The Flag Nasional &amp; Internal Kampus
      </text>
      <text x="0" y="142" fill="#94a3b8" font-size="14.5" font-weight="400" class="font-sans">
        Kolaborasi Resmi UKM NFCC (STT-NF) × NXCTF Community • 48 Jam Non-Stop
      </text>

      <!-- 3 Key Feature Cards (Simple & Clean Horizontal Row) -->
      <g transform="translate(0, 180)">
        <!-- Feature 1: Format -->
        <g transform="translate(0, 0)">
          <rect width="230" height="74" rx="14" fill="url(#cardGrad)" stroke="#22d3ee" stroke-width="1.2" stroke-opacity="0.5"/>
          <text x="18" y="28" fill="#22d3ee" font-size="11" font-weight="700" letter-spacing="1" class="font-mono">FORMAT LOMBA</text>
          <text x="18" y="52" fill="#ffffff" font-size="15" font-weight="800" class="font-sans">Jeopardy Solo (48h)</text>
        </g>

        <!-- Feature 2: Tracks -->
        <g transform="translate(244, 0)">
          <rect width="245" height="74" rx="14" fill="url(#cardGrad)" stroke="#ff7a00" stroke-width="1.2" stroke-opacity="0.5"/>
          <text x="18" y="28" fill="#ff7a00" font-size="11" font-weight="700" letter-spacing="1" class="font-mono">DUAL TRACK</text>
          <text x="18" y="52" fill="#ffffff" font-size="15" font-weight="800" class="font-sans">Mahasiswa NF &amp; Umum</text>
        </g>

        <!-- Feature 3: Challenges -->
        <g transform="translate(503, 0)">
          <rect width="259" height="74" rx="14" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.2" stroke-opacity="0.5"/>
          <text x="18" y="28" fill="#10b981" font-size="11" font-weight="700" letter-spacing="1" class="font-mono">CHALLENGE &amp; SCORING</text>
          <text x="18" y="52" fill="#ffffff" font-size="15" font-weight="800" class="font-sans">8 Kategori • Dynamic Decay</text>
        </g>
      </g>
    </g>

    <!-- ==================== BOTTOM FOOTER BAR ==================== -->
    <g transform="translate(56, 526)">
      <!-- Box 1: Platform CTF -->
      <g transform="translate(0, 0)">
        <rect width="340" height="50" rx="12" fill="#0b1120" stroke="#22d3ee" stroke-width="1" stroke-opacity="0.4"/>
        <text x="18" y="22" fill="#94a3b8" font-size="10.5" font-weight="600" class="font-mono">PLATFORM KOMPETISI</text>
        <text x="18" y="39" fill="#22d3ee" font-size="13" font-weight="800" class="font-mono">https://ctf.nfx.my.id</text>
      </g>

      <!-- Box 2: Landing Page & Info -->
      <g transform="translate(356, 0)">
        <rect width="340" height="50" rx="12" fill="#0b1120" stroke="#ff7a00" stroke-width="1" stroke-opacity="0.4"/>
        <text x="18" y="22" fill="#94a3b8" font-size="10.5" font-weight="600" class="font-mono">PORTAL RESMI &amp; GUIDEBOOK</text>
        <text x="18" y="39" fill="#ff7a00" font-size="13" font-weight="800" class="font-mono">https://nfx.my.id</text>
      </g>

      <!-- Box 3: Academic Supporter -->
      <g transform="translate(712, 0)">
        <rect width="376" height="50" rx="12" fill="#0b1120" stroke="#64748b" stroke-width="1" stroke-opacity="0.4"/>
        <image xlink:href="data:image/png;base64,${sttnfBase64}" x="14" y="10" width="30" height="30" />
        <text x="54" y="22" fill="#94a3b8" font-size="10" font-weight="600" class="font-mono">ACADEMIC SUPPORTER</text>
        <text x="54" y="39" fill="#ffffff" font-size="12.5" font-weight="700" class="font-sans">STT Terpadu Nurul Fikri</text>
      </g>
    </g>

  </svg>
  `;

  const outputPath = path.join(publicDir, 'og-image.png');
  await sharp(Buffer.from(svg))
    .png({ quality: 95, compressionLevel: 8 })
    .toFile(outputPath);

  // Also sync to dist if dist exists
  const distOgPath = path.join(__dirname, '../dist/og-image.png');
  if (fs.existsSync(distOgPath)) {
    fs.copyFileSync(outputPath, distOgPath);
  }

  console.log('Successfully generated clean & simple OG Image at:', outputPath);
}

generateOgImage().catch(console.error);
