import './NavBar.css';
import IconoCarrito from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navegacion">
            <Link className="navegacion__enlace navegacion__enlace--activo" to="/">Tienda</Link>
            <Link className="navegacion__enlace" to="/category/Buzo">Buzos</Link>
            <Link className="navegacion__enlace" to="/category/Remera">Remeras</Link>
            <Link className="navegacion__enlace" to="/us">Nosotros</Link>
            <Link className="navegacion__icono" to="/carrito"> <IconoCarrito /> </Link>
        </nav>
    )
}

export default NavBar;