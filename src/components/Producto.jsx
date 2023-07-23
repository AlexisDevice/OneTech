/*importaciones*/
import { useCart } from "../hooks/useCart.js"

function Producto({info}) {
  const { addToCart } = useCart();

  return (
    <div className="producto">
        <img src={info?.image} />
        <div className="info">
            <span>{info?.title}</span>
            <p>{info?.description}</p>
                <button onClick={() => addToCart(info)}>$ {info?.price}</button>
        </div>
    </div>
  )
}

export default Producto