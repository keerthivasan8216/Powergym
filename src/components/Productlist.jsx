import React, { useState } from 'react';
import './productlist.css';

// Import images
import proteinImage from "/assets/pngwing.png";
import yogaMatImage from "/assets/images.jpeg";
import dumbbellsImage from "/assets/dumbell.jpeg";
import treadmillOilImage from "/assets/tredmilloil.jpeg";
import resistanceBandsImage from "/assets/resistenceband.png";
import kettlebellImage from "/assets/ketbell.jpeg";

const ProductList = () => {
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

  const updateQuantity = (id, change) => {
    setProducts(prev =>
      prev.map(product =>
        product.id === id
          ? {
              ...product,
              quantity: Math.max(0, product.quantity + change),
            }
          : product
      )
    );
  };

  return (
    <div className="product-list">
      <center><h2>Product List</h2></center>
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
            <div className="quantity-control">
              <button onClick={() => updateQuantity(product.id, -1)}>-</button>
              <span>{product.quantity}</span>
              <button onClick={() => updateQuantity(product.id, 1)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
