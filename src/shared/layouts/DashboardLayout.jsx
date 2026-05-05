import { Link, Outlet } from "react-router-dom"
import { IconButton, Navbar } from "@/shared";

import { AuthForm } from "../../features/auth"
import { HomePage } from "@/features/home"


import heroBg from "@/assets/images/bg-1.jpg"
import { Undo2 } from "lucide-react"

export default function DashboardLayout(){
    return(
        <div className="relative min-h-screen text-text-primary">
            {/* Fondo */}
            <div
                className="absolute inset-0 -z-10 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroBg})` }}
            />
            {/* Navbar */}
            <Navbar />
        
            <main>
                <HomePage/>
                <Outlet />
            </main>
        </div>
    )
}