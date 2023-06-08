import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

import { useLocation } from "react-router-dom";
import ProductImage from "../modules/AtricleProduct/components/ProductImage/ProductImage";
import ProductDetails from "../modules/AtricleProduct/components/ProductDetails/ProductDetails";
import { AddButton } from "../components/UI/AddButton";
import Preloader from "../components/UI/Preloader/Preloader";

const Product = () => {
  const [product, setProduct] = useState({});
  const [load, setLoad] = useState(true);

  const {
    state: { item, loading },
  } = useLocation();

  const { image, title, oldPrice, price, des, category, isNew } = product;

  useEffect(() => {
    setProduct(item);
    setLoad(loading);
    return () => setLoad(true);
  }, [loading, item]);

  return (
    <div className="w-full flex-col items-center lg:flex-row lg:px-4 max-w-screen-xl mx-auto my-10 flex gap-10 px-4 flex-grow">
      {load ? (
        <Preloader />
      ) : (
        <>
          <ProductImage image={image} isNew={isNew} />
          <motion.div
            animate={{ opacity: 1, display: "flex", y: 0 }}
            initial={{ opacity: 0, display: "none", y: 100 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="w-full flex flex-col justify-start gap-10 px-4 md:p-4 shadow-xl_top rounded-2xl dark:shadow-white/20"
          >
            <ProductDetails
              details={{ title, oldPrice, price, des, category }}
            />
            <AddButton product={product} />
          </motion.div>
        </>
      )}
    </div>
  );
};
export default Product;
