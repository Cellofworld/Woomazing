import { createSlice } from "@reduxjs/toolkit";

const initialStateData = {
    size: null,
    color: null,
    quantity: 1
}

const orderProductCardSlice = createSlice({
    name: 'orderProductCard',
    initialState: initialStateData,
    reducers: {
        sendOrderProductCardQuantity: (state, action) => {
        state.quantity = action.payload
    },
        sendOrderProductCardColor: (state, action) => {
        state.color = action.payload
    },
        sendOrderProductCardSize: (state, action) => {
        state.size = action.payload
    },
        clearOrderProductCard: (state) => {
        state.size = initialStateData.size;
        state.color = initialStateData.color;
        state.quantity = initialStateData.quantity;
    },

}
})

export const {sendOrderProductCardQuantity,sendOrderProductCardColor, sendOrderProductCardSize,clearOrderProductCard} = orderProductCardSlice.actions
export default orderProductCardSlice.reducer