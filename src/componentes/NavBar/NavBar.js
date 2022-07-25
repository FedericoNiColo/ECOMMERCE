import './NavBar.css';
import IconoCarrito from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className="    navegacion">
            <a className="navegacion__enlace navegacion__enlace--activo" href="index.html">Tienda</a>
            <a className="navegacion__enlace" href="paginas/nosotros.html">Nosotros</a>
            <a className="navegacion__icono" href="paginas/nosotros.html"> <IconoCarrito /> </a>
        </nav>
    )
}

export default NavBar;