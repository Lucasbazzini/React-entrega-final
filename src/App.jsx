import NavBar from "./components/Navbar"
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from "./components/Cart"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from "react"
import CartProvider from "./context/CartContext"


function App() {

  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer texto='Venta de hardware para gaming!' />} />
            <Route path="/category/:categoryid" element={<ItemListContainer texto='Venta de hardware para gaming!' />} />
            <Route path="/detail/:detailid" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App
