import './detail.css'
import ItemCount from '../ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const ItemDetail = ({ data }) => {

  const [carrito, setCarrito] = useState(false);


  const onAdd = (quantity) =>{
    setCarrito(true)
  }
  return (
    <div className='container-principal'>
      <div className='container-secundario'>
        <div className='container-img'>
          <img className='img' src={data.image} alt="" />
        </div>
        <div className='container-text'>
          <h1 className='title-detail'>{data.title}</h1>
          <p className='text-detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error, laboriosam totam earum inventore id tenetur quidem nisi! Commodi quisquam est illum eveniet assumenda aspernatur facere pariatur molestias dolore temporibus?</p>
          {
            carrito ? <Link className='finalizar' to='/cart'>Finalizar compra</Link>  : <ItemCount initial={1} stock={5} onAdd={onAdd}/>
          }
        </div>
      </div>
    </div>
  )
}

export default ItemDetail