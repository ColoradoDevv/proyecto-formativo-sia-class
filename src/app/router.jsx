import { createBrowserRouter } from "react-router-dom";
import MainLayouts  from "@/shared/layouts/MainLayouts";
import CreateUserPage from "../features/users/pages/CreateUserPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            {
                index: true,
                element: <h1 className="p-4">Inicio</h1>  
            },
            {
                path: "crear-usuario",
                element: <CreateUserPage />
            },
            {
                path: "recursos",
                element: <h1 className="p-4">Recursos</h1>
            },
            {
                path: "contacto",
                element: <h1 className="p-4">Contacto</h1>
            },
        ]
    },
]);

export default router;