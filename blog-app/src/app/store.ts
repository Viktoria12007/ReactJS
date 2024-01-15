import { configureStore } from '@reduxjs/toolkit';
import commentPostReducer from "../features/comment/commentPostSlice";
import tokenReducer from "../features/token/tokenSlice";

const store = configureStore({
    reducer: {
        commentPost: commentPostReducer,
        token: tokenReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
