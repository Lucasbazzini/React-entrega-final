import React from 'react'
import { useCartContext } from '../../context/CartContext';

const ItemCart = ({product}) => {

    const { quitarProducto } = useCartContext();
    
    return (
        <div className='itemCartContainer'>
            <img src={product.image} alt={product.title} />
            <div>
                <h1>{product.title}</h1>
                <p>Cantidad seleccionado : {product.quantity}</p>
                <p>Precio por unidad: {product.price}</p>
                <p>Subtotal: ${product.quantity * product.price}</p>
                <button onClick={() => quitarProducto(product.id)}>Eliminar del carrito </button>
            </div>
        </div>
    )
}
export default ItemCart
