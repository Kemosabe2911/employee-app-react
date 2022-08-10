import {createSlice } from '@reduxjs/toolkit';

export interface PopupState{
    types:string,
    description:string
}

export const popupSlice = createSlice({
   name: 'popup',
   initialState: { types: '', description:''},
   reducers: {
       changePopup:(state,action) => {
           const {types,description}=action.payload;
           state.types=types;
           state.description=description; 
       }
   }
});

export const {changePopup}=popupSlice.actions;
export default popupSlice.reducer;