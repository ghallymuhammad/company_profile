"use client";

import React, { useState } from "react";
import { Typography, Input, Button, Card, CardBody } from "@material-tailwind/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const router = useRouter();
  const sp = useSearchParams();
  const redirect = sp.get("redirect") || "/";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    const r = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!r.ok) {
      const j = await r.json().catch(() => ({}));
      setErr(j.error || "Login gagal");
      return;
    }
    router.push(redirect);
  };

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-md">
        <Typography variant="h2" color="blue-gray" className="mb-6 text-center">Login</Typography>
        <Card>
          <CardBody>
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} crossOrigin={undefined}/>
              <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} crossOrigin={undefined}/>
              {err && <p className="text-red-600 text-sm">{err}</p>}
              <Button type="submit" color="blue">Sign In</Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
