import React from 'react';

import { googleLogo } from 'assets';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/features/appSlice';

import useAuth from './hooks/useAuth';

const SignInOut = () => {
  const userInfo = useSelector(selectUser);

  const { handleLogin, handleSignOut } = useAuth();

  return (
    <div className="flex items-center justify-center gap-10 bg-white rounded-3xl text-base">
      {!userInfo && (
        <button
          onClick={handleLogin}
          className="text-base w-60 h-12 tracking-wide border-[1px] text-gray-800 border-gray-400 rounded-3xl flex items-center justify-center gap-2 cursor-pointer hover:bg-blue-600 hover:text-white focus-visible::bg-blue-600 focus-visible::text-white"
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
          className="text-base w-60 h-12 tracking-wide border-[1px] text-gray-800 border-gray-400 rounded-3xl flex items-center justify-center gap-2 cursor-pointer hover:bg-blue-600 hover:text-white focus-visible::bg-blue-600 focus-visible::text-white"
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default SignInOut;
