import React, {useContext} from 'react';
import {CountContext} from "./Father";

const GrandChildren = () => {
  const [count] = useContext(CountContext);
 return (
  <div>
    <h6>GrandChildren Page ({count})</h6>
  </div>
);
};

export default GrandChildren;