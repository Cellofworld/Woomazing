import { createSlice } from "@reduxjs/toolkit";

const userChoiceSlice = createSlice({
    name: 'userChoice',
    initialState: {
        userChoiceNav: 'all'
    },
    reducers: {
        changeChoice: (state, action) => {
            state.userChoiceNav = action.payload
        },
    }
})

export const { changeChoice } = userChoiceSlice.actions;
export default userChoiceSlice.reducer;