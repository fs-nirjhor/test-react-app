import React from 'react';
import {Outlet} from "react-router-dom";

const Home = () => {
return (
  <div>
    <h1>This is Home page</h1>
    <Outlet/>  
  </div>
);
};

export default Home;