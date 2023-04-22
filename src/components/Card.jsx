import React from "react";
import Rating from "./Rating";

function Card({ product }) {
  const title = product.title.split(" ").slice(0, 3).join(" ");
  return (
    <div className="card">
      <img src={product.image} alt="" className="card--img" />
      <h3 className="card--title">{title}</h3>
      <Rating rating={product.rating.rate} />
      <span className="card--price">{product.price} $</span>
    </div>
  );
}

export default Card;
