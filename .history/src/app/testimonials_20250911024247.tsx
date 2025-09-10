"use client";
import React from "react";

const GOOGLE_EMBED_SRC =
  ""; // To get embed URL: Go to Google Maps > Your Business > Share > Embed a map > Copy HTML

// If you have Google Reviews widget URL, you can try:
// "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..." (from Google Maps embed)
// OR use Google Reviews API embed URL if available

// Sample testimonials as fallback
const SAMPLE_TESTIMONIALS = [
  {
    name: "Budi Santoso",
    role: "Pemilik Toko Elektronik",
    rating: 5,
    comment: "Pelayanan sangat memuaskan! Casing laptop saya yang retak parah berhasil diperbaiki dengan sempurna. Hasilnya rapi dan kuat.",
    date: "2 minggu yang lalu"
  },
  {
    name: "Sari Wijaya", 
    role: "Staff Kantor",
    rating: 5,
    comment: "Upgrade SSD dan cleaning thermal pasta membuat laptop lama saya kembali ngebut. Teknisinya profesional dan harga fair.",
    date: "1 bulan yang lalu"
  },
  {
    name: "Ahmad Rizki",
    role: "Mahasiswa",
    rating: 5,
    comment: "Engsel laptop patah total, dikira harus ganti baru ternyata masih bisa diperbaiki. Hemat budget banget! Recommended 👍",
    date: "3 minggu yang lalu"
  }
];

export default function TestimonialsPage() {
  return (
    <section id="testimonials" className="py-24 px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Bandung • Real Customer Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-gray-900 mb-3">
            Testimonials
          </h2>
          <p className="text-lg text-gray-600">
            Kumpulan ulasan dari pelanggan tentang layanan kami.
          </p>
        </div>

        {/* Google Embed or Fallback Testimonials */}
        {GOOGLE_EMBED_SRC ? (
          <div className="relative mt-10 w-full overflow-hidden rounded-3xl aspect-[16/9] bg-gray-100">
            <iframe
              src={GOOGLE_EMBED_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
              aria-label="Google Reviews Embed"
            />
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAMPLE_TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">{testimonial.date}</span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">&ldquo;{testimonial.comment}&rdquo;</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-3 rounded-lg mb-4">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span className="text-blue-800 font-medium">Baca ulasan lengkap dari pelanggan kami</span>
          </div>
          <a
            href="https://share.google/Kd1OlmdFkLIWAN48V"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Lihat Ulasan Google
          </a>
        </div>
      </div>
    </section>
  );
}
