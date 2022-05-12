import {createSlice} from '@reduxjs/toolkit';

export enum addType {
  category = 'CATEGORY',
  spending = 'SPENDING',
}

const selectedButtonSlice = createSlice({
  name: 'addTypeButton',
  initialState: {
    value: addType.spending,
  },
  reducers: {
    categorySelected: state => {
      state.value = addType.category;
    },
    spendingSelected: state => {
      state.value = addType.spending;
    },
  },
});

export default selectedButtonSlice.reducer;

export const {categorySelected, spendingSelected} = selectedButtonSlice.actions;
