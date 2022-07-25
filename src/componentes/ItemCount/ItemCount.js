import './ItemCount.css';
import React, { useEffect, useState } from 'react';


const ItemCount = (props) => {
    
    const { stock } = props;

    const [count, setCount] = useState(1);

    const addShirt = () => {

        setCount(count < stock ? count + 1 : count);
    }

    const removeShirt = () => {
        setCount(count > 1 ? count - 1 : 1);
    }

    return (

        <div className="conteiner">

            <h3>Cantidad</h3>
            <div className="conteiner-count">
                <button onClick={removeShirt}>-</button>
                <p>{count}</p>
                <button onClick={addShirt}>+</button>
            </div>
        </div>
    )
}

export default ItemCount;