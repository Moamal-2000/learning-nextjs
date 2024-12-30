import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  developerName: "Moamal Alaa",
};

const globalSlice = createSlice({
  initialState,
  name: "globalSlice",
  reducers: {
    updateGlobalState: (state, { payload }) => {
      state[payload.key] = payload.value;
    },
  },
});

export const { updateGlobalState } = globalSlice.actions;
export default globalSlice.reducer;
