import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, addContacts, deleteContacts } from 'services/contactsApi';
import { toast } from 'react-hot-toast';

export const getContactsThunk = createAsyncThunk(
  'contacts/allContacts',
  async (_, { reject }) => {
    try {
      const data = getContacts();
      return data;
    } catch (error) {
      return reject(error.message);
    }
  }
);
export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, { reject }) => {
    try {
      const data = addContacts(contact);
      toast.success('Added');
      return data;
    } catch (error) {
      return reject(error.message);
    }
  }
);
export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { reject }) => {
    try {
      const data = deleteContacts(id);
      toast.success('Deleted');
      return data;
    } catch (error) {
      return reject(error.message);
    }
  }
);
