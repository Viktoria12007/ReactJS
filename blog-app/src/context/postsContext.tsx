import {createContext, ReactNode} from "react";
import {usePostsData} from "../hooks/usePostsData";

export const postsContext = createContext([]);

export function PostsContextProvider({children}: { children: ReactNode}) {
    const [allPosts] = usePostsData();
    return (
        <postsContext.Provider value={allPosts}>
            {children}
        </postsContext.Provider>
    )
}
