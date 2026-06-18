export default function ContactPage() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">Hubungi Saya</h1>
      <p className="text-gray-600 mb-6">Punya pertanyaan atau tawaran kerja sama? Silakan isi formulir di bawah ini.</p>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email Anda</label>
          <input type="email" className="w-full border border-gray-200 p-2 rounded-lg bg-blue-50/50" placeholder="nama@email.com" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Pesan</label>
          <textarea className="w-full border border-gray-200 p-2 rounded-lg bg-blue-50/50 h-32" placeholder="Tulis pesan Anda di sini..."></textarea>
        </div>
        <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">Kirim Pesan</button>
      </form>
    </div>
  );
}
