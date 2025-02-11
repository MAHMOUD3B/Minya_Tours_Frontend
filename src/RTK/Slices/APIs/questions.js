import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// Define the initial state
const initialState = {
  loading: false,
  questions: [],
  url: "",
  error: null,
};
// Define the async thunk
export const fetchQuestions = createAsyncThunk(
  "questions/fetchQuestions",
  async (_, { rejectWithValue }) => {
    try {
      const BASE_URL = `./data/questions/${sessionStorage.dest}.json`;
      const response = await fetch(BASE_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch questions");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Fetching questions failed", error);
      return rejectWithValue("Failed to fetch questions");
    }
  }
);
// Create the slice
const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.loading = false;
      state.questions = action.payload;
    });
    builder.addCase(fetchQuestions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Unknown error occurred";
    });
  },
});
export default questionsSlice.reducer;
