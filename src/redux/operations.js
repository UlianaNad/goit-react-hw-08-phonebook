//import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'configAxios/api';

//axios.defaults.baseURL = 'https://65858a24022766bcb8c8d926.mockapi.io';

export const fetchContactsThunk = createAsyncThunk(
  'fetchContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get('contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await api.delete(`contacts/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const addContactThunk = createAsyncThunk('addContact', async(newContact, thunkAPI) => {
    try {
        const {data} = await api.post('contacts', newContact)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message); 
    }
})
