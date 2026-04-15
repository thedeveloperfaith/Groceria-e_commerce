import React from 'react'
import "./AllCard.css"
import CardProducts from './CardProducts';


const AllCard = (props) => {
    console.log("All product goes here ", props.allProducts);


  return (
    <>
    <div className='Main_container'>
        {props.allProducts?.map((product) => (
          <CardProducts product ={product}/>
            // <CardProducts key={product.id} product ={product} />
        ))}
      
    </div>
    </>
  )
}

export default AllCard
