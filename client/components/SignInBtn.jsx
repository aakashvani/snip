"use client"; // REASON:- because we are using event listner

import { signIn } from "next-auth/react";

const SignInBtn = () => {
  return (
    <div>
      <button onClick={signIn}>Sign In Btn</button>
    </div>
  );
};

export default SignInBtn;
