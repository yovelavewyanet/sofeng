import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },  // Top, Bottom, Dress, etc
  bodyType: [{ type: String }],  // Rectangle, Pear, Hourglass, Apple, Inverted
  imageUrl: { type: String, required: true },
  colorboxUrl: { type: String, required: true },
  price: { type: Number },
  description: { type: String },
  stylingTip: { type: String }
}, { timestamps: true });

export default mongoose.model("Product", productSchema);