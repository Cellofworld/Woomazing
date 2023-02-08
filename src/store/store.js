import { configureStore } from "@reduxjs/toolkit";
import sendMessageReducer from "./sendMessageSlice";
import productsReducer from "./productsSlice";
import userChoiceNavReducer from './userChoice';
import cartReducer from './cartSlice';
import orderCardReducer from './orderProductCardSlice';

export default configureStore({
    reducer: {
        userMessage: sendMessageReducer,
        orderCardData: orderCardReducer,
        productsData: productsReducer,
        userChoiceNav: userChoiceNavReducer,
        cartOredr: cartReducer,

    },
}) 