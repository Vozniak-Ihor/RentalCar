import { createSlice } from '@reduxjs/toolkit';

const advertSlice = createSlice({
 name: 'advert',
 initialState: {
  items: [],
  checkbox: false
 },
 reducers: {
  addFavorite: (state, action) => {
   state.items.push(action.payload);
   console.log(action.payload.id)
  },
  removeFavorite: (state, action) => {
   state.items = state.items.filter(item => item.id !== action.payload);
  },
 },
});

export const { addFavorite, removeFavorite } = advertSlice.actions;
export default advertSlice.reducer;
