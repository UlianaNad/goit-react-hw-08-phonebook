import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactSlice";
import { filterReducer } from "./filterSlice";

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
})
export const store = configureStore({
  reducer: rootReducer,

  devTools: process.env.NODE_ENV !== 'production',
});

