import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./user/common/ErrorPage.tsx";
import Login from "./login/Index.tsx";
import Reading from "./user/component/reading/index.tsx";
import DefaultLayout from "./layout/index.tsx";
import Admin from "./admin/index.tsx";
import TestColection from "./user/component/ielts/colection/index.tsx";
const router = createBrowserRouter([
  {
    path: "",
    element: <DefaultLayout page={<TestColection />} />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/:menu",
        element: <DefaultLayout page={<TestColection />} />,
        errorElement: <ErrorPage></ErrorPage>,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/test/:testId",
    element: <Reading />,
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
