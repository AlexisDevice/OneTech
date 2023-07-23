import { useContext } from "react";
import { cartContext } from "../context/cart";

export const useCart = () => {
    const context = useContext(cartContext);
    return context;
}