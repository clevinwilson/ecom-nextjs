"use server";
import { connectDB } from "@/lib/mongodb";
import User from "../models/userModel";
import { SignupRequestBody } from "../types";
import { hashPassword } from "../utils/hash";

export const createUser = async ({
  name,
  email,
  password,
}: SignupRequestBody): Promise<{ status: boolean; message?: string }> => {
  try {
    await connectDB();
    const user = await User.findOne({ email }).lean();
    if (user) {
      throw new Error("User already exist");
    }

    const hashedPassword = await hashPassword(password);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return { status: true };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { status: false, message: error.message };
    }
    return {status:false};
  }
};
