import { Outlet } from "react-router-dom"
import heroBg from "@/assets/images/bg-4.jpg"
import CreateUserPage from "../../features/users/pages/CreateUserPage"


export default function AuthLayout(){
    return(
        <div className="relative min-h-screen text-text-primary">
            {/* Fondo */}
            <div
                className="absolute inset-0 -z-10 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroBg})` }}
            />
            <div>
                <h1 className="flex items-center justify-center p-4">Auth Layout</h1>
            </div>
            
            <CreateUserPage/>
            <Outlet />
        </div>
    )
}