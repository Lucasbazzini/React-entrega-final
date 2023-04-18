import React, { useState, useContext } from 'react'

const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  //AGREGAR ALGUN PRODUCTO AL CARRITO
  const addProduct = (item, newQuantity) => {
    const { quantity = 0} = cart.find(prod => prod.id === item.id) || {}
    const newCart = cart.filter(prod => prod.id !== item.id)
    setCart([...newCart, {...item, quantity: quantity + newQuantity}])
  }

  console.log('carrito' , cart);

  // FUNCION LIMPIAR CARRITO DE COMPRAS
  const limpiarCarrito = () => setCart([])

  // FUNCION SABER SI ESTA EN EL CARRITO O NO
  const dentroCarrito = (id) => {
    return cart.find(product => product.id === id) ? true : false
  }

  //BORRAR ALGUN PRODUCTO DEL CARRITO
  const quitarProcucto = (id) => setCart(cart.filter(producto => producto.id !== id))

  return (
    <CartContext.Provider value={{
      limpiarCarrito,
      dentroCarrito,
      quitarProcucto,
      addProduct
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider