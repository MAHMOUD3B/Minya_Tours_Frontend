import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createTicket = createAsyncThunk(
  "tickets/createTicket",
  async (data) => {
    try {
      const req = await fetch(
        "http://localhost:4000/api/tickets",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      const res = await req.json();
    } catch (err) {
      throw new Error(err);
    }
  }
);

const ticketsSlice = createSlice({
  name: "tickets",
  initialState: {
    error: null,
    loading: false,
    tickets: [],
  },
  extraReducers: (builder) => {
    builder.addCase(createTicket.pending, (state, _) => {
      state.loading = true;
    });
    builder.addCase(createTicket.fulfilled, (state, action) => {
      state.tickets = action.payload;
    });
    builder.addCase(createTicket.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default ticketsSlice.reducer;
