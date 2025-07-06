"use server";

import { doLogin } from "@/domains/auth/services/authService";
import { LoginActionState } from "@/domains/auth/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const loginAction = async (
  prevState: LoginActionState,
  formData: FormData
): Promise<LoginActionState> => {
  const errors: LoginActionState["errors"] = {};

  const email = formData.get("email")?.toString().trim() || "";
  const password = formData.get("password")?.toString() || "";

  if (!email) errors.email = ["Email is required"];
  if (!password) errors.password = ["Password is required"];

  if (Object.keys(errors).length > 0) {
    return { success: false, message: null, errors };
  }

  try {
    const res = await doLogin({ email, password });
    if (!res.status) {
      return { success: false, message: "Login failed", errors: {} };
    }

    (await cookies()).set("token", res.token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
    });

    return {
      success: true,
      message: "Signup successful",
      errors: {},
    };
  } catch (error: unknown) {
    return { success: false, message: "Login failed", errors: {} };
  }
};
