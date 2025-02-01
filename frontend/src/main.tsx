import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/reset.css";
import Router from "./router";
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
