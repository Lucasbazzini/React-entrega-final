import ItemDetail from '../ItemDetail'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc} from 'firebase/firestore'



const ItemDetailContainer = () => {

  const [data,setData] = useState({});
  const {detailid} = useParams()

  useEffect(() => {
    const querydb = getFirestore()
    const queryDoc = doc(querydb, 'products' , detailid)
    getDoc(queryDoc)
    .then(res => setData({id: res.id, ...res.data()}))
  },[])

  return (
    <div>
      <ItemDetail data={data} />
    </div>
  )
}

export default ItemDetailContainer