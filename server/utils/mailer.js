// Sends transactional emails through Brevo's HTTP API (no extra package needed — uses Node's built-in fetch).
const BREVO_URL = 'https://api.brevo.com/v3/smtp/email';

export const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export async function sendEmail({ to, subject, html, text, replyTo }) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) throw new Error('BREVO_API_KEY is not set');

  const body = {
    sender: {
      email: process.env.MAIL_FROM,
      name: process.env.MAIL_FROM_NAME || 'Bizworth Oil & Gas',
    },
    to: [to],
    subject,
    htmlContent: html,
    textContent: text,
  };
  if (replyTo) body.replyTo = replyTo;

  const res = await fetch(BREVO_URL, {
    method: 'POST',
    headers: {
      'api-key': apiKey,
      'content-type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`Brevo error ${res.status}: ${detail}`);
  }
  return res.json();
}

// Branded email layout. The logo must be a public URL (email apps can't load localhost images),
// so it is loaded from SITE_URL/biz.png — the same logo the website uses.
const wrap = (inner) => {
  const site = (process.env.SITE_URL || 'https://bizworthenergy.com').replace(/\/$/, '');
  return `
  <div style="margin:0;padding:24px 12px;background:#f3f3f6;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-collapse:collapse;">
      <tr>
        <td style="padding:28px 28px 22px;text-align:center;border-bottom:4px solid #2e27c3;">
          <a href="${site}" style="text-decoration:none;">
            <img src="${site}/biz.png" alt="Bizworth Oil &amp; Gas" height="64" style="height:64px;width:auto;border:0;display:inline-block;" />
          </a>
        </td>
      </tr>
      <tr>
        <td style="padding:30px 28px 10px;">
          ${inner}
        </td>
      </tr>
      <tr>
        <td style="padding:22px 28px;background:#28245c;text-align:center;">
          <p style="margin:0 0 6px;font-size:14px;font-weight:bold;color:#ffffff;">Bizworth Oil &amp; Gas Sdn. Bhd.</p>
          <p style="margin:0;font-size:12px;line-height:1.7;color:#c9c8e3;">
            C3-3A-8, Solaris Dutamas, Jalan Dutamas, Sri Hartamas, 50480 Kuala Lumpur, Malaysia<br />
            Tel: +601-22-Bizworthenergy &nbsp;|&nbsp;
            <a href="mailto:info@bizworthenergy.com" style="color:#1fb6e8;text-decoration:none;">info@bizworthenergy.com</a><br />
            <a href="${site}" style="color:#1fb6e8;text-decoration:none;">${site.replace(/^https?:\/\//, '')}</a>
          </p>
        </td>
      </tr>
    </table>
  </div>`;
};

// Email to the company inbox with the visitor's message.
export function contactNotification({ name, email, phone, subject, message }) {
  const rows = [
    ['Name', name],
    ['Email', email],
    ['Phone', phone || '—'],
    ['Subject', subject],
  ]
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#777;font-size:14px;">${k}</td><td style="padding:6px 0;font-size:14px;color:#28245c;">${escapeHtml(v)}</td></tr>`
    )
    .join('');

  return {
    subject: `New website enquiry: ${subject}`,
    html: wrap(`
      <h2 style="margin:0 0 16px;color:#28245c;font-size:20px;">New message from the Contact Us page</h2>
      <table style="border-collapse:collapse;">${rows}</table>
      <p style="margin:20px 0 6px;color:#777;font-size:14px;">Message</p>
      <p style="margin:0;font-size:15px;color:#333;line-height:1.6;white-space:pre-wrap;">${escapeHtml(message)}</p>
    `),
    text: `New message from the Contact Us page\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\nSubject: ${subject}\n\n${message}`,
  };
}

// Automatic "we received your message" reply to the visitor.
export function contactAutoReply({ name, subject }) {
  return {
    subject: 'We have received your message — Bizworth Oil & Gas',
    html: wrap(`
      <h2 style="margin:0 0 16px;color:#28245c;font-size:20px;">Thank you for contacting us</h2>
      <p style="font-size:15px;color:#333;line-height:1.6;">Dear ${escapeHtml(name)},</p>
      <p style="font-size:15px;color:#333;line-height:1.6;">
        Thank you for reaching out to Bizworth Oil &amp; Gas. We have received your message regarding
        <strong>“${escapeHtml(subject)}”</strong> and a member of our team will get back to you as soon as possible.
      </p>
      <p style="font-size:15px;color:#333;line-height:1.6;">
        If your enquiry is urgent, you can also reach us at
        <a href="mailto:info@bizworthenergy.com" style="color:#2e27c3;">info@bizworthenergy.com</a>.
      </p>
      <p style="font-size:15px;color:#333;line-height:1.6;">Kind regards,<br />Bizworth Oil &amp; Gas</p>
    `),
    text: `Dear ${name},\n\nThank you for reaching out to Bizworth Oil & Gas. We have received your message regarding "${subject}" and a member of our team will get back to you as soon as possible.\n\nIf your enquiry is urgent, you can also reach us at info@bizworthenergy.com.\n\nKind regards,\nBizworth Oil & Gas`,
  };
}