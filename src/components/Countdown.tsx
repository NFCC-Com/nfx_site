import React, { useState, useEffect } from "react";

function getCountdownValues() {
  // Start: 7 November 2026, 14:00:00 WIB (Month 10 = November in JS 0-indexed)
  const startDate = new Date(2026, 10, 7, 14, 0, 0).getTime();
  // End: 9 November 2026, 14:00:00 WIB (48 Hours Jeopardy CTF)
  const endDate = new Date(2026, 10, 9, 14, 0, 0).getTime();
  const now = Date.now();

  // If now is past competition end
  if (now >= endDate) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
      isLive: false,
      isEnded: true,
    };
  }

  // If competition is currently live
  if (now >= startDate) {
    const diff = endDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return {
      days: String(days).padStart(2, "0"),
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
      isLive: true,
      isEnded: false,
    };
  }

  // Before competition starts
  const diff = startDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
    isLive: false,
    isEnded: false,
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getCountdownValues);

  useEffect(() => {
    // Initial sync
    setTimeLeft(getCountdownValues());

    const interval = setInterval(() => {
      setTimeLeft(getCountdownValues());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // When competition is officially finished
  if (timeLeft.isEnded) {
    return (
      <div className="relative w-full max-w-xl mx-auto rounded-2xl bg-surface-elevated/90 border border-emerald-500/30 backdrop-blur-xl p-5 sm:p-6 shadow-2xl shadow-black/80 overflow-hidden text-center">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 via-nx-cyan to-amber-400" />
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
          <span className="size-2 rounded-full bg-emerald-400"></span>
          <span>COMPETITION CONCLUDED // 07 – 09 NOV 2026</span>
        </div>

        <h3 className="font-display font-black text-xl sm:text-2xl text-white mb-2">
          Kompetisi 48 Jam Resmi Berakhir!
        </h3>
        
        <p className="text-xs sm:text-sm text-text-secondary max-w-md mx-auto mb-5 leading-relaxed">
          Terima kasih kepada seluruh peserta Track Mahasiswa NF &amp; Track Umum Nasional atas partisipasi luar biasa dan sportivitasnya selama kompetisi.
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 font-mono text-xs">
          <a
            href="https://ctf.nfx.my.id/scoreboard"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl font-display font-bold text-xs bg-gradient-to-r from-emerald-500 via-teal-500 to-nx-cyan text-slate-950 hover:brightness-110 shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-1.5"
          >
            <span>🏆 Final Scoreboard ↗</span>
          </a>
          <a
            href="https://ctf.nfx.my.id"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors flex items-center gap-1.5"
          >
            <span>Arena CTF ↗</span>
          </a>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-discord-nfx-modal"))}
            className="px-3.5 py-2 rounded-xl bg-[#5865F2]/15 border border-[#5865F2]/30 text-[#8ea1e1] hover:bg-[#5865F2] hover:text-white transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>Discord Info ↗</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-2xl bg-surface-elevated/90 border border-white/15 backdrop-blur-xl p-5 sm:p-7 shadow-2xl shadow-black/80 overflow-hidden group hover:border-nx-cyan/30 transition-colors">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-nx-cyan via-nx-purple to-nf-orange" />
      
      <div className="flex items-center justify-between font-mono text-xs text-text-muted mb-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-400 font-semibold tracking-wider uppercase">
            {timeLeft.isLive ? "COMPETITION IS LIVE (48H)" : "COUNTDOWN TO MAIN EVENT"}
          </span>
        </div>
        <span className="text-text-secondary font-semibold">07 – 09 NOV 2026 // 14:00 WIB</span>
      </div>

      <div className="grid grid-cols-4 gap-2.5 sm:gap-4">
        <div className="flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-xl bg-background/90 border border-white/10 shadow-inner">
          <span className="font-mono text-2xl sm:text-4xl font-bold text-white tracking-tight">
            {timeLeft.days}
          </span>
          <span className="font-mono text-[0.68rem] sm:text-xs text-text-muted uppercase mt-1 font-semibold">
            Hari
          </span>
        </div>

        <div className="flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-xl bg-background/90 border border-white/10 shadow-inner">
          <span className="font-mono text-2xl sm:text-4xl font-bold text-white tracking-tight">
            {timeLeft.hours}
          </span>
          <span className="font-mono text-[0.68rem] sm:text-xs text-text-muted uppercase mt-1 font-semibold">
            Jam
          </span>
        </div>

        <div className="flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-xl bg-background/90 border border-white/10 shadow-inner">
          <span className="font-mono text-2xl sm:text-4xl font-bold text-white tracking-tight">
            {timeLeft.minutes}
          </span>
          <span className="font-mono text-[0.68rem] sm:text-xs text-text-muted uppercase mt-1 font-semibold">
            Menit
          </span>
        </div>

        <div className="flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-xl bg-background/90 border border-white/10 shadow-inner">
          <span className="font-mono text-2xl sm:text-4xl font-bold text-nx-cyan tracking-tight animate-pulse">
            {timeLeft.seconds}
          </span>
          <span className="font-mono text-[0.68rem] sm:text-xs text-text-muted uppercase mt-1 font-semibold">
            Detik
          </span>
        </div>
      </div>
    </div>
  );
}
