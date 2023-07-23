import Header from "./components/header"
import Catalogo from "./components/Catalogo"
import { Route, Routes } from "react-router-dom"
import { CartProvider } from "./context/cart"
import Carrito from './components/Carrito'


function App() {
  return (
    <div className="container">
      <Header />
      <CartProvider>
        <Routes>
          <Route path="/" element={<Catalogo />} />
          <Route path="/categoria/:name" element={<Catalogo />} />
          <Route path="/cart" element={<Carrito />} />
        </Routes>
      </CartProvider>
    </div>
  )
}

export default App
