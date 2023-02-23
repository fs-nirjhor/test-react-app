import React, {useContext} from 'react';
import {CategoryContext} from './Category';

const Products = () => {
  const context = useContext(CategoryContext);
  const categoryProducts = context[2];
return (
  <div>
    <h5>Products list: {categoryProducts.length}</h5>
    <ul>
      {
        categoryProducts.map((product,index)=> <li key={index}>{product.name}</li>)
      }
    </ul>
  </div>
);
};

export default Products;