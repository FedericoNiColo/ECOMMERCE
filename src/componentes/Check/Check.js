import React from 'react';
import './Check.css'
import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import Modal from '../Modal/Modal';
import db from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import Message from '../Message/Message';

const Check = () => {

    const { setProductsCart, productsCart, removeItem, clear, setTotalPrice, totalPrice } = useContext(CartContext);
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

        setTimeout(() => {

            setProductsCart([]);
        }, 5000);
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'ordenes')
        const orderDoc = await addDoc(collectionOrder, newOrder)
    }


    return (
        <>
            <h1 className='pt-5'>Listado de productos seleccionados</h1>
            <div className="checkout">
                {console.log('order: ', order)}
                <div className="check flex-row">
                    {

                        productsCart.map(product => (

                            <div key={product.id} className="pt-5" >
                                <div class="card mb-3">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src={`/Img/${product.image}`} class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">{product.name}</h5>
                                                <p class="card-title pt-2 pb-2">${product.price}</p>
                                                <p class="card-text pb-2">{product.description}</p>
                                                <p class="card-text"><small class="text-muted">talle: {product.waist}</small></p>
                                                <p class="card-text"><small class="text-muted">cantidad: {product.quantity}</small></p>
                                                <p class="card-text"><small class="text-muted">total: $ {product.total}</small></p>

                                            </div>
                                        </div>
                                    </div>
                                    <svg onClick={() => removeItem(product.id)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-x" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <rect x="4" y="4" width="16" height="16" rx="2" />
                                        <path d="M10 10l4 4m0 -4l-4 4" />
                                    </svg>
                                </div>
                            </div>
                        ))}

                    <button button className='clear' onClick={() => clear()}>borrar todo</button>
                </div>
                <div className='pay sombraCompleta'>
                    <div>
                        <h4>Resumen de compra</h4>
                        <p>total: ${totalPrice}</p>
                        <button onClick={() => setShowModal(true)}>Ir a Pagar</button>
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
                                        {message && <Message />}
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