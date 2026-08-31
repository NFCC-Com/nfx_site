# 🎨 DESIGN.md — NFX CTF 2026 Landing Page

> **Design Specification & Visual Identity System**  
> Event: **NFX CTF 2026** (Kolaborasi: **NFCTF** × **NXCTF**, didukung oleh **NFCC**).

---

## 🎯 1. Design Goal & Brand Philosophy

Tujuan utama desain adalah menciptakan web landing page kompetisi CTF (*Capture The Flag*) berstandar modern yang **futuristik, teknikal, kredibel, dan memukau (*stunning visual*)**.

### 🤝 Hubungan Entitas & Hierarki Branding
Penting untuk membedakan peran masing-masing entitas agar tidak tertukar:
1. **Kolaborasi Utama (Header & Event Title):**
   - **`NFCTF × NXCTF`** ➔ **`NFX CTF 2026`**
   - Keduanya merupakan platform / entitas kompetisi CTF.
   - Di Navbar, Hero Badge, dan Judul Event, tampilkan: **`NFCTF × NXCTF`**.
2. **Peran NFCC (Organisasi / UKM Induk):**
   - **NFCC (Nurul Fikri Cyber Security Community)** adalah UKM / komunitas induk di STT Terpadu Nurul Fikri tempat NFCTF bernaung.
   - NFCC berperan sebagai **Penyelenggara & Pembina Workshop (Organized by & Powered by NFCC)**.
   - Logo dan profil NFCC ditampilkan pada bagian *About*, *Workshop Tracks*, *Organizers*, dan *Footer*.
3. **Peran NXCTF (Ecosystem Partner):**
   - Komunitas dan open-source CTF platform ecosystem yang mendukung infrastruktur, platform CTF (`ctf.nfx.my.id`), dan jejaring peserta nasional.

---

## 🌈 2. Color Palette & Visual Tokens

Desain menggabungkan warna khas **NXCTF (Electric Cyan & Neon Purple)** dengan warna khas **NFCTF & NFCC (Cyber Orange & Deep Navy)** menghasilkan gradien cyber yang unik:

```css
:root {
  /* Backgrounds */
  --bg-void: #020617;          /* Slate 950 ultra dark */
  --bg-surface: #090d16;       /* Dark tech container */
  --bg-card: rgba(15, 23, 42, 0.75); /* Glassmorphic card */
  --bg-card-hover: rgba(30, 41, 59, 0.85);

  /* Brand Accents - NXCTF */
  --nx-cyan: #22d3ee;          /* Cyan 400 */
  --nx-cyan-glow: rgba(34, 211, 238, 0.35);
  --nx-purple: #a855f7;        /* Purple 500 */
  --nx-purple-glow: rgba(168, 85, 247, 0.35);

  /* Brand Accents - NFCTF & NFCC */
  --nf-orange: #f97316;        /* Orange 500 */
  --nf-orange-deep: #ea580c;   /* Orange 600 */
  --nf-orange-glow: rgba(249, 115, 22, 0.35);
  --nf-navy: #0f172a;          /* Navy Slate */

  /* Hybrid Gradients */
  --gradient-nfx: linear-gradient(135deg, #22d3ee 0%, #a855f7 50%, #f97316 100%);
  --gradient-btn: linear-gradient(135deg, #06b6d4 0%, #f97316 100%);
  --gradient-card-border: linear-gradient(135deg, rgba(34, 211, 238, 0.4), rgba(168, 85, 247, 0.2), rgba(249, 115, 22, 0.4));

  /* Typography Colors */
  --text-pure: #ffffff;
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;

  /* Borders & Dividers */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-medium: rgba(255, 255, 255, 0.16);
  --border-neon: rgba(34, 211, 238, 0.5);
}
```

---

## 🔤 3. Typography Hierarchy

