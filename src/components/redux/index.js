import { configureStore } from "@reduxjs/toolkit";
import quantitySlice from "./quantitySlice";

const store = configureStore({ reducer: quantitySlice.reducer });

export const quantityActions = quantitySlice.actions;

export default store;
