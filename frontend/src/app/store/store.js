//store.jsx

"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  cart: cartReducer,
  
  //add all your reducers here
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true
 });
