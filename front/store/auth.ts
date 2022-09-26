import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  username: "",
  id: "",
  data: {},
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
    newUsername(state, action) {
      state.username = action.payload;
    },
    newId(state, action) {
      state.id = action.payload;
    },
    newData(state, action) {
      state.data = action.payload;
    },
  },
});
export const authActions = authSlice.actions;

export default authSlice.reducer;
