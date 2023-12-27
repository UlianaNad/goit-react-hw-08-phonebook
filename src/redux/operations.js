import axios from 'axios';
import { addContact, deleteContact, fetchData, isError, isPending } from './contactSlice';


axios.defaults.baseURL = 'https://65858a24022766bcb8c8d926.mockapi.io';

export const fetchContactsThunk = () => async(dispatch) => {
    try{
        dispatch(isPending())
        const {data} = await axios.get('contacts');
        dispatch(fetchData(data))
    } catch(error){
        dispatch(isError(error.message))
    }
}

export const deleteContactThunk = (id) => async dispatch =>{
    try {
        dispatch(isPending())
        const response = await axios.delete(`contacts/${id}`)
        dispatch(deleteContact(response.data.id))
    } catch (error) {
        dispatch(isError(error.message))
    }
}

export const addContactThunk = (newContact) => async dispatch =>{
    try {
        const response = await axios.post('contacts', newContact)
        dispatch(addContact(response.data))
    } catch (error) {
          dispatch(isError(error.message))
    }
}