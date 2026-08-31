import React, { useState, useEffect } from "react";

export default function DiscordNfxModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-discord-nfx-modal", handleOpen);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("open-discord-nfx-modal", handleOpen);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-background/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-3xl bg-surface-elevated border border-[#5865F2]/40 shadow-2xl shadow-black/80 p-6 sm:p-8 flex flex-col text-center animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="size-16 rounded-2xl bg-[#5865F2]/15 border border-[#5865F2]/30 flex items-center justify-center text-3xl mx-auto mb-4 text-[#8ea1e1]">
          💬
        </div>

        <h3 className="font-display font-bold text-2xl text-white mb-2">
          Discord Resmi NFX CTF 2026
        </h3>

        <div className="inline-block font-mono text-xs font-semibold px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/25 mx-auto mb-4">
          🔒 Private Server Khusus Peserta
        </div>

        <p className="text-text-secondary text-sm leading-relaxed mb-6">
          Untuk menjaga ketertiban kompetisi dan koordinasi teknis, server Discord <strong>NFX CTF 2026</strong> bersifat privat. Link invite server akan otomatis kamu dapatkan setelah mengisi dan menyelesaikan formulir pendaftaran.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <button
            onClick={() => {
              setIsOpen(false);
              window.dispatchEvent(new CustomEvent("open-register-modal"));
            }}
            className="px-6 py-3 rounded-xl font-display font-bold text-xs bg-gradient-to-r from-nx-cyan to-nx-purple text-slate-950 shadow-md shadow-nx-cyan/20 hover:scale-[1.02] transition-all"
          >
            🚀 Daftar Sekarang untuk Dapat Link
          </button>

          <button
            onClick={() => setIsOpen(false)}
            className="px-5 py-3 rounded-xl font-mono text-xs font-semibold bg-white/5 border border-white/10 hover:bg-white/10 text-text-muted hover:text-white transition-colors"
          >
            Tutup
          </button>
        </div>

        <div className="pt-4 border-t border-white/10 text-left">
          <span className="font-mono text-[0.72rem] text-text-muted block mb-2">
            Atau gabung ke Discord publik komunitas:
          </span>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://discord.gg/q8gxeYZgMC"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-text-secondary hover:text-[#5865F2] hover:border-[#5865F2]/40 transition-colors flex items-center gap-1.5"
            >
              <span>🏛️ Discord NFCC</span>
            </a>
            <a
              href="https://discord.gg/5etKks6aQQ"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-text-secondary hover:text-nx-cyan hover:border-nx-cyan/40 transition-colors flex items-center gap-1.5"
            >
              <span>⚡ Discord NXCTF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
