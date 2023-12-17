//counterSlice.jsx

"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products : []
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state,action) => {
      let exist = false;
        if(state.products.length == 0){
             state.products.push(action.payload)
             return state;
        }
        state.products =  state.products.map((product) =>  {
            if(parseInt(product.id) == parseInt(action.payload.id)){
                exist = true
                product.quantity += 1
                return product
            }
            return product
           

        })
        if(exist == false){
          state.products.push(action.payload)
        }
      
    },
    remove: (state,action) => {
      let removeStates = false;

      state.products =   state.products.filter(val => {
       
        if((val.id == action.payload.id && val.quantity == 1) == false){
          return val
        }else{
          removeStates = true
        }
         
      })
        if(removeStates){
          return state;
        }

        state.products = state.products.map((pr) => {
       
        if(pr.id == action.payload.id){
            pr.quantity -= 1
            return pr
        }
        return pr
      })
    
    },
    
    clear: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { add, remove, clear } = cartSlice.actions

export default cartSlice.reducer;