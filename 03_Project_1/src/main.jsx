import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FireBaseContextProvider } from "./context/FireBase.jsx";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FireBaseContextProvider>
        <App />
      </FireBaseContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
