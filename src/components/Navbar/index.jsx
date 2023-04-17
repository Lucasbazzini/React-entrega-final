import './navbar.css'
import CartWidget from '../CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='container'>
            <ul className='ul'>
                <li>
                    <NavLink to="/">
                        Inicio
                    </NavLink>

                </li>
                <li>
                    <NavLink to="/">
                        Productos
                    </NavLink>

                </li>
                <li>
                    <NavLink to="/category/procesadores">
                        Procesadores
                    </NavLink>

                </li>
                <li>
                    <NavLink to="/category/graficas">
                        Tarjetas Graficas
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/category/ssd">
                        Memorias SSD
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/category/ram">
                        Memorias RAM
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/cart'>
                    <CartWidget />
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar