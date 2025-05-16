import React, { useEffect, useState } from 'react'
import Button from './Button'
import productImage from "../assets/headphones.png"
import axios from 'axios';

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios("https://dummyjson.com/products")
        setProducts(response.data.products);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchPost();
  }, []);
  

  // fetch("https://dummyjson.com/products") 
  // .then(response => response.json())
  // .then((data) => setProducts(data.products))                                          fetch method
  // .catch(error => console.log("error", error));


  // const fetchPost = async () => {
  //   try {
  //     const response = await fetch("https://dummyjson.com/products")
  //     const data = await response.json();                                            the try and catch method
  //     console.log(data);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };
  // fetchPost();


  return (
    <>
    {products.map((p, index) => (
      <div key={index} className="bg-white w-[350px] h-fit p-4 rounded-xl shadow-lg">
      <div className="w-full relative p-12 ">
        <div className="bg-purple-300 text-black px-2 py-1 w-fit absolute top-0 left-0">{p.availabilityStatus}</div>
        <img className="size-[200px] m-auto" src={p.images[0]} alt="image" />
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold text-2xl mb-3">{p.title}</h3>
        <p>{p.brand}</p>
        <small className="text-sm text-gray-500">Shipped in 3-4 days</small>
        <bold className="font-bold text-md">${p.price}</bold>
  
        <div className="flex gap-3">
          <Button label="Add to Cart" className="bg-gray-100 w-full text-gray-400"/>
          <Button label="Buy now" className="bg-purple-400 w-full text-white"/>
        </div>
      </div>
    </div>
    ))}
  </>
  )
}

export default ProductCard
