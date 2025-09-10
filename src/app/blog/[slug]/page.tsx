"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

// Sample blog data - in a real app, you'd fetch this from your API
const SAMPLE_BLOGS = {
  "cara-memperbaiki-engsel-laptop": {
    title: "Cara Memperbaiki Engsel Laptop yang Patah",
    content: `
# Cara Memperbaiki Engsel Laptop yang Patah

Engsel laptop yang patah adalah masalah umum yang sering dialami pengguna laptop. Berikut adalah panduan lengkap untuk memperbaikinya.

## Alat yang Dibutuhkan

- Obeng kecil
- Lem epoxy atau super glue
- Bracket pengganti (jika diperlukan)
- Isolasi kecil

## Langkah-langkah Perbaikan

### 1. Diagnosa Kerusakan
Pertama-tama, periksa jenis kerusakan engsel:
- Engsel lepas dari casing
- Engsel patah
- Sekrup engsel kendor

### 2. Bongkar Casing
Lepaskan panel belakang layar dengan hati-hati menggunakan obeng kecil.

### 3. Perbaikan
Tergantung jenis kerusakan, lakukan:
- **Jika engsel lepas**: Pasang kembali dengan sekrup yang sesuai
- **Jika engsel patah**: Gunakan lem epoxy untuk menyambung kembali
- **Jika bracket rusak**: Ganti dengan bracket baru

### 4. Testing
Setelah perbaikan selesai, test buka-tutup laptop beberapa kali untuk memastikan engsel bekerja dengan baik.

## Tips Pencegahan

- Jangan membuka/menutup laptop dengan kasar
- Pegang laptop dari tengah saat membuka
- Lakukan maintenance rutin

Jika masalah masih berlanjut, sebaiknya konsultasikan dengan teknisi profesional.
    `,
    tag: "Perbaikan",
    date: "2024-01-15",
    readTime: "5 min read",
    cover: "/image/blogs/blog-1.svg",
  },
  "upgrade-ssd-laptop": {
    title: "Upgrade SSD Laptop untuk Performa Maksimal",
    content: `
# Upgrade SSD Laptop untuk Performa Maksimal

Upgrade SSD adalah salah satu cara paling efektif untuk meningkatkan performa laptop. Panduan ini akan membantu Anda melakukan upgrade dengan benar.

## Keuntungan Upgrade SSD

- Boot time lebih cepat
- Loading aplikasi lebih responsif
- Konsumsi daya lebih hemat
- Lebih tahan terhadap goncangan

## Persiapan

### Tools yang Dibutuhkan
- SSD baru
- Obeng
- External enclosure (untuk cloning)
- Software cloning

### Backup Data
Pastikan semua data penting sudah di-backup sebelum memulai.

## Proses Upgrade

### 1. Clone Hard Drive Lama
Gunakan software seperti Macrium Reflect atau EaseUS Todo Backup untuk clone drive lama ke SSD baru.

### 2. Bongkar Laptop
- Matikan laptop dan lepas baterai
- Buka panel belakang
- Lepas hard drive lama dengan hati-hati

### 3. Pasang SSD Baru
- Pasang SSD di slot yang sama
- Kencangkan sekrup dengan pas
- Pasang kembali panel belakang

### 4. First Boot
- Nyalakan laptop
- Check apakah sistem berjalan normal
- Verifikasi semua data tersedia

## Optimasi Pasca Upgrade

- Enable AHCI mode di BIOS
- Update driver
- Disable defragmentation (tidak perlu untuk SSD)
- Enable TRIM

Dengan mengikuti panduan ini, laptop Anda akan terasa jauh lebih cepat dan responsif!
    `,
    tag: "Upgrade",
    date: "2024-01-10",
    readTime: "7 min read",
    cover: "/image/blogs/blog2.svg",
  },
  "tips-merawat-casing-laptop": {
    title: "Tips Merawat Casing Laptop Agar Awet",
    content: `
# Tips Merawat Casing Laptop Agar Awet

Casing laptop yang terawat dengan baik tidak hanya terlihat menarik, tetapi juga memperpanjang umur laptop Anda.

## Pembersihan Rutin

### Pembersihan Harian
- Lap dengan kain mikrofiber kering
- Hindari cairan yang mengenai casing
- Tutup laptop saat tidak digunakan

### Pembersihan Mingguan
- Gunakan isopropyl alcohol 70%
- Bersihkan dengan cotton bud di area sulit dijangkau
- Lap hingga kering sempurna

## Perlindungan Fisik

### Gunakan Pelindung
- Skin protector untuk area palm rest
- Screen protector untuk layar
- Keyboard protector

### Hindari Hal Berikut
- Meletakkan benda berat di atas laptop
- Menutup laptop dengan benda di keyboard
- Membawa laptop tanpa tas pelindung

## Perawatan Khusus Area Rawan

### Engsel
- Jangan membuka laptop melebihi 180 derajat
- Buka dengan lembut menggunakan kedua tangan
- Periksa berkala apakah ada kendor

### Port dan Konektor
- Tutup dengan dust plug saat tidak digunakan
- Bersihkan dengan compressed air
- Jangan memaksa memasukkan kabel

### Ventilasi
- Bersihkan debu secara rutin
- Gunakan cooling pad jika perlu
- Pastikan aliran udara tidak terhalang

## Penyimpanan yang Benar

- Simpan di tempat kering dan sejuk
- Hindari paparan sinar matahari langsung
- Gunakan silica gel jika perlu

Dengan perawatan yang tepat, casing laptop Anda akan tetap terlihat baru dan berfungsi optimal untuk waktu yang lama.
    `,
    tag: "Perawatan",
    date: "2024-01-05",
    readTime: "4 min read",
    cover: "/image/blogs/blog3.svg",
  },
};

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const blog = SAMPLE_BLOGS[slug as keyof typeof SAMPLE_BLOGS];

  if (!blog) {
    return (
      <section className="py-24 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Tidak Ditemukan</h1>
          <p className="text-lg text-gray-600 mb-8">Maaf, artikel yang Anda cari tidak tersedia.</p>
          <Link
            href="/blog"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors"
          >
            Kembali ke Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              {blog.tag}
            </span>
            <span className="text-gray-500 text-sm">
              {new Date(blog.date).toLocaleDateString("id-ID", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-500 text-sm">{blog.readTime}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{blog.title}</h1>
        </div>

        {/* Featured Image */}
        {blog.cover && (
          <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={blog.cover}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {blog.content.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('# ')) {
              return <h1 key={index} className="text-3xl font-bold text-gray-900 mt-8 mb-4">{paragraph.slice(2)}</h1>;
            } else if (paragraph.startsWith('## ')) {
              return <h2 key={index} className="text-2xl font-semibold text-gray-900 mt-6 mb-3">{paragraph.slice(3)}</h2>;
            } else if (paragraph.startsWith('### ')) {
              return <h3 key={index} className="text-xl font-semibold text-gray-900 mt-4 mb-2">{paragraph.slice(4)}</h3>;
            } else if (paragraph.startsWith('- ')) {
              return <li key={index} className="text-gray-700 ml-4">{paragraph.slice(2)}</li>;
            } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return <p key={index} className="text-gray-700 font-semibold mb-2">{paragraph.slice(2, -2)}</p>;
            } else if (paragraph.trim()) {
              return <p key={index} className="text-gray-700 mb-4 leading-relaxed">{paragraph}</p>;
            }
            return null;
          })}
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Kembali ke Blog
          </Link>
        </div>
      </div>
    </article>
  );
}
