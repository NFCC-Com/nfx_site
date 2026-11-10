import * as React from "react";
import { X, Trophy, MessageSquare, CheckCircle2 } from "lucide-react";

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

      <div className="relative w-full max-w-md rounded-2xl bg-surface-elevated border border-emerald-500/30 shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-150 text-center">
        {/* Compact Clean Header */}
        <div className="px-5 py-3.5 border-b border-white/10 flex items-center justify-between bg-surface/90">
          <div className="text-left">
            <h3 className="font-display font-bold text-sm sm:text-base text-white">
              Status Pendaftaran
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

        {/* Closed Notice & CTAs */}
        <div className="p-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-mono text-xs font-semibold uppercase">
            <CheckCircle2 className="size-3.5" />
            <span>Event Concluded</span>
          </div>

          <div>
            <h4 className="font-display font-extrabold text-lg text-white mb-1.5">
              Pendaftaran Resmi Ditutup
            </h4>
            <p className="text-xs text-text-secondary leading-relaxed max-w-sm mx-auto">
              Kompetisi 48 Jam NFX CTF 2026 telah selesai pada <strong>09 November 2026</strong> pukul 14:00 WIB. Terima kasih atas antusiasme seluruh peserta!
            </p>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="https://ctf.nfx.my.id/scoreboard"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl font-display font-bold text-xs bg-gradient-to-r from-emerald-500 via-teal-500 to-nx-cyan text-slate-950 hover:brightness-110 shadow-md shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
            >
              <Trophy className="size-3.5" />
              <span>Lihat Final Scoreboard ↗</span>
            </a>

            <a
              href="https://ctf.nfx.my.id"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl font-display font-semibold text-xs bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <span>Akses Arena Platform CTF ↗</span>
            </a>

            <button
              onClick={() => {
                setIsOpen(false);
                window.dispatchEvent(new CustomEvent("open-discord-nfx-modal"));
              }}
              className="w-full py-2.5 px-4 rounded-xl font-display font-semibold text-xs bg-[#5865F2]/15 border border-[#5865F2]/30 text-[#8ea1e1] hover:bg-[#5865F2] hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="size-3.5" />
              <span>Gabung Discord Komunitas ↗</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
