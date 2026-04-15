import React from 'react'
import "./CardProducts.css"

const CardProducts = ({product}) => {
  return (
     <div className='Card_container'>
        <div className='CardImg'>
         <img src={product?.image[0]} alt ="img" />
        </div>
        <h2>{product?.title}</h2>
        <span>${product?.price}</span>
        <button>Add to Cart</button>
    </div>
  )
};

export default CardProducts
