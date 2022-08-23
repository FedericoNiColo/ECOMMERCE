import './Checkout.css'
import React from 'react';
import { useState, useContext } from 'react';
import Check from '../../componentes/Check/Check';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
const Checkout = () => {

    const { productsCart } = useContext(CartContext);

    return (
        <>

            {
                productsCart.length === 0 ? (
                    <>
                        <h1><Link to="/">No hay ningun producto seleccionado para comprar </Link></h1>

                    </>
                ) : (
                    <Check />
                )
            }
        </>
    )
}
export default Checkout
