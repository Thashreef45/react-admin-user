// import {createStoreHook} from 'react-redux';
import authSlice from '../redux/slice';
import { configureStore } from '@reduxjs/toolkit';


// const initialState = {
//     value : 0,
// }

// function appReducer(prevState = initialState , action){
//     console.log(action)
//     switch(action.type){
//        case 'edit-user' :return {...prevState}
//     }
// }


const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export default store;