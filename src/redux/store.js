import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactSlice";
import { filterReducer } from "./filterSlice";
import { authReducer } from "./auth/slice";

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
  auth: authReducer,
})
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

