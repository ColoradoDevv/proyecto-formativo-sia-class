import { Card } from "@/shared";
import { products } from "../../../../data/products/products";

export default function HomePage(){

    return (
        <div className="mt-10 ">
            {/* Hero */}
            {/* Carrusel */}
            {/* Titulo */}  
            <h2 className="text-h2 place-self-center mb-12">Productos</h2>
            {/* Cards */}
            <div 
                className="
                    grid
                    gap-6
                    max-w-max
                    place-self-center
                    sm:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-4
                    justify-items-center
                "
            >
                {products.map((product) => (
                    <Card key={product.id} product={product}/>
                ))}

            </div>
        </div>
    )
}