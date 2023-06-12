import React from 'react';

import { Banner } from '../components/Banner';
import { ProductsList } from '../modules/ArticleProductsList';

const Home = () => {
  return (
    <div className="flex flex-col flex-grow">
      <Banner />
      <ProductsList />
    </div>
  );
};

export default Home;
