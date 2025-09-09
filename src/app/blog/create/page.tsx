"use client";

import React, { useState } from "react";
import { Typography, Input, Textarea, Button, Chip, Card, CardBody } from "@material-tailwind/react";
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
      const j = await r.json();
      if (!r.ok || !j.ok) {
        throw new Error(j.error || "Gagal menyimpan blog");
      }
      router.push("/blog"); // kembali ke list
    } catch (e: any) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        {/* @ts-ignore */}
        <Typography variant="h2" color="blue-gray" className="mb-2">Create Blog</Typography>
        {/* @ts-ignore */}
        <Typography variant="lead" className="!text-gray-600 mb-6">
          Tulis artikel untuk Blog & Tips. Gunakan Markdown di kolom konten bila perlu (**, #, -, dll).
        </Typography>
        {/* @ts-ignore */}
        <Card>
          {/* @ts-ignore */}
          <CardBody>
            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              {/* @ts-ignore */}
              <Input label="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
              {/* @ts-ignore */}
              <Input label="Tags (pisahkan dengan koma, mis. perawatan,hardware)" value={tags} onChange={(e) => setTags(e.target.value)} />
              <div>
                <div className="flex items-center justify-between mb-2">
                  {/* @ts-ignore */}
                  <Typography variant="small" className="font-medium">Content (Markdown)</Typography>
                  {/* @ts-ignore */}
                  <Chip value="Markdown supported" size="sm" className="w-fit" />
                </div>
                {/* @ts-ignore */}
                <Textarea rows={10} value={content} onChange={(e) => setContent(e.target.value)} required placeholder="Tulis konten di sini..." />
              </div>
              {err && <p className="text-red-600 text-sm">{err}</p>}
              <div className="flex gap-3">
                {/* @ts-ignore */}
                <Button type="submit" color="blue" disabled={loading}>
                  {loading ? "Menyimpan..." : "Publish"}
                </Button>
                {/* @ts-ignore */}
                <Button variant="outlined" color="blue" onClick={() => router.back()}>
                  Batal
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
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
