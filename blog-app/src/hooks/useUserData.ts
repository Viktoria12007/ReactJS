import {useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";

interface IUserData {
    name?: string,
    iconImg?: string,
}

export function useUserData() {
    const [data, setData] = useState<IUserData>({});
    const token = useSelector(state => state.token.value);
    useEffect(() => {
        if (token) {
            axios.get('https://oauth.reddit.com/api/v1/me', {
                headers: { Authorization: `bearer ${token}` }
            }).then((resp) => {
                const userData = resp.data;
                setData({ name: userData.name, iconImg: userData.icon_img })
            }).catch((e) => console.error(e))
        }
    }, [token])
    return [data];
}
