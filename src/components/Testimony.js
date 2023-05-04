import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import Rating from './Rating'

function Testimony({fullName, img, rating, testimony}) {
  return (
    <div className='testimony'>
      <FaQuoteLeft className='testimony-icon'/>
      <p className='testimony-desc'>{testimony}</p>
      <Rating rating={rating}/>
      <div>
        <img src={img} alt="Testimonial figure" className='testimony-img'/>
        <h4 className='testimony-name'>{fullName}</h4>
      </div>
    </div>
  )
}

export default Testimony
