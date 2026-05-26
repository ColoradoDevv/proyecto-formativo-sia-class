import { Outlet } from "react-router-dom"
import heroBg from "@/assets/images/hero-bg.png"

export default function MainLayouts(){
    return(
        <div className="relative min-h-screen text-text-primary">
            {/* Fondo */}
            <div
                className="absolute inset-0 -z-10 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroBg})` }}
            />
            <Outlet />
        </div>
    )
}