"use client"
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {add,remove} from '../../store/cartSlice'
export default function CartSetting({product}) {
  const dispatch = useDispatch()
  const data = useSelector((state) => {
    return state.cart.products.find((value) => value.id == product.id)
  })
  const removeQuantity = (p) => {
    dispatch(remove(p))
  }
  const addQuantity = (p) => {
   
    dispatch(add(p))
  }
  return (
    <div>
        <button onClick={() => removeQuantity(product)}>-</button>
        <input type="text" className="w-30 text-center" value={data.quantity} disabled />
        <button onClick={() => addQuantity(product)}>+</button>
    </div>
  )
}
