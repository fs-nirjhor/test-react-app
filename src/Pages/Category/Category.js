import React, {useState,createContext} from 'react';
import Buttons from "./Buttons";
import CategoryName from "./CategoryName";

export const CategoryContext = createContext();
const productsData = [
  {name:"Lenova", category: "laptop"},
  {name:"HP", category: "laptop"},
  {name:"Dell", category: "laptop"},
  {name:"Xiaomi", category: "mobile"},
  {name:"Samsung", category: "mobile"},
  {name:"Oppo", category: "mobile"},
  {name:"Cannon", category: "camera"},
  {name:"Nikkon", category: "camera"},
  {name:"Sony", category: "camera"}
  ];
const Category = () => {
  const [category, setCategory] = useState('');
  const categoryProducts = productsData.filter(products => products.category.toLowerCase() === category.toLowerCase());
  //console.log(categoryProducts);
return (
  <CategoryContext.Provider value={[category,setCategory,categoryProducts]}>
    <h1>Catagory</h1>
    <Buttons/>  
    <CategoryName/>  
  </CategoryContext.Provider>
);
};

export default Category;