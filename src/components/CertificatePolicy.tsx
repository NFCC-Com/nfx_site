export default function CertificatePolicy() {
  return (
    <div className="p-4 rounded-xl bg-surface border border-white/10 space-y-3 text-xs text-text-secondary leading-relaxed">
      <h3 className="font-display font-bold text-white">Format Kompetisi & Sertifikat</h3>
      <p>Kedua track bertanding bersamaan dengan challenge yang sama. Scoreboard Mahasiswa NF dan Umum terpisah; peringkat, hadiah, dan kategori sertifikat mengikuti hasil akhir masing-masing track.</p>
      <p><strong className="text-white">Mahasiswa NF:</strong> wajib menyelesaikan minimal 1 challenge (flag benar diterima platform). Jika 0 challenge selesai, peserta tidak mendapat sertifikat meskipun masuk Top 10. Writeup tetap opsional.</p>
      <p><strong className="text-white">Umum:</strong> wajib mengumpulkan writeup untuk klaim sertifikat dan validasi hadiah.</p>
      <ul className="space-y-1">
        <li><strong className="text-white">Peringkat 1–5:</strong> sertifikat Juara 1, Juara 2, Juara 3, Juara 4, atau Juara 5 sesuai peringkat.</li>
        <li><strong className="text-white">Peringkat 6–10:</strong> sertifikat Top 10.</li>
        <li><strong className="text-white">Peringkat 11 dan seterusnya:</strong> sertifikat Peserta.</li>
      </ul>
      <p>Kategori sertifikat berlaku bagi peserta yang memenuhi syarat track. Sertifikat mencantumkan track peserta; kategori Top 10 tidak menambah hadiah uang.</p>
    </div>
  );
}
