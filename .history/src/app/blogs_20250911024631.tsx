"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "./context/AuthContext";

type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  date: string;       // ISO atau teks
  readTime: string;   // mis. "5 min read"
  cover?: string;     // /image/blogs/xxx.jpg (opsional)
};

const BLOGS: Blog[] = [
  {
    slug: "tips-merawat-casing-laptop-retak-agar-tetap-kuat",
    title: "Tips Merawat Casing Laptop Retak Agar Tetap Kuat",
    excerpt:
      "Retak kecil bisa melebar jika salah penanganan. Pelajari apa yang boleh dan tidak boleh dilakukan sebelum dibawa ke teknisi.",
    tag: "Perawatan",
    date: "2025-09-01",
    readTime: "4 min read",
    cover: "/image/blogs/blog-1.svg",
  },
  {
    slug: "engsel-laptop-patah-penyebab-dan-solusinya",
    title: "Engsel Laptop Patah: Penyebab dan Solusinya",
    excerpt:
      "Dari dudukan skrup copot sampai bracket panel rapuh—kenali gejala awal dan opsi perbaikan agar buka–tutup kembali mulus.",
    tag: "Hardware",
    date: "2025-08-27",
    readTime: "6 min read",
    cover: "/image/blogs/blog2.svg",
  },
  {
    slug: "ssd-vs-hdd-mana-yang-cocok-untuk-kerja-kantor",
    title: "SSD vs HDD: Mana yang Cocok untuk Kerja Kantor?",
    excerpt:
      "Kecepatan, ketahanan, dan biaya: bandingkan SSD dan HDD untuk kebutuhan harian kantor, plus rekomendasi kapasitasnya.",
    tag: "Upgrade",
    date: "2025-08-20",
    readTime: "5 min read",
    cover: "/image/blogs/blog3.svg",
  },
  {
    slug: "thermal-cleaning-dan-pasta-apa-pengaruhnya",
    title: "Thermal Cleaning & Pasta: Apa Pengaruhnya?",
    excerpt:
      "Debu pada heatsink dan pasta kering bikin laptop cepat panas. Ini tanda-tandanya dan interval servis yang disarankan.",
    tag: "Performa",
    date: "2025-08-15",
    readTime: "5 min read",
    cover: "/image/blogs/blog4.svg",
  },
  {
    slug: "checklist-install-ulang-os-yang-aman",
    title: "Checklist Install Ulang OS yang Aman",
    excerpt:
      "Backup data, driver, lisensi, hingga partisi: panduan ringkas supaya reinstall OS berjalan aman dan minim risiko.",
    tag: "Sistem",
    date: "2025-08-10",
    readTime: "7 min read",
    cover: "/image/blogs/blog5.svg",
  },
  {
    slug: "setup-jaringan-untuk-umkm",
    title: "Setup Jaringan untuk UMKM: Stabil & Hemat",
    excerpt:
      "Topologi sederhana, VLAN ringan, dan tips sharing printer agar operasional kantor lebih rapi dan mudah dikelola.",
    tag: "Jaringan",
    date: "2025-08-05",
    readTime: "6 min read",
    cover: "/image/blogs/blog6.svg",
  },
  {
    slug: "strategi-backup-3-2-1",
    title: "Strategi Backup 3-2-1 untuk Data Usaha",
    excerpt:
      "Satu data—tiga salinan, dua media, satu offsite. Implementasi praktis untuk melindungi file penting bisnis Anda.",
    tag: "Backup",
    date: "2025-07-30",
    readTime: "4 min read",
    cover: "/image/blogs/blog7.svg",
  },
  {
    slug: "keamanan-siber-dasar-untuk-kantor",
    title: "Keamanan Siber Dasar untuk Kantor",
    excerpt:
      "Password manager, MFA, phishing awareness, dan patching: fondasi keamanan yang wajib ada di lingkungan kerja.",
    tag: "Security",
    date: "2025-07-25",
    readTime: "6 min read",
    cover: "/image/blogs/blog8.svg",
  },
];

function BlogCard({ b }: { b: Blog }) {
  const [imageError, setImageError] = React.useState(false);

  return (
    <div className="h-full overflow-hidden shadow-md bg-white rounded-lg">
      <div className="relative h-40 w-full bg-gray-100">
        {/* Jika file cover ada di /public/image/blogs/... akan tampil.
            Kalau belum ada, gradient fallback tetap rapi. */}
        {b.cover && !imageError ? (
          <Image
            src={b.cover}
            alt={b.title}
            fill
            sizes="(min-width:1280px) 320px, 50vw"
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
            <div className="text-center text-blue-600">
              <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              <p className="text-xs font-medium">{b.tag}</p>
            </div>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {b.tag}
          </span>
          <p className="text-sm text-gray-500">
            {new Date(b.date).toLocaleDateString("id-ID", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
        <h6 className="text-lg font-semibold text-blue-gray-900">
          {b.title}
        </h6>
        <p className="text-gray-600 text-sm leading-relaxed">
          {b.excerpt}
        </p>
      </div>
      <div className="px-6 pb-6 pt-0">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            {b.readTime}
          </p>
          <Link
            href={`/blog/${b.slug}`}
            className="text-blue-600 hover:underline font-medium"
          >
            Baca selengkapnya →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function BlogListPage() {
  return (
    <section id="blog" className="py-28 px-8">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-gray-900 mb-2">
            Blog & Tips
          </h2>
          <p className="text-lg text-gray-500">
            Artikel ringan seputar perbaikan casing laptop, upgrade performa, jaringan kantor,
            hingga keamanan siber untuk UMKM.
          </p>
        </div>

        {/* Grid: 4 kolom × 2 baris (8 item) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {BLOGS.map((b) => (
            <BlogCard key={b.slug} b={b} />
          ))}
        </div>

        {/* (Opsional) Pagination sederhana */}
        {/* <div className="mt-10 flex justify-center gap-2">
          <Button variant="outlined" color="blue" size="sm">Prev</Button>
          <Button color="blue" size="sm">Next</Button>
        </div> */}
      </div>
    </section>
  );
}
