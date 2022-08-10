import {createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
export interface AuthenticationState {
    value: string
} 
const initialState: AuthenticationState = { 
value:localStorage.getItem('authentication')
};

export const authenticationSlice=createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        changeAuthentication: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
          },
    }
});

export const {changeAuthentication}=authenticationSlice.actions;

export default authenticationSlice.reducer;

