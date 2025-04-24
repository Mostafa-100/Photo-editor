import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Canvas } from "fabric";

type initialStateType = {
  canvas: Canvas | null;
};

const initialState: initialStateType = {
  canvas: null,
};

const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    setCanvas: (state, action: PayloadAction<Canvas>) => {
      state.canvas = action.payload;
    },
  },
});

export const { setCanvas } = canvasSlice.actions;
export default canvasSlice.reducer;
