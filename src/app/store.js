import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import navbarReducer from '../features/navbar/navbarSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    navbar: navbarReducer,
  },
});
