import { Outlet } from "react-router-dom"
import { Navbar } from "@/shared";

import heroBg from "@/assets/images/bg-1.jpg"

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
                <Outlet />
            </main>
        </div>
    )
}
