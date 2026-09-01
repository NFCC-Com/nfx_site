import React, { useState, useMemo } from "react";

export default function PrizeCalculator() {
  const [participants, setParticipants] = useState<number>(100);

  const BASE_HTM = 10000; // Estimasi dasar HTM Rp10.000 / peserta

  const { totalPrizePool, distribution } = useMemo(() => {
    const totalRevenue = participants * BASE_HTM;
    const totalPrizePool = totalRevenue * 0.90;

    const distribution = [
      { rank: "Juara 1", percentage: "45%", amount: totalPrizePool * 0.45, badge: "🥇", voucher: "Voucher 1 Bulan" },
      { rank: "Juara 2", percentage: "25%", amount: totalPrizePool * 0.25, badge: "🥈", voucher: "Voucher 14 Hari" },
      { rank: "Juara 3", percentage: "15%", amount: totalPrizePool * 0.15, badge: "🥉", voucher: "Voucher 7 Hari" },
      { rank: "Best WU", percentage: "15%", amount: totalPrizePool * 0.15, badge: "📝", voucher: "E-Certif + Cash", isSpecial: true },
    ];

    return { totalPrizePool, distribution };
  }, [participants]);

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Math.round(num));
  };

  const presets = [50, 100, 150, 200, 300];

  return (
    <div className="relative p-5 sm:p-6 rounded-2xl bg-surface-elevated/95 border border-white/10 backdrop-blur-xl shadow-xl overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-nx-cyan via-nx-purple to-nf-orange" />

      {/* High Stakes High Reward Tagline Badge */}
      <div className="inline-flex items-center gap-2 font-mono text-[0.68rem] text-nx-cyan px-2.5 py-1 rounded-full bg-nx-cyan/10 border border-nx-cyan/25 mb-3 uppercase tracking-wider">
        <span className="animate-pulse">🔥</span>
        <span>High Stakes, High Reward — Semakin Ramai Rival, Semakin Melimpah Prize Pool!</span>
      </div>

      {/* Compact Top Bar: Title & Total Pool */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-white/5">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-base">⚡</span>
            <h3 className="font-display font-bold text-lg sm:text-xl text-white">
              Simulasi Dynamic Prize Pool
            </h3>
          </div>
          <p className="font-mono text-xs text-text-muted mt-0.5">
            Estimasi alokasi 90% dari biaya pendaftaran dasar (Rp 10.000 / peserta)
          </p>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 bg-surface/90 px-4 py-2 rounded-xl border border-emerald-500/30">
          <span className="font-mono text-[0.7rem] text-text-muted uppercase">Total Pool:</span>
          <span className="font-mono text-base sm:text-lg font-extrabold text-emerald-400">
            {formatRupiah(totalPrizePool)}
          </span>
        </div>
      </div>

      {/* Compact Slider & Preset Row */}
      <div className="bg-background/80 p-3.5 sm:p-4 rounded-xl border border-white/5 mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-text-secondary font-medium">Estimasi Peserta:</span>
            <span className="font-mono text-xs font-bold text-nx-cyan px-2 py-0.5 rounded bg-nx-cyan/10 border border-nx-cyan/30">
              {participants} Orang
            </span>
          </div>

          {/* Quick Preset Buttons */}
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-[0.65rem] text-text-muted">Preset:</span>
            {presets.map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => setParticipants(val)}
                className={`px-2 py-0.5 rounded text-[0.68rem] font-mono transition-all ${participants === val
                  ? "bg-nx-cyan text-slate-950 font-bold"
                  : "bg-white/5 text-text-muted hover:text-white hover:bg-white/10"
                  }`}
              >
                {val}
              </button>
            ))}
          </div>
        </div>

        <input
          type="range"
          min="10"
          max="300"
          step="5"
          value={participants}
          onChange={(e) => setParticipants(Number(e.target.value))}
          className="w-full h-2 bg-white/15 rounded-lg appearance-none cursor-pointer accent-nx-cyan focus:outline-none"
        />

        <div className="flex justify-between font-mono text-[0.62rem] text-text-dim mt-1.5 px-0.5">
          <span>10 (Min)</span>
          <span className="text-nx-cyan/70 font-semibold">150 (Tengah)</span>
          <span>300 (Max)</span>
        </div>
      </div>

      {/* Compact 4 Column Prize Breakdown */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
        {distribution.map((item, idx) => (
          <div
            key={idx}
            className={`p-3 sm:p-3.5 rounded-xl border flex flex-col justify-between transition-all ${item.isSpecial
              ? "bg-surface/90 border-nx-purple/40"
              : idx === 0
                ? "bg-surface/90 border-amber-400/40"
                : "bg-surface/80 border-white/5"
              }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-lg">{item.badge}</span>
              <span className="font-mono text-[0.68rem] text-text-muted font-semibold bg-white/5 px-1.5 py-0.2 rounded">
                {item.percentage}
              </span>
            </div>

            <div>
              <div className="font-display font-bold text-xs sm:text-sm text-white mb-0.5">
                {item.rank}
              </div>
              <div className={`font-mono text-sm sm:text-base font-extrabold mb-1.5 ${idx === 0 ? "text-amber-300" : item.isSpecial ? "text-nx-purple" : "text-nx-cyan"
                }`}>
                {formatRupiah(item.amount)}
              </div>
            </div>

            <div className="font-mono text-[0.62rem] text-text-muted truncate pt-1 border-t border-white/5">
              🎁 {item.voucher}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
