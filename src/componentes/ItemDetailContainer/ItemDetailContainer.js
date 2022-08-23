import React from 'react';
import './ItemDetailContainer.css';
import { useEffect, useState } from 'react';
import products from '../utils/products.mock';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
//firebase
import db from '../../firebaseConfig';
import { doc, getDoc } from "firebase/firestore"
import { async } from '@firebase/util';

const ItemDetailContainer = () => {

    const [dataProduct, setDataProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {

        getProduct()
            .then((res) => {
                setDataProduct(res)
            })
        /* filterId(); */
    }, [id]);

    /*  const filterId = () => {
         products.filter((product) => {
             if (product.id == id) {
                 setDataProduct(product);
                 console.log(product);
             }
         })
     } */

    const getProduct = async () => {
        const docRef = doc(db, 'ecommerce-remeras', id)  //1er param: la conexion a firabase 2do: nombre a la coleccion. 3ero el id del producto que lo tenemos en el useParam
        const docSnapshot = await getDoc(docRef)

        let product = docSnapshot.data()
        product.id = docSnapshot.id

        return product
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