import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import '../ItemDetailContainer/ItemDetailContainer.css';

const ItemDetail = ({ dataProduct }) => {
    const { id, nombre, categoria, precio, img, descrip, stock } = dataProduct;

    const [countSelected, setCountSelected] = useState(0)
    const [waist, setWaist] = useState("");

    return (
        <>

            <div className="camisa">
                <img className="camisa__imagen" src={`/Img/${img}`} alt="imagen del producto" />

                <div className="camisa__contenido">
                    <h1 className='dataDetail'>{categoria}{' '}{nombre}</h1>
                    <p>{descrip}</p>
                    <h2 className='dataDetail'>$ {precio} </h2>

                    {
                        countSelected > 0 ? <button className="add addLn"><Link to="/cart">terminar compra</Link></button>
                            : <ItemCount
                                dataProduct={dataProduct}
                                setCountSelected={setCountSelected}
                                setWaist={setWaist}
                                waist={waist}
                            />
                    }

                </div>
            </div>

        </>

    )
}

export default ItemDetail;