import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function Rating({ rating }) {
  const roundedRating = Math.round(rating * 2) / 2;
 
  const stars = [...Array(5)].map((_, index) => {
    const isFullStar = roundedRating >= index + 0.5;
    const isHalfStar = roundedRating >= index && roundedRating < index + 0.5;
    return (
      <span key={index}>
        {isFullStar ? (
          <FaStar className="red"/>
        ) : isHalfStar ? (
          <FaStarHalfAlt className="red"/>
        ) : (
          <FaRegStar />
        )}
      </span>
    );
  });
  return <div>{stars}</div>;
}

export default Rating;