- **Display & Headings:** `'Space Grotesk'`, `'Inter'`, sans-serif (Bold / Extra Bold) untuk nuansa modern & futuristik.
- **Body & Paragraphs:** `'Inter'`, sans-serif (Regular / Medium) untuk readability tingkat tinggi pada tema gelap.
- **Code, Flags, Stats & Badges:** `'JetBrains Mono'`, monospace (Medium / Bold) untuk data teknikal, format `NFX{...}`, dan countdown.

---

## 🖥️ 4. Detailed Component & Section Specifications

```
┌─────────────────────────────────────────────────────────────┐
│ 1. NAVBAR: [NFCTF] ✕ [NXCTF] ➔ NFX CTF    [Nav Links] [CTA] │
├─────────────────────────────────────────────────────────────┤
│ 2. HERO: Live Badge + Glitch Title + 48h Countdown + CTAs   │
├─────────────────────────────────────────────────────────────┤
│ 3. QUICK STATS: 48h CTF | 7 Cats | 2 Tracks | Prize + Vouchers│
├─────────────────────────────────────────────────────────────┤
│ 4. ABOUT & COLLAB: NFCTF (by NFCC) × NXCTF Story & Synergy  │
├─────────────────────────────────────────────────────────────┤
│ 5. TRACKS & DYNAMIC PRIZE CALCULATOR:                       │
│    • Card Mahasiswa NF (Free, 4x Workshop, Fixed Rp400k)     │
│    • Card Umum (Early Bird, 90% Pool) + Realtime Slider     │
├─────────────────────────────────────────────────────────────┤
│ 6. 7 CHALLENGE CATEGORIES: Hex/Grid Cards with Hover Glow   │
├─────────────────────────────────────────────────────────────┤
│ 7. TIMELINE & ROADMAP: Interactive Stepper Circuit          │
├─────────────────────────────────────────────────────────────┤
│ 8. RULES & WRITEUP POLICY: Clear WU rules + AI allowed      │
├─────────────────────────────────────────────────────────────┤
│ 9. GUIDEBOOK SECTION & MODAL: Full Competition Guide        │
├─────────────────────────────────────────────────────────────┤
│ 10. SPONSORSHIP & PARTNERS: LinuxEnix, Neva Cloud, STT NF   │
├─────────────────────────────────────────────────────────────┤
│ 11. FAQ ACCORDION: Common questions answered                │
├─────────────────────────────────────────────────────────────┤
│ 12. FOOTER: Socials, Platforms, Copyrights                  │
└─────────────────────────────────────────────────────────────┘
```

---

### Section 1: Glassmorphic Sticky Header
- **Logo Area:**
  - Menampilkan logo **NFCTF** dan **NXCTF** yang dihubungkan dengan simbol `×`, disertai teks **NFX CTF 2026**.
  - Sub-label kecil: *"Inisiatif NFCC × NXCTF"*.
- **Nav Items:** `Tentang`, `Kategori`, `Hadiah & HTM`, `Timeline`, `Rules`, `Guidebook`, `Sponsor`, `FAQ`.
- **Action Buttons:**
  - `ctf.nfx.my.id` (Tombol neon glow hijau/cyan untuk akses platform lomba).
  - Tombol Hamburger Drawer untuk tampilan mobile.

### Section 2: Hero Section (The Wow Factor)
- **Ambient Canvas:** Background grid dinamis dengan partikel cyber dan mouse spotlight tracking.
- **Top Badge:** `[ 7 - 9 NOV 2026 ] • 48 HOURS JEOPARDY CTF • NATIONAL & CAMPUS`.
- **Headline:**
  ```
  NFX CTF 2026
  NFCTF × NXCTF
  ```
  *(Gradien Cyan ke Orange dengan efek glow subtle).*
- **Tagline:** *"Kolaborasi Akbar Platform NFCTF (UKM NFCC) dan NXCTF Ecosystem. Menguji ketangkasan offensive security, reverse engineering, dan kriptografi di panggung nasional."*
- **Live Countdown Timer:**
  - 4 digit box monospace: **Hari**, **Jam**, **Menit**, **Detik** menuju *7 November 2026, 14:00 WIB*.
