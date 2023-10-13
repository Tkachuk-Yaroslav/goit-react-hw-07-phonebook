import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contacts/contactsSlice';
import { filterSlice } from './filter/filterSlice';

const rootReducer = combineReducers({
  contacts: contactSlice.reducer,
  filter: filterSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
