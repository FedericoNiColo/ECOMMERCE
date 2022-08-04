import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import products from '../utils/products.mock'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [listProducts, setListProducts] = useState([]);
    const { categoryName } = useParams();

    const filterCategory = products.filter((product) => (product.categoria === categoryName))

    const getProducts = new Promise((resolve, reject) => {

        setTimeout(() => {
            if (categoryName) {
                resolve(filterCategory)
            }
            resolve(products);

        }, 2000)
    })

    useEffect(() => {

        getProducts
            .then((resolve) => {   //el (resolve) es la lista de productos. La respuesta de lo q devuelve la linea 14 

                setListProducts(resolve)
            })
            .catch((error) => {
                console.log("error en la llamada a la BD");
            })
    }, [categoryName])


    return (
        <main className="contenedor">
            <h1>Nuestros productos</h1>
            <div className="grid">
                <ItemList listProducts={listProducts} />
                {
                    (!categoryName) ?
                        <>
                            <div className="grafico grafico--camisas"></div>
                            <div className="grafico grafico--node"></div>
                        </> : ''
                }
            </div>
        </main>
    )
}

export default ItemListContainer;