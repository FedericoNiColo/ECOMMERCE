import React from 'react';
import './Check.css'
import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const Check = () => {

    const { productsCart, removeItem, clear } = useContext(CartContext);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const totalP = productsCart.reduce((total, product) => product.price + total, 0)

        setTotal(totalP)
    }, [productsCart])

    return (
        <>
            <h1>Listado de productos seleccionados</h1>
            <div className="checkout">
                <div className="container-checkout">
                    {
                        productsCart.map(product => (

                            <div key={product.id} className="container-table">
                                <table className="table sombra">
                                    <tr className="file">
                                        <th>Talle</th>
                                        <th>Producto</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                        <th>total</th>
                                        <th>      </th>
                                    </tr>
                                    <tr className="">
                                        <td>{product.waist}</td>
                                        <td className='td-img'>
                                            <img className='img' src={`/Img/${product.image}`} />
                                            <span>{product.name}</span>
                                        </td>
                                        <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.total}</td>
                                        <td className='button'><button className='btn' onClick={() => removeItem(product.id)}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="32" height="32" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <line x1="4" y1="7" x2="20" y2="7" />
                                            <line x1="10" y1="11" x2="10" y2="17" />
                                            <line x1="14" y1="11" x2="14" y2="17" />
                                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                        </svg></button></td>
                                    </tr>
                                </table>
                            </div>
                        ))}
                    <button button className='clear' onClick={() => clear()}>LIMPIAR CARRITO</button>
                </div>
                <div className='pay sombraCompleta'>
                    <div>
                        <h4>Resumen de compra</h4>
                        <p>total: ${total}</p>
                        <button>Ir aPagar</button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Check