import { createSlice } from "@reduxjs/toolkit";

const sendMessageSlice = createSlice({
    name: 'sendMessage',
    initialState: {
        userMessageData: null
    },
    reducers: {
        sendMessageUserData: (state, action) =>  {
            state.userMessageData = action.payload
        },
    },
})

export const { sendMessageUserData } = sendMessageSlice.actions;
export default sendMessageSlice.reducer;