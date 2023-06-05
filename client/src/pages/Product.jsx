import React, { useEffect, useState } from "react";

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
    <div className="w-full flex-col items-center md:flex-row md:px-4 max-w-screen-xl mx-auto my-10 flex gap-10 px-4 flex-grow">
      {load ? (
        <Preloader />
      ) : (
        <>
          <ProductImage image={image} isNew={isNew} />
          <div className="w-full md:w-3/5 flex flex-col md:self-stretch justify-start gap-10 px-4 md:p-4 shadow-xl_top rounded-2xl dark:shadow-white/20">
            <ProductDetails
              details={{ title, oldPrice, price, des, category }}
            />
            <AddButton product={product} />
          </div>
        </>
      )}
    </div>
  );
};
export default Product;
