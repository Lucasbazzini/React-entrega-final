import ItemDetail from '../ItemDetail'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const productos = [
  {
    id : 1, image: "https://i.ibb.co/MDvbcYQ/Kingston-A400-240-GB-SATA-SSD.jpg", title:"SSD", category : "ssd"
  },
  {
    id : 2, image: "https://i.ibb.co/KLxTQqt/WD-Blue-SN550-500-GB-NVMe-SSD.jpg", title:"SSD500", category : "ssd"
  },
  {
    id : 3, image: "https://i.ibb.co/0mMXcfn/Patriot-Viper-Steel-16-GB-DDR4.jpg", title:"RAM", category : "ram"
  }
];

const ItemDetailContainer = () => {

  const [data,setData] = useState({});
  const {detailid} = useParams()

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(productos); 
      })
    })
    getData.then(res => setData(res.find(producto => producto.id === parseInt(detailid))))
  },[])

  return (
    <div>
      <ItemDetail data={data} />
    </div>
  )
}

export default ItemDetailContainer