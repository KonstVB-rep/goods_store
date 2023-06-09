import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <ul className="flex item-center gap-4 sm_460:gap-8 p-2">
      <Link to="/">
        <li className="text-base dark:text-white text-black font-bold hover:text-orange-900 hover:underline focus-visible:text-orange-900 focus-visible:underline underline-offset-8 decoration-2 cursor-pointer">
          Home
        </li>
      </Link>
      {pathname !== "/" ? (
        <Link to="/#shop">
          <li className="text-base dark:text-white text-black font-bold hover:text-orange-900 hover:underline focus-visible:text-orange-900 focus-visible:underline underline-offset-8 decoration-2 cursor-pointer">
            Shop
          </li>
        </Link>
      ) : (
        <a href={`#shop`}>
          <li className="text-base dark:text-white text-black font-bold hover:text-orange-900 hover:underline focus-visible:text-orange-900 focus-visible:underline underline-offset-8 decoration-2 cursor-pointer">
            Shop
          </li>
        </a>
      )}
      <a href={`#contacts`}>
        <li className="text-base dark:text-white text-black font-bold hover:text-orange-900 hover:underline focus-visible:text-orange-900 focus-visible:underline underline-offset-8 decoration-2 cursor-pointer">
          Contacts
        </li>
      </a>
    </ul>
  );
};

export default Nav;
