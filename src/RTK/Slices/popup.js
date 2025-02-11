import { createSlice } from "@reduxjs/toolkit";
// Define the initial state
const initialState = {
    status: false,
    title: "",
    points: 0,
};
const popupSlice = createSlice({
    name: "popup",
    initialState,
    reducers: {
        handlePopup: (state, action) => {
            state.status = action.payload.status;
            state.title = action.payload.title;
            state.points = action.payload.points;
        },
    },
});
export const { handlePopup } = popupSlice.actions;
export default popupSlice.reducer;
