import mongoose from "mongoose";

const measurementSchema = new mongoose.Schema({
  shoulders: { type: Number, required: true },
  bust: { type: Number, required: true },
  waist: { type: Number, required: true },
  hips: { type: Number, required: true },
  bodyType: { type: String },  // Calculated
  sessionId: { type: String }  // For anonymous users
}, { timestamps: true });

export default mongoose.model("Measurement", measurementSchema);