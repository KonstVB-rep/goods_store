import React from "react";
import GoShopping from "components/UI/GoShopping/GoShopping";
import { useSelector } from "react-redux";
import { selectProductsInCart } from "redux/features/appSlice";
import { AnimatePresence, motion } from "framer-motion";

const ContentEmptyCart = () => {
  const productsInCart = useSelector(selectProductsInCart);

  return (
    <AnimatePresence>
      {productsInCart.length < 1 && (
        <motion.div
          animate={{ opacity: 1, display: "flex" }}
          initial={{ opacity: 0, display: "none" }}
          transition={{ ease: "easeOut", duration: 0.3 }}
          exit={{ opacity: 0, display: "none" }}
          className="max-w-screen-xl min-h-[40vh] mx-auto pt-20 pb-10 sm_460:pt-10 flex flex-col items-center gap-4 justify-center"
        >
          <p className="text-stretchable text-orange-600 font-semibold text-center">
            Your Cart is Empty. Please go back to Shopping and add products to
            Cart.
          </p>
          <GoShopping />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContentEmptyCart;
