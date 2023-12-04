import { createSlice } from "@reduxjs/toolkit";

const merchantSlice = createSlice({
  name: "merchantDetails",

  initialState: {
    userDetails: {},
  },
  reducers: {
    fillUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
  },
  clearMerchantState: (state, action) => {
    return {
      ...state,
      userDetails: {},

    };
  },
});

export const { fillUserDetails, userDetails, clearMerchantState } =
  merchantSlice.actions;
export default merchantSlice.reducer;
