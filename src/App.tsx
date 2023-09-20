import "./style/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./../fonts/icomoon/style.css";
import ErrorPage from "./common/error-page/index.tsx";
import Home from "./component/index";
import Exam from "./component/exam/index.tsx";
import ExamPage from "./page/Exam.tsx";
import Admin from "./container/admin/index.tsx";
import AdminPage from "./page/Admin.tsx";
import Index from "./component/index/Home.tsx";
import MainSection from "./component/index/MainSection.tsx";
import HomePage from "./page/Home.tsx";
import Login from "./component/login/index.tsx";
import LoginPage from "./page/Login.tsx";
import { useEffect, useState } from "react";
import { onMessageListener, requestPermission } from "./firebase.ts";
import { useDispatch } from "react-redux";
import { addNotification } from "./store/reducer/user/notification.ts";
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
    path: "/account",
    element: <Login />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: ":page",
        element: <LoginPage />,
        errorElement: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);
const App = () => {
  const dispatch = useDispatch()
  const [time, setTime] = useState(Math.floor(new Date().getTime() / 1000));
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    requestPermission();
    const channel = new BroadcastChannel("notifications");
    channel.onmessage = (event) => {
      dispatch(addNotification({ title: event.data.notification.title, body: event.data.notification.body, sentTime: time, isRead: true }))
    }
  }, []);

  onMessageListener()
    .then((payload: any) => {
      console.log(payload);
      dispatch(addNotification({ title: payload.notification.title, body: payload.notification.body, sentTime: time, isRead: true }))
    })
    .catch((err) => console.log('failed: ', err));

  if (
    window.location.pathname === "/account" ||
    window.location.pathname === "/account/"
  )
    router.navigate("/account/login");
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
