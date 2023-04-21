import { useCartContext } from '../../context/CartContext'
import './cart.css'

const CartWidget = () => {
 
  const {totalProducts} = useCartContext()
  return (
    <div className='container-cart'>
        <i className="bi bi-cart3"></i>
         <span className='span-cart'>{totalProducts() || ""}</span> 
    </div>
  )
}

export default CartWidget