import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getContacts = createAsyncThunk('contacts/getContacts', async () => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {}
});

const addContact = createAsyncThunk('contacts/addContact', async contact => {
  try {
    await axios.post('/contacts', contact);
  } catch (error) {}
});

const deleteContact = createAsyncThunk('contacts/deleteContact', async id => {
  try {
    await axios.delete(`contacts/${id}`);
  } catch (error) {}
});

const editContact = createAsyncThunk('contacts/editContact', async contact => {
  try {
    await axios.patch(`contacts/${contact.id}`, {
      name: contact.name,
      number: contact.number,
    });
  } catch (error) {}
});

const contactsOperations = {
  getContacts,
  addContact,
  deleteContact,
  editContact,
};

export default contactsOperations;
