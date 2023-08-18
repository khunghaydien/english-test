import "./style/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./../fonts/icomoon/style.css";
import ErrorPage from "./user/common/ErrorPage.tsx";
import Login from "./login/Index.tsx";
import DefaultLayout from "./user/layout/index.tsx";
import Admin from "./admin/index.tsx";
import TestColection from "./user/component/colection/index.tsx";
import Test from "./user/component/test/index.tsx";
import IeltsReaing from "./container/user/test/IeltsReaing.tsx";
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
    element: <Test page={<IeltsReaing />} />,
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
