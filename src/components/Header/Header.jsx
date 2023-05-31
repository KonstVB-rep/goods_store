import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartIcon, logoDark, logoStore, cartImg } from "assets/index";

const Header = () => {
  const productsInCart = useSelector((state) => state.products.cart);
  // const userInfo = useSelector((state) => state.bazar.userInfo);
  return (
    <div className="w-full h-20 bg-white font-titleFont border-b-[1px] border-b-gray-800 sticky top-0 z-50 px-2">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img className="w-28" src={logoStore} alt="logoStore" />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex item-center gap-8">
            <Link to="/">
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Home
              </li>
            </Link>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <Link to="/cart">
            <div className="relative">
              <img className="w-6" src={cartIcon} alt="cartIcon" />
              <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold font-titleFont">
                {productsInCart.length}
              </span>
            </div>
          </Link>

          <Link to="/login">
            <img
              className="w-8 h-8 rounded-full"
              src={cartImg}
              // src={
              //   userInfo
              //     ? userInfo.image
              //     : "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              // }
              alt="userLogo"
            />
          </Link>

          {/*{userInfo && (*/}
          {/*  <p className="text-base font-titleFont font-semibold underline underline-offset-2">*/}
          {/*    {userInfo.name}*/}
          {/*  </p>*/}
          {/*)}*/}
        </div>
      </div>
    </div>
  );
};

export default Header;
