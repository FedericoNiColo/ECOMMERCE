import Form from './Form';
import './ItemDetailContainer.css';

const ItemDetail = ({ data }) => {

    const { id, nombre, precio, img, descrip, stock } = data;

    return (
        <>

            <h1>{nombre}</h1>

            <div className="camisa">
                <img className="camisa__imagen" src={img} alt="imagen del producto" />

                <div className="camisa__contenido">
                    <h2>$ {precio}</h2>
                    <p>{descrip}</p>
                    <Form />
                </div>
            </div>

        </>

    )
}

export default ItemDetail;