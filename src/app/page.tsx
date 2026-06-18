export default function HomePage() {
  // Contoh data artikel fiktif (Nanti ini bisa diambil dari API WordPress)
  const posts = [
    { title: "Cara Membuat Blog Super Cepat dengan Next.js", slug: "cara-membuat-blog", desc: "Panduan lengkap mendeploy blog modern ke Vercel.", date: "18 Juni 2026" },
    { title: "Tips Optimasi SEO untuk Google Adsense", slug: "tips-optimasi-seo", desc: "Trik rahasia agar artikelmu mudah nangkring di halaman pertama Google.", date: "17 Juni 2026" }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Selamat Datang di Blog Saya!</h1>
        <p className="text-blue-100">Tempat berbagi informasi teknologi, coding, dan tips finansial terupdate.</p>
      </div>

      {/* 6. SLOT IKLAN (Atas Artikel) */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100 text-center text-xs text-gray-400 tracking-widest uppercase">
        {/* Masukkan Script Adsterra / Adsense di sini */}
        [SLOT IKLAN ADSTERRA / ADSENSE ATAS]
      </div>

      {/* 2. TAMPILAN BLOG PREMIUM & MOBILE FRIENDLY (Grid System) */}
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <article key={post.slug} className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition flex flex-col justify-between">
            <div>
              <span className="text-xs text-blue-500 font-semibold">{post.date}</span>
              <h2 className="text-xl font-bold mt-1 text-gray-900 hover:text-blue-600 transition">
                <a href={`/blog/${post.slug}`}>{post.title}</a>
              </h2>
              <p className="text-gray-600 mt-2 text-sm line-clamp-2">{post.desc}</p>
            </div>
            <a href={`/blog/${post.slug}`} className="text-blue-600 font-medium text-sm mt-4 inline-block hover:underline">
              Baca selengkapnya &rarr;
            </a>
          </article>
        ))}
      </div>

      {/* 6. SLOT IKLAN (Bawah Artikel) */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100 text-center text-xs text-gray-400 tracking-widest uppercase">
        [SLOT IKLAN GOOGLE ADSENSE BANNER]
      </div>
    </div>
  );
}
