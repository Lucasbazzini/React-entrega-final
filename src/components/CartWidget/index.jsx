import { useCartContext } from '../../context/CartContext'
import './cart.css'

const CartWidget = () => {
 

  return (
    <div className='container-cart'>
        <i className="bi bi-cart3"></i>
        {/* <span>{totalProducts() || ""}</span> */}
    </div>
  )
}

export default CartWidget