
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const emailPattern =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const maxBodyLength = 12_000;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  message?: unknown;
  website?: unknown;
};

function clean(value: unknown) {
  return typeof value === "string"
    ? value.trim()
    : "";
}

export async function POST(
  request: Request,
) {
  try {
    const length = Number(
      request.headers.get("content-length"),
    );

    if (
      Number.isFinite(length) &&
      length > maxBodyLength
    ) {
      return NextResponse.json(
        { error: "Request is too large." },
        { status: 413 },
      );
    }

    const raw = await request.text();

    if (raw.length > maxBodyLength) {
      return NextResponse.json(
        { error: "Request is too large." },
        { status: 413 },
      );
    }

    const payload = JSON.parse(
      raw,
    ) as ContactPayload;

    const name = clean(payload.name);
    const email = clean(payload.email);
    const company = clean(payload.company);
    const message = clean(payload.message);
    const website = clean(payload.website);

    // Honeypot: silently discard bot entries.
    if (website) {
      return NextResponse.json({
        success: true,
      });
    }

    if (
      name.length < 2 ||
      name.length > 100 ||
      !emailPattern.test(email) ||
      email.length > 254 ||
      company.length > 150 ||
      message.length < 10 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        {
          error:
            "Please check your details " +
            "and try again.",
        },
        { status: 400 },
      );
    }

    const apiKey =
      process.env.RESEND_API_KEY;

    const from =
      process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !from) {
      console.error(
        "Contact email is not configured.",
      );

      return NextResponse.json(
        {
          error:
            "Contact service is " +
            "temporarily unavailable.",
        },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);

    const { error } =
      await resend.emails.send({
        from,
        to: ["info@tacirpolimer.com"],
        replyTo: email,
        subject:
          "Website Inquiry - " + name,
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
      });

    if (error) {
      console.error(
        "Contact email failed:",
        error.name,
      );

      return NextResponse.json(
        {
          error:
            "Your message could not " +
            "be sent. Please try again.",
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
        error:
          "Unable to process your " +
          "request. Please try again.",
      },
      { status: 400 },
    );
  }
}
