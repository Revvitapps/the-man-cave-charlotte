import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";

type LeadPayload = {
  name: string;
  phone: string;
  email: string;
  preferredDateTime: string;
  service: string;
  notes?: string;
  company?: string;
};

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() ?? "unknown";
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const limit = checkRateLimit(ip);

  if (!limit.allowed) {
    return NextResponse.json({ message: "Too many requests" }, { status: 429 });
  }

  const payload = (await request.json()) as LeadPayload;

  if (payload.company) {
    return NextResponse.json({ message: "Spam detected" }, { status: 400 });
  }

  if (!payload.name || !payload.phone || !payload.email || !payload.preferredDateTime || !payload.service) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
  }

  console.log("[LEAD] Appointment request", {
    ...payload,
    receivedAt: new Date().toISOString(),
    source: "website-form"
  });

  // Future integration point: swap this console log with Resend or SendGrid transport.
  return NextResponse.json({ message: "Lead received" }, { status: 200 });
}
