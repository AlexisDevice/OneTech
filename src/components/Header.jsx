/*importaciones*/

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Categories from "./Category";
import tienda from '../assets/basket2-fill.svg'

function Header() {

    const [categorias, setCategorias] = useState(undefined);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setCategorias(data);
    }

  return (
    <div className="header">
      <Link to={'/'}>Catalogo</Link>
      <div className="filtros">
        {categorias?.map((val, index) => (
            <Categories Category={val} key={index} />
        ))}
      </div>
      <img src={tienda} alt="Tienda" />
    </div>
  )
}

export default Header