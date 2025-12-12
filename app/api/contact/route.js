import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  const { name, email, message } = body;

  // Validation
  if (!name || !email || !message) {
    return new Response("Missing required fields", { status: 400 });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response("Invalid email address", { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.MAIL_USER}>`,
      replyTo: email,
      to: process.env.MAIL_USER,
      subject: `New Contact Request - ${name}`,
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #4F46E5;">📧 New Contact Request</h2>
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #4F46E5;">
          <p><strong>👤 Name:</strong> ${name}</p>
          <p><strong>📧 Email:</strong> ${email}</p>
          <p><strong>📝 Message:</strong></p>
          <p style="background: white; padding: 15px; border-radius: 5px; border: 1px solid #e2e8f0;">${message}</p>
        </div>
        <p style="margin-top: 20px; color: #64748b; font-size: 12px;">
          Sent from your portfolio contact form
        </p>
      </div>
      `,
    });

    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error("Email error:", err);
    return new Response("Error sending email", { status: 500 });
  }
}