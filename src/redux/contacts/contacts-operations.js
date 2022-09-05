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
    await axios.post('/contacts', contact).then(() => {
      alert(`Contact '${contact.name}' added to your phonebook`);
    });
  } catch (error) {}
});

const deleteContact = createAsyncThunk('contacts/delete', async id => {
  try {
    await axios.delete(`contacts/${id}`);
  } catch (error) {}
});

const editContact = createAsyncThunk();

const contactsOperations = {
  getContacts,
  addContact,
  deleteContact,
  editContact,
};

export default contactsOperations;
