import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userEmail : ''
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        logIn : function (state,action){
            state.userEmail = action.payload;
        }
    }
})

export const { logIn} = authSlice.actions;

export default authSlice.reducer;