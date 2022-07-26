import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import products from '../utils/products.mock'

const ItemListContainer = () => {

    const [listProducts, setListProducts] = useState([]);

    const getProducts = new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve(products)
        }, 2000)
    })

    useEffect(() => {

        getProducts
            .then((resolve) => {

                setListProducts(resolve)
            })
            .catch((error) => {
                console.log("error en la llamada a la BD");
            })
    }, [])


    return (
        <main className="contenedor">
            <h1>Nuestros productos</h1>
            <div className="grid">
                <ItemList listProducts={listProducts}/>
                <div className="grafico grafico--camisas"></div>
                <div className="grafico grafico--node"></div>
            </div>
        </main>
    )
}

export default ItemListContainer;