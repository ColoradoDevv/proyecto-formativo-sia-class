import { useState, useEffect } from "react";

export default function DeleteCounterDos(){
    const [ count, setCount ] = useState(0)
    const [ message, setMessage ] = useState("El contador no ha cambiado")

    useEffect(() => {
        setMessage(`El contador cambio a: ${count}`)
    }, [count]);
    
    return (
        <div>
            <h2>{count}</h2>
            <p>{message}</p>
            <button onClick={() => setCount(count + 1)} className="border p-3">Incrementar</button>
        </div>
    )
}
