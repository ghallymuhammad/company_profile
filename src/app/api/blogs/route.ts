import { NextResponse } from "next/server";

const APP_ID = process.env.BACKENDLESS_APP_ID!;
const API_KEY = process.env.BACKENDLESS_API_KEY!;
const BASE = `https://api.backendless.com/${APP_ID}/${API_KEY}/data/Blogs`;

export async function GET() {
  // ambil 20 terbaru
  const url = `${BASE}?pageSize=20&sortBy=created%20desc`;
  const r = await fetch(url, { cache: "no-store" });
  if (!r.ok) {
    const txt = await r.text();
    return NextResponse.json({ error: txt }, { status: 500 });
  }
  const data = await r.json();
  return NextResponse.json({ items: data });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const { title, content, tags, authorEmail } = body || {};
  if (!title || !content) {
    return NextResponse.json({ error: "title & content wajib" }, { status: 400 });
  }
  // slug sederhana
  const slug =
    title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-") + "-" + Date.now().toString().slice(-6);

  const payload = {
    title,
    content,
    tags: Array.isArray(tags) ? tags.join(",") : (tags || ""),
    slug,
    authorEmail: authorEmail || null,
  };

  const r = await fetch(BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!r.ok) {
    const txt = await r.text();
    return NextResponse.json({ error: txt }, { status: 500 });
  }
  const data = await r.json();
  return NextResponse.json({ ok: true, item: data });
}
