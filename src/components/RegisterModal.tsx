import * as React from "react";

export default function RegisterModal() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-register-modal", handleOpen);
    return () => window.removeEventListener("open-register-modal", handleOpen);
  }, []);

  React.useEffect(() => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-background/85 backdrop-blur-md animate-in fade-in duration-150">
      <div
        className="fixed inset-0"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-2xl rounded-2xl bg-surface-elevated border border-white/10 shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-150">
        {/* Compact Header */}
        <div className="px-5 py-3.5 border-b border-white/10 flex items-center justify-between bg-surface">
          <div className="flex items-center gap-2.5">
            <span className="text-lg">🚀</span>
            <div>
              <h3 className="font-display font-bold text-base text-white leading-tight">
                Pilih Jalur Pendaftaran
              </h3>
              <p className="font-mono text-[0.68rem] text-text-muted">
                NFX CTF 2026 // NFCTF ✕ NXCTF
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="size-7 rounded-lg bg-white/5 border border-white/10 text-text-secondary hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center font-mono text-xs"
          >
            ✕
          </button>
        </div>

        {/* 2 Track Options - Ultra Compact Grid */}
        <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Option Mahasiswa NF */}
          <div className="p-4 rounded-xl border border-nf-orange/40 bg-surface flex flex-col justify-between shadow-md relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-nf-orange to-nf-orange-deep"></div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[0.62rem] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  100% GRATIS
                </span>
                <span className="text-xl">🎓</span>
              </div>

              <h4 className="font-display font-bold text-base text-white mb-1">
                Mahasiswa NF
              </h4>
              <p className="text-[0.72rem] text-text-secondary leading-snug mb-3">
                Khusus mahasiswa aktif STT Terpadu Nurul Fikri. Termasuk 4x Workshop Online & E-Certificate.
              </p>

              {/* Price Box */}
              <div className="p-2.5 rounded-lg bg-background/80 border border-white/5 font-mono text-[0.68rem] mb-3.5 space-y-0.5">
                <div className="text-text-muted text-[0.62rem] uppercase font-bold">BIAYA REGISTRASI (HTM):</div>
                <div className="text-emerald-400 font-bold text-xs">Rp 0,- (GRATIS)</div>
                <div className="text-text-dim text-[0.62rem]">Fixed Prize Pool Rp400.000</div>
              </div>
            </div>

            <a
              href="https://forms.gle/2w81FH7tfUMjEN2G7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg font-display font-bold text-xs bg-nf-orange hover:bg-nf-orange-deep text-white shadow-sm transition-all text-center block"
            >
              Daftar Track Mahasiswa →
            </a>
          </div>

          {/* Option Track Umum */}
          <div className="p-4 rounded-xl border border-nx-cyan/40 bg-surface flex flex-col justify-between shadow-md relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-nx-cyan to-nx-purple"></div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[0.62rem] font-bold px-2 py-0.5 rounded-full bg-nx-cyan/15 text-nx-cyan border border-nx-cyan/30">
                  TERBUKA NASIONAL
                </span>
                <span className="text-xl">🌐</span>
              </div>

              <h4 className="font-display font-bold text-base text-white mb-1">
                Track Umum
              </h4>
              <p className="text-[0.72rem] text-text-secondary leading-snug mb-3">
                Terbuka untuk pelajar, mahasiswa luar, & umum se-Indonesia. 90% Dynamic Prize Pool.
              </p>

              {/* Price Box */}
              <div className="p-2.5 rounded-lg bg-background/80 border border-white/5 font-mono text-[0.68rem] mb-3.5 space-y-1">
                <div className="text-text-muted text-[0.62rem] uppercase font-bold">BIAYA REGISTRASI (HTM):</div>
                <div className="flex items-center justify-between text-nx-cyan font-bold text-[0.68rem]">
                  <span>Early Bird 1 (7-14 Okt)</span>
                  <span>: Rp 10.000</span>
                </div>
                <div className="flex items-center justify-between text-text-secondary text-[0.68rem]">
                  <span>Early Bird 2 (15 Okt-3 Nov)</span>
                  <span>: Rp 15.000</span>
                </div>
              </div>
            </div>

            <a
              href="https://forms.gle/LbFzf35d9dcLWV8T9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg font-display font-bold text-xs bg-gradient-to-r from-nx-cyan to-nx-purple text-slate-950 shadow-sm hover:opacity-95 transition-all text-center block"
            >
              Daftar Track Umum →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
