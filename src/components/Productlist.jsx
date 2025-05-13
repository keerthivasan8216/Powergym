import React, { useState } from 'react';
import './productlist.css';
import adjdumbell from '/assets/adjdumbell.jpg';
import yogamat from '/assets/yogamat.jpeg';
import proteinpowder from '/assets/proteinpowder.png';

const initialProducts = [
  {
    id: 1,
    name: 'Protein Powder',
    price: '₹2050',
    description:
      'Our premium protein powder helps build lean muscle mass and supports recovery post-workout...',
    image: proteinpowder,
  },
  {
    id: 2,
    name: 'Yoga Mat',
    price: '₹200',
    description:
      'This anti-slip yoga mat provides excellent cushioning...',
    image: yogamat,
  },
  {
    id: 3,
    name: 'Dumbbells',
    price: '₹3000',
    description:
      'The adjustable dumbbell set offers a versatile and space-saving solution...',
    image: adjdumbell,
  },
];

const Productlist = () => {
  const [products, setProducts] = useState(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
  });

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeOverlay = () => {
    setSelectedProduct(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newId = products.length + 1;
    const productToAdd = { ...newProduct, id: newId };
    setProducts([...products, productToAdd]);
    setNewProduct({ name: '', price: '', description: '', image: '' });
    setShowForm(false);
  };

  const handleDeleteProduct = (id) => {
    const updatedList = products.filter((product) => product.id !== id);
    setProducts(updatedList);
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <div className="product-controls">
        <button className="glow-btn" onClick={() => setShowForm(true)}>
          + Add Product
        </button>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id} onClick={() => handleProductClick(product)}>
            <img src={product.image} alt={product.name} className="product-thumbnail" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button
              className="delete-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteProduct(product.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="product-overlay">
          <div className="overlay-content">
            <button className="close-btn" onClick={closeOverlay}>
              ×
            </button>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <h2>{selectedProduct.name}</h2>
            <p>
              <strong>Price:</strong> {selectedProduct.price}
            </p>
            <p>{selectedProduct.description}</p>
          </div>
        </div>
      )}

      {showForm && (
        <div className="product-overlay">
          <div className="overlay-content">
            <button className="close-btn" onClick={() => setShowForm(false)}>×</button>
            <h2>Add New Product</h2>
            <form onSubmit={handleAddProduct} className="product-form">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="price"
                placeholder="Price"
                value={newProduct.price}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={newProduct.image}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                value={newProduct.description}
                onChange={handleInputChange}
                rows="4"
                required
              />
              <button type="submit" className="glow-btn">
                Add Product
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Productlist;
