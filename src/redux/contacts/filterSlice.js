import { createSlice } from "@reduxjs/toolkit"


const filterSlice = createSlice({
    name:'filter',
    initialState: { filter: '' },
    reducers:{
        setFilter(state, actions){
            state.filter = actions.payload;
        }
    }
});

export const {setFilter} = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
