import './navbar.css'
import CartWidget from '../CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='container'>
            <ul className='ul'>
                <li>
                    <NavLink className='link-nav' to="/">
                        Productos
                    </NavLink>

                </li>
                <li>
                    <NavLink className='link-nav' to="/category/procesadores">
                        Procesadores
                    </NavLink>

                </li>
                <li>
                    <NavLink className='link-nav' to="/category/graficas">
                        Tarjetas Graficas
                    </NavLink>
                </li>
                <li>
                    <NavLink  className='link-nav' to="/category/ssd">
                        Memorias SSD
                    </NavLink>
                </li>
                <li>
                    <NavLink className='link-nav' to="/category/ram">
                        Memorias RAM
                    </NavLink>
                </li>
                <li>
                    <NavLink className='link-nav' to='/cart'>
                    <CartWidget />
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar