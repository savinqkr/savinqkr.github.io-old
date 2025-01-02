import { REDUX_KEY } from "@constants";
import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: REDUX_KEY.secureToken,
  initialState: {
    accessToken: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.accessToken = action.payload.accessToken;
    },
    resetToken: (state, action) => {
      state.accessToken = null;
    },
  },
});

export const { setToken, resetToken } = tokenSlice.actions;

export default tokenSlice;
