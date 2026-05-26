export default function Select({
    label,
    name,
    value,
    onChange,
    options = [],
}){


    return(
        <div
            className="
                w-80
            "
        >
            {label && (
                <label
                    className="
                        block
                        text-caption
                        mb-1
                        place-self-start
                    "
                >
                    {label}
                </label>
            )}

            <select
                name={name}
                value={value}
                onChange={onChange}
                className="
                    w-full
                    h-12
                    border 
                    border-border
                    px-4
                    bg-white
                    text-black
                "
            >
                <option
                    value=""
                >
                    Seleccione una opción
                </option>

                {   
                    options.map((opt) => (
                        <option
                            key={opt.value}
                            value={opt.value}
                        >
                            {opt.label}
                        </option>
                    ))
                }

            </select>

        </div>
    )
}