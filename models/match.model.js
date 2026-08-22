import mongoose  from 'mongoose';

// Created when two users mutually like each other
const matchSchema = new Schema({

  users:     [{
     type: Types.ObjectId, 
     ref: 'User',
      required: true
     }], // always 2, sorted
  matchedAt: { type: Date, default: Date.now },
}, { timestamps: true });

// Prevents duplicate match docs — sort the two user ids before inserting
matchSchema.index({ users: 1 }, { unique: true });


export const Match = mongoose.model('Match', matchSchema);