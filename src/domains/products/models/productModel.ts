import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    userId: { type: String, require: true },
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
  },
  { timestamps: true }
);

const Product =
  mongoose.models?.products || mongoose.model("products", productSchema);

export default Product;
