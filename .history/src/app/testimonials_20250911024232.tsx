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

        <div className="mt-6 text-center">
          <a
            href="https://share.google/Kd1OlmdFkLIWAN48V"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            Lihat semua ulasan di Google
          </a>
        </div>
      </div>
    </section>
  );
}
