import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface СommentPostState {
    value: string
}
const initialState: СommentPostState = {
    value: ''
};

export const commentPostSlice = createSlice({
    name: 'commentPost',
    initialState,
    reducers: {
        updateComment: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
})

// Action creators are generated for each case reducer function
export const { updateComment } = commentPostSlice.actions

export default commentPostSlice.reducer
