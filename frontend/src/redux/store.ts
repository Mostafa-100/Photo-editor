import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "@/redux/sidebar"
import canvasSlice from "@/redux/canvas";
import horizontalToolbarSlice from "@/redux/horizontalToolbar";
import loginSlice from "@/redux/login";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    canvas: canvasSlice,
    horizontalToolbar: horizontalToolbarSlice,
    login: loginSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export type RootState = ReturnType<typeof store.getState>;
export default store;