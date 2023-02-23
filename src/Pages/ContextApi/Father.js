import React from 'react';
import Children from "./Children";
import Button from "./button";
import { useState, createContext } from "react";

export const CountContext = createContext();
const Father = () => {
  const [count, setCount] = useState(0);
 return (
  <CountContext.Provider value={[count,setCount]}>
    <h1>Father Page ({count})</h1>
    <Button />  
    <Children/>  
  </CountContext.Provider>
);
};

export default Father;