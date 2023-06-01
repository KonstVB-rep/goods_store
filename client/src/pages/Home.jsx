import React from "react";
import { Banner } from "../components/Banner";
import { ProductsList } from "../modules/ArticleProductsList";

const Home = () => {
  return (
    <div>
      <Banner />
      <ProductsList />
    </div>
  );
};

export default Home;
