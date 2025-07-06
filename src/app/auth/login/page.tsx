import LoginForm from "@/domains/auth/components/LoginForm";
import React from "react";

function LoginPage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="p-[38px] border border-[#3f3f3f] rounded-[8px] bg-[#1d1d1d]">
        <h1 className="text-center text-2xl">Login</h1>
       <LoginForm/>
      </div>
    </div>
  );
}

export default LoginPage;
