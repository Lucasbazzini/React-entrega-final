import React, { useState, useContext } from 'react'

const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

  //AGREGAR ALGUN PRODUCTO AL CARRITO
  const addProduct = (item, quantity) => {
		if (dentroCarrito(item.id)) {
			setCart(
				cart.map((product) => {
					return product.id === item.id
						? { ...product, quantity: product.quantity + quantity }
						: product;
				}),
			);
		} else {
			setCart([...cart, { ...item, quantity }]);
		}
	};


  const totalPrice = () => {
		return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
	};

  const totalProducts = () =>
		cart.reduce(
			(acumulador, productoActual) => acumulador + productoActual.quantity,
			0,
		);

  
  // FUNCION LIMPIAR CARRITO DE COMPRAS
  const limpiarCarrito = () => setCart([])

  // FUNCION SABER SI ESTA EN EL CARRITO O NO
  const dentroCarrito = (id) =>
		cart.find((product) => product.id === id) ? true : false;

  //BORRAR ALGUN PRODUCTO DEL CARRITO
  const quitarProcucto = (id) => setCart(cart.filter(producto => producto.id !== id))

  return (
		<CartContext.Provider
			value={{
				limpiarCarrito,
				dentroCarrito,
				quitarProcucto,
				addProduct,
				totalPrice,
				totalProducts,
				cart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};


export default CartProvider