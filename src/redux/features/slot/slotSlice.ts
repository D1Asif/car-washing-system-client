import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    slotId: ""
}

export const slotSlice = createSlice({
    name: "slot",
    initialState,
    reducers: {
        pickSlot: (state, action) => {
            if (state.slotId === action.payload) {
                state.slotId = ""
            } else {
                state.slotId = action.payload
            }
        }
    }
})

export const { pickSlot } = slotSlice.actions;

export default slotSlice.reducer;