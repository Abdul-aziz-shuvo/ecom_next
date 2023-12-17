"use client"
import React from "react";
import Cart from './cart/cart'
import Products from "./products";
 export default  function () {
  
   
  return <div className="grid grid-cols-4 gap-4 md:container mx-auto my-16 place-items-center">
        <Products />
  </div>;
}
