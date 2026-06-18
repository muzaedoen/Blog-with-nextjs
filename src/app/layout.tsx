import type { Metadata } from "next";
import "./globals.css"; // Pastikan Tailwind CSS sudah terimport

export const metadata: Metadata = {
  title: "Premium Next.js Blog",
  description: "Blog super cepat dengan performa premium",
  // 7. FITUR GOOGLE SITE VERIFIKASI (Ganti kode di bawah dengan kode verifikasi kamu)
  verification: {
    google: "KODE_VERIFIKASI_GOOGLE_ADSENSE_ATAU_SEARCH_CONSOLE_KAMU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      {/* 5. WARNA BACKGROUND BIRU MUDA (bg-blue-50) */}
      <body className="bg-blue-50 text-gray-800 flex flex-col min-vh-100 min-h-screen">
        
        {/* 3. FITUR HOME, ABOUT, CONTACT (NAVIGASI) */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <nav className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" className="text-xl font-bold text-blue-600 tracking-tight">MyBlog.</a>
            <div className="flex space-x-6 font-medium">
              <a href="/" className="hover:text-blue-600 transition">Home</a>
              <a href="/about" className="hover:text-blue-600 transition">About</a>
              <a href="/contact" className="hover:text-blue-600 transition">Contact</a>
            </div>
          </nav>
        </header>

        {/* Konten Utama */}
        <main className="flex-grow max-w-5xl w-full mx-auto px-4 py-8">
          {children}
        </main>

        {/* 3. FOOTER + COPYRIGHT */}
        <footer className="bg-white border-t border-blue-100 py-6 mt-12">
          <div className="max-w-5xl mx-auto px-4 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} MyBlog. All Rights Reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
