import CertificatePolicy from "./CertificatePolicy";
import React, { useState, useEffect } from "react";
import { BookOpen, X } from "lucide-react";

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
            <div className="size-10 rounded-xl bg-nx-cyan/10 border border-nx-cyan/30 flex items-center justify-center text-nx-cyan">
              <BookOpen className="size-5 text-nx-cyan" />
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
            <X className="size-4" />
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
            <div className="space-y-3.5 animate-in fade-in duration-200">
              <div className="p-4 rounded-xl bg-surface border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-bold text-sm text-white flex items-center gap-1.5">
                    <span>🚀</span>
                    <span>Tentang NFX CTF 2026</span>
                  </h4>
                  <span className="font-mono text-[0.58rem] font-bold px-2 py-0.5 rounded bg-nf-orange/15 text-nf-orange-bright border border-nf-orange/30">
                    NFCTF S1 ➔ NFX CTF
                  </span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Bermula dari program kerja internal UKM NFCC bernama <strong>NFCTF Season 1</strong> sebagai wadah latihan praktis mahasiswa STT-NF, konsep ini kemudian dimekarkan menjadi <strong>NFX CTF 2026</strong> lewat kolaborasi bersama <strong>NXCTF Community</strong> serta dukungan Main Sponsor <strong>LINUXENIC CORP.</strong>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
                <div className="p-3 rounded-xl bg-background/80 border border-white/5 space-y-0.5">
                  <span className="text-text-muted text-[0.62rem] uppercase block">Format & Durasi:</span>
                  <strong className="text-white text-xs">Jeopardy CTF (48 Jam Non-stop)</strong>
                </div>
                <div className="p-3 rounded-xl bg-background/80 border border-white/5 space-y-0.5">
                  <span className="text-text-muted text-[0.62rem] uppercase block">Waktu Pelaksanaan:</span>
                  <strong className="text-nx-cyan text-xs">07 – 09 Nov 2026 (14:00 WIB)</strong>
                </div>
                <div className="p-3 rounded-xl bg-background/80 border border-white/5 space-y-0.5">
                  <span className="text-text-muted text-[0.62rem] uppercase block">Platform Resmi:</span>
                  <strong className="text-emerald-400 text-xs">https://ctf.nfx.my.id ↗</strong>
                </div>
                <div className="p-3 rounded-xl bg-background/80 border border-white/5 space-y-0.5">
                  <span className="text-text-muted text-[0.62rem] uppercase block">Penyelenggara:</span>
                  <strong className="text-white text-xs">UKM NFCC × NXCTF Community</strong>
                </div>
              </div>

              {/* 8 Kategori Soal Mini Grid */}
              <div className="space-y-2 pt-1">
                <span className="font-mono text-xs text-white font-bold block">
                  // 8 KATEGORI TANTANGAN RESMI //
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[0.68rem]">
                  {[
                    { icon: "🌐", name: "Web Exploitation" },
                    { icon: "⚙️", name: "Binary Exploit (Pwn)" },
                    { icon: "🔄", name: "Reverse Engineering" },
                    { icon: "🔐", name: "Cryptography" },
                    { icon: "🔍", name: "Digital Forensics" },
                    { icon: "🛰️", name: "OSINT" },
                    { icon: "💻", name: "Boot to Root" },
                    { icon: "🧩", name: "Miscellaneous" },
                  ].map((cat, i) => (
                    <div key={i} className="p-2 rounded-lg bg-surface border border-white/5 flex items-center gap-1.5 hover:border-nx-cyan/30 transition-colors">
                      <span className="text-sm">{cat.icon}</span>
                      <span className="text-white font-medium truncate">{cat.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TRACKS */}
          {activeTab === "tracks" && (
            <div className="space-y-3.5 animate-in fade-in duration-200">
              <CertificatePolicy />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Track Mahasiswa NF */}
                <div className="p-4 rounded-xl bg-surface border border-nf-orange/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-white/5">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🎓</span>
                        <h4 className="font-display font-bold text-sm text-white">Track Mahasiswa NF</h4>
                      </div>
                      <span className="font-mono text-[0.6rem] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        GRATIS
                      </span>
                    </div>

                    <div className="space-y-1.5 font-mono text-[0.7rem] text-text-secondary">
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-text-muted">Target:</span>
                        <span className="text-white font-medium">Mahasiswa Aktif STT-NF</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-text-muted">Fasilitas:</span>
                        <span className="text-white">2x Workshop (Online/Offline)</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-text-muted">Sertifikat:</span>
                        <span className="text-emerald-400">Minimal 1 solve; WU opsional</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-text-muted">Hadiah:</span>
                        <span className="text-amber-300 font-bold">Fixed Cash Rp 400k (Top 5)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Track Umum */}
                <div className="p-4 rounded-xl bg-surface border border-nx-cyan/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-white/5">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">🌐</span>
                        <h4 className="font-display font-bold text-sm text-white">Track Umum (Nasional)</h4>
                      </div>
                      <span className="font-mono text-[0.6rem] font-bold px-2 py-0.5 rounded bg-nx-cyan/15 text-nx-cyan border border-nx-cyan/30">
                        RP 10.000 (FLAT)
                      </span>
                    </div>

                    <div className="space-y-1.5 font-mono text-[0.7rem] text-text-secondary">
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-text-muted">Target:</span>
                        <span className="text-white font-medium">Nasional (Mhs/Siswa/Praktisi)</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-text-muted">Fasilitas:</span>
                        <span className="text-white">TM & Komunitas Discord</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-text-muted">Sertifikat:</span>
                        <span className="text-nx-cyan">E-Cert (Wajib Submit WU)</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-text-muted">Hadiah:</span>
                        <span className="text-emerald-400 font-bold">Rp 300 Rb + 90% Pool</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PLATFORM & SCORING */}
          {activeTab === "platform" && (
            <div className="space-y-3.5 animate-in fade-in duration-200">
              <div className="p-4 rounded-xl bg-surface border border-white/10 space-y-2">
                <h4 className="font-display font-bold text-sm text-white">
                  Dynamic Scoring Engine (NXCTF Platform)
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Platform NXCTF menggunakan mekanisme <strong>Dynamic Scoring</strong>: nilai soal dibuka maksimal 500 poin dan meluruh dinamis (decay: 20 solver) menuju batas minimum 100 poin. Tie-breaker ditentukan oleh waktu submit flag tercepat.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-background/80 border border-white/5 font-mono text-xs space-y-1.5">
                  <div className="flex items-center gap-1.5 text-nx-cyan font-bold">
                    <span>📩</span>
                    <span>Distribusi Akun:</span>
                  </div>
                  <p className="text-text-secondary text-[0.72rem] leading-relaxed">
                    Kredensial login & link Discord dikirim otomatis ke <strong>Email Terdaftar</strong> pada H-1 TM / H-1 Lomba.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-background/80 border border-nx-cyan/30 font-mono text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted text-[0.68rem] font-semibold">Format Flag:</span>
                    <span className="text-[0.6rem] font-bold text-amber-300 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/20">CASE-SENSITIVE</span>
                  </div>
                  <div className="text-xs font-bold text-nx-cyan select-all bg-black/70 p-1.5 rounded border border-white/5 text-center">
                    NFX&#123;your_flag_here&#125;
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: WRITEUP */}
          {activeTab === "writeup" && (
            <div className="space-y-3.5 animate-in fade-in duration-200">
              <div className="p-4 rounded-xl bg-surface border border-white/10 space-y-2">
                <h4 className="font-display font-bold text-sm text-white">
                  Pedoman & Standar Writeup (WU)
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Writeup cukup berisi ringkasan cara menyelesaikan challenge. Format bebas: <strong>blog, PDF, GitHub / Markdown, Notion, atau format lainnya</strong>, asalkan dapat dibaca dan diakses panitia. Pastikan izin akses tautan sudah sesuai. Wajib untuk Track Umum dan opsional untuk Mahasiswa NF.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface border border-white/10 space-y-2.5">
                <span className="font-mono text-xs text-nx-cyan font-bold block">// 5 POIN STRUKTUR LAPORAN //</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs text-text-secondary">
                  <div className="p-2 rounded-lg bg-background/80 border border-white/5 flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">01.</span>
                    <div>
                      <strong className="text-white block text-xs">Identitas Peserta</strong>
                      <span className="text-text-muted text-[0.65rem]">Nama & username platform CTF</span>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-background/80 border border-white/5 flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">02.</span>
                    <div>
                      <strong className="text-white block text-xs">Foto Scoreboard</strong>
                      <span className="text-text-muted text-[0.65rem]">Screenshot posisi akhir di scoreboard track masing-masing</span>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-background/80 border border-white/5 flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">03.</span>
                    <div>
                      <strong className="text-white block text-xs">Deskripsi & Alur Penyelesaian</strong>
                      <span className="text-text-muted text-[0.65rem]">Nama challenge, deskripsi singkat cara penyelesaian, dan urutan langkah hingga memperoleh flag untuk setiap challenge yang diselesaikan</span>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-background/80 border border-white/5 flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">04.</span>
                    <div>
                      <strong className="text-white block text-xs">Flag</strong>
                      <span className="text-text-muted text-[0.65rem]">String flag lengkap (NFX&#123;...&#125;)</span>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-background/80 border border-white/5 flex items-start gap-2 sm:col-span-2">
                    <span className="text-emerald-400 font-bold shrink-0">05.</span>
                    <div>
                      <strong className="text-white block text-xs">Penggunaan AI (Opsional)</strong>
                      <span className="text-text-muted text-[0.65rem]">Boleh cantumkan chatbot yang digunakan (misalnya ChatGPT atau Claude), atau nama AI agent beserta modelnya jika menggunakan agent. Tambahkan keterangan singkat bantuannya untuk transparansi.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-amber-400/10 border border-amber-400/25 font-mono text-xs text-amber-300 flex items-center gap-2">
                <span>⏰</span>
                <span><strong>Batas Pengumpulan:</strong> 13 November 2026 pukul 23:59 WIB via form resmi.</span>
              </div>
            </div>
          )}

          {/* TAB 5: PRIZES */}
          {activeTab === "prizes" && (
            <div className="space-y-3.5 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Track Mahasiswa */}
                <div className="p-3.5 rounded-xl bg-surface border border-nf-orange/30 space-y-2">
                  <div className="flex items-center justify-between pb-1.5 border-b border-white/5">
                    <strong className="text-nf-orange font-display text-xs">🎓 Track Mahasiswa NF</strong>
                    <span className="font-mono text-[0.6rem] font-bold text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/25">
                      FIXED CASH RP 400K
                    </span>
                  </div>
                  <ul className="space-y-1 font-mono text-xs text-text-secondary">
                    <li className="flex justify-between">
                      <span className="text-amber-300 font-bold">🥇 Juara 1:</span>
                      <span className="text-white">Rp 150k + Voucher Lab</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-slate-300 font-bold">🥈 Juara 2:</span>
                      <span className="text-white">Rp 100.000</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-amber-600 font-bold">🥉 Juara 3:</span>
                      <span className="text-white">Rp 50.000</span>
                    </li>
                    <li className="flex justify-between text-text-muted">
                      <span>🎖️ Juara 4 - 5:</span>
                      <span>@Rp 50.000</span>
                    </li>
                  </ul>
                  <span className="text-[0.62rem] text-text-muted block pt-1 border-t border-white/5 font-mono">
                    Sertifikat sesuai peringkat: minimal 1 challenge selesai (flag benar). 0 solve tidak mendapat sertifikat; writeup opsional.
                  </span>
                </div>

                {/* Track Umum */}
                <div className="p-3.5 rounded-xl bg-surface border border-nx-cyan/30 space-y-2">
                  <div className="flex items-center justify-between pb-1.5 border-b border-white/5">
                    <strong className="text-nx-cyan font-display text-xs">🌐 Track Umum (Nasional)</strong>
                    <span className="font-mono text-[0.6rem] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/25">
                      RP 300 RB + 90% POOL
                    </span>
                  </div>
                  <div className="p-1.5 px-2 rounded bg-black/50 border border-white/5 text-[0.65rem] text-emerald-400 font-mono font-semibold text-center">
                    Total = Rp 300.000 + (Peserta Umum Berbayar × Rp 9.000). Persentase hadiah dari pool tiket; 10% registrasi untuk operasional.
                  </div>
                  <ul className="space-y-1 font-mono text-xs text-text-secondary">
                    <li className="flex justify-between">
                      <span className="text-amber-300 font-bold">🥇 Juara 1:</span>
                      <span className="text-white">40% Tiket + Rp150k + Voucher 1 Bulan</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-slate-300 font-bold">🥈 Juara 2:</span>
                      <span className="text-white">30% Tiket + Rp100k</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-amber-600 font-bold">🥉 Juara 3:</span>
                      <span className="text-white">15% Tiket + Rp50k</span>
                    </li>
                    <li className="flex justify-between gap-2">
                      <span>Juara 4:</span><span className="text-white">10% Pool Tiket</span>
                    </li>
                    <li className="flex justify-between gap-2">
                      <span>Juara 5:</span><span className="text-white">5% Pool Tiket</span>
                    </li>
                  </ul>
                  <span className="text-[0.62rem] text-text-muted block pt-1 border-t border-white/5 font-mono">
                    Wajib submit Writeup untuk klaim hadiah & E-Cert.
                  </span>
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
                  <li>Penggunaan asisten AI & AI agent (ChatGPT, Gemini, Claude, Copilot) sebagai alat bantu analisis kode & scripting.</li>
                  <li>Penggunaan tools pentest standar (Burp Suite, Ghidra, Nmap, sqlmap) serta teknik bruteforce/fuzzing pada target container challenge.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/25 text-xs space-y-2">
                <strong className="text-red-400 block mb-1">✗ Dilarang Keras (Strictly Prohibited):</strong>
                <ul className="list-disc list-inside space-y-1 text-text-secondary">
                  <li>Melakukan penyerangan Denial of Service (DoS/DDoS) ke website/platform utama kompetisi (<code>ctf.nfx.my.id</code>) ataupun server host.</li>
                  <li>Merusak, memodifikasi sistem, menghapus file challenge, atau spam restart container (karena container bersifat sharing bersama peserta lain).</li>
                  <li>Berbagi flag, jawaban solver, atau bekerja sama antar peserta selama perlombaan aktif (kompetisi wajib solo).</li>
                  <li>Meminta bantuan orang lain / joki pihak ketiga.</li>
                </ul>
                <p className="text-[0.7rem] text-red-300 font-mono mt-2">
                  Pelanggaran aturan di atas berakibat langsung pada sanksi diskualifikasi permanen.
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

                <a
                  href="https://instagram.com/nfcc.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-surface border border-white/10 flex items-center justify-between hover:border-nf-orange/50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span>📷</span>
                    <span>Instagram NFCC</span>
                  </span>
                  <span className="text-text-muted">@nfcc.id ↗</span>
                </a>

                <div className="p-3 rounded-xl bg-surface border border-white/10 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span>📧</span>
                    <span>Sekretariat Panitia (Email)</span>
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
