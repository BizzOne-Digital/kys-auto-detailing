import { NextResponse } from "next/server";
import { validateBooking } from "@/lib/validation";

/**
 * Receives appointment REQUESTS (not confirmed bookings; there is no live calendar).
 * TODO before launch: forward the request to the business inbox, CRM, or calendar tool.
 */
export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
  if (data.company) return NextResponse.json({ ok: true }); // honeypot

  const errors = validateBooking(data);
  if (Object.keys(errors).length) return NextResponse.json({ ok: false, errors }, { status: 422 });

  // Integration point: send `data` to email/CRM/calendar here.
  return NextResponse.json({ ok: true });
}
