import './ItemDetailContainer.css';
import { useEffect, useState } from 'react';
import products from '../utils/products.mock';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [dataProduct, setDataProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {

        filterId();
    }, []);

    const filterId = () => {
        products.filter((product) => {
            if (product.id == id) {
                setDataProduct(product);
                console.log(product);
            }
        })
    }


    return (
        <>
            <main className="contenedor">

                <ItemDetail dataProduct={dataProduct} />

            </main>
        </>
    )
}

export default ItemDetailContainer;