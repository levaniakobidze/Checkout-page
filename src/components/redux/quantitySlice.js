import { createSlice } from "@reduxjs/toolkit";

const quantityState = {
  quantity: 1,
};

const quantitySlice = createSlice({
  name: "quatity",
  initialState: quantityState,
  reducers: {
    increase(state) {
      state.quantity = state.quantity + 1;
    },
    decrease(state) {
      state.quantity = state.quantity - 1;
    },
  },
});

export default quantitySlice;
