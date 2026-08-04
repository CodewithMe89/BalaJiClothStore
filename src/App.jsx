import { useState,useEffect } from 'react'
import Nav from './component/Nav.jsx'
import { Outlet } from "react-router-dom"
import {useDispatch} from 'react-redux'
import { URL } from './constant.js'
import {addProductData} from './component/slice/ProductSlice'

function App() {
  const dispatch = useDispatch();
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
    fetchProductData()
  },[])
  return (
    <>
  <Nav />
  <Outlet />
    </>
  )
}

export default App
