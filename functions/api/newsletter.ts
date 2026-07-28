interface Env {
  RESEND_API_KEY?: string;
  BREVO_API_KEY?: string;
  CONTACT_RECEIVER_EMAIL?: string;
}

interface CloudflarePagesContext {
  request: Request;
  env: Env;
}

function sanitizeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export const onRequestPost = async (context: CloudflarePagesContext): Promise<Response> => {
  const headers = { "Content-Type": "application/json" };
  try {
    const body = (await context.request.json().catch(() => ({}))) as Record<string, unknown>;

    // Honeypot spam check
    if (body.b_hp_check) {
      return new Response(JSON.stringify({ success: true, message: "Subscribed." }), { status: 200, headers });
    }

    const rawEmail = String(body.email || "");
    const rawTopics = Array.isArray(body.topics) ? body.topics : [];

    const email = rawEmail.trim().toLowerCase();
    const validTopics = (rawTopics as unknown[])
      .filter((t: unknown): t is string => typeof t === "string" && t.trim().length > 0)
      .map((t: string) => t.trim());

    const topics = validTopics.length > 0 ? validTopics : ["All Categories"];

    // 1. Validation
    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email address is required." }),
        { status: 400, headers }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.length > 254) {
      return new Response(
        JSON.stringify({ error: "Please enter a valid email address." }),
        { status: 400, headers }
      );
    }

    const resendApiKey = context.env.RESEND_API_KEY;
    const brevoApiKey = context.env.BREVO_API_KEY;
    const receiverEmail = context.env.CONTACT_RECEIVER_EMAIL || "creative@ramsyap.com";

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

    return new Response(
      JSON.stringify({ success: true, message: "Successfully subscribed to The Non-Toxic Kitchen Journal!" }),
      { status: 200, headers }
    );
  } catch (error) {
    console.error("Newsletter Function Error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error. Please try again later." }),
      { status: 500, headers }
    );
  }
};
