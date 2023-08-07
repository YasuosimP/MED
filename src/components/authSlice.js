import { createSlice } from '@reduxjs/toolkit';

const authToken = localStorage.getItem('authToken');
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: localStorage.getItem('authToken') ? true : false,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    updateProfile: (state, action) => {
      const updatedProfile = action.payload;
      // Update the user profile in the state
      state.user = {
        ...state.user,
        ...updatedProfile,
      };
    },
  },
});

// Export the actions
export const { login, logout, updateProfile } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
