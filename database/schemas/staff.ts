import mongoose, { Model } from 'mongoose';

const staffSchema = new mongoose.Schema({
      id: {
            type: String,
            required: true,
            unique: true,
      },
      name: {
            type: String,
            required: true,
      },
      role: {
            type: String,
            default: 'Editor'
      }
})

export const Staff = mongoose.models.Staff || mongoose.model('Staff', staffSchema)