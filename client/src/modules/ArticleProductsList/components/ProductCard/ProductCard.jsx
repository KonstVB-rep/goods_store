import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import IconSale from "components/IconsSale/IconSale";
import { addToCart } from "redux/features/appSlice";
import { useDispatch } from "react-redux";
import { Button } from "components/UI/Button";

const ProductCard = ({ product }) => {
  const { image, title, oldPrice, price, category, isNew, brand } = product;
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleDetails = (product) => {
    const rootId = product.title.split("").join("");
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
        loading: false,
      },
    });
  };

  return (
    <div
      tabIndex="0"
      className="image-box w-full relative group rounded-md overflow-hidden flex flex-col border-[1px] border-gray-300 bg-gradient-to-r from-gray-300 to-gray-300"
    >
      <div
        role="link"
        aria-roledescription="go to the product page"
        className="w-full cursor-pointer overflow-hidden max-h-[370px] h-[70%]"
        onClick={() => handleDetails(product)}
      >
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-300 brightness-75 group-hover:brightness-100 group-focus-visible:brightness-100"
          src={image}
          alt="productImg"
          loading="lazy"
        />
      </div>
      <div className="w-full pb-4 grow flex flex-col border-t-[1px] gap-2 dark:bg-black/80">
        <div className="flex justify-between items-center grow min-h-[40px] gap-2 pr-2 bg-white py-2 dark:bg-black/80 dark:text-white ">
          <h2
            className="font-titleFont text-base font-bold w-full pl-2 uppercase text-sm h-12"
            onClick={handleDetails}
          >
            {title?.substring(0, 15)}
          </h2>
          <div className="text-md relative w-full flex justify-end overflow-hidden self-stretch items-center py-1">
            <div className="flex gap-2 transform group-hover:translate-x-full group-focus-visible:translate-x-26 transition-transform duration-300">
              {oldPrice ? (
                <p className="line-through text-gray-500">${oldPrice} </p>
              ) : null}
              <p className="font-semibold">${price}</p>
            </div>
            <Button
              onClick={() =>
                dispatch(addToCart(product)) &
                toast.success(`${title} is added in cart`)
              }
              styles="rounded-full min-w-[100px] h-full absolute z-2 shrink-0 justify-evenly top-0 transform -translate-x-32 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 focus-visible:translate-x-0 focus-visible:opacity-100 cursor-pointer duration-300"
            >
              <span className="uppercase text-[12px] font-semibold">buy</span>
            </Button>
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
