"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateBlogPage() {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState(""); // Markdown / rich text sederhana
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    try {
      const authorEmail = getCookie("user_email") || undefined;
      const r = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          content,
          tags: tags
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean),
          authorEmail,
        }),
      });
      if (!r.ok) {
        const j = await r.json().catch(() => ({}));
        throw new Error(j.error || "Failed to create blog");
      }
      // Redirect ke halaman blog list atau detail
      router.push("/blog");
    } catch (e: unknown) {
      setErr(e instanceof Error ? e.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-blue-gray-900 mb-2">Create Blog</h2>
        <p className="text-lg text-gray-600 mb-6">
          Tulis artikel untuk Blog & Tips. Gunakan Markdown di kolom konten bila perlu (**, #, -, dll).
        </p>
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6">
            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">Tags (pisahkan dengan koma, mis. perawatan,hardware)</label>
                <input
                  id="tags"
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium">Content (Markdown)</p>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Markdown supported
                  </span>
                </div>
                <textarea
                  rows={10}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  placeholder="Tulis konten di sini..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              {err && <p className="text-red-600 text-sm">{err}</p>}
              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-2 px-4 rounded-md transition-colors"
                >
                  {loading ? "Menyimpan..." : "Publish"}
                </button>
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-2 px-4 rounded-md transition-colors"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// util sederhana baca cookie di client
function getCookie(name: string) {
  if (typeof window === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}
