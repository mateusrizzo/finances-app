import {configureStore} from '@reduxjs/toolkit';
import {selectedButtonSlice} from './editButtonsReducer';

configureStore({
  reducer: selectedButtonSlice.reducer,
});
