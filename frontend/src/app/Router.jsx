// Router

import { createBrowserRouter , Navigate} from "react-router-dom";
// Pages
import CreateUserPage from "../features/users/pages/CreateUserPage";
import { AuthForm } from "../features/auth"
import { HomePage } from "../features/home";
// Layouts
import { AuthLayout, DashboardLayout }  from "@/shared";
import { ListUserPage } from "../features/users";

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
            {index: true, element: <HomePage/>},
            {path: "auth", element: <AuthForm/>},
            {path: "crear-usuario", element: <CreateUserPage/>},
            {path: "listar-usuario", element: <ListUserPage/>},
            {path: "productos", element: <HomePage/>},

        ]
    },
]);

export default router;
