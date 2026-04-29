import { Search, User2, HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { IconButton, Dropdown, DropdownTrigger, DropdownContent, DropdownItem } from "@/shared";

import logo from "@/assets/logo.png"


export default function Navbar(){
    return (
        <nav className="border-b w-full ">
            {/* Contenedor */}
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* logo de marca */}
                    <div className="flex items-center">
                        <Link to={"/"} className={`text-h1 font-bold`}>
                            <img src={logo} alt="Logo" className="h-14 w-auto"/>
                        </Link>
                    </div>

                    {/* Links de navegacion */}
                    <ul className="hidden md:flex items-center gap-6">
                        <li>
                            <Link to={"/inicio"} className="hover:font-bold">
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to={"/cursos"} className="hover:font-bold">
                                Cursos
                            </Link>
                        </li>
                        <li>
                            <Link to={"/recursos"} className="hover:font-bold">
                                Recursos
                            </Link>
                        </li>
                        <li>
                            <Link to={"/contacto"} className="hover:font-bold">
                                Contacto
                            </Link>
                        </li>
                    </ul>

                    {/* Seccion Derecha: busqueda + usuario */}

                    <div className="flex items-center gap-5">
                        <div className="relative hidden sm:block">
                            {/* Icono de Busqueda */}
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-500"/>
                                
                            {/*  Input de Busqueda */}
                            <input 
                                type="text" 
                                placeholder="Buscar"
                                className="pl-9 pr-4 py-2.5 border rounded-lg text-body focus:outline-none focus:ring-2 focus:ring-text-primary"
                            />
                        </div>
                            {/* DropDown */}
                            <Dropdown className="p-10">
                                <DropdownTrigger>
                                        {/* Icono de Usuario */}
                                    <IconButton ariaLabel = "Menu">
                                        <User2/>
                                    </IconButton>
                                </DropdownTrigger>

                                <DropdownContent className="right-0 w-48">
                                    <DropdownItem>
                                        <Link to="/auth" className="block w-full">
                                            Auth
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/dashboard" className="block w-full">
                                            Dashboard
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/dashboard/auth" className="block w-full">
                                            Cerrar Sesíon
                                        </Link>
                                    </DropdownItem>
                                </DropdownContent>
                            </Dropdown>
                    </div>
                </div>
            </div>
        </nav>
    )
};