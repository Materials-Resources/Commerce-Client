import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "searchVisible",
  initialState: {
    value: false,
  },
  reducers: {
    close: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = false;
    },
    open: (state) => {
      state.value = true;
    },
    toggle: (state, action) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { close, open, toggle } = searchSlice.actions;

export default searchSlice.reducer;
