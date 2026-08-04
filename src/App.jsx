import { useState,useEffect } from 'react'
import Nav from './component/Nav.jsx'
import { Outlet } from "react-router-dom"
import {useDispatch} from 'react-redux'
import { URL } from './constant.js'
import {addProductData} from './component/slice/ProductSlice'
import {addAllItem} from './component/slice/CartSlice'

function App() {
  const dispatch = useDispatch();

  const fetchCartData = async () => {
    try{
      const result = await fetch(`${URL}/cart`);
      const data = await result.json();
      dispatch(addAllItem(data.cartItem))
    }catch(err){
      console.log(err)
    }
  }
  const fetchProductData = async () =>{
    try{
      const result = await fetch(`${URL}/product`)
      const data = await result.json();
      dispatch(addProductData(data.productData))
    }catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    fetchProductData();
    fetchCartData();
  },[])
  return (
    <>
  <Nav />
  <Outlet />
    </>
  )
}

export default App
