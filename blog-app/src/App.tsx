import './App.css';
import CardsList from './components/CardsList/CardsList';
import * as React from "react";
import Header from "./components/Header/Header";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchToken, setToken} from "./features/token/tokenSlice";
import {InternalAxiosRequestConfig} from "axios";

export default function App(): React.JSX.Element {
    const dispatch = useDispatch();
    const axiosConfig = { auth: { username: import.meta.env.VITE_CLIENT_ID, password: 'xQJPwicUqjnXixMNK6KCsd2OqCqCCg' },
        headers: { "Content-type": "application/x-www-form-urlencoded" } } as InternalAxiosRequestConfig;

    useEffect(() => {
        if (!sessionStorage.blogAppToken) {
            const url = new URL(window.location.href);
            if (url.pathname === '/auth') {
                const code = url.searchParams.get("code");
                dispatch(fetchToken({ code, axiosConfig }));
            }
        } else {
            dispatch(setToken(sessionStorage.blogAppToken));
        }
    }, []);

    return (
        <div className = 'App' >
            <Header />
            <CardsList />
        </div>
    );
}
