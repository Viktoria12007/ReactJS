import './App.css';
import CardsList from './components/CardsList/CardsList';
import * as React from "react";
import Header from "./components/Header/Header";
import axios from "axios";
import type { InternalAxiosRequestConfig } from 'axios';
import {useEffect} from "react";
import {UserContextProvider} from "./context/userContext";
import {PostsContextProvider} from "./context/postsContext";
import {useDispatch} from "react-redux";
import {setToken} from "./features/token/tokenSlice";

export default function App(): React.JSX.Element {
    const dispatch = useDispatch();
    const axiosConfig = { auth: { username: import.meta.env.VITE_CLIENT_ID, password: 'xQJPwicUqjnXixMNK6KCsd2OqCqCCg' },
        headers: { "Content-type": "application/x-www-form-urlencoded" } } as InternalAxiosRequestConfig;
    useEffect(() => {
        const url = new URL(window.location.href);
        if (url.pathname === '/auth') {
            const code = url.searchParams.get("code");
            axios.post('https://www.reddit.com/api/v1/access_token',
                `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:5173/auth`,
                axiosConfig).then(({ data }) => {
                    dispatch(setToken(data.access_token));
            }).catch((e) => console.error(e));
        }
    }, []);

    return (
        <UserContextProvider value={{}}>
            <PostsContextProvider value={[]}>
                <div className = 'App' >
                    <Header />
                    <CardsList />
                </div>
            </PostsContextProvider>
        </UserContextProvider>
    );
}
