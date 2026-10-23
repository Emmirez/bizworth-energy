import crypto from 'crypto';
import WhistleblowReport from '../models/WhistleblowReport.js';

export const COUNTRIES = [
  'Angola', 'Australia', 'Brazil', 'Brunei', 'India', 'Indonesia', 'Malaysia', 'Mexico', 'Netherlands',
  'Singapore', 'Thailand', 'United Arab Emirates', 'United Kingdom & Northern Ireland', 'USA',
];
export const CATEGORIES = [
  'Bribery or Corruption', 'Fraud or Theft', 'Conflict of Interest', 'Health, Safety or Environment',
  'Harassment or Discrimination', 'Misuse of Company Assets', 'Breach of Code of Conduct', 'Other',
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Password hashing with Node's built-in scrypt (no extra packages needed)
const hashPassword = (password) => {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
};
const checkPassword = (password, stored) => {
  const [salt, hash] = stored.split(':');
  const test = crypto.scryptSync(password, salt, 64);
  return crypto.timingSafeEqual(test, Buffer.from(hash, 'hex'));
};

// e.g. 4821-7735-0193
const makeKey = () =>
  Array.from({ length: 3 }, () => String(crypto.randomInt(0, 10000)).padStart(4, '0')).join('-');

export async function submitReport(req, res, next) {
  try {
    const b = req.body || {};
    if (b.website) return res.status(201).json({ reportKey: makeKey() }); // spam trap

    if (!COUNTRIES.includes(b.country)) return res.status(400).json({ message: 'Please select your country.' });
    if (!CATEGORIES.includes(b.category)) return res.status(400).json({ message: 'Please select the type of concern.' });
    if (!b.description || b.description.trim().length < 20) {
      return res.status(400).json({ message: 'Please describe your concern in at least 20 characters.' });
    }
    if (!b.password || b.password.length < 6) {
      return res.status(400).json({ message: 'Please choose a password of at least 6 characters.' });
    }
    if (b.password !== b.confirmPassword) return res.status(400).json({ message: 'The passwords do not match.' });
    const anonymous = b.anonymous !== false;
    if (!anonymous && b.email && !EMAIL_RE.test(b.email)) {
      return res.status(400).json({ message: 'Please enter a valid email address.' });
    }

    let reportKey = makeKey();
    while (await WhistleblowReport.exists({ reportKey })) reportKey = makeKey();

    await WhistleblowReport.create({
      reportKey,
      passwordHash: hashPassword(b.password),
      country: b.country,
      category: b.category,
      description: b.description,
      location: b.location,
      whenOccurred: b.whenOccurred,
      anonymous,
      name: anonymous ? undefined : b.name,
      email: anonymous ? undefined : b.email,
      phone: anonymous ? undefined : b.phone,
    });

    return res.status(201).json({ reportKey });
  } catch (err) {
    return next(err);
  }
}

export async function checkReport(req, res, next) {
  try {
    const { reportKey, password } = req.body || {};
    const generic = { message: 'Report key or password is incorrect.' };
    if (!reportKey || !password) return res.status(400).json(generic);

    const report = await WhistleblowReport.findOne({ reportKey: reportKey.trim() });
    if (!report || !checkPassword(password, report.passwordHash)) return res.status(401).json(generic);

    return res.json({
      reportKey: report.reportKey,
      status: report.status,
      category: report.category,
      submittedAt: report.createdAt,
      responses: report.responses.map((r) => ({ message: r.message, date: r.createdAt })),
    });
  } catch (err) {
    return next(err);
  }
}