"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

export default function CreateBlogPage() {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState(""); // Markdown / rich text sederhana
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const router = useRouter();
  const { isAuthenticated, user, isLoading } = useAuth();

  // Redirect if not authenticated or still loading
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login?redirect=/blog/create");
    }
  }, [isAuthenticated, isLoading, router]);

  // Show loading while checking authentication
  if (isLoading) {
    return (
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Checking authentication...</p>
        </div>
      </section>
    );
  }

  // Show unauthorized message if not logged in
  if (!isAuthenticated) {
    return (
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-red-800 mb-2">Access Denied</h2>
            <p className="text-red-600">Please log in to create blog posts.</p>
          </div>
        </div>
      </section>
    );
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    
    try {
      // For demo purposes, we'll simulate saving the blog
      // In a real app, this would call your backend API
      await new Promise(resolve => setTimeout(resolve, 1000));

      // For demo, just show success and redirect
      alert(`Blog post "${title}" created successfully! (This is a demo - no actual storage)`);
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
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-blue-gray-900 mb-2">Create Blog Post</h2>
          <p className="text-lg text-gray-600">
            Share your knowledge about laptop repair, technology, or business tips.
          </p>
          <div className="mt-2 inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Logged in as: {user?.name} ({user?.role})
          </div>
        </div>

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
                  placeholder="Tulis konten di sini... Gunakan Markdown untuk formatting (**, #, -, dll)."
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
