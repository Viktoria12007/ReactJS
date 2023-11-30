import {useEffect, useState} from "react";

export function useToken() {
    const [token, setToken] = useState('');
    useEffect(() => {
        console.debug('useEffect in useToken', window.__token__);
        if (window.__token__) {
            setToken(window.__token__);
        }
    }, [])
    return [token];
}
