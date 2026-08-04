import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:"Cart",
    initialState: [],
    reducers: {
        addItem:(state,action) => {
            state.push(action.payload);
        },
        removeItem:(state,action) => {
            return state.filter((item) => item.id !== action.payload);
        },
        addAllItem:(state,action) => {
            return action.payload;
        },
        increaseCartQuantity:(state,action) => {
            const id = action.payload;
        }
    }
})

export default cartSlice.reducer