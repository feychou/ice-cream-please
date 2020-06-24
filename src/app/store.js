import { configureStore } from '@reduxjs/toolkit';
import colorReducer from '../features/colors/colorsSlice';

export default configureStore({
  reducer: {
    colors: colorReducer,
  },
});
