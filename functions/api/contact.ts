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

function stripNewlines(str: string): string {
  return str.replace(/[\r\n]/g, " ");
}

export const onRequestPost = async (context: CloudflarePagesContext): Promise<Response> => {
  const headers = { "Content-Type": "application/json" };
  try {
    const body = (await context.request.json().catch(() => ({}))) as Record<string, unknown>;

    // Honeypot spam check
    if (body.b_hp_check) {
      return new Response(JSON.stringify({ success: true, message: "Message sent." }), { status: 200, headers });
    }

    const rawName = String(body.name || "");
    const rawEmail = String(body.email || "");
    const rawTopic = String(body.topic || "General Inquiry");
    const rawMessage = String(body.message || "");
    const autoSubscribe = Boolean(body.autoSubscribe);

    const name = rawName.trim();
    const email = rawEmail.trim().toLowerCase();
    const topic = rawTopic.trim() || "General Inquiry";
    const message = rawMessage.trim();

    // 1. Validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Please fill in all required fields (name, email, and message)." }),
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

    if (message.length < 5) {
      return new Response(
        JSON.stringify({ error: "Message is too short. Please enter at least 5 characters." }),
        { status: 400, headers }
      );
    }

    if (message.length > 1000) {
      return new Response(
        JSON.stringify({ error: "Message is too long (maximum 1000 characters)." }),
        { status: 400, headers }
      );
    }

    const sanitizedName = sanitizeHtml(name);
    const sanitizedTopic = sanitizeHtml(topic);
    const sanitizedMessage = sanitizeHtml(message);
    const safeSubjectTopic = stripNewlines(topic);
    const safeSubjectName = stripNewlines(name);

    const resendApiKey = context.env.RESEND_API_KEY;
    const brevoApiKey = context.env.BREVO_API_KEY;
    const receiverEmail = context.env.CONTACT_RECEIVER_EMAIL || "creative@ramsyap.com";

    // 2. Resend Email Dispatch
    if (resendApiKey) {
      const adminPromise = fetch("https://api.resend.com/emails", {
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

      const promises: Promise<Response>[] = [adminPromise];

      // Send Welcome Email if user checked autoSubscribe
      if (autoSubscribe) {
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
                          <p style="color: #D48C70; font-size: 12px; margin: 6px 0 0 0; text-transform: uppercase; letter-spacing: 2px;">The Intentional Pantry (Intentional Health &amp; Happiness)</p>
                        </td>
                      </tr>

                      <!-- Main Content -->
                      <tr>
                        <td style="padding: 40px 40px 30px 40px;">
                          <h2 style="color: #2C3531; font-size: 20px; margin-top: 0; margin-bottom: 16px;">I’m so glad you’re here, ${sanitizedName}! 👋</h2>
                          <p style="color: #4A5551; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                            A few years ago, I stood in my kitchen holding a worn skillet, watching the coating chip away into tonight’s dinner.
                            That single moment sparked a deeper realization, our kitchens should be places where we <em>intentionally curate our health, peace, and everyday happiness</em>.
                          </p>
                          <p style="color: #4A5551; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                            I’m Kristy, and we started <strong>Pantry & Pan</strong> to help home cooks decorate, invest in, and choose clean cookware and aesthetic storage with total confidence, no fear, just purposeful living.<br> Here is what you can expect in your inbox:
                          </p>
                          <hr style="border: none; border-top: 1px solid #EBE5D8; margin: 25px 0;" />
                          <!-- Bullet Points -->
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 30px;">
                            <tr>
                              <td width="30" valign="top" style="font-size: 18px;">🌿</td>
                              <td style="font-size: 14px; color: #2C3531; line-height: 1.6; padding-bottom: 12px;">
                                <strong>Honest Clean Cookware Reviews:</strong> PFAS, PTFE, and lead-free tests on ceramics, stainless steel, and cast iron.
                              </td>
                            </tr>
                            <tr>
                              <td width="30" valign="top" style="font-size: 18px;">🍳</td>
                              <td style="font-size: 14px; color: #2C3531; line-height: 1.6; padding-bottom: 12px;">
                                <strong>Pan Care Tutorials:</strong> Seasoning carbon steel & making non-stick ceramics last a lifetime.
                              </td>
                            </tr>
                            <tr>
                              <td width="30" valign="top" style="font-size: 18px;">✨</td>
                              <td style="font-size: 14px; color: #2C3531; line-height: 1.6;">
                                <strong>Aesthetic Pantry Restock:</strong> Glass rice dispensers & airtight storage solutions that bring visual calm to your space.
                              </td>
                            </tr>
                          </table>

                          <!-- Call to Action Button -->
                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                              <td align="center" style="padding: 10px 0 25px 0;">
                                <a href="https://pantryandpan.com/guides/non-toxic-kitchen-blueprint" target="_blank" class="btn" style="background-color: #D48C70; color: #FFFFFF; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 600; font-size: 16px; display: inline-block;">Read The Intentional Kitchen Blueprint ➔</a>
                              </td>
                            </tr>
                          </table>

                          <p style="color: #4A5551; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                            <strong>One quick</strong> question before you go: What is one item in your kitchen you've been wanting to upgrade for your health or happiness? Hit reply and let me know. I loved to hear your stories!
                          </p>

                          <hr style="border: none; border-top: 1px solid #EBE5D8; margin: 25px 0;" />

                          <p style="font-size: 16px; color: #4A5551; line-height: 1.6; margin: 0;">
                            Warmly,<br/>
                            <strong>Kristy</strong><br/>
                            <span style="color: #8A9A86; font-size: 14px;">Founder, Pantry & Pan</span>
                          </p>

                          <p style="color: #4A5551; font-size: 14px; line-height: 1.6; margin-bottom: 30px;">
                            <em>P.S. To make sure these notes don't get lost in spam, reply to this email or move it to your "Primary" tab.</em>
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

        promises.push(
          fetch("https://api.resend.com/emails", {
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
          })
        );
      }

      await Promise.allSettled(promises);
    }

    // 3. Brevo CRM Auto-Subscribe
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

    const successMessage = autoSubscribe
      ? "Thank you! Your message has been sent, and you are subscribed to our Non-Toxic Kitchen Journal."
      : "Thank you! Your message has been sent successfully.";

    return new Response(JSON.stringify({ success: true, message: successMessage }), { status: 200, headers });
  } catch (error) {
    console.error("Contact Function Error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error. Please try again later." }),
      { status: 500, headers }
    );
  }
};
