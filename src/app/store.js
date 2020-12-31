import { configureStore } from '@reduxjs/toolkit';
import photoSlice from 'features/Photo/photoSlice';

export default configureStore({
  reducer: {
    photos: photoSlice
  },
});
