import NavBar from "./components/Navbar"
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from "./components/Cart"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from "react"
import CartProvider from "./context/CartContext"
import Error404 from "./components/Error404"


function App() {

  return (
    <>
    
      <CartProvider>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer texto='Venta de hardware para gaming!' />} />
            <Route path="/category/:categoryid" element={<ItemListContainer texto='Venta de hardware para gaming!' />} />
            <Route path="/detail/:detailid" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/detail/:detailid/*" element={<Error404 />} />
            <Route path="*" element={<Error404/>}/>
          </Routes>
      </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