- **CTA Actions:**
  - 🚀 **Daftar Kompetisi** (Memicu modal seleksi track Mahasiswa / Umum).
  - 📖 **Buka Guidebook** (Memicu interactive Guidebook drawer/modal).
  - 💬 **Join Discord Server**.

### Section 3: Quick Stats Bar
- Grid 4 Kolom:
  - ⏱️ **48 Jam** Non-Stop Jeopardy CTF
  - 🧩 **7 Kategori** Soal (Web, Pwn, Rev, Crypto, Foren, OSINT, Misc)
  - 🎓 **2 Track** (Internal Kampus NF & Nasional Umum)
  - 💰 **Dynamic Prize + Voucher Server** (LinuxEnix Rewards)

### Section 4: About the Collaboration (Synergy Story)
- **Penjelasan Struktur Kolaborasi:**
  - **NFCTF (Divisi CTF UKM NFCC):** Wadah pengembangan talenta cyber security mahasiswa STT Terpadu Nurul Fikri, menyelenggarakan 4x Workshop Online intensif bagi mahasiswa.
  - **NXCTF:** Komunitas dan platform ekosistem CTF open-source terkemuka yang menyediakan infrastruktur lomba modern, standardisasi tantangan, dan jangkauan komunitas luas.
  - **Hasil Sinergi:** Event **NFX CTF 2026** yang inklusif untuk pembinaan kampus sekaligus kompetitif di level nasional.

### Section 5: Track Peserta & Interactive Dynamic Prize Calculator
- **Card 1: Track Mahasiswa NF (Internal)**
  - Badge: `GRATIS / FREE HTM`
  - Benefit: 4x Workshop Online Intensif (oleh NFCC), Akses Latihan, E-Certificate of Participation (*tanpa wajib Writeup*).
  - Total Fixed Prize: **Rp400.000** (Juara 1: 150k, Juara 2: 100k, Juara 3-5: 50k).
- **Card 2: Track Umum (Nasional)**
  - Badge: `EARLY BIRD: 10K / 15K`
  - Benefit: Bersaing di tingkat nasional, E-Certificate of Participation (*wajib submit Writeup*).
  - Revenue Split: 90% Prize Pool, 10% Operasional & Server.
- **⚡ Live Prize Pool Calculator (Interaktif):**
  - **Slider Jumlah Peserta:** Rentang 10 s/d 300+ peserta (Default: 100 pendaftar).
  - **Toggle Skema Hadiah:**
    - **Opsi 1 (Top 5):** Juara 1 (40%), Juara 2 (25%), Juara 3 (15%), Juara 4 (10%), Juara 5 (10%).
    - **Opsi 2 (Top 3 + Best WU):** Juara 1 (45%), Juara 2 (25%), Juara 3 (15%), Best Writeup (15%).
  - Output dinamis terhitung otomatis dalam mata uang Rupiah (`Rp xxx.xxx`).

### Section 6: 7 Kategori Tantangan
- Tampilan 7 Kartu Neon Interaktif:
  1. 🌐 **Web Exploitation** (Auth bypass, XSS, SQLi, SSTI, Prototype Pollution)
  2. 💥 **Pwn / Binary Exploitation** (ROP, Buffer Overflow, Heap, Format String)
  3. 🔍 **Reverse Engineering** (Disassembly, Decompilation, Bytecode, Obfuscation)
  4. 🔐 **Cryptography** (RSA, AES, ECC, Classical, Custom Crypto)
  5. 🕵️‍♂️ **Digital Forensics** (Memory, PCAP, Disk Images, Steganography)
  6. 🌍 **OSINT** (Geolocation, Profiling, Social Engineering, Footprinting)
  7. 🧩 **Misc** (Scripting, PyJail, Automation, Logic)

