import React, {useContext} from 'react';
import {CountContext} from "./Father";

const Button = () => {
  const [count,setCount] = useContext(CountContext);
return (
  <div>
    <button onClick = {() => setCount(count-1)}>Decrease</button>
      <b>{count}</b>
    <button onClick = {() => setCount(count+1)}>Increase</button>
  </div>
);
};

export default Button;