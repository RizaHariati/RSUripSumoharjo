import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { AppProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
