import React from 'react';
import './ProductMenu.css';
import { useCart } from '../Cart/CartContext/CartContext';// Import the useCart hook

const cartElements = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  },
];

const ProductMenu = () => {
  const { addToCart } = useCart(); // Use the addToCart function from context

  return (
    <div className="text-center">
      <h2>Product Menu</h2>
      <hr />
      <div className="productList">
        {cartElements.map((product, index) => (
          <div key={index}>
            <div>
              <img src={product.imageUrl} alt={product.title} />
            </div>
            <div className='product-price'>
              <h4>${product.price}</h4>
              {/* Use the addToCart function on the button click */}
              <button onClick={() => addToCart(product)}>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductMenu;
