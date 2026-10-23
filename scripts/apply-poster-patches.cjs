const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function patchAllPosters() {
  const patchSvg = `
    <svg width="1080" height="1350" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="posterPillBg" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="rgb(122, 91, 76)"/>
          <stop offset="100%" stop-color="rgb(109, 87, 76)"/>
        </linearGradient>
      </defs>
      <!-- Perfectly covers LINUXENIC CORP. text inside the top pill -->
      <rect x="212" y="45" width="138" height="38" fill="url(#posterPillBg)" />
    </svg>
  `;

  const files = [
    path.join(__dirname, '../../post/COVER-NFXCTF.png'),
    path.join(__dirname, '../../post/NFXCTF-DETAILS.png'),
    path.join(__dirname, '../../post/NFXCTF-SPONSOR.png'),
    path.join(__dirname, '../../post/REGISTRATION-NFXCTF.png'),
    path.join(__dirname, '../public/nfxctf-sponsor-poster.png'),
  ];

  for (const file of files) {
    if (fs.existsSync(file)) {
      console.log('Patching:', file);
      const buffer = await sharp(file)
        .composite([{ input: Buffer.from(patchSvg) }])
        .png()
        .toBuffer();
      fs.writeFileSync(file, buffer);
      console.log('Successfully patched:', file);
    } else {
      console.warn('File not found:', file);
    }
  }

  // Also sync web/dist/nfxctf-sponsor-poster.png if web/dist exists
  const distPoster = path.join(__dirname, '../dist/nfxctf-sponsor-poster.png');
  if (fs.existsSync(distPoster)) {
    fs.copyFileSync(path.join(__dirname, '../public/nfxctf-sponsor-poster.png'), distPoster);
    console.log('Synced to dist poster:', distPoster);
  }

  console.log('All posters patched successfully!');
}

patchAllPosters().catch(console.error);
