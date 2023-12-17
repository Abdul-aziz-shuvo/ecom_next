"use client";
import React from "react";
import Link from 'next/link'
import { useSelector } from "react-redux";
import HeaderCartItem from './headerCartItem'
export default function header() {
    const cartCount = useSelector((state) => {
        return   state.cart.products.length 
    })
    const dropdownHover = (e) => {
        event.stopPropagation()
        if(items.length > 0){
            let d_tag = document.getElementsByClassName('drpdown_menu');
            if(d_tag[0].classList.contains('hidden')){
                d_tag[0].classList.remove('hidden')
            }
        }
       
       
    }
    const dropdownLeave = () => {
        console.log('leave');
        let d_tag = document.getElementsByClassName('drpdown_menu');
        if(d_tag[0].classList.contains('hidden') == false){
            d_tag[0].classList.add('hidden')
        }
    }

    const items = useSelector((state) => {
        return state.cart.products;
    })
  return <nav>
    <div className="main_nav_div flex justify-between w-full p-5 border-b-2">
        <div className="logo">ECOM</div>
        <div className="menu_div   flex justify-around w-1/2 flex-wrap">
            <div>
                <Link href="/men" className="uppercase">
                    shop
                </Link>
            </div>
            <div>
                <Link href="/men" className="uppercase">
                    men
                </Link>
            </div>
            <div>
                <Link href="/men" className="uppercase">
                    women
                </Link>
            </div>
            <div>
                <Link href="/men" className="uppercase">
                    kids
                </Link>
            </div>
            <div className="relative" onMouseEnter={() => dropdownHover(event)} onMouseLeave={dropdownLeave}> 
                Cart - {(cartCount)}
                <div className="drpdown_menu border hidden p-5 shadow-md rounded  absolute right-0 break-words bg-white  " style={{width: '300px'}}>
                <ul >
                    {
                        items.map((product) => {
                            return <HeaderCartItem product={product}/>
                        })
                    }
                    
                   
                </ul>
            </div>
            </div>
           


            
        </div>
    </div>
  </nav>;
}
