import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./user/common/ErrorPage.tsx";
import Login from "./login/Index.tsx";
import DefaultLayout from "./user/layout/index.tsx";
import Admin from "./admin/index.tsx";
import TestColection from "./user/component/colection/index.tsx";
import Test from "./user/component/test/index.tsx";
import PdfViewer from "./user/component/test/reading/PdfViewer.tsx";
import "./../fonts/icomoon/style.css";
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
    element: <Test page={<PdfViewer />} />,
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
