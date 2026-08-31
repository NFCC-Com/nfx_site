/**
 * NFX CTF 2026 — Interactive Dynamic Prize Pool Calculator
 * Formula:
 * - Average HTM: Rp11.500 (Early Bird 1: 10k, Early Bird 2: 15k)
 * - Prize Pool: 90% of Total Revenue
 * - Operational & Server: 10% of Total Revenue
 *
 * Schemes:
 * - Option 1 (Top 5): J1 (40%), J2 (25%), J3 (15%), J4 (10%), J5 (10%)
 * - Option 2 (Top 3 + Best WU): J1 (45%), J2 (25%), J3 (15%), Best WU (15%)
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
  const AVG_HTM = 11500;

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

    const totalRevenue = count * AVG_HTM;
    const prizePool = totalRevenue * 0.90;
    const opsCost = totalRevenue * 0.10;

    if (totalRevenueEl) totalRevenueEl.innerText = formatRupiah(totalRevenue);
    if (prizePoolEl) prizePoolEl.innerText = formatRupiah(prizePool);
    if (opsCostEl) opsCostEl.innerText = formatRupiah(opsCost);

    renderPrizes(prizePool);
  }

  function renderPrizes(prizePool) {
    if (!prizeGridContainer) return;

    if (currentScheme === 'option1') {
      const j1 = prizePool * 0.40;
      const j2 = prizePool * 0.25;
      const j3 = prizePool * 0.15;
      const j4 = prizePool * 0.10;
      const j5 = prizePool * 0.10;

      prizeGridContainer.innerHTML = `
        <div class="prize-rank-card rank-1">
          <div class="prize-medal">🥇</div>
          <div class="prize-rank-title">Juara 1</div>
          <div class="prize-percentage">40% Prize Pool</div>
          <div class="prize-amount">${formatRupiah(j1)}</div>
        </div>
        <div class="prize-rank-card rank-2">
          <div class="prize-medal">🥈</div>
          <div class="prize-rank-title">Juara 2</div>
          <div class="prize-percentage">25% Prize Pool</div>
          <div class="prize-amount">${formatRupiah(j2)}</div>
        </div>
        <div class="prize-rank-card rank-3">
          <div class="prize-medal">🥉</div>
          <div class="prize-rank-title">Juara 3</div>
          <div class="prize-percentage">15% Prize Pool</div>
          <div class="prize-amount">${formatRupiah(j3)}</div>
        </div>
        <div class="prize-rank-card">
          <div class="prize-medal">4️⃣</div>
          <div class="prize-rank-title">Juara 4</div>
          <div class="prize-percentage">10% Prize Pool</div>
          <div class="prize-amount">${formatRupiah(j4)}</div>
        </div>
        <div class="prize-rank-card">
          <div class="prize-medal">5️⃣</div>
          <div class="prize-rank-title">Juara 5</div>
          <div class="prize-percentage">10% Prize Pool</div>
          <div class="prize-amount">${formatRupiah(j5)}</div>
        </div>
      `;
    } else {
      const j1 = prizePool * 0.45;
      const j2 = prizePool * 0.25;
      const j3 = prizePool * 0.15;
      const bestWu = prizePool * 0.15;

      prizeGridContainer.innerHTML = `
        <div class="prize-rank-card rank-1">
          <div class="prize-medal">🥇</div>
          <div class="prize-rank-title">Juara 1</div>
          <div class="prize-percentage">45% Prize Pool</div>
          <div class="prize-amount">${formatRupiah(j1)}</div>
        </div>
        <div class="prize-rank-card rank-2">
          <div class="prize-medal">🥈</div>
          <div class="prize-rank-title">Juara 2</div>
          <div class="prize-percentage">25% Prize Pool</div>
          <div class="prize-amount">${formatRupiah(j2)}</div>
        </div>
        <div class="prize-rank-card rank-3">
          <div class="prize-medal">🥉</div>
          <div class="prize-rank-title">Juara 3</div>
          <div class="prize-percentage">15% Prize Pool</div>
          <div class="prize-amount">${formatRupiah(j3)}</div>
        </div>
        <div class="prize-rank-card rank-wu">
          <div class="prize-medal">📝</div>
          <div class="prize-rank-title">Best Writeup</div>
          <div class="prize-percentage">15% Prize Pool</div>
          <div class="prize-amount">${formatRupiah(bestWu)}</div>
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
