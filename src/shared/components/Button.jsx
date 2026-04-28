// Componente Boton - Boton reutilizable con variantes visuales y tamaños controlados, área interactiva mínima de 48px

export default function Button({
    variant = "primary", // Define el estilo visual
    size = "md", // Define tamaño visual
    type = "button", // Tipos de botón(buttom, submit, reset)
    children, // Contenido interno del botón(texto, icono) 
    className = "",
    ...props // Propiedades adicionales (onClick, disable, etc)
}){

    const variants = {
        primary: "text-brand border text-body hover:bg-surface-hover  hover:text-text cursor-pointer",

        secondary: "bg-background border border-border text-text hover:bg-surface-hover hover:text-text-inverse cursor-pointer",
    }

    const sizes = {
        sm: `
            h-9 px-3 
            before:absolute before:content-['']
            before:-inset-y-[6px] before:-inset-x-[0px]
        `,
        md: `
            h-10 px-4 
            before:absolute before:content-['']
            before:-inset-y-[7px] before:-inset-x-[0px]
        `
    }

    return(

        <button
            type={type}
            className= {`
                relative
                inline-flex 
                items-center
                justify-center
                rounded-md
                transition-colors 
                ${variants[variant]}  
                ${sizes[size]}
                ${className}
            `}
            {...props}
             
        >
            {children}
        </button>

    )


}
