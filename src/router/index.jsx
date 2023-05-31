import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import Login from "pages/Login";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import { productsData } from "../modules/ArticleProductsList/api/api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
