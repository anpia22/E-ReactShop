import React from 'react';
import Header from './Components/Header/Header';
import { CartProvider } from './Components/Cart/CartContext/CartContext';
import ProductMenu from './Components/ProductMenu/ProductMenu';

function App() {
  return (
    <CartProvider>
        <Header />
        <ProductMenu />
    </CartProvider>
  );
}

export default App;
