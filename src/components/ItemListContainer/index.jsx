import Title from '../Title'
import './lista.css'
import ItemList from '../ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const producto = [
  {
    id : 1,price: 100, image: "https://i.ibb.co/MDvbcYQ/Kingston-A400-240-GB-SATA-SSD.jpg", title:"SSD", category : "ssd"
  },
  {
    id : 2,price: 200, image: "https://i.ibb.co/KLxTQqt/WD-Blue-SN550-500-GB-NVMe-SSD.jpg", title:"SSD500", category : "ssd"
  },
  {
    id : 3,price: 300, image: "https://i.ibb.co/0mMXcfn/Patriot-Viper-Steel-16-GB-DDR4.jpg", title:"RAM", category : "ram"
  },
];

const ItemListContainer = (props) => {
  const [data, setData] = useState([]);

  const {categoryid} = useParams();


  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(producto)
      },0);
    })
    if (categoryid){
      getData.then(res => setData(res.filter(producto => producto.category === categoryid)))
    }
    else{
      getData.then(res => setData(res))
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