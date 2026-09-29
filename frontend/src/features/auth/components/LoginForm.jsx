import { Input, Button, Select, Checkbox, IconButton, Dropdown, DropdownTrigger, DropdownContent, DropdownItem } from "@/shared";
import { Link, useNavigate } from "react-router-dom";
import { ExternalLink, Menu } from "lucide-react";
import { useState } from "react";
import { loginSchemas } from "../schemas/loginSchemas";
import { login } from "../services/authService";


export default function AuthForm(){
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const [generalError, setGeneralError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

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
        // Limpia el error general en cuanto el usuario corrige algo
        if (generalError) setGeneralError("");
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
        setGeneralError("");
        setIsLoading(true);

        try {
            const data = await login(result.data);

            if (data.token) {
                sessionStorage.setItem("token", data.token);
            } else {
                throw new Error("No se recibió token en la respuesta");
            }

            navigate("/dashboard");

        } catch (error) {
            setGeneralError(error.message || "Error al iniciar sesión");
        } finally {
            setIsLoading(false);
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
                        grid-cols-1
                        gap-6
                        my-0 mx-auto
                        border
                        p-6
                        rounded-2xl
                        w-full
                        max-w-sm
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

                    <div aria-live="polite" className="min-h-6">
                        {generalError && (
                            <p className="text-sm text-center font-medium text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2" role="alert">
                                {generalError}
                            </p>
                        )}
                    </div>
                </div>


                {/* Actions */}
                <div 
                    className=" flex items-center justify-center gap-6"
                >

                    <Button
                        variant = "secondary"
                        size = "sm"
                        type="button"
                        onClick={() => { navigate(-1) }} /* Función de React Router que navega a la página anterior */
                    >
                        Cancelar
                    </Button>

                    <Button
                        variant = "primary"
                        size = "sm"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? "Ingresando..." : "Iniciar sesión"}
                    </Button>
                </div>
            </form>
        </div>
    )
    }