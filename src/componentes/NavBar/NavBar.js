import './NavBar.css';
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import IconoCarrito from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const { productsCart } = useContext(CartContext);

    return (
        <nav>
            <ul className="navegacion">

                <li className='tienda'><Link className="navegacion__enlace navegacion__enlace--activo" to="/">Tienda</Link>
                    <ul className='tienda-lista'>
                        <li><Link className="navegacion__enlace" to="/category/Buzo">Buzos</Link></li>
                        <li><Link className="navegacion__enlace" to="/category/Remera">Remeras</Link></li>
                    </ul>
                </li>
                <li><Link className="navegacion__enlace" to="/us">Nosotros</Link></li>


                {productsCart.length > 0 ?
                    (
                        <Link className="navegacion__icono" to="/cart"> <IconoCarrito /> </Link>
                    ) : ('')

                }
            </ul>
        </nav>
    )
}

export default NavBar;