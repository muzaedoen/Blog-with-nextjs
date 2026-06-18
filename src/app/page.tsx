export default function HomePage() {
  // Contoh Data Artikel (Nanti bisa ditarik dari WordPress)
  const posts = [
    { title: "Panduan Membuat Blog Next.js Modern 2026", slug: "panduan-nextjs-2026", desc: "Cara membuat blog super cepat, mobile friendly, presisi di tengah, dan mendukung penuh Google Adsense serta Adsterra.", date: "18 Juni 2026" },
    { title: "Cara Lolos Review Google Adsense dalam 3 Hari", slug: "tips-adsense-cepat", desc: "Trik menyusun layout blog dan konten berkualitas agar langsung disetujui oleh tim reviewer Google Adsense.", date: "17 Juni 2026" },
    { title: "Mengapa Memilih Grid Layout untuk Blog?", slug: "kelebihan-grid-layout", desc: "Analisis mendalam mengapa tampilan kotak besar lebih disukai pembaca mobile karena estetik dan rapi.", date: "16 Juni 2026" },
    { title: "Optimasi Pendapatan Iklan Adsterra", slug: "tips-iklan-adsterra", desc: "Strategi menempatkan slot iklan banner di posisi strategis tanpa merusak kenyamanan membaca pengunjung.", date: "15 Juni 2026" }
  ];

  return (
    <div className="space-y-10">
      {/* Hero Banner Tengah */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-10 rounded-3xl shadow-xl text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-3 tracking-tight">Selamat Datang di Blog Kami</h1>
        <p className="text-blue-100 text-base md:text-lg max-w-xl mx-auto">Tempat membaca artikel seputar teknologi, tutorial coding, dan tips monetisasi web paling update.</p>
      </div>

      {/* SLOT IKLAN ATAS */}
      <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-blue-100 dark:border-slate-700 text-center text-xs text-slate-400 tracking-wider">
        [SLOT IKLAN BANNER ATAS - ADSENSE / ADSTERRA]
      </div>

      {/* TAMPILAN KOTAK-KOTAK BESAR (GRID) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <article 
            key={post.slug} 
            className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-md border border-blue-50 dark:border-slate-700/50 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <span className="text-xs text-blue-500 dark:text-blue-400 font-bold uppercase tracking-wider">{post.date}</span>
              <h2 className="text-2xl font-black mt-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                <a href={`/blog/${post.slug}`}>{post.title}</a>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mt-4 text-sm leading-relaxed line-clamp-3">{post.desc}</p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700">
              <a href={`/blog/${post.slug}`} className="text-blue-600 dark:text-blue-400 font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Baca Selengkapnya <span>&rarr;</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* SLOT IKLAN BAWAH */}
      <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-blue-100 dark:border-slate-700 text-center text-xs text-slate-400 tracking-wider">
        [SLOT IKLAN BANNER BAWAH - GOOGLE ADSENSE]
      </div>
    </div>
  );
}
