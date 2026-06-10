import { Input, Button, Select, Checkbox, IconButton, Dropdown, DropdownTrigger, DropdownContent, DropdownItem } from "@/shared";
import { Link, useNavigate } from "react-router-dom";
import { ExternalLink, Menu } from "lucide-react";
import { useState } from "react";
import { loginSchemas } from "../schemas/loginSchemas";
import { login } from "../services/authService";


export default function AuthForm(){
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})

    const [formData, setFormData] = useState({
        userEmail: "",
        userPassword: "",
    });


    
    // ===========================================
    //                 Handles
    // ===========================================
    // Función que se ejecuta cada vez que cambia el valor de un input del formulario
    const handleChange = (e) => {
        // Se obtiene el nombre del campo y su valor
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            // Se copian todos los valores anteriores del estado
            ...prev,

            // Se actualiza únicamente lo que cambió
            [name]: type === "checkbox" ? checked : value,
        }));
    }

        
    // Función que se ejecuta cuando se envía el formulario 
    const handleSubmit = async (e) => { 
        e.preventDefault();

        const result = loginSchemas.safeParse(formData);

        if (!result.success){
            const fieldErrors = {};
            result.error.issues.forEach((issue) => {
                fieldErrors[issue.path[0]] = issue.message;
            });
            setErrors(fieldErrors);

            return ;
        }
        
        // Si la validación es exitosa se limpian los errores anteriores 
        setErrors({});

        try {
            const data = await login(result.data);

            console.log("Respuesta del servidor:", data);
            console.log("Token recibido:", data.token);

            if (data.token) {
                sessionStorage.setItem("token", data.token);
                console.log("Token guardado en sessionStorage");
            } else {
                console.error("No se recibió token en la respuesta");
            }

            navigate("/dashboard");

        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    }

    return(
        <div className="flex flex-col justify-center h-screen">
            <h1
                className="
                    text-text-primary
                    text-2xl mb-6
                    text-center
                "
            >
                Login
            </h1>

            <form 
                className="
                    grid
                    grid-cols-1
                    items-center
                    gap-6
                "
                onSubmit={handleSubmit}
            >
                {/* Inputs */}
                <div
                    className="
                        grid 
                        grid-rows-2
                        gap-6
                        my-0 mx-auto
                        border
                        p-6
                        rounded-2xl
                    "
                >

                    <Input 
                        label = "Correo"
                        name = "userEmail"
                        placeholder = "Ingrese su correo"
                        type="email"

                        value={formData.userEmail}
                        onChange = {handleChange}
                        error={errors.userEmail}
                    />

                    <Input 
                        label = "Contraseña"
                        name  = "userPassword"
                        placeholder = "Ingrese su contraseña"
                        type="password"
                        
                        value={formData.userPassword}
                        onChange = {handleChange}
                        error={errors.userPassword}
                    />
                </div>


                {/* Actions */}
                <div 
                    className=" flex items-center justify-center gap-6"
                >

                    <Button
                        variant = "secondary"
                        size = "sm"
                        onClick={() => { navigate(-1) }} /* Función de React Router que navega a la página anterior */
                    >
                        Cancelar
                    </Button>

                    <Button
                        variant = "primary"
                        size = "sm"
                        type="submit"
                    >
                        Iniciar sesión
                    </Button>
                </div>
            </form>
        </div>
    )
    }