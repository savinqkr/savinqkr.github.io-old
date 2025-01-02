import { REDUX_KEY } from "@constants";
import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const adminSlice = createSlice({
  name: REDUX_KEY.admin,
  initialState: {
    id: null,
    email: null,
    iat: null,
    exp: null,
    sub: null,
  },
  reducers: {
    setAdmin: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.iat = action.payload.iat;
      state.exp = action.payload.exp;
      state.sub = action.payload.sub;
    },
    resetAdmin: (state, action) => {
      state = {
        id: null,
        email: null,
        iat: null,
        exp: null,
        sub: null,
      };
    },
  },
});

export const { setAdmin, resetAdmin } = adminSlice.actions;

export default adminSlice;
