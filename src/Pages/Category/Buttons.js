import React, {useContext} from 'react';
import {CategoryContext} from './Category';

const Buttons = () => {
  const context = useContext(CategoryContext);
  const setCategory = context[1];
return (
  <div>
    <button onClick={() => setCategory("Laptop")}>Laptop</button>
    <button onClick={() => setCategory("Mobile")}>Mobile</button>
    <button onClick={() => setCategory("Camera")}>Camera</button>
  </div>
);
};

export default Buttons;