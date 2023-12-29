"use client"
import React, { useEffect, useState } from "react";
import { getProducts } from "../lib/getProducts";
import Cart from "./cart/cart";
import { useSearchParams } from "next/navigation";

export default  function Products() {
 const [products,setProducts] =  useState([])
    const fetchProduct = async () => {
        const {data} = await  getProducts()
        setProducts(data)
    }
    
   useEffect(() => {
    fetchProduct()
   },[])
   useEffect(() => {
    console.log(products);
   },[products])
    return  (
        
        products.map((product) => {
            return (
            <Cart product={product}/>
            )
        })
    )
}
