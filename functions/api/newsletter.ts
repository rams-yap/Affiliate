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

    // 2. Integration with Brevo CRM (if BREVO_API_KEY exists)
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
      const welcomeHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Pantry & Pan</title>
          <style>
            @media only screen and (max-width: 600px) {
              .container { width: 100% !important; padding: 15px !important; }
              .btn { width: 100% !important; text-align: center !important; }
            }
          </style>
        </head>
        <body style="margin: 0; padding: 0; background-color: #FDFBF7; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #2C3531; -webkit-font-smoothing: antialiased;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #FDFBF7; padding: 30px 10px;">
            <tr>
              <td align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="600" class="container" style="background-color: #FFFFFF; border-radius: 12px; overflow: hidden; border: 1px solid #EBE5D8; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
                  
                  <!-- Header Banner -->
                  <tr>
                    <td style="background-color: #2C3531; padding: 30px 40px; text-align: center;">
                      <h1 style="color: #FDFBF7; font-size: 24px; margin: 0; font-weight: 700; letter-spacing: 1px;">PANTRY & PAN</h1>
                      <p style="color: #D48C70; font-size: 12px; margin: 6px 0 0 0; text-transform: uppercase; letter-spacing: 2px;">The Non-Toxic Kitchen Journal</p>
                    </td>
                  </tr>

                  <!-- Main Content -->
                  <tr>
                    <td style="padding: 40px 40px 30px 40px;">
                      <h2 style="color: #2C3531; font-size: 20px; margin-top: 0; margin-bottom: 16px;">Welcome to the family! 👋</h2>
                      <p style="color: #4A5551; font-size: 15px; line-height: 1.6; margin-bottom: 20px;">
                        Thank you for joining <strong>The Non-Toxic Kitchen Journal</strong>. I'm Kristy, and I started Pantry & Pan to help home cooks navigate non-toxic cookware, heavy-metal-tested ceramics, and aesthetic kitchen storage.
                      </p>
                      <p style="color: #4A5551; font-size: 15px; line-height: 1.6; margin-bottom: 30px;">
                        Here is what you can expect in your inbox:
                      </p>

                      <!-- Bullet Points -->
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 30px;">
                        <tr>
                          <td width="30" valign="top" style="font-size: 18px;">🌿</td>
                          <td style="font-size: 14px; color: #2C3531; line-height: 1.5; padding-bottom: 12px;">
                            <strong>Honest Non-Toxic Reviews:</strong> PFAS, PTFE, and lead-free cookware tests.
                          </td>
                        </tr>
                        <tr>
                          <td width="30" valign="top" style="font-size: 18px;">🍳</td>
                          <td style="font-size: 14px; color: #2C3531; line-height: 1.5; padding-bottom: 12px;">
                            <strong>Pan Care Tutorials:</strong> Seasoning carbon steel woks & non-stick ceramic maintenance.
                          </td>
                        </tr>
                        <tr>
                          <td width="30" valign="top" style="font-size: 18px;">✨</td>
                          <td style="font-size: 14px; color: #2C3531; line-height: 1.5;">
                            <strong>Aesthetic Pantry Restock:</strong> Glass rice dispensers & airtight storage solutions.
                          </td>
                        </tr>
                      </table>

                      <!-- Call to Action Button -->
                      <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td align="center" style="padding: 10px 0 25px 0;">
                            <a href="https://pantryandpan.com/guides/non-toxic-kitchen-blueprint" target="_blank" class="btn" style="background-color: #D48C70; color: #FFFFFF; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 600; font-size: 15px; display: inline-block;">Read The Non-Toxic Cookware Blueprint ➔</a>
                          </td>
                        </tr>
                      </table>

                      <hr style="border: none; border-top: 1px solid #EBE5D8; margin: 25px 0;" />

                      <p style="font-size: 14px; color: #4A5551; line-height: 1.5; margin: 0;">
                        Warmly,<br/>
                        <strong>Kristy Yap</strong><br/>
                        <span style="color: #8A9A86; font-size: 13px;">Founder, Pantry & Pan</span>
                      </p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #F9F6F0; padding: 20px 40px; text-align: center; border-top: 1px solid #EBE5D8;">
                      <p style="font-size: 12px; color: #7A8681; margin: 0 0 6px 0;">
                        © 2026 Pantry & Pan. All rights reserved.
                      </p>
                      <p style="font-size: 11px; color: #A0AAA5; margin: 0;">
                        You received this email because you subscribed on <a href="https://pantryandpan.com" style="color: #D48C70; text-decoration: none;">pantryandpan.com</a>.
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `;

      // Concurrent execution: Admin notification + Subscriber welcome email
      const adminPromise = fetch("https://api.resend.com/emails", {
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

      const subscriberPromise = fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Kristy - Pantry & Pan <kristy@pantryandpan.com>",
          to: [email],
          subject: "Welcome to The Non-Toxic Kitchen Journal! 🌿",
          html: welcomeHtml,
        }),
      });

      await Promise.allSettled([adminPromise, subscriberPromise]);
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
