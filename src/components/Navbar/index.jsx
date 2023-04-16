import './navbar.css'
import CartWidget from '../CartWidget'

const NavBar = () => {
  return (
    <nav className='container'>
        <ul className='ul'>
            <li>
                Productos
            </li>
            <li>
                Procesadores
            </li>
            <li>
                Graficas
            </li>
            <li>
                Memorias SSD
            </li>
            <li>
                Memorias RAM
            </li>
            <li>
                <a href="">
                <CartWidget/>
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar