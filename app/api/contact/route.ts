import { NextResponse } from "next/server";
import { validateContact } from "@/lib/validation";

/**
 * Receives contact requests. Validation runs server-side as well as in the browser.
 * TODO before launch: forward the request to the business inbox (e.g. Resend, SendGrid, or a CRM webhook).
 */
export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
  if (data.company) return NextResponse.json({ ok: true }); // honeypot: silently drop bots

  const errors = validateContact(data);
  if (Object.keys(errors).length) return NextResponse.json({ ok: false, errors }, { status: 422 });

  // Integration point: send `data` to email/CRM here.
  return NextResponse.json({ ok: true });
}
