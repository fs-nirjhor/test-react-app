import React from 'react';
import { useParams, Outlet } from "react-router-dom";


const Post1 = () => {
  let params = useParams();
return (
  <div>
     <h1>This is {params.postId}</h1>
     <Outlet/>  
  </div>
);
};

export default Post1;