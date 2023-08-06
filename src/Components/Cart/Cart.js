import React, { useState } from 'react';
import './Cart.css';
import { useCart } from './CartContext/CartContext';

// const cartElements = [
//     {
//       title: 'Colors',
//       price: 100,
//       imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
//       quantity: 2,
//     },
//     {
//       title: 'Black and white Colors',
//       price: 50,
//       imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
//       quantity: 3,
//     },
//     {
//       title: 'Yellow and Black Colors',
//       price: 70,
//       imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
//       quantity: 1,
//     },
//   ];

function Cart() {
    const [cartOpen, setCartOpen] = useState(false);
    const { cart, removeFromCart } = useCart();

    const toggleCart = () => {
        setCartOpen(!cartOpen);
    };

    // const removeFromCart = (index) => {
    //     const updatedCart = [...cartElements];
    //     updatedCart.splice(index, 1);
    //     setCartOpen(updatedCart);
    // };

    return (
        <div className="cart">
            <div className='openCart' onClick={toggleCart}>
                <div className="cart-icon" >
                    <div style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        {/* <img src="cart-icon.png" alt="" /> */}
                        <span>Cart</span></div>
                    <div className="cart-count">{cart.length}</div>
                </div>
            </div>

            {cartOpen && (
                <div className="cart-container">
                    {cart.map((item, index) => (
                        <div className="cart-item" key={index}>
                            <img src={item.imageUrl} alt={item.title} />
                            <div className="item-details">
                                <div className="title">{item.title}</div>
                                <div className="price">${item.price}</div>
                                <div className="quantity">Quantity: {item.quantity}</div>
                            </div>
                            <button className="remove-button" onClick={() => removeFromCart(item)}>Remove</button>

                        </div>
                    ))}
                    <div className='totalAmount'>
                        <h4>Total Amount</h4>
                        <span>$234</span>
                    </div>
                    <div className='checkOut'>
                        {/* <button type="submit"><Link to="/checkout">Checkout Now!</Link></button> */}
                        <button type="button" onClick={() => alert('Thank you For Shoping here!!')}>Checkout Now!</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
