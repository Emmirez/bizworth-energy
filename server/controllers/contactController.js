import ContactMessage from '../models/ContactMessage.js';
import { sendEmail, contactNotification, contactAutoReply } from '../utils/mailer.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function createContactMessage(req, res, next) {
  try {
    const { name, email, phone, subject, message } = req.body || {};

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return res.status(400).json({ message: 'Please fill in your name, email, subject and message.' });
    }
    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({ message: 'Please enter a valid email address.' });
    }

        const saved = await ContactMessage.create({ name, email, phone, subject, message });

    // The message is already saved, so an email failure never fails the request.
    const data = { name, email, phone, subject, message };
    const results = await Promise.allSettled([
      sendEmail({
        to: { email: process.env.CONTACT_TO || 'info@bizworthenergy.com', name: 'Bizworth Oil & Gas' },
        replyTo: { email, name },
        ...contactNotification(data),
      }),
      sendEmail({ to: { email, name }, ...contactAutoReply(data) }),
    ]);
    results.forEach((r) => r.status === 'rejected' && console.error('Contact email failed:', r.reason.message));
    return res.status(201).json({ message: 'Message received', id: saved._id });
  } catch (err) {
    return next(err);
  }
}
