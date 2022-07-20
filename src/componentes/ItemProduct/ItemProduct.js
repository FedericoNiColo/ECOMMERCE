import './ItemProduct.css'

const ItemProduct = (props) => {
    const { nombre, precio, img } = props;
    return (
        <div className="producto sombra">
            <a href="/paginas/productos.html"><img class="producto__imagen" src={img} alt="imagen camisa"></img></a>
            <div className="producto__informacion">
                <p className="producto__nombre">{nombre}</p>
                <p className="producto__precio">$ {precio}</p>
            </div>
        </div>
    )
}

export default ItemProduct;