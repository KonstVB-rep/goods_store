import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  console.log();
  return (
    <ul className="flex item-center gap-4 sm_460:gap-8 p-2">
      <Link to="/">
        <li className="text-base dark:text-white text-black font-bold hover:text-orange-900 hover:underline focus-visible:text-orange-900 focus-visible:underline underline-offset-8 decoration-2 cursor-pointer duration-300">
          Home
        </li>
      </Link>
      {pathname !== "/" ? (
        <Link to="/#shop">
          <li className="text-base dark:text-white text-black font-bold hover:text-orange-900 hover:underline focus-visible:text-orange-900 focus-visible:underline underline-offset-8 decoration-2 cursor-pointer duration-300">
            Shop
          </li>
        </Link>
      ) : (
        <a href={`#shop`}>
          <li className="text-base dark:text-white text-black font-bold hover:text-orange-900 hover:underline focus-visible:text-orange-900 focus-visible:underline underline-offset-8 decoration-2 cursor-pointer duration-300">
            Shop
          </li>
        </a>
      )}
      <a href={`#contacts`}>
        <li className="text-base dark:text-white text-black font-bold hover:text-orange-900 hover:underline focus-visible:text-orange-900 focus-visible:underline underline-offset-8 decoration-2 cursor-pointer duration-300">
          Contacts
        </li>
      </a>
    </ul>
  );
};

export default Nav;
