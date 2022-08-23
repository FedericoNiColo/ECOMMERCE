import React from 'react';
import './ItemCount.css';
import { useState, useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const ItemCount = ({ dataProduct, setCountSelected, setWaist, waist }) => {

    const { id, nombre, categoria, precio, img, descrip, stock } = dataProduct;
    const { addProductToCart, productsCart } = useContext(CartContext);
    const [count, setCount] = useState(0);

    const addShirt = () => {

        setCount(count < stock ? count + 1 : count);
        console.log(count);
    }


    const removeShirt = () => {
        setCount(count > 0 ? count - 1 : 0);
        console.log("menos");
    }

    const onAdd = () => {
        setCountSelected(count);

        const newProduct = {
            id: id,
            name: categoria + " " + nombre,
            price: precio,
            image: img,
            description: descrip,
            stock: stock,
            quantity: count,
            waist: waist,
            total: precio * count
        }

        if (count > 0) {
            addProductToCart(newProduct)
            console.log("desde item count: ", productsCart)
        }

    }

    return (
        <>
            <select className="formulario__campo" onChange={(e) => setWaist(e.target.value)}>
                <option selected>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
            </select>

            <div className="container-count">
                <p>Cantidad</p>
                <button onClick={removeShirt}>-</button>
                <p>{count}</p>
                <button onClick={addShirt}>+</button>
            </div>
            <button className="add" onClick={onAdd}> agregar al carrito </button>
        </>
    )
}

export default ItemCount;