import { EmailTemplate } from "@/components/Email/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// This will be called when you GET /api/send
export async function GET() {
  return NextResponse.json({
    message: `Hello world!`,
  });
}

// This will be called when you POST to /api/send
export async function POST(req: NextRequest) {
  try {
    // (optional) read data from request body, e.g. contact form submission
    const body = await req.json();
    const { toEmail, firstName, message, subject } = body;
    const { data, error } = await resend.emails.send({
      from: `Kamyab Rouhifar <${process.env.FROM_EMAIL as string}>`, // MUST be a verified sender/domain
      to: [toEmail], // test inbox Resend provides
      subject: subject ?? "Hello from Next.js + Resend",
      // Option A: use React template
      react: EmailTemplate({
        firstName: firstName ?? "Friend",
        message: message ?? "It works! 🎉",
      }),
    });

    if (error) {
      return NextResponse.json({ ok: false, error }, { status: 500 });
    }

    return NextResponse.json({ ok: true, data });
  } catch (err: unknown) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: "Unexpected error" },
      { status: 500 }
    );
  }
}
