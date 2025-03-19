import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type initialStateType = {
  isUserLoggedIn: boolean;
}

const initialState: initialStateType = {
  isUserLoggedIn: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isUserLoggedIn = action.payload;
    },
  }
})

export const { setUserIsLoggedIn } = authSlice.actions;
export default authSlice.reducer;