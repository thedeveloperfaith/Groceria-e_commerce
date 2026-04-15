import React, { useState, useEffect } from 'react'
import axios from 'axios';
import AllCard from './AllCard';


const AllProducts = () => {
  const [allProd, setAllProd] = useState(true);

  const [allProducts, setAllProduct] = useState([]);

  const all = () => {
    setAllProd(true)
  }

  const getAllProduct = async () => {
    const url =  "https://api.escuelajs.co/api/v1/products";
    try {
      const res = await axios.get(url);
      setAllProduct(res?.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllProduct();
  }, []);


  // const   AllDataApi =() => {
  //   const [data,setData] = useState([])
  // }


  // const Alldata = async () =>{
  //   const BaseUrl = "https://api.escuelajs.co/api/v1/products"
  //   try {
  //     const res = await axios.get (BaseUrl)
  //     setData(res?.data);
  //     console.log(res.data);
  //   }  catch (error)   {
  //     con
  //   }


  // }

  

  
  return (
    <div>
      <section>
        <button onClick={all}>All</button>
      </section>

      { allProd? (
      <AllCard allProducts={allProducts} /> 
    ): null}
     </div>
  
  )
  
};

export default AllProducts
