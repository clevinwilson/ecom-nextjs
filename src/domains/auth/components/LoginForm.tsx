"use client";
import React, { useActionState, useEffect } from "react";
import { LoginActionState } from "../types";
import { loginAction } from "@/app/auth/login/action";
import { useRouter } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const initialState: LoginActionState = {
    success: false,
    message: null,
    errors: {},
  };
  const [state, formAction, isPending] = useActionState(
    loginAction,
    initialState
  );

  useEffect(() => {
    if (state.success) {
      router.push("/");
    }
  }, [state, router]);

  return (
    <form action={formAction} className="max-w-sm mx-auto min-w-[400px] mt-10">
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Email"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {isPending ? " Lignin.." : "Login"}
        </button>
      </div>
      {state.errors?.email &&
        state.errors.email.map((error: string) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))}
    </form>
  );
}

export default LoginForm;
