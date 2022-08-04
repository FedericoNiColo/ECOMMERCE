import Form from '../ItemDetailContainer/Form'
import '../ItemDetailContainer/ItemDetailContainer.css';

const ItemDetail = ({ dataProduct }) => {

    const { id, nombre, categoria, precio, img, descrip, stock } = dataProduct;

    return (
        <>


            <div className="camisa">
                <img className="camisa__imagen" src={img} alt="imagen del producto" />

                <div className="camisa__contenido">
                    <h1 className='dataDetail'>{categoria}{' '}{nombre}</h1>
                    <p>{descrip}</p>
                    <h2 className='dataDetail'>$ {precio}</h2>
                    <Form />
                </div>
            </div>

        </>

    )
}

export default ItemDetail;