### Section 7: Timeline & Event Roadmap
- Visual Stepper Vertikal/Horizontal bernuansa Cyberpunk Circuit:
  - **07 Sep – 03 Nov 2026:** Pendaftaran Dibuka (Early Bird & Regular)
  - **Oktober / November 2026:** 4x Workshop Online Persiapan (Khusus Mahasiswa NF)
  - **04 November 2026:** Technical Meeting (TM) Online
  - **07 – 09 November 2026:** Kompetisi 48 Jam Live (Mulai 14:00 WIB)
  - **10 – 13 November 2026:** Pengumpulan & Review Writeup
  - **15 November 2026:** Pengumuman Juara & Pembagian Hadiah

### Section 8: Rules & Writeup Policy (Transparan & Jelas)
- Highlight Aturan Kunci:
  - 📝 **Writeup Policy:**
    - Track Umum: **Wajib** submit writeup untuk klaim E-Certificate & hadiah.
    - Track Mahasiswa: **Tidak Wajib** submit writeup untuk klaim E-Certificate.
  - 🤖 **AI Policy:** Penggunaan AI / LLM **diperbolehkan** (*AI Allowed*).
  - 🚩 **Flag Format:** `NFX{fLaG_h3r3_s4mpL3}`.
  - 🛡️ **Fair Play:** Dilarang DDoS infrastruktur, dilarang sharing flag antar tim.

### Section 9: Guidebook & Resource Center
- Downloadable / Viewable Guidebook.
- Ringkasan teknis platform CTFd, aturan koneksi VPN/Tunnel, dan tata cara submit flag.

### Section 10: Sponsorship & Partner Showcase
- **Sponsor Utama:**
  - **LinuxEnix** (Voucher Cloud Server untuk Juara 1: 1 Bulan, Juara 2: 14 Hari, Juara 3: 7 Hari)
- **Organized by (Penyelenggara):**
  - **UKM NFCC (Nurul Fikri Cyber Security Community)** — Penyelenggara & Pembina Workshop
  - **NXCTF Community** — CTF Platform & Ecosystem Partner
- **Supported by (Didukung oleh):**
  - **STT Terpadu Nurul Fikri** — Institusi Kampus / Academic Supporter

### Section 11: FAQ Accordion
- Pertanyaan populer mengenai cara daftar, persyaratan mahasiswa NF, ketentuan AI, tim vs individu, dan pembayaran HTM.

### Section 12: Cyber Footer
- Navigasi lengkap, link ke `ctf.nfx.my.id`, link Instagram `@nfcc.id`, GitHub NFCC & NXCTF, Discord komunitas, dan copyright notice 2026.

---

## 📱 5. Responsive Design & Accessibility

- **Mobile First:** Optimal di layar HP (360px – 480px), tablet (768px – 1024px), dan desktop (1280px+).
- **Touch-Friendly:** Tombol, slider, tab, dan accordion memiliki target sentuh minimal 44×44px.
- **Performance:** Menggunakan Vanilla CSS & JS murni tanpa library berat sehingga load time super kencang (< 1 detik).
- **Reduced Motion:** Mendukung `@media (prefers-reduced-motion: reduce)` bagi pengguna yang sensitif terhadap animasi.

---

## 📂 6. File Architecture

```
web/
├── index.html            # Markup semantik dengan meta tags lengkap & SEO
├── assets/               # Folder aset logo dan icon lokal
│   ├── logo.png          # Logo NFX CTF
│   ├── logo2.png         # Logo NFX CTF varian
│   ├── nfcc-logo.png     # Logo UKM NFCC
│   ├── nfctf-logo.png    # Logo platform NFCTF
│   ├── nxctf-logo.svg    # Logo platform NXCTF
│   └── favicon.ico       # Favicon tab browser
├── css/
│   ├── style.css         # Design system, CSS variables, components, animations
│   └── responsive.css    # Breakpoints & mobile drawer styles
└── js/
    ├── app.js            # Main controller, canvas grid effect, scroll spy, FAQ
    ├── countdown.js      # Countdown timer 7 Nov 2026
    ├── calculator.js     # Live dynamic prize pool slider & toggle logic
    └── modal.js          # Guidebook & Registration modals
```
