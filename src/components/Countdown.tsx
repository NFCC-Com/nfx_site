import React, { useState, useEffect } from "react";

function getCountdownValues() {
  // Target: 7 November 2026, 14:00:00 WIB (Month 10 = November in JS 0-indexed)
  const targetDate = new Date(2026, 10, 7, 14, 0, 0).getTime();
  const now = Date.now();
  const diff = targetDate - now;

  if (diff <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
      isLive: true,
    };
  }

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
            {timeLeft.isLive ? "COMPETITION IS LIVE" : "COUNTDOWN TO MAIN EVENT"}
          </span>
        </div>
        <span className="text-text-secondary font-semibold">7 NOV 2026 // 14:00 WIB</span>
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
