import Title from '../Title'
import './lista.css'
import ItemCount from '../ItemCount'
import ItemList from '../ItemList'
import { useEffect, useState } from 'react'

const films = [
  {
    id : 1, image: "https://i.ibb.co/MDvbcYQ/Kingston-A400-240-GB-SATA-SSD.jpg", title:"SSD"
  },
  {
    id : 2, image: "https://i.ibb.co/KLxTQqt/WD-Blue-SN550-500-GB-NVMe-SSD.jpg", title:"SSD500"
  },
  {
    id : 3, image: "https://i.ibb.co/0mMXcfn/Patriot-Viper-Steel-16-GB-DDR4.jpg", title:"RAM"
  }
];

const ItemListContainer = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(films)
      },3000);
    })
    getData.then(res => setData(res))
  }, [])
  


  const onAdd = (quantity) =>{
    console.log(`Compraste ${quantity} productos `);
  }

  

  return (
    <div className='item-list-container'>
        <Title greeting={props.texto} />
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        <ItemList data={data} />
    </div>
  )
}

export default ItemListContainer