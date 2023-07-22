/*importaciones*/

import { useEffect, useState } from "react";
import Producto from "./Producto";
import { useParams } from "react-router-dom";

function Catalogo() {
    const [products, setProduct] = useState(undefined);
    const { name } = useParams();

    useEffect(() => {
        getData(name);
    }, [name])

    async function getData(categoria) {
        let response;
        if (categoria != undefined) {
            response = await fetch(`https://fakestoreapi.com/products/category/${categoria}`);
        }else {
            response = await fetch(`https://fakestoreapi.com/products`);
        }
        const data = await response.json();
        setProduct(data);
    }

    return (
        <div className="catalogo">
            {products?.map((product) => (
                <Producto info={product} key={product.title} />
            ))}
        </div>
    )
}

export default Catalogo