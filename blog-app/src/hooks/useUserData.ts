import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {tokenContext} from "../context/tokenContext";

interface IUserData {
    name?: string,
    iconImg?: string,
}

export function useUserData() {
    const [data, setData] = useState<IUserData>({});
    const token = useContext(tokenContext);
    useEffect(() => {
        console.debug('Попытка рендеринга');
        if (token) {
            axios.get('https://oauth.reddit.com/api/v1/me', {
                headers: { Authorization: `bearer ${token}` } // todo кажется сюда попадает пустой токен!
            }).then((resp) => {
                console.debug(resp);
                const userData = resp.data;
                setData({ name: userData.name, iconImg: userData.icon_img })
            }).catch((e) => console.error(e))
        }
    }, [token])
    return [data];
}
