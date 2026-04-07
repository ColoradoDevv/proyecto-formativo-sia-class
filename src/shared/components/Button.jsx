export default function Button({
    variant = "primary", // Define el estilo visual
    size = "md", // Define tamaño visual
    type = "button", // Tipos de botón(buttom, submit, reset)
    children, // Contenido interno del botón(texto, icono) 
    ...props // Propiedades adicionales (onClick, disable, etc)
}){

    const variants = {
        primary: "text-brand border",
        secondary: "bg-black border border-border text-white hover:bg-surface-mute"
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
            className= {`
                relative
                inline-flex 
                items-center
                justify-center
                rounded-md
                transition-colors 
                ${variants[variant]}  
                ${sizes[size]}
                ${type}
            `}
            {...props}
            
        >
            {children}
        </button>

    )


}
