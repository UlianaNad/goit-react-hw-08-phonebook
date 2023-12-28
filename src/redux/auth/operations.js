import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, clearToken, setToken } from "configAxios/api";

export const registerThunk = createAsyncThunk('auth/register', async(credentials, thunkAPI)=>{
    try {
        const response = await api.post('users/signup', credentials)
        setToken(response.data.token)
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const loginThunk = createAsyncThunk('auth/login', async(credentials, thunkAPI) => {
    try {
        const response = await api.post('users/login', credentials)
        setToken(response.data.token)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const logoutThunk = createAsyncThunk('auth/logout', async(_, thunkAPI) => {
    try {
        await api.post('users/logout')
        clearToken()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const refreshThunk = createAsyncThunk('auth/refresh', async(_, thunkAPI) => {
    const savedToken  = thunkAPI.getState().auth.token
    console.log(savedToken);
    if(savedToken){
        setToken(savedToken)
    } else {
        return thunkAPI.rejectWithValue('Token is not exist')
    }
    try {
        const response = await api.get('users/current')
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})