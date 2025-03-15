import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type initialStateType = {
  showLogin: boolean;
  showSignup: boolean;
}

const initialState: initialStateType = {
  showLogin: true,
  showSignup: false,
}

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setShowLogin: (state, action: PayloadAction<boolean>) => {
      state.showLogin = action.payload;
      state.showSignup = !action.payload;
    },
    setShowSignup: (state, action: PayloadAction<boolean>) => {
      state.showSignup = action.payload;
      state.showLogin = !action.payload;
    },
  }
})

export const { setShowLogin, setShowSignup } = loginSlice.actions;
export default loginSlice.reducer;