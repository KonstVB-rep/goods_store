import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import ProductImage from "../modules/AtricleProduct/components/ProductImage/ProductImage";
import ProductDetails from "../modules/AtricleProduct/components/ProductDetails/ProductDetails";
import { AddButton } from "../components/UI/AddButton";

const Product = () => {
  const [product, setProduct] = useState({});

  const {
    state: { item },
  } = useLocation();

  const { image, title, oldPrice, price, des, category, isNew } = product;
  useEffect(() => {
    setProduct(item);
  }, []);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10 px-4">
        <ProductImage image={image} isNew={isNew} />
        <div className="w-3/5 flex flex-col justify-start gap-10">
          <ProductDetails details={{ title, oldPrice, price, des, category }} />
          <AddButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default Product;
