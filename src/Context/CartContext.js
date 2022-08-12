import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [productsCart, setProductsCart] = useState([]);

    //agrego productos en el array del estado
    const addProductToCart = (dataProduct) => {

        const prodtIndex = productsCart.findIndex((product) => product.id == dataProduct.id); //devuelve la posicion en el array en la que se encuentre

        if (prodtIndex === -1) {
            setProductsCart([...productsCart, dataProduct]);
        } else {
            const cartCopy = [...productsCart];
            cartCopy[prodtIndex].quantity = cartCopy[prodtIndex].quantity + dataProduct.quantity;
            setProductsCart(cartCopy)
            console.log("si esta vacio" ,productsCart.length);
        }

        console.log("producgtos desde contexto", productsCart);
    }

    const removeItem = (id) => {
        const newProductsCart = productsCart.filter((product) => product.id !== id);
        setProductsCart(newProductsCart);
        console.log(productsCart.length,"asdasdasdsa");
    }

    const clear = () => {
        setProductsCart([]);
    }

    const isInCart = (id) => {
        return productsCart.filter((product) => product.id === id);
    }

    const utilsContext = {
        addProductToCart
    }


    return (

        <CartContext.Provider value={{ addProductToCart, productsCart, removeItem, isInCart, clear }}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;