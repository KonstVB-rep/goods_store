import React, { useEffect, useState } from "react";
import { Banner } from "../components/Banner";
import { ProductsList } from "../components/ProductsList";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState();
  const data = useLoaderData();

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <div>
      <Banner />
      <ProductsList products={products} />
    </div>
  );
};

export default Home;
