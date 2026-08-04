import {configureStore} from '@reduxjs/toolkit'
import productSlice from './slice/ProductSlice.js'
import cartSlice from './slice/CartSlice'

export const Store = configureStore({
    reducer:{
        product: productSlice,
        cart : cartSlice
    }
})

export default Store
