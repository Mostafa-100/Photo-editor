import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "@/redux/sidebar"
import canvasSlice from "@/redux/canvas";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    canvas: canvasSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export type RootState = ReturnType<typeof store.getState>;
export default store;