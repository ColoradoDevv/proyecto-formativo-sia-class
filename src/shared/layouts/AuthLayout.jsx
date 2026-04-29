import { Outlet } from "react-router-dom"
import heroBg from "@/assets/images/bg-4.jpg"
import CreateUserPage from "../../features/users/pages/CreateUserPage"

import { AuthForm } from "../../features/auth"


export default function AuthLayout(){
    return(
        <div className="relative min-h-screen text-text-primary">
            {/* Fondo */}
            <div
                className="absolute inset-0 -z-10 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroBg})` }}
            />
            <main>
                <AuthForm/>
                <Outlet />
            </main>
        </div>
    )
}