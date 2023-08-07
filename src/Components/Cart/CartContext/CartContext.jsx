import React, { createContext, useContext, useMemo, useState } from 'react';

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
    const totalAmount=useMemo(()=>{
        return cart.reduce((total,item)=> total + item.price * item.quantity , 0)
    },[cart])

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalAmount }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    return useContext(CartContext);
}
