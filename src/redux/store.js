import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice';
import { filterReducer } from '../redux/filterSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

