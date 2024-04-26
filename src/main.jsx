import React from "react";
import ReactDOM from "react-dom/client";
import route from "./Routes/Rout";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={route} />
    </AuthProvider>
  </React.StrictMode>
);
1;
