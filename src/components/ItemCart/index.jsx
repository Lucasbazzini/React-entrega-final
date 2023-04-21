import React from 'react'
import { useCartContext } from '../../context/CartContext';
import './item-cart.css'

const ItemCart = ({ product }) => {

    const { quitarProducto } = useCartContext();

    return (
        <div className='itemCartContainer'>
            <div className='container-img-text'>
                <div className='img-cart'>
                    <img src={product.image} alt={product.title} />
                </div>
                <div className='text-cart'>
                    <h1>{product.title}</h1>
                    <p>Cantidad seleccionado : {product.quantity}</p>
                    <p>Precio por unidad: {product.price}</p>
                    <p>Subtotal: ${product.quantity * product.price}</p>
                    <button onClick={() => quitarProducto(product.id)}>Eliminar del carrito </button>
                </div>
            </div>

        </div>
    )
}
export default ItemCart
