import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
  name: "result",
  initialState: {
    text: "",
  },
  reducers: {
    addText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { addText } = resultSlice.actions;
export default resultSlice.reducer;
