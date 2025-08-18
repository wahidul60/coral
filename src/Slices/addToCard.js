import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const addToCard = createSlice({
    name: 'addCard',
    initialState,
    reducers: {
        addCardSlice: (state, action) => {            
            let matching = state.value.find(item=>item.title===action.payload.title)
            if(matching) {
                matching.quantity+=1;
            }else{
                state.value.push({...action.payload, quantity:1})
            }
        },

    },
})

export const { addCardSlice } = addToCard.actions

export default addToCard.reducer