import React, {useContext} from 'react';
import {CategoryContext} from './Category';
import Products from "./Products";

const CategoryName = () => {
  const [category] = useContext(CategoryContext);
return (
  <div>
    <h3>Category Name: {category}</h3>
     <Products/>  
  </div>
);
};

export default CategoryName;