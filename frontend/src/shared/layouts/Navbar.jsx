import { Search, User2, HomeIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { IconButton, Dropdown, DropdownTrigger, DropdownContent, DropdownItem , Switch, SearchField} from "@/shared"; 
import { logoutService } from "../../features/auth/services/logoutService";

import logo from "@/assets/logo.png"
import { useState } from "react";


export default function Navbar(){
    // Componente de busqueda

    const [search, setSearch] = useState("");

    const handleSearch = (value) => {
        console.log("Buscar: ", value)
    }

    const navigate = useNavigate();

    const handleLogout = () => {
        logoutService()
        navigate("/auth");
    }
    const handleClear = () => {
        console.log("Campo limpiado")
    }

    // Estado que cambia el switch
    const [isActive, setIsActive] = useState(true);
    
    const handleStatusChange = (value) => {
        setIsActive(value);

        // Aqui generalmente va el llamado a una API
        console.log("Nuevo estado", value)   
    }

    return (
        <nav className="border-b w-full ">
            {/* Contenedor */}
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* logo de marca */}
                    <div className="items-center hidden sm:inline-flex">
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

                    <SearchField
                        value={search}
                        onChange={setSearch}
                        onSubmit={handleSearch}
                        onClear={handleClear}
                        placeholder="Buscar productos..."
                        size="md"
                        variant="outlined"
                        className="w-75"
                    />
                    <Switch
                        checked={isActive}
                        onChange={handleStatusChange}
                        size="md"
                        className="hidden sm:inline-flex"
                    />

                    {/* Seccion Derecha: busqueda + usuario */}

                    <div className="flex items-center gap-5">
                        <div className="relative hidden sm:block">
                            {/* Icono de Busqueda */}
                            {/* <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-500"/> */}
                                
                            {/*  Input de Busqueda */}
                            {/* <input 
                                type="text" 
                                placeholder="Buscar"
                                className="pl-9 pr-4 py-2.5 border rounded-lg text-body focus:outline-none focus:ring-2 focus:ring-text-primary"
                            /> */}



                        </div>
                            {/* DropDown */}
                            <Dropdown className="p-2">
                                <DropdownTrigger>
                                        {/* Icono de Usuario */}
                                    <IconButton ariaLabel = "Menu">
                                        <User2/>
                                    </IconButton>
                                </DropdownTrigger>

                                <DropdownContent className="right-0 w-48">
                                    <DropdownItem>
                                        <Link to="/dashboard" className="block w-full">
                                            Dashboard
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/dashboard/listar-usuario" className="block w-full">
                                            Gestion de Usuarios
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/dashboard/access" className="block w-ful">
                                            Admin
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem onClick={handleLogout}>
                                            Cerrar Sesión
                                    </DropdownItem>
                                </DropdownContent>
                            </Dropdown>
                    </div>
                </div>
            </div>
        </nav>
    )
};
