import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createHash } from "node:crypto";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const maxBodyLength = 12_000;

// Best-effort process-local protection. Production must also limit requests at
// the hosting edge; forwarded addresses must be overwritten by a trusted proxy.
const attempts = new Map<string, { count: number; expires: number }>();
function rateLimited(request: Request) {
  const now = Date.now();
  for (const [key, value] of attempts)
    if (value.expires <= now) attempts.delete(key);
  const address =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const key = createHash("sha256").update(address).digest("hex");
  const entry = attempts.get(key);
  if (entry) return ++entry.count > 5;
  if (attempts.size >= 1000) return true;
  attempts.set(key, { count: 1, expires: now + 60_000 });
  return false;
}

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  message?: unknown;
  website?: unknown;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  if (rateLimited(request)) {
    return NextResponse.json(
      { error: "Too many requests." },
      { status: 429, headers: { "Retry-After": "60" } },
    );
  }
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ error: "JSON required." }, { status: 415 });
  }
  try {
    const length = Number(request.headers.get("content-length"));

    if (Number.isFinite(length) && length > maxBodyLength) {
      return NextResponse.json(
        { error: "Request is too large." },
        { status: 413 },
      );
    }

    const reader = request.body?.getReader();
    if (!reader)
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    const chunks: Uint8Array[] = [];
    let bytes = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > maxBodyLength) {
        await reader.cancel();
        return NextResponse.json(
          { error: "Request is too large." },
          { status: 413 },
        );
      }
      chunks.push(value);
    }
    const raw = Buffer.concat(chunks).toString("utf8");

    if (raw.length > maxBodyLength) {
      return NextResponse.json(
        { error: "Request is too large." },
        { status: 413 },
      );
    }

    const payload = JSON.parse(raw) as ContactPayload;

    if (
      !payload ||
      typeof payload !== "object" ||
      Array.isArray(payload) ||
      ["name", "email", "message"].some(
        (key) => typeof payload[key as keyof ContactPayload] !== "string",
      ) ||
      [payload.company, payload.website].some(
        (value) => value != null && typeof value !== "string",
      )
    ) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    const name = clean(payload.name);
    const email = clean(payload.email);
    const company = clean(payload.company);
    const message = clean(payload.message);
    const website = clean(payload.website);

    // Reject honeypot entries without claiming successful delivery.
    if (website) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    if (
      name.length < 2 ||
      name.length > 100 ||
      /[\r\n]/.test(name) ||
      !emailPattern.test(email) ||
      email.length > 254 ||
      company.length > 150 ||
      message.length < 10 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        {
          error: "Please check your details " + "and try again.",
        },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !from) {
      console.error("Contact email is not configured.");

      return NextResponse.json(
        {
          error: "Contact service is " + "temporarily unavailable.",
        },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);

    const result = await resend.emails
      .send({
        from,
        to: ["info@tacirpolimer.com"],
        replyTo: email,
        subject: "Website Inquiry - " + name,
        text: [
          "New website inquiry",
          "",
          `Name: ${name}`,
          `Email: ${email}`,
          `Company: ${company || "-"}`,
          "",
          "Message:",
          message,
        ].join("\n"),
      })
      .catch(() => null);

    if (!result || result.error || !result.data?.id) {
      console.error(
        "Contact email failed:",
        result?.error?.name || "Provider unavailable",
      );

      return NextResponse.json(
        {
          error: "Your message could not " + "be sent. Please try again.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch {
    return NextResponse.json(
      {
        error: "Unable to process your " + "request. Please try again.",
      },
      { status: 400 },
    );
  }
}
