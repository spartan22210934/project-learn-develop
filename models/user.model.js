import mongoose from 'mongoose'


const userSchema = new Schema({
  email:{ 
    type: String,
     required: true, 
     unique: true, 
     lowercase: true,
      trim: true
     },

  passwordHash:  { 
    type: String,
     required: true ,
     length:10,
    },
  name:  {
     type: String,
      required: true,
       trim: true
     },
  dob:   { 
    type: Date, 
    required: true 
},
  gender:   { 
    type: String,
     enum: ['male', 'female', 'other'],
      required: true 
    },
  interestedIn:  
  { type: String, 
    enum: ['male', 'female', 'both'], 
    required: true 
},
  bio:    
    { type: String,
         maxlength: 100,
         },

  photos: [{
    url:      { type: String, required: true },
    position: { type: Number, default: 0 }
  }],

//   location: {
//     type: { type: String, enum: ['Point'], default: 'Point' },
//     coordinates: { type: [Number], default: [0, 0] } // [lng, lat]
//   },

  isActive: { type: Boolean, default: true },
}, { timestamps: true });

// userSchema.index({ location: '2dsphere' });

export const User = mongoose.model('User', userSchema);