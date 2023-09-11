import "./style/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./../fonts/icomoon/style.css";
import ErrorPage from "./common/error-page/index.tsx";
import Login from "./component/login/Index.tsx";
import Home from "./component/index";
import Exam from "./component/exam/index.tsx";
import ExamPage from "./page/Exam.tsx";
import Admin from "./container/admin/index.tsx";
import AdminPage from "./page/Admin.tsx";
import Index from "./component/index/Home.tsx";
import MainSection from "./component/index/MainSection.tsx";
import HomePage from "./page/Home.tsx";
const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Index />,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: ":page",
        element: <MainSection />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
          {
            path: ":pageId",
            element: <HomePage />,
            errorElement: <ErrorPage></ErrorPage>,
          },
        ],
      },
    ],
  },
  {
    path: "/exam",
    element: <Exam />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/exam/:examType/:type/:testId",
        element: <ExamPage />,
        errorElement: <ErrorPage></ErrorPage>,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/admin/:adminPage",
        element: <AdminPage />,
        errorElement: <ErrorPage></ErrorPage>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
