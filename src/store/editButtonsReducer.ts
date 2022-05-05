import {createSlice} from '@reduxjs/toolkit';

enum addType {
    category = 'CATEGORY',
    spending = 'SPENDING'
}

export const selectedButtonSlice = createSlice({
    name: 'addTypeButton', 
    initialState: {
        value: addType.spending
    },
    reducers: {
        categorySelected: state => {
            state.value = addType.category
        },
        spendingSelected: state => {
            state.value = addType.spending
        }
    }
})

export const {categorySelected, spendingSelected} = selectedButtonSlice.actions