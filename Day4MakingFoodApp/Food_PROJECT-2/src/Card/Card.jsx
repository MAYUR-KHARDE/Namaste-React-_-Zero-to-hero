// Card.jsx
import React from "react";
import "./Card.css";

const Card = (props) => {
  const { itemName, img } = props;
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <img src={img} alt="" className="card-img" />
        </div>

        <h3>{itemName}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          error.
        </p>
      </div>
    </div>
  );
};

export default Card;
