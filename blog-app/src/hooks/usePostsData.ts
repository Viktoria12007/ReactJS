import {useEffect, useState} from "react";
import axios from "axios";

export function usePostsData() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('https://oauth.reddit.com/best.json?sr_detail=true').then((resp) => {
            setPosts(resp.data.data.children);
        }).catch((e) => console.error(e))
    }, []);
    return [posts]
}
