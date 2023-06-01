import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartIcon, logoDark, logoStore, userLogo } from "assets/index";
import { Button, Dropdown, Modal } from "antd";
import SignInOut from "../SignInOut/SignInOut";

const Header = () => {
  const productsInCart = useSelector((state) => state.products.cart);
  const [open, setOpen] = useState(false);
  const userInfo = useSelector((state) => state.products.userInfo);

  return (
    <div className="w-full h-20 bg-white border-b-gray-800 sticky top-0 z-50">
      <div className="container h-full  flex items-center justify-between">
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
          <Button className="p-0 border-none" onClick={() => setOpen(true)}>
            <img
              className="w-8 h-8 rounded-full"
              src={userInfo ? userInfo.image : userLogo}
              alt="userLogo"
            />
          </Button>
          <Modal
            centered
            open={open}
            onCancel={() => setOpen(false)}
            width={400}
            bodyStyle={{
              height: "110px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
            className="h-[110px]"
            footer={[]}
          >
            {userInfo?.name && (
              <span className=" block py-4 font-lg text-center font-semibold uppercase">
                {userInfo.name}
              </span>
            )}
            <SignInOut />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Header;
