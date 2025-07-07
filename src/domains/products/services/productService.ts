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
  } catch {
    return null;
  }
};

export const fetchAllProducts = async () => {
  try {
    await connectDB();
    return await Product.find();
  } catch {
    return null;
  }
};

export const fetchProductById = async (id) => {
  try {
    await connectDB();
    return await Product.findById(id);
  } catch {
    return null;
  }
};
