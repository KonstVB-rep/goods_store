import React from 'react';

import { createPortal } from 'react-dom';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import { Footer } from '../Footer';
import { Header } from '../Header';
import { ScrollUpArrow } from '../UI/ScrollUpArrow';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header />
      {createPortal(<ScrollUpArrow />, document.getElementById('root'))}
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;
