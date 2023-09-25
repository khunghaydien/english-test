import "./style/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./../fonts/icomoon/style.css";
import ErrorPage from "./common/error-page/index.tsx";
import { useEffect, useState } from "react";
import { onMessageListener, requestPermission } from "./firebase.ts";
import { useDispatch } from "react-redux";
import { addNotification } from "./store/reducer/user/notification.ts";
import DefaultLayout from "./layout/DefaultLayout.tsx";
import MainSectionLayout from "./layout/MainSectionLayout.tsx";
import Home from "./page/home";
import TipPage from "./page/tip";
import ExamSetPage from "./page/exam/exam-set";
import ExamSolutionPage from "./page/exam/exam-solution";
import ExamColectionPage from "./page/exam/exam-colection";
import LoginLayout from "./layout/LoginLayout.tsx";
import Login from "./container/login/index.tsx";
import ExamTestLayout from "./layout/ExamTestLayout.tsx";
import IeltsReaing from "./container/exam/exam-test/IeltsReaing.tsx";
const router = createBrowserRouter([
  {
    path: "",
    element: <DefaultLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "",
        element: <MainSectionLayout />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
          {
            path: "tip/:id",
            element: <TipPage />,
            errorElement: <ErrorPage></ErrorPage>,
          },
          {
            path: "exam-set/:id",
            element: <ExamSetPage />,
            errorElement: <ErrorPage></ErrorPage>,
          },
          {
            path: "exam-solution/:id",
            element: <ExamSolutionPage />,
            errorElement: <ErrorPage></ErrorPage>,
          },
          {
            path: ":page/:id",
            element: <ExamColectionPage />,
            errorElement: <ErrorPage></ErrorPage>,
          },
        ],
      },
      {
        path: "/account",
        element: <LoginLayout />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
          {
            path: ":page",
            element: <Login />,
            errorElement: <ErrorPage></ErrorPage>,
          },
        ],
      },
    ],
  },
  {
    path: "/exam",
    element: <ExamTestLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: ":examType/:type/:testId",
        element: <IeltsReaing />,
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
