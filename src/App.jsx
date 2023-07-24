import Header from "./components/header"
import Router from "./services/Router"
import { CartProvider } from "./context/cart"



function App() {
  return (
    <div className="container">
      <Header />
      <CartProvider>
        <Router />
      </CartProvider>
    </div>
  )
}

export default App
