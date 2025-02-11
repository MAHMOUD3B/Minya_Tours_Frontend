import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
    loading: false,
    destInfo: [],
    url: "",
    error: null,
};
export const fetchDestination = createAsyncThunk("destination/fetchDestination", async (_, { rejectWithValue }) => {
    const BASE_URL = `./data/information/${sessionStorage.getItem("dest")}.json`;
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error("Failed to fetch destination information");
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Fetching destination failed", error);
        return rejectWithValue("Failed to fetch destination information");
    }
});
// Create the slice
const destinationSlice = createSlice({
    name: "destination",
    initialState,
    reducers: {
        setUrl: (state, action) => {
            sessionStorage.destUrl = JSON.stringify(action.payload);
            state.url = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDestination.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchDestination.fulfilled, (state, action) => {
            state.loading = false;
            state.destInfo = action.payload;
        });
        builder.addCase(fetchDestination.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || "Unknown error occurred";
        });
    },
});
export const { setUrl } = destinationSlice.actions;
export default destinationSlice.reducer;
