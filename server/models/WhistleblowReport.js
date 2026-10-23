import mongoose from 'mongoose';

const responseSchema = new mongoose.Schema(
  { message: { type: String, required: true, trim: true, maxlength: 5000 } },
  { timestamps: true }
);

const whistleblowReportSchema = new mongoose.Schema(
  {
    reportKey: { type: String, required: true, unique: true, index: true },
    passwordHash: { type: String, required: true },
    country: { type: String, required: true, trim: true, maxlength: 80 },
    category: { type: String, required: true, trim: true, maxlength: 80 },
    description: { type: String, required: true, trim: true, maxlength: 10000 },
    location: { type: String, trim: true, maxlength: 200 },
    whenOccurred: { type: String, trim: true, maxlength: 120 },
    anonymous: { type: Boolean, default: true },
    name: { type: String, trim: true, maxlength: 120 },
    email: { type: String, trim: true, lowercase: true, maxlength: 160 },
    phone: { type: String, trim: true, maxlength: 40 },
    status: { type: String, enum: ['Received', 'Under Review', 'Closed'], default: 'Received' },
    // Replies from the Group Integrity & Governance team, visible to the reporter via report key + password
    responses: [responseSchema],
  },
  { timestamps: true }
);

export default mongoose.model('WhistleblowReport', whistleblowReportSchema);