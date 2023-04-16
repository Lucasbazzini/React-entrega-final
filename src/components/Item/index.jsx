


const Item = ({info}) => {
  return (
    <a href="" className='container-item'>
        <img src={info.image} alt="" />
        <p>{info.title}</p>
    </a>
  )
}

export default Item