import './ItemCount.css';
import { useState } from 'react';

const ItemCount = ({ stock, setCountSelected, setWaist }) => {

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

    }

    const handleChange = (e) => {
        setWaist(e.target.value);
    }

    return (
        <>
            <select className="formulario__campo" onChange={handleChange}>
                <option disabled selected>Seleccionar talle</option>
                <option>S</option>
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