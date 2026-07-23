import {configureStore} from '@reduxjs/toolkit'
import productSlice from './slice/ProductSlice.js'
export const Store = configureStore({
    reducer:{
        product: productSlice
    }
})

export default Store
