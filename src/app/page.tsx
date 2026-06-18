export default function HomePage() {
  const posts = [
    { title: "Panduan Membuat Blog Next.js Modern 2026", slug: "panduan-nextjs-2026", desc: "Cara membuat blog super cepat, mobile friendly, presisi di tengah, dan mendukung penuh Google Adsense serta Adsterra.", date: "18 Juni 2026" },
    { title: "Cara Lolos Review Google Adsense dalam 3 Hari", slug: "tips-adsense-cepat", desc: "Trik menyusun layout blog dan konten berkualitas agar langsung disetujui oleh tim reviewer Google Adsense.", date: "17 Juni 2026" }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Banner Tengah yang Elegan */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white p-12 md:p-16 rounded-[32px] shadow-2xl text-center border border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.15),transparent_45%)]" />
        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight leading-tight">
          Temukan Cerita <span className="text-sky-400">Inspiratif</span> Di Sini
        </h1>
        <p className="text-slate-300 text-base md:text-lg max-w-xl mx-auto font-medium">
          Membahas tuntas teknologi masa kini, tutorial koding tingkat dewa, hingga trik rahasia cuan lewat blog monetisasi.
        </p>
      </div>

      {/* TAMPILAN KOTAK-KOTAK BESAR PREMIUM (GRID) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="premium-card flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
                <span>{post.date}</span>
              </div>
              <h2 className="text-2xl font-extrabold mt-3 text-slate-900 dark:text-white leading-snug tracking-tight">
                <a href={`/blog/${post.slug}`} className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">
                  {post.title}
                </a>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mt-4 text-sm leading-relaxed font-normal">
                {post.desc}
              </p>
            </div>
            
            <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-700/60">
              <a href={`/blog/${post.slug}`} className="text-blue-600 dark:text-sky-400 font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all group">
                Baca Artikel Lengkap <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
