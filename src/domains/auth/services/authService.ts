"use server";
import { connectDB } from "@/lib/mongodb";
import User from "../models/userModel";
import { LoginRequestBody, SignupRequestBody } from "../types";
import { comparePassword, hashPassword } from "../utils/hash";
import { createJwtToken } from "../utils/jwt";

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
    return { status: false };
  }
};

export const doLogin = async ({ email, password }: LoginRequestBody) => {
  try {
    await connectDB();
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not exist");
    }

    const validPassword = await comparePassword(password, user?.password);
    if (!validPassword) {
      throw new Error("Invalid password");
    }

    const tokenData = {
      id: user._id,
      name: user.name,
      email: user.email,
    };

    const token = await createJwtToken(tokenData, "1d");
    return {
      status: true,
      message: "Login success",
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        token,
      },
    };
  } catch (error) {
    if (error instanceof Error) {
      return { status: false, message: error.message };
    }
    return { status: false };
  }
};
