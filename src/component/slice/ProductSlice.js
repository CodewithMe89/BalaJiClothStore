import {createSlice} from '@reduxjs/toolkit'

const productsSlice = createSlice({
    name:"Products",
    initialState:[],
    reducers:{
        addProductData:(state,action) => {
            return action.payload
        }
    }
})

export const {addProductData} = productsSlice.actions
export default productsSlice.reducer