import { createHash } from "crypto";
import { getContactInterestOptions } from "@/lib/content";
import { contactSchema, quickContactSchema } from "@/lib/validation";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { ContactFormValues } from "@/lib/validation";

function interestLabels(values: string[]): string {
  const options = getContactInterestOptions();
  return values
    .map((v) => options.find((o) => o.value === v)?.label ?? v)
    .join(", ");
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  const quick = quickContactSchema.safeParse(body);

  let data: ContactFormValues | null = null;
  if (parsed.success) {
    data = parsed.data;
  } else if (quick.success) {
    data = {
      ...quick.data,
      businessName: "Quick CTA enquiry",
      phone: "—",
      interests: ["not-sure"],
    };
  }

  if (!data) {
    return NextResponse.json(
      { error: parsed.error?.issues[0]?.message ?? "Invalid form data." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return NextResponse.json(
      {
        error:
          "Contact form is not configured. Set RESEND_API_KEY, RESEND_FROM, and CONTACT_TO_EMAIL.",
      },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);

  const bucket = Math.floor(Date.now() / 60_000);
  const idempotencyKey = createHash("sha256")
    .update(`${data.email}:${bucket}:${data.message.slice(0, 32)}`)
    .digest("hex")
    .slice(0, 32);

  const html = `
    <h2>New contact form submission — AdCo Group</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Business:</strong> ${escapeHtml(data.businessName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
    <p><strong>Interests:</strong> ${escapeHtml(interestLabels(data.interests))}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(data.message).replace(/\n/g, "<br />")}</p>
  `;

  const { error } = await resend.emails.send(
    {
      from,
      to: [to],
      replyTo: data.email,
      subject: `AdCo contact — ${data.businessName}`,
      html,
    },
    { idempotencyKey },
  );

  if (error) {
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message: "Your message has been sent successfully.",
  });
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
