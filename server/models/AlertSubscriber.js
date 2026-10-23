import mongoose from 'mongoose';

const alertSubscriberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    type: {
      type: String,
      required: true,
      enum: ['Shareholder', 'Investor', 'Analyst', 'Fund Manager', 'Media', 'Other'],
    },
    email: { type: String, required: true, trim: true, lowercase: true, unique: true, maxlength: 160 },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model('AlertSubscriber', alertSubscriberSchema);