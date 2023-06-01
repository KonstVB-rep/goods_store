import React from "react";
import { useSelector } from "react-redux";

import useAuth from "./hooks/useAuth";
import { googleLogo } from "../../assets";

const SignInOut = () => {
  const userInfo = useSelector((state) => state.products.userInfo);

  const { handleLogin, handleSignOut } = useAuth();
  return (
    <div className="w-full flex items-center justify-center gap-10 bg-white rounded-3xl text-base">
      {!userInfo && (
        <button
          onClick={handleLogin}
          className="text-base w-60 h-12 tracking-wide border-[1px] text-gray-800 border-gray-400 rounded-3xl flex items-center justify-center gap-2 cursor-pointer duration-300 hover:bg-blue-600 hover:text-white focus-visible::bg-blue-600 focus-visible::text-white active:scale-95"
        >
          <img
            className="w-8 p-1 bg-white rounded-full"
            src={googleLogo}
            alt="googleLogo"
          />
          <span className="text-sm"> Sign in with Google</span>
        </button>
      )}
      {userInfo && (
        <button
          onClick={handleSignOut}
          className="bg-white text-gray-800 w-full text-base py-2 px-6 border-[1px] border-gray-400 tracking-wide rounded-3xl hover:bg-blue-600 hover:text-white duration-300 focus-visible::bg-blue-600 focus-visible::text-white active:scale-95"
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default SignInOut;
