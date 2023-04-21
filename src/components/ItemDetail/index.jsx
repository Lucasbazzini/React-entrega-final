import './detail.css'
import ItemCount from '../ItemCount'
import { useCartContext } from '../../context/CartContext';
import { useState } from 'react'
import { Link } from 'react-router-dom';

const ItemDetail = ({ data }) => {

  const [carrito, setCarrito] = useState(false);
  const {addProduct} = useCartContext();


  const onAdd = (quantity) =>{
    setCarrito(true)
    addProduct(data, quantity)
  }
  return (
    <div className='container-principal'>
      <div className='container-secundario'>
        <div className='container-img'>
          <img className='img' src={data.image} alt="" />
        </div>
        <div className='container-text'>
          <h1 className='title-detail'>{data.title}</h1>
          <p className='text-detail'>{data.descripcion}</p>
          {
            carrito ? <Link className='finalizar' to='/cart'>Finalizar compra</Link>  : <ItemCount initial={1} stock={5} onAdd={onAdd}/>
          }
        </div>
      </div>
    </div>
  )
}

export default ItemDetail