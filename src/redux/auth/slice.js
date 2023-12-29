import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, refreshThunk, registerThunk } from "./operations";

const initialState  = {
    user:{
        email:'',
        name:'',
    },
    token:'',
    isLoggedIn:false,
    isRefresh:false,
    isLoading:false,
    isError:null
}
const slice  = createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers: builder =>{
        builder.addCase(refreshThunk.fulfilled, (state, actions) => {
            state.user.name = actions.payload.name
            state.token = actions.payload.token
            state.isLoggedIn = true
            state.isRefresh = false
        }).addCase(refreshThunk.pending, (state, actions) => {
            state.isRefresh = true
        }).addCase(refreshThunk.rejected, (state) =>{
            state.isRefresh = false
        }).addCase(logoutThunk.fulfilled, state => {
            state.contacts = []
        }).addMatcher(isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled), (state, actions) =>{
            state.user = actions.payload.user
            state.token = actions.payload.token
            state.isLoggedIn = true
        }).addMatcher(isAnyOf(loginThunk.pending, registerThunk.pending, logoutThunk.pending), state => {
            state.isLoading = true
            state.isError = null
        }).addMatcher(isAnyOf(loginThunk.rejected, registerThunk.rejected, logoutThunk.rejected), (state, actions) =>{
            state.isLoading = false
            state.isError = actions.payload
        })
    }
})

export const authReducer = slice.reducer;