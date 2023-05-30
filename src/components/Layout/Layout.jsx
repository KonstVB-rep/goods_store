import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration
        getKey={(location) => {
          return location.pathname;
        }}
      />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;
