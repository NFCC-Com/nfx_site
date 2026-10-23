/**
 * NFX CTF 2026 — Interactive Dynamic Prize Pool Calculator
 * Formula:
 * - HTM: Rp10.000 (Flat)
 * - Prize Pool: 90% of Total Revenue
 * - Operational & Server: 10% of Total Revenue
 */

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('participant-slider');
  const participantCountEl = document.getElementById('participant-count-val');
  const btnOption1 = document.getElementById('btn-scheme-1');
  const btnOption2 = document.getElementById('btn-scheme-2');

  const totalRevenueEl = document.getElementById('calc-total-revenue');
  const prizePoolEl = document.getElementById('calc-prize-pool');
  const opsCostEl = document.getElementById('calc-ops-cost');
  const prizeGridContainer = document.getElementById('prize-grid-output');

  let currentScheme = 'option1'; // 'option1' or 'option2'
  const BASE_SPONSOR = 0; // Dana sponsor resmi (placeholder)

  const formatRupiah = (num) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(Math.round(num));
  };

  function updateCalculator() {
    const count = parseInt(slider.value, 10);
    if (participantCountEl) {
      participantCountEl.innerText = `${count} Peserta`;
    }

    const ticketRevenue = count * AVG_HTM;
    const ticketPool = ticketRevenue * 0.90;
    const totalPrizePool = BASE_SPONSOR + ticketPool;
    const opsCost = ticketRevenue * 0.10;

    if (totalRevenueEl) totalRevenueEl.innerText = formatRupiah(ticketRevenue);
    if (prizePoolEl) prizePoolEl.innerText = formatRupiah(totalPrizePool);
    if (opsCostEl) opsCostEl.innerText = formatRupiah(opsCost);

    renderPrizes(ticketPool);
  }

  function renderPrizes(prizePool) {
    if (!prizeGridContainer) return;

    if (currentScheme === 'option1') {
      const j1 = prizePool * 0.40 + 150000;
      const j2 = prizePool * 0.30 + 100000;
      const j3 = prizePool * 0.15 + 50000;
      const j4 = prizePool * 0.10;
      const j5 = prizePool * 0.05;

      prizeGridContainer.innerHTML = `
        <div class="prize-rank-card rank-1">
          <div class="prize-medal">🥇</div>
          <div class="prize-rank-title">Juara 1</div>
          <div class="prize-percentage">40% Pool Tiket + Rp150.000 + Voucher 1 Bulan</div>
          <div class="prize-amount">${formatRupiah(j1)}</div>
        </div>
        <div class="prize-rank-card rank-2">
          <div class="prize-medal">🥈</div>
          <div class="prize-rank-title">Juara 2</div>
          <div class="prize-percentage">30% Pool Tiket + Rp100.000</div>
          <div class="prize-amount">${formatRupiah(j2)}</div>
        </div>
        <div class="prize-rank-card rank-3">
          <div class="prize-medal">🥉</div>
          <div class="prize-rank-title">Juara 3</div>
          <div class="prize-percentage">15% Pool Tiket + Rp50.000</div>
          <div class="prize-amount">${formatRupiah(j3)}</div>
        </div>
        <div class="prize-rank-card">
          <div class="prize-medal">4️⃣</div>
          <div class="prize-rank-title">Juara 4</div>
          <div class="prize-percentage">10% Pool Tiket</div>
          <div class="prize-amount">${formatRupiah(j4)}</div>
        </div>
        <div class="prize-rank-card">
          <div class="prize-medal">5️⃣</div>
          <div class="prize-rank-title">Juara 5</div>
          <div class="prize-percentage">5% Pool Tiket</div>
          <div class="prize-amount">${formatRupiah(j5)}</div>
        </div>
      `;
    } else {
      const j1 = prizePool * 0.50 + 150000;
      const j2 = prizePool * 0.30 + 100000;
      const j3 = prizePool * 0.20 + 50000;

      prizeGridContainer.innerHTML = `
        <div class="prize-rank-card rank-1">
          <div class="prize-medal">🥇</div>
          <div class="prize-rank-title">Juara 1</div>
          <div class="prize-percentage">50% Pool Tiket + Rp150.000 + Voucher 1 Bulan</div>
          <div class="prize-amount">${formatRupiah(j1)}</div>
        </div>
        <div class="prize-rank-card rank-2">
          <div class="prize-medal">🥈</div>
          <div class="prize-rank-title">Juara 2</div>
          <div class="prize-percentage">30% Pool Tiket + Rp100.000</div>
          <div class="prize-amount">${formatRupiah(j2)}</div>
        </div>
        <div class="prize-rank-card rank-3">
          <div class="prize-medal">🥉</div>
          <div class="prize-rank-title">Juara 3</div>
          <div class="prize-percentage">20% Pool Tiket + Rp50.000</div>
          <div class="prize-amount">${formatRupiah(j3)}</div>
        </div>
      `;
    }
  }

  // Event Listeners
  if (slider) {
    slider.addEventListener('input', updateCalculator);
  }

  if (btnOption1) {
    btnOption1.addEventListener('click', () => {
      currentScheme = 'option1';
      btnOption1.classList.add('active');
      if (btnOption2) btnOption2.classList.remove('active');
      updateCalculator();
    });
  }

  if (btnOption2) {
    btnOption2.addEventListener('click', () => {
      currentScheme = 'option2';
      btnOption2.classList.add('active');
      if (btnOption1) btnOption1.classList.remove('active');
      updateCalculator();
    });
  }

  // Initial Run
  updateCalculator();
});
