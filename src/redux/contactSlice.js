import { createSlice } from '@reduxjs/toolkit';


export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],  
    loading: false,
    error: '',
  },
  reducers: {
    fetchData:(state, action) => {
      state.contacts = action.payload;
      state.loading = false;
    },
    isPending:(state, action) => {
      state.loading = true;
      state.error = '';
    },
    isError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    
    addContact: (state, action) => {
        state.contacts.push(action.payload)
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      state.loading = false;
      return state;
    },
  },
});

export const { addContact, deleteContact, checkExistingContact, fetchData, isPending, isError } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;


