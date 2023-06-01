import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-[100vh]">
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
