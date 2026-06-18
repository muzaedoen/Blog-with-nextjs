import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Premium Tech & Ads Blog",
  description: "Portal informasi modern dan terpercaya",
  verification: {
    google: "KODE_VERIFIKASI_KAMU",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-[#f4f8fa] text-slate-800 antialiased flex flex-col min-h-screen font-sans">
        
        {/* Navbar Premium dengan Efek Glassmorphism (Blur Transparan) */}
        <header className="bg-white/80 backdrop-blur-md border-b border-sky-100 sticky top-0 z-50">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="/" className="text-2xl font-black text-sky-600 tracking-tight flex items-center gap-2">
              <span className="bg-sky-600 text-white px-2 py-1 rounded-lg text-sm">PRO</span>
              <span>MediaBlog</span>
            </a>
            <div className="flex space-x-8 font-semibold text-sm tracking-wide text-slate-600">
              <a href="/" className="hover:text-sky-600 transition-colors">Home</a>
              <a href="/about" className="hover:text-sky-600 transition-colors">About</a>
              <a href="/contact" className="hover:text-sky-600 transition-colors">Contact</a>
            </div>
          </nav>
        </header>

        {/* Konten Utama */}
        <main className="flex-grow max-w-6xl w-full mx-auto px-6 py-10">
          {children}
        </main>

        {/* Footer Minimalis Elegan */}
        <footer className="bg-white border-t border-sky-100 py-8">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4">
            <div>
              &copy; {new Date().getFullYear()} **MediaBlog**. All Rights Reserved.
            </div>
            <div className="flex gap-6 text-xs">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Service</a>
            </div>
          </div>
        </footer>

        {/* Google Adsense Auto Ads */}
        <Script 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" 
          strategy="afterInteractive" 
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
