import React, { useState, useEffect } from 'react'
import axios from 'axios';

const AllProducts = () => {
  const [allProducts, setAllProduct] = useState([]);

  const getAllProduct = async () => {
    const url = "https://fakestoreapi.com/products";
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

  return <div>AllProduct</div>;
};
export default AllProducts
