import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialUserState = JSON.parse(localStorage.getItem("user")) || null;

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    login(state, action) {
      state = action.payload;
      localStorage.setItem("user", JSON.stringify(state));
      return state;
    },
    logout(state) {
      state = null;
      localStorage.removeItem("user");
      return state;
    },
    updateUser(state, action) {
      state = { ...state, ...action.payload };
      localStorage.setItem("user", JSON.stringify(state));
      return state;
    },
    changePassword(state, action) {
      // Assuming action.payload has currentPassword and newPassword
      const { currentPassword, newPassword } = action.payload;
      if (state && state.password === currentPassword) {
        state.password = newPassword; // Update password
        localStorage.setItem("user", JSON.stringify(state));
        return state;
      } else {
        throw new Error("Current password is incorrect");
      }
    },
  },
});

export const { login, logout, updateUser, changePassword } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
