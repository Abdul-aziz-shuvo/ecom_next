import React from "react";

export default async function productDetails(id) {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL+'api/product-details/'+id)
    const products = await res.json();
    
    return products
   
}
