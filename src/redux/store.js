import authSlice from '../redux/slice';
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export default store;