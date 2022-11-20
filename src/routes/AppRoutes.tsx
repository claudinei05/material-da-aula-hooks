import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "../config/layout/Default";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import People from "../pages/People";
import Products from "../pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout page={<Home />} />,
  },
  {
    path: "/about",
    element: <DefaultLayout page={<About />} />,
  },
  {
    path: "/contact",
    element: <DefaultLayout page={<Contact />} />,
  },
  {
    path: "/people",
    element: <DefaultLayout page={<People />} />,
  },
  {
    path: "/products",
    element: <DefaultLayout page={<Products />} />,
  },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
