import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/Root.tsx";
import ErrorPage from "./ErrorPage.tsx";
import InputPage from "./routes/InputPage.tsx";
import "./index.css";
import Index from "./routes/index.tsx";
import Confirm from "./routes/Confirm.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      { path: "/input", element: <InputPage /> },
      { path: "/confirm", element: <Confirm /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
