import React, { useState } from 'react';
import './Custproduct.css';

// Import images
import proteinImage from "/assets/pngwing.png";
import yogaMatImage from "/assets/images.jpeg";
import dumbbellsImage from "/assets/dumbell.jpeg";
import treadmillOilImage from "/assets/tredmilloil.jpeg";
import resistanceBandsImage from "/assets/resistenceband.png";
import kettlebellImage from "/assets/ketbell.jpeg";

const Custproduct = () => {
  const initialProducts = [
    {
      id: 1,
      name: 'Protein Powder',
      quantity: 20,
      price: '$45',
      image: proteinImage,
    },
    {
      id: 2,
      name: 'Yoga Mat',
      quantity: 10,
      price: '$25',
      image: yogaMatImage,
    },
    {
      id: 3,
      name: 'Dumbbells Set',
      quantity: 15,
      price: '$60',
      image: dumbbellsImage,
    },
    {
      id: 4,
      name: 'Treadmill Oil',
      quantity: 30,
      price: '$10',
      image: treadmillOilImage,
    },
    {
      id: 5,
      name: 'Resistance Bands',
      quantity: 25,
      price: '$15',
      image: resistanceBandsImage,
    },
    {
      id: 6,
      name: 'Kettlebell',
      quantity: 12,
      price: '$35',
      image: kettlebellImage,
    },
  ];

  const [products, setProducts] = useState(initialProducts);

  const handleBuy = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  return (
    <div className="product-list">
      <center><h2>Product List</h2></center>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
            <div className="buy-button-container">
              {product.quantity > 0 ? (
                <button onClick={() => handleBuy(product.id)}>Buy</button>
              ) : (
                <p>Out of Stock</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Custproduct;
