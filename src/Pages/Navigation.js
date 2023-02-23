import React from 'react';
import {useNavigate} from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
return (
  <div>
         <button onClick={() => navigate(-1)}>Back</button>
     <button onClick={() => navigate(-2)}>Double-Back</button>
     <button onClick={() => navigate(1)}>Forward</button>
     <button onClick={() => navigate("./")}>Up</button>
     <button onClick={() => navigate("../")}>Double-Up</button>
     <button onClick={() => navigate("/about")}>About</button>
  </div>
);
};

export default Navigation;