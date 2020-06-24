import { createSlice } from '@reduxjs/toolkit';

export const colorsSlice = createSlice({
  name: 'colors',
  initialState: {
    data: [{
      id: '#F6A7DC',
      isSelected: true
    },
    {
      id: '#F7F25D',
      isSelected: false
    },
    {
      id: '#90F9E8',
      isSelected: false
    },
    {
      id: '#9DE295',
      isSelected: false
    },
    {
      id: '#F6B672',
      isSelected: false
    },
    {
      id: '#DFABF2',
      isSelected: false
    },
  ]},
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data = [    {
      id: '#F6B672',
      isSelected: false
    },
    {
      id: '#DFABF2',
      isSelected: false
    },];

    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = colorsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectColors = state => state.colors.data;

export default colorsSlice.reducer;
