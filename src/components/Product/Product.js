import React, { useState } from 'react';
import './Product.css';

const Product = ({ productName, imageUrl, price, brand, onBuyClick }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleBuyClick = () => {
    setIsAdded(true);
    onBuyClick();
  };

  return (
    <div className="product-box">
      <img src={imageUrl} alt={productName} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{"productName"}</h3>
        <h4 className="product-brand">{"brand"}</h4>
        <p className="product-price">{50}</p>
        <button className={`buy-button ${isAdded ? 'added' : ''}`} disabled={isAdded} onClick={handleBuyClick}>
          {isAdded ? 'Added' : 'Buy'}
        </button>
      </div>
    </div>
  );
};

export default Product;
