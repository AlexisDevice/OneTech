/*importaciones*/
import { Routes, Route } from "react-router-dom"
import Carrito from '../components/Carrito'
import Catalogo from "../components/Catalogo"

function Router() {

    return (
        <Routes>
            <Route path="/" element={<Catalogo />} />
            <Route path="/categoria/:name" element={<Catalogo />} />
            <Route path="/cart" element={<Carrito />} />
        </Routes>
    )
}

export default Router