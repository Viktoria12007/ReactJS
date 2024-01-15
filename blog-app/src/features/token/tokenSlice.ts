import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface tokenState {
    value: string
}
const initialState: tokenState = {
    value: ''
};

export const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
})

// Action creators are generated for each case reducer function
export const { setToken } = tokenSlice.actions

export default tokenSlice.reducer
