import React from 'react';
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Posts = () => {
  const myNames = ['Farhan', 'Sadik', 'Nirjhor'];
  const [currentUser] = React.useState(myNames);  
return (
  <div>
    <h1>This is all Posts page</h1>
    <button ><Link to="new">New Post</Link></button>
    <button ><Link to="post-1">Post 1</Link></button>
    
    <Outlet context={[currentUser]}/>
  </div>
);
};

export default Posts;