import { useState, useEffect } from "react";
import { getDocumentTypes } from "@/features/users/services/selectService.js";
import { Input, Button, Select, Checkbox, IconButton, Dropdown, DropdownTrigger, DropdownContent, DropdownItem } from "@/shared";
import { userSchema } from "../schemas/userSchema";
import { Link, useNavigate } from "react-router-dom";
import { ExternalLink, Menu } from "lucide-react";
import FileInput from "../../../shared/components/FileInput";
import { createUser } from "../services/userService";




export default function UserRegisterForm(){
    const navigate = useNavigate();
    // estados

    const [documentTypes, setDocumentTypes] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        userName: "", 
        userEmail: "",
        userPhone: "",
        userDocumentType: "",
        userDocumentNumber: "",
        userPassword: "",
        userImage: [],
        // Flags Booleanos
        isStaff : false,
        isActive : true,
        isSuperUser : false,
    });

    
    const [errors, setErrors] = useState({})
    
    // Efectos
    useEffect (() => {
        getDocumentTypes().then(setDocumentTypes);
    }, []);


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

    // Handles personalizados:
    
    // Función que se ejecuta cuando se envía el formulario 
    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     // Se valida el objeto de formData usando el esquema definido con Zod
    //     // safeParse devuelve un objeto indicando si la validacion fue exitosa o no
    //     const result = userSchema.safeParse(formData);

    //     // Si la validación falla
    //     if (!result.success){
    //         // Objeto donde se almacenarán los errores por campo
    //         const fieldErrors = {};

    //         // Zod devuelve los errores en un arreglo llamado issues
    //         // Se recorren para asociar cada error a su campo correspondiente
    //         result.error.issues.forEach((issue) => {
    //             // Issue.path contiene la ruta del campo que falló
    //             const field = issue.path[0];

    //             // Se guarda el mensaje de error en el objeto fieldErrors
    //             fieldErrors[field] = issue.message;
    //         });

    //         // Se actualiza el estado de errores para mostrarlos en el formulario
    //         setErrors(fieldErrors);

    //         // Se detiene la ejecución porque el formulario tiene errores
    //         return;
    //     }

    //     // Si la validación es exitosa se limpian los errores anteriores 
    //     setErrors({});

    //     // result.data contiene los datos ya validados por Zod
    //     console.log("Usuario valido:", result.data)

    // };


    //============== HANDLE SUBMIT ==============
    const handleSubmit = async (e) => {


    // Evita que el formulario recargue la página
    e.preventDefault();


    // Validamos los datos del formulario contra el esquema Zod
    // safeParse NO lanza excepción, retorna un objeto controlado
    const result = userSchema.safeParse(formData);


    // Si la validación falla
    if (!result.success) {


        // Objeto donde almacenaremos los errores por campo
        const fieldErrors = {};


        // Recorremos cada error generado por Zod
        result.error.issues.forEach((issue) => {
        // issue.path[0] corresponde al nombre del campo
        // issue.message contiene el mensaje de error definido en el schema
        fieldErrors[issue.path[0]] = issue.message;
        });


        // Actualizamos el estado de errores para mostrarlos en la UI
        setErrors(fieldErrors);


        // Cortamos la ejecución: NO se envía nada al backend
        return;
    }


    // Si la validación pasa, limpiamos errores previos
    setErrors({});


    // Activamos estado de envío (útil para deshabilitar el botón)
    setIsSubmitting(true);


    try {
        // Llamamos al servicio frontend que consume la API
        // result.data contiene los datos ya validados por Zod
        const response = await createUser(result.data);


        // Log informativo para desarrollo
        console.log("Usuario creado:", response);


        // Feedback básico al usuario
        alert("Usuario creado correctamente");


        // Navegamos a la vista anterior
        // navigate(-1) equivale a "volver atrás"
        navigate(-1);


    } catch (error) {
        // Capturamos errores de red o errores lanzados por el service
        console.error("Error:", error.message);


        // Mostramos el mensaje de error al usuario
        alert(error.message);


    } finally {
        // Pase lo que pase, desactivamos el estado de envío
        setIsSubmitting(false);
    }
    };



    return(
        <div>
            <h1
                className="
                    text-text-primary
                    text-2xl mb-6
                    text-center
                    pt-4
                "
            >
                Registro de Usuariosa
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
                        grid-cols
                        sm:grid-cols-2
                        gap-6
                        my-0 mx-auto
                        border
                        p-6
                        rounded-2xl
                        bg-black/80 
                    "
                >
                    <Input 
                        label = "Nombre"
                        name = "userName"
                        placeholder = "Ingrese su nombre"
                        value={formData.userName}
                        onChange = {handleChange}
                        error={errors.userName}
                    />

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
                        label = "Teléfono"
                        name = "userPhone"
                        placeholder = "Ingrese su teléfono"
                        type="tel"
                        value={formData.userPhone}
                        onChange = {handleChange}
                        error={errors.userPhone}
                    />

                    <Select 
                        label = "Tipo de documento"
                        name="userDocumentType"
                        options={documentTypes}
                        value={formData.userDocumentType}
                        onChange = {handleChange}
                        error={errors.userDocumentType}
                    />

                    <Input 
                        label = "Número de documento"
                        name = "userDocumentNumber"
                        placeholder = "Ingrese su número de documentos"
                        value={formData.userDocumentNumber}
                        onChange = {handleChange}
                        error={errors.userDocumentNumber}
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

                    <Checkbox
                        id="isStaff"
                        name="isStaff"
                        label="¿Es Staff?"
                        checked={formData.isStaff}
                        onChange={handleChange}
                    />
                    <Checkbox
                        id="isActive"
                        name="isActive"
                        label="¿Activo?"
                        checked={formData.isActive}
                        onChange={handleChange}
                    />
                    <Checkbox
                        id="isSuperUser"
                        name="isSuperUser"
                        label="¿Es Super Usuario?"
                        checked={formData.isSuperUser}
                        onChange={handleChange}
                    />

                    <FileInput
                        value={formData.userImage}
                        onChange={(files) => setFormData((prev) => ({ ...prev, userImage: files}))}
                        multiple={true}
                    />
                    {errors.userImage && (
                        <span className="text-red-500 text-sm">{errors.userImage}</span>
                    )}
                </div>


                {/* Actions */}
                <div 
                    className=" flex items-center justify-center gap-6"
                >
                    <Button
                        variant = "primary"
                        size = "sm"
                        onClick={handleSubmit}
                        disabled={isSubmitting} /* Deshabilita el botón mientras se envía el formulario */
                    >
                        {isSubmitting ? "Guardando..." : "Guardar"}
                    </Button>

                    <Button
                        variant = "secondary"
                        size = "sm"
                        onClick={() => { navigate(-1) }} /* Función de React Router que navega a la página anterior */
                    >
                        Cancelar
                    </Button>

                    {/* Icon Button */}
                    <Link to="/dashboard">
                        <IconButton
                            variant="default"
                        >
                            <ExternalLink/>
                        </IconButton>
                    </Link>
                </div>
            </form>
        </div>
    )
}
