import * as React from "react";
import { GraduationCap, Globe, X, ArrowRight } from "lucide-react";

export default function RegisterModal() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-register-modal", handleOpen);
    return () => window.removeEventListener("open-register-modal", handleOpen);
  }, []);

  React.useEffect(() => {
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-background/80 backdrop-blur-md animate-in fade-in duration-150"
      onWheel={(e) => e.stopPropagation()}
    >
      <div
        className="fixed inset-0"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-lg rounded-2xl bg-surface-elevated border border-white/10 shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-150">
        {/* Compact Clean Header */}
        <div className="px-5 py-3.5 border-b border-white/10 flex items-center justify-between bg-surface/90">
          <div>
            <h3 className="font-display font-bold text-sm sm:text-base text-white">
              Pilih Jalur Pendaftaran
            </h3>
            <p className="font-mono text-[0.65rem] text-text-muted">
              NFX CTF 2026 // Solo Competition
            </p>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="size-7 rounded-lg bg-white/5 border border-white/10 text-text-secondary hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Tutup Modal"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* 2 Track Options - Compact & Clean (No bloated text) */}
        <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">

          {/* Option Mahasiswa NF */}
          <div className="p-4 rounded-xl border border-nf-orange/30 bg-surface/80 flex flex-col justify-between hover:border-nf-orange/60 transition-colors group">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[0.6rem] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  GRATIS
                </span>
                <GraduationCap className="size-4 text-nf-orange" />
              </div>

              <h4 className="font-display font-bold text-sm text-white mb-1">
                Mahasiswa STT-NF
              </h4>
              <p className="text-[0.72rem] text-text-secondary leading-relaxed mb-3">
                Khusus mahasiswa aktif STT-NF. Termasuk 2x workshop persiapan &amp; hadiah Top 5 (Rp 400.000).
              </p>
            </div>

            <a
              href="https://forms.gle/2w81FH7tfUMjEN2G7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-lg font-display font-bold text-xs bg-nf-orange hover:bg-nf-orange-deep text-white shadow-sm transition-all flex items-center justify-center gap-1.5"
            >
              <span>Daftar Gratis</span>
              <ArrowRight className="size-3" />
            </a>
          </div>

          {/* Option Track Umum */}
          <div className="p-4 rounded-xl border border-nx-cyan/30 bg-surface/80 flex flex-col justify-between hover:border-nx-cyan/60 transition-colors group">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[0.6rem] font-bold px-2 py-0.5 rounded-full bg-nx-cyan/15 text-nx-cyan border border-nx-cyan/30">
                  Rp 10.000
                </span>
                <Globe className="size-4 text-nx-cyan" />
              </div>

              <h4 className="font-display font-bold text-sm text-white mb-1">
                Track Umum
              </h4>
              <p className="text-[0.72rem] text-text-secondary leading-relaxed mb-3">
                Terbuka publik/pelajar nasional. Rebut Rp 1 Jt sponsor Linuxenic + 90% tiket pool.
              </p>
            </div>

            <a
              href="https://forms.gle/LbFzf35d9dcLWV8T9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-lg font-display font-bold text-xs bg-gradient-to-r from-nx-cyan to-nx-purple text-slate-950 shadow-sm hover:opacity-95 transition-all flex items-center justify-center gap-1.5"
            >
              <span>Daftar Rp 10.000</span>
              <ArrowRight className="size-3" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
