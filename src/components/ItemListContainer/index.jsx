import Title from '../Title'
import './lista.css'
import ItemList from '../ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'



const ItemListContainer = (props) => {
  const [data, setData] = useState([]);

  const { categoryid } = useParams();


  useEffect(() => {
    const querydb = getFirestore()
    const queryCollection = collection(querydb, 'products')
    if (categoryid) {
      const queryFilter = query(queryCollection, where('category', '==', categoryid))
    getDocs(queryFilter)
      .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
    }
    else {
      getDocs(queryCollection)
      .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
    }

  }, [categoryid])

  return (
    <div className='item-list-container'>
      <div className='title'>
        <Title greeting={props.texto} />
      </div>
      <div className='contenedor-productos'>
        <ItemList data={data} />
      </div>
    </div>
  )
}

export default ItemListContainer