import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const { email, password } = body;
  // Demo saja: validasi sederhana
  if (!email || !password) {
    return NextResponse.json({ error: "Email & password wajib" }, { status: 400 });
  }
  // TODO: ganti validasi sesuai sistem auth kamu
  const res = NextResponse.json({ ok: true });
  res.cookies.set("auth", "true", { httpOnly: true, path: "/" });
  res.cookies.set("user_email", email, { httpOnly: true, path: "/" });
  return res;
}
