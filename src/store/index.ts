import {configureStore} from '@reduxjs/toolkit';
import selectedButtonSlice from './editButtons';

export const store = configureStore({
  reducer: {
    selectedButton: selectedButtonSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
