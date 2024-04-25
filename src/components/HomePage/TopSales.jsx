import React from 'react';
import './TopSales.css'; 
import { useProducts } from '../../State'; 

function ProductList() {
  const { products } = useProducts(); 

  
  const handleBuy = (productId) => {
    alert(`Buying product with ${productId} id`);
  };

  
  const topSaleProducts = products.filter(product => product.topSale === true);

  return (
    <div>
      <h2>Our top sales:</h2>
      <div className="product-list">
        {topSaleProducts.map((product) => (
          <div key={product.id} className="product">
            <img src ={product.imageLink} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button onClick={() => handleBuy(product.id)}>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
