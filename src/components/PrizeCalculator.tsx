import React, { useState, useMemo } from "react";

export default function PrizeCalculator() {
  const [participants, setParticipants] = useState<number>(100);

  const BASE_SPONSOR = 300000; // Rp 300.000 Cash Sponsorship dari LINUXENIC CORP.
  const BASE_HTM = 10000; // Rp 10.000 Flat per peserta

  const { totalPrizePool, distribution } = useMemo(() => {
    const ticketPool = participants * BASE_HTM * 0.90; // 90% alokasi tiket peserta
    const totalPrizePool = BASE_SPONSOR + ticketPool; // Rp 300 Ribu Sponsor + Dynamic Pool

    const distribution = [
      {
        rank: "Juara 1",
        percentage: "40% tiket + Rp150k",
        amount: ticketPool * 0.40 + 150000,
        badge: "🥇",
        voucher: "Voucher Linuxenic 1 Bulan + E-Certificate + Cash",
      },
      {
        rank: "Juara 2",
        percentage: "30% tiket + Rp100k",
        amount: ticketPool * 0.30 + 100000,
        badge: "🥈",
        voucher: "E-Certificate + Cash Prize",
      },
      {
        rank: "Juara 3",
        percentage: "15% tiket + Rp50k",
        amount: ticketPool * 0.15 + 50000,
        badge: "🥉",
        voucher: "E-Certificate + Cash Prize",
      },
      { rank: "Juara 4", percentage: "10% tiket", amount: ticketPool * 0.10, badge: "4", voucher: "E-Certificate + Cash Prize" },
      { rank: "Juara 5", percentage: "5% tiket", amount: ticketPool * 0.05, badge: "5", voucher: "E-Certificate + Cash Prize" },
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

      {/* Simplified Sleek Top Bar: Title & Total Pool */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3.5 border-b border-white/5">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="font-mono text-[0.62rem] font-bold px-2 py-0.5 rounded bg-nx-cyan/10 border border-nx-cyan/25 text-nx-cyan uppercase tracking-wider">
              ⚡ SIMULASI PRIZE POOL
            </span>
            <span className="font-mono text-[0.62rem] font-bold px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/25 text-amber-300 uppercase">
              +Rp 300 Rb Sponsor LINUXENIC
            </span>
          </div>
          <h3 className="font-display font-bold text-base sm:text-lg text-white">
            Simulasi Hadiah Track Umum — Top 5
          </h3>
          <p className="font-mono text-xs text-text-muted mt-0.5">
            Rp 300.000 sponsor + pool tiket (90% registrasi Rp10.000/peserta). Sisa 10% untuk operasional.
          </p>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3 bg-surface/90 px-4 py-2 rounded-xl border border-emerald-500/30 shrink-0 self-start sm:self-center">
          <span className="font-mono text-[0.68rem] text-text-muted uppercase">Total Pool:</span>
          <span className="font-mono text-base sm:text-lg font-black text-emerald-400">
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

      {/* Hadiah Top 5: pool tiket dan bonus sponsor terpisah */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {distribution.map((item, idx) => (
          <div
            key={idx}
            className={`p-3.5 sm:p-4 rounded-xl border flex flex-col justify-between transition-all ${idx === 0
              ? "bg-surface/95 border-amber-400/50 shadow-lg shadow-amber-400/5 ring-1 ring-amber-400/20"
              : idx === 1
                ? "bg-surface/90 border-slate-400/30"
                : "bg-surface/85 border-white/10"
              }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xl">{item.badge}</span>
              <span className={`font-mono text-[0.7rem] font-bold px-2 py-0.5 rounded ${idx === 0
                ? "bg-amber-400/15 text-amber-300 border border-amber-400/30"
                : "bg-white/5 text-text-muted"
                }`}>
                {item.percentage}
              </span>
            </div>

            <div className="my-1">
              <div className="font-display font-bold text-sm text-white mb-0.5">
                {item.rank}
              </div>
              <div className={`font-mono text-base sm:text-lg font-extrabold mb-1.5 ${idx === 0 ? "text-amber-300" : idx === 1 ? "text-slate-200" : "text-nx-cyan"
                }`}>
                {formatRupiah(item.amount)}
              </div>
            </div>

            <div className="font-mono text-[0.68rem] text-text-muted pt-2 border-t border-white/5">
              🎁 {item.voucher}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
