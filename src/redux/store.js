import { configureStore } from '@reduxjs/toolkit';
// import { filterSlice } from './contactReducer';
import { contactsApi, filterSlice } from './contacts/contactReducer';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
