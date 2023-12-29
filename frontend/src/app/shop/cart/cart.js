"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {add,remove} from '../../store/cartSlice'
import CartSetting from "./CartSetting";
import { BsFillCartPlusFill } from "react-icons/bs";
import ColorBtn from './colorBtn'
import Link from "next/link";

export default function Cart({product}) {
    const inCart = useSelector((state) => {
        const value =  state.cart.products.find((data) => data.id == product.id)
        return value
    })
    const dispatch = useDispatch()
    const AddToCart = (product) => {
        dispatch(add(product))
    }
    const colorSelect = (event) => {
       
       if(event.target.classList.contains('border-2') == false){
            const color_tags  = document.getElementsByClassName('color_btn');
            let color_arr = Array.from(color_tags)
            color_arr.forEach(element => {
                element.classList.remove('border-2')
            });
            event.target.classList.add('border-2')
       }
    }
  return  (
    <div className="h-full w-full border  ">
        <div className="flex justify-center" >
            <img src="https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4" alt="" />
        </div>
        <div className="product_description text-center flex flex-col space-y-3 my-3">
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            {/* <ColorBtn colorSelect={colorSelect} colors={product.color}/> */}
            {inCart ? <CartSetting product={product}/> : 
            <Link href={'/shop/details/'+product.id}>
                view
            </Link> 
            } 

{/* <button className="border py-3 px-5 w-52 shadow-sm mx-auto" onClick={() => AddToCart(product)}> <BsFillCartPlusFill className="mx-auto"/></button> */}
        </div>
    </div>
  )
}
