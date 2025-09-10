"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Sample blog data - you can replace this with actual data from your API
const SAMPLE_BLOGS = [
  {
    slug: "cara-memperbaiki-engsel-laptop",
    title: "Cara Memperbaiki Engsel Laptop yang Patah",
    excerpt: "Panduan lengkap untuk memperbaiki engsel laptop yang rusak atau macet dengan tools sederhana.",
    tag: "Perbaikan",
    date: "2024-01-15",
    readTime: "5 min read",
    cover: "/image/blogs/blog-1.svg",
  },
  {
    slug: "upgrade-ssd-laptop",
    title: "Upgrade SSD Laptop untuk Performa Maksimal",
    excerpt: "Langkah-langkah mudah upgrade SSD laptop untuk meningkatkan kecepatan dan responsivitas sistem.",
    tag: "Upgrade",
    date: "2024-01-10",
    readTime: "7 min read",
    cover: "/image/blogs/blog2.svg",
  },
  {
    slug: "tips-merawat-casing-laptop",
    title: "Tips Merawat Casing Laptop Agar Awet",
    excerpt: "Cara mudah merawat casing laptop agar tetap terlihat baru dan terhindar dari kerusakan.",
    tag: "Perawatan",
    date: "2024-01-05",
    readTime: "4 min read",
    cover: "/image/blogs/blog3.svg",
  },
];

export default function BlogListPage() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog & Tips</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Artikel dan panduan seputar perbaikan laptop, upgrade hardware, dan tips perawatan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SAMPLE_BLOGS.map((blog) => (
            <article key={blog.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 bg-gray-100">
                {blog.cover && (
                  <Image
                    src={blog.cover}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {blog.tag}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date(blog.date).toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link href={`/blog/${blog.slug}`} className="hover:text-blue-600 transition-colors">
                    {blog.title}
                  </Link>
                </h2>
                <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{blog.readTime}</span>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Baca selengkapnya →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog/create"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors"
          >
            Tulis Artikel Baru
          </Link>
        </div>
      </div>
    </section>
  );
}
