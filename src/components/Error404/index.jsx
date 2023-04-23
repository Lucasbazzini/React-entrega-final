import { Link } from 'react-router-dom';
import './error.css'

const Error404 = () => {
  return (
    <div className='container-error'>
        <h1 >
            Error 404
        </h1>
        <p>¡Pagina no encontrada!</p>
        <Link className='volver' to="/">Ver productos</Link>
    </div>
  )
}

export default Error404