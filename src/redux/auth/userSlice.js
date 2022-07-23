import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  password: '',
  token: '',
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        isLoggedIn: true,
      };
    },
    loginUser: (state, action) => {
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        isLoggedIn: true,
      };
    },
    logoutUser: state => {
      return (state = initialState);
    },
  },
});

export const { registerUser, loginUser, logoutUser } = userSlice.actions;
