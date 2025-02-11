import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// Define the initial state
const initialState = {
    loading: false,
    cards: [],
    error: null,
};
// Define the async thunk
export const fetchRedeemCards = createAsyncThunk("redeem-cards/fetchRedeemCards", async (_, { rejectWithValue }) => {
    try {
        const response = await fetch("./Data/redeem_cards.json");
        if (!response.ok) {
            throw new Error("Failed to fetch redeem cards");
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Redeem cards fetch failed!", error);
        return rejectWithValue("Failed to fetch redeem cards");
    }
});
// Create the slice
const redeemCardsSlice = createSlice({
    name: "redeem-cards",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRedeemCards.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchRedeemCards.fulfilled, (state, action) => {
            state.loading = false;
            state.cards = action.payload;
        });
        builder.addCase(fetchRedeemCards.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || "Unknown error occurred";
        });
    },
});
export default redeemCardsSlice.reducer;
