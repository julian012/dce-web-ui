import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";
import { PrivateRoute } from "../components/PrivateRoute";
import Purchases from "../pages/private/Purchases";
import PaymentMethods from "../pages/private/PaymentMethods";
import Shop from "../pages/private/Shop";
import Dashboard from "../pages/private/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // Rutas públicas
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      
      // Rutas privadas
      {
        path: "dashboard",
        element: <PrivateRoute />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "purchases", element: <Purchases /> },
          { path: "payment-methods", element: <PaymentMethods /> },
          { path: "shop", element: <Shop /> },
        ],
      },
    ],
  },
]);