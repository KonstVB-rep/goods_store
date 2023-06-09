import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

const GoShopping = () => {
  return (
    <Link
      to="/"
      className="w-max border-2 border-gray-400 flex items-center gap-1 py-1 px-3 ml-3 rounded-3xl text-gray-400 uppercase font-semibold hover:border-transparent focus-visible:border-transparent hover:bg-blue-600 focus-visible:bg-blue-500 hover:text-white focus-visible:text-white active:bg-orange-500"
    >
      <HiOutlineArrowLeft />
      go shopping
    </Link>
  );
};

export default GoShopping;
