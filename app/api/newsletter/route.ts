import { newsletterSchema } from "@/lib/validation";
import { NextResponse } from "next/server";

/** TODO: MailerLite or Resend Audiences — currently validates and acknowledges only */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = newsletterSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid email." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    message: "Thanks — we'll be in touch when newsletter signup goes live.",
  });
}
