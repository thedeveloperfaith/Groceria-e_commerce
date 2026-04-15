import React from 'react'
import "./CardProducts.css"
import { useNavigate } from 'react-router-dom';

const CardProducts = ({product}) => {
  const  navigate = useNavigate();

  return (
     <div className='Card_container' onClick={() => navigate (`detailedpage/${product.id}`)}>
        <div className='CardImg'>
         <img src={product?.image} alt ="img" />
        </div>
        <h2>{product?.title}</h2>
        <span>${product?.price}</span>
        <button>Add to Cart</button>
    </div>
  )
};

export default CardProducts
