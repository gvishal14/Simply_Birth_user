import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signUp: (state) => {
            state.value += 1
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = authSlice.actions

export default authSlice.reducer