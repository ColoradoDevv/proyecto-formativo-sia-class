// Router
import { createBrowserRouter , Navigate} from "react-router-dom";
// Pages
import CreateUserPage from "../features/users/pages/CreateUserPage";
// Layouts
import {MainLayouts, CallToActionLayout, AuthLayout, DashboardLayout}  from "@/shared";
import { Heading1 } from "lucide-react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/auth" replace/>
    },
    {
        path: "/auth",
        element: <AuthLayout/>,
        children: [{ index: true}]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout/>,
        children :[
            {index: true, element: <h1>Inicio Dashboard</h1>},
            {path: "contacto", element: <h1>Contacto</h1>},
            {path: "usuarios", element: <h1>Usuarios</h1>},
            {path: "productos", element: <h1>Productos</h1>},

        ]
    }

]);

export default router;