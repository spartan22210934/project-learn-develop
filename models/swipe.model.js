import mongoose from  'mongoose';
//const { Schema, model, Types } = mongoose;


const swipeSchema = new Schema({
  swiper: {
     type: Types.ObjectId, 
     ref: 'User', 
     required: true 
    },
  target: { 
    type: Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  action: { 
    type: String, 
    enum: ['like', 'pass'], 
    required: true 
  },
}, { timestamps: true });

// Prevent duplicate swipes on the same target by the same user
swipeSchema.index({ swiper: 1, target: 1 }, { unique: true });


export const Swipe = mongoose.model('Swipe', swipeSchema);