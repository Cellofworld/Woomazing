import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    }
       
    ,
    reducers: {
        addItemCart: (state, action) => {
            state.cartItems.push(action.payload)
        },
        removeItem: (state, action) => {
           state.cartItems = state.cartItems.filter(cartOrder => cartOrder.pid !== action.payload)
        },
        completeOrder: (state) => {
            state.cartItems = []
         }
    }
})

export const {addItemCart, removeItem, completeOrder} = cartSlice.actions;
export default cartSlice.reducer;