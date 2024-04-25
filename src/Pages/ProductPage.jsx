import React, { useState } from 'react';
import './ProductPage.css'; 
import { useProducts } from '../State';
function ProductListPage() {

    const { products } = useProducts()

    const handleBuyClick = (productId) => {
        alert(`Buying product with ${productId} id`);
      };
  return (
    <div className="product-list-page">
      <h1>Our Products</h1>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src ={product.imageLink} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button onClick={() => handleBuyClick(product.id)}>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
