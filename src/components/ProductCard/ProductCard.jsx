import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { BsArrowRight } from "react-icons/bs";
import { Image } from "antd";
import { Link, useNavigate } from "react-router-dom";
import IconSale from "../IconsSale/IconSale";
import { addToCart } from "../../redux/features/productsSlice";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const { image, title, oldPrice, price, category, isNew, brand } = product;
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const rootId = title.split("").join("");

  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };

  return (
    <div
      tabIndex="0"
      className="image-box w-full relative group rounded-md overflow-hidden flex flex-col border-[1px] border-gray-300 bg-gradient-to-t from-gray-300 via-gray-400 to-gray-500"
    >
      <div
        role="link"
        aria-roledescription="go to the product page"
        className="w-full h-96 cursor-pointer overflow-hidden "
        onClick={handleDetails}
      >
        <img
          className="w-full h-full group-hover:scale-110 duration-300 brightness-75 group-hover:brightness-100 group-focus-visible:brightness-100"
          src={image}
          alt="productImg"
        />
      </div>
      <div className="w-full py-4 grow flex flex-col border-t-[1px] gap-2">
        <div className="flex justify-between items-center grow min-h-[40px] gap-2 pr-2 bg-white">
          {/*<Link to={`/product/${_id}`}>*/}
          <h2
            className="font-titleFont text-base font-bold w-full pl-2 uppercase text-sm"
            onClick={handleDetails}
          >
            {title?.substring(0, 15)}
          </h2>
          {/*</Link>*/}
          <div className="text-md relative w-full flex justify-end overflow-hidden self-stretch items-center py-1">
            <div className="flex gap-2 transform group-hover:translate-x-full group-focus-visible:translate-x-26 transition-transform duration-300">
              <p className="line-through text-gray-500">
                {oldPrice ? `$${oldPrice}` : null}
              </p>
              <p className="font-semibold">${price}</p>
            </div>
            <button
              onClick={() =>
                dispatch(addToCart(product)) &
                toast.success(`${title} is added in cart`)
              }
              className="absolute z-20 w-[100px] h-full shrink-0 rounded-3xl border-2 border-transparent text-white py-1 px-3 bg-black hover:bg-[#0958d9] focus-visible:bg-[#0958d9] focus-visible:border-gray-900 flex items-center gap-1 w-full justify-evenly top-0 transform -translate-x-32 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 focus-visible:translate-x-0 focus-visible:opacity-100 cursor-pointer duration-300 active:bg-[#69b1ff] active:text-black"
            >
              <span className="uppercase text-[12px]">add to cart</span>
              <span>
                <BsArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="uppercase font-semibold text-white bg-blue-900 px-2 w-max rounded-r-lg">
            {brand}
          </p>
          <p className="uppercase font-semibold text-white bg-blue-900 px-2 w-max rounded-r-lg">
            {category}
          </p>
        </div>
      </div>
      <IconSale isNew={isNew} />
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default ProductCard;
