import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

export type IPosts = {
    posts: object[],
    after: string,
    countFetch: number,
    error: string,
}
const initialState: IPosts = {
    posts: [],
    after: '',
    countFetch: 0,
    error: '',
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async({nextAfter}) => {
    const response = await axios.get('https://oauth.reddit.com/best.json?sr_detail=true',
        {
            params: {
                limit: 10,
                after: nextAfter,
            }
        });
    return response.data;
});

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<object[]>) => {
            state.posts = action.payload;
        },
        setCountFetch: (state, action: PayloadAction<number>) => {
            state.countFetch = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.fulfilled, (state: IPosts, action) => {
                state.posts = state.posts.concat(...action.payload.data.children);
                state.after = action.payload.data.after;
                state.countFetch += 1;
            })
            .addCase(fetchPosts.rejected, (state: IPosts, action) => {
                state.error = action.error.message;
                state.countFetch = 0;
            })
    },
});

export const { setPosts, setCountFetch } = postsSlice.actions;

export const posts = state => state.posts.posts;

export const postById = (state, postId) => state.posts.posts.find(post => post.data.id === postId);

export const after = state => state.posts.after;

export const countFetch = state => state.posts.countFetch;

export const error = state => state.posts.error;

export default postsSlice.reducer;
