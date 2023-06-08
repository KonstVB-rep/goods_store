import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import Home from "../pages/Home";
import { productsData } from "../modules/ArticleProductsList/api/api";
import Preloader from "../components/UI/Preloader/Preloader";
import NotFoundPage from "../pages/NotFoundPage";

const Cart = lazy(() => import("../pages/Cart"));
const Product = lazy(() => import("../pages/Product"));
const ErrorElement = lazy(() =>
  import("../components/ErrorElement").then((module) => ({
    default: module.ErrorElement,
  }))
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
        errorElement: (
          <Suspense fallback={<Preloader />}>
            <ErrorElement />
          </Suspense>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <Suspense fallback={<Preloader />}>
            <Product />
          </Suspense>
        ),
        errorElement: (
          <Suspense fallback={<Preloader />}>
            <ErrorElement />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Preloader />}>
            <Cart />
          </Suspense>
        ),
        errorElement: (
          <Suspense fallback={<Preloader />}>
            <ErrorElement />
          </Suspense>
        ),
      },
      {
        path: "/*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
