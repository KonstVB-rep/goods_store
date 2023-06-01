import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

const ContentEmptyCart = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-10 flex flex-col items-center gap-4 justify-center">
      <p className="text-xl text-orange-600 font-semibold">
        Your Cart is Empty. Please go back to Shopping and add products to Cart.
      </p>
      <Link
        to="/"
        className="w-max flex items-center gap-1 py-1 px-3 rounded-3xl text-gray-400 duration-300 uppercase font-semibold hover:bg-blue-600 focus-visible:bg-blue-500 hover:text-white focus-visible:text-white active:bg-orange-500"
      >
        <span>
          <HiOutlineArrowLeft />
        </span>
        go shopping
      </Link>
    </div>
  );
};

export default ContentEmptyCart;
