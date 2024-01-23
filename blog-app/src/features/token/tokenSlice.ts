import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from "axios";

export interface IToken {
    value: string,
    error: string,
}
const initialState: IToken = {
    value: '',
    error: '',
};

export const fetchToken = createAsyncThunk('token/fetchToken', async ({ code, axiosConfig }) => {
    const response = await axios.post('https://www.reddit.com/api/v1/access_token',
        `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:5173/auth`,
        axiosConfig);
    return response.data;
});

export const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchToken.fulfilled, (state: IToken, action) => {
                state.value = action.payload.access_token;
                sessionStorage.blogAppToken = action.payload.access_token;
            })
            .addCase(fetchToken.rejected, (state: IToken, action) => {
                state.error = action.error.message;
                console.debug(state.error);
            })

    },
})

export const { setToken } = tokenSlice.actions;

export const tokenValue = state => state.token.value;

export default tokenSlice.reducer
