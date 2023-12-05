import { createSlice } from "@reduxjs/toolkit";

const merchantSlice = createSlice({
  name: "merchantDetails",

  initialState: {
    userDetails: {},
    walletBalance:0,
    bankDetails:{}
  },
  reducers: {
    fillUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    fillBankDetails: (state, action) => {
      state.bankDetails = action.payload;
    },
    saveTransactionData: (state, action) => {
      state.walletBalance = action.payload;
    },
  },
  clearMerchantState: (state, action) => {
    return {
      ...state,
      userDetails: {},

    };
  },
});

export const { fillUserDetails,fillBankDetails, saveTransactionData, userDetails, clearMerchantState } =
  merchantSlice.actions;
export default merchantSlice.reducer;
