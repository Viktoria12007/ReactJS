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

export const { updateComment } = commentPostSlice.actions

export const commentPost = state => state.commentPost.value;

export default commentPostSlice.reducer
