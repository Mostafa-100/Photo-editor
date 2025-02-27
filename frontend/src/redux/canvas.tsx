import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Canvas } from "fabric";

const canvasSlice = createSlice({
  name: "canvas",
  initialState: {
    canvas: null,
  },
  reducers: {
    setCanvas: (state, action: PayloadAction<Canvas>) => {
      state.canvas = action.payload;
    }
  }
})

export const { setCanvas } = canvasSlice.actions;
export default canvasSlice.reducer;