import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from "axios";

interface IUser {
    userData: {
        name?: string,
        iconImg?: string,
    },
    status: 'idle' | 'loading' | 'success' | 'failed',
    error: string,
}

const initialState: IUser = {
    userData: {},
    status: 'idle',
    error: '',
};

export const fetchUserData = createAsyncThunk('user/fetchUserData',async (token) => {
    const response = await axios.get('https://oauth.reddit.com/api/v1/me', {
        headers: { Authorization: `bearer ${token}` }
    });
    return response.data;
});

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<object>) => {
            state.userData = action.payload;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUserData.pending, (state: IUser, action) => {
                state.status = 'loading';
            })
            .addCase(fetchUserData.fulfilled, (state: IUser, action) => {
                state.status = 'success';
                state.userData = { name: action.payload.name, iconImg: action.payload.icon_img };
            })
            .addCase(fetchUserData.rejected, (state: IUser, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                console.debug(state.error);
            })
    },
})

export const { setUserData } = userSlice.actions;

export const userData = state => state.user.userData;
export const userStatus = state => state.user.status;

export default userSlice.reducer
