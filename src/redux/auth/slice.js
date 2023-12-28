import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, refreshThunk, registerThunk } from "./operations";

const initialState  = {
    user:{
        email:'',
        name:'',
    },
    token:'',
    isLoggedIn:false,
}
const slice  = createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers: builder =>{
        builder.addCase(registerThunk.fulfilled, (state, actions) =>{
            state.user = actions.payload.user
            state.token = actions.payload.token
            state.isLoggedIn = true
        }).addCase(loginThunk.fulfilled, (state, actions) => {
            state.user = actions.payload.user
            state.token = actions.payload.token
            state.isLoggedIn = true
        }).addCase(logoutThunk.fulfilled, (state) => {
            state.user = initialState.user;
            state.isLoggedIn = false
            state.token = ''
        }).addCase(refreshThunk.fulfilled, (state, actions) => {
            state.user.name = actions.payload.name
            state.token = actions.payload.token
            state.isLoggedIn = true
        })
    }
})

export const authReducer = slice.reducer;