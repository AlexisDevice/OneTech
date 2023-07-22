import Header from "./components/header"
import Catalogo from "./components/Catalogo"
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Catalogo />} />
        <Route path="/categoria/:name" element={<Catalogo />} />
      </Routes>
    </div>
  )
}

export default App
