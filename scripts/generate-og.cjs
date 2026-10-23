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

  // Build high-tech cyber SVG with vector icons & crisp typography
  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <!-- Background Gradients -->
      <radialGradient id="cyanGlow" cx="22%" cy="30%" r="50%">
        <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.30"/>
        <stop offset="60%" stop-color="#06b6d4" stop-opacity="0.08"/>
        <stop offset="100%" stop-color="#06b6d4" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="purpleGlow" cx="85%" cy="25%" r="55%">
        <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.26"/>
        <stop offset="60%" stop-color="#8b5cf6" stop-opacity="0.06"/>
        <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="amberGlow" cx="62%" cy="65%" r="45%">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
        <stop offset="60%" stop-color="#f59e0b" stop-opacity="0.05"/>
        <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
      </radialGradient>

      <!-- Text & Border Gradients -->
      <linearGradient id="titleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="60%" stop-color="#f1f5f9"/>
        <stop offset="100%" stop-color="#e2e8f0"/>
      </linearGradient>
      <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#ff7a00"/>
        <stop offset="50%" stop-color="#fb923c"/>
        <stop offset="100%" stop-color="#f59e0b"/>
      </linearGradient>
      <linearGradient id="sponsorBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fde047" stop-opacity="0.95"/>
        <stop offset="50%" stop-color="#f59e0b" stop-opacity="0.55"/>
        <stop offset="100%" stop-color="#b45309" stop-opacity="0.9"/>
      </linearGradient>
      <linearGradient id="sponsorBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#18150c" stop-opacity="0.96"/>
        <stop offset="50%" stop-color="#121727" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#0b1120" stop-opacity="0.96"/>
      </linearGradient>
      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1e293b" stop-opacity="0.75"/>
        <stop offset="100%" stop-color="#0f172a" stop-opacity="0.88"/>
      </linearGradient>

      <!-- Pattern Grid -->
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" stroke-width="1" stroke-opacity="0.22"/>
      </pattern>

      <!-- Clip Path for Logo Rounded Card -->
      <clipPath id="logoClip">
        <rect width="250" height="250" rx="28" fill="#ffffff" />
      </clipPath>

      <!-- Filters -->
      <filter id="badgeShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="#000000" flood-opacity="0.7"/>
      </filter>
      <filter id="cardGlow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="0" stdDeviation="16" flood-color="#f59e0b" flood-opacity="0.22"/>
      </filter>
    </defs>

    <style>
      .font-sans { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; }
      .font-mono { font-family: "JetBrains Mono", Consolas, "Courier New", monospace; }
    </style>

    <!-- Base Background -->
    <rect width="${width}" height="${height}" fill="#030712"/>

    <!-- Grid Overlay -->
    <rect width="${width}" height="${height}" fill="url(#grid)"/>

    <!-- Ambient Glowing Spheres -->
    <rect width="${width}" height="${height}" fill="url(#cyanGlow)"/>
    <rect width="${width}" height="${height}" fill="url(#purpleGlow)"/>
    <rect width="${width}" height="${height}" fill="url(#amberGlow)"/>

    <!-- Decorative Tech Outer Frame -->
    <rect x="22" y="22" width="${width - 44}" height="${height - 44}" rx="20" fill="none" stroke="#1e293b" stroke-width="1.5" stroke-opacity="0.7"/>
    <rect x="26" y="26" width="${width - 52}" height="${height - 52}" rx="16" fill="none" stroke="#334155" stroke-width="0.8" stroke-dasharray="8,8" stroke-opacity="0.4"/>

    <!-- Tech Corner Accents -->
    <path d="M 22 62 L 22 22 L 62 22" fill="none" stroke="#22d3ee" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M ${width - 22} 62 L ${width - 22} 22 L ${width - 62} 22" fill="none" stroke="#a855f7" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M 22 ${height - 62} L 22 ${height - 22} L 62 ${height - 22}" fill="none" stroke="#ff7a00" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M ${width - 22} ${height - 62} L ${width - 22} ${height - 22} L ${width - 62} ${height - 22}" fill="none" stroke="#22d3ee" stroke-width="3.5" stroke-linecap="round"/>

    <!-- ==================== TOP BAR ==================== -->
    <!-- Left: Live Event Status Pill -->
    <g transform="translate(56, 52)">
      <rect width="365" height="38" rx="19" fill="#0b1120" fill-opacity="0.9" stroke="#22d3ee" stroke-width="1.2" stroke-opacity="0.5"/>
      <circle cx="22" cy="19" r="6" fill="#10b981"/>
      <circle cx="22" cy="19" r="9" fill="none" stroke="#10b981" stroke-width="1.5" stroke-opacity="0.4"/>
      <text x="38" y="24" fill="#22d3ee" font-size="12.5" font-weight="700" letter-spacing="1.5" class="font-mono">07–09 NOV 2026 // 48H JEOPARDY CTF</text>
    </g>

    <!-- Right: Collab Logos & Badges -->
    <g transform="translate(734, 52)">
      <rect width="410" height="38" rx="19" fill="#0b1120" fill-opacity="0.9" stroke="#64748b" stroke-width="1" stroke-opacity="0.35"/>

      <!-- NFCC logo & text -->
      <image xlink:href="data:image/png;base64,${nfccBase64}" x="14" y="6" width="26" height="26" />
      <text x="46" y="24" fill="#ff7a00" font-size="12" font-weight="700" letter-spacing="1" class="font-mono">NFCTF (NFCC)</text>

      <!-- Divider -->
      <text x="175" y="24" fill="#a855f7" font-size="14" font-weight="800" class="font-mono">✕</text>

      <!-- NXCTF logo & text -->
      <image xlink:href="data:image/png;base64,${nxctfBase64}" x="195" y="6" width="26" height="26" />
      <text x="228" y="24" fill="#22d3ee" font-size="12" font-weight="700" letter-spacing="1" class="font-mono">NXCTF COMMUNITY</text>
    </g>

    <!-- ==================== MAIN CONTENT ==================== -->

    <!-- Left Side: Official NFX CTF Mascot/Emblem Card (Framed Seamlessly) -->
    <g transform="translate(64, 126)">
      <!-- Outer Tech Rings -->
      <circle cx="135" cy="135" r="142" fill="none" stroke="#ff7a00" stroke-width="1.2" stroke-opacity="0.25" stroke-dasharray="6,8"/>
      <circle cx="135" cy="135" r="132" fill="none" stroke="#22d3ee" stroke-width="1" stroke-opacity="0.2"/>

      <!-- Rounded Emblem Container -->
      <g filter="url(#badgeShadow)">
        <rect width="250" height="250" rx="28" fill="#000000" stroke="#ff7a00" stroke-width="2" stroke-opacity="0.45"/>
        <g clip-path="url(#logoClip)">
          <image xlink:href="data:image/png;base64,${logo2Base64}" x="5" y="5" width="240" height="240" preserveAspectRatio="xMidYMid meet"/>
        </g>
      </g>

      <!-- Bottom Badge on Emblem -->
      <g transform="translate(50, 235)">
        <rect width="150" height="26" rx="13" fill="#020617" stroke="#22d3ee" stroke-width="1.2"/>
        <text x="75" y="17" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1.5" class="font-mono">SOLO CTF 2026</text>
      </g>
    </g>

    <!-- Right Side: Headline + Sponsors -->
    <g transform="translate(366, 122)">

      <!-- Eyebrow Tag -->
      <g transform="translate(0, 4)">
        <rect width="290" height="24" rx="6" fill="#1e293b" fill-opacity="0.8" stroke="#334155" stroke-width="1"/>
        <text x="12" y="16" fill="#94a3b8" font-size="11" font-weight="700" letter-spacing="2" class="font-mono">NATIONAL &amp; CAMPUS EDITION</text>
      </g>

      <!-- Main Event Title -->
      <g transform="translate(0, 72)">
        <text x="0" y="0" fill="url(#titleGrad)" font-size="64" font-weight="900" letter-spacing="-1.5" class="font-sans">
          NFX CTF <tspan fill="url(#orangeGrad)">2026</tspan>
        </text>
      </g>

      <!-- Subtitle Description -->
      <text x="0" y="103" fill="#94a3b8" font-size="15.5" font-weight="500" class="font-sans">
        Kompetisi Cybersecurity Capture The Flag Kolaborasi Resmi UKM NFCC × NXCTF
      </text>

      <!-- ==================== HIGHLIGHTED PARTNERSHIP / SPONSOR CARD ==================== -->
      <g transform="translate(0, 126)" filter="url(#cardGlow)">
        <!-- Card Container -->
        <rect width="778" height="124" rx="16" fill="url(#sponsorBgGrad)" stroke="url(#sponsorBorderGrad)" stroke-width="2" filter="url(#badgeShadow)"/>

        <!-- Top Amber Accent Line -->
        <line x1="20" y1="0" x2="280" y2="0" stroke="#fde047" stroke-width="2.5" stroke-linecap="round"/>

        <!-- Partnership Display Box -->
        <g transform="translate(18, 16)">
          <rect width="168" height="92" rx="12" fill="#000000" stroke="#f59e0b" stroke-width="1.4"/>
          <!-- Subtext inside box -->
          <text x="84" y="24" fill="#fbbf24" font-size="9" font-weight="700" text-anchor="middle" letter-spacing="1" class="font-mono">// SPONSORSHIP // </text>
          <text x="84" y="52" fill="#ffffff" font-size="14" font-weight="900" text-anchor="middle" class="font-sans">OPEN SPONSOR</text>
          <text x="84" y="76" fill="#94a3b8" font-size="9.5" font-weight="600" text-anchor="middle" class="font-mono">nfx.my.id/partnership</text>
        </g>

        <!-- Sponsor Details -->
        <g transform="translate(204, 22)">
          <!-- Tier Tag -->
          <rect width="255" height="22" rx="11" fill="#f59e0b" fill-opacity="0.16" stroke="#f59e0b" stroke-width="1"/>
          <text x="12" y="15" fill="#fde047" font-size="10.5" font-weight="800" letter-spacing="1.2" class="font-mono">★ OPEN FOR SPONSORSHIP</text>

          <!-- Main Sponsor Name -->
          <text x="0" y="52" fill="#ffffff" font-size="25" font-weight="900" letter-spacing="1" class="font-sans">
            TERBUKA UNTUK SPONSOR
          </text>

          <!-- Sponsor Tagline -->
          <text x="0" y="74" fill="#cbd5e1" font-size="12.5" font-weight="500" class="font-sans">
            Peluang Kemitraan Industri Cybersecurity &amp; Komunitas IT Nasional
          </text>
        </g>

        <!-- Sponsor Reward Support Box -->
        <g transform="translate(604, 18)">
          <rect width="156" height="88" rx="12" fill="#090e1a" stroke="#f59e0b" stroke-width="1.2" stroke-opacity="0.5"/>
          <text x="78" y="24" fill="#fde047" font-size="10" font-weight="700" text-anchor="middle" letter-spacing="1" class="font-mono">PORTAL PARTNERSHIP</text>
          <text x="78" y="52" fill="#38bdf8" font-size="17" font-weight="900" text-anchor="middle" class="font-mono">PROPOSAL</text>
          <text x="78" y="72" fill="#94a3b8" font-size="10" font-weight="600" text-anchor="middle" class="font-mono">Paket Sponsor &amp; Donasi</text>
        </g>
      </g>
    </g>

    <!-- ==================== BOTTOM FEATURE BAR (WITH CRISP VECTOR ICONS) ==================== -->
    <g transform="translate(56, 520)">
      <!-- Pill 1: Cash Prize Pool -->
      <g transform="translate(0, 0)">
        <rect width="262" height="54" rx="12" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1" stroke-opacity="0.5"/>
        <!-- Vector Cash Icon -->
        <g transform="translate(14, 13)">
          <rect width="28" height="28" rx="8" fill="#10b981" fill-opacity="0.15" stroke="#10b981" stroke-width="1"/>
          <!-- Banknote / dollar vector -->
          <rect x="6" y="8" width="16" height="12" rx="2" fill="none" stroke="#10b981" stroke-width="1.5"/>
          <circle cx="14" cy="14" r="2.5" fill="#10b981"/>
        </g>
        <text x="50" y="24" fill="#ffffff" font-size="12" font-weight="700" class="font-sans">Jalur Kompetisi</text>
        <text x="50" y="42" fill="#34d399" font-size="12.5" font-weight="800" class="font-mono">Track Mahasiswa &amp; Umum</text>
      </g>

      <!-- Pill 2: E-Certificate Resmi -->
      <g transform="translate(276, 0)">
        <rect width="270" height="54" rx="12" fill="url(#cardGrad)" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.5"/>
        <!-- Vector Trophy / Star Icon -->
        <g transform="translate(14, 13)">
          <rect width="28" height="28" rx="8" fill="#f59e0b" fill-opacity="0.15" stroke="#f59e0b" stroke-width="1"/>
          <!-- Star/Trophy Vector -->
          <path d="M 14 7 L 16 11 L 21 11.5 L 17 15 L 18.5 20 L 14 17 L 9.5 20 L 11 15 L 7 11.5 L 12 11 Z" fill="#fbbf24"/>
        </g>
        <text x="50" y="24" fill="#ffffff" font-size="12" font-weight="700" class="font-sans">E-Certificate Resmi</text>
        <text x="50" y="42" fill="#fde047" font-size="12.5" font-weight="800" class="font-mono">Sertifikat Juara &amp; Peserta</text>
      </g>

      <!-- Pill 3: Dynamic Decay & Categories -->
      <g transform="translate(560, 0)">
        <rect width="268" height="54" rx="12" fill="url(#cardGrad)" stroke="#22d3ee" stroke-width="1" stroke-opacity="0.4"/>
        <!-- Vector Zap Icon -->
        <g transform="translate(14, 13)">
          <rect width="28" height="28" rx="8" fill="#22d3ee" fill-opacity="0.15" stroke="#22d3ee" stroke-width="1"/>
          <path d="M 15 6 L 9 16 L 14 16 L 13 22 L 19 12 L 14 12 Z" fill="#38bdf8"/>
        </g>
        <text x="50" y="24" fill="#ffffff" font-size="12" font-weight="700" class="font-sans">Format &amp; Platform</text>
        <text x="50" y="42" fill="#38bdf8" font-size="12.5" font-weight="700" class="font-mono">Individu • Dynamic Decay</text>
      </g>

      <!-- Pill 4: Academic Supporter -->
      <g transform="translate(842, 0)">
        <rect width="246" height="54" rx="12" fill="url(#cardGrad)" stroke="#64748b" stroke-width="1" stroke-opacity="0.4"/>
        <image xlink:href="data:image/png;base64,${sttnfBase64}" x="12" y="11" width="32" height="32" />
        <text x="52" y="24" fill="#ffffff" font-size="12" font-weight="700" class="font-sans">Supported By</text>
        <text x="52" y="42" fill="#94a3b8" font-size="11" font-weight="600" class="font-mono">STT Terpadu Nurul Fikri</text>
      </g>
    </g>

  </svg>
  `;

  const outputPath = path.join(publicDir, 'og-image.png');
  await sharp(Buffer.from(svg))
    .png({ quality: 95, compressionLevel: 8 })
    .toFile(outputPath);

  console.log('Successfully generated polished OG Image at:', outputPath);
}

generateOgImage().catch(console.error);
