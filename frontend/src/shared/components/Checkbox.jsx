export default function Checkbox({
    id,                         // Identificador unico (Necesario para accesibilidad)
    name,                       // Nombre del campo (Util para formularios)    
    label,                      // Texto visible asociado al checkbox
    checked = false,            // Estado del checkbox (true o false)
    onChange,                   // Función que maneja el cambio de estado
    disabled = false,           // Indica si el checkbox esta habilitado
    className = "",             // Clases adicionales para personalización

}) {

    return (
        <label 
            htmlFor={id}
            className={`
                flex
                items-center
                gap-2
                text-sm
                cursor-pointer
                ${disabled ? "opacity-50 cursor-not-allowed" : ""}
                ${className}
            `}
        >
            {/* Input */}
            <input 
                type="checkbox"
                id={id}
                name={name}
                checked={checked}
                onChange={onChange}
                disabledd={disabled}
                className="w-5 h-5 "
            />
            {/* Texto del checkbox */}
            <span>{label}</span>
        </label>
    )
}