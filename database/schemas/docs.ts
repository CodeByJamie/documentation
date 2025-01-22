import mongoose from "mongoose";

const docsSchema = new mongoose.Schema({
      title: {
            type: String,
            required: true,
      },
      url: {
            type: String,
            required: true,
            unique: true,      
      },
      content: {
            type: String,
            required: true
      },
      createdBy: {
            type: String,
            required: true
      },
      createdAt: {
            type: Date,
            default: Date.now
      },
      updatedAt: {
            type: Date,
            default: Date.now
      }
})

export const Docs = mongoose.models.Docs || mongoose.model("Docs", docsSchema);