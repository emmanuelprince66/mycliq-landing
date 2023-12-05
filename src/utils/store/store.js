import { configureStore, combineReducers } from "@reduxjs/toolkit";
import merchantReducer from "./merchantSlice";

const store = configureStore({
  reducer: merchantReducer,
});


export default store
