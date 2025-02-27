import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isSidebarVisible: false,
    toolsToShow: "",
  },
  reducers: {
    showSidebar: (state, action: PayloadAction<boolean>) => {
      state.isSidebarVisible = action.payload;
    },
    setTheToolsToShow: (state, action: PayloadAction<string>) => {
      state.toolsToShow = action.payload;
    }
  }
})

export const { showSidebar, setTheToolsToShow } = sidebarSlice.actions;
export default sidebarSlice.reducer;