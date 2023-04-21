import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext"
import ItemCart from '../ItemCart'
import './totalPrice.css'
const Cart = () => {

  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <div className="containerMasCompras">
          <p>
          ¡No hay elementos cargados en el carrito!
          </p>
          <Link className="buttonMasCompras" to='/'>Ver los productos</Link>
        </div>
      </>
    )
  }

  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
      <p className="totalPrice">
        Total: ${totalPrice()}
      </p>
    </>
  )
}

export default Cart