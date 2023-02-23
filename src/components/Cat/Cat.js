import React from "react";
import "./Cat.css";

const Cat = () => {
  return (
    <div className="cat">
      <div className="ear"></div>
      <div className="ear"></div>
      <div className="face">
        <div className="eye"></div>
        <div className="eye"></div>
        <div className="nose"></div>
        <div className="mouth"></div>
      </div>
      <div className="body"></div>
      <div className="tail"></div>
    </div>
  );
};

export default Cat;
