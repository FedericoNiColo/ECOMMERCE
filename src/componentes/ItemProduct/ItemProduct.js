import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemProduct.css'

const ItemProduct = ({ data }) => {
    const { id, nombre, precio, img, stock } = data;
    return (
    <Link to={`/product/${id}`}>
            <div className="producto sombra">
                <a><img className="producto__imagen" src={img} alt="imagen camisa"></img></a>
                <div className="producto__informacion">
                    <p className="producto__nombre">{nombre}</p>
                    <p className="producto__precio">$ {precio}</p>
                </div>
            </div>
        </Link>
    )
}

export default ItemProduct;