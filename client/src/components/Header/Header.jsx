import React from "react";
import { Link } from "react-router-dom";
import { logoStore } from "assets/index";
import Nav from "./Nav/Nav";
import { CartLink } from "./CartLink";
import { Avatar } from "./Avatar";
import ThemeSwitcher from "../UI/ThemeSwitcher/ThemeSwitcher";
import { MobileDropDown } from "./MobileDropDown";

const Header = () => {
  return (
    <div className="relative w-full pb-0 pt-4 sm_460:py-4 bg-white dark:bg-black sticky top-0 z-50 border-b-gray-800 border-b-[1px] border-white duration-300">
      <div className="container flex-col sm:flex-row h-full flex items-center justify-between gap-2 sm_460:gap-4">
        <Link to="/" className="rounded-[40px] overflow-hidden">
          <img className="w-28" src={logoStore} alt="logoStore" />
        </Link>
        <div className="w-full justify-center sm_460:w-max flex items-center gap-2 sm_460:gap-4">
          <Nav />
          <div className="p-[1px] bg-gray-900 h-10 dark:bg-white"></div>
          <div className="flex gap-4">
            <CartLink />
            <div className="hidden sm_460:flex items-center gap-4">
              <ThemeSwitcher />
              <Avatar />
            </div>
          </div>
        </div>
      </div>
      <MobileDropDown />
    </div>
  );
};

export default Header;
