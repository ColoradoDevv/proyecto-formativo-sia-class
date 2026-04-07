import { useState } from "react";

export default function DeleteCounter(){
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>Contador: {count}</p>
            <button onClick={() => setCount(count + 1)} className="border p-3">Incrementar</button>
        </div>
    );

}   