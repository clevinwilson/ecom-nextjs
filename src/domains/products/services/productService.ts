import { connectDB } from "@/lib/mongodb";
import Product from "../models/productModel";

export const createProduct = async (productDetails) => {
  try {
    const { userId, name, quantity, price, brand } = productDetails;
    await connectDB();
    const newProduct = new Product({
      userId,
      name,
      quantity,
      price,
      brand,
    });

    return await newProduct.save();
  } catch (error) {
    return null;
  }
};

export const fetchAllProducts = async () => {
  try {
    await connectDB();
    return await Product.find();
  } catch (error) {
    return null;
  }
};
