import React, { useState } from 'react';
import './productlist.css'; 
import adjdumbell from '/assets/adjdumbell.jpg'
import yogamat from '/assets/yogamat.jpeg'
import proteinpowder from '/assets/proteinpowder.png'

const dummyProducts = [
  { id: 1, name: 'Protein Powder', price: '₹2050', description: 'Our premium protein powder helps build lean muscle mass and supports recovery post-workout. Packed with high-quality whey protein isolate, it mixes easily and tastes great. No added sugar, gluten-free, and trusted by fitness experts across the globe. Ideal for bodybuilders, athletes, and anyone seeking a convenient protein source.', image: proteinpowder },
  { id: 2, name: 'Yoga Mat', price: '₹200', description: 'This anti-slip yoga mat provides excellent cushioning for your joints during stretches and poses. Made from eco-friendly material, it is lightweight, durable, and perfect for both beginners and pros. Sweat-resistant and easy to clean.', image: yogamat },
  { id: 3, name: 'Dumbbells', price: '₹3000', description: 'The adjustable dumbbell set offers a versatile and space-saving solution for weight training at home. With quick-lock technology, you can change weights in seconds. The durable plates and anti-slip handle ensure a firm grip during intense workouts. Ideal for full-body exercises including biceps, triceps, shoulders, and chest. The compact rack makes storage easy, making it a favorite among fitness enthusiasts and beginners alike. Built to last and easy to maintain, these dumbbells are the perfect addition to your home gym setup. Perform strength training without clutter and take control of your fitness journey anytime, anywhere.', image: adjdumbell },
];

const Productlist = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeOverlay = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <div className="product-grid">
        {dummyProducts.map((product) => (
          <div className="product-card" key={product.id} onClick={() => handleProductClick(product)}>
            <img src={product.image} alt={product.name} className="product-thumbnail" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="product-overlay">
          <div className="overlay-content">
            <button className="close-btn" onClick={closeOverlay}>×</button>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <h2>{selectedProduct.name}</h2>
            <p><strong>Price:</strong> {selectedProduct.price}</p>
            <p>{selectedProduct.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Productlist;
