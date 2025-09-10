"use client";
import React from "react";

const GOOGLE_EMBED_SRC =
  "PASTE-URL-EMBED-DARI-GOOGLE-DISINI"; // contoh: https://www.google.com/maps/embed?pb=...

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
            Kumpulan ulasan dari pelanggan di Google tentang layanan kami.
          </p>
        </div>

        {/* Full-bleed style tapi tetap rapi */}
        <div className="relative mt-10 w-full overflow-hidden rounded-3xl aspect-[16/9] bg-gray-100">
          <iframe
            src={GOOGLE_EMBED_SRC}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
            aria-label="Google Reviews Embed"
          />
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://share.google/pC5a64VasBpeSv7vG"
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
