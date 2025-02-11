import { createSlice } from "@reduxjs/toolkit";
// Define the initial state
const initialState = (localStorage.points && JSON.parse(localStorage["points"])) || 0;
const pointsSlice = createSlice({
    name: "points",
    initialState,
    reducers: {
        increasePoints: (state, action) => {
            const updatedState = state + action.payload;
            localStorage.points = JSON.stringify(updatedState);
            return updatedState;
        },
        decreasePoints: (state, action) => {
            const updatedState = state - action.payload;
            localStorage.points = JSON.stringify(updatedState);
            return updatedState;
        },
    },
});
export const { increasePoints, decreasePoints } = pointsSlice.actions;
export default pointsSlice.reducer;
