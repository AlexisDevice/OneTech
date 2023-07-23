/*importaciones*/
import { useCart } from '../hooks/useCart.js'
import Producto from './Producto.jsx';

function Carrito() {

    const { cart } = useCart();

    return (
        <div className="catalogo">
            {cart?.map((product, index) => (
                <Producto info={product} key={index} />
            ))}
        </div>
    )
}

export default Carrito