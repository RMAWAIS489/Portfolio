import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, service, message } = body as {
      name: string;
      email: string;
      service: string;
      message: string;
    };

    /* ── Basic validation ── */
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    /* ── Nodemailer transporter (Gmail SMTP) ── */
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    /* ── Email to you (portfolio owner) ── */
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `[Portfolio] New enquiry — ${service}`,
      html: `
        <div style="font-family:monospace;background:#021114;color:#00E5FF;padding:24px;border:1px solid #00E5FF;">
          <h2 style="margin:0 0 16px;color:#b8e063;">NEW CONTACT REQUEST</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:6px 0;color:rgba(0,229,255,0.6);width:120px;">NAME</td>
              <td style="padding:6px 0;color:#fff;">${name}</td>
            </tr>
            <tr>
              <td style="padding:6px 0;color:rgba(0,229,255,0.6);">EMAIL</td>
              <td style="padding:6px 0;color:#fff;">${email}</td>
            </tr>
            <tr>
              <td style="padding:6px 0;color:rgba(0,229,255,0.6);">SERVICE</td>
              <td style="padding:6px 0;color:#fff;">${service}</td>
            </tr>
            <tr>
              <td style="padding:6px 0;color:rgba(0,229,255,0.6);vertical-align:top;">MESSAGE</td>
              <td style="padding:6px 0;color:#fff;white-space:pre-line;">${message}</td>
            </tr>
          </table>
        </div>
      `,
    });

    /* ── Auto-reply to the sender ── */
    await transporter.sendMail({
      from: `"Muhammad Awais" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Got your message — I'll be in touch soon",
      html: `
        <div style="font-family:monospace;background:#021114;color:#00E5FF;padding:24px;border:1px solid #00E5FF;">
          <h2 style="margin:0 0 12px;color:#b8e063;">MESSAGE RECEIVED</h2>
          <p style="color:#ccc;line-height:1.6;">Hi ${name},</p>
          <p style="color:#ccc;line-height:1.6;">
            Thanks for reaching out about <strong style="color:#00E5FF;">${service}</strong>.
            I've received your message and will get back to you shortly.
          </p>
          <p style="color:rgba(0,229,255,0.5);font-size:12px;margin-top:24px;">— Muhammad Awais</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[sendemail] error:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
