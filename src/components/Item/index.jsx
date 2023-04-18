import './item.css'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

const Item = ({ info }) => {



  return (
    <Link to={`/detail/${info.id}`} className='container-item'>
      <img className='imagen-item' src={info.image} alt="" />
      <p>{info.title}</p>
    </Link>
  )
}

export default Item