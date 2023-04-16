import { useEffect, useState } from 'react'
import './contador.css'

const ItemCount = ({initial , stock , onAdd}) => {

  const [count, setCount] = useState(parseInt,{initial});

  const decrementar = () => {
    setCount(count - 1);
  }

  const incrementar = () => {
    setCount(count + 1);
  }


  useEffect(() => {
    setCount(parseInt(initial));
  },[initial])

  return (
    <div className='container-contador'>
        <button onClick={decrementar} disabled={count <= 1} className='button-contador'>-</button>
        <span className='span-contador'>{count}</span>
        <button onClick={incrementar} disabled={count >= stock} className='button-contador'>+</button>
        <div>
            <button disabled={stock <= 0} onClick={() => onAdd(count)} className='button-agregar'>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount