import AlertSubscriber from '../models/AlertSubscriber.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TYPES = ['Shareholder', 'Investor', 'Analyst', 'Fund Manager', 'Media', 'Other'];

export async function subscribe(req, res, next) {
  try {
    const { name, type, email, website } = req.body || {};

    // Spam trap: real visitors never fill the hidden "website" field.
    if (website) return res.status(201).json({ message: 'Subscribed' });

    if (!name?.trim() || !email?.trim() || !type) {
      return res.status(400).json({ message: 'Please enter your name, select an option and enter your email.' });
    }
    if (!TYPES.includes(type)) {
      return res.status(400).json({ message: 'Please select a valid option.' });
    }
    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({ message: 'Please enter a valid email address.' });
    }

    const existing = await AlertSubscriber.findOne({ email: email.toLowerCase().trim() });
    if (existing) {
      existing.name = name;
      existing.type = type;
      existing.active = true;
      await existing.save();
      return res.status(200).json({ message: 'Subscription updated' });
    }

    await AlertSubscriber.create({ name, type, email });
    return res.status(201).json({ message: 'Subscribed' });
  } catch (err) {
    return next(err);
  }
}