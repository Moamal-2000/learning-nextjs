import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  developerName: "Moamal Alaa"
};

const globalSlice = createSlice({
  initialState,
  name: "globalSlice",
  reducers: {
    updateGlobalState: (state, action) => {
      return state;
    },
  },
});

export const { updateGlobalState } = globalSlice.actions;
export default globalSlice.reducer;
