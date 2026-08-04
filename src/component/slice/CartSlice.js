import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:"Cart",
    initialState: [],
    reducers: {
        addItem:(state,action) => {
            state.push(action.payload);
        },

        removeItem:(state,action) => {
            return state.filter((item) => item._id !== action.payload);
        },

        addAllItem:(state,action) => {
            return action.payload;
        },

        increaseCartQuantity:(state,action) => {
            const id = action.payload;

            const cartItem = state.find((item) => item._id === id)

            if(cartItem){
                cartItem.quantity += 1;
            }
        },
        decreaseCartQuantity:(state,action) => {
            const id = action.payload;

            const cartItem = state.find((item) => item._id === id)

            if(cartItem){
                cartItem.quantity -= 1;
            }
        }
    
    }
})

export const {addItem,removeItem,addAllItem,increaseCartQuantity,decreaseCartQuantity} = cartSlice.actions
export default cartSlice.reducer