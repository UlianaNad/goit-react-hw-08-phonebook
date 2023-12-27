import { createSlice } from '@reduxjs/toolkit';
import { addContactThunk, deleteContactThunk, fetchContactsThunk } from './operations';


export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],  
    loading: false,
    error: '',
  },
  extraReducers: builder => {
    builder.addCase(fetchContactsThunk.fulfilled, (state, action) =>{
      state.contacts = action.payload;
      state.loading = false
    }).addCase(fetchContactsThunk.pending, state => {
      state.loading = true
    }).addCase(fetchContactsThunk.rejected, (state, action) =>{
      state.loading = false
      state.error = action.payload
    }).addCase(deleteContactThunk.fulfilled, (state, action)=>{
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id)
      state.loading = false
    }).addCase(deleteContactThunk.pending, (state,action) => {
      state.loading = true
    }).addCase(addContactThunk.fulfilled, (state, action) => {
      state.contacts.push(action.payload)
    })
  }
});

export const { addContact, deleteContact, checkExistingContact, fetchData, isPending, isError } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;


