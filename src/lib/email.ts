import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: process.env.SMTP_SERVICE,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});


export async function welcomeEmail({
  name = "there",
  siteUrl = "https://your-domain.com",
  email,
}: {
  email: string;
  name?: string;
  siteUrl?: string;
}) {
  const year = new Date().getFullYear();
  await transport.sendMail({
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Welcome to TechVerse",
    html: `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Welcome to TechVerse</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <!-- No external CSS; all styles inline for email clients -->
</head>
<body style="margin:0;padding:0;background:#0B0F19;color:#E5E7EB;">
  <!-- preheader (hidden in most clients) -->
  <div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">
    Thanks for subscribing! You’ll get concise tech updates and the daily AI briefing.
  </div>

  <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style="background:#0B0F19;">
    <tr>
      <td style="padding:24px;">
        <table role="presentation" width="100%" style="max-width:560px;margin:0 auto;background:#0F1222;border:1px solid #24273A;border-radius:16px;">
          <tr>
            <td style="padding:24px 24px 8px 24px;font-family:Inter,Segoe UI,Arial,Helvetica,sans-serif;">
              <h1 style="margin:0;font-size:24px;line-height:1.25;color:#FFFFFF;font-weight:800;">
                Welcome to TechVerse 👋
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 24px 0 24px;font-family:Inter,Segoe UI,Arial,Helvetica,sans-serif;">
              <p style="margin:0;font-size:14px;line-height:1.6;color:#D1D5DB;">
                Hey ${name}, thanks for subscribing! You’ll now get concise tech updates and the daily AI briefing.
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:16px 24px 0 24px;font-family:Inter,Segoe UI,Arial,Helvetica,sans-serif;">
              <ul style="margin:0;padding-left:18px;color:#D1D5DB;font-size:14px;line-height:1.6;">
                <li>📰 Weekly roundup of best posts</li>
                <li>🤖 Daily AI‑generated tech brief (optional)</li>
                <li>🎯 Tips for cross‑posting to LinkedIn, X, Instagram</li>
              </ul>
            </td>
          </tr>

          <tr>
            <td style="padding:20px 24px 0 24px;font-family:Inter,Segoe UI,Arial,Helvetica,sans-serif;">
              <!-- CTA button -->
              <a href="${siteUrl}/blog"
                 style="display:inline-block;background:#635BFF;background-image:linear-gradient(90deg,#6366F1,#EC4899);
                        color:#FFFFFF;text-decoration:none;font-weight:700;border-radius:12px;
                        padding:10px 16px;font-size:14px;">
                Read the latest →
              </a>
            </td>
          </tr>

          <tr>
            <td style="padding:24px;font-family:Inter,Segoe UI,Arial,Helvetica,sans-serif;">
              <hr style="border:none;border-top:1px solid #24273A;margin:0 0 12px 0;">
              <p style="margin:0;font-size:12px;line-height:1.6;color:#9CA3AF;">
                If this wasn’t you, ignore this email or
                <a href="${siteUrl}/unsubscribe" style="color:#A78BFA;text-decoration:underline;">unsubscribe</a>.
              </p>
            </td>
          </tr>
        </table>

        <p style="text-align:center;margin:16px 0 0 0;font-size:12px;color:#9CA3AF;font-family:Inter,Segoe UI,Arial,Helvetica,sans-serif;">
          © ${year} TechVerse • <a href="${siteUrl}" style="color:#9CA3AF;text-decoration:none;">${siteUrl}</a>
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`,
  });
}
