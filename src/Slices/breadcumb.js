import { createSlice } from '@reduxjs/toolkit'

export const breadcumb = createSlice({
  name: 'breadcumbSlice',
  initialState: {
    previousValue: null,
    currentValue: null,
  },
  reducers: {
    increment: (state, action) => {   
      state.previousValue = state.currentValue;
      state.currentValue = action.payload;

    },    
  },
})

export const { increment } = breadcumb.actions

export default breadcumb.reducer