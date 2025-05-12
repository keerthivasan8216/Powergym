import React, { useState } from 'react';
import './Custproduct.css';

import adjdumbell from '/assets/adjdumbell.jpg';
import yogamat from '/assets/yogamat.jpeg';
import proteinpowder from '/assets/proteinpowder.png';

const Custproduct = () => {
  const initialProducts = [
    {
      id: 1,
      name: 'Protein Powder',
      quantity: 20,
      price: '₹2050',
      image: proteinpowder,
      description:'Our premium protein powder helps build lean muscle mass and supports recovery post-workout. Packed with high-quality whey protein isolate, it mixes easily and tastes great. No added sugar, gluten-free, and trusted by fitness experts across the globe. Ideal for bodybuilders, athletes, and anyone seeking a convenient protein source.',
    },
    {
      id: 2,
      name: 'Yoga Mat',
      quantity: 10,
      price: '₹25',
      image: yogamat,
      description:
        'This anti-slip yoga mat provides excellent cushioning for your joints during stretches and poses. Made from eco-friendly material, it is lightweight, durable, and perfect for both beginners and pros. Sweat-resistant and easy to clean.',
    },
    {
      id: 3,
      name: 'Dumbbells Set',
      quantity: 15,
      price: '₹60',
      image: adjdumbell,
      description:
        'The adjustable dumbbell set offers a versatile and space-saving solution for weight training at home. With quick-lock technology, you can change weights in seconds. The durable plates and anti-slip handle ensure a firm grip during intense workouts.',
    },
  ];

  const [products] = useState(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleQuantityChange = (productId, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
            : item
        )
    );
  };

  const getCartTotal = () => {
    return cart
      .reduce((total, item) => {
        const numericPrice = parseFloat(item.price.replace('₹', ''));
        return total + numericPrice * item.quantity;
      }, 0)
      .toFixed(2);
  };

  const handleBuyNow = () => {
    alert(`Order placed! Total amount: $${getCartTotal()}`);
    setCart([]);
  };

  return (
    <div className="product-list">
      <center><h2>Product List</h2></center>

      <div className="product-grid">
        {products.map((product) => (
          <div
            className="product-card"
            key={product.id}
            onClick={() => handleCardClick(product)}
          >
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
            <button className="buybtn" onClick={(e) => {
              e.stopPropagation(); // prevents triggering overlay
              handleAddToCart(product);
            }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="cart-section">
          <h3>Your Cart</h3>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name} - {item.price}</span>
              <div className="qty-buttons">
                <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
              </div>
            </div>
          ))}
          <p><strong>Total:</strong> ${getCartTotal()}</p>
          <button className="buybtn" onClick={handleBuyNow}>Buy Now</button>
        </div>
      )}

      {selectedProduct && (
        <div className="product-overlay">
          <div className="overlay-content">
            <button className="close-btn" onClick={handleClose}>×</button>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <h2>{selectedProduct.name}</h2>
            <p><strong>Price:</strong> {selectedProduct.price}</p>
            <p>{selectedProduct.description}</p>
            <div className="overlay-buttons">
              <button onClick={handleClose}>Back to List</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Custproduct;
