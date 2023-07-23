/*importaciones*/
import { createContext, useState } from "react"

export const cartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <cartContext.Provider value={
            {
                cart,
                addToCart,
                clearCart
            }}>
            {children}
        </cartContext.Provider>)
}
