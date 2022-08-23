import React from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './componentes/Footer/Footer';
import Us from './pages/Us/Us';
import Detail from './pages/Detail';
import Checkout from './pages/Checkout/Checkout';
import CartProvider from './Context/CartContext';

function App() {


  return (

    <CartProvider>
      <BrowserRouter>
        <Header />
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/us/" element={<Us />} />
          <Route path="/product/:id" element={<Detail />} />
          <Route path="/category/:categoryName" element={<ItemListContainer />} />
          <Route path="/cart" element={<Checkout />} />
          <Route path="*" element={<h1>ERROR 404- PAGINA NO ENCONTRADA</h1>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
