import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';
import alertRoutes from './routes/alertRoutes.js';
import whistleblowRoutes from './routes/whistleblowRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// CLIENT_URL can hold several sites separated by commas, e.g. the Vercel URL and the custom domain.
const allowedOrigins = (process.env.CLIENT_URL || 'http://localhost:5173')
  .split(',')
  .map((s) => s.trim().replace(/\/$/, ''))
  .filter(Boolean);

app.use(
  cors({
    origin(origin, cb) {
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
      return cb(null, false);
    },
  })
);
app.use(express.json({ limit: '100kb' }));

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api/contact', contactRoutes);
app.use('/api/alerts', alertRoutes);
app.use('/api/whistleblowing', whistleblowRoutes);

app.use((req, res) => res.status(404).json({ message: 'Route not found' }));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Server error. Please try again later.' });
});

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Bizworth API running on http://localhost:${PORT}`));
});
