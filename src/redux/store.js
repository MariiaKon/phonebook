import { configureStore } from '@reduxjs/toolkit';
// import { contactsSlice } from './contactReducer';
import { contactsApi } from './contactReducer';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
