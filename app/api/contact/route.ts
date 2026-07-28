import { NextResponse } from "next/server";

export const runtime = "edge";
export const dynamic = "force-dynamic";

function sanitizeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function stripNewlines(str: string): string {
  return str.replace(/[\r\n]/g, " ");
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));

    // Honeypot spam check
    if (body.b_hp_check) {
      return NextResponse.json({ success: true, message: "Message sent." }, { status: 200 });
    }

    const rawName = body.name || "";
    const rawEmail = body.email || "";
    const rawTopic = body.topic || "General Inquiry";
    const rawMessage = body.message || "";
    const autoSubscribe = Boolean(body.autoSubscribe);

    const name = rawName.trim();
    const email = rawEmail.trim().toLowerCase();
    const topic = rawTopic.trim() || "General Inquiry";
    const message = rawMessage.trim();

    // 1. Server Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields (name, email, and message)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.length > 254) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (message.length < 5) {
      return NextResponse.json(
        { error: "Message is too short. Please enter at least 5 characters." },
        { status: 400 }
      );
    }

    if (message.length > 1000) {
      return NextResponse.json(
        { error: "Message is too long (maximum 1000 characters)." },
        { status: 400 }
      );
    }

    const sanitizedName = sanitizeHtml(name);
    const sanitizedTopic = sanitizeHtml(topic);
    const sanitizedMessage = sanitizeHtml(message);
    const safeSubjectTopic = stripNewlines(topic);
    const safeSubjectName = stripNewlines(name);

    const resendApiKey = process.env.RESEND_API_KEY;
    const brevoApiKey = process.env.BREVO_API_KEY;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "creative@ramsyap.com";

    // 2. Email Notification via Resend
    if (resendApiKey) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Kristy - Pantry & Pan <kristy@pantryandpan.com>",
          to: [receiverEmail],
          reply_to: email,
          subject: `[Inquiry] ${safeSubjectTopic} - from ${safeSubjectName}`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #2C3531; line-height: 1.6;">
              <h2 style="color: #D48C70; margin-bottom: 10px;">New Contact Submission</h2>
              <p><strong>Name:</strong> ${sanitizedName}</p>
              <p><strong>Email:</strong> ${sanitizeHtml(email)}</p>
              <p><strong>Topic / Subject:</strong> ${sanitizedTopic}</p>
              <p><strong>Auto-Subscribed to Digest:</strong> ${autoSubscribe ? "Yes" : "No"}</p>
              <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 20px 0;" />
              <p><strong>Message:</strong></p>
              <blockquote style="background: #F9F6F0; padding: 15px; border-left: 4px solid #D48C70; margin: 0;">
                ${sanitizedMessage.replace(/\n/g, "<br/>")}
              </blockquote>
            </div>
          `,
        }),
      });

      if (!resendRes.ok) {
        const errorData = await resendRes.json().catch(() => ({}));
        console.error("Resend API Error:", errorData);
      }
    }

    // 3. Auto-subscribe user to Brevo CRM if requested
    if (autoSubscribe && brevoApiKey) {
      await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "api-key": brevoApiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          attributes: {
            FIRSTNAME: name,
            INTERESTS: "Community Inquiries, All Categories",
          },
          updateEnabled: true,
        }),
      });
    }

    // 4. Log to Server Console
    console.log("----------------------------------------");
    console.log("📨 NEW CONTACT FORM SUBMISSION:");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Topic: ${topic}`);
    console.log(`Message: ${message}`);
    console.log(`Auto-Subscribed: ${autoSubscribe ? "YES" : "NO"}`);
    console.log("----------------------------------------");

    const successMessage = autoSubscribe
      ? "Thank you! Your message has been sent, and you are subscribed to our Non-Toxic Kitchen Journal."
      : "Thank you! Your message has been sent successfully.";

    return NextResponse.json({ success: true, message: successMessage }, { status: 200 });
  } catch (error) {
    console.error("Contact API Handler Error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
