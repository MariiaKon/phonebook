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
    [contactsOperations.editContact.fulfilled]() {},
  },
});

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactsApi = createApi({
//   reducerPath: 'contacts',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com',
//   }),
//   tagTypes: ['Contacts'],
//   endpoints: builder => ({
//     getContacts: builder.query({
//       query: () => 'contacts',
//       providesTags: ['Contacts'],
//     }),
//     getContactById: builder.query({
//       query: id => `/contacts/${id}`,
//       providesTags: ['Contacts'],
//     }),
//     addContact: builder.mutation({
//       query: contact => ({
//         url: 'contacts',
//         method: 'POST',
//         body: contact,
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//     deleteContact: builder.mutation({
//       query: id => ({
//         url: `/contacts/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//     editContact: builder.mutation({
//       query(data) {
//         const { id, ...contact } = data;
//         return { url: `/contacts/${id}`, method: 'PATCH', body: contact };
//       },
//       invalidatesTags: ['Contacts'],
//     }),
//   }),
// });

// export const {
//   getContacts,
//   addContact,
//   useDeleteContactMutation,
//   useEditContactMutation,
//   useGetContactByIdQuery,
// } = contactsSlice.actions;
