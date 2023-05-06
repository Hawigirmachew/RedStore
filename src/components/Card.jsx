import React from "react";
import Rating from "./Rating";

function Card({ product,handleAddToCart}) {
  const title = product.title.split(" ").slice(0, 3).join(" ");
  return (
    <div className="card">
      <img src={product.image} alt="" className="card--img" />
      <h3 className="card--title">{title}</h3>
      <Rating rating={product.rating.rate} />
      <p className="card--price">{product.price} $</p>
      <button className="btn-add-cart" onClick={()=> handleAddToCart(product)}>Add To Cart</button>
    </div>
  );
}

export default Card;
