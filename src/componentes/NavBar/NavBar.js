import './NavBar.css';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import IconoCarrito from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const { productsCart } = useContext(CartContext);

    return (
        <nav className="navegacion">
            <Link className="navegacion__enlace navegacion__enlace--activo" to="/">Tienda</Link>
            <Link className="navegacion__enlace" to="/category/Buzo">Buzos</Link>
            <Link className="navegacion__enlace" to="/category/Remera">Remeras</Link>
            <Link className="navegacion__enlace" to="/us">Nosotros</Link>
            { productsCart.length > 0 ? 
            (
            <Link className="navegacion__icono" to="/cart"> <IconoCarrito /> </Link>
            ):('')

            }
        </nav>
    )
}

export default NavBar;