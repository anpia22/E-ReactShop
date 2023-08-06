import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        // Check if the item is already in the cart
        const existingItemIndex = cart.findIndex((cartItem) => cartItem.title === item.title);

        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += 1;
            setCart(updatedCart);
          } else {
            setCart([...cart, { ...item, quantity: 1 }]);
          }
        };

    const removeFromCart = (item) => {
        const updatedCart = cart.filter((cartItem) => cartItem.title !== item.title);
        setCart(updatedCart);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    return useContext(CartContext);
}
