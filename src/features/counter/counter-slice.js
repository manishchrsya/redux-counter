import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCount } from "./counter-api";

const initialState = {
  numberValue: 0,
  status: "idle",
};

export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.numberValue += 1;
    },
    decrement: (state) => {
      state.numberValue -= 1;
    },
    incrementByAmount: (state, action) => {
      state.numberValue += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const selectCount = (state) => state.counter.numberValue;

export default counterSlice.reducer;
