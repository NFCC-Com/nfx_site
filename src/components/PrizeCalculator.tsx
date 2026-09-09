import React from "react";

export default function PrizeCalculator() {
  return (
    <div className="relative p-5 sm:p-6 rounded-2xl bg-surface-elevated/95 border border-white/10 backdrop-blur-xl shadow-xl overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-nx-cyan via-nx-purple to-nf-orange" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3.5 border-b border-white/5">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="font-mono text-[0.62rem] font-bold px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/25 text-amber-300 uppercase tracking-wider">
              📢 PENYESUAIAN PENDANAAN HADIAH
            </span>
          </div>
          <h3 className="font-display font-bold text-base sm:text-lg text-white">
            Informasi Hadiah Track Umum Nasional
          </h3>
          <p className="font-mono text-xs text-text-muted mt-0.5">
            Sesuai prinsip syariat hukum Islam, hadiah tidak bersumber dari biaya pendaftaran peserta.
          </p>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3 bg-surface/90 px-4 py-2 rounded-xl border border-amber-400/30 shrink-0 self-start sm:self-center">
          <span className="font-mono text-[0.68rem] text-text-muted uppercase">Status Hadiah:</span>
          <span className="font-mono text-sm sm:text-base font-bold text-amber-300">
            Sponsor (TBA)
          </span>
        </div>
      </div>

      <div className="bg-background/80 p-4 rounded-xl border border-white/5 text-xs font-mono text-text-secondary leading-relaxed space-y-2">
        <p>
          Hadiah NFX CTF Track Umum murni bersumber dari <strong>pihak sponsor dan/atau penyelenggara</strong>. Informasi resmi mengenai bentuk dan nominal hadiah akan kami sampaikan kembali setelah pendanaan hadiah ditetapkan.
        </p>
        <p className="text-emerald-400">
          ✓ Pendaftaran yang sudah dilakukan <strong>tetap berlaku</strong> sepenuhnya.
        </p>
      </div>
    </div>
  );
}
