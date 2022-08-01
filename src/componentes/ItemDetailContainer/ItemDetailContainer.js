import './ItemDetailContainer.css';
import { useEffect, useState } from 'react';
import productDetail from '../utils/product.detail.mock';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [itemProduct, setItemProduct] = useState([]);

    const getItem = new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve(productDetail)
            console.log(itemProduct);
        }, 2000)
    })

    useEffect(() => {

        getItem
            .then((res) => {   //el (resolve) es la lista de productos. La respuesta de lo q devuelve la linea 14 

                setItemProduct(res);
                console.log(itemProduct);
            })
            .catch((error) => {
                console.log("error en la llamada a la BD");
            })
    }, [])



    return (
        <>
            <main className="contenedor">
                {itemProduct.map((product, i) => {
                    console.log(product);
                    return <ItemDetail key={i} data={product} />
                })}
            </main>

            <footer className="footer">
                <p className="footer__texto">Front End Store - Todos los derechos Reservados 2022</p>
            </footer>
        </>
    )
}

export default ItemDetailContainer;