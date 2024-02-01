import './App.css';
import * as React from "react";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchToken, setToken} from "./features/token/tokenSlice";
import {InternalAxiosRequestConfig} from "axios";
import {Route, Routes, useNavigate} from 'react-router-dom';
import {Post} from "./components/Post/Post";
import NotFound from "./components/NotFound/NotFound";
import Layout from "./components/Layout/Layout";

export default function App(): React.JSX.Element {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const axiosConfig = { auth: { username: import.meta.env.VITE_CLIENT_ID, password: 'xQJPwicUqjnXixMNK6KCsd2OqCqCCg' },
        headers: { "Content-type": "application/x-www-form-urlencoded" } } as InternalAxiosRequestConfig;

    useEffect(() => {
        const url = new URL(window.location.href);
        if (!sessionStorage.blogAppToken) {
            if (url.pathname === '/auth') {
                const code = url.searchParams.get("code");
                dispatch(fetchToken({ code, axiosConfig }));
            }
        } else {
            dispatch(setToken(sessionStorage.blogAppToken));
        }
        // if (url.pathname === '/auth' || url.pathname === '/') {
        //     navigate('/posts');
        // }
    }, []);

    return (
        <div className = 'App' >
            <Routes>
                <Route path="/posts" element={<Layout />}>
                    <Route path="/posts/:id" element={<Post />} />
                </Route>
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </div>
    );
}
