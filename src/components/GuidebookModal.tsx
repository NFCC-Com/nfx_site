import React, { useState, useEffect } from "react";

export default function GuidebookModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "overview" | "tracks" | "platform" | "writeup" | "prizes" | "rules" | "contact"
  >("overview");

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-guidebook-modal", handleOpen);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("open-guidebook-modal", handleOpen);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-background/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] rounded-3xl bg-surface-elevated border border-white/15 shadow-2xl shadow-black/90 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10 bg-surface/95 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-nx-cyan/10 border border-nx-cyan/30 flex items-center justify-center text-xl text-nx-cyan">
              📖
            </div>
            <div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                Official Guidebook & Rules
              </h3>
              <p className="font-mono text-xs text-text-muted">
                NFX CTF 2026 (NFCTF × NXCTF)
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-text-secondary hover:text-white hover:bg-white/10 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Tab Navigation Pills */}
        <div className="flex items-center gap-1.5 p-2.5 sm:px-6 bg-background/90 border-b border-white/10 overflow-x-auto text-xs font-mono no-scrollbar">
          {[
            { id: "overview", label: "01. Informasi Umum" },
            { id: "tracks", label: "02. Track & Biaya" },
            { id: "platform", label: "03. Platform & Flag" },
            { id: "writeup", label: "04. Panduan Writeup" },
            { id: "prizes", label: "05. Hadiah & Sponsor" },
            { id: "rules", label: "06. Kode Etik & AI" },
            { id: "contact", label: "07. Narahubung" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${activeTab === tab.id
                  ? "bg-nx-cyan text-slate-950 font-bold shadow-md shadow-nx-cyan/20"
                  : "text-text-muted hover:text-white hover:bg-white/5"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-text-secondary leading-relaxed">
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="p-4 rounded-xl bg-surface border border-white/10">
                <h4 className="font-display font-bold text-base text-white mb-1">
                  Tentang NFX CTF 2026
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  <strong>NFX CTF 2026</strong> adalah kompetisi <em>Capture The Flag</em> (CTF) berformat <strong>Jeopardy</strong> yang diselenggarakan oleh <strong>UKM NFCC (Nurul Fikri Cyber Security Community)</strong> berkolaborasi dengan <strong>NXCTF Community</strong>, serta didukung oleh institusi <strong>STT Terpadu Nurul Fikri</strong>.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-background/80 border border-white/5">
                  <span className="text-text-muted block mb-1">Format Kompetisi:</span>
                  <strong className="text-white text-sm">Jeopardy CTF (48 Jam Non-stop)</strong>
                </div>
                <div className="p-3.5 rounded-xl bg-background/80 border border-white/5">
                  <span className="text-text-muted block mb-1">Jadwal Utama Lomba:</span>
                  <strong className="text-nx-cyan text-sm">7 – 9 November 2026 (Mulai 14:00 WIB)</strong>
                </div>
                <div className="p-3.5 rounded-xl bg-background/80 border border-white/5">
                  <span className="text-text-muted block mb-1">Platform Resmi:</span>
                  <strong className="text-emerald-400 text-sm">https://ctf.nfx.my.id</strong>
                </div>
                <div className="p-3.5 rounded-xl bg-background/80 border border-white/5">
                  <span className="text-text-muted block mb-1">Kategori Tantangan:</span>
                  <strong className="text-white text-sm">7 Bidang (Web, Pwn, Rev, Crypto, Foren, OSINT, Misc)</strong>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TRACKS */}
          {activeTab === "tracks" && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="p-4 rounded-xl bg-surface border border-nf-orange/30">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">🎓</span>
                  <h4 className="font-display font-bold text-base text-white">Track Mahasiswa NF (Internal)</h4>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-text-secondary">
                  <li><strong>Syarat:</strong> Mahasiswa aktif STT Terpadu Nurul Fikri (anggota internal NFCC boleh mendaftar, kecuali problem setter).</li>
                  <li><strong>Biaya Pendaftaran:</strong> 100% GRATIS (Free).</li>
                  <li><strong>Fasilitas:</strong> 4x Workshop Online Intensif oleh tim NFCC sebelum hari H perlombaan.</li>
                  <li><strong>Sertifikat:</strong> Seluruh peserta mahasiswa mendapatkan E-Certificate of Participation tanpa syarat mengumpulkan writeup.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-surface border border-nx-cyan/30">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">🌐</span>
                  <h4 className="font-display font-bold text-base text-white">Track Umum (Nasional)</h4>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-text-secondary">
                  <li><strong>Syarat:</strong> Terbuka untuk umum siapa saja se-Indonesia (pelajar, mahasiswa luar, praktisi, security enthusiast).</li>
                  <li><strong>Biaya:</strong> Early Bird 1 (Rp10.000) / Early Bird 2 (Rp15.000).</li>
                  <li><strong>Prize Pool:</strong> 90% dari total pendaftaran + Alokasi dana sponsor.</li>
                  <li><strong>Sertifikat:</strong> Peserta umum WAJIB mengumpulkan Writeup untuk klaim E-Certificate & validasi juara.</li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 3: PLATFORM & SCORING */}
          {activeTab === "platform" && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h4 className="font-display font-bold text-base text-white">
                Platform NXCTF, Distribusi Akun & Format Flag
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Kompetisi menggunakan sistem <strong>Dynamic Scoring</strong> pada platform NXCTF: nilai soal awalnya bernilai 500 poin dan akan menurun secara dinamis seiring bertambahnya jumlah peserta yang berhasil menyelesaikan challenge tersebut.
              </p>

              <div className="p-3.5 rounded-xl bg-surface border border-nx-cyan/30 text-xs font-mono space-y-1.5">
                <div className="text-nx-cyan font-bold flex items-center gap-1.5">
                  <span>📩</span>
                  <span>Distribusi Kredensial via Email:</span>
                </div>
                <p className="text-text-secondary text-[0.72rem] leading-relaxed">
                  Username, password sementara akun peserta di platform NXCTF (ctf.nfx.my.id), serta link invite Discord NFX CTF akan dikirimkan otomatis ke <strong>Email Terdaftar</strong> paling lambat pada H-1 Technical Meeting (03 Nov 2026).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-background/80 border border-nx-cyan/30 font-mono text-xs space-y-2">
                <span className="text-text-muted block font-semibold">Format Flag Resmi:</span>
                <div className="text-sm font-bold text-nx-cyan select-all bg-surface p-2 rounded border border-white/5">
                  NFX&#123;your_flag_here&#125;
                </div>
                <p className="text-[0.7rem] text-text-muted">
                  *Perhatikan case-sensitive huruf besar/kecil dan karakter khusus pada flag.
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: WRITEUP */}
          {activeTab === "writeup" && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h4 className="font-display font-bold text-base text-white">
                Pedoman & Template Penulisan Writeup (WU)
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Writeup adalah dokumentasi langkah teknis bagaimana Anda menyelesaikan challenge. Format file yang diterima adalah <strong>PDF</strong> atau <strong>Markdown/GitHub link</strong>.
              </p>

              <div className="p-4 rounded-xl bg-surface border border-white/10 font-mono text-xs space-y-2">
                <strong className="text-white block mb-2">Struktur Wajib Writeup:</strong>
                <ol className="list-decimal list-inside space-y-1.5 text-text-secondary">
                  <li><strong>Identitas:</strong> Nama Lengkap Peserta, Kategori Track (Umum / Mahasiswa), Kontak Email.</li>
                  <li><strong>Informasi Challenge:</strong> Nama Soal, Kategori (Web/Pwn/Crypto/dll), dan Poin.</li>
                  <li><strong>Analisis Kerentanan (Vulnerability Analysis):</strong> Penjelasan letak celah keamanan.</li>
                  <li><strong>Langkah Eksploitasi (Proof of Concept):</strong> Script solver / command exploit bertahap.</li>
                  <li><strong>Flag Capture:</strong> Screenshot bukti flag yang didapatkan.</li>
                  <li><strong>Mitigasi / Remediasi:</strong> Saran perbaikan kode/sistem (nilai tambah Best WU).</li>
                </ol>
              </div>

              <div className="p-3 rounded-lg bg-amber-400/10 border border-amber-400/25 font-mono text-xs text-amber-300">
                ⏰ <strong>Batas Akhir Pengumpulan Writeup:</strong> 13 November 2026 pukul 23:59 WIB via form pengumpulan yang disediakan.
              </div>
            </div>
          )}

          {/* TAB 5: PRIZES */}
          {activeTab === "prizes" && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h4 className="font-display font-bold text-base text-white">
                Rincian Hadiah & Voucher Sponsor
              </h4>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-surface border border-white/10">
                  <strong className="text-nf-orange block mb-1">🎓 Hadiah Track Mahasiswa NF (Fixed Cash Rp400k):</strong>
                  <ul className="space-y-1 text-text-secondary">
                    <li>🥇 Juara 1: Rp150.000 + Voucher LINUXENIC 1 Bulan + E-Certificate</li>
                    <li>🥈 Juara 2: Rp100.000 + Voucher LINUXENIC 14 Hari + E-Certificate</li>
                    <li>🥉 Juara 3: Rp50.000 + Voucher LINUXENIC 7 Hari + E-Certificate</li>
                    <li>4️⃣ & 5️⃣ Juara 4 & 5: @Rp50.000 + E-Certificate</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-surface border border-white/10">
                  <strong className="text-nx-cyan block mb-1">🌐 Hadiah Track Umum (90% Dynamic Prize Pool + Sponsor):</strong>
                  <ul className="space-y-1 text-text-secondary">
                    <li>🥇 Juara 1: 50% Dynamic Prize Pool + Voucher LINUXENIC 1 Bulan + E-Certificate</li>
                    <li>🥈 Juara 2: 30% Dynamic Prize Pool + Voucher LINUXENIC 14 Hari + E-Certificate</li>
                    <li>🥉 Juara 3: 20% Dynamic Prize Pool + Voucher LINUXENIC 7 Hari + E-Certificate</li>
                    <li>📝 Best Writeup: E-Certificate of Best WU & Penghargaan Khusus</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: RULES */}
          {activeTab === "rules" && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h4 className="font-display font-bold text-base text-white">
                Kode Etik, Kebijakan AI, & Sanksi Diskualifikasi
              </h4>

              <div className="p-4 rounded-xl bg-surface border border-white/10 text-xs space-y-2">
                <strong className="text-emerald-400 block mb-1">✓ Diperbolehkan (Allowed):</strong>
                <ul className="list-disc list-inside space-y-1 text-text-secondary">
                  <li>Penggunaan AI / LLM (ChatGPT, GitHub Copilot, Claude) sebagai alat bantu analisis & scripting.</li>
                  <li>Penggunaan automated scanner tools (Burp Suite, Nmap, Ghidra, Volatility) selama tidak merusak infrastruktur.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/25 text-xs space-y-2">
                <strong className="text-red-400 block mb-1">✗ Dilarang Keras (Strictly Prohibited):</strong>
                <ul className="list-disc list-inside space-y-1 text-text-secondary">
                  <li>Melakukan penyerangan Denial of Service (DoS/DDoS) ke platform NXCTF ataupun challenge server.</li>
                  <li>Berbagi flag, jawaban, atau bekerja sama antar peserta selama perlombaan aktif.</li>
                  <li>Membobol atau merusak container challenge milik peserta lain.</li>
                </ul>
                <p className="text-[0.7rem] text-red-300 font-mono mt-2">
                  *Pelanggaran aturan di atas akan berakibat langsung pada diskualifikasi permanen tanpa pengembalian biaya pendaftaran.
                </p>
              </div>
            </div>
          )}

          {/* TAB 7: CONTACT */}
          {activeTab === "contact" && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h4 className="font-display font-bold text-base text-white">
                Narahubung & Layanan Bantuan
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Jika memiliki pertanyaan teknis atau kendala registrasi, Anda dapat menghubungi panitia melalui channel resmi berikut:
              </p>

              <div className="space-y-2.5 font-mono text-xs">
                <a
                  href="https://discord.gg/q8gxeYZgMC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-surface border border-white/10 flex items-center justify-between hover:border-[#5865F2]/50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span>💬</span>
                    <span>Discord UKM NFCC (Ticket Helpdesk)</span>
                  </span>
                  <span className="text-text-muted">discord.gg/q8gxeYZgMC ↗</span>
                </a>

                <a
                  href="https://discord.gg/5etKks6aQQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-surface border border-white/10 flex items-center justify-between hover:border-nx-cyan/50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span>⚡</span>
                    <span>Discord NXCTF Community</span>
                  </span>
                  <span className="text-text-muted">discord.gg/5etKks6aQQ ↗</span>
                </a>

                <div className="p-3 rounded-xl bg-surface border border-white/10 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span>📧</span>
                    <span>Email Resmi Panitia NFCC</span>
                  </span>
                  <span className="text-text-muted">nfcc@nurulfikri.ac.id</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-surface/95 flex items-center justify-between">
          <button
            onClick={() => {
              setIsOpen(false);
              window.dispatchEvent(new CustomEvent("open-register-modal"));
            }}
            className="px-5 py-2.5 rounded-xl font-display font-bold text-xs bg-gradient-to-r from-nx-cyan to-nf-orange text-slate-950 shadow-md shadow-nx-cyan/20 hover:scale-[1.02] transition-all"
          >
            🚀 Lanjut ke Pendaftaran
          </button>

          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2.5 rounded-xl font-mono text-xs font-semibold bg-white/5 border border-white/10 hover:bg-white/10 text-text-muted hover:text-white transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
