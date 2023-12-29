import React from "react";
import { useDispatch,useSelector } from "react-redux";
import {add,remove} from '../store/cartSlice'

export default function HeaderCartItem({product}) {
    const dispatch = useDispatch()
    const items = useSelector((state) => {
        return state.cart.products;
    })
   const removeQuantity = (p) => {
    if(p.quantity == 1 && items.length == 1) {
        let d_tag = document.getElementsByClassName('drpdown_menu');
        if(d_tag[0].classList.contains('hidden') == false){
            d_tag[0].classList.add('hidden')
        }
        
    }
    dispatch(remove(p))
  }
  const addQuantity = (p) => {
   
    dispatch(add(p))
  }

  return <li className="flex items-center">
  <div >
     <img src="https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4" alt=""  width={'80'} height={'80'}/>
 </div>
<div className="flex justify-between px-3 w-full">

 <div>
     <p>{product.name}</p>
     <div>
     <p className="rounded-md bg--50 px-2 py-1 my-2 text-xs font-medium text-black-500 ring-1 ring-inset ring-red-600/10">Red</p>
     <p className="rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-black-500 ring-1 ring-inset ring-red-600/10">L</p>
     </div>
 </div>
 <div className="flex flex-col justify-between">
     <p>${product.price * product.quantity}</p>
     <p className="flex rounded border">
         <button className="border-r-2 px-1" onClick={() => removeQuantity(product)}>-</button>
         <p className="px-1">{product.quantity}</p>
         <button className="border-l-2 px-1" onClick={() => addQuantity(product)}>+</button>
     </p>
 </div>
</div>
</li>;
}
