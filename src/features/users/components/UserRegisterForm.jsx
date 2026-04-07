import { useState, useEffect } from "react";

import { getDocumentTypes } from "@/features/users/services/selectService.js";

import { Input, Button, Select } from "@/shared";


export default function UserRegisterForm(){

    const [documentTypes, setDocumentTypes] = useState([]);

    useEffect (() => {
        getDocumentTypes().then(setDocumentTypes);
    }, []);

    // Handle
    const handleNameChange = (e)  => {
        console.log("Nombre: ", e.target.value)
    }

    const handleEmailBlur = (e)  => {
        console.log("Email: ", e.target.value)
    }

    return(
        <div>
            <h1
                className="
                    text-text-primary
                    text-2xl mb-6
                "
            >
                Registro de Usuarios
            </h1>

            <form 
                className="
                    grid
                    grid-cols-1
                    items-center
                    gap-6
                    
                "
            >
                {/* Inputs */}
                <div
                    className="
                        grid 
                        grid-cols-2
                        gap-6
                        my-0 mx-auto
                    "
                >
                    <Input 
                        label = "Nombre"
                        placeholder = "Ingrese su nombre"
                        onChange = {handleNameChange}
                    />

                    <Input 
                        label = "Edad"
                        placeholder = "Ingrese su edad"
                        type="number"
                    />

                    <Input 
                        label = "Teléfono"
                        placeholder = "Ingrese su teléfono"
                        type="tel"
                    />

                    <Input 
                        label = "Correo"
                        placeholder = "Ingrese su correo"
                        type="email"
                        onBlur = {handleEmailBlur}
                    />

                    <Input 
                        label = "Contraseña"
                        placeholder = "Ingrese su contraseña"
                        type="password"
                    />

                    <Input 
                        label = "Contraseña"
                        placeholder = "Ingrese su contraseña"
                        type="password"
                    />

                    <Input 
                        label = "Contraseña"
                        placeholder = "Ingrese su contraseña"
                        type="password"
                    />

                    <Input 
                        label = "Contraseña"
                        placeholder = "Ingrese su contraseña"
                        type="password"
                    />

                    <Select 
                        label = "Tipo de documento"
                        name="documentType"
                        options={documentTypes}
                    />
                </div>


                {/* Actions */}
                <div 
                    className=" flex items-center justify-center gap-6"
                >
                    <Button
                        variant = "primary"
                        size = "sm"
                    >
                        Guardar
                    </Button>

                    <Button
                        variant = "secondary"
                        size = "sm"
                    >
                        Cancelar
                    </Button>
                </div>
            </form>

        </div>
    )
}