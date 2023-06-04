import React, { useEffect, useState, Suspense } from "react";

import { useLocation } from "react-router-dom";
import ProductImage from "../modules/AtricleProduct/components/ProductImage/ProductImage";
import ProductDetails from "../modules/AtricleProduct/components/ProductDetails/ProductDetails";
import { AddButton } from "../components/UI/AddButton";
import Preloader from "../components/Preloader/Preloader";

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
  }, []);
  console.log(image);
  return (
    <div className="w-full flex-col items-center md:flex-row  max-w-screen-xl mx-auto my-10 flex gap-10 px-4 flex-grow">
      {load ? (
        <Preloader />
      ) : (
        <>
          <ProductImage image={image} isNew={isNew} />
          <div className="w-[90%] md:w-3/5 flex flex-col justify-start gap-10">
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
