import React from 'react'
import spinner from '../assets/Spin-1s-200px.gif'
function Spinner() {
  return (
    <div className='spinner'>
      <img src={spinner} alt="Loading products" />
    </div>
  )
}

export default Spinner
