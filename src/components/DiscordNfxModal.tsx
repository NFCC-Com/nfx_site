import React, { useState, useEffect } from "react";
import { MessageSquare, Lock, ArrowRight, Shield, Zap, X } from "lucide-react";

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
      document.documentElement.classList.add("modal-open");
      document.body.classList.add("modal-open");
    } else {
      document.documentElement.classList.remove("modal-open");
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.documentElement.classList.remove("modal-open");
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-in fade-in duration-150"
      onWheel={(e) => e.stopPropagation()}
    >
      <div
        className="fixed inset-0"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <div
        className="relative w-full max-w-md rounded-2xl bg-surface-elevated border border-[#5865F2]/30 shadow-2xl p-5 sm:p-6 flex flex-col z-10 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Compact Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="size-8 rounded-lg bg-[#5865F2]/15 border border-[#5865F2]/30 flex items-center justify-center text-[#8ea1e1]">
              <MessageSquare className="size-4 text-[#5865F2]" />
            </div>
            <div>
              <h3 className="font-display font-bold text-sm sm:text-base text-white">
                Discord Resmi NFX CTF
              </h3>
              <span className="font-mono text-[0.62rem] text-amber-300 flex items-center gap-1">
                <Lock className="size-2.5" />
                <span>Private Server Khusus Peserta</span>
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="size-7 rounded-lg bg-white/5 border border-white/10 text-text-secondary hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Tutup Modal"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Short & Crisp Info */}
        <p className="text-xs text-text-secondary leading-relaxed mb-5">
          Server Discord NFX CTF 2026 dikhususkan untuk koordinasi teknis dan tiket bantuan peserta. Tautan invite server otomatis dikirimkan ke email setelah Anda menyelesaikan pendaftaran.
        </p>

        {/* Primary Action Button */}
        <button
          onClick={() => {
            setIsOpen(false);
            window.dispatchEvent(new CustomEvent("open-register-modal"));
          }}
          className="w-full py-2.5 px-4 rounded-xl font-display font-bold text-xs bg-gradient-to-r from-nx-cyan to-nx-purple text-slate-950 shadow-md shadow-nx-cyan/20 hover:opacity-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer mb-4"
        >
          <span>Daftar Kompetisi untuk Akses Link</span>
          <ArrowRight className="size-3.5" />
        </button>

        {/* Bottom Community Links */}
        <div className="pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[0.68rem] text-text-muted">
          <span>Discord Publik:</span>
          <div className="flex items-center gap-2">
            <a
              href="https://discord.gg/q8gxeYZgMC"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-nf-orange transition-colors flex items-center gap-1"
            >
              <Shield className="size-3 text-nf-orange" />
              <span>NFCC ↗</span>
            </a>
            <span>•</span>
            <a
              href="https://discord.gg/5etKks6aQQ"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-nx-cyan transition-colors flex items-center gap-1"
            >
              <Zap className="size-3 text-nx-cyan" />
              <span>NXCTF ↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
