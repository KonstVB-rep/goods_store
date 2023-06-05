import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { createPortal } from "react-dom";
import { ScrollUpArrow } from "../UI/ScrollUpArrow";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header />
      {createPortal(<ScrollUpArrow />, document.getElementById("root"))}
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
