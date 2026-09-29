// Router

import { createBrowserRouter , Navigate} from "react-router-dom";
// Pages
import CreateUserPage from "../features/users/pages/CreateUserPage";
import { AuthForm } from "../features/auth"
import { HomePage } from "../features/home";
import { AccessPage } from "@/features/access"

// Layouts
import { AuthLayout, DashboardLayout }  from "@/shared";
import { ListUserPage } from "../features/users";
import ProtectedRoute from "../shared/components/auth/ProtectedRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/auth" replace/>
    },
    {
        path: "/auth",
        element: <AuthLayout/>,
    },
    {
        path: "/dashboard",
        element: <ProtectedRoute><DashboardLayout/></ProtectedRoute>,
        children :[
            {index: true, element: <HomePage/>},
            {path: "crear-usuario", element: <CreateUserPage/>},
            {path: "listar-usuario", element: <ListUserPage/>},
            {path: "productos", element: <HomePage/>},
            {path: "access", element: <AccessPage/>},

        ]
    },
]);

export default router;
