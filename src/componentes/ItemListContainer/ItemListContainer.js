import React from 'react';
import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import products from '../utils/products.mock'
import { useParams } from 'react-router-dom';
import db from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const ItemListContainer = () => {
    const [listProducts, setListProducts] = useState([]);
    const { categoryName } = useParams();

    /*  const filterCategory = products.filter((product) => (product.categoria === categoryName)) */

    /* const getProducts = new Promise((resolve, reject) => {

        if (categoryName) {
            resolve(filterCategory)
        }
        resolve(products);

    }) */

    const getProducts = async () => {
        const productCollection = collection(db, 'ecommerce-remeras')
        const productSnapshot = await getDocs(productCollection)
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        console.log('productlist', productList);
        return productList
    }

    useEffect(() => {

        getProducts()
            .then((res) => {

                const filterCategory = res.filter((product) => (product.categoria === categoryName))

                if (categoryName) {
                    setListProducts(filterCategory)
                    return
                }

                setListProducts(res)
            })
        /* getProducts
            .then((resolve) => {   //el (resolve) es la lista de productos. La respuesta de lo q devuelve la linea 14 

                setListProducts(resolve)
            })
            .catch((error) => {
                console.log("error en la llamada a la BD");
            }) */
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