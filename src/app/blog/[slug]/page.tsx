export default function BlogPostPage() {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      
      {/* Kolom Kiri: Konten Artikel */}
      <div className="w-full lg:w-2/3 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-blue-100">
        <span className="text-sm text-blue-500 font-semibold">18 Juni 2026</span>
        <h1 className="text-2xl md:text-3xl font-bold mt-2 mb-6 text-gray-900">
          Cara Membuat Blog Super Cepat dengan Next.js
        </h1>

        {/* 6. IKLAN DI DALAM ARTIKEL (In-Article Ad) */}
        <div className="bg-blue-50 p-3 my-4 rounded text-center text-xs text-gray-400">
          [IKLAN ADSTERRA BANNER DALAM ARTIKEL]
        </div>

        {/* Isi Artikel */}
        <div className="prose max-w-none text-gray-700 space-y-6 leading-relaxed">
          <h2 id="pendahuluan" className="text-xl font-bold text-gray-900 pt-4">1. Pendahuluan</h2>
          <p>Next.js adalah framework React terbaik saat ini untuk membuat blog dengan performa tinggi...</p>
          
          <h2 id="kelebihan-nextjs" className="text-xl font-bold text-gray-900 pt-4">2. Kelebihan Next.js</h2>
          <p>Kelebihan utamanya ada pada optimasi gambar bawaan, routing otomatis, dan server-side rendering...</p>
          
          <h2 id="cara-deploy" className="text-xl font-bold text-gray-900 pt-4">3. Cara Deploy ke Vercel</h2>
          <p>Kamu hanya perlu menghubungkan repositori GitHub ke dasbor Vercel dan klik tombol deploy...</p>
        </div>
      </div>

      {/* 4. KOLOM KANAN: SUPPORT TABLE OF CONTENT (DAFTAR ISI) */}
      <aside className="w-full lg:w-1/3 space-y-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 sticky top-24">
          <h3 className="text-md font-bold uppercase tracking-wider text-gray-900 mb-4 pb-2 border-b border-blue-50">
            Daftar Isi
          </h3>
          <nav className="space-y-2 text-sm text-gray-600">
            <a href="#pendahuluan" className="block hover:text-blue-600 transition pl-1 border-l-2 border-transparent hover:border-blue-500">1. Pendahuluan</a>
            <a href="#kelebihan-nextjs" className="block hover:text-blue-600 transition pl-1 border-l-2 border-transparent hover:border-blue-500">2. Kelebihan Next.js</a>
            <a href="#cara-deploy" className="block hover:text-blue-600 transition pl-1 border-l-2 border-transparent hover:border-blue-500">3. Cara Deploy ke Vercel</a>
          </nav>
        </div>

        {/* Iklan Sidebar */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-blue-100 text-center text-xs text-gray-400 h-64 flex items-center justify-center">
          [IKLAN SIDEBAR ADSTERRA]
        </div>
      </aside>

    </div>
  );
}
