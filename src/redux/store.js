import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './contacts/filterSlice';
import { contactsApi } from './contacts/contactReducer';
import { userSlice } from './auth/userSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
