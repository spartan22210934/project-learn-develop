import mongoose from 'mongoose';
const { Schema, model, Types } = mongoose;

const messageSchema = new Schema({
  match:  { type: Types.ObjectId, ref: 'Match', required: true },
  sender: { type: Types.ObjectId, ref: 'User', required: true },
  text:   { type: String, required: true, maxlength: 1000 },
  readAt: { type: Date },
}, { timestamps: true });

// Fast lookup of a match's messages in chronological order
messageSchema.index({ match: 1, createdAt: 1 });

export const Message = mongoose.model('Message', messageSchema);
