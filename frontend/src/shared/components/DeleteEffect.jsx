// import { useEffect, useState } from "react";

// export default function DeleteEffect(){
//     const[message, setMessage] = useState("Cargando...")

//     useEffect(() => {
//         setTimeout(() =>{
//             setMessage("Componente Cargado")
//         }, 2000);

//     },[])
//     return <h1>{message}</h1>
// }   

// ============================================
//  SEGUNDA ACTIVIDAD => useEffect
// ============================================

import { useEffect, useState } from "react";

export default function DeleteEffect(){

    console.log("render")

    const[message, setMessage] = useState("Cargando...")

    useEffect(() => {

        console.log("Efecto ejecutado")

        setTimeout(() =>{
            setMessage("Componente Cargado")
        }, 2000);

    },[])
    return <h1>{message}</h1>
}   