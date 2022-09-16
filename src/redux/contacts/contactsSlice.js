import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operations';

const initialState = { items: [] };

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.getContacts.fulfilled](state, { payload }) {
      state.items = payload;
    },
    [contactsOperations.addContact.fulfilled](state, action) {
      state.items = [
        ...state.items,
        {
          id: action.meta.requestId,
          ...action.meta.arg,
        },
      ];
    },
    [contactsOperations.deleteContact.fulfilled](state, action) {
      state.items = state.items.filter(item => item.id !== action.meta.arg);
    },
    [contactsOperations.editContact.fulfilled](state, action) {
      state.items = state.items.map(contact =>
        contact.id === action.meta.arg.id ? action.meta.arg : contact
      );
    },
  },
});
