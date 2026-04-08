import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { GlobalProvider } from "./context/GlobalContext";

const Main = () => (
  <React.StrictMode>
    {/* El Provider envuelve al Router para que todas las rutas tengan acceso al contexto */}
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </React.StrictMode>
);

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No se encontró el elemento #root en el HTML");
}

ReactDOM.createRoot(rootElement).render(<Main />);