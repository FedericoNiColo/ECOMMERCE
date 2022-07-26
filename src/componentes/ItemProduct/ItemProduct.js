import ItemCount from '../ItemCount/ItemCount';
import './ItemProduct.css'

const ItemProduct = ({data}) => {
    const {id, nombre, precio, img, stock } = data;
    return (
        <div className="producto sombra">
            <a href="/paginas/productos.html"><img className="producto__imagen" src={img} alt="imagen camisa"></img></a>
            <div className="producto__informacion">
                <p className="producto__nombre">{nombre}</p>
                <p className="producto__precio">$ {precio}</p>
                {/* <ItemCount stock={stock}/> */}
            </div>
        </div>
    )
}

export default ItemProduct;