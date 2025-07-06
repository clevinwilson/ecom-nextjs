"use server";

import { createUser } from "@/domains/auth/services/authService";
import { State } from "@/domains/auth/types";

export const signupAction = async (
  prevState: State,
  formData: FormData
): Promise<State> => {
  const errors: State["errors"] = {};

  const name = formData.get("name")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  const password = formData.get("password")?.toString() || "";

  if (!name) errors.name = ["Name is required"];
  if (!email) errors.email = ["Email is required"];
  if (!password) errors.password = ["Password is required"];

  if (Object.keys(errors).length > 0) {
    return { message: null, errors };
  }

  try {
    await createUser({ name, email, password });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        message: null,
        errors: {
          email: [error?.message || "Something went wrong. Please try again."],
        },
      };
    }
  }
  return { message: "Signup successful", errors: {} };
};
