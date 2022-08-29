import React from 'react';
import './Check.css'
import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import Modal from '../Modal/Modal';
import db from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
const Check = () => {

    const { productsCart, removeItem, clear, setTotalPrice, totalPrice } = useContext(CartContext);
    const [total, setTotal] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState(false);
    const [success, setSuccess] = useState(false)
    const [order, setOrder] = useState({
        items: productsCart.map((product) => {
            return {
                id: product.id,
                title: product.name,
                price: product.total
            }
        }),
        buyer: {},
        total: totalPrice
    })
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    })


    useEffect(() => {
        const totalP = productsCart.reduce((total, product) => product.total + total, 0)

        setTotalPrice(totalP)
    }, [productsCart])

    const handleChange = (e) => {

        setFormData({ ...formData, [e.target.name]: e.target.value }) //.name porque el input tiene un name para cada uno.
    }

    const submitData = (e) => {
        e.preventDefault()
        console.log('order para enviar: ', { ...order, buyer: formData });

        if ([formData.name, formData.phone, formData.email].includes('')) {
            setMessage(true)
            return
        }

        pushData({ ...order, buyer: formData })
        setSuccess(true)
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'ordenes')
        const orderDoc = await addDoc(collectionOrder, newOrder)
    }


    return (
        <>
            <h1>Listado de productos seleccionados</h1>
            <div className="checkout">
                {console.log('order: ', order)}
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
                        <p>total: ${totalPrice}</p>
                        <button onClick={() => setShowModal(true)}>Ir aPagar</button>
                    </div>
                </div>
                {showModal &&
                    <Modal
                        setShowModal={setShowModal}
                        title="datos de contacto"
                    >
                        {
                            success ?
                                (
                                    <h2>Felicitaciones por la compra</h2>
                                ) : (

                                    <form className='form-modal' onSubmit={submitData}>
                                        {message && <h5>todos los campos son obligatorios</h5>}
                                        <label>Ingrese su nombre</label>
                                        <input
                                            type="text"
                                            name='name'
                                            placeholder='ej: juan ramirez'
                                            onChange={handleChange}
                                            value={formData.name}
                                        />
                                        <label>Ingrese su telefono</label>
                                        <input
                                            type="number"
                                            name='phone'
                                            placeholder='ej: 2345499481'
                                            onChange={handleChange}
                                            value={formData.phone}
                                        />
                                        <label>Ingrese su email</label>
                                        <input
                                            type="email"
                                            name='email'
                                            placeholder='ej: juanramirez@gamil.com'
                                            onChange={handleChange}
                                            value={formData.email}
                                        />

                                        <button>enviar</button>
                                    </form>

                                )
                        }
                    </Modal>
                }
            </div >

        </>
    )
}

export default Check