import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const horizontalToolbarSlice = createSlice({
  name: "horizontalToolbar",
  initialState: {
    areImageToolsVisible: false,
    areShapeToolsVisible: false,
    areTextToolsVisible: false,
  },
  reducers: {
    showTheToolsOf(state, action: PayloadAction<'image' | 'shape' | 'text' | "none">) {
      switch (action.payload) {
        case "image":
          state.areImageToolsVisible = true;
          state.areShapeToolsVisible = false;
          state.areTextToolsVisible = false;
          break;
        case "shape":
          state.areImageToolsVisible = false;
          state.areShapeToolsVisible = true;
          state.areTextToolsVisible = false;
          break;
        case "text":
          state.areImageToolsVisible = false;
          state.areShapeToolsVisible = false;
          state.areTextToolsVisible = true;
          break;
        case "none":
          state.areImageToolsVisible = false;
          state.areShapeToolsVisible = false;
          state.areTextToolsVisible = false;
          break;
      }
    }
  }
})

export const { showTheToolsOf } = horizontalToolbarSlice.actions;
export default horizontalToolbarSlice.reducer;