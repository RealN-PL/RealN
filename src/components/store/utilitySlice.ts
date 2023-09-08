import { createSlice } from "@reduxjs/toolkit";


interface UtilityState {
    page: 'buy' | 'sell'
}


const initialState : UtilityState = {
    page: "buy"
}

export const utilitySlice = createSlice({
    name: "utility",
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        }
    }
})

export const {setPage} = utilitySlice.actions