// app/api/auth/route.ts
import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic"; // ensure no caching + marks as module

const client_id = process.env.GITHUB_CLIENT_ID ?? "";
const client_secret = process.env.GITHUB_CLIENT_SECRET ?? "";

export async function GET(req: NextRequest) {
  if (!client_id || !client_secret) {
    return new Response("Missing GITHUB_CLIENT_ID/SECRET", { status: 500 });
  }

  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  if (!code) return new Response("Missing ?code", { status: 400 });

  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({ client_id, client_secret, code }),
    cache: "no-store",
  });

  const data: { access_token?: string; error?: string; error_description?: string } =
    await tokenRes.json();

  if (!data.access_token) {
    return new Response(JSON.stringify(data), { status: 400 });
  }

  return Response.json({ token: data.access_token });
}
