import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Premium Centered Blog",
  description: "Blog kotak besar premium dengan fitur Dark Mode",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      {/* Background biru muda di light mode, dan abu-abu gelap di dark mode */}
      <body className="bg-blue-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100 antialiased flex flex-col min-h-screen transition-colors duration-300">
        
        {/* Header Presisi di Tengah */}
        <header className="bg-white/90 dark:bg-slate-800/90 border-b border-blue-100 dark:border-slate-700 sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="/" className="text-2xl font-black text-blue-600 dark:text-blue-400 tracking-tight">
              MYBLOG
            </a>
            <div className="flex space-x-6 font-bold text-sm">
              <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Home</a>
              <a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</a>
              <a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
            </div>
          </div>
        </header>

        {/* Konten Utama - Di-center dengan max-w-4xl mx-auto */}
        <main className="flex-grow max-w-4xl w-full mx-auto px-6 py-10">
          {children}
        </main>

        {/* Footer Presisi di Tengah */}
        <footer className="bg-white dark:bg-slate-800 border-t border-blue-100 dark:border-slate-700 py-6">
          <div className="max-w-4xl mx-auto px-6 text-center text-sm text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} **MYBLOG**. All Rights Reserved.
          </div>
        </footer>

        {/* Script Iklan */}
        <Script 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" 
          strategy="afterInteractive" 
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
