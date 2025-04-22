import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Register from "../pages/public/Register";
import Cart from "../domains/cart/presentation/pages/cart.tsx";
import PaymentMethods from "../pages/private/PaymentMethods";
import Dashboard from "../pages/private/Dashboard";
import Login from "../domains/authenticacion/presentation/pages/login"
import {Catalog} from "../domains/catalog/presentation/pages/catalog";
import History from "../domains/history/presentation/pages/index.tsx"

export const router = createBrowserRouter([
    {
        path: "/",
        // element: ,
        children: [
            // Rutas públicas
            {path: "login", element: <Login/>},
            {path: "register", element: <Register/>},

            // Rutas privadas
            {
                path: "dashboard",
                element: <MainLayout/>,
                children: [
                    {index: true, element: <Dashboard/>},
                    {path: "purchases", element: <Cart/>},
                    {path: "payment-methods", element: <PaymentMethods/>},
                    {path: "catalog", element: <Catalog/>},
                    {path: "history", element: <History/>}
                ],
            },
        ],
    },
]);