import React from "react";
import { Link } from "react-router-dom";

const navigationLink = ["Shop", "Contacts"];

const Nav = () => {
  return (
    <ul className="flex item-center gap-4 sm_460:gap-8 p-2">
      <Link to="/">
        <li className="text-base dark:text-white text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
          Home
        </li>
      </Link>
      {navigationLink.map((link) => (
        <a href={`#${link.toLowerCase()}`} key={link}>
          <li className="text-base dark:text-white text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            {link}
          </li>
        </a>
      ))}
    </ul>
  );
};

export default Nav;