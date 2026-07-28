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

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));

    // Honeypot spam check
    if (body.b_hp_check) {
      return NextResponse.json({ success: true, message: "Subscribed." }, { status: 200 });
    }

    const rawEmail = body.email || "";
    const rawTopics = Array.isArray(body.topics) ? body.topics : [];

    const email = rawEmail.trim().toLowerCase();
    const validTopics = (rawTopics as unknown[])
      .filter((t: unknown): t is string => typeof t === "string" && t.trim().length > 0)
      .map((t: string) => t.trim());

    const topics = validTopics.length > 0 ? validTopics : ["All Categories"];

    // 1. Server Validation
    if (!email) {
      return NextResponse.json({ error: "Email address is required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.length > 254) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const brevoApiKey = process.env.BREVO_API_KEY;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "creative@ramsyap.com";

    const sanitizedTopics = topics.map(sanitizeHtml);

    // 2. Integration with Brevo (if BREVO_API_KEY exists)
    if (brevoApiKey) {
      await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "api-key": brevoApiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          attributes: {
            INTERESTS: topics.join(", "),
          },
          updateEnabled: true,
        }),
      });
    }

    // 3. Integration with Resend (if RESEND_API_KEY exists)
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
          subject: `[New Subscriber] ${email} joined Non-Toxic Kitchen Journal`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #2C3531;">
              <h2 style="color: #8A9A86;">New Newsletter Subscriber!</h2>
              <p><strong>Email:</strong> ${sanitizeHtml(email)}</p>
              <p><strong>Selected Preferences:</strong> ${sanitizedTopics.join(", ")}</p>
            </div>
          `,
        }),
      });

      if (!resendRes.ok) {
        const errorData = await resendRes.json().catch(() => ({}));
        console.error("Resend API Error:", errorData);
      }
    }

    // 4. Log to Server Console
    console.log("----------------------------------------");
    console.log("📰 NEW NEWSLETTER SUBSCRIBER:");
    console.log(`Email: ${email}`);
    console.log(`Topics: ${topics.join(", ")}`);
    console.log("----------------------------------------");

    return NextResponse.json(
      { success: true, message: "Successfully subscribed to The Non-Toxic Kitchen Journal!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter API Handler Error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
