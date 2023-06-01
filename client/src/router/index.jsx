import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import { productsData } from "../modules/ArticleProductsList/api/api";
import { ErrorElement } from "../components/ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
        errorElement: <ErrorElement />,
      },
      {
        path: "/product/:id",
        element: <Product />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
