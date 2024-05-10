import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "../features/todo/fetchApiSlice"
export const store = configureStore({
  reducer: {
    fetch:fetchReducer,
  },
});


export default store;