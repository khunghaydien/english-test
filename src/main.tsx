import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.scss";
import "./../fonts/icomoon/style.css";
import { store } from "./store";
import { Provider } from "react-redux";
import App from "./App";
import "./language";
import './notification'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App></App>
    </Provider>
  </React.StrictMode>
);
