import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations.js';

const initialState = {
  user: { name: '', email: '', password: '' },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.login.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logout.fulfilled](state) {
      return (state = initialState);
    },
    [authOperations.fetchCurrentUser.fulfilled](state, { payload }) {
      if (payload === undefined) {
        localStorage.clear();
        return;
      }
      state.user = payload;
      state.isLoggedIn = true;
    },
  },
});
